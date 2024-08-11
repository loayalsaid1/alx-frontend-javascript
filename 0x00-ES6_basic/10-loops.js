export default function appendToEachArrayValue(array, appendString) {
  let tempArray = array;
  for (const element of tempArray) {
    const index = tempArray.indexOf(element);
    tempArray[index] = appendString + element;
  }

  return tempArray;
}
