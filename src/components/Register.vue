<template id="registeration">
<section>
  <h3 class="st-question"> 1. How is your working situation?</h3> <br>
  <div class="checkboxes">
    <b-checkbox>Full time</b-checkbox> <br>
    <b-checkbox>Part time</b-checkbox> <br>
    <b-checkbox>Volunteering</b-checkbox><br>
    <b-checkbox>Household</b-checkbox> <br>
  </div>
  <hr>
  <h3>2. Who are your household dependants?</h3><br>
    <div class="children">
      <p>Children</p> <b-select placeholder="Select a number" rounded>
          <option value="number"> None </option>
          <option value="number"> 1 </option>
          <option value="number"> 2 </option>
          <option value="number"> 3 </option>
          <option value="number"> 4 </option>
          <option value="number"> 5 </option>
          <option value="number"> 6 </option>
          <option value="number"> 7 </option>
          <option value="number"> 8 </option>
          <option value="number"> 9 </option>
          <option value="number"> 10 </option>
      </b-select>
    </div> <br>
    <div class="partner">
      <p>Partner</p> <b-select placeholder="Select a number" rounded>
          <option value="number"> None </option>
          <option value="number"> 1 </option>
          <option value="number"> 2 </option>
          <option value="number"> 3 </option>
          <option value="number"> 4 </option>
          <option value="number"> 5 </option>
          <option value="number"> 6 </option>
          <option value="number"> 7 </option>
          <option value="number"> 8 </option>
          <option value="number"> 9 </option>
          <option value="number"> 10 </option>
      </b-select>
    </div><br>
    <div class="eldery">
      <p>Eldery</p> <b-select placeholder="Select a number" rounded>
          <option value="number"> None </option>
          <option value="number"> 1 </option>
          <option value="number"> 2 </option>
          <option value="number"> 3 </option>
          <option value="number"> 4 </option>
          <option value="number"> 5 </option>
          <option value="number"> 6 </option>
          <option value="number"> 7 </option>
          <option value="number"> 8 </option>
          <option value="number"> 9 </option>
          <option value="number"> 10 </option>
      </b-select>
    </div><br>
    <div class="other">
      <p>Other dependence</p> <b-select placeholder="Select a number" rounded>
          <option value="number"> None </option>
          <option value="number"> 1 </option>
          <option value="number"> 2 </option>
          <option value="number"> 3 </option>
          <option value="number"> 4 </option>
          <option value="number"> 5 </option>
          <option value="number"> 6 </option>
          <option value="number"> 7 </option>
          <option value="number"> 8 </option>
          <option value="number"> 9 </option>
          <option value="number"> 10 </option>
      </b-select>
    </div>
    <hr>
    <h3>3. What’s your contribution at home?</h3><br>
    <div class="slider">
      <span>0% </span> <vue-slider class="vue-slider-component vue-slider-horizontal" style="width: 250px;display:  block;margin:  0 auto;/* text-align:  center; */" v-model="value"></vue-slider><span>100%</span>
    </div><br>
    <hr>

  <div class="inputs-user">
    <b-field style="
    margin:  0 auto;
    display: -webkit-inline-box;" grouped>

    <b-field label="Name">
        <b-field>
            <b-select style="margin-left: 40px; margin-right: -30px;" placeholder="Title">
                <option>Mr.</option>
                <option>Ms.</option>
            </b-select>
            <b-input style="width: 290px; padding-left: 30px;" placeholder="Name" expanded></b-input>
        </b-field>
    </b-field>

    <b-field label="Email">
        <b-input style="width: 290px" placeholder="some@email.com"></b-input>
    </b-field>

    <b-field label="Password" style="">
    <b-input type="password" maxlength="30"></b-input>
</b-field>
  </b-field>

  <h1 class="docs-upload"> Please upload supporting documents</h1><br>
  <b-field>
  <b-upload v-model="dropFiles"
      multiple
      drag-drop>
      <section class="section">
          <div class="content has-text-centered">
            <img class="arrow" src="@/assets/arrow-up.png">
              <p>
                  <b-icon size="is-large"> </b-icon>
              <p>Drop your files here or click to upload</p>
          </div>
      </section>
  </b-upload>
  </b-field>
  </div>


  <div class="tags">
      <span v-for="(file, index) in dropFiles"
          :key="index"
          class="tag is-primary" style="margin:  0 auto;">
          {{file.name}}
          <button class="delete is-small"
              type="button"
              @click="deleteDropFile(index)">
          </button>
      </span>
  </div>

    <router-link to="/Calculation">

      <input class="button" type="submit" value="Submit">

    </router-link>

</section>
</template>

<script>
import vueSlider from 'vue-slider-component'

export default {
  components: {
    vueSlider
  },
  data () {
    return {
      value: 0,
      dropFiles: []
    }
  },
  methods: {
    deleteDropFile (index) {
      this.dropFiles.splice(index, 1)
    }
  }
}
</script>

<style>

  h3{
    font-weight: bolder;
    font-size: 30px;
  }

  p{
    font-size: 22px;
  }


  .checkboxes{
    display: inline-flex;
    flex-direction: column;
    font-size: 20px;
  }

  .children{
    display: inline-block;
    padding: 15px;
  }

  .partner{
    display: inline-block;
    padding: 15px;
  }

  .eldery{
    display: inline-block;
    padding: 15px;
  }

  .other{
    display: inline-block;
    padding: 15px;
  }

  .slider{
    display: inline-flex;
    padding-top: 10px;
    margin-bottom: 60px;
  }

  .button{
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: bold;
  }

  .arrow{
    width: 70px;
    margin: 0 auto;
  }

  .docs-upload{
    font-weight: bold;
    font-size: 20px;
  }

  .inputs-user{
    display: block;
    text-align: center;
    margin: 0 auto;
  }

  .st-question{
    margin-top: 140px;
  }
</style>
