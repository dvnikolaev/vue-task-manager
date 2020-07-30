<template>
  <v-card max-width="max-content" class="mx-auto">
    <v-card-title>{{ header }}</v-card-title>
    <ListTasks :tasks="tasks" v-if="tasks.length"/>
    <h2 class="text-center" v-else>Нет задач</h2>
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
