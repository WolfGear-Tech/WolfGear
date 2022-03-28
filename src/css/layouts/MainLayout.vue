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
          <q-btn flat to="/" label="Wolf Gear"/>
        </q-toolbar-title>

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
        <q-expansion-item
          icon="category"
          label="Produtos"
          default-opened
          :content-inset-level="0.5"
        >
          <EssentialLink
            v-for="link in productsLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-expansion-item>
      </q-list>

      <q-list bottom>
        <q-expansion-item
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
        </q-expansion-item>
        <q-expansion-item
          icon="group_work"
          label="Parceiros"
          :content-inset-level="0.5"
        >
          <EssentialLink
            v-for="link in partnerLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-expansion-item>
        <q-item to="/about" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="article"/>
          </q-item-section>
          <q-item-section> Sobre Nós </q-item-section>
        </q-item>
        <q-item to="/help" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="help"/>
          </q-item-section>
          <q-item-section> Ajuda </q-item-section>
        </q-item>
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

const productsList = [
  {
    title: "Wolf Gear Metabase",
    icon: "analytics",
    link: "https://wolfgear.tech:3000",
  },
];
const contactList = [
  {
    title: "Github",
    caption: "github.com/marcodkts",
    icon: "code",
    link: "https://github.com/marcodkts",
  },
];
const partnerList = [
  {
    title: "Otoma",
    caption: "github.com/otoma",
    icon: "code",
    link: "https://github.com/otoma",
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
      contactLinks: contactList,
      partnerLinks: partnerList,
      productsLinks: productsList,
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
