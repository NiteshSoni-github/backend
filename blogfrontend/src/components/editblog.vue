s<template>
  <v-form method="POST" enctype="multipart/form-data">
    <v-container fluid style="background-color:#EFFDFF">
      <!-- create blog heading-->
      <v-row>
        <v-col cols="12" lg="2" class="d-none d-md-none d-lg-block"></v-col>
        <v-col cols="12" md="12" lg="8">
          <v-row>
            <v-col cols="12">
              <v-card-actions class="mx-n2">
                <span class="title d-none d-sm-block">EDIT YOUR BLOG</span>                   
                
              
      <div class="flex-grow-1 d-none d-sm-block"></div>
                <v-btn class=" black--text" @click="draft">
                  <span>Draft</span>                
                  <v-icon right dark >save</v-icon>
                </v-btn>
                <div class="flex-grow-1 d-flex d-sm-none"></div>
                <v-btn color="info" class="ml-2 white--text" @click="overlay = !overlay">
                  <span>preview</span>
                  <v-icon right dark >remove_red_eye</v-icon>
                </v-btn>

                <v-btn color="success" class="ml-2 white--text d-none d-sm-block" @click="publish">
                  <span>Publish</span>
                  <v-icon right dark >mdi-cloud-upload</v-icon>
                </v-btn>
        </v-card-actions>
                <v-card-actions class="mx-n2">
              
             <v-btn color="success" block class="white--text d-flex d-sm-none" @click="publish">
                  <span>Publish</span>
                  <v-icon right dark >mdi-cloud-upload</v-icon>
                </v-btn>
                </v-card-actions>
            <v-overlay :value="overlay">
              <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <!-- write title for the blog-->
          <v-row>
            <v-col cols="12" sm="12" md="5" lg="5">
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

            <v-col cols="12" sm="6" md="4" lg="4">
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

            <v-col cols="12" sm="6" md="3" lg="3">
              <p>Thumbnail</p>
               <img width='200' height='100' v-bind:src="imagePreview" v-show="showPreview"/>
              <v-file-input
                background-color="white"
                v-model="files"
                class="mb-n12"
                color="deep-purple accent-4"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                v-on:change="handleFileUpload()"
                outlined
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p>Blog</p>
              <v-card>
               <vue-editor
                  id="editor"
                  useCustomImageHandler
                  @image-added="handleImageAdded"
                  :editorOptions="editorSettings"
                  v-model="content"
                ></vue-editor>
                <!--" -->
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
        <v-col cols="12" lg="2" class="d-none d-md-none d-lg-block"></v-col>
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
import router from "../router";

export default {
  components: {
    VueEditor,
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
      showPreview: true,
      imagePreview: '',
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
      isImageChange:false,
      i:'',
      id:'',
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

  
created() {
  if(!localStorage.getItem('token'))
  {
    this.$router.push({ name: "showblog" });
  }
  else{
    if(localStorage.getItem('error'))
    {
      let blog = JSON.parse(localStorage.getItem('error'));
      this.id = blog.id;
      this.title = blog.name;
      this.category = blog.calories;
      this.content = blog.content;
      this.discription = blog.discription;
      this.i = blog.image;
      this.imagePreview = "http://127.0.0.1:3333/uploads/draftPicture/"+blog.image;
      localStorage.removeItem('error');
   }
  }
},
  methods: {
     handleFileUpload()
    { 
      this.isImageChange = true;    
     this.imagePreview= URL.createObjectURL(this.files);   
     
    },
    setEditorContent: function() {
      this.content = "<p>dfgcncdc</p>";
    },
    handleSavingContent: function() {
      // You have the content to save
      console.log(this.content);
    },

    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      let formData = new FormData();
      // console.log(file);
      formData.append("image1", file);

      let url = "http://127.0.0.1:3333/testing";
      let data = formData;
      //  console.log(data);
      let options = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      // console.log(data);
      await HTTP()
        .post(url, data, options)
        .then(result => {
          console.log(result);

          if (result.data == 1) {
            alert("image uploaded successfully");
          } else {
            alert("Error while uploading blog");
          }
          let url = result.data; // Get url from response
          Editor.insertEmbed(cursorLocation, "image1", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },
    async publish() {
      this.overlay = !this.overlay;
      let data = new FormData();
      data.append("draft",true)
      data.append("title", this.title);
      data.append("category", this.category);
      data.append("content", this.content);
      data.append("discription", this.discription);
      data.append("token", localStorage.getItem("token"));
      data.append("blogId", this.id);
      if(this.isImageChange)
      {
      data.append("image", this.files);
      data.append("isImageChange",true)
      }
      else
      {
        data.append("image", this.i);
        
      }
      let url = "http://127.0.0.1:3333/publishblog";
      let options = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      await HTTP()
        .post(url, data, options)
        .then(data => {
          if (data.data == 1) {
            alert("Blog uploaded successfully");
            this.$router.push({ name: "showblog" });
          } else {
            alert("Error while uploading blog");
          }
        });
    },
// -------------------------------------DRAFT BLOG --------------------------------
    async draft(){
    // this.overlay = !this.overlay
      let data = new FormData();
     data.append("blogId", this.id);
      data.append("draft",true)
      data.append("title", this.title);
      data.append("category", this.category);
      data.append("content", this.content);
      data.append("discription", this.discription);
      data.append("token", localStorage.getItem("token"));      
      if(this.isImageChange)
      {
      data.append("image", this.files);
      data.append("isImageChange",true)
      }
      else
      {
        data.append("image", this.i);
        
      }
      let url = "http://127.0.0.1:3333/draftblog";
      let options = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      await HTTP()
        .post(url, data, options)
        .then(data => {
          if (data.data == 1) {
            alert("Blog drafted successfully");
            this.$router.push({ name: "manageblog" });
          } else {
            alert("Error while draft blog");
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