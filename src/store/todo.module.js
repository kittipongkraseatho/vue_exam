import TodoService from "../services/todo.service";

export const todo = {
  namespaced: true,
  state: {
    todoListSuccess: [],
    todoListTodo: [],
    indexTodo: -1,
  },
  actions: {
    async getAllTodos({ commit }) {
      const todos = await TodoService.getAllTodo();
      commit("setTodos", todos.data);
    },
    async addTodo({ commit }, item) {
      const todo = await TodoService.createTodo({
        title: item.title,
        description: "TODO",
      });
      commit("updateTodo", todo.data);
    },
    async updateTodo({ commit }, { item, nextStatus }) {
      commit("getIndexTodo", item._id, nextStatus);
      const todo = await TodoService.updateTodo(item._id, {
        createdAt: item.createdAt,
        description: nextStatus,
        title: item.title,
        updatedAt: item.updatedAt,
        user_id: item.user_id,
      });
      commit("updateTodo", todo.data);
      commit("deleteTodo", todo.data.description);
    },
    async deleteTodo({ dispatch, commit }, { item, nextStatus }) {
      commit("getIndexTodo", item._id, nextStatus);
      await TodoService.deleteTodo(item._id);
      await dispatch("getAllTodos");
    },
  },
  mutations: {
    getIndexTodo(state, id, nextStatus) {
      if (nextStatus === "TODO") {
        state.indexTodo = state.todoListSuccess.indexOf(
          state.todoListSuccess.find((list) => list._id === id)
        );
      } else {
        state.indexTodo = state.todoListTodo.indexOf(
          state.todoListTodo.find((list) => list._id === id)
        );
      }
    },
    setIndexTodo(state) {
      state.indexTodo = -1;
    },
    setTodos(state, todos) {
      // NOTE: Way 1
      state.todoListSuccess = todos.filter(
        (todo) => todo.description === "Success"
      );
      state.todoListTodo = todos.filter((todo) => todo.description === "TODO");
      // NOTE: Way 2
      // todos.map((list) => {
      //   if (todo.description === "Success") {
      //     state.todoListSuccess.push(list);
      //   } else {
      //     state.todoListTodo.push(list);
      //   }
      // });
    },
    updateTodo(state, todo) {
      if (state.indexTodo > -1) {
        if (todo.description === "TODO") {
          state.todoListTodo.push(todo);
        } else {
          state.todoListSuccess.push(todo);
        }
      } else {
        state.todoListTodo.push(todo);
      }
    },
    deleteTodo(state, description) {
      if (description === "TODO") {
        state.todoListSuccess.splice(state.indexTodo, 1);
      } else {
        state.todoListTodo.splice(state.indexTodo, 1);
      }
      state.indexTodo = -1;
    },
  },
};
