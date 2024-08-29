function minDistance(list) {
  if (!!list && list.length > 0) {
    let minimumDist = Infinity;
    const orderedList = mergeSort(list);
    for (let index = 0, length = orderedList.length; index < length - 1; index++) {
      const endIndex = index + 1;
      const element = orderedList[index], nextElement = orderedList[endIndex];
      const diff = Math.abs(element - nextElement);
      minimumDist = diff < minimumDist ? diff : minimumDist;
    }
    return minimumDist
  }
}

const _mergeArrays = (a, b) => {
  const c = []

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }

  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (a) => {
  if (a.length < 2) return a
  const middle = Math.floor(a.length / 2)
  const a_l = a.slice(0, middle)
  const a_r = a.slice(middle, a.length)
  const sorted_l = mergeSort(a_l)
  const sorted_r = mergeSort(a_r)
  return _mergeArrays(sorted_l, sorted_r)
}

module.exports = { minDistance }

if (require.main === module) {
  /*
   * Code written here or in other files will be ignored by the automated tests.
   * You can run this code when running the file with `node min-distance.js`
   */
  const array_2 = [...Array(100000).keys()]
  const array = [...array_2, 2 , 2]
  console.log(minDistance(array))
}
