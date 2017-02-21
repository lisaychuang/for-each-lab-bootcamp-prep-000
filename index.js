function iterativeLog(array){
  array.forEach(function (element, index, array) {
    console.log(`${index}: ${element}`);
  });
}

function iterate (callback){
  var time = [1,2,3,4,5];
  time.forEach(callback);
  return time;
};

function doToArray(arr, callback){
  arr.forEach(callback);
};
