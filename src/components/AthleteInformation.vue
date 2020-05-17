<template>
  <v-container class="athlete-information-container"
               :style="{ backgroundColor: this.getRandomColor().primary }">
    <v-row>
      <v-col xs="12" sm="12" md="4">
        <div class="athlete-avatar"
             :style="{boxShadow: `0.5rem 1.25rem 0 0 ${ this.getRandomColor().secondary }` }">
          <v-img
            :src="this.photo"
            transition="scale-transition"
          ></v-img>
        </div>
      </v-col>
      <v-col xs="12" sm="12" md="8">
        <v-row>
          <v-col xs="12" sm="12" md="6">
            <v-row>
              <v-col cols="12">
                <div class="attribute-label"
                     :style="{ backgroundColor: this.getRandomColor().secondary }">
                  Full Name
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                {{ fullname }}
              </v-col>
            </v-row>
          </v-col>
          <v-col xs="12" sm="12" md="6">
            <v-row>
              <v-col cols="12">
               <div class="attribute-label"
                    :style="{ backgroundColor: this.getRandomColor().secondary }">
                  Date of Birthday
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                {{ date_of_birth }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" sm="12" md="6">
            <v-row>
              <v-col cols="12">
                <div class="attribute-label"
                     :style="{ backgroundColor: this.getRandomColor().secondary }">
                  Height
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                {{ height }}
              </v-col>
            </v-row>
          </v-col>
          <v-col xs="12" sm="12" md="6">
            <v-row>
              <v-col cols="12">
                <div class="attribute-label"
                     :style="{ backgroundColor: this.getRandomColor().secondary }">
                  Weight
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                {{ weight }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AthleteInformation',
  props: {
    photo: String,
    fullname: String,
    weight: Number,
    height: Number,
    date_of_birth: String,
  },
  methods: {
    ...mapGetters(['getRandomColor']),
  },
};
</script>

<style lang="scss">
  .athlete-information-container {
    padding: 2rem;
    background: #1a237e;
    color: white;
    border-radius: 15px;
    text-align: center;
  }

  .athlete-avatar {
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    position: relative;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    width: 200px;
    height: 200px;

    img {
      border-radius: inherit;
      display: inline-flex;
      height: inherit;
      width: inherit;
    }
  }

  .attribute-label {
    border-radius: 15px;
    padding: 0.5rem 3rem;
  }
</style>
