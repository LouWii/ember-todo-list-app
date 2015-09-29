import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['todo-list-item'],
  classNameBindings: ['isEmpty', 'isComplete'],
  isEmpty: false,
  isComplete: false,
});
