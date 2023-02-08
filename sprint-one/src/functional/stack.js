var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var keys = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    keys++;
    someInstance[keys] = value;
  };

  someInstance.pop = function() {
    var popped = someInstance[keys];
    delete popped;
    keys > 0 ? keys-- : keys = 0;
    return popped;
  };

  someInstance.size = function() {
    return keys;
  };

  return someInstance;
};
