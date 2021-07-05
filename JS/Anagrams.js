//Anagrams
/*
Anagrams are words that have the same characters in the same quantity. 
This means that two strings are anagrams if we can rearrange one to get the other.

Here are some examples of words that are anagrams.
“listen” and “silent”
“rail safety” and “fairy tales”
“dormitory” and “dirty room”
“the eyes” and “they see”

Given two strings, 
write an algorithm to check if they are anagrams of each other. 
Return true if they pass the test and false if they don't.
*/

const validAnagram = (text1, text2) => {
  const object1 = {},
    object2 = {};
  if (text1.length == text2.length) { // check first,  if the two input has the same length
    convertToArray(text1).forEach((l) => {// go through the first array elements
      if (object1[l]) object1[l] += 1;// if this letter exist in the object then increase it by 1
      else object1[l] = 1;// else create new one and add 1 to it
    });
    convertToArray(text2).forEach((l) => {
      if (object2[l]) object2[l] += 1;
      else object2[l] = 1;
    });
    for (const item in object1) {// go through the first object items  
      if (!object2[item] || object1[item] != object2[item]) { // search for each letter in both objects, if the letter is not exist in the second object or the values were not matched then return false.
        print(text1, text2, false);
        return false;
      }
    }
    print(text1, text2, true); // all is good return true
    return true;
  }
  print(text1, text2, false); // not the same array length return false
  return false;
};

const convertToArray = (value) => value.replace(/[^\w]/g, "").toLowerCase().split(""); // remove any non-alphabet character using regex and convert the strings to lowercase then convert it to array
const print = (t1, t2, value) => console.log(`${t1}, ${t2} = (${value})`); // print out the result

validAnagram("", ""); //true
validAnagram("ali", "ila"); //true
validAnagram("true", "ruet"); //true
validAnagram("google", "gogole"); //true
validAnagram("rat", "car"); //false
validAnagram("instagram", "margatsni"); //false
validAnagram("canWeGoouttothepark", "canWetoouttofhepark"); //false
validAnagram("javascript", "jaavscrpit"); //true