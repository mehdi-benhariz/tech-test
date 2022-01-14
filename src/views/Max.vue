<template>
  <h1>This is maKleedx page</h1>
  <div v-if="Characters.length > 0">
    <div v-for="Character in Characters" :key="Character.id">
      <!-- <div></div> -->
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
        "https://mocki.io/v1/ac05988f-e2e5-42f9-8088-9da6979926e"
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
