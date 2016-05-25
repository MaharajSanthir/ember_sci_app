import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('add');
  this.route('manage');
  this.route('edit', {path: '/edit/:sci_id'});
});

export default Router;
