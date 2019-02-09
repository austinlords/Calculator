// back-end logic

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1;
var number2;
var operation;

//front-end logic
$(function() {
  $("form#calculatorForm").submit(function(event) {
    event.preventDefault();
    number1 = parseFloat($("#firstNumber").val());
    number2 = parseFloat($("#secondNumber").val());
    operation = $("input[type=radio]:checked").val();

    if (operation === "add") {
      var result = number1 + number2;
    } if (operation === "subtract") {
      var result = number1 - number2;
    } if (operation === "multiply") {
      var result = number1 * number2
    } if (operation === "divide") {
      var result = number1 / number2
    }

    $("div#result").text("Result: " + result);
  });
});
