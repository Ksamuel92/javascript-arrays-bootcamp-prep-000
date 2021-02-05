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
  
  destructivelyRemoveElementFromBeginningOfArray = (arr) => {
   return arr.shift();
  }
  
  removeElementFromBeginningOfArray = (arr) => {
  return newArray =  arr.slice(0,1);
  }
  
  destructivelyRemoveElementFromEndOfArray = (arr) => {
    return arr.pop();
  }
  
  removeElementFromEndOfArray = (arr) => {
    return newArray = arr.slice(0, arr.length - 1);
  }