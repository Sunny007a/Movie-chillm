<template>
    <div>
           <div class="container">
            <div class="row ">
                <div class="col-12 d-flex justify-content-center">
                    <div class="row ">
                   <form @submit.prevent="login">
                   <h2>Login</h2>
                   <div class="form-group">
                      <label>Email</label>
                      <input type="text" class="form-control" v-model="login_form.email" placeholder="Email">
                   </div>
                   <div class="form-group">
                      <label>Password</label>
                      <input type="text" class="form-control" v-model="login_form.password" placeholder="Password">
                   </div>
                   <input type="submit" value="Login">
                  </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'final-login',
  setup () {
    const login_form = ref({})
    const store = useStore()

    const login = () => {
      store.dispatch('login', login_form.value)
    }

    return {
      login_form,
      login

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
