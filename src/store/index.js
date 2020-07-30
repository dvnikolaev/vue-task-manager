import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: false
      },
      {
        id: 2,
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: false
      },
      {
        id: 3,
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: false
      },
      {
        id: 4,
        title: "Content filtering",
        description:
          "Set the content filtering level to restrict appts that can be downloaded",
        date: "2020-08-08",
        completed: true
      },
      {
        id: 5,
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
      let lastId = store.tasks.length ? store.tasks[store.tasks.length - 1].id + 1 : 0;

      store.tasks.push({
        id: lastId,
        title: payload.title,
        description: payload.description,
        date: payload.date,
        completed: false,
      });
    },
    completeTask(state, id) {
      let foundIndex = state.tasks.findIndex(task => task.id === id);

      state.tasks[foundIndex].completed = true;
    },
    rejectTask(state, id) {
      let foundIndex = state.tasks.findIndex(task => task.id === id);
      
      state.tasks.splice(foundIndex,1);
    }
  },
  actions: {},
  getters: {
    getInWorkTasks: (state) => {
      return state.tasks.filter((item) => !item.completed);
    },
    getCompletedTasks: (state) => {
      return state.tasks.filter((item) => item.completed);
    }
  },
  modules: {},
});
