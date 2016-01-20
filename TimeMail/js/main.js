function init()
{

  var hash = window.location.hash;
  

  if (hash == "#kalender") {


    $("#content").load("kalender.php", function () {

     app.Calendar.loadCalender();
     app.Month.getmonth();
     
    });



  } else
  {
    $("body")
            .html("")

            .append($("<div/>",
                    {
                      id: "header",
                      html: "<h1>Willkommen by TimeMail</h1>"
                    }
            ))

            .append($("<div />",
                    {
                      id: "Login",
                      class: "login",
                      html: ""
                    }))

    $(".login").append("<div class='logname' <label>Benutzer:</label></div><div class= 'logval'><input type='text' name='name' id='Benutzername'></input></div>")

    $(".login").append("<div class='logname'><label>Password:</label></div><div class= 'logval'><input type='password' name='passwort' id='Passwort'></input></div>")
    $(".login").append("<button type='button' id='logging'>Einloggen</button>")

  };

}


$(document).ready(function ()
{
  init();
});