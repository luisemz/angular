(() => {
  function activate(
    who: string,
    moment?: string,
    object: string = "batisignal"
  ) {
    console.log(
      `${who} activated ${object}${moment ? ` in the ${moment}` : ""}`
    );
  }

  activate("Gordon", "afternoon");
})();
