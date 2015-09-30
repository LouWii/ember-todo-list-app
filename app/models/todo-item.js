import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  creationDate: DS.attr('date', { defaultValue() { return new Date(); } }),
  isCompleted: DS.attr('boolean', { defaultValue() { return false; } }),
  todoList: DS.belongsTo('todo-list')
});
