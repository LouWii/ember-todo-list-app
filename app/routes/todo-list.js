import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    // findRecord() will make a new request, peekRecord() will not
    var todoList = this.store.peekRecord('todo-list', params.todo_list_id);
    if (todoList === null) {
      // If todo-list not found, try to get it with a query
      todoList = this.store.findRecord('todo-list', params.todo_list_id);
    }
    // console.log(todoList);
    return todoList;
  },
  actions: {
    goBack() {
      this.transitionTo('todo-lists');
    },
    createTodoItem(newTitle, newDescription, todoListId) {
      this.store.createRecord('todo-item', {
        name: newTitle,
        description: newDescription,
        todoList: this.store.peekRecord('todo-list', todoListId)
      }).save();
    }
  }
});
