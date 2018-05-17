<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.startPrice }}</td>
      <td class="text-xs-center">{{ props.item.lastPrice }}</td>
      <td class="text-xs-center">{{ props.item.a24hrChange }}</td>
      <td class="text-xs-center">{{ props.item.a24hrVolume }}</td>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Starting Price', value: 'startPrice'},
          { text: 'Last Price', value: 'lastPrice' },
          { text: '24hr Change', value: 'a24hrChange' },
          { text: '24hr Volume', value: 'a24hrVolume' }
        ],
        desserts: [
          {
            value: false,
            ticker: 'BOA',
            startPrice: 57.43,
            'a24hrChange': '+1.32%',
            lastPrice: 55.53,
            'a24hrVolume': 524,
          },
          {
            ticker: 'BOH',
            value: false,
            startPrice: 60.27,
            'a24hrChange': '+6.32%',
            lastPrice: 54.53,
            'a24hrVolume': 924,
          },
          {
            ticker: 'ASI',
            value: false,
            startPrice: 74.13,
            'a24hrChange': '-3.32%',
            lastPrice: 81.29,
            'a24hrVolume': 1294,
          }
        ]
      }
    }
  }
</script>
