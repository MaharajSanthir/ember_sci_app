import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    manageScientistsDone(){
      this.transitionToRoute('index');
    },
    delete(id){
      console.log(id);

      this.store.findRecord('scientist', id).then((sci) => {
        sci.deleteRecord();
        sci.get('isDeleted'); // => true
        sci.save();
      });
    },
    showEdit(id){
      this.transitionToRoute('edit', id);
    }
  }
});
