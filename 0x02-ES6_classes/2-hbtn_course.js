export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  /**
   * @param {int} length
   */
  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('length must be an integer');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  /**
   * @param {String[]} students
   */
  set students(students) {
    if (!(Array.isArray(students) && students.every((value) => typeof (value) === 'string'))) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
