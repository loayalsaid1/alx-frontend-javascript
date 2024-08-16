export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const cleanStrings = [];
  const stringLength = startString.length;

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      cleanStrings.push(element.slice(stringLength));
    }
  });

  return cleanStrings.join('-');
}
