import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('scientist', params.sci_id);
  }
});
