<template>
  <v-card max-width="1000px" class="mx-auto">
    <v-card-title>{{ header }}</v-card-title>
    <ListTasks :tasks="tasks"/>
  </v-card>
</template>

<script>
import ListTasks from "./ListTasks";

export default {
  props: {
    header: {
      type: String,
      default: "Поставленные задачи",
    },
    tasks: Array
  },
  components: {
    ListTasks,
  },
};
</script>
