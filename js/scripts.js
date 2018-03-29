$(document).ready(function(){
  $("#Number-converter").submit(function(event){
    //  debugger;
    event.preventDefault();
    var userInput = parseInt($("input#Roman-Numerals").val());
    var answerString = "";
    var userArray = []
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
      for (var i = 0; i < userInput; i++) {
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

    $("#Output").text(answerString);
  });
});
