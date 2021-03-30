<template>
  <div id="app">
    <header>
      <Header></Header>
    </header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  name: 'app',
  components: { Header, Footer }
}
</script>

<style lang="scss" scoped>
</style>
