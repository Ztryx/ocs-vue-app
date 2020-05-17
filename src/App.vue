<template>
  <v-app>
    <TopBar/>
    <v-content class="app-container">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    TopBar,
  },
};
</script>

<style lang="scss">
  $body-font-family: 'Work Sans', serif;

  .justify-content {
    justify-content: center;
  }
  .app-container {
    margin-top: 4rem;
  }
</style>
