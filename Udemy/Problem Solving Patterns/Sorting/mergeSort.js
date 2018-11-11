let merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// merge([1, 10, 50], [2, 14, 99, 100])


let mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);



}

mergeSort([10, 24, 76, 73, 73, 1, 9])
mergeSort(['b', 'u', 'o', 'a', 'r', 'c'])
