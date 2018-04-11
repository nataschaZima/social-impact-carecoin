<template>
<section>
<link rel="stylesheet" type="text/css" href="style.css" />
<div class="container1">
<div class="profile_photo_container"><img class="photo" src="http://i.dailymail.co.uk/i/pix/2015/09/24/19/0DC0A5F000000578-0-Experts_believe_they_ve_found_the_tomb_of_Leonardo_s_Mona_Lisa_m-a-52_1443119320017.jpg"></img></div>
<div class="profile_tagline_container"><h1 class="name">Mona Lisa</h1></div >
<div class="profile_count_container"><h2>Your score:</h2><h3 class="score">450</h3></div>
</div>
<div class="container2">
<a class="button_buy" href="#"> Reward Someone </a>
<a class="button_buy" href="#"> Buy Points </a>
</div>
</section>
</template>
<script>

export default {

}
</script>

<style>
.container1 {
  display: block;
  position: relative;
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  height: 200px;
}

.container2 {
  display: block;
  position: relative;
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 20px;
  height: 100px;
  background-color: white;
}


.profile_photo_container {
  display: block;
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
  border: 1px grey solid;
  box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.button_buy {
  display: inline-block;
  height: 80px;
  width: 200px;
  background-color: yellow;
  margin-left: 20px;
  color: white;
}

.score {
  font-size: 60px;

}

.photo {
  position: relative;
  margin-top: 25%;
  margin-left: 25%;
  width: 50%;
  height: 50%;
}

.name {
  margin-left: 20px;
}

.profile_tagline_container {
  display: block;
  position: relative;
  float: left;
  width: 60%;
  height: 100%;

}

.profile_count_container {
  display: block;
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  border: 1px grey solid;
  box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

</style>
