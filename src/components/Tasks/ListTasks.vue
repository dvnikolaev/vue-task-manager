<template>
  <v-list three-line>
    <ItemTask v-for="task in tasks" :key="task.id" :task="task" />
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
