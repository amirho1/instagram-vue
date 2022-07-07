<script setup lang="ts">
import routes from "../js/routes";
import store from "../js/store";

const f7params = {
  name: "instagram-vue",
  theme: "auto",
  store: store,
  routes: routes,
};
</script>

<template>
  <f7-app v-bind="f7params" class="app">
    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/preLogin"></f7-view>
  </f7-app>
</template>

<style>
@import "../css/app.module.scss";
@import "../css/custom.scss";
</style>
