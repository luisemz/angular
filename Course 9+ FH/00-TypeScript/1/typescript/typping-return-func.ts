(() => {
  const sum = (a: number, b: number): number => a + b;

  const name = (): string => "Hola Luis";

  const getSalary = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve("hola luis");
    });
  };

  getSalary().then(a => console.log(a.toUpperCase()));
})();
