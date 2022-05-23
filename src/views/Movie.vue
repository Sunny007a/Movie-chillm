<template>
  <div class="he">
    <div class="container">
      <div class="row">
        <div class="col-12">
         <div class="w d-flex align-items-center">
           <img v-bind:src="'../image/' + movie.bgimg" class="n" alt="">
           <div class="text d-flex align-items-center">
             <div class="imn col-md-6 col-lg-4 d-flex justify-content-end me-4">
               <img v-bind:src="movie.image" class="m" alt="">
             </div>
             <div class="col-md-6 col-lg-6 p-5">
               <h2 class="text-uppercase gra">{{movie.title}}</h2>
               <span><i class="fa-solid fa-star mb-2"></i>{{movie.rating}} || {{movie.time}}</span>
               <p>Lorem, ipsum dolor sit amet consectetur adiunt non unde obcaecati dolore tempora facere fugit explicabo veritatis?</p>
               <hr />
               <div class="d-flex">
                 <a :href="movie.trailer">
                   <button class="btn btn-primary p-2 me-3">Watch Trailer</button>
                </a>

                 <button class="btn btn-outline-primary p-2 ">Watch Movie</button>
               </div>

             </div>
           </div>
         </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      movie: [],
      bgimg: './image/'
    }
  },
  props: {
    list: {
      requied: true
    }
  },
  mounted () {
    this.fetchmovie(this.$route.params.id)
  },
  methods: {
    async fetchmovie (movieid) {
      axios.get('http://localhost:3000/posts/' + movieid).then((response) => {
        console.log(response.data)
        this.movie = response.data
        this.bgimg += this.movie.bgimg
        console.log(this.bgimg)
      })
    }
  }

}
</script>

<style  scoped>

.he{
  height: 100vh;
}
.gra{
       background: -webkit-linear-gradient(rgb(54, 0, 136), rgb(99, 2, 255));
       background-clip: text;
       -webkit-text-fill-color: transparent;
}
.n{
  width: 100%;
  height: 90vh;
  opacity: .3;
  filter: blur(0.5px);
}
.m{
  width: 200px;
  border-radius: 20px;
}
h2{
  font-weight: bold;
}
.text{
  position: absolute;
}
</style>
