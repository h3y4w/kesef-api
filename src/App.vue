<template>
  <div id="app">
    <layout></layout>

  </div>
</template>

<script>
import layout from './components/layout'
import Raphael from 'raphael/raphael'

global.Rapael = Raphael //delete this 


export default {
  name: 'App',
  components: {
    'layout': layout
  },
  data ()  {
    return {
    }
  }
}
</script>
