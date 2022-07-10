<script lang="ts" setup>
import {
  f7Page,
  f7Button,
  f7List,
  f7ListInput,
  f7Checkbox,
} from "framework7-vue";
import { ref } from "vue";
import styles from "./styles/register.module.scss";

const email = ref("");
const fullName = ref("");
const password = ref("");
const validationPassword = ref("");
</script>

<template>
  <f7-page>
    <h2>Register</h2>

    <f7-list form class="afterBeforeNone">
      <f7-list-input
        outline
        require
        placeholder="Email"
        type="email"
        v-model:value="email"
      ></f7-list-input>

      <f7-list-input
        outline
        require
        placeholder="Full name"
        type="text"
        v-model:value="fullName"
      ></f7-list-input>

      <f7-list-input
        outline
        require
        placeholder="Password"
        type="password"
        v-model:value="password"
      ></f7-list-input>

      <f7-list-input
        outline
        requir
        e
        placeholder="Validate Password"
        type="password"
        v-model:value="validationPassword"
      ></f7-list-input>

      <f7-checkbox :class="styles.register"></f7-checkbox>

      <f7-button class="btn" fill> Create </f7-button>
    </f7-list>
  </f7-page>
</template>
