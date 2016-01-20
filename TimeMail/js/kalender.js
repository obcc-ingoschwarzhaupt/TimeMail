
//********************************
// Super Globale Variablen
//********************************
var extmonth = 22;
var extyear = 000;
var months = ["Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Config

// color Days
var activ = "black";
var deactiv = "#F7FCFF";

//******************************

// Get Month

//++++++++++++++++++++++++++++++





function get_month()
{
  // color Days
  var day = new Date();
  var days = getmonth(day);
  $("#monthday").text(months[extmonth]);

  loadded_day = load_days(days);
  print_days(loadded_day);
  // Create an inline menu by calling 
// .MonthPicker(); on a <div> or <span> tag.
  $("#InlineMenu").MonthPicker({
    SelectedMonth: '04/' + new Date().getFullYear(),
    OnAfterChooseMonth: function (selectedDate) {

      // Do something with selected JavaScript date.
      var days = getmonth(selectedDate);


      $("#monthday").text(months[extmonth]);
      $("#monthyear").text(extyear);
      loadded_day = load_days(days);
      




    }
  });
}

function print_days(days)
{
  for (var x = 0; x < days.length; x++)
  {
    var d = x + 1;
    var element = document.getElementById(d).innerHTML = days[x];

  }
  var a = document.getElementById(1).innerHTML;
  if (a > "20") {

    var x = 1;
    var counter = 1;
    do
    {
      b = x + 1;
      a = document.getElementById(x).innerHTML;
      b = document.getElementById(b).innerHTML;
      $("#" + counter).css("color", deactiv);
      counter++;

      x++;
    } while (a < b)

    var found = false;
    for (var a = counter; a < days.length; a++)
    {

      c = document.getElementById(a).innerHTML;
      b = a + 1;
      e = parseInt(document.getElementById(b).innerHTML);
      if (c < e && found == false)
      {
        $("#" + a).css("color", activ);
        $("#" + b).css("color", activ);
      } else
      {
        var h = a;
        h++;
        found = true;
        $("#" + h).css("color", deactiv);
      }
    }

  } else
  {


    var fo = false;
    for (var a = 1; a < 42; a++)
    {

      var b = a + 1;
      e = parseInt(document.getElementById(a).innerHTML);
      d = parseInt(document.getElementById(b).innerHTML);

      if (e < d && fo == false)
      {
        $("#" + a).css("color", activ);
      } else
      {
        var h = a;
        h++;
        fo = true;
        $("#" + h).css("color", deactiv);
      }
    }
  }
}

function load_days(days)
{
  var x = 1;
  while (days.length < 42)
  {
    days.push(x);
    x++;
  }
  return days;
}


function generate_event()
{
  
  
}

function load_event()
{

}

function load_kalender()
{
  $("body")
          .html("")

          .append($("<div/>",
                  {
                    id: "kalender",
                    html: "<h1>Willkommen by TimeMail</h1>"
                  }
          ))
          .append($("<div/>",
                  {
                    id: "menu",
                    html: "menu"
                  }
          ))


  $("#kalender").append("<div class='monat' ><div class='month' name='kalender' >Monat:</div><div class='month' id='monthday' name='kalender' >Januar</div></div>");
  $("#kalender").append("<div class='monat' ><div class='month' name='kalender' >Jahr:</div><div class='month' id='monthyear'></div></div>");
  $("#kalender").append("<div class='weeks' ><div class='week' name='kalender' >Mo</div><div class='week' name='kalender'   >Di </div><div class='week' name='kalender' >Mi</div><div class='week' name='kalender' >Do</div><div class='week' name='kalender' >Fr</div><div class='week' name='kalender'>Sa</div><div class='week' name='kalender' >So</div></div>");
  $("#kalender").append("<div class='line'><div class='ktage' name='kalender' id='1'>1</div><div class='ktage' name='kalender'   id='2'>2<hr> <p><ul id='sortable'><li><h3 class='name' name='drag'>1</h3></li><li><h3 class='name' name='drag' >2</h3></li><li><h3 class='name' name='drag' >2</h3></li></ul></p></div><div class='ktage' name='kalender' id='3'>3</div><div class='ktage' name='kalender' id='4'>4</div><div class='ktage' name='kalender' id='5'>5</div><div class='ktage' name='kalender' id='6'>6</div><div class='ktage' name='kalender' id='7'>7</div></div>");
  $("#kalender").append("<div class='line'><div class='ktage' name='kalender' id='8'></div><div class='ktage' name='kalender' id='9'></div><div class='ktage' name='kalender' id='10'></div><div class='ktage' name='kalender' id='11'></div><div class='ktage' name='kalender' id='12'></div><div class='ktage' name='kalender' id='13'></div><div class='ktage' name='kalender' id='14'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='15'></div><div class='ktage'  id='16'></div><div class='ktage'  id='17'></div><div class='ktage'  id='18'></div><div class='ktage'  id='19'></div><div class='ktage'  id='20'></div><div class='ktage'  id='21'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='22'></div><div class='ktage'  id='23'></div><div class='ktage'  id='24'></div><div class='ktage'  id='25'></div><div class='ktage'  id='26'></div><div class='ktage'  id='27'></div><div class='ktage'  id='28'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='29'></div><div class='ktage'  id='30'></div><div class='ktage'  id='31'></div><div class='ktage'  id='32'></div><div class='ktage'  id='33'></div><div class='ktage'  id='34'></div><div class='ktage'  id='35'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='36'></div><div class='ktage'  id='37'></div><div class='ktage'  id='38'></div><div class='ktage'  id='39'></div><div class='ktage'  id='40'></div><div class='ktage'  id='41'></div><div class='ktage'  id='42'></div></div>");
  $("#menu").append(" <div id='InlineMenu'></div>");
  $("#menu").append(" <div id='element_to_pop_up'>Hallo</div>");
  $("#menu").append("<button id='my-button'>POP IT UP</button>");
 
  $("#sortable").sortable();
  $("#sortable").disableSelection();

  $("drag").draggable({revert: "invalid"});

  

  $("#a2").droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      $(this)
              .addClass("ui-state-highlight")
              .find("p");
    },
    over: function (event, ui) {


    }
  });
 



  $("#a1").droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      $(this)
              .addClass("ui-state-highlight")
              .find("p");
    },
    over: function (event, ui) {

    }
  });
  mouseover_leave("1","mouseover");
  mouseover_leave("1","mouseleave");
  mouseover_leave("2","mouseover");
  mouseover_leave("2","mouseleave");
  mouseover_leave("3","mouseover");
  mouseover_leave("3","mouseleave");
  mouseover_leave("4","mouseover");
  mouseover_leave("4","mouseleave");
  mouseover_leave("5","mouseover");
  mouseover_leave("5","mouseleave");
  mouseover_leave("6","mouseover");
  mouseover_leave("6","mouseleave");
  mouseover_leave("7","mouseover");
  mouseover_leave("7","mouseleave");
  mouseover_leave("8","mouseover");
  mouseover_leave("8","mouseleave");
  mouseover_leave("9","mouseover");
  mouseover_leave("9","mouseleave");
  mouseover_leave("10","mouseover");
  mouseover_leave("10","mouseleave");
  mouseover_leave("11","mouseover");
  mouseover_leave("11","mouseleave");
  mouseover_leave("12","mouseover");
  mouseover_leave("12","mouseleave");
  mouseover_leave("13","mouseover");
  mouseover_leave("13","mouseleave");
  mouseover_leave("14","mouseover");
  mouseover_leave("14","mouseleave");
  mouseover_leave("15","mouseover");
  mouseover_leave("15","mouseleave");
  mouseover_leave("16","mouseover");
  mouseover_leave("16","mouseleave");
  mouseover_leave("17","mouseover");
  mouseover_leave("17","mouseleave");
  mouseover_leave("18","mouseover");
  mouseover_leave("18","mouseleave");
  mouseover_leave("19","mouseover");
  mouseover_leave("19","mouseleave");
  mouseover_leave("20","mouseover");
  mouseover_leave("20","mouseleave");
  mouseover_leave("21","mouseover");
  mouseover_leave("21","mouseleave");
  mouseover_leave("22","mouseover");
  mouseover_leave("22","mouseleave");
  mouseover_leave("23","mouseover");
  mouseover_leave("23","mouseleave");
  mouseover_leave("24","mouseover");
  mouseover_leave("24","mouseleave");
  mouseover_leave("25","mouseover");
  mouseover_leave("25","mouseleave");
  mouseover_leave("26","mouseover");
  mouseover_leave("26","mouseleave");
  mouseover_leave("27","mouseover");
  mouseover_leave("27","mouseleave");
  mouseover_leave("28","mouseover");
  mouseover_leave("28","mouseleave");
  mouseover_leave("29","mouseover");
  mouseover_leave("29","mouseleave");
  mouseover_leave("30","mouseover");
  mouseover_leave("30","mouseleave");
  mouseover_leave("31","mouseover");
  mouseover_leave("31","mouseleave");
  mouseover_leave("32","mouseover");
  mouseover_leave("32","mouseleave");
  mouseover_leave("33","mouseover");
  mouseover_leave("33","mouseleave");
  mouseover_leave("34","mouseover");
  mouseover_leave("34","mouseleave");
  mouseover_leave("35","mouseover");
  mouseover_leave("35","mouseleave");
  mouseover_leave("36","mouseover");
  mouseover_leave("36","mouseleave");
  mouseover_leave("37","mouseover");
  mouseover_leave("37","mouseleave");
  mouseover_leave("38","mouseover");
  mouseover_leave("38","mouseleave");
  mouseover_leave("39","mouseover");
  mouseover_leave("39","mouseleave");
  mouseover_leave("40","mouseover");
  mouseover_leave("40","mouseleave");
  mouseover_leave("41","mouseover");
  mouseover_leave("41","mouseleave");
  mouseover_leave("42","mouseover");
  mouseover_leave("42","mouseleave");
  
      // Semicolon (;) to ensure closing of earlier scripting
    // Encapsulation
    // $ is assigned to jQuery
   ;(function($) {
        $(function() {
            $('#my-button').on('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up').bPopup({
                    appendTo: 'form'
                    , zIndex: 2
                    , modalClose: false
                });
            });
         });
     })(jQuery);
  
}
 function mouseover_leave(id,effekt)
  {
    $("#" + id).on(effekt, function () {
      p = document.getElementById(id);
     var  background ="red";
      var hover ="#E8E8E8";
      if (effekt === "mouseover")
      {
        p.style.backgroundColor = background;
      } else
      {
        p.style.backgroundColor = hover;
      }
    })
  }

