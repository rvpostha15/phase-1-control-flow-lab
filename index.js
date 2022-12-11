function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet <= 2500) {
  return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip){
  let charm;
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    default:
      charm = 'Bye.';
      break;
  }
  return charm;
}
