export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const index = array.indexOf(element);
    array[index] = appendString + element;
  }

  return array;
}
