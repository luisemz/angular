(() => {
  console.log("Start");
  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Finish timeout");
    }, 1000);
  });

  prom1.then(res => console.log(res)).catch(res => console.warn(res));
  console.log("Finish");
})();
