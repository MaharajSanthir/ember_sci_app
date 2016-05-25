import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEdit(id){
      var data = {
        firstname: this.get('scientist.firstname'),
        lastname: this.get('scientist.lastname'),
        knownfor: this.get('scientist.knownfor')
      };

      if(!data.firstname || !data.lastname || !data.knownfor){
        this.set('showError', true);
      } else {
        this.get('saveEdit')(id, data);
      }
    },
    cancelEdit(){
      this.get('cancelEdit')();
    }
  }
});
