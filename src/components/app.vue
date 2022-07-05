<script setup lang="ts">
import routes from "../js/routes";
import store from "../js/store";
import { f7, f7ready, f7Page } from "framework7-vue";

const f7params = {
  name: "instagram-vue",
  theme: "auto",
  store: store,
  routes: routes,
};

function onLanguageClick() {}
</script>
<template>
  <f7-app v-bind="f7params" class="app">
    <f7-page>
      <span
        @click="onLanguageClick"
        class="lang-btn"
        style="background-color: transparent"
      >
        English (Iran) <f7-icon icon="house"></f7-icon>
      </span>

      <!-- Your main view, should have "view-main" class -->
      <f7-view main class="safe-areas" url="/preLogin"></f7-view>
    </f7-page>
  </f7-app>
</template>

<style>
@import "../css/app.module.scss";
</style>
