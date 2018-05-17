<template>
  <v-app dark>

    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>


      <v-btn icon to='/'>
        <v-icon>home</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-title to='/' v-text="title"></v-toolbar-title>


    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
        <v-footer :fixed="fixed" app>
      <span>&copy; EthioEX 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'store', title: 'Market', to: '/market'},

          { icon: 'lock_open', title: 'Login', to: '/login' },
          { icon: 'assignment_ind', title: 'Signup', to: '/signup' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'EthioEX'
      }
    },
    methods: {
      goTo: function (url) {
        this.$router.go(url);
      }
    }
  }
</script>
