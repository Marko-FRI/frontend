<template>
  <div>
    <div class="q-pl-lg q-mx-xl text-h6">
      Komentarji: 43
    </div>
    <q-separator
      color="black"
      inset
      class="q-mb-xl q-mx-xl"
    />
    <comment-element
      v-for="comment in comments"
      :key="comment.id_comment"
      :comment="comment"
    />
    <div style="text-align: center">
      <q-btn
        label="Naloži več"
        color="white"
        flat
        no-caps
        style="font-size: 1.3rem"
        class="bg-green-7 border-rad q-my-xl q-px-xl q-py-none"
      />
    </div>
  </div>
</template>

<script>
import CommentElement from './CommentElement.vue'

export default {
  name: 'CommentList',

  components: {
    CommentElement
  },

  props: ['comments']
}
</script>

<style scoped>
    .border-rad {
        border-radius: 5px;
    }
</style>
