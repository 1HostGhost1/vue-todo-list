const app = Vue.createApp({
  data() {
    return {
      todoItem: "",
      todoList: [
        { id: 1640554793825, text: "Learn Vue.js 1640554793825", completed: false },
        { id: 1640554801785, text: "Learn Vue.js 1640554801785", completed: true },
        { id: 1640554811765, text: "Learn Vue.js 1640554811765", completed: false },
      ],
    };
  },
  methods: {
    addTodoItem() {
      var newId = new Date().getTime();
      this.todoList.push({
        id: newId,
        text: `Learn Vue.js ${newId}`,
        completed: false,
      });
      this.todoItem = "";
    },
    removeTodoItem(todoItemId) {
      this.todoList.splice(
        this.todoList.findIndex((x) => x.id == todoItemId),
        1
      );
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((x) => x.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((x) => !x.completed).length;
    },
  },
}).mount("#app");
