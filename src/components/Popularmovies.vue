<template>
    <div class="card ff bg-primary-50">
        <router-link :to="`/movie/${list.id}`">
        <div class="blur">
             <img v-bind:src="list.image" class="bg-image-hover card-image" alt="" @mouseover="bb" @mouseleave="mm">
             <i v-if="this.nn === true" class="fa-solid fa-play g"></i>
        </div>
      <h3 class="text-light mb-1">{{ list.title }}</h3>
       <div class="d-flex align-items-center v mt-0">
           <i class="fa-solid fa-star mb-1"></i>
           <span class="ms-1">{{list.rating}} | {{list.time}}</span>
       </div>
       <span class="aa">{{list.Category}}</span>
       </router-link>
    </div>
</template>

<script>
export default {
  "name": "popular-movie",
  data () {
    return {
      nn: false
    }
  },
  methods: {
    bb () {
      this.nn = true
    },
    mm () {
      this.nn = false
    }
  },
  props: {
    list: {
      required: true
    }
  }

}
</script>

<style>
a{
    text-decoration: none !important;
}
.blur{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.g{
    position: absolute;
    font-size: 40px;
    color: rgb(255, 0, 0);
    transition: all 1s;
}
.g:hover{
    cursor: pointer;
}
.blur img{
transition: 0.2s ease;
border-radius: 10px;
}

.blur img:hover {
    cursor: pointer;
opacity: 75%;
filter: blur(0.5px);
transition: 0.2s ease;
}
.bg-primary-50{
    background-color: rgba(0, 8, 20, 0.904) !important;
    border: none !important;
}
.aa{
    color: #adb5bd;
    font-size: 12px;
}
.fa-star{
    color: rgb(255, 174, 0);
    font-size: 10px;
}
.v span{
    font-size: 13px
}
h3{
    font-size: 15px !important;
}
.ff img{
     width: 100%;
 }
 .card-columns{
     display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px ,auto));
    gap: 1.5rem;
 }

</style>
