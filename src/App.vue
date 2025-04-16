<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>Flash cards - Vue App </v-app-bar-title>
      <v-spacer />
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
    </v-app-bar>

    <!-- Main content -->
    <v-main class="pa-4">
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer app color="primary"  >
      <v-col class="text-center">
        &copy; {{ new Date().getFullYear() }} Lin Flashcard Vuetify App
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
// No additional logic needed here
</script>

<style scoped>
.v-main {
  background-color: #f4f4f4;
  min-height: calc(100vh - 64px - 64px); /* App bar + footer height */
}
</style>
