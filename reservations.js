const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

  if (!reservations[name]) {
    console.log("You have no reservation")
    reservations[name] = name
    const nameTrue = {claimed: true}
    reservations[name] = nameTrue
    console.log(reservations)
} else if (reservations[name].claimed == true) {
    console.log("Welcome " + name)
  } else {
  console.log("Hmm, someone already claimed this reservation")
}
