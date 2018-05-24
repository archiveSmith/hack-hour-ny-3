/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  let number = false;
  jazbook.some((person) => {
    if (person[0] === name) {
      [, number] = person;
      return true;
    }
    return false;
  });
  return number;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  jazbook.forEach((person) => {
    const [name, number] = person;
    this[name] = number;
  });

  return this;
}
makePhoneBookObject.prototype.add = function add(name, number) {
  this[name] = number;
};

makePhoneBookObject.prototype.remove = function remove(name) {
  if (this[name] !== undefined) delete this[name];
};

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
