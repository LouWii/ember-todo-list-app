import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // findRecord() will make a new request, peekRecord() will not
    var todoList = this.store.findRecord('todo-list', params.todo_list_id);
    console.log(todoList);
    return todoList;
  }
});
