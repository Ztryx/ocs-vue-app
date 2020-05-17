<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sparkline
          :value="value"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          :color="color"
          auto-draw
        ></v-sparkline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AthleteScoreChart',
  props: {
    games: Array,
  },
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    value: [],
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    color: '#00B0FF',
  }),
  beforeMount() {
    this.games.forEach((game) => {
      this.value.push(game.gold * 5 + game.silver * 3 + game.bronze * 1);
    });
    this.color = this.getRandomColor().chart;
  },
  methods: {
    ...mapGetters(['getRandomColor']),
  },
};
</script>

<style lang="scss">
</style>
