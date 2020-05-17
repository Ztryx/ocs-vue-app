<template>
  <div>
    <v-app-bar
      fixed
      color="white">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="d-flex justify-content">
        <v-img
          alt="OC Logo"
          contain
          src="@/assets/logo-oc.svg"
          transition="scale-transition"
          width="175"/>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <div class="d-flex justify-content sidebar-logo">
              <v-img
                alt="OC Logo"
                contain
                src="@/assets/logo-oc.svg"
                transition="scale-transition"
                width="175"/>
            </div>
          </v-list-item-title>
          <v-list-item-subtitle>
            <div class="d-flex justify-content sidebar-subtitle">
              OC APP
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="sidebar-divider"></div>
      <v-list
        nav
        dense>
        <v-list-item-group>
          <v-list-item @click="navigateTo('Athletes')"
                       class="sidebar-item">
              <v-list-item-icon>
                <v-icon>mdi-medal</v-icon>
              </v-list-item-icon>
              <v-list-item-title>OLYMPIC ATHLETES</v-list-item-title>
          </v-list-item>

          <v-list-item @click="navigateTo('About')"
                       class="sidebar-item">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ABOUT THIS PAGE</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data: () => ({
    drawer: false,
  }),
  methods: {
    navigateTo(option) {
      if (this.$router.currentRoute.name !== option) {
        switch (option) {
          case ('Athletes'):
            this.$router.push({ name: 'Athletes' });
            break;
          case ('About'):
            this.$router.push({ name: 'About' });
            break;
          default:
            break;
        }
      } else {
        this.drawer = false;
      }
    },
  }
  ,
};
</script>

<style lang="scss">
  .sidebar-divider {
    display: block;
    flex: 1 1 0px;
    max-width: 100%;
    max-height: 0px;
    transition: inherit;
    border: 0.5rem solid #dedede;
  }
  .sidebar-subtitle {
    margin: 1rem auto;
  }
  .sidebar-logo {
    margin-top: 1rem;
  }
  .sidebar-item:hover {
    border-bottom: 0.25rem solid #00B0FF;
  }
  .sidebar-group-active {
    border-bottom: 0.25rem solid #00B0FF;
  }
</style>
