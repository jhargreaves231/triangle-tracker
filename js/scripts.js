function equilateral(var1, var2, var3) {
  if (var1 === var2 & var2 === var3) {
    return "Equilateral"
  }
  else {
    return "Not Equilateral"
  }
}


// Everything below this line is user interface logic:

$(document).ready(function(){
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const number3 = parseInt($("#input3").val());
    
    let result = equilateral(number1, number2, number3)

    $("#output").text(result);
  });
});

    /*let result;
    if (operator === "add"){
      result = add(number1, number2);
    } else if (operator === "subtract"){
      result = subtract(number1, number2);
    } else if (operator === "multiply"){
      result = multiplication(number1, number2);
    } else if (operator === "divide"){
      result = divide(number1, number2)
    }*/
    
 

/*const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2){
  return number1 - number2;
};

const multiplication = function(number1, number2){
  return number1*number2;
};

const divide = function(number1, number2){
  return number1/number2;
};
*/