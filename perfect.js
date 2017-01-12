// Given a a number N return whether N is a perfect number or not. (A perfect number is a positive integer that is equal to the sum of its proper positive divisors excluding the number itself)


function perfect_number(n)

  {
  var temp = 0;
     for(var i = 1; i <= n/2; i++)
       {
           if(n % i === 0)
            {
              temp += i;
            }
       }
     
       if(temp === n && temp !== 0)
          {
         console.log("This number is perfect."); 
          } 
       else
          {
         console.log("This number is not perfect.");
          }   
  } 

perfect_number(32); 