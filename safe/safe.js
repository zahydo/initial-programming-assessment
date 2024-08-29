function finalValue(movements = []) {
  let safeIndex = 0;
  if (!!movements) {
    const safe = [...Array(100).keys()];
    const safeLength = safe.length - 1;
    for (let index = 0; index < movements.length; index++) {
      const movement = movements[index];
      let result = safe[safeIndex] + (!!movement ? movement : 0);
      if (result < 0) {
        safeIndex = 0;
      } else if (result > safeLength) {
        safeIndex = safeLength
      } else {
        safeIndex = result;
      } 
    }
  }
  return safeIndex;
}

module.exports = { finalValue }

if (require.main === module) {
  /*
   * Code written here or in other files will be ignored by the automated tests.
   * You can run this code when running the file with `node safe.js`
	 */
  const array = [...Array(10000).keys()]
  console.log(finalValue(array));
}
