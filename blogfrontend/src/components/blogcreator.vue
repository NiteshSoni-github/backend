s<template>
  <v-form method="POST" enctype="multipart/form-data">
    <v-container fluid style="background-color:#EFFDFF">
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
                  class="ml-2 black--text"
                  @click="overlay = !overlay"
                >
                  <span>Draft</span>
                  <v-icon right dark>save</v-icon>
                </v-btn>

                <v-btn
                  color="info"
                  class="ml-2 white--text"
                  @click="overlay = !overlay"
                >
                  <span>Preview</span>
                  <v-icon right dark>remove_red_eye</v-icon>
                </v-btn>

                <v-btn
                  
                  color="success"
                  class="ml-2 white--text"
                  @click="publish"
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
                  v-model="category"
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
              <image-compressor :done="getFiles" :scale="scale" :quality="quality"></image-compressor>
              <!-- <v-file-input
                background-color="white"
                v-model="files"
                class="mb-n12"
                color="deep-purple accent-4"
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                
                outlined
              ></v-file-input>-->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p>Blog</p>
              <v-card>
                <vue-editor id="editor" :editorOptions="editorSettings" v-model="content"></vue-editor>
              <!--useCustomImageHandler @image-added="handleImageAdded" -->
              </v-card>
              <br />
              <p>Discription</p>
              <v-textarea
                v-model="discription"
                color="deep-purple accent-4"
                background-color="white"
                label="Enter discription here"
                auto-grow
                outlined
                rows="6"
                row-height="15"
              ></v-textarea>

              <v-btn @click="handleSavingContent">Save Content</v-btn>
              <v-btn @click="setEditorContent">Set Editor Content</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

import axios from "axios";
import HTTP from "../http";
import imageCompressor from "vue-image-compressor";
import router from "../router";

export default {
  components: {
    VueEditor,
    imageCompressor
  },
  data() {
    return {
      content: "<h1>Initial Content</h1>",
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      },
      image: "",
      scale: 100,
      quality: 50,
      overlay: false,
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
        "Wedding"
      ],
      discription: "",
      category: "",
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    }
  },

  methods: {
    getFiles(obj) {
      this.image = obj.original.file;
      console.log(obj);
    },
    setEditorContent: function() {
      this.content = "<p>dfgcncdc</p>";
    },
    handleSavingContent: function() {
      // You have the content to save
      console.log(this.content);
    },

 
    // async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
    //   // An example of using FormData
    //   // NOTE: Your key could be different such as:
    //   // formData.append('file', file)
    //   let formData = new FormData(); 
    //   console.log(file);       
    //   formData.append("image1", file);

    //    let url= "http://127.0.0.1:3333/testing"; 
    //    let data= formData;
    //    let options = {
    //     headers: {
    //       "content-type": "multipart/form-data"
    //     }
    //   };
    //   // console.log(data);
    //  await HTTP()
    //     .post(url, data, options)
    //     .then(result => {
    //       // console.log(result);
          
    //       if (result.data == 1) {
    //         alert("image uploaded successfully");  
    //       } else {
    //         alert("Error while uploading blog");
    //       }
    //       let url = result.data; // Get url from response
    //       Editor.insertEmbed(cursorLocation, "image1", url);
    //       resetUploader();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    async publish() {
      this.overlay = !this.overlay;
      let data = new FormData();
      data.append("title", this.title);
      data.append("category", this.category);
      data.append("content", this.content);
      data.append("discription", this.discription);
      data.append("token", localStorage.getItem("token"));
      data.append("image", this.image);
      let url = "http://127.0.0.1:3333/publishblog";
      let options = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      console.log(data);
      await HTTP()
        .post(url, data, options)
        .then(data => {
          console.log(data);
          if (data.data == 1) {
            alert("Blog uploaded successfully");
            this.$router.push({ name: "showblog" });
          } else {
            alert("Error while uploading blog");
          }
        });
      
    }
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