(() => {
  interface Xmen {
    name: string;
    years: number;
    skill?: string;
  }

  const sendToMission = (xmen: Xmen) => {
    console.log(`Send ${xmen.name} to mission.`);
  };

  const getToStage = (xmen: Xmen) => {
    console.log(`Get ${xmen.name} to stage.`);
  };

  const wolverine: Xmen = {
    name: "Logan",
    years: 60
  };

  sendToMission(wolverine);
  getToStage(wolverine);
})();
