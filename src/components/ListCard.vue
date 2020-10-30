<template>
  <v-card class="ma-3" width="344">
    <v-card-title>{{ id }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    id: {
      type: String
    }
  }
};
</script>
