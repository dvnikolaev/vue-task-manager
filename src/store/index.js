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
  modules: {
  }
})
