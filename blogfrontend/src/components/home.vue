<template>
  <div>
    <v-container fluid class="background_image" fill-height grid-list-md text-center>
      <v-layout row wrap align-center>
        <v-flex>
          <h1 class="display-3 font-weight-regular mt-12">Explore The Knowledge</h1>
          <br />
          <h1 class="font-weight-thin">Just By Creating & Reading Blogs</h1>
          <br>
            <v-row class="mb-12">
              <v-col cols="3"></v-col>
              <v-col cols="2">
                <v-card>
                  <v-card-title class="purple lighten-2 justify-center">
                    <h4 class="white--text font-weight-light">Read Blogs</h4>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card>
                  <v-card-title class="cyan lighten-1 justify-center">
                    <h4 class="white--text font-weight-light">Create Blogs</h4>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card>
                  <v-card-title class="amber lighten-1 justify-center">
                    <h4 class="mr-4 white--text font-weight-light">& Manage Blogs</h4>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="3"></v-col>
            </v-row>
        </v-flex>
      </v-layout>
    </v-container>

    <section>
      <v-parallax dark height="900" src="./../../public/background1.jpg">
        <v-layout row wrap text-center align-center>
          <v-flex class="black--text mt-n12">
            <h1 class="display-3 font-weight-regular">Read, You Want</h1>
            <br />
            <h1 class="display-1 font-weight-thin">From Thousand Of Blogs</h1>
            <v-row>
              <v-col cols="5"></v-col>
              <v-col cols="2">
                <v-card>
                  <v-card-title class="amber lighten-1 justify-center">
                    <v-icon dark size="32">remove_red_eye</v-icon>
                    <h4 class="ml-4 white--text font-weight-light">Blogs</h4>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="5"></v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-parallax height="900" src="./../../public/background2.jpg">
        <v-layout row wrap text-center align-center>
          <v-flex class="black--text">
            <h1 class="display-3 font-weight-regular">Write, You Want</h1>
            <br />
            <h1 class="display-1 font-weight-thin">Just In Three Steps</h1>
            <br />

            <v-row>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                      <v-card-title class="purple lighten-2">
                        <v-icon dark size="32" class="mr-4">perm_identity</v-icon>
                        <h4 class="white--text font-weight-light">Login/ Signup</h4>
                      </v-card-title>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="amber lighten-1" fill-dot left small>
                    <v-card>
                      <v-card-title class="amber lighten-1 justify-end">
                        <h4 class="mr-4 white--text font-weight-light">Create Blog</h4>
                        <v-icon dark size="32">create</v-icon>
                      </v-card-title>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="cyan lighten-1" fill-dot right>
                    <v-card>
                      <v-card-title class="cyan lighten-1">
                        <v-icon class="mr-4" dark size="32">mdi-cloud-upload</v-icon>
                        <h4 class="white--text font-weight-light">Publish</h4>
                      </v-card-title>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-col>
              <v-col cols="4"></v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-parallax dark height="900" src="./../../public/background3.jpg">
        <v-layout row wrap text-center align-center>
          <v-flex>
            <h1 class="display-3 font-weight-regular mt-n12 black--text">Let's Create Your First Blog With Eloopin</h1>
            <br />
            <v-row>
              <v-col cols="5"></v-col>
              <v-col cols="2">
                <v-card>
                  <v-card-title class="amber lighten-1 justify-center">
                    <v-icon dark size="32">create</v-icon>
                    <h4 class="ml-4 white--text font-weight-light">Create Blog</h4>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="5"></v-col>
            </v-row>
       
            <br />
          
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <router-link to="/privacypolicy" exact class="white--text">Privacy Policy</router-link>
          <br />
          <br />
          {{ new Date().getFullYear() }} —
          <strong>Eloopin</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
<style scoped>
.background_image {
  height: 900px;
  /* opacity: 0.5; */
  background: url("./../../public/background.jpg") no-repeat center center;
  background-size: cover;
}
</style>

