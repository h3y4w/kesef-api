<template>
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
          v-model="this.$parent.basicLastName"
          name="input-1-3"
          label="Last Name"
          single-line
        ></v-text-field>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    props: {
      basicFirstName: {
        type: String,
      },
      basicLastName: {
        type: String,
      }
    },
    data () {
      return {
        rules: [
          () => 'Username or Password is incorrect'
        ]
      }
    }
  }
</script>
