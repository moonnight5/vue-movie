<template>
  <div id="main">
    <Header title="影院" />
    <CinemaMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CinemaMenu from "@/components/CinemaMenu";

export default {
  name: "Cinema",
  components: {
    Header,
    Footer,
    CinemaMenu
  }
};
</script>

<style scoped>

</style>
