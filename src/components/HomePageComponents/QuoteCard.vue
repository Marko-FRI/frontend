<template>
  <div class="col-12 col-sm-6 col-md-4 card">
    <div class="card__content q-ma-xl ">
      <div class="card__content-icon">
        <img
          src="../HomePageComponents/dots.png"
          height="30"
        >
      </div>
      <div class="card__content-restaurant">
        <div class="card__content-restaurant_content">
          Gostilna pod lipco
        </div>
      </div>
      <div class="card_content-comment">
        <div class="card_content-comment_content q-mx-auto q-pt-lg q-pb-md">
          <div class="column">
            <q-avatar
              class="card_content-comment_content-avatar q-mx-auto"
            >
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div class="q-mx-auto q-mt-sm card_content-comment_content-name text-bold">
              {{ quote.user_name }}
            </div>
            <div class="q-mx-auto q-mt-sm card_content-comment_content-text text-center ">
              dlsajkdiasduihasufhsdufhajs dhfjasdhfjdhmsfjkhfmksd fisd if sdjikfmsdi fjsdkfj sdi fjisdfjisd jfisdmn ifhidjfisd ifjsdifjmisdj fids fjisfjmdis
            </div>
            <q-rating
              v-model="ratingModel"
              size="md"
              color="positive"
              icon="star_border"
              icon-selected="star"
              class="q-mx-auto q-mt-md"
            />
            <div class="card_content-comment_content-rating text-center q-mt-lg q-mx-auto q-pa-md">
              4.5
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteCard',

  props: ['quote']
}
</script>

<style scoped>
.card {
}
.card__content-icon{
  right: 0;
  text-align: right;
}

.card__content-restaurant {
    background-image: url("../HomePageComponents/food.png");
    width: 100%;
    height: 12vh;
    background-size: cover;
    box-shadow: inset 0px -66px 23px -13px rgba(0, 0, 0, 0.61);
    filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 4px 4px 0px 0px;
    color: white;

  }
.card__content-restaurant_content {
  position: absolute;
  bottom: 0;
  margin: 2%;
  font-size: 16px;
}
.card_content-comment {
  background: #F2F2EF;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.card_content-comment_content-name {
  font-size: 16px;
}
.card_content-comment_content{
  width: 70%;
  overflow: hidden;
}
.card_content-comment_content-rating {
  background: #D9D9D9;
  border-radius: 4px;
  width: 30%;
}
</style>
