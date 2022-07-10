<script setup lang="ts">
import Logo from "../components/logo/logo.vue";
import styles from "./styles/preLogin.module.scss";
import { f7, f7Preloader } from "framework7-vue";
import { ref, watchEffect } from "vue";
import { isLoggedIn } from "../js/routes";

const loading = ref(true);

const onCreateNewAccountClick = () => {
  f7.view.main.router.navigate("/register");
};

watchEffect(async () => {
  try {
    const loginStatus = await isLoggedIn();
    console.log(loginStatus, "here");
    if (loginStatus) {
      f7.view.main.router.navigate("/");
    } else {
    }
  } catch (err: any) {
    loading.value = false;
  }
});
</script>

<template>
  <f7-page>
    <f7-preloader
      v-if="loading"
      color="blue"
      :class="styles.loading"
    ></f7-preloader>

    <div v-if="!loading">
      <Logo :class="styles.logo" />

      <f7-button @click="onCreateNewAccountClick" fill class="btn">
        Create New account
      </f7-button>

      <f7-link :class="styles.login" href="/login">Login</f7-link>
    </div>
  </f7-page>
</template>
