// quiz app: 01
var readlineSync = require("readline-sync");

score = 0;

var userName = readlineSync.question("What's your name? ");

 console.log("Aapka swagat hai ! ", userName + " How much do you know about Super Hero! Game me ");

 // function start: 

 function game (question,answer){
   var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log("Bulkul sahi Jawab");
      score = score + 1;
    
    }
      else{
        console.log("oh! Ye glat jawab hai!")
      } 

      console.log("current score : ", score);
      console.log("-------------------------")
 }

//array of objects
var question = [{
  //q1
  question: "01:The Man of Steel is another name for which superhero? ",
  answer: "Superman"
},{
   //q2
   question: "02: What is the real name of Batman? ",
   answer: "Bruce Wayne"
 },{
   //q3
   question : "03: Batman protects which city? ",
   answer: "Gotham City"
  
 },{
   //q4
   question: "04:The “Scarlett Speedster” is the nickname of which superhero? ",
   answer: "The Flash"
  },{
   //q5
    question: "05: Which of the following superheroes says that “Don’t make me angry; you wouldn’t like me when I’m angry”? ",
   answer: "Hulk"
 },{
    //q6
    question : "06: hich superhero has super tools such as the magic lasso and bullet-proof bracelets? ",
    answer: "Wonder Woman"

 }];

 //loop
 for(var i=0; i<question.length; i++){
   var currentQuestion = question[i];
   game(currentQuestion.question, currentQuestion.answer);
 }

 console.log("thankyou for playing the game!, Hope you enjoyed..")
 console.log("Your Total score is: " + score);
