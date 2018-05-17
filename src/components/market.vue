<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <div slot="header">
        <h3>Market</h3>
      </div>
      <v-flex
        slot="item"
        slot-scope="props"
        xs12 sm6 md4 lg3
      >
        <v-card @click.native="goTo('/stock/' + props.item.id)">
          <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>

          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Starting Price:</v-list-tile-content>
              <v-list-tile-content class="align-end"> {{ props.item.startPrice }} </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>Last Price:</v-list-tile-content>
              <v-list-tile-content class="align-end"> {{ props.item.lastPrice }} </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>24hr Change:</v-list-tile-content>
              <v-list-tile-content class="align-end"> {{ props.item.dayChange }} </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>24hr Volume:</v-list-tile-content>
              <v-list-tile-content class="align-end"> {{ props.item.dayVolume }} </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { fetchStock } from '@/api/stock'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

  export default {
    methods: {
      goTo: function(url) {
        this.$router.replace(url);
      }
    },
    data: () => ({
      rowsPerPageItems: [6, 12, 18],
      pagination: {
        rowsPerPage: 2
      },
      items: [
        {
          value: false,
          name: 'Bank of Abssyina',
          ticker: 'BOA',
          id: 0,
          startPrice: 57.43,
          dayChange: '+1.32%',
          lastPrice: 55.53,
          dayVolume: 524
        },
        {
          ticker: 'BOH',
          name: 'Bank of Heyaw',
          id: 1,
          value: false,
          startPrice: 60.27,
          dayChange: '+6.32%',
          lastPrice: 54.53,
          dayVolume: 924
        },
        {
          ticker: 'ASI',
          name: 'Awash Insurance',
          id: 2,
          value: false,
          startPrice: 74.13,
          dayChange: '-3.32%',
          lastPrice: 81.29,
          dayVolume: 1294
        }
      ]
    })
  }
</script>

