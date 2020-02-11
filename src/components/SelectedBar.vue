<template>
  <v-col cols="12" class="pa-0 ma-0">
    <v-row align="start">
      <v-spacer class="col-1" />
      <v-col cols="3">
        <v-btn text>
          <span>РЕКОМЕНДУЕМ</span>
        </v-btn>
        <v-btn text>
          <span>НОВЫЕ</span>
        </v-btn>
      </v-col>
      <v-spacer class="col-1" />
      <v-col cols="2">
        <v-select label="Сортировка" dense outlined flat rounded />
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
