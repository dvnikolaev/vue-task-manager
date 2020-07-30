<template>
  <v-card max-width="600px" class="mx-auto pa-3">
    <v-form class="d-flex flex-column">
      <v-text-field label="Заголовок" v-model="title" required></v-text-field>
      <v-text-field
        label="Описание"
        v-model="description"
        required
      ></v-text-field>
      <DataPicker :date="date" @update:date="updateDate" />
      <v-btn 
        color="success"
        class="align-self-end"
        :disabled="!valid"
        @click="addTask">
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
      valid: true,
    };
  },
  methods: {
    updateDate(value) {
      this.date = value;
    },
    addTask() {
      this.$store.commit('addTask', {
        title: this.title,
        description: this.description,
        date: this.date
      });
    }
  },
  components: {
    DataPicker,
  },
};
</script>
