<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="../assets/logo.svg"
      style="width: 200px; height: 200px"
    /> -->
    <q-form>
      <div style="display: flex; justify-content: center">
        <h2 id="title">My form</h2>
      </div>
      <q-div class="elt-data">
        <q-input
          label="race"
          type="text"
          v-model="race"
          :error="raceError"
          :error-label="raceErrorLabel"
          :error-messages="raceErrorMessages"
          :rules="raceRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <p>{{ race }}</p>
      <q-div class="elt-data">
        <q-input
          label="height"
          type="number"
          v-model="height"
          :error="heightError"
          :error-label="heightErrorLabel"
          :error-messages="heightErrorMessages"
          :rules="heightRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <q-div class="elt-data">
        <q-input
          label="Name"
          type="text"
          v-model="name"
          :error="nameError"
          :error-label="nameErrorLabel"
          :error-messages="nameErrorMessages"
          :rules="nameRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <q-div class="elt-data">
        <q-input
          label="Power"
          type="number"
          v-model="power"
          :error="powerError"
          :error-label="powerErrorLabel"
          :error-messages="powerErrorMessages"
          :rules="powerRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <q-div class="elt-data">
        <q-input
          label="Autofarm"
          type="number"
          v-model="autofarm"
          :error="autofarmError"
          :error-label="autofarmErrorLabel"
          :error-messages="autofarmErrorMessages"
          :rules="autofarmRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <q-div class="elt-data">
        <q-input
          label="Magic level"
          type="number"
          v-model="magiclevel"
          :error="magic - levelError"
          :error-label="magic - levelErrorLabel"
          :error-messages="magic - levelErrorMessages"
          :rules="magic - levelRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <q-div class="elt-data">
        <q-input
          label="Greed level"
          type="number"
          v-model="greedlevel"
          :error="greed - levelError"
          :error-label="greed - levelErrorLabel"
          :error-messages="greed - levelErrorMessages"
          :rules="greed - levelRules"
          :validate-on-blur="true"
          :validate-on-change="false"
        />
      </q-div>
      <q-button id="submit-btn" @click="generate">Generate</q-button>
    </q-form>
  </q-page>
</template>
<style>
#title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
  color: rgb(56, 56, 56);
}
form {
  width: 80%;
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
  padding: 20px;
}
.elt-data {
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
  /* width: 60%; */
  /* margin: 30px 40px; */
}
#submit-btn {
  margin-top: 20px;
  background-color: rgb(0, 183, 255);
  padding: 16px 20px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
</style>

<script>
const YAML = require("yaml");
function downloadObjectAsYaml(exportObj, exportName) {
  var dataStr = "data:text/yaml;charset=utf-8," + exportObj;
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".yaml");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export default {
  name: "HelloWorld",
  data: () => ({
    race: "",
    height: null,
    name: "",
    power: "",
    autofarm: "",
    magiclevel: null,
    greedlevel: null,
  }),
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    generate() {
      const doc = new YAML.Document();
      doc.contents = {
        race: this.race,
        height: this.height,
        name: this.name,
        power: this.power,
        autofarm: this.autofarm,
        "magic-level": this.magiclevel,
        "greed-level": this.greedlevel,
      };
      const test = {
        name: "test",
        age: 30,
      };
      downloadObjectAsYaml(YAML.stringify(doc.contents), "character");

      // downloadObjectAsYaml(YAML.stringify(doc.contents), "test");
    },
  },
};
</script>
