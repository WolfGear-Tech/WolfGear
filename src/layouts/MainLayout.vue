<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn flat to="/" label="Wolf Gear" />
        </q-toolbar-title>

        <div>
          <a
            href="https://quasar.dev"
            target="_blank"
            style="text-decoration: none; color: #ffffff"
            >Quasar v{{ $q.version }}</a
          >
        </div>
        <q-toggle
          v-model="darkMode"
          icon="dark_mode"
          unchecked-icon="light_mode"
          @update:model-value="toggleDarkMode(darkMode)"
          persist
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list bottom>
        <!-- <q-expansion-item
          icon="contact_page"
          label="Contato"
          :content-inset-level="0.5"
        >
          <q-card>
            <EssentialLink
              v-for="link in contactLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-card>
        </q-expansion-item> -->
        <!-- <q-expansion-item
          icon="fa-solid fa-handshake"
          label="Parceiros"
          :content-inset-level="0.5"
        >
          <EssentialLink
            v-for="link in partnerLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-expansion-item> -->
        <q-item to="/about" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section> Sobre Nós </q-item-section>
        </q-item>
        <q-item to="/curriculum" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="history_edu" />
          </q-item-section>
          <q-item-section> Currículo </q-item-section>
        </q-item>
        <!-- <q-item to="/login" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa-solid fa-right-to-bracket" />
          </q-item-section>
          <q-item-section> Login </q-item-section>
        </q-item> -->
        <!-- <q-item to="/help" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="help"/>
          </q-item-section>
          <q-item-section> Ajuda </q-item-section>
        </q-item> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Dark, Cookies } from "quasar";


export default defineComponent({
  name: "MainLayout",

  components: {
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      darkMode: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    toggleDarkMode(val) {
      Dark.set(val);
      Cookies.set("darkMode", val);
    },
  },
});
</script>
