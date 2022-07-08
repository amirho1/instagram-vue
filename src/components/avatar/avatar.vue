<script setup lang="tsx">
import styles from "./avatar.module.scss";
</script>

<template>
  <div :class="[styles.avatarWrapper, styles.hasStory]">
    <img
      src="../../assets/avatar.jpg"
      alt="user avatar"
      :class="styles.avatar"
    />
  </div>
</template>
