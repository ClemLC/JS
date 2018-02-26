// Construis une fonction my_max() qui prend une array et qui retourne le nombre maximum

console.log(Math.max(1, 3, 8, 9, 2, 5));

// Construis une fonction vowel_count() qui prend un string et qui retourne le nombre de voyelles

function vowel_count(string)
{
  var vowel_list = 'aeiouyAEIOUY';
  var vcount = 0;

  for(var x = 0; x < string.length; x++)
  {
    if (vowel_list.indexOf(string[x]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}

console.log(vowel_count("Kikou les loulous !"));

// Construis une fonction reverse() qui prend un string et qui renvoie les caractères en position inverse. Ainsi, Bonjour monde ! devient ! ednom ruojnoB

function reverse(string)
{
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  return joinArray;
}

console.log(reverse("Kikou les loulous !"));
