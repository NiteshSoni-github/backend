<template>
  <div class="manageblog">
    <v-container fluid style="background-color:#EFFDFF">
      <v-row>
        <v-col cols="12" md="2" lg="2" class="d-none d-md-none d-lg-block"></v-col>
        <v-col cols="12" md="12" lg="8" >
          <v-card-actions class="mt-12 mb-6">
            <div class="flex-grow-1"></div>
            <span class="display-3 font-weight-thin">Profile</span> 
            <div class="flex-grow-1"></div>
          </v-card-actions> 
          <v-card-actions class="mx-n2">
            <span class="title font-weight-regular">1. Personal Information</span>
          </v-card-actions>

          <v-card color="white" :loading="isUpdating">
            <template v-slot:progress>
              <v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
            </template>
           
              <v-row>
                <v-col class="text-right" cols="12">
                  <v-btn
                    color="primary"
                    fab
                    small
                    @click="isEditing = !isEditing"
                    class="mr-6"
                  >
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                  </v-btn>
                </v-col>
               
              </v-row>
         
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="first_name"
                      :disabled="!isEditing"
                      filled
                     
                      label="First Name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="mid_name"
                      :disabled="!isEditing"
                      filled
                 
                      label="Mid Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="last_name"
                      :disabled="!isEditing"
                      filled
                 
                      label="Mid Name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="mobile"
                      :disabled="!isEditing"
                      filled
                     
                      label="Mobile"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="email"
                      :disabled="!isEditing"
                      filled
                     
                      label="Email"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-select
                      v-model="age"
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                      :disabled="!isEditing"
                      filled
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <v-autocomplete
                      v-model="friends"
                      :disabled="!isEditing"
                      :items="people"
                      filled
                      chips
                     
                      label="Interest"
                      item-text="name"
                      item-value="name"
                      multiple
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          color="#E1F5FE"
                         
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          close
                          @click="data.select"
                          @click:close="remove(data.item)"
                        >{{ data.item.name }}</v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-item-content v-text="data.item"></v-list-item-content>
                        </template>
                        <template v-else>
                          <v-list-item-content>
                            <v-list-item-title v-html="data.item.name"></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn 
              @click="updateProfile">
              <v-btn
                :disabled="!isEditing"
                :loading="isUpdating"
                color="primary"
                depressed
                @click="isUpdating = true"
              >
                <v-icon left>mdi-update</v-icon>Save Updates
              </v-btn>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card-actions class="mt-8 mx-n2">
            <span class="title font-weight-regular">2. Not-Personal Information :)</span>
          </v-card-actions>
        </v-col>

        <v-col cols="12" md="2" lg="2" class="d-none d-md-none d-lg-block"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import HTTP from "../http";
import router from "../router";
import store from "../store";
export default {
  data() {
    return {
      data :[],
      id:null,
      isEditing: null,
      autoUpdate: true,
      friends: [],
      isUpdating: false,
      first_name: "Akshay",
      mid_name: "Kumar",
      last_name: "Solanki",
      email: "aks@gmail.com",
      age: "0-17",

      people: [
        { header: "Interest List" },
        { name: "Sports" },
        { name: "Hockey" },
        { name: "Soccer" },
        { name: "Reading" },
        { name: "Singing" },
        { name: "Learn New Technology" },
        { name: "Traveling" },
        { name: "Coding" }
      ],
      mobile: "9414179914"
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
created: function() {
    this.showUserData();
  },
  methods: {
    async showUserData() {
      let token;
      if (localStorage.getItem("token")) token = localStorage.getItem("token");
      else token = null;
      await axios
        .get("http://127.0.0.1:3333/getUserData", {
          params: {
            token
          }
        })
        .then(data => {
          if (data.data) {
            this.data  = data.data;
          }
        })
        .catch(error => console.log(error));
            this.first_name =this.data.f_name;
            this.mid_name = this.data.m_name;
            this.last_name = this.data.l_name,
            this.email = this.data.email;
            this.mobile = this.data.mobile;
            this.age = this.data.age;
           // this.gender = this.data.gender;
            var temp = this.data.interests;
            var nameArr = temp.split(',');
            this.friends = [...nameArr];
            this.id = this.data.id;
    },
    async updateProfile(){
      let userdata = new FormData();
      userdata.append("id",this.id);
      userdata.append("f_name", this.first_name);
      userdata.append("m_name", this.mid_name);
      userdata.append("l_name", this.last_name);
      userdata.append("email", this.email);
      userdata.append("mobile", this.mobile);
      userdata.append("age", this.age);
      userdata.append("interests", this.friends);
      let url = "http://127.0.0.1:3333/updateProfile";
      let options = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      await HTTP()
        .post(url, userdata, options)
        .then(data => {
          if (data.data) {
            localStorage.setItem('token',data.data);
            this.isEditing=null;
          } else {
            alert("Error while updating data");
          }
        });
    },
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    }
  }
};
</script>