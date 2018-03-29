var answerString = "";
convertNumber = 0;

function converter(convertNumber) {
  for (var i = 0; i < convertNumber; i++) {
    if (count === 3) {
      answerString = answerString + "V";
      answerString = answerString.replace("II","");
    } else if (i === 4) {
      answerString = answerString.replace("I","");
    } else {
      answerString = answerString + "I";
    }
    if (i === 8) {
      answerString = answerString.replace(/V/g,"");
      answerString = answerString + "X";
    }
    var count = 0;
    for(var u = 0; u <answerString.length; ++u){
      if (answerString[u] == "I") {
        count++;
      }
    }
  }
}


$(document).ready(function(){
  $("#Number-converter").submit(function(event){
    //  debugger;
    event.preventDefault();
    var userInput = $("input#Roman-Numerals").val();
    var userArray = [];
    userArray = userInput.split("");
    for (var a = 0; a < userArray.length; a++) {
      userArray[a] = parseInt(userArray[a]);
    }
    userArray = userArray.reverse();
    var secondArray = ["I","X","C","M"];
    var thirdArray = ["V","L","D"];

    for (var b = 0; b < userArray.length; b++) {
      var convertNumber = userArray[b];
      converter(convertNumber);
    }

    // debugger;
    if (userInput === 10) {
      answerString = "X";
    } else if (userInput === 50) {
      answerString = "L";
    } else if (userInput === 100) {
      answerString = "C";
    } else if (userInput === 500) {
      answerString = "D";
    } else if (userInput === 1000) {
      answerString = "M";
    } else {
      // debugger;
  }

    $("#Output").text(answerString);
  });
});
