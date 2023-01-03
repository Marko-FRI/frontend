<template>
  <div>
    <div class="q-pl-lg q-mx-xl text-h6">
      Komentarji: {{ numComments }}
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
    <div
      style="text-align: center"
      class="q-my-xl"
    >
      <q-btn
        v-if="comments.length > 3 && numComments > comments.length"
        label="Naloži več"
        color="white"
        flat
        no-caps
        style="font-size: 1.3rem"
        class="bg-positive border-rad q-px-xl q-py-none"
        :disable="loading"
        @click="loadMoreComments(comments.length)"
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

  props: ['comments', 'numComments', 'loading'],

  data () {
    return {
      numOfShownComments: 0
    }
  },

  methods: {
    loadMoreComments (comLen) {
      this.$emit('loadMoreComments', comLen)
    }
  }
}
</script>

<style scoped>
    .border-rad {
        border-radius: 5px;
    }
</style>
