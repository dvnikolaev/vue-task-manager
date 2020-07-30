<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ task.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
      <v-list-item-subtitle>{{ task.date }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action class="flex-row" v-if="!task.completed">
      <v-btn success color="success" class="mr-4" @click="completeTask(task.id)">Завершить</v-btn>
      <v-btn outlined color="error" @click="rejectTask(task.id)">Отклонить</v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    completeTask(id) {
      this.$store.commit('completeTask', id);
    },
    rejectTask(id) {
      this.$store.commit('rejectTask', id);
    }
  }
}
</script>