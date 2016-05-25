import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    saveEdit(id, data){
      if(data) {
        this.store.find('scientist', id).then(function (scientist) {
          console.log(JSON.stringify(scientist));
          scientist.set('firstname', data.firstname);
          scientist.set('lastname', data.lastname);
          scientist.set('knownfor', data.knownfor);
          scientist.set('id', id);
          scientist.save();
        });
        this.transitionToRoute('manage');
      }
    },
    cancelEdit(){
      this.transitionToRoute('manage');
    }
  }
});
