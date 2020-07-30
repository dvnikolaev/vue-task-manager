import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(store, payload) {
     store.tasks.push({
      title: payload.title,
      description: payload.description,
      date: payload.date,
      status: payload.status
     });
    }
  },
  actions: {
  },
  getters: {
    getInWorkTasks: state => {
      return state.tasks.filter(item => {
        item.status === 'inwork';
      })
    },
    getCompletedTasks: state => {
      return state.tasks.filter(item => {
        item.status === 'completed'
      });
    }
  },
  modules: {
  }
})
