<template>
  <div class="position-relative">
    <nuxt-link class="add-character" to="/AddChar">Them Nhan Vat</nuxt-link>
    <CardList />
  </div>
</template>

<script>

import CardList from "../components/CardList/index.vue"
export default {
  name: 'IndexPage',
  components: {
    CardList
  }
}
</script>

<style scoped>
  .add-character {
    padding: 10px 20px;
    background-color: #2088de;
    color: #FFF;
    text-decoration: none;
    margin: 20px;
    display: inline-block;
  }
</style>