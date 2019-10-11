<template>
  <div>
    <div class="d-none d-md-block mb-12">
      <v-app-bar fixed :elevation="2" class="px-2">
        <!-- <v-app-bar-nav-icon v-on:click="drawer = !drawer" class>
          <v-icon>menu</v-icon>
        </v-app-bar-nav-icon> -->
      
        <v-toolbar-title>
         <router-link to="/" exact>
        <v-img src="./../../public/logo.png" alt="avatar" max-width="140"
      max-height="50"></v-img>
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
         <router-link to="/login" exact class="loginsignup">
 <v-btn outlined color="indigo">Login/ Signup</v-btn>
         </router-link>
        </span>
        <!-- profile pic on top right side with popup menu-->
        <v-menu
          offset-y
          bottom
          v-model="menumobile"
          :close-on-content-click="true"
          :nudge-width="auto"
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" class>
              <v-avatar :size="avatarSize">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-divider></v-divider>
            <v-list dense nav class="ml-2 mt-2">
              <v-list-item v-for="item in items" :key="item.title" link>
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
              <v-btn color="primary" text @click="signout">
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
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Eloopin</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon v-on:click="seenmobile = !seenmobile">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu offset-y bottom v-model="menu" :close-on-content-click="true" :nudge-width="auto">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" class>
              <v-avatar :size="avatarSize">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-divider></v-divider>

            <v-list dense nav class="ml-2 mt-2">
              <v-list-item v-for="item in items" :key="item.title" link>
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
              <v-btn color="primary" text @click="menu = false">
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
        <v-tabs light>
          <v-tabs-slider></v-tabs-slider>

          <v-tab class="ml-0" :href="'#tab1'">
            <router-link to="/" exact>
              <v-icon left>home</v-icon>HOME
            </router-link>
          </v-tab>
          <v-tab :href="'#tab2'">
            <router-link to="/showblog" exact>
              <v-icon left>remove_red_eye</v-icon>Show BLOG
            </router-link>
          </v-tab>
          <v-tab :href="'#tab3'">
            <router-link to="/createblog" exact>
              <v-icon left>create</v-icon>Create Blog
            </router-link>
          </v-tab>
          <v-tab :href="'#tab4'">
            <router-link to="/manageblog" exact>
              <v-icon left>settings_applications</v-icon>Manage blogs
            </router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <!-- side navigation drawer for nav-icon -->

    <v-navigation-drawer
      temporary
      clipped
      fixed
      v-if="drawer"
      class="d-none d-md-block"
      v-model="drawer"
      style="height: 100vh; top: 64px; transform: translateX(0%); width:300px; max-height: calc(100% - 64px);"
    >
  
    </v-navigation-drawer>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      seen: true,
      seenmobile: true,
      fav: true,
      menu: false,
      menumobile: false,
      message: false,
      hints: true,
      drawer: false,
      drawerbottom: false,

      items: [
        { title: "Profile", icon: "perm_identity" },
        // { title: "Suggestion or Feedback", icon: "assignment" },
      ],
      sheet: false,
      tiles: [
        { icon: "settings_applications", title: "Setting" },
        { icon: "create", title: "home" },
        { icon: "schedule", title: "blog" },
        { icon: "mdi-logout", title: "consult" },
        { icon: "contact_support", title: "consult" },
        { icon: "", title: "" }
      ],
      tab: null,
      model: "tab-2"
    };
  },
  computed: {
    avatarSize() {
      return `36px`;
    }
  },
  created() {
          store.dispatch('login_logout')  
    }, 
  methods: {
    signout(){
      this.menumobile = false
      localStorage.removeItem("token");
    }
  },
};
</script>
<style >
.navbuttons a {
  text-decoration: inherit;
}
.navbuttons a:hover .v-btn {
  color: blue !important;
}
.router-link-exact-active .v-btn {
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
