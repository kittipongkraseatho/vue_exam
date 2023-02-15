<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-8">
        <FormAddTodo />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <ListCard
          header="TODO"
          :lists="todoListTodo"
          @item-clicked="itemClicked"
        />
      </div>
      <div class="col-4">
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
import ListCard from "../baseTodo/ListCard";
import FormAddTodo from "../baseTodo/FormAddTodo";

export default {
  components: {
    ListCard,
    FormAddTodo,
  },
  data() {
    return {
      resLists: [
        {
          id: 1,
          title: "todo1",
          description: "todo1",
          completed: false,
        },
        {
          id: 2,
          title: "todo2",
          description: "todo2",
          completed: true,
        },
      ],
      todoListTodo: [],
      todoListSuccess: [],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    itemClicked(item) {
      console.log(item);
    },
    filtersCheckStatus() {
      const lists = this.resLists;
      // NOTE:  สูตรนี้วิ่ง loop 1 รอบ
      lists.map((list) => {
        if (list.completed) {
          this.todoListSuccess.push(list);
        } else {
          this.todoListTodo.push(list);
        }
      });

      // NOTE:  สูตรนี้วิ่ง loop 2 รอบ
      //   this.todoListSuccess = lists.filter((list) => list.completed);
      //   this.todoListTodo = lists.filter((list) => !list.completed);
    },
  },
  beforeMount() {
    this.filtersCheckStatus();
  },
};
</script>
