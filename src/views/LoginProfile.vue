<template>
    <div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-12">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-2">
                            <form @submit.prevent="register">
                            <h2>Sign-up</h2>
                            <span>Gmail<input type="text" v-model="register_form.email"  placeholder="Gmail" /></span>
                            <span>Password<input type="text"  v-model="register_form.password" placeholder="Password" /></span>
                            <input type="submit" value="Login">
                            </form>

                        </div>
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
  "name": 'pro-login',
  setup () {
    const register_form = ref({})
    const store = useStore()

    const register = () => {
      store.dispatch('register', register_form.value)
    }

    return {
      register_form,

      register
    }
  },
  methods: {
    //    async hundleerr() {
    //        let response = await axios.post('http://localhost:3000/login', {
    //            email: this.email,
    //            password: this.password
    //        })
    //        console.log(response)
    //    }
  }
}
</script>

<style lang="scss" scoped>

</style>
