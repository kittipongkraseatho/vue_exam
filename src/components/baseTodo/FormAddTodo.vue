<template>
  <div class="container text-center">
    <Form @submit="handleAdd" :validation-schema="schema">
      <div class="form-group">
        <label for="title">Title</label>
        <Field name="title" type="text" class="form-control" />
        <ErrorMessage name="title" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <Field name="description" type="text" class="form-control" />
        <ErrorMessage name="description" class="error-feedback" />
      </div>

      <div class="form-group">
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span
            v-show="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span>Submit</span>
        </button>
      </div>

      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "FormTodo",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      title: yup.string().required("Title is required!"),
      description: yup.string().required("Description is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleAdd(user) {
      this.loading = true;
      console.log(user);

      //   this.$store.dispatch("auth/login", user).then(
      //     () => {
      //       this.$router.push("/todos");
      //     },
      //     (error) => {
      //       this.loading = false;
      //       this.message =
      //         (error.response &&
      //           error.response.data &&
      //           error.response.data.message) ||
      //         error.message ||
      //         error.toString();
      //     }
      //   );
    },
  },
};
</script>
