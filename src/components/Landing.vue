<template id="Landing">
<div>
<div class="containermain">
<img class="background" src="../assets/HomePage.jpg"></img>
</div>
<div class='link_container'>
<router-link tag="a" to="/Register" class='button-register'>
</router-link>
</div>
</div>
</template>

<script>
export default {
}
</script>

<style>

.containermain{
  width: 100%;
  position: relative;
  height: 1780px;
}

.background {
  object-fit: none;
}

.link_container{
position: relative;
  text-align: center;
  width: 100%;
}

.button-register {
display: inline-block;
height: 115px;
width: 400px;
opacity: 0;
}
</style>
