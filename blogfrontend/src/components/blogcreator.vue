<template>
  <v-form>
    <v-container fluid>
      <!-- create blog heading-->
      <v-row>
        <v-col cols="2" class="d-none d-md-block"></v-col>
        <v-col md="8" cols="12">
          <v-row>
            <v-col cols="12">
              <v-card-actions class="mx-n2">
                <span class="title">CREATE BLOG</span>
                <div class="flex-grow-1"></div>
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  class="ml-2 black--text"
                  @click="overlay = !overlay"
                >
                  <span>Draft</span>
                  <v-icon right dark>save</v-icon>
                </v-btn>

                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="info"
                  class="ml-2 white--text"
                  
                   @click="overlay = !overlay"
                >
                  <span>Preview</span>
                  <v-icon right dark>remove_red_eye</v-icon>
                </v-btn>

                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="success"
                  class="ml-2 white--text"
                  @click="overlay = !overlay"
                >
                  <span>Publish</span>
                  <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
            <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
          </v-row>

          <v-divider></v-divider>

          <!-- write title for the blog-->
          <v-row>
            <v-col cols="5">
              <p>Title</p>
              <v-card style="height:54px">
                <v-text-field
                  color="deep-purple accent-4"
                  class="mb-n12"
                  v-model="title"
                  label="Enter the Title"
                  outlined
                ></v-text-field>
              </v-card>
            </v-col>

            <!-- select category for blog writing-->

            <v-col cols="4">
              <p>Category</p>
              <v-card style="height:54px">
                <v-overflow-btn
                  color="deep-purple accent-4"
                  class="mb-n12"
                  :items="dropdown_font"
                  label="Select Category"
                  target="#dropdown-example"
                  outlined
                ></v-overflow-btn>
              </v-card>
            </v-col>

            <v-col cols="3">
              <p>Thumbnail</p>
              <v-file-input
                background-color="white"
                v-model="files"
                class="mb-n12"
                color="deep-purple accent-4"
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                outlined
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p>Blog</p>
              <v-card>
                <vue-editor
                  id="blog"
                  v-model="content"
                  placeholder="Write your valuable content..."
                ></vue-editor>
              </v-card>
              <br />
              
              <p>Discription</p>
              
              <v-textarea
                color="deep-purple accent-4"
                background-color="white"
                label="Enter discription here"
                auto-grow
                outlined
                rows="6"
                row-height="15"
                
              ></v-textarea>
<!--              
              <v-btn @click="handleSavingContent">Save Content</v-btn>
              <v-btn @click="setEditorContent">Set Editor Content</v-btn> -->
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

export default {
  components: { VueEditor },

  data: () => ({
    overlay: false,
    content: null,
    title: "",
    dropdown_font: [
      "Academic",
      "Animals",
      "Arts",
      "Beauty",
      "Career",
      "Celebrity Gossip",
      "Design",
      "DIY",
      "Economic",
      "Education",
      "Entertainment",
      "Environmental",
      "Fashion",
      "Finance",
      "Fitness",
      "Food",
      "Gaming",
      "Health",
      "History",
      "Law",
      "Lifestyle",
      "Marketing",
      "Medical",
      "Movie",
      "Money",
      "Music",
      "Nature",
      "Parenting",
      "Personal",
      "Pet",
      "Political",
      "Photography",
      "Practical",
      "Programming",
      "Real State",
      "SEO",
      "Shopping",
      "Social",
      "Social Media",
      "Spetiraul",
      "Sports",
      "Technology",
      "Travel",
      "University",
      "Vehicle",
      "Wine",
      "Wedding",   
    ]
  }),
  watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 3000)
      },
    },

  methods: {
    // setEditorContent: function() {
    //   this.content = ''
    // },
    // handleSavingContent: function() {
    //   // You have the content to save
    //   console.log(this.content);
    // }
  }
};
</script>


<style>
.ql-editor {
  min-height: 800px !important;
}
/* .ql-toolbar{ 
  display: none;
} */
</style>