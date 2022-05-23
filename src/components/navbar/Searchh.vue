<template>
    <div class="d-flex max-h align-items-center mt-1 position-relative">
        <div class="me-4 m-30">
            <div class="form__group field">
    <input type="input" v-model="r" class="form__field" placeholder="Name" name="name" id='name' required @keyup="msearch"/>
    <label for="name" class="form__label">Search...</label>
    <span>{{sresult.title}}</span>
    </div>
        </div>
        <div v-if="sresult.length > 0 && r.length > 0" class="flex-column position-absolute mt-60 d-flex justify-content-center w-500 z-index1 bg-primary">
          <ul :key="index" v-for="(movie,index) in sresult" class="">
            <router-link :to="`/movie/${movie.id}`">
            <li class="d-flex align-items-center border-bottom cursor-pointer">
              <img v-bind:src="'./image/' + movie.bgimg" class="imgsize" alt="" />
              <span class="fs-10 ms-1">{{movie.title}}</span>
            </li>
            </router-link>

          </ul>
        </div>
        <div v-if="this.noresult == true" class="position-absolute t-20">
            <ul >
              <li class="text-danger">no result Found For "{{r}}"</li>
            </ul>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  "name": "search-barr",
  data () {
    return {
      sresult: [],
      noresult: false,
      r: ''
    }
  },
  methods: {
    msearch (e) {
      axios.get('http://localhost:3000/posts').then((response) => {
        const db = response.data
        const lowText = e.target.value.toLowerCase()
        console.log(this.r.length)
        clearTimeout(this.search)
        this.search = setTimeout(() => {
          if (lowText.length >= 2) {
            const filterPro = db.filter((product) => {
              return product.title.toLowerCase().includes(lowText)
            })
            this.sresult = filterPro
            this.noresult = false
          }
          if (this.sresult.length === 0) {
            this.noresult = true
          }
        }, 600)
      })
    }
  }
}
</script>

<style>
a{
  color: #f8f9fa !important;
}
.flex-column{
  flex-direction: column;
}
.cursor-pointer{
  cursor: pointer;
}
.cursor-pointer img{
  height: 80px;
}
.z-index1{
  z-index: 1;
}
.w-500{
  width: 350px;
}
.fs-10{
  font-size: 13px;
}
.r-10{
  padding: 15px !important;
}
.t-20{
  top: 65px;
}
.mt-60{
  top: 50px;
  right: 10px;
}
.imgsize{
  width: 100px;
}
.m-30{
    margin-bottom: 20px;
}
.max-h{
    height: 40px;
}
.w-10{
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
}
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 0px;
  width: 200px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #d2e4fe;
  outline: 0;
  font-size: 1rem;
  color: #d2e4fe;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1rem;
  cursor: text;
  color: #b8d6ff;
  top: 30px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 10px;
  color: #9b9b9b;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #6e1199, #9d38ef);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #c186f1;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}

</style>
