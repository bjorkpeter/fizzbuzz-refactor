var input = +prompt("Please enter a number between 1 and 100", "1-100");
for (var number = 1; number <= input; number++) {
   	if (number % 15 === 0){
    	document.write("FizzBuzz" + "<br>");
    } 
    else if (number % 3 === 0){
    	document.write("Fizz" + "<br>");
    } 
    else if (number % 5 === 0){
    	document.write("Buzz" + "<br>");  
    } 
    else {
    	document.write(number + "<br>");
    }
}