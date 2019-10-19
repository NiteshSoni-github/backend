<template>
  <div class="manageblog">
    <v-container fluid style="background-color:#EFFDFF">
      <v-row>
        <v-col cols="12" md="2" class="d-none d-md-block"></v-col>
        <v-col cols="12" md="8" class="d-none d-md-block">
          <v-card-actions class="mt-12 mb-6">
            <div class="flex-grow-1"></div>
            <span class="display-3 font-weight-thin">Profile</span> 
            <div class="flex-grow-1"></div>
          </v-card-actions> 
          <v-card-actions class="mx-n2">
            <span class="title font-weight-regular">1. Personal Information</span>
          </v-card-actions>

          <v-card color="white" :loading="isUpdating">
            <template v-slot:progress>
              <v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
            </template>
           
              <v-row>
                <v-col class="text-right" cols="12">
                  <v-btn
                    color="primary"
                    fab
                    small
                    @click="isEditing = !isEditing"
                    class="mr-6"
                  >
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                  </v-btn>
                </v-col>
               
              </v-row>
         
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="first_name"
                      :disabled="!isEditing"
                      filled
                     
                      label="First Name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="mid_name"
                      :disabled="!isEditing"
                      filled
                 
                      label="Mid Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="last_name"
                      :disabled="!isEditing"
                      filled
                 
                      label="Mid Name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="mobile"
                      :disabled="!isEditing"
                      filled
                     
                      label="Mobile"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="email"
                      :disabled="!isEditing"
                      filled
                     
                      label="Email"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-select
                      v-model="age"
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                      :disabled="!isEditing"
                      filled
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <v-autocomplete
                      v-model="friends"
                      :disabled="!isEditing"
                      :items="people"
                      filled
                      chips
                     
                      label="Interest"
                      item-text="name"
                      item-value="name"
                      multiple
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          color="#E1F5FE"
                         
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          close
                          @click="data.select"
                          @click:close="remove(data.item)"
                        >{{ data.item.name }}</v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-item-content v-text="data.item"></v-list-item-content>
                        </template>
                        <template v-else>
                          <v-list-item-content>
                            <v-list-item-title v-html="data.item.name"></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn
                :disabled="!isEditing"
                :loading="isUpdating"
                color="primary"
                depressed
                @click="isUpdating = true"
              >
                <v-icon left>mdi-update</v-icon>Save Updates
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card-actions class="mt-8 mx-n2">
            <span class="title font-weight-regular">2. Not-Personal Information :)</span>
          </v-card-actions>
        </v-col>

        <v-col cols="12" md="2" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEditing: null,
      autoUpdate: true,
      friends: ["Ice Hockey", "Singing"],
      isUpdating: false,
      first_name: "Akshay",
      mid_name: "Kumar",
      last_name: "Solanki",
      email: "aks@gmail.com",
      age: "0-17",

      people: [
        { header: "Interest List" },
        { name: "Sports" },
        { name: "Ice Hockey" },
        { name: "Soccer" },
        { name: "Reading" },
        { name: "Singing" },
        { name: "Learn New Technology" },
        { name: "Traveling" },
        { name: "Coding" }
      ],
      mobile: "9414179914"
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    }
  }
};
</script>