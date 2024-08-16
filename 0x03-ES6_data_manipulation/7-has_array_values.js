export default function hasValuesFromArray(set, array) {
  const nonExistingElemenet = array.find((Element) => !set.has(Element));
  if (nonExistingElemenet) {
    return false;
  }

  return true;
}
