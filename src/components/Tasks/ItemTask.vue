<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ task.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
      <v-list-item-subtitle>{{ task.date }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action class="flex-row" v-if="!task.completed">
      <v-btn success color="success" class="mr-4">Завершить</v-btn>
      <v-btn outlined color="error">Отклонить</v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>