<template>
  <v-form>
    <v-container fluid style="background-color:#EFFDFF">
      <!-- create blog heading-->
      <v-row>
        <v-col cols="2" md="2" lg="2" class="d-none d-md-none d-lg-block"></v-col>
        <v-col md="12" lg="8" cols="12" class="d-none d-sm-block">
          <v-row>
            <v-col cols="12" class="pb-0 pt-0">
              <v-row>
                <v-col v-for="n in 1" :key="n" cols="12">
                  <v-card class="mx-auto">
                    <v-row class="mb-n6">
                      <v-col cols="12" class="mt-n3 mb-5">
                        <v-img class="white--text" height="200px" :src="imageSrc + data.image">
                          <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn color="orange">Share</v-btn>
                            <v-btn>
                              <v-icon left>bookmark_border</v-icon>Add To Favorite
                            </v-btn>
                          </v-card-actions>
                        </v-img>
                      </v-col>

                      <v-col cols="12" class="text-center mt-1">
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
                                <span class="subtitle-2 font-weight-bold">{{data.authorName}}</span>
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
                    <v-row>
                      <v-col class="mt-1">
                        <br />
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                    <v-card-title class="fill-height mt-n5">
                      <v-card-text class="headline text-center">
                        {{data.title}}
                        <br />
                        <v-btn
                          text
                          color="deep-purple accent-4"
                          @click="show = !show"
                        >{{ show ? 'Close' : 'Discription' }}</v-btn>
                      </v-card-text>
                      <v-expand-transition class="d-flex justify-start">
                        <div v-show="show">
                          <v-card-text>{{data.discription}}</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card-title>

                    <v-divider></v-divider>
                    <vue-editor class="toolbarhidden" v-model="content" disabled></vue-editor>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12"></v-col>
          </v-row>
        </v-col>
       
          <v-col v-for="n in 1" :key="n" md="8" cols="12" class="d-sm-none mt-n12">
            <v-card class="mx-auto my-12" max-width="374">
              <v-img height="150" :src="imageSrc + data.image">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="orange">Share</v-btn>
                  <v-btn>
                    <v-icon left>bookmark_border</v-icon>Add To Favorite
                  </v-btn>
                </v-card-actions>
              </v-img>
              <a @click="goToPost(data.id)">
                <v-card-title class="mb-n6 subtitle-1 align-end title fill-height">{{data.title}}</v-card-title>
              </a>

              <v-card-text>
                <v-row align="center" class="mx-0 mb-n2">
                  <v-col cols="6">
                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                  </v-col>
                  <v-col cols="6">Views 123k</v-col>
                </v-row>
                <v-row align="center" class="mx-0">
                  <v-col cols="6">
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
                          </v-avatar>
                          {{data.authorName}}
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
                  <v-col cols="6">{{data.created_at}}</v-col>
                </v-row>
              </v-card-text>
              <v-col class=" my-n5">
                <v-divider></v-divider>
              </v-col>

              <v-card-title class="fill-height ">
                <v-card-text class="subtitle-1 text-center my-n5">
                  <!-- {{data.title}} -->
                  
                  <v-btn
                    text
                    color="deep-purple accent-4"
                    @click="show = !show"
                  >{{ show ? 'Close' : 'Discription' }}</v-btn>
                </v-card-text>
                <v-expand-transition class="d-flex justify-start">
                  <div v-show="show">
                    <v-card-text>{{data.discription}}</v-card-text>
                  </div>
                </v-expand-transition>
              </v-card-title>

              <v-divider></v-divider>
              <vue-editor class="toolbarhidden" v-model="content" disabled></vue-editor>
            </v-card>
          </v-col>
    

        <v-col cols="2" md="2" lg="2" class="d-none d-md-none d-lg-block"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { VueEditor } from "vue2-editor";
import router from "../router";
import store from "../store";
import axios from "axios";
import HTTP from "../http";
export default {
  props: ["id"],
  components: { VueEditor },

  data: () => ({
    data: [],
    show: false,
     rating: 4,
    menu: false,
    content: null,
    imageSrc: "http://127.0.0.1:3333/uploads/blogPicture/"
  }),
  beforeMount() {
    this.showData();
  },
  methods: {
    setEditorContent: function() {
      // this.content =
      //   '<p><span style="color: rgb(0, 0, 0);">NEW DELHI: Telecom regulator Trai will take additional time to finalise its views on Over-The-Top (OTT) norms and issues around lawful interception and security are expected to be the key focus, an official said.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">The Telecom Regulatory Authority of India (Trai) deliberations on the issue may take at least one more month to conclude, as it is looking at international practices and regulations around OTTs, particularly on security-related aspects.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">OTT services refer to applications and services that are accessible over the internet and ride on an operators network. Skype, Viber, WhatsApp and Hike are some of the popular and widely-used OTT services.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">A senior Trai official said that the regulator wants to take a "practical approach" to the OTT issue.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Moreover, OTT usage is also benefiting telcos given the spike in data consumption and traffic, and hence any argument about such services merely riding free on telecom netwo&nbsp;..</span></p><p><br></p><p>Read more at:</p><p><a href="https://economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 77, 153);">//economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst</a></p><p><br></p><p><br></p><p>Read more at:</p><p><a href="https://economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 77, 153);">//economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst</a></p><p><br></p><p><span style="color: rgb(0, 0, 0);">NEW DELHI: Telecom regulator Trai will take additional time to finalise its views on Over-The-Top (OTT) norms and issues around lawful interception and security are expected to be the key focus, an official said.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">The Telecom Regulatory Authority of Indias (Trai) deliberations on the issue may take at least one more month to conclude, as it is looking at international practices and regulations around OTTs, particularly on security-related aspects.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">OTT services refer to applications and services that are accessible over the internet and ride on an operators network. Skype, Viber, WhatsApp and Hike are some of the popular and widely-used OTT services.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">A senior Trai official said that the regulator wants to take a "practical approach" to the OTT issue.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Moreover, OTT usage is also benefiting telcos given the spike in data consumption and traffic, and hence any argument about such services merely riding free on telecom netwo&nbsp;..</span></p><p><br></p><p>Read more at:</p><p><a href="https://economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 77, 153);">//economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst</a></p><p><br></p><p><br></p>';
    },
    async showData() {
      let id = this.id;
      await axios
        .get("http://127.0.0.1:3333/getParticularBlogData", {
          params: {
            id
          }
        })
        .then(data => {
          this.data = data.data;
          this.content = this.data.content;
          console.log(this.data);
        });
    }
  }
};
</script>

<style>
.ql-editor {
  min-height: 800px !important;
}
.toolbarhidden .ql-toolbar {
  display: none;
}
</style>