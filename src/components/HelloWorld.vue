<template>
<section>
  <h3> 1. How is your working situation?</h3> <br>
  <b-checkbox>Full time</b-checkbox> <br>
  <b-checkbox>Part time</b-checkbox> <br>
  <b-checkbox>Volunteering</b-checkbox><br>
  <b-checkbox>Household</b-checkbox> <br>
  <hr>
  <h3>2. Who are you household dependants?</h3><br>
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
    <h3>3. What’s your contribution at home?</h3>

</section>
</template>

<script>
export default {

}
</script>

<style>
  h3{
    font-weight: bolder;
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
</style>
