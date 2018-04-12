<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
      <img class="img-header" src="../src/assets/CareScore_logo.png">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.header{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: #F05638;
}

.img-header{
  float: left;
  padding: 10px;
  width: 140px;
  height: 45px;
  cursor: pointer;
}

</style>
