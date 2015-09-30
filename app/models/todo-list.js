import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  todoItems: DS.hasMany('todo-item'),

  nbItems: Ember.computed('todoItems', function() {
    return this.get('todoItems').length;
  }),
  nbItemsUncomplete: Ember.computed('todoItems', function() {
    return 0;
  })
});
