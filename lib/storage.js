var Storage = Class.extend({
  init: function(store){
    this.name = store || 'memory'
    this.type = 'Storage'
    this.store()
  },
  store: function(){
    switch (this.name) {
      case "memory":
        console.log("Storage: MemoryStore: Building..");
        this.storage = new Memory()
        break;
      case "localstorage":
        console.log("Storage: LocalStorageStore: Building..");
        this.storage = new localstorage()
        break;
      default:
        console.log("Storage: Default -> MemoryStore: Building..");
        this.storage = new Memory()
    }
  }
});

Storage.get = function(){
  console.log("Storage:GET")
}

Storage.set = function(){
  console.log("Storage:SET")
}

Storage.delete = function(){
  console.log("Storage:DELETE")
}

Storage.exists = function(){
  console.log("Storage:EXISTS")
}