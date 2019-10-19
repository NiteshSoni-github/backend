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
                <v-row>
                <v-col cols="12" md="2" class="d-none d-md-block"></v-col>
                <v-col cols="12" md="8">
                  <v-form>
                    <v-text-field v-model="login_email" :rules="emailRules" label="E-mail"></v-text-field>
                    <v-text-field
                      v-model="login_password"
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

                    <v-btn color="primary" @click="login">Login</v-btn>
                  </v-form>
                </v-col>

                <v-col cols="12" md="2" class="d-none d-md-block"></v-col>
                </v-row>
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
                        <v-form>
                        <v-row>
                          
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="f_name" label="First name*" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="m_name"
                              label="middle name"
                              hint="example of helper text only on focus"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="l_name"
                              label="last name*"
                              hint="example of persistent helper text"
                              persistent-hint
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="email"
                              label="Email*"
                              required
                              hint="For example, xyz@mail.com"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="password"
                              label="Password*"
                              required
                              hint="For example, Xyz122@#"
                              :append-icon="show2 ? 'visibility' : 'visibility_off'"
                              :rules="[rules.required, rules.min]"
                              :type="show2 ? 'text' : 'password'"
                              name="input-10-2"
                              @click:append="show2 = !show2"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="mobile"
                              label="Contact No."
                              value="+91"
                              hint="For Example,9876543210"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-select
                              v-model="age"
                              :items="['0-17', '18-29', '30-54', '54+']"
                              label="Age*"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-select
                              v-model="gender"
                              :items="['Male','Female']"
                              label="Gender*"
                              required
                            ></v-select>
                          </v-col>

                          <v-col cols="12" sm="4">
                            <v-autocomplete
                              v-model="interests"
                              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                              label="Interests"
                              multiple
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                        </v-form>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <div class="flex-grow-1"></div>
                      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="signup">Save</v-btn>
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
import axios from "axios";
import HTTP from "../http";
import router from "../router";
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      login_email: "",
      login_password: "",
      password: "",
      email: "",
      emailRules: [
        // v => !!v || "E-mail is required",
        // v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
        // emailMatch: () => "The email and password you entered don't match"
      },
      f_name: "",
      m_name: "",
      l_name: "",
      mobile: "",
      age: "",
      gender: "",
      interests: "",
      d: ""
    };
  },
  methods: {
    async signup() {
      let data = new FormData();
      data.append("f_name", this.f_name);
      data.append("m_name", this.m_name);
      data.append("l_name", this.l_name);
      data.append("email", this.email);
      data.append("password", this.password);
      data.append("mobile", this.mobile);
      data.append("age", this.age);
      data.append("gender", this.gender);
      data.append("interests", this.interests);
      let url = "http://127.0.0.1:3333/register";
      await HTTP()
        .post(url, data)
        .then(data => {
          if (data.data == 1) {
            this.dialog = false;
            this.login_email = this.email;
            this.login_password = this.password;
          } else {
            alert("Email Id or Phone Number already register");
            this.dialog = true;
          }
        });
    },
    async login() {
      let data = new FormData();
      data.append("email", this.login_email);
      data.append("password", this.login_password);
      let url = "http://127.0.0.1:3333/login";
      await HTTP()
        .post(url, data)
        .then(data => {
          if (data.data != 0) {
            alert("login success");
            localStorage.setItem("token", data.data);
            this.$router.push({ name: "showblog" });
          } else {
            alert("Email Id or password does not match");
          }
        });
    }
  }
};
</script>
<style>
.backimage {
  height: 95%;
  top: 0;
  background: url("https://wallpapercave.com/wp/tmx6W6N.png") no-repeat center
    center;
  background-size: cover;
}
</style>