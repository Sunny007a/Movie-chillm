<template>
  <div class="home">
   <div class="container">
     <div class="row">
       <div class="col-12">

           <PopumovTitle />

       </div>
     </div>
   </div>
   <div class="container mt-4">
     <div class="row d-flex">
       <div class="col-12">
         <div class="row">
           <div class="col-12">
              <div class="card-columns">
                <Popumov :key="list.id" v-for="list in lists" :list="list"/>

              </div>
           </div>
         </div>

       </div>
     </div>
   </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Popumov from '../components/Popularmovies.vue'
import PopumovTitle from '../components/Popularmoviestitle.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    Popumov, PopumovTitle
  },
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/posts').then((response) => {
      console.log(response.data)
      this.lists = response.data
    })
  }
}
</script>
