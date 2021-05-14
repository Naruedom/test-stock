<template>
  <v-card>
    <!-- <v-subheader>List</v-subheader> -->
    <v-list two-line>
      <template v-for="stock in stocks">
        <v-list-item :key="stock.id">
          <v-list-item-avatar color="grey darken-1">
            <v-img :alt="`${stock.name} avatar`" :src="stock.imageUrl"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ stock.name }}</v-list-item-title>

            <v-list-item-subtitle> {{ stock.imageUrl }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider> -->
      </template>
    </v-list>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  // data: () => ({ }),
  computed: {
    ...mapState("stock", {
      stocks: (state) => state.stocks,
    }),
  },
};
</script>