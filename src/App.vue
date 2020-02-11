<template>
  <v-app>
    <Header />
    <v-content>
      <HelloWorld />
      <SelectedBar />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/FirstScreen";
import Header from "./components/Header/Header";
import SelectedBar from "./components/SelectedBar";

export default {
  name: "App",

  components: {
    SelectedBar,
    Header,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
