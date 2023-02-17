<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-8">
        <FormAddTodo />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4 py-2">
        <ListCard
          header="TODO"
          :lists="todoListTodo"
          @item-clicked="itemClicked"
        />
      </div>
      <div class="col-md-4 py-2">
        <ListCard
          header="SUCCESS"
          :lists="todoListSuccess"
          @item-clicked="itemClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { mapState } from "vuex";
import ListCard from "../baseTodo/ListCard";
import FormAddTodo from "../baseTodo/FormAddTodo";

export default {
  components: {
    ListCard,
    FormAddTodo,
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    ...mapState({
      todoListSuccess: (state) => state.todo.todoListSuccess,
      todoListTodo: (state) => state.todo.todoListTodo,
    }),
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    async itemClicked(item, nextStatus) {
      if (nextStatus === "Del") {
        this.$store.dispatch("todo/deleteTodo", { item, nextStatus });
      } else {
        await this.$store.dispatch("todo/updateTodo", { item, nextStatus });
      }
    },
  },
  beforeMount() {
    this.$store.dispatch("todo/getAllTodos");
  },
};
</script>
