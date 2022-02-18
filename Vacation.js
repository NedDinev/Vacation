function vacation(input) {
  let index = 0;
  let neededMoney = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let command = input[index];

  let tempMoney = Number(input[index]);

  let savedMoney = 0;
  let daysCounter = 0;
  let spendingDays = 0;
  while (savedMoney < neededMoney) {
    command = input[index];
    daysCounter++;
    index++;
    tempMoney = Number(input[index]);
    index++;
    if (command == "spend") {
      spendingDays += 1;
      savedMoney = money - tempMoney;

      if (savedMoney <= 0) {
        savedMoney = 0;
      }
    }
    if (spendingDays >= 5) {
      console.log("You can't save the money.");
      console.log(`${spendingDays}`);
      break;
    }
    if (command == "save") {
      savedMoney += tempMoney;
      spendingDays = 0;
    }
  }
  if (savedMoney >= neededMoney) {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
