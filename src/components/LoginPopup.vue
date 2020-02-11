<template>
  <v-dialog v-model="popup" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">
          ВХОД И РЕГИСТРАЦИЯ
        </span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="name" label="Email*" required />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <div class="ma-auto">
          <v-btn color="purple darken-2" dark @click="login">Продолжить</v-btn>
        </div>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginPopup",
  data() {
    return {
      pop: false
    };
  },
  computed: {
    popup: {
      get() {
        return this.$store.state.popup;
      },
      set(newVal) {
        this.$store.commit("setPopup", newVal);
      }
    },
    name: {
      get() {
        return this.$store.state.name;
      },
      set(newName) {
        this.$store.commit("setName", newName);
      }
    }
  },
  methods: {
    login() {
      this.$store.commit("setLogin", true);
      this.popup = false;
    }
  }
};
</script>

<style scoped></style>
