var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
addElementToBeginningOfArray = (arr, element) => {
  return newArray = [element, ...arr];
}

destructivelyAddElementToBeginningOfArray = (arr, element) => {
  arr.unshift(element);
  return arr;
}

addElementToEndOfArray = (arr, element) => {
  return newArray = [...arr, element];
  
}

  
  destructivelyAddElementToEndOfArray = (arr, element) => {
    arr.push(element);
    return arr;
  }
  
  accessElementInArray = (arr, index) => {
    return arr[index];
  }
  
  destructivelyRemoveElementFromBeginningOfArray = (array) => {
   return newArray = array.shift();
  }
  
  removeElementFromBeginningOfArray = (array) => {
  return newArray =  array.slice(0,);
  }
  
  destructivelyRemoveElementFromEndOfArray = (array) => {
    return newArray = array.pop();
  }
  
  removeElementFromEndOfArray = (arr) => {
    return newArray = arr.slice(0, arr.length - 1);
  }