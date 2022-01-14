<template>
  <div class="home">
    <caracter-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CaracterForm from "@/components/CaracterForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    CaracterForm,
  },
});
</script>
