<template>
  <v-toolbar-items>
    <v-tabs background-color="transparent" height="100%">
      <v-tab :to="item.link" v-for="item in items" :key="item.link">
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </v-toolbar-items>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Создать",
          link: "/",
        },
        {
          text: "Задачи",
          link: "/tasks",
        },
        {
          text: "Завершенные",
          link: "/completed",
        },
      ],
    };
  },
};
</script>
