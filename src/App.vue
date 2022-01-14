<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        /> -->

        <q-toolbar-title> my technical test </q-toolbar-title>
        <q-btn @click="$router.push({ name: 'Home' })">Home </q-btn>
        <q-btn @click="$router.push({ name: 'Kleed' })">Kleed </q-btn>
        <q-btn @click="$router.push({ name: 'Max' })">Max </q-btn>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
    </q-drawer> -->

    <q-page-container>
      <!-- <home /> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Home from "./views/Home.vue";

export default {
  name: "LayoutDefault",

  // components: {
  //   Home,
  // },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
