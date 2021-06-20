$(document).ready(function() {
  $("form#codeform").submit(function(event){
    event.preventDefault();
    const answerOne = parseInt($("input:radio[name=q1]:checked").val());
    const answerTwo = parseInt($("input:radio[name=q2]:checked").val());
    const answerThree = parseInt($("input:radio[name=q3]:checked").val());
    const answerFour = parseInt($("input:radio[name=q4]:checked").val());
    const answerFive = parseInt($("#q5").val());
    const answerSix = parseInt($("#q6").val());
    const result = answerOne + answerTwo + answerThree + answerFour + answerFive + answerSix;

    if(result <= 9){
      $(".language").text("Javascript");
      $("#final-results").show();
    }else if (result >= 10 && result <= 13){
      $(".language").text("C#");
      $("#final-results").show();
    }else if (result >= 14 && result <= 16){
      $(".language").text("Ruby");
      $("#final-results").show();
    }else if (result >= 17){
      $(".language").text("SQL");
      $("#final-results").show();
    }
  });
});