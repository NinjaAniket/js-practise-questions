//1st soln
const anagarams = (str1, str2) => {
  return cleanStr(str1) === cleanStr(str2);
};

function cleanStr(str) {
  //removes white space and special characters
  return str.replace(/[^\w]/g, "").toLowerCase().split(" ").sort().join(" ");
}

anagarams("he ll-o", "He = * llo");
