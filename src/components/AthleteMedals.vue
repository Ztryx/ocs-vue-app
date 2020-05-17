<template>
  <v-container>
    <v-row v-for="game in games" :key="game.city">
      <v-col cols="12" md="4" align-self='center'>
        <p class="display-1"> {{ game.city }} {{ game.year }} </p>
      </v-col>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="4" xs="12">
            <v-row>
              <v-col cols="6">
                <div class="medal gold"/>
              </v-col>
              <v-col cols="6">
                <p class="display-1"> {{ game.gold }} </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" xs="12">
            <v-row>
              <v-col cols="6">
                <div class="medal silver"/>
              </v-col>
              <v-col cols="6">
                <p class="display-1"> {{ game.silver }} </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" xs="12">
            <v-row>
              <v-col cols="6">
                <div class="medal bronze"/>
              </v-col>
              <v-col cols="6">
                <p class="display-1"> {{ game.bronze }} </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AthleteMedals',
  props: {
    games: Array,
  },
};
</script>

<style lang="scss">
div.medal {
  width: 50px;
  height: 50px;
  -webkit-mask-image: url('../assets/medal.svg');
  mask-image: url('../assets/medal.svg');
  mask-position: center;
  mask-repeat: no-repeat;
}
.gold {
  background-color: #DAA520;
}
.silver {
  background-color: #C0C0C0;
}
.bronze {
  background-color: #CD7F32;
}
</style>
