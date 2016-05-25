import Ember from 'ember';

export default Ember.Component.extend({
  firstname: null,
  lastname: null,
  knownfor: null,
  showError: false,
  actions: {
    addScientist(){

      var data = {
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        knownfor: this.get('knownfor')
      };

      if(!data.firstname || !data.lastname || !data.knownfor){
        this.set('showError', true);
      } else {
        this.get('addScientist')(data);
      }
      
    }
  }
});
