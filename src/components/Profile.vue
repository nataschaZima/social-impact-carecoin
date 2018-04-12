<template>
<section>
<div class="container1">
<img class="photo" src="../assets/top_image_profile.jpg"></img>
</div>
<div class="container2">
<a class="button_buy" href="#"> Reward Someone </a>
<a class="button_buy" href="#"> Buy Points </a>
</div>
<div class="container3">
<img class="photo" src="http://i.dailymail.co.uk/i/pix/2015/09/24/19/0DC0A5F000000578-0-Experts_believe_they_ve_found_the_tomb_of_Leonardo_s_Mona_Lisa_m-a-52_1443119320017.jpg"></img>
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
  width: 100%;
  margin-right: 5%;
  margin-left: 5%;
  height: 480px;
}

.container3 {
  display: block;
  position: relative;
  width: 100%;
  margin-right: 5%;
  margin-left: 5%;
  height: 300px;
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
  padding: 20px;
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
  background-color: #FFC80A;
  margin-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 200px;
  color: white;
  border-radius: 5px;
}

.score {
  font-size: 60px;

}

.photo {
  object-fit: contain;
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
