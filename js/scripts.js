//addition
var add = function(number1 , number2){
	return number1 + number2;
};

var number1 = parseInt(prompt("enter a number."));
var number2 = parseInt(prompt("enter another number."));


alert(add(number1, number2));


//bmi calculator
var add = function(weight , height){
	return weight / (height * height) * 703;
};

var weight = parseInt(prompt("What is your weight in pounds?"));
var height = parseInt(prompt("What is your height in inches?"));




//celsius to fahrenheit conversion
var convert = function (tempC){
  return (tempC * (9/5)) + 32;
}

var tempC= parseInt(prompt("what temperature is it in celcius?"));
 alert("It is " + convert(tempC) + "F.");



//gallon to liters conversion
 var gallon2liters = function (gallon){
   return gallon * 3.785;
 }

 var gallon= parseInt(prompt("How many gallons?"));
  alert("It is " + gallon2liters(gallon) + "L.");



//ounce to grams conversion
var ounce2Grams = function(ounce){
  return ounce * 28.3495;
}

var ounce=parseInt(prompt("How many ounces?"));
alert("there are " + ounce2Grams(ounce) + " grams.");



//asks name age and food and returns all info in a string
var person = function(name , age , food){
	return sayinfo;
};

var name = prompt("What is your name?");
var age = prompt("What is your age?");
var food = prompt("what is your favorite food?");

var sayinfo = alert("Your name is " + name + " and you are " + age + " years old and your favorite food is " + food + ".");
