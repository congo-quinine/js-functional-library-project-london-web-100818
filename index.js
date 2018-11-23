fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      for (let i=0; i<Object.values(arr).length; i++){
       alert(Object.values(arr)[i]);
     }
     return arr;
    },

    map: function(arr, callback) {
      let newA = []
      for (let i=0; i<Object.values(arr).length; i++){
       newA.push(callback(Object.values(arr)[i]))
     }
     return newA;
    },

    reduce: function(arr, callback, ) {
      let count = 0;
     for (let i=0; i<Object.values(arr).length; i++){
       count += callback(0, arr[i], arr)
     }
      if (acc > 0){
          return count + acc;
        }else{
          return count
        }
     return count + acc;
    },

    find: function(array, callback) {
      for (let i=0; i<Object.values(array).length; i++){
        if (callback(array[i])){
          return array[i]
        }
      }
    },

    filter: function(array, callback) {
      let newA = [];
      for (let i=0; i<Object.values(array).length; i++){
        if (callback(array[i])){
          newA.push(array[i])
        }
      }
      return newA
    },

    size: function(collection) {
      return Object.values(collection).length;
    },

    first: function(collection, n) {
      let newA = []
      if (!n){
        return collection[0]
      }else {
      for (let i=0; i<n; i++){
          newA.push(collection[i])
        }
      }
      return newA;
    },

    last: function(collection, n) {
      let newA = []
      if (!n){
        return collection[collection.length -1]
      }else {
      for (let i=n; i>0; i--){
          newA.unshift(collection[i])
        }
      }
      return newA;
    },

    compact: function(collection){
      let newArray = collection.slice()
    console.log(newArray.length)
    for (let i=0; i<newArray.length; i++){
      console.log(newArray[i])
        if (!newArray[i]){
        newArray.splice(i, 1)
      }
    }
    for (let i=0; i<newArray.length; i++){
      console.log(newArray[i])
        if (newArray[i] === false){
        newArray.splice(i, 1)
      }
    }

    return newArray
    },


  }
})()

fi.libraryMethod()
