<template>
<section>
<div class="container1">
<img class="photo" src="../assets/ProfilePage_Top.jpg"></img>
</div>
<div class="container2">
<div class="central_container">
<a class="button reward" href="#">REWARD SOMEONE</a>
<a class="button buy" href="#">BUY CARECOINS</a>
</div>
</div>
<div class="container3">
<img class="photo" src="../assets/Profile_Section_end.jpg"></img>
</div>
</section>
</template>
<script>

export default {

}
</script>

<style>

.central_container {
  display: block;
  width: 840px;
  position: relative;
  margin: 0 auto;

}

.container1 {
  display: block;
  position: relative;
  width: 100%;
  height: 1480px;
}

.container3 {
  display: block;
  position: relative;
  width: 100%;
  height: 300px;
}

.photo {
  object-fit: contain;
}

.container2 {
  display: block;
  position: relative;
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 20px;
  height: 150px;
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

.button {
  display: inline-block;
  float: left;
  padding-top: 20px;
  width: 400px;
  color: #4C4C4C;
  height: 65px;
  border-radius: 50px;
  font-weight: bold;
  font-family: "PT Sans";
  font-size: 20px;
  border: 0px;
}

.button:nth-of-type(1) {
margin-right: 40px;

}

.buy {
  background-color: #FFC80A;
}

.reward {
  background-color: #51B9BC;
}

.score {
  font-size: 60px;

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
