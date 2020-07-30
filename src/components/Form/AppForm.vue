<template>
  <v-card max-width="600px" class="mx-auto pa-3">
    <v-card-title>Создать задачу</v-card-title>
    <v-form class="d-flex flex-column">
      <v-text-field label="Заголовок" v-model="title" required></v-text-field>
      <v-text-field
        label="Описание"
        v-model="description"
        required
      ></v-text-field>
      <DataPicker :date="date" @update:date="updateDate" />
      <v-btn color="success" class="align-self-end" @click="addTask">
        Создать
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import DataPicker from "./DataPicker";

export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      title: "",
      description: "",
    };
  },
  methods: {
    updateDate(value) {
      this.date = value;
    },
    addTask() {
      if (this.title && this.description) {
        this.$store.commit("addTask", {
          title: this.title,
          description: this.description,
          date: this.date,
        });
        this.clearForm();
      }
    },
    clearForm() {
      this.title = "";
      this.description = "";
    },
  },
  components: {
    DataPicker,
  },
};
</script>
