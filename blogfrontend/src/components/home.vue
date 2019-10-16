<template>
  <div>
    <v-container fluid class="background_image" fill-height grid-list-md text-center>
      <v-layout row wrap align-center>
          <v-flex>
           <h1 class="display-3 font-weight-regular blog">Exchange The Knowledge Over The World</h1>

          </v-flex>
        </v-layout>
    </v-container>
<section>
 <v-parallax
    dark
      height="900"
    src="./../../public/background1.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-3 font-weight-thin mb-4 black--text">In Just Three Steps</h1>
      
    </v-row>
  </v-parallax>
</section>
<section>
    <v-parallax
    height="900"
    src="./../../public/background2.jpg"
  >
     <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-3 font-weight-regular mb-4 black--text">Content Tum Likh Doo Yaar :)</h1>
      
    </v-row>
  </v-parallax>
</section>

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <router-link to="/privacypolicy" exact class="white--text"> 
          Privacy Policy
        </router-link>
        <br>
        <br>
        {{ new Date().getFullYear() }} — <strong > Eloopin</strong>
        
       
      </v-card-text>
    </v-card>
  </v-footer>

  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>
.background_image {
 height: 900px;
   /* opacity: 0.5; */
  background: linear-gradient(to bottom, rgba(213, 214, 224, 0.7), rgba(187, 200, 206, 0.7)), url("./../../public/background.jpg")  no-repeat center center;;
  background-size: cover;
}
</style>

