<template>
  <v-container v-if="this.loaded" class="athlete-view">
    <v-row class="page-title">
      <v-col cols="12">
        <h1 class="display-2"> Athlete {{this.athlete.name}} {{this.athlete.surname}}</h1>
      </v-col>
    </v-row>
    <div class="view-divider"></div>
    <div class="content">
      <AthleteInformation
        :photo="this.athlete.photo"
        :fullname="this.athlete.name + this.athlete.surname"
        :weight="this.athlete.weight"
        :height="this.athlete.height"
        :date_of_birth="this.athlete.date_of_birth">
      </AthleteInformation>
      <AthleteMedals
        :games="this.athlete.games">
      </AthleteMedals>
      <AthleteScoreChart
        v-if="this.athlete.games.length > 1"
        :games="this.athlete.games">
      </AthleteScoreChart>
      <div class="view-divider"></div>
      <AthleteBio
        :bio="this.athlete.bio">
      </AthleteBio>
    </div>
  </v-container>
</template>

<script>
import AthleteInformation from '@/components/AthleteInformation.vue';
import AthleteMedals from '@/components/AthleteMedals.vue';
import AthleteBio from '@/components/AthleteBio.vue';
import AthleteScoreChart from '@/components/AthleteScoreChart.vue';
import { mapActions } from 'vuex';

const axios = require('axios');

export default {
  name: 'AthleteView',
  props: {
    id: String,
  },
  data: () => ({
    loaded: false,
    athlete: null,
    colors: [
      {
        primary: '#0D47A1',
        secondary: '#1E88E5',
        chart: '#2979FF',
      },
      {
        primary: '#B71C1C',
        secondary: '#E53935',
        chart: '#FF1744',
      },
      {
        primary: '#212121',
        secondary: '#757575',
        chart: '#546E7A',
      },
      {
        primary: '#BF360C',
        secondary: '#F4511E',
        chart: '#FF3D00',
      },
      {
        primary: '#1B5E20',
        secondary: '#43A047',
        chart: '#00E676',
      }],
  }),
  components: {
    AthleteInformation, AthleteMedals, AthleteBio, AthleteScoreChart,
  },
  beforeMount() {
    this.setRandomColor(this.randomHeadlineColor());
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_BASE_URL}/api/athletes/${this.id}`)
      .then((response) => {
        this.athlete = response.data.data;
        this.loaded = true;
      });
  },
  methods: {
    ...mapActions([
      'setRandomColor',
    ]),
    randomHeadlineColor() {
      return this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))];
    },
  },
};
</script>

<style lang="scss">
  .page-title {
    margin: 1rem auto;
  }
  .view-divider {
    border-bottom: 0.5rem solid #dedede;
  }
  .content {
    margin-top: 2rem;
  }
</style>
