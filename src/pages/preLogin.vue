<script setup lang="ts">
import Logo from "../components/logo/logo.vue";
import styles from "./styles/preLogin.module.scss";
import { f7 } from "framework7-vue";

const onCreateNewAccountClick = () => {
  f7.view.main.router.navigate("/register");
};
</script>

<template>
  <f7-page>
    <Logo :class="styles.logo" />

    <f7-button @click="onCreateNewAccountClick" fill :class="styles.btn"
      >Create New account</f7-button
    >

    <f7-link :class="styles.login" href="/login">Login</f7-link>
  </f7-page>
</template>
