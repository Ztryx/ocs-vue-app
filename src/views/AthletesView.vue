<template>
  <v-container v-if="loaded" id="athletes-view">
    <v-row class="page-title">
      <v-col cols="12">
        <h1 class="display-2"> Olympic Athletes </h1>
      </v-col>
    </v-row>
    <div class="view-divider"></div>
    <div class="content">
      <AthleteList :athletes="athletes"/>
    </div>
    <v-row v-if="!this.last_page_number || this.page_number <= this.last_page_number">
      <v-col cols="12" class="more-container">
        <button
          @click="loadMore()">
          MORE!
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AthleteList from '@/components/AthleteList.vue';

const axios = require('axios');

export default {
  name: 'AthletesView',
  components: {
    AthleteList,
  },
  data: () => ({
    loaded: false,
    page_size: 5,
    page_number: 1,
    athletes: [],
    last_page_number: null,
  }),
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      if (!this.last_page_number || this.page_number <= this.last_page_number) {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/api/athletes`, {
            params: {
              page_number: this.page_number,
              page_size: this.page_size,
            },
          })
          .then((response) => {
            this.athletes = [...this.athletes, ...response.data.data];
            this.last_page_number = response.data.last_page_number;
            this.page_number += 1;
            this.loaded = true;
          });
      }
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
  .more-container {
    text-align: center;
    button {
      background-color: #828282;
      color: white;
      font-size: 1.25rem;
      border-radius: 5px;
      padding: 1rem 0;
      width: 25%;
    }
    button:hover {
      background-color: #b4b4b4;
    }
  }
  @media only screen and (max-width: 768px) {
    .more-container button:hover {
      width: 50%;
    }
  }
</style>
