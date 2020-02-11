<template>
  <v-app>
    <Header />
    <v-content>
      <HelloWorld />
      <SelectedBar />
      <OrdersGrid />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/FirstScreen";
import Header from "./components/Header/Header";
import SelectedBar from "./components/SelectedBar";
import OrdersGrid from "./components/MainPart/OrdersGrid";

export default {
  name: "App",

  components: {
    OrdersGrid,
    SelectedBar,
    Header,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
