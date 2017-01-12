// Write a function that takes as input a sorted array and modifies the array to

// compact it, removing duplicates.

// Notes: The input array might be very large.

// For example:

// ● input array = [1, 3, 7, 7, 8, 9, 9, 9, 10]

// ● transformed array = [1, 3, 7, 8, 9, 10]



function unique_characters(array) {

  var a = [];
  for ( i = 0; i < array.length; i++ ) {
      var current = array[i];
      if (a.indexOf(current) < 0) a.push(current);
  }
  return a;
}

unique_characters([1, 3, 7, 7, 8, 9, 9, 9, 10])

