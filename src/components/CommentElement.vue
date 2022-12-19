<template>
  <div class="row wrap q-px-xl margin-top">
    <div
      class="col-2"
      style="text-align: center"
    >
      <img
        class="profile-picture"
        src="../pages/restaurant_header_picture.png"
      >
    </div>

    <!-- :src="comment.comment_picture" -->
    <div class="col-10 q-px-md">
      <div class="row no-wrap text-green-7 q-mb-md">
        <div class="col-6 comment-user-name">
          {{ comment.name }}
        </div>
        <div
          class="col-6"
          style="text-align: right"
        >
          <q-icon
            name="star"
            size="sm"
            color="green-7"
            class="rating-stars-top"
          />
          <q-icon
            name="star"
            size="sm"
            color="green-7"
            class="rating-stars-top"
          />
          <q-icon
            name="star"
            size="sm"
            color="green-7"
            class="rating-stars-top"
          />
          <q-icon
            name="star_border"
            size="sm"
            color="green-7"
            class="rating-stars-top"
          />
          <q-icon
            name="star_border"
            size="sm"
            color="green-7"
            class="rating-stars-top"
          />
          <span class="rating-number-text q-pl-sm">3/5</span>
        </div>
      </div>
      <div>{{ comment.comment_text }}</div>
      <div class="days-ago q-pb-none q-pt-md">
        {{ comment.days_ago }} dni nazaj
      </div>
    </div>
    <q-separator
      color="grey"
      width="100%"
      inset
      class="q-mt-none q-mx-md"
    />

    <!--
// id_comment: 0,
// name: 'Janez Novak',
// comment_text: 'neki neki neki neki n ekineki neki neki neki n ekineki neki neki neki n ekineki neki neki neki n ekineki neki neki neki n eki',
// profile_picture: 'http://localhost:8000/images/restaurant_images/profile.jpg',
// other_user_rating: 3
-->
  </div>
</template>

<script>
export default {
  name: 'CommentElement',

  props: ['comment']
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
