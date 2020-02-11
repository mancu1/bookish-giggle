<template>
  <v-card router to="">
    <v-img
      :src="require('../../assets/firstHouse.png')"
      class="d-flex align-start justify-end text-end"
    >
      <v-card-subtitle class="mt-n2 mr-n2">
        <span
          style="background-color: #1baf5d; border-radius: 15px; color: white; padding: 5px"
        >
          {{ (Math.random() * 500).toFixed() + "0 руб." }}
        </span>
      </v-card-subtitle>
    </v-img>
    <div style="background-color: #1baf5d; height: 3px" />
    <v-row class="ma-auto">
      <v-spacer />
      <div
        style="background-color: #1baf5d; border-radius: 15px; z-index: 1"
        class="pa-1 mt-n5"
      >
        <v-icon dark>mdi-home</v-icon>
      </div>
      <v-spacer />
    </v-row>
    <p class="text-center">
      <span class="Text-Style">
        {{ order.name }}
      </span>
    </p>
    <p class="text-center">
      <span class="Text-Style-2">
        {{ order.user }}
      </span>
    </p>
    <v-rating
      half-icon="mdi-star-half"
      half-increments
      :value="Math.random() * 5"
    />
  </v-card>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      order: {
        name: "2 Комнатная квартира \n" + "рядом с Ривьерой",
        user: "Арендодатель",
        rate: 3.5,
        cost: "1000 руб."
      }
    };
  }
  // props: {
  //   order: {
  //     type: Object,
  //     require: true
  //   }
  // }
};
</script>

<style scoped></style>
