<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
        <v-col md="6" cols="12">
          <v-row>
            <v-col cols="12">
              <v-card-actions class="ma-0 pa-0">
                <span class="headline">HIGHLIGHTS</span>
                <div class="flex-grow-1"></div>
                <v-btn text rounded color="primary">
                  See all
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="12">
              <v-card
                class="light-blue lighten-5 mx-auto"
                :flat="flat"
                :loading="loading"
                :outlined="outlined"
                :elevation="elevation"
                :raised="raised"
                :width="width"
                :height="height"
              >
                <v-img
                  v-if="media"
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title class="align-end fill-height">I'm a title</v-card-title>
                </v-img>
                <v-card-title v-else>I'm a title</v-card-title>

                <v-card-text>I'm card text hi i am balveer choudhary and now i am designing my website</v-card-text>
                <v-card-actions v-if="actions">
                  
                   <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn text>Click</v-btn>
                  <v-btn outlined>Click</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="lime lighten-5 mx-auto"
                :flat="flat"
                :loading="loading"
                :outlined="outlined"
                :elevation="elevation"
                :raised="raised"
                :width="width"
                :height="height"
              >
                <v-img
                  v-if="media"
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title class="align-end fill-height">I'm a title</v-card-title>
                </v-img>
                <v-card-title v-else>I'm a title</v-card-title>

                <v-card-text>I'm card text hi i am balveer choudhary and now i am designing my website</v-card-text>
                <v-card-actions v-if="actions">
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn text>Click</v-btn>
                  <v-btn outlined>Click</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="indigo lighten-5 mx-auto"
                :flat="flat"
                :loading="loading"
                :outlined="outlined"
                :elevation="elevation"
                :raised="raised"
                :width="width"
                :height="height"
              >
                <v-img
                  v-if="media"
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title class="align-end fill-height">I'm a title</v-card-title>
                </v-img>
                <v-card-title v-else>I'm a title</v-card-title>

                <v-card-text>I'm card text hi i am balveer choudhary and now i am designing my website</v-card-text>
                <v-card-actions v-if="actions">
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn text>Click</v-btn>
                  <v-btn outlined>Click</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12">
              <div class="text-center">
                <v-btn text rounded color="primary" dark class="text-capitalize">
                  More
                  <v-icon small>mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12"></v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-container>
  

  </div>
</template>

<script>

export default {

  data() {
    return {
    }
  }
};
</script>
<style scoped>
.v-input__slider {
  width: 100%;
}
</style>

