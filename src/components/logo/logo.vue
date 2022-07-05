<script setup>
import styles from "./logo.module.scss";

console.log(styles);
</script>

<template>
  <div :class="[styles.wrapper]">
    <img src="../../assets/logo.png" alt="instagram logo" />
    <span> with </span>
    <img src="../../assets/Vue.svg.png" alt="vue logo" width="50" height="50" />
  </div>
</template>
