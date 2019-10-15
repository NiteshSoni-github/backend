<template>
  <v-form>
    <v-container fluid style="background-color:#EFFDFF">
      <!-- create blog heading-->
      <v-row>
        <v-col cols="2" class="d-none d-md-block"></v-col>
        <v-col md="8" cols="12">
          <v-row>
            <v-col cols="12"></v-col>
            <v-col cols="12">
              <v-card-actions class="mx-n2">
                <span class="headline">BLOGS</span>
                <div class="flex-grow-1"></div>
                <v-text-field
                  
                  class="ml-2 purple--text"
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

                <v-btn text color="grey" @click="show = !show" class="ml-2 white--text">
                  <span>Filter</span>
                  <v-icon bottom dark>filter_list</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>

            <v-row>
              <v-col>
                <v-expand-transition>
                  <div v-show="show">
                    <v-card-text class="mx-2">It's come very soon...</v-card-text>
                  </div>
                </v-expand-transition>
              </v-col>
            </v-row>
            <v-col cols="12" class="pb-0 pt-0">
              <v-row>
                <v-col v-for="(data, index) in data" :key="index" cols="12">
                  <v-card elevation="1" class="mx-auto">
                    <v-row class="mb-n6">
                      <v-col cols="3" class="mt-n3 mb-1">
                        <v-img
                          class="white--text"
                          height="110px"
                          :src="imageSrc + data.image"
                        ></v-img>
                      </v-col>

                      <v-col cols="9" class="text-center mt-4">
                        <v-subheader>
                          <v-container class="pa-0">
                            <v-row>
                              <v-col>
                                <v-menu
                                  v-model="menu"
                                  bottom
                                  right
                                  transition="scale-transition"
                                  origin="top left"
                                >
                                  <template v-slot:activator="{ on }">
                                    <v-chip pill v-on="on" color="#ECEFF1">
                                      <v-avatar left>
                                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                                      </v-avatar>{{data.authorName}}
                                    </v-chip>
                                  </template>
                                  <v-card width="300">
                                    <v-list color="#ECEFF1">
                                      <v-list-item>
                                        <v-list-item-avatar>
                                          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                          <v-list-item-title>{{data.authorName}}</v-list-item-title>
                                          <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                          <v-btn icon @click="menu = false">
                                            <v-icon>mdi-close-circle</v-icon>
                                          </v-btn>
                                        </v-list-item-action>
                                      </v-list-item>
                                    </v-list>
                                    <v-list>
                                      <v-list-item @click="() => {}">
                                        <v-list-item-action>
                                          <v-icon>mdi-briefcase</v-icon>
                                        </v-list-item-action>
                                        <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
                                      </v-list-item>
                                    </v-list>
                                  </v-card>
                                </v-menu>
                              </v-col>

                              <v-col>
                                <span>Views</span>
                                <br />
                                <span class="subtitle-2 font-weight-bold">123k</span>
                              </v-col>

                              <v-col>
                                <span>Publish On</span>
                                <br />
                                <span class="subtitle-2 font-weight-bold">{{data.created_at}}</span>
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
                     <a @click='goToPost(data.id)'>
                      <v-card-title
                        class="align-end title fill-height"
                      >{{data.title}}</v-card-title>
                    </a>
                    <v-card-text class="mt-n5 mb-n2">
                      <span>
                        {{data.discription}}
                      </span>
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
import axios from 'axios'
import HTTP from '../http'
import router from '../router'
import store from "../store"
export default {
  data: () => ({
    data:[],
    show: false,
    rating: 4,
    menu: false,
    imageSrc : 'http://127.0.0.1:3333/uploads/blogPicture/',
  }),
  created: function (){
    this.showAllBlogs();
  },
  methods: {
    async  showAllBlogs(){
      let token;
      if(localStorage.getItem('token'))
       token = localStorage.getItem('token') ;
      else 
       token = null ;
      await axios
      .get('http://127.0.0.1:3333/getAllBlogData',{
            params: {
              token
            }
          })
      .then( (data) => {
        console.log(data);
        if(data.data){
        store.state.blogData =this.data= [...data.data]; 
         }
         } )
      .catch(error => console.log(error))    
         },
 
  goToPost(id){
      this.$router.push({name: 'readblog', params: {id:id }})
    }
     },
};
</script>
