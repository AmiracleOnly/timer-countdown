function bubbleSort(arr) {
    let count = 0;
    let needIteration = true;
    while (needIteration) {
      needIteration = false;

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            count += 1;
            needIteration = true;
          }
        }
      }
      return count;
    }
  }

  const initData = [3,4,5, 2,1];
  console.log(`Initial array:`, initData);
  const iterationsTestData = bubbleSort(initData);
  console.log(`The number of permutations is: ${iterationsTestData}`, `\nSorted array:`, initData);
