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
    <v-spacer class="hidden-sm-and-down" />
    <div class="d-flex align-center">
      <div class="hidden-sm-and-down">
        <v-btn target="_blank" text>
          <span>Клиенту</span>
        </v-btn>
        <v-btn target="_blank" text>
          <span>работнику</span>
        </v-btn>
        <v-btn target="_blank" text>
          <span>арендодателю</span>
        </v-btn>
      </div>
      <div class="mx-3 mt-4 align-center justify-center">
        <v-text-field
          dense
          rounded
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </div>
      <div v-if="!isLogin">
        <v-btn color="#7a4999" dark @click="openPopup">
          <v-icon>mdi-login</v-icon>
          <span>Вход</span>
        </v-btn>
      </div>
      <div v-else>
        <v-btn @click="isLogin = false">
          <span>{{ name }}</span>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLogin: {
      get() {
        return this.$store.state.login;
      },
      set(newVal) {
        this.$store.commit("setLogin", newVal);
      }
    },
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    openPopup() {
      this.$store.commit("setPopup", true);
    }
  }
};
</script>

<style scoped></style>
