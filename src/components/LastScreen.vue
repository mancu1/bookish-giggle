<template>
  <v-img :src="require('../assets/lastScreen.png')">
    <v-container>
      <v-row class="text-center">
        <v-col class="mt-12 mb-2">
          <h1 style="color: white" class="display-2 font-weight-bold mb-3">
            Подпишитесь на нашу рассылку!
          </h1>
        </v-col>

        <v-col class="mb-5" cols="12">
          <v-row>
            <v-spacer />
            <v-text-field
              label="Укажите вашу почту"
              dark
              dense
              rounded
              filled
              prepend-inner-icon="mdi-email-outline"
              append-outer-icon="mdi-send"
            />
            <v-spacer />
          </v-row>
        </v-col>
      </v-row>
      <div
        class="my-2"
        style="height: 1px;background-color: rgba(255,255,255,0.11)"
      />
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "LastScreen"
};
</script>

<style scoped></style>
