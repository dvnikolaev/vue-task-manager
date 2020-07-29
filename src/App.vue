<template>
  <v-app>
    <AppNavigation />

    <v-main class="align-center">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/Navigation/AppNavigation";

export default {
  components: {
    AppNavigation,
  },
};
</script>
