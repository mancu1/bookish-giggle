<template>
  <v-img :src="require('../assets/First Screen.png')" max-width="100%">
    <v-container>
      <v-row class="text-center">
        <v-col class="mt-12 mb-2">
          <h1 style="color: white" class="display-2 font-weight-bold mb-3">
            Что вы ищете?
          </h1>
        </v-col>

        <v-col class="mb-5" cols="12">
          <v-row align="center" justify="center" dense>
            <v-spacer />
            <v-select class="ma-4" dark label="Квартира" dense rounded filled />
            <v-select class="ma-4" dark label="Комнаты " dense rounded filled />
            <v-spacer />
          </v-row>
          <v-row>
            <v-spacer />
            <v-text-field label="Район, адрес." dark dense rounded filled />
            <v-spacer />
          </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
          <v-btn dark text class="headline font-weight-bold mb-3">
            <span>Поиск</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
