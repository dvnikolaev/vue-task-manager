<template>
  <v-list three-line>
    <ItemTask v-for="(task, i) in tasks" :key="i" :task="task" />
  </v-list>
</template>

<script>
import ItemTask from "./ItemTask";

export default {
  props: {
    tasks: Array,
  },
  components: {
    ItemTask,
  },
};
</script>
