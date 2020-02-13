<template>
  <v-col cols="12" style="background-color: #f3f1f2">
    <v-row>
      <v-spacer />
      <div class="d-grid grid-col-temp">
        <Order style="width: 210px" v-for="n in count / 2" v-bind:key="n" />
        <Comment class="long-grid-cell" />
        <Order style="width: 210px" v-for="n in count / 2" v-bind:key="n" />
      </div>
      <v-spacer />
    </v-row>
    <v-row class="my-12">
      <v-btn class="ma-auto" text @click="loadMore">
        <span>
          Загрузить еще...
        </span>
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import Order from "./Order";
import Comment from "./Comment";
export default {
  name: "OrdersGrid",
  components: { Comment, Order },
  data() {
    return {
      count: 12
    };
  },
  methods: {
    loadMore() {
      this.count += 12;
    }
  }
};
</script>

<style scoped>
.d-grid {
  display: grid;
}

@media screen and (min-width: 320px) {
  .grid-col-temp {
    grid-template-columns: 1fr;
    grid-gap: 36px;
  }

  .long-grid-cell {
    width: 210px;
    grid-column-start: span 1;
  }
}
@media screen and (min-width: 480px) {
  .grid-col-temp {
    grid-template-columns: 1fr 1fr;
    grid-gap: 36px;
  }

  .long-grid-cell {
    grid-column-start: span 2;
    width: 455px;
  }
}
@media screen and (min-width: 768px) {
  .grid-col-temp {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 36px;
  }
}
@media screen and (min-width: 996px) {
  .grid-col-temp {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 36px;
  }
}
@media screen and (min-width: 1200px) {
  .grid-col-temp {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 36px;
  }
}
</style>
