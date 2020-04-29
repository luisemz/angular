(() => {
  const myFunctionN = function(a: string) {
    return a.toUpperCase();
  };

  const myFunctionF = (a: string) => a.toUpperCase();

  const sumN = function(a: number, b: number) {
    return a + b;
  };

  const sumF = (a: number, b: number) => a + b;

  const hulk = {
    name: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.name} smash!!!`);
      }, 1000);
    }
  };

  hulk.smash();

  console.log(myFunctionN("normal"));
  console.log(myFunctionF("flecha"));
  console.log(sumN(5, 5));
  console.log(sumF(50, 25));
})();
