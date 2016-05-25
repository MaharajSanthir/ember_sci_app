import Mirage from 'ember-cli-mirage';

export default function() {

  this.get('/scientists', (db) => {
    return {
      data: db.scientists.map( attrs => ({type:'scientist', id: attrs.id, attributes: attrs}))
    };
  });


  this.get('/scientists/:id', (db, request)=>{
    var id = request.params.id;
    var scientist = db.scientists.find(id);

    var JSONapi = {
      data: {
        type: 'scientist',
        id: Number(id),
        attributes: null
      }
    };

    if(scientist){
      delete scientist.id;
      JSONapi.data.attributes = scientist;
      return JSONapi;
    } else {
      return new Mirage.Response(404, { a: 'header' },JSONapi);
    }

  });

  this.post('/scientists', (db, request) => {
    var attrs = JSON.parse(request.requestBody);

    var scientist = db.scientists.insert(attrs);

    var id = scientist.id;
    delete scientist.id;
    scientist.data.id = id;

    return  scientist;
  });


  this.delete('/scientists/:id', (db, request) => {
    var id = request.params.id;

    var scientist = db.scientists.find(id);
    db.scientists.remove(id);
    delete scientist.id;
    return {
      data: {
        type: 'scientist',
        id: Number(id),
        attributes: null
      }
    };
  });

  this.patch('/scientists/:id', (db, request) => {
    var id = request.params.id;
    var attrs = JSON.parse(request.requestBody);
    var scientist = db.scientists.update(id, attrs);

    var id = scientist.id;
    delete scientist.id;
    scientist.data.id = id;

    return scientist;
  });


}
