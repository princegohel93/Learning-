
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2500);
  });
}

//async-await 
async function getAllData () {
  console.log("getting data 1...");
  await getData(1);
  console.log("getting data 2...");
  await getData(2);
  console.log("getting data 3...");
  await getData(520);
}

// IIFE - Immediately Invoked Function Expression
(async function () {
  console.log("getting data 1...");
  await getData(1);
  console.log("getting data 2...");
  await getData(2);
  console.log("getting data 3...");
  await getData(3);

})();


/*Promise chain

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
*/


/*callback hell

getData(1, () => {
  console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3, () => {
      console.log("getting data 4...");
      getData(4);
    });
  });
});
*/