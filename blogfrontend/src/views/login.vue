<template>
  <div class="backimage">
    <v-container fluid>
      <div>
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
                    <v-dialog v-model="dialog1" persistent max-width="600px">
                      <template v-slot:activator="{ on }">
                        <v-btn small text color="primary" dark v-on="on">Forgot PAssword</v-btn>
                      </template>
                      <v-card>
                        <v-card-title></v-card-title>

                        <v-card-text class="headline text-center">Enter Your Email</v-card-text>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-text-field label="Email*" required></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <div class="flex-grow-1"></div>
                          <v-btn class="mx-2" @click="dialog1 = false">Close</v-btn>
                          <v-btn color="primary" @click="dialog1 = false">Send</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </p>

                  <v-btn color="primary">Login</v-btn>
                </v-form>
              </v-card-text>
              <v-divider class="mt-4"></v-divider>

              <v-card-text class="text-center">
                Have not account yet?
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn small text color="primary" dark v-on="on">Sign up</v-btn>
                  </template>
                  <v-card>
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

                    <v-card-text class="headline text-center">Sign Up</v-card-text>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Legal first name*" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="Legal middle name"
                              hint="example of helper text only on focus"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="Legal last name*"
                              hint="example of persistent helper text"
                              persistent-hint
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Email*" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Password*" type="password" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select
                              :items="['0-17', '18-29', '30-54', '54+']"
                              label="Age*"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-autocomplete
                              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                              label="Interests"
                              multiple
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <div class="flex-grow-1"></div>
                      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!--
              <v-btn text small color="primary">Signup</v-btn>
                -->
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
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
.backimage {
  height: 95%;
  top: 0;
  background: url("https://wallpapercave.com/wp/tmx6W6N.png") no-repeat center
    center;
  background-size: cover;
}
</style>