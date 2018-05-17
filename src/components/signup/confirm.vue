<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>First Name</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          v-model="this.$parent.basicFirstName"
          name="input-3"
          single-line>
        </v-text-field>
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
    watch: {
      basicFirstName(val) {
        console.log('fuck')
        this.$emit('input', val) 
      },
      basicLastName(val) {
        this.$emit('input', val)
      }
    }
  }
</script>
