(() => {
  const avanger = {
    name: "Steve",
    key: "Captain America",
    skill: "Super Human"
  };

  const extractObject = ({ name, key, skill }: any) => {
    console.log(name);
    console.log(key);
    console.log(skill);
  };

  extractObject(avanger);

  const avangers: string[] = ["Thor", "Ironman", "Spiderman"];

  const extractArr = ([thor, ironman, spiderman]: string[]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  };

  extractArr(avangers);
})();
