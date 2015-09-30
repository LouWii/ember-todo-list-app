import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['todo-list-input'],
  classNameBindings: ['isToggled'],
  isToggled: false,
  newTitle: "",
  newDescription: "",
  actions: {
    clickNewTodoListForm() {
      this.toggleProperty('isToggled');
    },
    saveNewTodoList() {
      if (this.get('newTitle')){
        this.sendAction('action', this.get('newTitle'), this.get('newDescription'));
        this.set('newTitle', '');
        this.set('newDescription', '');
        this.set('isToggled', false);
      }
    }
  },
  toggleNewTodoListForm: function() {
    // Using an observer here because isToggled can be modified outside of the click action
    this.$().find('.todo-list-form').slideToggle();
    if ( ! this.get('isToggled') ) {
      // It's been hidden, reset input
      this.set('newTitle', '');
      this.set('newDescription', '');
    }
  }.observes('isToggled')
});
