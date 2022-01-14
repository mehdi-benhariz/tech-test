<template>
  <h1>know more about kleed</h1>
  <div v-if="character.length">
    <div v-for="prop in character" :key="prop.id" id="card">
      <p>{{ prop.title }}: {{ prop.value }}</p>
    </div>
  </div>
  <div v-else>
    <p>Sorry there are no data :(</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: [],
    };
  },
  methods: {
    async fetchCharacters() {
      const response = await fetch(
        "https://mocki.io/v1/a980d3fd-7eac-4450-a2fb-aa3be3ee01d6"
      );
      const data = await response.json();
      console.log(data);
      this.character = data;
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>

<style>
#card {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#card p {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
}
</style>
