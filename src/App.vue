<template>
  <v-app>
    <Header />
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/FirstScreen";
import Header from "./components/Header/Header";

export default {
  name: "App",

  components: {
    Header,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
