<template>
  <div>
    <div class="d-none d-md-block mb-12">
      <v-app-bar fixed :elevation="2" class="px-2">
        <!-- <v-app-bar-nav-icon v-on:click="drawer = !drawer" class>
          <v-icon>menu</v-icon>
        </v-app-bar-nav-icon>-->

        <v-toolbar-title>
          <router-link to="/" exact>
            <v-img src="./../../public/logo.png" alt="avatar" max-width="140" max-height="50"></v-img>
          </router-link>
        </v-toolbar-title>

        <div class="flex-grow-1"></div>
        <span v-if="seen" class="d-none d-md-block navbuttons">
          <router-link to="/" exact>
            <v-btn depressed class="max-2">
              <v-icon left>home</v-icon>HOME
            </v-btn>
          </router-link>

          <router-link to="/showblog" exact>
            <v-btn depressed class="mx-2">
              <v-icon left>remove_red_eye</v-icon>BLOGS
            </v-btn>
          </router-link>

          <router-link to="/createblog" exact>
            <v-btn depressed class="mx-2">
              <v-icon left>create</v-icon>Create Blog
            </v-btn>
          </router-link>

          <router-link to="/manageblog" exact>
            <v-btn depressed class="mx-2">
              <v-icon left>settings_applications</v-icon>Manage Blogs
            </v-btn>
          </router-link>
        </span>

        <div class="flex-grow-1"></div>
        <span class="navbuttons">
          <router-link v-if='login' to="/login" exact class="loginsignup">
            <v-btn v-if='login' outlined color="indigo">Login/ Signup</v-btn>
          </router-link>
        </span>
        <!-- profile pic on top right side with popup menu-->
        <v-menu offset-y bottom v-model="menumobile" :close-on-content-click="true">
          <!-- :nudge-width="auto" -->
          <template v-slot:activator="{ on }">
            <v-btn v-if='logout' icon v-on="on" class>
              <v-avatar :size="avatarSize">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-divider></v-divider>
            <v-list dense nav class="ml-2 mt-2">
              <v-list-item v-for="item in items" :key="item.title" link to="/profile">
                 
                  <v-list-item-icon class="mr-3">
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title class="mr-5">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
             
              </v-list-item>
            </v-list>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn  color="primary" text @click="signout">
                <v-icon left>mdi-logout</v-icon>Sign out
              </v-btn>
              <div class="flex-grow-1"></div>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-app-bar>
    </div>

    <!-- v-toolbar visable on small screen -->
    <v-toolbar class="d-md-none" fixed :elevation="2" light flat>
      <template v-if="seenmobile">
        <v-toolbar-title>
          <router-link to="/" exact>
            <v-img src="./../../public/logo.png" alt="avatar" max-width="120" max-height="40"></v-img>
          </router-link>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <!-- <v-btn icon v-on:click="seenmobile = !seenmobile">
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->
 <span class="navbuttons">
          <router-link v-if='login' to="/login" exact class="loginsignup">
            <v-btn v-if='login' small outlined color="indigo">Login/ Signup</v-btn>
          </router-link>
        </span>
        <v-menu offset-y bottom v-model="menu" :close-on-content-click="true">
          <!--   :nudge-width="auto" -->
          <template v-slot:activator="{ on }">
            <v-btn v-if='logout' icon v-on="on" class>
              <v-avatar :size="avatarSize">
                <img  src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
              </v-avatar>
            </v-btn>
          </template>

          <v-card >
            <v-divider></v-divider>

            <v-list dense nav class="ml-2 mt-2">
              <v-list-item v-for="item in items" :key="item.title"  link to="/profile">
                <v-list-item-icon class="mr-3">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="mr-5">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn  color="primary" text @click="menu = false">
                <v-icon left>mdi-logout</v-icon>Sign out
              </v-btn>
              <div class="flex-grow-1"></div>
            </v-card-actions>
          </v-card>
        </v-menu>
      </template>

      <template v-if="!seenmobile">
        <v-text-field
          append-icon="filter_list"
          class="purple--text"
          :autofocus="true"
          background-color="#eee"
          color="primary"
          clearable
          flat
          hide-details
          placeholder="Search"
          prepend-inner-icon="search"
          solo-inverted
        ></v-text-field>
        <v-btn v-on:click="seenmobile = !seenmobile" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      
      <template v-slot:extension>
        <v-tabs light class="navbuttons">
          <v-tab>
          <router-link to="/" exact  class="black--text">
            <span class="first">
              <v-icon left>home</v-icon>HOME
           </span>
          </router-link>
          </v-tab>
          <v-tab>
          <router-link to="/showblog" exact  class="black--text">
           <span>
              <v-icon left>remove_red_eye</v-icon>BLOGS
           </span>
          </router-link>
          </v-tab>
          <v-tab>
          <router-link to="/createblog" exact  class="black--text">
         <span>
              <v-icon left>create</v-icon>Create Blog
         </span>
          </router-link>
          </v-tab>
          <v-tab>
          <router-link to="/manageblog" exact  class="black--text">
        <span>
              <v-icon left>settings_applications</v-icon>Manage Blogs
        </span>
          </router-link>
          </v-tab>
           
        </v-tabs>
      </template>
    </v-toolbar>


  </div>
</template>

  <script>
import store from "../store";
import { mapState } from 'vuex'
export default {
  data() {
    return {
      seen: true,
      seenmobile: true,
      loginValue: true,
      menu: false,
      menumobile: false,

      items: [
        { title: "Profile", icon: "perm_identity" }
        // { title: "Suggestion or Feedback", icon: "assignment" },
      ],
    
    
    };
  },
  computed: {
    avatarSize() {
      return `36px`;
    },
     ...mapState([
        'login','logout'
      ]),
    
  },
  
  created() {
    store.dispatch("login_logout");
  },
  methods: {
    signout() {
      this.menumobile = false;
      localStorage.removeItem("token");
      store.dispatch("login_logout");
    }
  }
};
</script>
<style >
.v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev {
   display: none !important;
   
}
.navbuttons a {
  text-decoration: inherit;
}
.navbuttons a:hover .v-btn {
  color: blue !important;
}
.router-link-exact-active .v-btn {
  color: blue !important;
}
.router-link-exact-active .first{
  color: blue !important;
}
.router-link-exact-active span{
  color: blue !important;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 38px !important;
}
.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused
  > .v-input__control
  > .v-input__slot
  input {
  color: rgb(0, 0, 0) !important;
}
.v-btn--active .v-btn__content {
  color: red !important;
}
</style>
