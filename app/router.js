import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-lists', { path: '/' });
  this.route('todo-list', { path: '/todo-list/:todo_list_id'});
});

export default Router;
