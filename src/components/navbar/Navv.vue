<template>
    <div class="d-flex justify-content-between mt-1">
        <router-link to="/">
         <div class="d-flex align-items-center vv">

            <img src="@/assets/loko.png" class="img-s" alt="">
             <h4 class=" text-light border-end p-2">ChillM</h4>
             <img src="@/assets/lodis.png" class="ms-1 mb-2" alt="">

         </div>
        </router-link>
         <div class="d-flex align-items-center mt-2">
             <ul class="d-flex align-items-center">
                 <li>
                     <router-link to="/movie" class="me-2">
                         Movies
                     </router-link>
                 </li>
                 <li>
                     <router-link to="/actor">
                         Actors
                     </router-link>
                 </li>
                 <li>
                     <router-link to="/profile">
                         Profile
                     </router-link>
                 </li>
             </ul>
         </div>

    </div>
</template>

<script>
export default {
    "name": "nav-bar",
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
  *{
      font-family: 'Exo 2', sans-serif;
  }
  .img-s{
      width: 50px !important;
  }
  .vv img{
      width: 70px;
  }
 .vv h4{
       background: -webkit-linear-gradient(rgb(184, 0, 0), rgb(255, 145, 101));
       background-clip: text;
       -webkit-text-fill-color: transparent;
       font-family: 'Koulen', cursive;
  }
  li{
      list-style: none;
      font-size: 18px;
      margin-right: 1rem;

  }

  li a{
      color: #e7d2fe;
      text-decoration: none !important;
  }
  a:hover{
      color: rgb(245, 198, 179) !important;
  }
</style>
