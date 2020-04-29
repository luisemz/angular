(() => {
  class Avenger {
    constructor(
      public name: string,
      public team: string,
      public realName?: string,
      public canFight: boolean = false,
      public fightWins: number = 0
    ) {}
  }

  const antman = new Avenger("Antman", "Capi");

  console.log(antman);
})();
