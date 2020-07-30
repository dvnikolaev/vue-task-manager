<template>
  <v-list three-line>
    <ItemTask />
    <ItemTask />
  </v-list>
</template>

<script>
import ItemTask from "./ItemTask";

export default {
  components: {
    ItemTask,
  },
};
</script>
