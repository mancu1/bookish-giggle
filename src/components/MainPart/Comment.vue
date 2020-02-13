<template>
  <v-card router to="">
    <v-img
      :src="require('../../assets/longComment.png')"
      class="justify-end align-end"
    >
      <v-row class="mt-4" style="background-color: rgba(1,1,1,0.5)">
        <div class="ml-12">
          <p>
            <span class="Text-Style-8">
              АГЕНСТВО
            </span>
          </p>
        </div>
        <v-rating
          class="mt-2"
          small
          half-icon="mdi-star-half"
          half-increments
          :value="Math.random() * 5"
        />
      </v-row>
    </v-img>

    <div style="background-color: #1baf5d; height: 3px" />
    <v-row>
      <div
        style="background-color: #1baf5d; border-radius: 15px; z-index: 1"
        class="pa-1 mt-n5 ml-4"
      >
        <v-icon dark>mdi-home</v-icon>
      </div>
      <v-spacer />
    </v-row>
    <v-flex class="d-grid grid-2">
      <v-avatar class="ml-4 mt-4" color="#1baf5d">
        <span class="Text-Style-3">ДС</span>
      </v-avatar>
      <v-col>
        <v-rating
          half-icon="mdi-star-half"
          half-increments
          :value="Math.random() * 5"
        />
        <p>
          <span class="Text-Style">
            {{ order.user }}
          </span>
        </p>
        <p>
          <span class="Text-Style-11">
            {{ order.name }}
          </span>
        </p>
      </v-col>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      order: {
        name:
          "“Великолепная квартира, снимали с друзьями на выходных, но” ...читать далее",
        user: "ДАМИР САФИУЛЛИН",
        rate: 3.5,
        cost: "1000 руб."
      }
    };
  }
};
</script>

<style scoped>
.d-grid {
  display: grid;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .grid-2 {
    grid-template-rows: 1fr 3fr;
  }
}
@media screen and (min-width: 480px) {
  .grid-2 {
    grid-template-columns: 1fr 3fr;
  }
}
</style>
