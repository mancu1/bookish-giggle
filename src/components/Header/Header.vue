<template>
  <v-app-bar absolute app>
    <div class="d-flex align-center">
      <!--      <v-img-->
      <!--        alt="Vuetify Logo"-->
      <!--        class="shrink mr-2"-->
      <!--        contain-->
      <!--        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png"-->
      <!--        transition="scale-transition"-->
      <!--        width="40"-->
      <!--      />-->
    </div>

    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <v-btn target="_blank" text>
        <span>Клиенту</span>
      </v-btn>
      <v-btn target="_blank" text>
        <span>Раотнику</span>
      </v-btn>
      <v-btn target="_blank" text>
        <span>Арендодателю</span>
      </v-btn>
      <div class="mx-3 mt-4 align-center justify-center">
        <v-text-field
          dense
          rounded
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </div>
      <div style="color: #7a4999">
        <v-btn color="#7a4999" dark>
          <v-icon>mdi-login</v-icon>
          <span>Вход</span>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
