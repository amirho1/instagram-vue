<script setup lang="tsx">
import {
  f7Toolbar,
  f7Navbar,
  f7NavLeft,
  f7Link,
  f7NavRight,
  f7Page,
} from "framework7-vue";
import styles from "./styles/home.module.scss";
import Card from "../components/card/card.vue";
</script>

<template>
  <f7-page>
    <f7-navbar :class="styles.navbar" no-shadow bg-color="white">
      <f7NavLeft :class="styles.left">
        <img
          src="../assets/logo.png"
          alt="instagram logo"
          :class="styles.logo"
        />
      </f7NavLeft>

      <f7-nav-right :class="styles.right">
        <f7-link color="black">
          <svg
            aria-label="Direct"
            class="_ab6-"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div :class="styles.cards">
      <Card />
    </div>

    <f7-toolbar
      position="bottom"
      no-shadow
      :class="styles.toolbar"
      bg-color="white"
    >
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
  </f7-page>
</template>
