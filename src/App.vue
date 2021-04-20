<template>
  <div>
    <div class="nav">
      <img class="img" src="pokebola.png">
      <a class="a">
        Pokemon app
      </a>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">

.nav {
  height: 50px;
  display: flex;
  justify-items: start;
  align-items: center;
  background-color: rgb(235, 235, 235);
  margin-bottom: 2%;

  a {
    padding-left: 2%;
    font-size: 25px;
    align-items: center;
  }
  img {
    padding-left: 4%;
  }
}
</style>
