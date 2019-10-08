<template >
  <div class="backimage">
    <v-container fluid >
      <v-row>
        <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
        <v-col md="6" cols="12" >
          <v-card class="mx-auto mt-12" elevation="1" max-width="600" >
            <v-card-title>
              <v-img
                src="./../../public/logo.png"
                alt="avatar"
                class="mx-auto"
                max-width="140"
                max-height="50"
              ></v-img>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text class="headline text-center">Login</v-card-text>
            <v-card-text>
              <v-form class="mx-12">
                <v-text-field :rules="emailRules" label="E-mail"></v-text-field>
                <v-text-field
                  :append-icon="show2 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  @click:append="show2 = !show2"
                ></v-text-field>

                <p class="text-right">
                  <router-link to="/editblog" exact>
                  Forgot password?
                  </router-link> 
                  </p>
                
                <v-btn color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
            <v-divider class="mt-4"></v-divider>

            <v-card-text class="text-center">
              Have not account yet?
              <v-btn text small color="primary">Signup</v-btn>
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
   
      email: "",
      emailRules: [
        // v => !!v || "E-mail is required",
        // v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>
<style >
.backimage{
  height: 95%;
  top:0;
  background: url( 'https://wallpapercave.com/wp/tmx6W6N.png') no-repeat center center;
background-size: cover;
}
</style>