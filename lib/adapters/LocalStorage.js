var LocalStorage = Class.extend({
  init: function(){
    this.type = 'LocalStorage'
  }
});

LocalStorage.get = function(){
  console.log('Adapter: LocalStorage: GET')  
}

LocalStorage.set = function(){
  console.log('Adapter: LocalStorage: SET')
}

LocalStorage.delete = function(){
  console.log('Adapter: LocalStorage: DELETE')
}

LocalStorage.exists = function(){
  console.log('Adapter: LocalStorage: EXISTS')
}

