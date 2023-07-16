// 클래스
class User_01 {}

// user_01 인스턴스 생성
const user_01 = new User_01();
user_01.name = "Kidongg";
user_01.age = 28;
user_01.tech = "Node.js";

// console.log(user_01); // User_01 { name: 'Kidongg', age: 28, tech: 'Node.js' }
// console.log(user_01.name); // Kidongg
// console.log(user_01.age); // 28
// console.log(user_01.tech); // Node.js

// 생성자, this, property
class User_02 {
  constructor(name, age, tech) {
    // User 클래스의 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
}

// user_02 인스턴스 생성
const user_02 = new User_02("Kidongg", 28, "Node.js");

// console.log(user_02); // User_02 { name: 'kidongg', age: 28, tech: 'Node.js' }
// console.log(user_02.name); // Kidongg
// console.log(user_02.age); // 28
// console.log(user_02.tech); // Node.js

// 메서드
class User_03 {
  constructor(name, age, tech) {
    // User 클래스의 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }

  getName() {
    return this.name;
  } // getName 메서드
  getAge() {
    return this.age;
  } // getAge 메서드
  getTech() {
    return this.tech;
  } // getTech 메서드
}

// user_03 인스턴스 생성
const user_03 = new User_03("Kidongg", "28", "Node.js");
// console.log(user_03); // User_03 { name: 'Kidongg', age: '28', tech: 'Node.js' }
// console.log(user_03.getName()); // Kidongg
// console.log(user_03.getAge()); // 28
// console.log(user_03.getTech()); // Node.js

// 상속
// User_04 부모 클래스
class User_04 {
  constructor(name, age, tech) {
    // 부모 클래스 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
  // 부모 클래스 getTech 메서드
  getTech() {
    return this.tech;
  }
}

// Employee 자식 클래스
class Employee extends User_04 {
  constructor(name, age, tech) {
    // 자식 클래스 생성자
    super(name, age, tech);
  }
}

const employee = new Employee("Kidongg", "28", "Node.js");
console.log(employee); // Employee { name: 'Kidongg', age: '28', tech: 'Node.js' }
console.log(employee.name); // Kidongg
console.log(employee.age); // 28
// 부모 클래스의 getTech 메서드 호출
console.log(employee.getTech()); // Node.js
