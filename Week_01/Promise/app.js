// resolve
const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First");
    resolve("Resolve!"); // resolve를 실행할 때, 안에 데이터를 넣어줄 수 있다.
  }, 1000);
});

resolvePromise.then((data) => {
  console.log("Middle");
  console.log("Last");
  console.log(data);
});

// First
// Middle
// Last
// Resolve!

// reject
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First");
    reject("Error!!"); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주한다.
  }, 1000);
});

errorPromise
  .then(() => {
    console.log("Middle");
    console.log("Last");
  })
  .catch((error) => {
    console.log("에러 발생!", error);
  });

// First
// '에러 발생!' Error!!

// promise & async
function 함수이름() {
  return Promise.resolve("값");
}

async function 함수이름2() {
  return "값";
}

함수이름();
// Print: Promise { '값' }

함수이름2();
// Print: Promise { '값' }
