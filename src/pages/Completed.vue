<template>
  <CardTasks :header="'Выполненные задачи'" :tasks="completedTasks" />
</template>

<script>
import CardTasks from "@/components/Tasks/CardTasks";

export default {
  computed: {
    completedTasks() {
      return this.$store.getters.getCompletedTasks;
    },
  },
  components: {
    CardTasks,
  },
};
</script>
