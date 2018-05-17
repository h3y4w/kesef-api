<template>
  <v-stepper v-model="e1" vertical>
      <v-stepper-step :complete="e1 > 1" step="1">
        Basic
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-card color="secondary lighten-1" class="mb-5">
          <v-container fluid>

            <v-layout row>
              <v-flex xs8>
                <v-text-field
                  v-model="basicFirstName"
                  name="input-1-3"
                  label="First Name"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs8>
                <v-text-field
                  v-model="basicLastName"
                  name="input-1-3"
                  label="Last Name"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>

          </v-container>

        
        </v-card>
        <v-btn color="primary" @click.native="e1 = 2">Next</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e1 > 2" step="2">
        Account
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="secondary lighten-1" class="mb-5">
          <accountSignupInput></accountSignupInput>
        </v-card>
        <v-btn color="primary" @click.native="e1 = 3">Next</v-btn>
        <v-btn  @click.native="e1 = 1" color="secondary">Previous</v-btn>
      </v-stepper-content>


      <v-stepper-step :complete="e1 > 3" step="3">
        Verification
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card color="secondary lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 4">Next</v-btn>
        <v-btn @click.native="e1 = 2">Previous</v-btn>
      </v-stepper-content>


      <v-stepper-step :complete="e1 >= 4" step="4">Confirmation</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="secondary lighten-1" class="mb-5">

          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>First Name</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  v-model="basicFirstName"
                  name="input-3"
                  single-line>
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

        </v-card>
        <v-btn color="success" @click.native="e1 = 0">Done</v-btn>
        <v-btn @click.native="e1 = 3">Previous</v-btn>
      </v-stepper-content>

  </v-stepper>
</template>


<script>
  import accountSignupInput from '@/components/signup/password.vue'

  export default {
    components: {
      accountSignupInput
    },
    data () {
      return {
        basicFirstName: '',
        basicLastName: '',
        e1: 0
      }
    }
  }
</script>
