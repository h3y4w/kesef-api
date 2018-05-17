<template>
  <v-container fluid>

    <v-layout row>
      <v-flex xs8>
        <v-text-field
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          name="password_in"
          label="Enter password"
          hint="At least 8 characters"
          min="8"
          counter
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs8>
        <v-text-field
          :append-icon="!e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          name="password_in1"
          label="Re-Enter password"
          hint="At least 8 characters"
          min="8"
          counter
        ></v-text-field>
      </v-flex>
    </v-layout>



  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        e1: true,
        e2: true,
        e3: false,
        e4: false,
        password: 'Password'
      }
    }
  }
</script>
