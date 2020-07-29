<template>
  <v-tabs right style="width: auto;">
    <v-tab :to="item.link" v-for="item in items" :key="item.link">
      {{ item.text }}
    </v-tab>
  </v-tabs>
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
