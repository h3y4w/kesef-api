<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 style="min-width:100%;">
      <v-card>
        <v-card-title class="headline">{{stock.name}}</v-card-title>
        <v-tabs v-model="cTab" fixed-tabs>
          <v-tab v-for="tab in tabs" :key="tabs.id" v-on:click="switchTab(tab.id, 'click')"> 
            {{tab.title}}
          </v-tab>


          <v-tab-item>
            <v-card>
              <v-card-text>
                <news>
                </news>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card>
              <div id="graphDiv">
              </div>
              <v-divider></v-divider>


              <listingsTable>
              </listingsTable>
              <v-card-text>
                More info here...
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card>
              <v-card-text>
                {{ stock.summary }}
              </v-card-text>
            </v-card>
          </v-tab-item>

        </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { fetchStock } from '@/api/stock'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import listingsTable from './listingsTable'
import stockGraph from './stockGraph'
import news from './news'



  export default {

    components: {
      listingsTable,
      stockGraph,
      news
    },
    data () {
      return {
        graphD: [
          { label: 'year', stock: 120 },
          { label: 'year', stock: 139 },
          { label: 'year', stock: 154 }
        ],
        stock: {},
        cTab: '1',
        tabs: [
          {
            title: 'News',
            id: '0',
            key: ''
          },
          {
            title: 'Listings',
            id: '1',
            key: ''
          },
          {
            title: 'Company',
            id: '2',
            key: 'summary'
          }
        ],
      }
    },
    validate ({params}) {
      return /^\d+$/.test(params.id)
    },
    computed: {
      summaryPage () {
        return stock[summary]
      }
    },
    methods : {
      switchTab (tabId, actionType) {
        if (actionType == 'url') {
          console.log("URL ACTIONTYPE");
          if (tabId === undefined || (!(this.tabs.length -1 >= parseInt(tabId)))) 
            tabId = '1';
            this.cTab = tabId; 
        } else if (actionType == 'click') {

          console.log("CLICK ACTIONTYPE");
          
          if ('URLSearchParams' in window) {
            console.log("DOING SHIT");
            var searchParams = new URLSearchParams(window.location.search)
            searchParams.set("tab", tabId);
            var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
            this.$router.replace(newRelativePathQuery);
//            history.pushState(null, '', newRelativePathQuery);
          }
        }
      }
    },
    updated: function() {
      var _this = this;
      var urlTabId = _this.$route.query.tab;
      console.log("length: " +_this.tabs.length + " urlTab: "+ urlTabId);
      _this.switchTab(urlTabId, 'url');
      console.log("tab: " + _this.cTab);

      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {
    //dynamically set size of graph based on parent dimensions and redraw when size changes

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'test');

        data.addRows([
          [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
          [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
          [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
          [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
          [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
          [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
          [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
          [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
          [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
          [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
          [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
          [66, 70], [67, 72], [68, 75], [69, 80]
        ]);

        var options = {
          crosshair: { trigger: 'focus'},
          chartArea: {
            top: 1,
            width: "100%",
            height: "100%"
          },
          legend: {
            position: 'none'
          },
          hAxis: {
            textPosition: 'none'
          },
          vAxis: {
            textPosition: 'none'
          },
          annotations: {
            highContrast: false 
          },
          backgroundColor: 'transparent'
        };


        var chart = new google.visualization.LineChart(document.getElementById('graphDiv'));

        var p = $('#graphDiv').parent().width();
        console.log(p);
        

        chart.draw(data, options);
    /*
        $(window).smartresize(function () {
          chart.draw(data, options);
        });
    */
      }



    },
    created: function() {



      var params = {'id': this.$route.params.stockId}
      var _this = this;
      this.cTab = this.tabs[0].id

      fetchStock(
        params,
        function(response) { //on successful data retrieval
          //this.setStock(response.data.payload)
          _this.stock = response.data.payload
          console.log(response)
        },
        function(responseError) { //on error
          console.log(responseError)
        }
      )
    }
  }


</script>

