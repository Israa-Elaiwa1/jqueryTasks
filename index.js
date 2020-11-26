$("document").ready(function() {


/*task1*/
  var x = $(".color").change(function() {
    $("body").css('background-color', x.val());
  });
/*task2*/
  $(".Check").click(function() {

    $(".wrong").css('color', "red");
    $(".right").css("color", "green");
  });
/*task3*/
  var country = $(".country").click(function() {

    switch (country.val()) {
      case "Jordan":
        $(".state").hide();
        $(".zip-code-usa").hide();
        $(".city").show();
        $(".zip-code-jo").show();
        break;
      case "Usa":
        $(".city").hide();
        $(".zip-code-jo").hide();
        $(".state").show();
        $(".zip-code-usa").show();
        break;
    }

  });
/*task4*/
  $(".back-to-top").click(function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
/*task5*/
  $(".calculate").click(function() {
    var num1 = $(".num1").val();
    var num2 = $(".num2").val();
    var operator = $(".operator").val();
    var result = $(".result");
  
    switch (operator) {
      case "mul":
        result.html(num1 * num2);
        break;
      case "add":
        /*var b = parseInt(num1);
        var c = parseInt(num2);*/
        result.html(+num1 + +num2);
        break;
      case "div":
        result.html(num1 / num2);
        break;
      case "min":
        result.html(num1 - num2);
        break;
      default:
        result.html("Incorrect!");
    } //end of switch

  }); //end of click func





/*task6*/
  $(".submit").click(function() {
    emailCheck();
    passwordCheck();
    phoneNumber();

  });

  /*Email validation*/
  function emailCheck() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email1 = $(".email1").val();
    if (email1=="")
    {
       alert("please fill the email field!");
     }
    else {
      if (email1.match(mailformat)) {
        alert("Valid email address!");

      } else {
        alert("You have entered an invalid email address!");

      }
    }



  };

  /*password validation*/

  function passwordCheck() {

    var password = $(".password").val();
    var password2 = $(".password2").val();
    if(password==""||password2=="")
    {
    alert("please fill the password field!")
    }
    else{
      if (password === password2)
        alert("Password Matches");
      else {
        alert("Does not match!!");
      } }

  };



  /*phone number validation*/
  function phoneNumber() {
    var phoneFormat = /^07[789]{1}[0-9]{7}$/;

    var phoneNum = $(".phone-num").val();
    if(phoneNum=="")
    {
      alert("Please fill phone number field!!");
    }
    else{
      if (phoneNum.match(phoneFormat)) {
        alert("Valid phone number");

      } else {
        alert("Invalid phone number!");
      }
    }
  };
  /*task7*/
  $(".send").click(function(){

      var is=0;


      var radioValue = $("input[name='Amman']:checked").val();
      if(radioValue){
        is++;
      }

      var radioValue = $("input[name='Vatican']:checked").val();
      if(radioValue){
        is++;
      }

      var radioValue = $("input[name='Russia']:checked").val();
      if(radioValue){
        is++;
      }

      var radioValue = $("input[name='Nile']:checked").val();
      if(radioValue){
        is++;
      }

      var radioValue = $("input[name='blueWhale']:checked").val();
      if(radioValue){
        is++;
      }
      $("#result1").html("Your score is " +is +" /5");
      $(".a").css('color', "#bb2205");
      $(".x").css("color","#7ea04d");



      /*var ee=0;
      localStorage.setItem("q1Answer", "Amman");
      const answer1=localStorage.getItem("q1Answer");
      q1=$(".q1").val();
      if(q1==answer1)

      {
        alert(ee +"1");
        ee++;
        alert(ee +"2");
    }

      localStorage.setItem("q2Answer", "Vatican");
      const answer2=localStorage.getItem("q2Answer");
      q2=$(".q2").val();
      if(q2==answer2)
      {       alert("israa");

    }*/
   });





}); //end of ready func
