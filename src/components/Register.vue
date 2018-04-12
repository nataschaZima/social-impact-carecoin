<template id="registeration">
<section>
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
    </div>

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
      value: 0
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
  }


</style>
