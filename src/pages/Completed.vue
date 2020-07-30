<template>
  <CardTasks :header="'Выполненные задачи'" />
</template>

<script>
import CardTasks from "@/components/Tasks/CardTasks";

export default {
  components: {
    CardTasks,
  },
};
</script>
