// Implement a function with signature find_chars(string1, string2) that takes two strings and returns a string that contains only the characters found in string1 and string2 in the order that they are found in string1.

function find_chars(string1, string2)

  {

    return string1.split("").reduce(function(result, char){
      if (string2.includes(char)) return result + char
      return result
    },

     "")
  } 

find_chars("food", "good")