<template>
  <q-page class="flex flex-center">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
      <q-card-section class="bg-blue">
        <q-form class="q-gutter-md">

          <q-input label="Username"></q-input>
          <q-input label="Password" type="password"></q-input>
          <q-btn class="full-width" color="primary" label="LOGIN" rounded></q-btn>
          <div class="text-center q-mt-sm q-gutter-lg">
            <router-link class="text-white" to="/">Criar Conta</router-link>
            <router-link class="text-white" to="/">Esqueceu a senha</router-link>
          </div>
        </q-form>
      </q-card-section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage'
})
</script>
