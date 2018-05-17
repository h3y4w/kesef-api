<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.price }}</td>
      <td class="text-xs-center">{{ props.item.shares }}</td>
      <td class="text-xs-center">{{ props.item.sellerRating }}</td>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Price', value: 'price' , align:'center'},
          { text: 'Shares', value: 'shares',  align:'center'},
          { text: 'Seller Rating', value: 'sellerRating', align:'center'}
        ],
        desserts: [
          {
            value: false,
            sellerUser: 'Yonathon932',
            sellerRating: 'A',
            price: 57.53,
            shares: 132,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            sellerUser: 'Bettyyy',
            sellerRating: 'C',
            price: 59.23,
            shares: 213,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            sellerUser: 'Berhanu',
            sellerRating: 'B',
            price: 55.23,
            shares: 102,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            sellerUser: 'User23',
            sellerRating: 'B',
            price: 56.23,
            shares: 204,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          }


        ]
      }
    }
  }
</script>
