// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j-1] > array[j]) {
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp
      }
    }
  }
  return array
}

module.exports = bubbleSort;
