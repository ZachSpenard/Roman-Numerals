 $(document).ready(function(){
   $("#Number-converter").submit(function(event){
    //  debugger;
     event.preventDefault();
     var userInput = parseInt($("input#Roman-Numerals").val());
     var answerString = "";
     if (userInput === 1) {
       answerString = "I";
     } else if (userInput === 5) {
       answerString = "V";
     } else if (userInput === 10) {
       answerString = "X";
     } else if (userInput === 50) {
       answerString = "L";
     } else if (userInput === 100) {
       answerString = "C";
     } else if (userInput === 500) {
       answerString = "D";
     } else if (userInput === 1000) {
       answerString = "M";
     }
     for (var i = 0; i < userInput; i++) {
       answerString = answerString + "I";
     }


     $("#Output").text(answerString);
   });
 });
