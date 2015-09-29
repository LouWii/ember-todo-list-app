import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['todo-list-input'],
  classNameBindings: ['isToggled'],
  isToggled: false,
  actions: {
    toggleNewTodoListForm() {
      this.toggleProperty('isToggled');
    }
  }
});
