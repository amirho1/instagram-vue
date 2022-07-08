<script lang="ts" setup>
import styles from "./card.module.scss";
import {
  f7Card,
  f7CardHeader,
  f7CardContent,
  f7CardFooter,
} from "framework7-vue";
import Avatar from "../avatar/avatar.vue";
import Icon from "../icon/icon.vue";
</script>

<template>
  <f7-card no-shadow :class="styles.card">
    <f7-card-header :class="[styles.noBorder, styles.cardHeader]">
      <div :class="styles.pageInfo">
        <Avatar />
        <div :class="styles.pageName">page name</div>
      </div>

      <Icon>more_vert</Icon>
    </f7-card-header>

    <f7CardContent :class="styles.cardContent">
      <img src="../../assets/card.jpg" alt="card" :class="styles.cardImg" />
    </f7CardContent>

    <f7-card-footer :class="styles.noBorder">
      <div :class="styles.footerTools">
        <Icon color="red">favorite</Icon>
      </div>
    </f7-card-footer>
  </f7-card>
</template>
