import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://candidate.neversitup.com/todo/";

class TodoService {
  getAllTodo() {
    return axios.get(API_URL + "all", { headers: authHeader() });
  }

  getTodoByID(id) {
    return axios.get(API_URL + "todos/" + id, { headers: authHeader() });
  }

  createTodo(result) {
    return axios.post(API_URL + "todos", { headers: authHeader() }, result);
  }

  updateTodo(id, result) {
    return axios.put(
      API_URL + "todos/" + id,
      { headers: authHeader() },
      result
    );
  }

  deleteTodo(id) {
    return axios.delete(API_URL + "todos/" + id, { headers: authHeader() });
  }
}

export default new TodoService();
