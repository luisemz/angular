(() => {
  const getMoney = (mount: number): Promise<number> => {
    let actuallMoney = 1000;
    return new Promise((resolve, reject) => {
      if (mount > actuallMoney) {
        reject("Insuficient founds");
      } else {
        actuallMoney -= mount;
        resolve(actuallMoney);
      }
    });
  };

  getMoney(500)
    .then(res => console.log(`Founds avalaibles: ${res}`))
    .catch(console.error);
})();
