<template>
    <div class="mt-1 cursor-pointer d-flex align-items-center" >
    <div v-if="$store.state.user">
    <span>User</span>
        <button @click="$store.dispatch('logout')">Logout</button>
    </div>
    <div v-if="!$store.state.user">
       <router-link to="/signup">
        <span v-if="b" @click="bFalse">Login</span>
        </router-link>
        <router-link to="/login">
        <span v-if="!b" @click="bTrue">Signup</span>
       </router-link>
    </div>
      <img v-if="this.v == true" src="../../assets/icons8-login-64.png" alt="" class="w-500" @mouseover="ch()" @mouseleave="cha()">
      <img v-else src="../../assets/vvv.png" alt="" @mouseover="ch()" class="w-500" @mouseleave="cha()">
    </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "login-name",
  data () {
    return {
      v: true,
      b: false
    }
  },
  setup () {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  methods: {
    ch () {
      this.v = false
    },
    cha () {
      this.v = true
    },
    bTrue () {
      this.b = true
    },
    bFalse () {
      this.b = false
    }
  }
}
</script>

<style  scoped>
.w-500{
    width: 50px;
    height: 50px;
}
</style>
