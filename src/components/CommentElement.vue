<template>
  <div class="row wrap margin-top">
    <div
      class="col-2"
      style="text-align: center"
    >
      <img
        class="profile-picture"
        :src="comment.profile_image"
      >
    </div>

    <!-- :src="comment.comment_picture" -->
    <div class="col-12 col-sm-10 q-px-md">
      <div class="row no-wrap text-positive q-mb-md">
        <div class="col-6 comment-user-name">
          {{ comment.name }} {{ comment.surname }}
        </div>
        <div
          class="col-6"
          style="text-align: right"
        >
          <q-icon
            :name="firstStar"
            size="sm"
            color="positive"
            class="rating-stars-top"
          />
          <q-icon
            :name="secondStar"
            size="sm"
            color="positive"
            class="rating-stars-top"
          />
          <q-icon
            :name="thirdStar"
            size="sm"
            color="positive"
            class="rating-stars-top"
          />
          <q-icon
            :name="fourthStar"
            size="sm"
            color="positive"
            class="rating-stars-top"
          />
          <q-icon
            :name="fifthStar"
            size="sm"
            color="positive"
            class="rating-stars-top"
          />
          <span class="rating-number-text q-pl-sm">{{ comment.rating }}/5</span>
        </div>
      </div>
      <div>{{ comment.comment }}</div>
      <div class="days-ago q-pb-none q-pt-md">
        {{ comment.time_ago }}
      </div>
    </div>
    <q-separator
      color="grey"
      width="100%"
    />
  </div>
</template>

<script>
export default {
  name: 'CommentElement',

  props: ['comment'],

  computed: {
    firstStar () {
      if (this.comment.rating < 1) { return 'star_border' } else { return 'star' }
    },

    secondStar () {
      if (this.comment.rating < 2) { return 'star_border' } else { return 'star' }
    },

    thirdStar () {
      if (this.comment.rating < 3) { return 'star_border' } else { return 'star' }
    },

    fourthStar () {
      if (this.comment.rating < 4) { return 'star_border' } else { return 'star' }
    },

    fifthStar () {
      if (this.comment.rating < 5) { return 'star_border' } else { return 'star' }
    }
  }
}
</script>

<style scoped>
    .margin-top {
        margin-top: 5rem;
    }

    .profile-picture {
        border-radius: 50%;
        width:80px;
        height:80px;
    }

    .comment-user-name {
        font-size: 1.3rem;
    }

    .rating-stars-top {
        margin-top: -0.2rem;
    }

    .rating-number-text {
        text-decoration: underline;
    }

    .days-ago {
        text-align: right;
        color: grey;
        font-size: 0.8rem;
    }
</style>
