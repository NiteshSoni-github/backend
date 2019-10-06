<template>
<div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
        <v-col md="6" cols="12">
        <v-card
    class="mx-auto"
  >  
  <v-stepper v-model="e1" class="mt-12" editable>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1"  step="1">General</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2"  step="2">Account</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step  step="3">Finish</v-stepper-step>
    </v-stepper-header>
     </v-stepper>
<v-window v-model="step">
    
  
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            value="john@vuetifyjs.com"
          ></v-text-field>
         
        </v-card-text>
      </v-window-item>

      

   
      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>
    
       
      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>

</v-window>
 <v-divider></v-divider>
     <v-card-actions>
      
      <v-btn
        :disabled="step === 1"
        text
        @click="Decrese"
        
      >
        Back
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="increse"
        
      >
        Next
      </v-btn>
    </v-card-actions>
 
 
 </v-card>
        </v-col>
        <v-col cols="12" md="3" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        e1: 1,
           step: 1,
      }
    },
     computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
    methods: {
    increse: function()  {
    this.step++;
    this.e1++;
   
  },
  Decrese: function()  {
    this.step--;
    this.e1--;
    
  }
}
  }
</script>