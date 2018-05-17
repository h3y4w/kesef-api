<template>
  <v-layout column>
    <v-flex xs12 sm6 >
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex 
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              class="newsCard"
              :key="card.title"
            >
              <v-card>
                <a :href="card.link">
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                </a>
                <v-card-text>
                  {{card.title}}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
  .newsCard {
    color: black;
  }
</style>

<script>
  export default {
    data: () => ({
      cards: [
        {
          title: 'Bank of Abyssina posts fastest growth in seven years',
          src: 'https://africabusinesscommunities.com/BankofAbyssinia_Ethiopia.jpg',
          flex: 12,
          link: 'https://africabusinesscommunities.com/news/ethiopia-bank-of-abyssinia-posts-fastest-growth-in-seven-years/'
        },
        {
          title: 'Bank of Abysinnia grows dramatically',
          src: 'http://capitalethiopia.com/wp-content/uploads/2017/07/Bank-of-Abyssinia-696x464.jpg',
          flex: 6,
          link: 'http://capitalethiopia.com/2017/07/18/bank-abyssinia-grows-dramatically/'
        },
        {
          title: 'Abyssina boast sold performance',
          src: 'https://www.thereporterethiopia.com/sites/default/files/styles/medium/public/2017-11/Mulugeta-Asmare.jpg?itok=Ti3_-Ujh',
          flex: 6,
          link: 'https://www.thereporterethiopia.com/tags/bank-abyssinia'
        }
      ]
    })
  }
</script>
