export default function cleanSet(set, startString) {
  if (!set || set instanceof Set !== true) {
    return '';
  }
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const cleanStrings = [];
  const stringLength = startString.length;

  set.forEach((element) => {
    if (
      typeof element === 'string'
      && element.length > 0
      && element.startsWith(startString)
    ) {
      cleanStrings.push(element.slice(stringLength));
    }
  });

  return cleanStrings.join('-');
}
