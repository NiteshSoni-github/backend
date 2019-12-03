<template>
  <div class="manageblog">
    <v-container fluid style="background-color:#EFFDFF">
      <v-row>
        <v-col cols="12" lg="2" class="d-none d-lg-block"></v-col>
        <v-col cols="12" md="12" lg="8" >
          <v-tabs slot="extension" v-model="tabs" background-color="transparent" centered>
            <v-tab v-for="n in 3" :key="n">{{ items[n] }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-row>
                <v-col cols="12" class="">
                  <v-row>
                    <v-col cols="12">
                      <v-data-table
                        :headers="headers"
                        :items="draftData"
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
                          <!-- <router-link to="/editblog" exact>
                            <v-icon small class="mr-2">edit</v-icon>
                          </router-link> -->
                            <v-icon @click='editDraft(item)' small class="mr-2">edit</v-icon>
                          <v-icon small @click.stop="deleteDraftBlog(item.id)">delete</v-icon>
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
                    <v-card-title class="headline">Would like to remove this blog?</v-card-title>

                    <v-card-text>Once You Remove This Blog You Will Not Able To Recover Back This Blog In Your Profile</v-card-text>
                    <v-card-actions>
                      <div class="flex-grow-1"></div>

                      <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                      <v-btn color="green darken-1" text @click="deleteDraft(deletedraftid)">Agree</v-btn>
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
                       
                       
                      </v-toolbar>
                      <hr class="my-6" />
                    </template>
                    <template v-slot:item.action="{ item }">
                      <router-link to="/readblog" exact>
                        <v-icon small class="mr-2">remove_red_eye</v-icon>
                      </router-link>
                      <v-icon small @click.stop="dialog=true">delete</v-icon>
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

              <v-col cols="12" md="2" class=""></v-col>

              <v-dialog v-model="dialog" max-width="390">
                <v-card>
                  <v-card-title class="headline">Would like to remove this blog?</v-card-title>

                  <v-card-text>Once You Remove This Blog You Will Not Able To Recover Back This Blog In Your Profile</v-card-text>

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
                    :items="publishedData"
                    sort-by="calories"
                    class="elevation-1"
       
                 
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

                      <v-icon small @click.stop="getPublishBlogId(item.id)">delete</v-icon>
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

              <v-col cols="12" md="2" class=""></v-col>

              <v-dialog v-model="dialog" max-width="390">
                <v-card>
                  <v-card-title class="headline">Would like to remove this blog?</v-card-title>

                  <v-card-text>Once You Remove This Blog You Will Not Able To Recover Back This Blog In Your Profile</v-card-text>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>

                    <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                    <v-btn color="green darken-1" text @click="deletePublishBlog(deletePublishBlogId)">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-tab-item>
          </v-tabs-items>
          <!--------->

          <!---------->
        </v-col>
        <v-col cols="12" lg="2" class="d-none d-lg-block"></v-col>
      </v-row>

      <!---------->

      <!---------->
    </v-container>
  </div>
</template>

<script>

import axios from "axios";
import HTTP from "../http";
import router from "../router";
export default {
  data: () => ({
    deletedraftid:null,
    deletePublishBlogId:null,
    data:[],
    draftData:[],
    publishedData:[],
    tabs: null,
    items: ["ss", "Draft", "My Favourite", "Published"],
    search: null,
    singleSelect: false,
    selected: [],
    dialog: false,
    headers: [
      {
        text: "Title",
        align: "left",
      
        value: "name"
      },
      { text: "category", value: "calories" },
      { text: "status", value: "status" },
      { text: "Publish Date", value: "protein" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    dessert : [],
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
    this.getUserBlogs();
    this.initialize();
  },

  methods: {
    initialize() {
      this.dessert = [
        {
          name: "Frozen Yogurt",
          calories: "News",
          statusdraft: "Draft",
          statuspublished: "Published",
          statusfavourite: "Favourite",
          fat: 6.0,
          carbs: 24,
          protein: "07/01/2019"
        }, ] ;
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
     
      ];
    },
    // -----------------   GET USER BLOGS  -------- //
    async getUserBlogs(){     
    
      let token = localStorage.getItem('token');
       await axios
        .get("http://127.0.0.1:3333/getUserblogs", {
          params: {
            token
          }
        })
        .then(data=>{
         this.data = [...data.data];
         let len = this.data.length ;
         for(let i=0;i<len;i++)
         {
           if(!this.data[i].authorName)
           {
            let name = this.data[i].title ;
           let calories = this.data[i].category ;
           let statusdraft = "Draft";            
          let fat = 25.0 ;
          let carbs = 51 ;
          let temp  = this.data[i].updated_at ;
          temp  = temp.split(" ",1);
          let protein = temp ;
          let content = this.data[i].content ;
          let authorId = this.data[i].authorId ;
          let  id = this.data[i].id;
          let image = this.data[i].id;
          this.draftData.push({'name':name,'calories':calories,'statusdraft':statusdraft,'fat':fat,'carbs':carbs,'protein':protein,'content':content,'authorID':authorId,'id':id,'image':image})
           }
           else{
            let name = this.data[i].title ;
            let calories = this.data[i].category ;
            let statuspublished = "Published";            
            let fat = 25.0 ;
            let carbs = 51 ;
            let temp  = this.data[i].updated_at ;
             temp  = temp.split(" ",1);
            let protein = temp ;
            let content = this.data[i].content ;
            let authorId = this.data[i].authorId ;
            let  id = this.data[i].id;
            let image = this.data[i].id;
            this.publishedData.push({'name':name,'calories':calories,'statuspublished':statuspublished,'fat':fat,'carbs':carbs,'protein':protein,'content':content,'authorID':authorId,'id':id,'image':image})

           }
         }
        }).catch(err=>{
          console.log(err)
        })
        
    }, 
    // ----------- edit draft blog ----------------------//
    editDraft(obj){
     // localStorage.setItem('blog',obj);
      this.$router.push({ name: "createblog" });
    } ,
    // -------------get delete draft blog id-------------------//
    deleteDraftBlog(item){
      this.dialog = true;
      this.deletedraftid=item;
    },
    //----------- delete draft ------------------------//
    async deleteDraft(item){
      let i;
      for(i=0;i<this.draftData.length;i++)
      {
        if(this.draftData[i].id==item)
        break;
      }
      this.draftData.splice(i,1);
      this.dialog = false;
      let URL = 'http://127.0.0.1:3333/deletedraft'
      await axios.delete(
        URL,
        {
        data:{
          id:item
        }}
      );

    },

    //------- GET PUBLISHED BLOG ID FOR DELETEION  ---- //
    getPublishBlogId(item){
      this.dialog = true;
      this.deletePublishBlogId=item;

    },
   // ---------- DELETE PUBLISHED BLOG -------------------- //
   async deletePublishBlog(item){
      let i;
      for(i=0;i<this.publishedData.length;i++)
      {
        if(this.publishedData[i].id==item)
        break;
      }
      this.publishedData.splice(i,1);
      this.dialog = false;
      let URL = 'http://127.0.0.1:3333/deletePublished'
      await axios.delete(
        URL,
        {
        data:{
          id:item
        }}
      );

    },







    //- -----------------------------------------------------------------------------------//
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