<template id="registeration">
<section>
  <h2>Supporting documents</h2>
  <b-field>
    <b-upload v-model="dropFiles"
        multiple
        drag-drop>
        <section class="section">
            <div class="content has-text-centered">
              <img class="arrow" src="@/assets/arrow-up.png">
                <p>
                    <b-icon size="is-large"> </b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
            </div>
        </section>
    </b-upload>
</b-field>

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
  <h3> 1. How is your working situation?</h3> <br>
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
  }

  .checkboxes{
    display: inline-flex;
    flex-direction: column;
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
    margin-bottom: 20px;
  }

  .button{
    margin-bottom: 40px;
  }

  .arrow{
    width: 70px;
    margin: 0 auto;
  }
</style>
