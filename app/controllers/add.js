import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    addScientist(data){
      
      var post = this.store.createRecord('scientist', data);
      post.save();
      this.transitionToRoute('index');
    }
  }
});
