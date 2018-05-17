<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="seconday">
                <v-spacer></v-spacer>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="email" label="Email" type="text"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="actionLogin" color="error">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      email: '',
      password: ''
    }),
    props: {
      source: String
    },
    created: function () {
      this.$store.dispatch('getUser', {userId: 4})
    },
    methods: {
      actionLogin: function () {
        var params = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', params)
      }
    }
  }
</script>
