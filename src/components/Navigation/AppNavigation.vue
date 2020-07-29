<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Task Manager</v-toolbar-title>
    <v-spacer></v-spacer>
    <TheNav />
  </v-app-bar>
</template>

<script>
import TheNav from './TheNav';

export default {
  components: {
    TheNav
  }
}
</script>

<style>
  .navigation__item {
    color: white;
    text-decoration: none;
  }
</style>
