<template>
  <div class="cardList row q-mx-auto">
    <quote-card
      v-for="(quote,index) in quotations"
      :key="index"
      :quote="quote"
    />
    <q-btn
      label="Naloži več"
      color="white"
      flat
      no-caps
      class="bg-positive q-mx-auto q-mb-xl"
    />
  </div>
</template>

<script>
import QuoteCard from './QuoteCard.vue'

export default {
  name: 'QuotationList',

  components: {
    QuoteCard
  },

  props: ['quotations']
}
</script>
<style scoped>

  @media (min-width:576px)  {
    .cardList {
      width: 90%;
    }
  }
  @media (min-width:1025px) {
    .cardList {
      width: 70%;
    }
   }
</style>
