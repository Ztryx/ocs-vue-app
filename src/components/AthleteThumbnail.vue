<template>
  <router-link :to="'/athletes/' + id">
    <v-card class="d-inline-block mx-auto athlete-card-border athlete-card-shadow">
      <v-img
        height="200"
        width="200"
        :src="photo"
        transition="scale-transition"
      ></v-img>
      <v-card-text class="text--primary athlete-bottom-card">
        <span class="title"> {{ name }} {{ surname }} </span>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: 'AthleteList',
  props: {
    id: String,
    photo: String,
    name: String,
    surname: String,
  },
};
</script>

<style lang="scss">
  .athlete-card-border {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .athlete-card-border:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #00B0FF;
    height: 8px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .athlete-card-border:hover:before,
  .athlete-card-border:focus:before,
  .athlete-card-border:active:before {
    right: 0;
  }
  .athlete-card-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
  }
  .athlete-card-shadow:hover, .athlete-card-shadow:focus, .athlete-card-shadow:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
</style>
