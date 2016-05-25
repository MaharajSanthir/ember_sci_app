import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    showEdit(id){
      this.get('showEdit')(id);
    },
    delete(id){
      this.get('delete')(id);
    }
  }
});
