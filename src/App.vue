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
    <div class="d-flex align-center justify-center flex-column" id="over-id">
      <div class="d-flex align-center justify-center">
        <v-img
          id="logoid"
          alt="Vuetify Logo"
          class="shrink mr-3"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          height="40"
        />
      </div>
      <div class="d-flex">
        <div
          style="background-color: #5d6869; width: 200px; height: 20px; margin: 10px"
        >
          <div id="loading-id" style="width: 200px; height: 20px;" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "./components/FirstScreen";
import Header from "./components/Header/Header";
import SelectedBar from "./components/SelectedBar";
import OrdersGrid from "./components/MainPart/OrdersGrid";
import LastScreen from "./components/LastScreen";
import LoginPopup from "./components/LoginPopup";
import { TimelineLite, Power4 } from "gsap";

export default {
  name: "App",
  mounted() {
    const tl = new TimelineLite();
    tl.from("#loading-id", 2, {
      width: "0px",
      ease: Power4.easeIn
    }).to("#logoid", 1, { rotate: 360 });
    tl.to("#logoid", 1.2, {
      y: -window.innerHeight / 2 + 50,
      zIndex: 10,
      display: "none"
    });
    tl.to("#over-id", 1, { y: -window.innerHeight, opacity: 0 });
  },

  components: {
    LoginPopup,
    LastScreen,
    OrdersGrid,
    SelectedBar,
    Header,
    HelloWorld
  }
};
</script>

<style>
#loading-id {
  background-color: #f3f1f2;
}
#over-id {
  opacity: 0.9;
  z-index: 25;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #000101;
}
</style>
