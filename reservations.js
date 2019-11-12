const name = prompt('Please enter the name for your reservation');
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
};
  
  if (reservations[name.toLowerCase()]) {
    if (!reservations[name.toLowerCase()].claimed){
        alert("Welcome " + name);
    } else {
        alert("Whoops! Looks like your reservation has been claimed already!");
    }
  } else {
      alert("We have no reservation under this name");
  }

  reservations[name] = { claimed: true };
  console.log(reservations);