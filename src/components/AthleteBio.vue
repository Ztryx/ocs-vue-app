<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="display-1"> Biography </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div v-html="this.html_text"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const showdown = require('showdown');

export default {
  name: 'AthleteBio',
  props: {
    bio: String,
  },
  data: () => ({
    html_text: null,
  }),
  mounted() {
    const converter = new showdown.Converter();
    this.html_text = converter.makeHtml(this.bio);
  },
};
</script>

<style lang="scss">
</style>
