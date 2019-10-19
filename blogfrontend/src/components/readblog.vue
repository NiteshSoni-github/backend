<template>
  <v-form>
    <v-container fluid style="background-color:#EFFDFF">
      <!-- create blog heading-->
      <v-row>
        <v-col cols="2" class="d-none d-md-block"></v-col>
        <v-col md="8" cols="12">
          <v-row>
            <v-col cols="12" class="pb-0 pt-0">
              <v-row>
                <v-col v-for="n in 1" :key="n" cols="12">
                  <v-card class="mx-auto">
                    <v-row class="mb-n6">
                      <v-col cols="12" class="mt-n3 mb-5">
                        <v-img
                          class="white--text"
                          height="200px"
                          :src="imageSrc + data.image"
                        >
                        
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
                      <v-card-text class="headline text-center ">
                       {{data.title}}
                        <br />
                        <v-btn
                          text
                          color="deep-purple accent-4"
                          @click="show = !show"
                        >{{ show ? 'Close' : 'Discription' }}</v-btn>
                        </v-card-text>
                        <v-expand-transition class="d-flex justify-start" >
                          <div v-show="show">
                            <v-card-text>
                              {{data.discription}}
                            </v-card-text>
                          </div>
                        </v-expand-transition>
                      
                    </v-card-title>
                 
          
                        <v-divider></v-divider>
                        <vue-editor class="toolbarhidden" v-model="content" disabled></vue-editor>
            
                 
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { VueEditor } from "vue2-editor";
import router from '../router'
import store from "../store"
import axios from 'axios'
import HTTP from '../http'
export default {
  props: ['id'],
  components: { VueEditor },

  data: () => ({
   data:[],
    show: false,
    content: null,
    imageSrc : 'http://127.0.0.1:3333/uploads/blogPicture/'
  }),
  beforeMount() {
        this.showData();
    },
  methods: {
    setEditorContent: function() {
      // this.content =
      //   '<p><span style="color: rgb(0, 0, 0);">NEW DELHI: Telecom regulator Trai will take additional time to finalise its views on Over-The-Top (OTT) norms and issues around lawful interception and security are expected to be the key focus, an official said.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">The Telecom Regulatory Authority of India (Trai) deliberations on the issue may take at least one more month to conclude, as it is looking at international practices and regulations around OTTs, particularly on security-related aspects.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">OTT services refer to applications and services that are accessible over the internet and ride on an operators network. Skype, Viber, WhatsApp and Hike are some of the popular and widely-used OTT services.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">A senior Trai official said that the regulator wants to take a "practical approach" to the OTT issue.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Moreover, OTT usage is also benefiting telcos given the spike in data consumption and traffic, and hence any argument about such services merely riding free on telecom netwo&nbsp;..</span></p><p><br></p><p>Read more at:</p><p><a href="https://economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 77, 153);">//economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst</a></p><p><br></p><p><br></p><p>Read more at:</p><p><a href="https://economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 77, 153);">//economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst</a></p><p><br></p><p><span style="color: rgb(0, 0, 0);">NEW DELHI: Telecom regulator Trai will take additional time to finalise its views on Over-The-Top (OTT) norms and issues around lawful interception and security are expected to be the key focus, an official said.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">The Telecom Regulatory Authority of Indias (Trai) deliberations on the issue may take at least one more month to conclude, as it is looking at international practices and regulations around OTTs, particularly on security-related aspects.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">OTT services refer to applications and services that are accessible over the internet and ride on an operators network. Skype, Viber, WhatsApp and Hike are some of the popular and widely-used OTT services.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">A senior Trai official said that the regulator wants to take a "practical approach" to the OTT issue.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Moreover, OTT usage is also benefiting telcos given the spike in data consumption and traffic, and hence any argument about such services merely riding free on telecom netwo&nbsp;..</span></p><p><br></p><p>Read more at:</p><p><a href="https://economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 77, 153);">//economictimes.indiatimes.com/articleshow/71407266.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst</a></p><p><br></p><p><br></p>';
    },
   async showData(){
        let id  = this.id;
          await axios
             .get('http://127.0.0.1:3333/getParticularBlogData',{
            params: {
              id
            }
          })         
         .then((data)=>{
                this.data = data.data
                this.content = this.data.content;
                console.log(this.data)
               }) 
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