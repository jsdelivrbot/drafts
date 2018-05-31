// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        1.374s
function solution1(array, size) {

  let result = [];
  let arrayItem = [];

  for (let item of array) {
    if (arrayItem.length < size) {
      arrayItem.push(item);
    } else {
      result.push(arrayItem);
      arrayItem = [];
      arrayItem.push(item);
    }
  }

  result.push(arrayItem);

  return result;

}

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        1.359s
function solution2(array, chunckSize) {
  let result = [];
  const resultSize = Math.ceil(array.length / chunckSize);
  const arrayLength = array.length;

  for (let i = 0; i<resultSize; i++) result.push([]);

  for (let i = 0; i<resultSize;) {
      for (let z = 0; z<arrayLength;) {
          while(result[i].length < chunckSize && array[z]) {
              result[i].push(array[z]);
              z++;
          }
          i++;
      }
  }

  return result;
}


function chunk(array, size) {
  //return solution1(array, size);
  return solution2(array, size);
}

module.exports = chunk;




  // var arraySize = array.length / chunckSize; //1
  // var ArrSize =
  //   array.length % chunckSize == 0 ? arraySize : parseInt(arraySize, 10) + 1;
  // var result = [ArrSize];
  // for (let i = 0, len = result.length; i < len; i++) result[i] = [];

  // //   for (let i = 0, len = array.length, cIndex = 0; i < len; i++) {
  // //     console.info(`cIndex ${cIndex} i ${i} chunckSize ${chunckSize}`);

  // //     result[cIndex].push(array[i + cIndex * chunckSize]);

  // //     cIndex = cIndex == i ? cIndex + 1 : cIndex;
  // //   }
  // for (let i = result.length; i >= 0; i--) {
  //   const lenY = array.length - i;
  //   for (let y = i * chunckSize; y < lenY; y += 1) {
  //     result[i].push(array[y]);
  //     console.info(`value ${array[y]} i ${i} y ${y}`);
  //   }
  // }

  // console.log(`ARRAY ${array} ArrSize ${ArrSize} Chuck Size ${chunckSize}`);
  // console.log("RESULT", result);

  // return result;