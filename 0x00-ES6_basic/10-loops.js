export default function appendToEachArrayValue(array, appendString) {
	for (let iteration in Object.entries) {
	  var value = array[idx];
	  array[idx] = appendString + value;
	}
  
	return array;
  }
