<template>
  <v-container>
    <v-row v-for="game in athletes" :key="game.game_id">
      <v-col cols="12">
        <v-row>
          <v-col>
            <div class="game-headline">
              <h2 class="display-1"> {{ game.city }} {{ game.year }} </h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="horizontal-scrolling">
          <v-col
            v-for="athlete in game.athletes" :key="athlete.name"
            xs="12"
            sm="3"
            md="3">
            <AthleteThumbnail :id="athlete.id"
                              :photo="athlete.photo"
                              :name="athlete.name"
                              :surname="athlete.surname">
            </AthleteThumbnail>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AthleteThumbnail from './AthleteThumbnail.vue';

export default {
  name: 'AthleteList',
  components: {
    AthleteThumbnail,
  },
  props: {
    athletes: Array,
  },
};
</script>

<style lang="scss">
  .row.horizontal-scrolling {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 1rem;
  }
  .game-headline {
    background: #0D47A1;
    color: white;
    border-radius: 5px;
    padding: 1rem;
  }
</style>
