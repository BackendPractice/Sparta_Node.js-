const users = ["Lee", "Kim", "Park", 2];

try {
  for (const user of users) {
    console.log(user.toUpperCase());
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
}

// LEE
// KIM
// PARK
// Error: user.toUpperCase is not a function

// function withdraw(amount, account) {
//   if (amount > account.balance) throw new Error("잔고가 부족합니다.");
//   account.balance -= amount;
//   console.log(`현재 잔고가 ${account.balance}남았습니다.`); // 출력되지 않음
// }

// const account = { balance: 1000 };
// withdraw(2000, account);

// Error: 잔고가 부족합니다.
//     at withdraw (/Users/kidongg/Desktop/sparta_node/Week_01/error-handling/app.js:17:39)
//     at Object.<anonymous> (/Users/kidongg/Desktop/sparta_node/Week_01/error-handling/app.js:23:1)
//     at Module._compile (node:internal/modules/cjs/loader:1267:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1321:10)
//     at Module.load (node:internal/modules/cjs/loader:1125:32)
//     at Module._load (node:internal/modules/cjs/loader:965:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

function errorException(isThrow) {
  try {
    console.log("자원을 할당하였습니다.");
    if (isThrow) throw new Error();
  } catch (error) {
    console.log("에러가 발생했습니다.");
  } finally {
    console.log("자원을 제거하였습니다.");
  }
}

errorException(false);
// 자원을 할당하였습니다.
// 자원을 제거하였습니다.

errorException(true);
// 자원을 할당하였습니다.
// 에러가 발생했습니다.
// 자원을 제거하였습니다.
