<template>
  <div id="app">
    <header>
      <Header></Header>
    </header>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
export default {
  name: 'app',
  components: { Header }
}
</script>

<style lang="scss" scoped>
</style>
