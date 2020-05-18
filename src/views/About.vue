<template>
  <v-parallax
    style="height: calc(100vh);"
    src="@/assets/olympic-about.jpg">
    <div class="parallax-container">
      <v-row
        class="title-about mb-5">
        <v-col class="text-center" cols="12">
          <h1 class="display-4"> About Page </h1>
        </v-col>
      </v-row>
      <v-row
        class="mb-3">
        <v-col class="text-center" cols="12">
          <h2 class="display-2"> Purpose of this Web </h2>
        </v-col>
      </v-row>
      <v-row class="about-content mb-5"
             align="center"
             justify="center">
        <v-col class="text-center" cols="12">
          <p class="headline">
            This web has been created for OLYMPIC CHANNEL as a proof of platform concept
          </p>
        </v-col>
      </v-row>
      <v-row
        class="mb-3">
        <v-col class="text-center" cols="12">
          <h2 class="display-2 font-weight-thin"> About Technology </h2>
        </v-col>
      </v-row>
      <v-row class="about-content mb-5">
        <v-col class="text-center" cols="12">
          <v-row class="section-description">
            <v-col cols="12">
              <p class="headline">
                This website has been designed from scratch with Vue.js
                and Vuetify design elements as SPA.
              </p>
              <p class="headline">
                There are different design patterns involved as
                Parent-Child communication, Cross communication and State managed communication
                making It reactive with Vuex.
              </p>
              <p class="headline">
                Some of the decisions regarding styles have been made
                taking into account various cases, in order to offer several choices
                when It comes to design.
                There is an example of this resource as random colour palette that could be checked
                by here:
              </p>
              <v-btn
                class="button-link"
                color="secondary"
                @click="navigateTo('random-color')">
                I'd like to check It!
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        class="mb-3">
        <v-col class="text-center" cols="12">
          <h2 class="display-2 font-weight-thin"> Who am I? </h2>
        </v-col>
      </v-row>
      <v-row class="about-content mb-5">
        <v-col class="text-center" cols="12">
          <v-row class="section-description">
            <v-col cols="12">
              <p class="headline">
                Not a typical IT guy currently working as freelancer (Soft joke)<br/>
                After several experiences working from Startup-Likely-Enterprise
                to HP and Cisco, I saw myself in the mirror one day and I decided to get
                myself deeply into new and cutting-edge technology projects.
              </p>
              <p class="headline">
                Travel through the world has changed my life, I like clean code and to do
                PRs without breaking any code...
              </p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-card
                class="gif-card mx-auto"
                max-width="200"
                outlined>
                <v-img
                  alt="About Gif"
                  src="@/assets/about.gif"
                  transition="scale-transition"/>
                <v-btn
                  class="button-link"
                  color="secondary"
                  @click="navigateTo('github')">
                  GITHUB!
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mb-3">
        <v-col class="text-center" cols="12">
          <h2 class="display-2"> Olympic Channel </h2>
        </v-col>
      </v-row>
      <v-row class="about-content mb-5">
        <v-col class="text-center" cols="12">
          <v-row class="section-description">
            <v-col cols="12">
              <p class="headline">
                Olympic Channel is an over-the-top Internet television service
                operated by the International Olympic Committee.
              </p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-card
                class="logo-card mx-auto"
                max-width="300"
                outlined>
                <v-img
                  alt="About OC"
                  src="@/assets/logo-oc.svg"
                  class="logo"
                  transition="scale-transition"/>
                <v-btn
                  class="button-link"
                  color="secondary"
                  @click="navigateTo('oc-website')">
                  WEBSITE
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-parallax>
</template>

<script>
export default {
  name: 'About',
  methods: {
    navigateTo(option) {
      switch (option) {
        case ('random-color'):
          this.$router.push({ name: 'Athlete', params: { id: '1' } });
          break;
        case ('github'):
          window.open('https://github.com/Ztryx', '_blank');
          break;
        case ('oc-website'):
          window.open('https://www.olympicchannel.com', '_blank');
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
  .title-about {
    margin-top: 3rem;
  }
  .parallax-container {
    padding: 0 2rem;
    overflow: scroll;
  }
  .about-content {
    padding: 0.5rem;
    background-color: #0000004a;
    border-radius: 15px;
  }
  .button-link {
    width: 100%;
  }
  div.v-card.gif-card {
    border: none;
    background-color: #0000004a;
  }
  div.v-card.logo-card {
    padding: 1rem;
    border: none;
    background-color: white;
  }
  .logo {
    margin: 1rem 0;
  }
  .button-link {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  .button-link:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .button-link:hover, .button-link:focus, .button-link:active {
    color: white;
  }
  .button-link:hover:before, .button-link:focus:before, .button-link:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
</style>
