<template>
  <h1>This is Kleed page</h1>
  <div v-if="Characters.length">
    <div v-for="Character in Characters" :key="Character.id">
      <div></div>
      <p>{{ Character.title }}: {{ Character.value }}</p>
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
      Characters: [],
    };
  },
  methods: {
    async fetchCharacters() {
      const response = await fetch(
        "https://mocki.io/v1/a980d3fd-7eac-4450-a2fb-aa3be3ee01d6"
      );
      const data = await response.json();
      console.log(data);
      this.Characters = data;
      console.log({ character: this.Characters[0].title });
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>

<style></style>
