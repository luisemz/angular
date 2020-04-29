(() => {
  let message: string = "Hola";
  let number: number = 123;
  let boolean: boolean = true;
  let today: Date = new Date();

  let anywhere;
  anywhere = message;
  anywhere = number;
  anywhere = boolean;
  anywhere = today;

  let spiderman = {
    name: "Peter",
    years: 30
  };

  spiderman = {
    name: "Juan",
    years: 100
  };
})();
