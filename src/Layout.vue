<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item link to="/welcome">
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/stock">
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Stock</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="list">
            <v-list-item-action>
              <v-icon>mdi-file</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>PRTR TEST</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row>
            <v-col>
              <router-view/>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),
  methods: {
    ...mapActions("login", ["Logout"]),
    logout() {
      this.Logout();
    },
  },
};
</script>
