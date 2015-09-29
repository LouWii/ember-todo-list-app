import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['todo-list-input'],
  classNameBindings: ['isToggled'],
  isToggled: false,
  newTitle: "",
  newDescription: "",
  actions: {
    toggleNewTodoListForm() {
      this.toggleProperty('isToggled');
      this.$().find('.todo-list-form').slideToggle();
      if ( ! this.get('isToggled') ) {
        // It's been hidden, reset input
        // TODO: Reset fields once they're effectively hidden
        this.set('newTitle', '');
        this.set('newDescription', '');
      }
    },
    saveNewTodoList() {
      if (this.get('newTitle')){
        this.sendAction('action', this.get('newTitle'), this.get('newDescription'));
        this.set('newTitle', '');
        this.set('newDescription', '');
        this.set('isToggled', false);
      }
    }
  }
});
