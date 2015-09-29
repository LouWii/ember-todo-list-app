import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var todoLists = this.store.findAll('todo-list');
    console.log(todoLists);
    return todoLists;
  }
});
