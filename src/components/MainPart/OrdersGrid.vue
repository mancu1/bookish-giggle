<template>
  <v-col cols="12" style="background-color: #f3f1f2">
    <v-row>
      <v-spacer />
      <div class="d-grid col-temp-4">
        <Order style="width: 210px" v-for="n in count / 2" v-bind:key="n" />
        <Comment class="long-grid-cell" style="width: 455px" />
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
.col-temp-4 {
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 36px;
}
.long-grid-cell {
  grid-column-start: span 2;
}
</style>
