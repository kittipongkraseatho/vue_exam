<template>
  <div>
    <div class="list-group">
      <a
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-center">
          <h5 class="mb-1">{{ header }}</h5>
        </div>
      </a>

      <div
        v-for="item in lists"
        :key="item.id"
        @click="$emit('itemClicked', item)"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ item.title }}</h5>
          <!-- <small class="text-muted">{{ item.completed }}</small> -->
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">{{ item.description }}</p>
        </div>

        <button
          v-if="!item.completed"
          type="button"
          class="btn-sm btn-warning p-2"
        >
          wait
        </button>
        <button v-else type="button" class="btn-sm btn-success p-2">
          success
        </button>
        <button type="button" class="btn-sm btn-danger p-2">del</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["itemClicked"],
  props: {
    lists: {
      type: Object,
    },
    header: {
      type: String,
      default: "Header",
    },
  },
};
</script>
