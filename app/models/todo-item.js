import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  creationDate: DS.attr('date'),
  isCompleted: DS.attr('boolean'),
  todoList: DS.belongsTo('todo-list')
});
