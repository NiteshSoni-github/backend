<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
        <v-col md="6" cols="12">
          <v-card class="mx-auto mt-12" elevation="1" max-width="600">
            <v-card-title>
              <v-img
                src="./../../public/logo.png"
                alt="avatar"
                class="mx-auto"
                max-width="140"
                max-height="50"
              ></v-img>
              <v-card-text class="subtitle text-center mt-n3">
                Inform someone about something
              </v-card-text>
            </v-card-title>
            <v-divider></v-divider>
        
            <v-card-text class="mt-5">
                <span>
                    Login With
                </span>

                <v-btn  small class="ml-6 mx-1">
                    Google
                </v-btn>
                <v-btn  small class="mx-1">
                    Facebook
                </v-btn>
                <v-btn  small class="mx-1">
                    Linkedin
                </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
      step: 1
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    }
  },
  methods: {
    increse: function() {
      this.step++;
      this.e1++;
    },
    Decrese: function() {
      this.step--;
      this.e1--;
    }
  }
};
</script>