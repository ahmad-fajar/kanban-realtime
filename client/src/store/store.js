import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// firebase
const config = {
    apiKey: "AIzaSyC608UR1qe6rdqhNesR5hFdhbxBJhFYFd8",
    authDomain: "kanban-65a60.firebaseapp.com",
    databaseURL: "https://kanban-65a60.firebaseio.com",
    projectId: "kanban-65a60",
}
const db = firebase.initializeApp(config).database()


export const store = new Vuex.Store({
  state: {
    tasks: [],
    tests: 'aaa'
  },
  mutations: {
    allTasks (state) {
      db.ref('todos/').on('value', snapshot => {
        state.tasks = []
        for (var i in snapshot.val()) {
          // console.log(snapshot.val())
          state.tasks.push(snapshot.val()[i])
        }
      })
    }
  },
  actions: {
    newTask (store, payload) {
        let data = {
          assignedto : payload.assignedto,
          desc : payload.assignedto,
          point : payload.point,
          task : payload.task,
          status : 'todo'
        }
        db.ref(`todos/`).push(data)
    },
    deleteTask(state, payload) {
      db.ref(`todos/payload`).remove()
    }
  },
  getters: {
    todoList (state) {
      return state.tasks.filter(todo => {
        console.log(todo.status)
        return todo.status === 'todo'
      })
    },
    progressList (state) {
      return state.tasks.filter(progress => {
        return progress.status === 'progress'
      })
    },
    testingList (state) {
      return state.tasks.filter(test => {
        // console.log(todo.status)
        return test.status === 'testing'
      })
    },
    doneList (state) {
      return state.tasks.filter(done => {
        // console.log(todo.status)
        return done.status === 'done'
      })
    },
  }
})