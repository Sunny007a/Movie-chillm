<template>
<nav class="container">
  <div class="row">
    <div class="col-12 d-flex justify-content-between border-bottom">
    <navbar />
    <div class="d-flex align-items-center">
      <Search />
    <Logining />
    </div>

    </div>
  </div>
</nav>
      <router-view/>

</template>

<script>
import navbar from './components/navbar/Navv.vue'
import Search from './components/navbar/Searchh.vue'
import Logining from './components/navbar/Loginn.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    navbar, Search, Logining
  },
  setup () {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>

</style>
