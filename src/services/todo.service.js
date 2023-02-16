import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.VUE_APP_SERVICE_URL;

class TodoService {
  getAllTodo() {
    return axios.get(API_URL + "todos/", { headers: authHeader() });
  }

  getTodoByID(id) {
    return axios.get(API_URL + "todos/" + id, { headers: authHeader() });
  }

  createTodo(result) {
    return axios.post(API_URL + "todos/", result, { headers: authHeader() });
  }

  updateTodo(id, result) {
    return axios.put(API_URL + "todos/" + id, result, {
      headers: authHeader(),
    });
  }

  deleteTodo(id) {
    return axios.delete(API_URL + "todos/" + id, { headers: authHeader() });
  }
}

export default new TodoService();
