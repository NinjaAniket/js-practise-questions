// find number of vowels in string

function findVowel(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let x of str.toLowerCase()) {
    if (vowels.includes(x)) {
      count++;
    }
  }
  console.log(count); // 3
}

findVowel("Hi there");

//2nd soln

function vowels(str) {
  const matches = str.match[/[aeiou]/gi];
  return matches ? matches.length : 0; //3
}

vowels("Hi there");
