function diffArray(arr1, arr2) {
    var newArr = [];
    function onlyInFirst(first, second) {
        // Vòng qua một mảng để tìm các phần tử không tồn tại trong một mảng khác
        for (let i = 0; i < first.length; i++) {
          if (second.indexOf(first[i]) === -1) {
            // Đẩy các phần tử là duy nhất đầu tiên sang newArr
            newArr.push(first[i]);
          }
        }
      }
      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);