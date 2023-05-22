//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  getName() {
    return this.name;
  set age(age) {
    this._age = age;
  }
setAge(age) {
    this.age = age;

  get age() {
    return this._age;
  }
}

class Student extends Person {
	study(){
	 console.log(this.name +"is studying");
	}
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
	teach(){
		 console.log(this.name+ "is teaching");
	}
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
