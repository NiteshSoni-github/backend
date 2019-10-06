<template>
  <v-form>
    <v-container fluid>
      <!-- create blog heading-->
      <v-row>
        <v-col cols="2" class="d-none d-md-block"></v-col>
        <v-col md="8" cols="12">
          <v-row>
            <v-col cols="12"></v-col>
            <v-col cols="12">
              <v-card-actions>
                <span class="headline">BLOGS</span>
                <div class="flex-grow-1"></div>
                <v-text-field
                  v-if="!seen"
                  class="mx-2 purple--text"
                  :autofocus="true"
                  background-color="#eee"
                  color="primary"
                  clearable
                  flat
                  hide-details
                  placeholder="Search blogs"
                  prepend-inner-icon="search"
                  solo-inverted
                ></v-text-field>
             
                <v-btn text color="grey" @click="show = !show" class="ma-2 white--text">
                  <span>Filter</span>
                  <v-icon bottom dark>filter_list</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>

            <v-row>
              <v-cols>  
                <v-expand-transition>
                  <div v-show="show">
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </div>
                  
                </v-expand-transition>
              </v-cols>
            </v-row>
            <v-col cols="12" class="pb-0 pt-0">
              <v-row>
                <v-col v-for="n in 10" :key="n" cols="12">
                  <v-card elevation="1" class="mx-auto">
                    <v-row class="mb-n6">
                      <v-col cols="3" class="mt-n3 mb-5">
                        <v-img
                          class="white--text"
                          height="110px"
                          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                        ></v-img>
                      </v-col>

                      <v-col cols="9" class="text-center mt-4">
                        <v-subheader>
                          <v-container class="pa-0">
                            <v-row>
                              <v-col>
                                <span>
                                  <v-avatar size="32">
                                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                                  </v-avatar>
                                </span>
                                <br />
                                <span class="subtitle-2 font-weight-bold">Ram lal Jat</span>
                              </v-col>

                              <v-col>
                                <span>Views</span>
                                <br />
                                <span class="subtitle-2 font-weight-bold">123k</span>
                              </v-col>

                              <v-col>
                                <span>Publish On</span>
                                <br />
                                <span class="subtitle-2 font-weight-bold">12/02/2019</span>
                              </v-col>

                              <v-col>
                                <span>Rating</span>
                                <br />
                                <v-rating
                                  v-model="rating"
                                  color="yellow darken-2"
                                  background-color="grey darken-1"
                                  empty-icon="$vuetify.icons.ratingFull"
                                  half-increments
                                  hover
                                  dense
                                  size="18"
                                ></v-rating>
                              </v-col>

                              <v-col>
                                <span>Reading Time</span>
                                <br />
                                <span class="subtitle-2 font-weight-bold">10 min.</span>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-subheader>
                      </v-col>
                    </v-row>
                    <router-link to="/readblog" exact>
                      <v-card-title
                        class="align-end title fill-height"
                      >Top 10 Australian beaches Top 10 Australian beachesTop 10 Australian beaches</v-card-title>
                    </router-link>
                    <v-card-text class="mt-n5">
                      <span>description descriptiondescription description goes here</span>
                      <br />
                      <span>Click here -> https://cdn.vuetifyjs.com/images/john.jpg</span>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn text small color="orange">Share</v-btn>
                      <v-btn text small>
                        <v-icon left>bookmark_border</v-icon>Add To Favorite
                      </v-btn>

                      <div class="flex-grow-1"></div>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12"></v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    show: false,
    rating: 4
  })
};
</script>
