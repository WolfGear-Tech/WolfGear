<template>
  <q-page class="flex flex-center">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
      <h1>Home Page</h1>
      <img
      alt="Wolf Gear Logo"
      src="~assets/wolf.svg"
      style="width: 200px; height: 200px"
    >
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>
