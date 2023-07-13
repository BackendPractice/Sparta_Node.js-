// 객체 리터럴
// 1. 객체명은 `calculator`로 작성해주세요!
// 2. `add`, `sub`, `mul`, `div` 메서드를 구성해주세요!

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  sub: function (num1, num2) {
    return num1 - num2;
  },
  mul: (num1, num2) => {
    return num1 * num2;
  },
  div: (num1, num2) => num1 / num2,
};

console.log(calculator.add(100, 10));
console.log(calculator.sub(100, 10));
console.log(calculator.mul(100, 10));
console.log(calculator.div(100, 10));
