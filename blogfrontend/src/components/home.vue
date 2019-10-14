<template>
  <div>
    <v-container fluid class="background">

      <v-row>
        <v-col>
         <v-card
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"   
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"`
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
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
.background{
  background: url("https://wallpapercave.com/wp/tmx6W6N.png") no-repeat center;
  background-size: cover;
}
</style>

