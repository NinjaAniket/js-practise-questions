function capitalizeString(str) {
  let result = [];
  for (let x of str.split(" ")) {
    result.push(x[0].toUpperCase() + x.slice(1).toLowerCase());
  }
  return result.join(" ");
}

capitalizeString("aEY bROs");
// Aey Bros
