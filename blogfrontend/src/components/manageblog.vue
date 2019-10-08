<template>
  <div class="manageblog">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="2" class="d-none d-md-block"></v-col>
        <v-col cols="12" md="8" class="d-none d-md-block">
          <v-tabs slot="extension" v-model="tabs" background-color="transparent" centered>
            <v-tab v-for="n in 3" :key="n">{{ items[n] }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-row>    
                <v-col cols="12" class="d-none d-md-block">
                  <v-row>
                    <v-col cols="12">
                      <v-data-table
                        :headers="headers"
                        :items="desserts"
                        sort-by="calories"
                        class="elevation-1"
                      >
                        <!-- v-model="selected"
                :single-select="singleSelect"
                item-key="name"
                        show-select-->

                        <template v-slot:top>
                          <v-toolbar flat color="white">
                            <v-toolbar-title>My Drafted Blogs</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <div class="flex-grow-1"></div>
                            <v-text-field
                              v-model="search"
                              append-icon="search"
                              label="Search"
                              single-line
                              hide-details
                            ></v-text-field>
                            <div class="flex-grow-1"></div>
                          </v-toolbar>
                          <hr class="my-6" />
                        </template>
                        <template v-slot:item.action="{ item }">
                          <router-link to="/editblog" exact>
                            <v-icon small class="mr-2">edit</v-icon>
                          </router-link>

                          <v-icon small @click.stop="dialog = true">delete</v-icon>
                        </template>
                        <template v-slot:no-data>
                          <v-btn color="primary" @click="initialize">Reset</v-btn>
                        </template>
                        <template v-slot:item.status="{ item }">
                          <v-chip color="green" small dark>{{ item.statusdraft }}</v-chip>
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
                </v-col>

                

                <v-dialog v-model="dialog" max-width="390">
                  <v-card>
                    <v-card-title class="headline">Use Google's location service?</v-card-title>

                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

                    <v-card-actions>
                      <div class="flex-grow-1"></div>

                      <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                      <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>

              
            </v-tab-item>





            <v-tab-item>
              <v-row>
                <v-col cols="12">
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    sort-by="calories"
                    class="elevation-1"
                    v-model="selected"
                    :single-select="singleSelect"
                    item-key="name"
                    show-select
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>My Favourite Blogs</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <div class="flex-grow-1"></div>
                        <v-text-field
                          v-model="search"
                          append-icon="search"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                        <div class="flex-grow-1"></div>
                        <router-link to="/createblog" exact>
                          <v-btn color="primary" dark class="mb-2" v-on="on">
                            <v-icon left>share</v-icon>Share Selected
                          </v-btn>
                        </router-link>
                      </v-toolbar>
                      <hr class="my-6" />
                    </template>
                    <template v-slot:item.action="{ item }">
                      <router-link to="/readblog" exact>
                        <v-icon small class="mr-2">remove_red_eye</v-icon>
                      </router-link>

                      <v-icon small @click.stop="dialog = true">delete</v-icon>
                    </template>
                    <template v-slot:no-data>
                      <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    <template v-slot:item.status="{ item }">
                      <v-chip color="pink" small dark>{{ item.statusfavourite }}</v-chip>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>

               <v-col cols="12" md="2" class="d-none d-md-block"></v-col>

              <v-dialog v-model="dialog" max-width="390">
                <v-card>
                  <v-card-title class="headline">Use Google's location service?</v-card-title>

                  <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>

                    <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-tab-item>




            <v-tab-item>
              <v-row>
                <v-col cols="12">
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    sort-by="calories"
                    class="elevation-1"
                    v-model="selected"
                    :single-select="singleSelect"
                    item-key="name"
                    show-select
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>My Publishd Blogs</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <div class="flex-grow-1"></div>
                        <v-text-field
                          v-model="search"
                          append-icon="search"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                        <div class="flex-grow-1"></div>
                        <router-link to="/createblog" exact>
                          <v-btn color="primary" dark class="mb-2" v-on="on">
                            <v-icon left>share</v-icon>Share Selected
                          </v-btn>
                        </router-link>
                      </v-toolbar>
                      <hr class="my-6" />
                    </template>
                    <template v-slot:item.action="{ item }">
                      <router-link to="/readblog" exact>
                        <v-icon small class="mr-2">remove_red_eye</v-icon>
                      </router-link>
                      <router-link to="/editblog" exact>
                        <v-icon small class="mr-2">edit</v-icon>
                      </router-link>

                      <v-icon small @click.stop="dialog = true">delete</v-icon>
                    </template>
                    <template v-slot:no-data>
                      <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    <template v-slot:item.status="{ item }">
                      <v-chip color="blue" small dark>{{ item.statuspublished }}</v-chip>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>

              <v-col cols="12" md="2" class="d-none d-md-block"></v-col>

              <v-dialog v-model="dialog" max-width="390">
                <v-card>
                  <v-card-title class="headline">Use Google's location service?</v-card-title>

                  <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>

                    <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-tab-item>


          </v-tabs-items>
          <!--------->

          <!---------->
        </v-col>
        <v-col cols="12" md="2" class="d-none d-md-block"></v-col>
      </v-row>

      <!---------->

      <!---------->
     
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: null,
    items: ["ss","Draft", "My Favourit",  "Published"],

    singleSelect: false,
    selected: [],
    dialog: false,
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "category", value: "calories" },
      { text: "status", value: "status" },
      { text: "Publish Date", value: "protein" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 6.0,
          carbs: 24,
          protein: "07/01/2019"
        },
        {
          name: "Ice cream sandwich",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 9.0,
          carbs: 37,
          protein: "07/01/2019"
        },
        {
          name: "Eclair",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 16.0,
          carbs: 23,
          protein: "07/01/2019"
        },
        {
          name: "Cupcake",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 3.7,
          carbs: 67,
          protein: "07/01/2019"
        },
        {
          name: "Gingerbread",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 16.0,
          carbs: 49,
          protein: "07/01/2019"
        },
        {
          name: "Jelly bean",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 0.0,
          carbs: 94,
          protein: "07/01/2019"
        },
        {
          name: "Lollipop",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 0.2,
          carbs: 98,
          protein: "07/01/2019"
        },
        {
          name: "Honeycomb",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 3.2,
          carbs: 87,
          protein: "07/01/2019"
        },
        {
          name: "Donut",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 25.0,
          carbs: 51,
          protein: "07/01/2019"
        },
        {
          name: "KitKat",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 26.0,
          carbs: 65,
          protein: "07/01/2019"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
<style lang="scss" scoped>
.manageblog a {
  color: white !important;
  text-decoration: none;
}
</style>