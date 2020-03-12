<template>
  <v-app-bar absolute app>
    <v-spacer class="col-5" />
    <div class="align-center justify-center col-2">
      <v-img
        alt="Vuetify Logo"
        class="shrink"
        contain
        :src="require('../../assets/logo.png')"
        transition="scale-transition"
        height="40"
      />
    </div>
    <div class="d-flex align-center col-5">
      <div class="hidden-sm-and-down">
        <v-btn target="_blank" class="mx-1 px-0" text small>
          <span>Клиенту</span>
        </v-btn>
        <v-btn target="_blank" class="mx-1 px-0" text small>
          <span>работнику</span>
        </v-btn>
        <v-btn target="_blank" class="mx-1 px-0" text small>
          <span>арендодателю</span>
        </v-btn>
      </div>
      <v-spacer />
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
