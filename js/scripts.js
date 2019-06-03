
$(document).ready(function()
  {
/*
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

*/

    //CLICK HEADER PRACTICE
    $("h1").click(function(){
    alert("AAAAAAAAAA");
  });

  var person = function(sentence1){
    return sayinfo;
  };

  var sentence1 = prompt("Enter a string");
  var ommitstr = sentence1.length - 2;
  alert(ommitstr); //debug test

  console.log(omitstr);

  var sayinfo = alert(sentence1.substr(1 , ommitstr));


//Takes first and last letter, capitalizes them and prints them
var person = function(sentence1){
  return sayinfo;
};

var sentence1 = prompt("Enter a string");
var letterCount = sentence1.length - 1;
alert(letterCount);
var firstLetter = sentence1.charAt (0).toUpperCase();
var lastLetter = sentence1.charAt(letterCount).toUpperCase();

var sayinfo = alert(firstLetter + lastLetter);




//Same as above but returns them in reverse
var persno = function(sentence1){
  return sayinfo;
};

var sentence1 = prompt("Enter a string");
var letterCount = sentence1.length - 1;
alert(letterCount);
var firstLetter = sentence1.charAt (0).toUpperCase();
var lastLetter = sentence1.charAt(letterCount).toUpperCase();

var sayinfo = alert(lastLetter + firstLetter);


var callperson = function(sentence1) {
  return bothperson;
}

var bothperson = alert(person(sentence1) + persno(sentence1));








function person(sentence1){
var letterCount = sentence1.length - 1;
var firstLetter = sentence1.charAt (0).toUpperCase();
var lastLetter = sentence1.charAt(letterCount).toUpperCase();

var sayinfo = firstLetter + lastLetter;
  return sayinfo;
};




//one big function
          //Same as above but returns them in reverse
          function persno(sentence1){
          var letterCount = sentence1.length - 1;
          var firstLetter = sentence1.charAt (0).toUpperCase();
          var lastLetter = sentence1.charAt(letterCount).toUpperCase();

          var sayinfo = lastLetter + firstLetter;

            return sayinfo;
          };


          function preson(sentence1){
          //var letterCount = sentence1.length; broken as shit plz fix

          //var sayinfo = lettercount / 2;
          //var rounddown = sayinfo.floor;
          //alert(rounddown);

          //  return 2;
          var letterCount = sentence1.length;
          alert(letterCount);
          var firstLetter = (letterCount / 2);
          alert(Math.floor(firstLetter));
          var lastLetter = Math.floor(firstLetter);

          var sayinfo = sentence1.charAt(firstLetter - 1);

            return sayinfo;
          };


          var callperson = function(sentence1) {
            return averageperson;
          }

          var sentence1 = prompt("Enter a string");
          var bothperson = alert(person(sentence1) + persno(sentence1));
          var nextperson = alert(sentence1 + persno(sentence1));
          var averageperson = alert(preson(sentence1) + sentence1 + persno(sentence1));
//end of big function
  });
