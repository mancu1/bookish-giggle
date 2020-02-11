<template>
  <v-app>
    <Header />
    <v-content>
      <HelloWorld />
      <SelectedBar />
      <OrdersGrid />
      <LastScreen />
    </v-content>
    <LoginPopup />
  </v-app>
</template>

<script>
import HelloWorld from "./components/FirstScreen";
import Header from "./components/Header/Header";
import SelectedBar from "./components/SelectedBar";
import OrdersGrid from "./components/MainPart/OrdersGrid";
import LastScreen from "./components/LastScreen";
import LoginPopup from "./components/LoginPopup";

export default {
  name: "App",

  components: {
    LoginPopup,
    LastScreen,
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
