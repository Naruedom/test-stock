<template>
  <div>
    <v-data-table
      v-show="show"
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
          <!-- <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider> -->
          <!-- <pre>{{stocks}}</pre> -->
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.imageUrl"
                        label="imageUrl"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                  :disabled="!editedItem.name || !editedItem.imageUrl"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.edit="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>

      <template v-slot:item.delete="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    show: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "id", align: "start", sortable: false, value: "id" },
      { text: "name", value: "name" },
      { text: "imageUrl", value: "imageUrl", width: "30%" },
      { text: "edit", value: "edit", sortable: false, width: "100px" },
      { text: "delete", value: "delete", sortable: false, width: "100px" },
    ],
    // desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      imageUrl: "",
    },
    defaultItem: {
      id: "",
      name: "",
      imageUrl: "http://via.placeholder.com/100x100?text=default",
    },
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  // created() {
  //   this.initialize();
  // },

  methods: {
    ...mapActions("stock", ["add", "edit", "delete"]),
    // initialize() {
    //   this.desserts = this.stocks;
    // },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.delete(this.editedItem);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.edit(this.editedItem);
      } else {
        this.add(this.editedItem);
      }
      this.close();
    },
  },

  computed: {
    ...mapState("stock", {
      stocks: (state) => state.stocks,
    }),

    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },

    desserts() {
      return this.stocks;
    },
  },
};
</script>