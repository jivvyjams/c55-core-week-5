function generateBigArray(size) {
  const array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = i;
  }
  return array;
}

export default generateBigArray;
