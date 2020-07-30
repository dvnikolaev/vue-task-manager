<template>
  <CardTasks :tasks="tasksInWork" />
</template>

<script>
import CardTasks from "@/components/Tasks/CardTasks";

export default {
  computed: {
    tasksInWork() {
      return this.$store.getters.getInWorkTasks;
    },
  },
  components: {
    CardTasks,
  },
};
</script>
