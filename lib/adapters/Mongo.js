var Mongo = Class.extend({
  init: function(){
    this.type = 'Mongo'
  }
});

Mongo.get = function(){
  console.log('Adapter: Mongo: GET')  
}

Mongo.set = function(){
  console.log('Adapter: Mongo: SET')
}

Mongo.delete = function(){
  console.log('Adapter: Mongo: DELETE')
}

Mongo.exists = function(){
  console.log('Adapter: Mongo: EXISTS')
}