function getmonth(date)
{

  var month = date.getMonth();
  year = date.getFullYear();
  extmonth = month;
  extyear = year;
  if (month == 0)
  {
    var yearold = year - 1;
    var monthold = 12;
  } else
  {
    var yearold = year;
    var monthold = month--;

  }
  var days = monatsTage(monthold, yearold);
  var oldmonth = getmonthday(1, monthold, yearold, days);
  var days = monatsTage(month, year);
  var weekday = new Array(days);
  for (var a = 0; a < days; a++)
  {
    var b = a;
    weekday[a] = b + 1;

  }
  var x = new Array();
  var complete = oldmonth.concat(weekday);
  var test = complete.forEach(function (a) {
    x.push(a);

  });

  var a = 0;
  var index;



  return x;
}




function generatedays(days)
{

  days.forEach(generatedays);

}

function getmonthday(day, month, year, days)
{

  var d = new Date(year, month, day);
  var n = d.getDay();

  if (n == 0) {
    n = 6;
  } else
  {
    n--;
  }
  var days2 = days
  days2 = days2 - n;
  var weekday = new Array(7);

  for (var count = 0; count < n; count++)
  {
    weekday[count] = days2 + count + 1;
  }
  return weekday;
}


function monatsTage(monat, jahr) {
  if (monat != 2) {
    if (monat == 9 ||
            monat == 4 ||
            monat == 6 ||
            monat == 11) {
      return 30;
    } else {
      return 31;
    }
  } else {
    return (jahr % 4) == "" && (jahr % 100) != "" ? 29 : 28;
  }
}
