<script setup lang="tsx">
import styles from "./styles/login.module.scss";
import {
  f7Page,
  f7ListInput,
  f7Button,
  f7List,
  f7LoginScreenTitle,
} from "framework7-vue";
import { ref, watchEffect } from "vue";
import { computed } from "@vue/reactivity";
import useFetch from "../hooks/useFetch";
import { f7 } from "framework7-vue";

const email = ref("");
const password = ref("");
const visibility = ref(false);
const btnDisabled = ref("disabled");
const isEmailValid = ref(true);
const isPasswordValid = ref(true);
const spinner = ref(false);

const passwordType = computed(() => (visibility.value ? "text" : "password"));
const iconType = computed(() =>
  visibility.value ? "visibility" : "visibility_off"
);

const btnValue = computed(() =>
  !spinner.value ? "Login" : <f7-preloader color="blue" size="2"></f7-preloader>
);

watchEffect(() => {
  if (
    email.value &&
    password.value &&
    isEmailValid.value &&
    isPasswordValid.value
  )
    btnDisabled.value = "";
  else btnDisabled.value = "disabled";
});

const onVisibilityChange = () => (visibility.value = !visibility.value);

const { fetch } = useFetch(
  {
    url: "/login",
    data: { email: email.value, password: password.value },
    method: "POST",
  },
  false
);

const onSubmit = () => {
  if (email.value && password.value)
    fetch({ data: { email: email.value, password: password.value } }).then(
      data => {
        const response = data?.response;
        if (response?.status >= 400) return f7?.dialog?.alert(response.data);
        f7.view.main.router.navigate("/");
      }
    );
};

const validateEmail = (isValid: boolean) => (isEmailValid.value = isValid);
const validatePass = (isValid: boolean) => (isPasswordValid.value = isValid);
</script>

<template>
  <f7-page login-screen no-navbar no-toolbar>
    <f7-list form>
      <f7LoginScreenTitle>Login</f7LoginScreenTitle>
      <f7-list-input
        outline
        required
        :class="styles.input"
        type="email"
        placeholder="Email"
        v-model:value="email"
        clear-button
        validate
        :onValidate="validateEmail"
      ></f7-list-input>

      <div :class="styles.wrapper">
        <i
          :class="['icon', 'material-icons', styles.eye]"
          @click="onVisibilityChange"
        >
          {{ iconType }}
        </i>

        <f7-list-input
          required
          maxlength="250"
          minlength="8"
          validate
          outline
          :class="styles.input"
          :type="passwordType"
          placeholder="Password"
          v-model:value="password"
          :onValidate="validatePass"
        ></f7-list-input>
      </div>
      <f7-button @click="onSubmit" fill :class="['btn', btnDisabled]">
        {{ btnValue }}
      </f7-button>
    </f7-list>
  </f7-page>
</template>
