import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['todo-item-input'],
  classNameBindings: ['isToggled'],
  isToggled: false,
  actions: {
    clickNewTodoItemForm() {
      this.toggleProperty('isToggled');
    }
  },
  toggleNewTodoListForm: function() {
    // Using an observer here because isToggled can be modified outside of the click action
    this.$().find('.todo-item-form').slideToggle();
    if ( ! this.get('isToggled') ) {
      // It's been hidden, reset input
      this.set('newTitle', '');
      this.set('newDescription', '');
    }
  }.observes('isToggled')

});
