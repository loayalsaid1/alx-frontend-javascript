export default class HolbertonCourse {
  static _checkType(value, type, name) {
    if (typeof value !== type && type !== 'array') { // eslint-disable-line valid-typeof
      throw new TypeError(`${name} must be a ${type}`);
    }

    if (type === 'array' && !(value instanceof Array)) {
      throw new TypeError(`${name} must be a ${type}`);
    }

    return value;
  }

  constructor(name, length, students) {
    this._name = HolbertonCourse._checkType(name, 'string', 'Name');
    this._length = HolbertonCourse._checkType(length, 'number', 'Length');
    this._students = HolbertonCourse._checkType(students, 'object', 'Students');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = HolbertonCourse._checkType(value, 'string', 'Name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse._checkType(value, 'number', 'Length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse._checkType(value, 'array', 'Students');

    value.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
  }
}
