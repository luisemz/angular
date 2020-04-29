(() => {
  class Avenger {
    name: string;
    team: string;
    realName: string;
    canFight: boolean;
    fightWins: number;

    constructor(
      name: string,
      team: string,
      realName: string = "",
      canFight: boolean = false,
      fightWins: number = 0
    ) {
      this.name = name;
      this.team = team;
      this.realName = realName;
      this.canFight = canFight;
      this.fightWins = fightWins;
    }
  }

  const antman = new Avenger("Antman", "Ironman");

  console.log(antman);
})();
