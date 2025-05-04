<template>
  <q-layout view="lHh Lpr lFf">
    <NavBar></NavBar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import NavBar from "src/components/NavBar.vue";
</script>
