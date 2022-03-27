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

        <q-toolbar-title> Wolf Gear </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
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
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { Dark, Cookies } from "quasar";

const linksList = [
  {
    title: "Metabase",
    caption: "Wolf Gear Metabase",
    icon: "analytics",
    link: "http://wolfgear.tech:3000",
  },
  {
    title: "Github",
    caption: "github.com/marcodkts",
    icon: "code",
    link: "https://github.com/marcodkts",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
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
      Cookies.set('darkMode', val)
    },
    // darkModeCookie() {
    //   if (Cookies.get('darkMode') != null)
    //     Dark.set(Cookies.get('darkMode'))
    // },
    // onLoad() {
    //   this.darkModeCookie()
    // },
  },
});
</script>
