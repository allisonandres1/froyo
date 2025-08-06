{
  const input = prompt("List froyo flavors separated with commas:");

  const flavors = [];
  let currentFlavor = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (letter === ",") {
      flavors.push(currentFlavor);
      currentFlavor = "";
    } else if (letter !== " ") {
      currentFlavor += letter;
    }
  }

  if (currentFlavor !== "") {
    flavors.push(currentFlavor);
  }

  const flavorCounts = {};

  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];

    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }

  console.log(`Your froyo order:`);

  for (const key in flavorCounts) {
    console.log(key + ": " + flavorCounts[key]);
  }
}
