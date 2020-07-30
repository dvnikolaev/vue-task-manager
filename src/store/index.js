import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: false
      },
      {
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: false
      },
      {
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: false
      },
      {
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: true
      },
      {
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: true
      },
    ],
  },
  mutations: {
    addTask(store, payload) {
      store.tasks.push({
        title: payload.title,
        description: payload.description,
        date: payload.date,
        completed: false,
      });
    },
  },
  actions: {},
  getters: {
    getInWorkTasks: (state) => {
      return state.tasks.filter((item) => !item.completed);
    },
    getCompletedTasks: (state) => {
      return state.tasks.filter((item) => item.completed);
    },
  },
  modules: {},
});
