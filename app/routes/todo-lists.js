import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // findAll() do a query, peekAll() will not
    var todoLists = this.store.findAll('todo-list');
    // console.log(todoLists);
    return todoLists;
  },
  actions: {
    createTodoList(newTitle, newDescription) {
      this.store.createRecord('todo-list', {
        name: newTitle,
        description: newDescription
      }).save();
    }
  }
});
