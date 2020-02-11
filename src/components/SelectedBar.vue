<template>
  <v-col align-self="center" cols="12">
    <v-row align="start">
      <v-spacer class="col-1" />
      <div class="col-3">
        <v-btn text>
          <span>РЕКОМЕНДУЕМ</span>
        </v-btn>
        <v-btn text>
          <span>НОВЫЕ</span>
        </v-btn>
      </div>
      <v-spacer class="col-1" />
      <v-col cols="2">
        <v-select label="Сортировка" outlined flat rounded />
      </v-col>
      <v-spacer class="col-5" />
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "SelectedBar"
};
</script>

<style scoped></style>
