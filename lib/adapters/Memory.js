var Memory = Class.extend({
  init: function(){
    this.type = 'Memory'
  }
});

Memory.get = function(){
  console.log('Adapter: Memory: GET')  
}

Memory.set = function(){
  console.log('Adapter: Memory: SET')
}

Memory.delete = function(){
  console.log('Adapter: Memory: DELETE')
}

Memory.exists = function(){
  console.log('Adapter: Memory: EXISTS')
}

