<template>
  <v-col cols="12" style="background-color: #f3f1f2">
    <v-row>
      <v-spacer />
      <div class="d-grid col-temp-4">
        <Order style="width: 210px" v-for="n in count" v-bind:key="n" />
      </div>
      <v-spacer />
    </v-row>
    <v-row class="mt-10">
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
export default {
  name: "OrdersGrid",
  components: { Order },
  data() {
    return {
      count: 16
    };
  },
  methods: {
    loadMore() {
      this.count += 16;
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
</style>
