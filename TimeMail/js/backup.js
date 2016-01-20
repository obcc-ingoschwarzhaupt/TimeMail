

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Config

// color Days
var activ = "black";
var deactiv = "#F7FCFF";

// Color Hover 
  background = "red";
  hover      = "#E8E8E8";


var personcontainer ="";
//******************************

// Get Month

//++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++
//Terminspeicher
//++++++++++++++++++++++++++++++
var container = "";


function get_month()
{
  // color Days
  var day = new Date();
  var days = getmonth(day);
  $("#monthday").text(months[extmonth]);

  loadded_day = load_days(days);
  print_days(loadded_day);
  $("#monthyear").text(extyear);
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
      print_days(loadded_day);

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
      if (c < e && found === false)
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
  $("#kalender").append("<div class='line'><div class='ktage' name='kalender' id='1'>1</div><div class='ktage' name='kalender'  id='2'>2<hr> <p><ul id='sortable'><li><h3 class='name' name='drag'>1</h3></li><li><h3 class='name' name='drag' >2</h3></li><li><h3 class='name' name='drag' >2</h3></li></ul></p></div><div class='ktage' name='kalender' id='3'>3</div><div class='ktage' name='kalender' id='4'>4</div><div class='ktage' name='kalender' id='5'>5</div><div class='ktage' name='kalender' id='6'>6</div><div class='ktage' name='kalender' id='7'>7</div></div>");
  $("#kalender").append("<div class='line'><div class='ktage' name='kalender' id='8'></div><div class='ktage' name='kalender' id='9'></div><div class='ktage' name='kalender' id='10'></div><div class='ktage' name='kalender' id='11'></div><div class='ktage' name='kalender' id='12'></div><div class='ktage' name='kalender' id='13'></div><div class='ktage' name='kalender' id='14'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='15'></div><div class='ktage'  id='16'></div><div class='ktage'  id='17'></div><div class='ktage'  id='18'></div><div class='ktage'  id='19'></div><div class='ktage'  id='20'></div><div class='ktage'  id='21'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='22'></div><div class='ktage'  id='23'></div><div class='ktage'  id='24'></div><div class='ktage'  id='25'></div><div class='ktage'  id='26'></div><div class='ktage'  id='27'></div><div class='ktage'  id='28'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='29'></div><div class='ktage'  id='30'></div><div class='ktage'  id='31'></div><div class='ktage'  id='32'></div><div class='ktage'  id='33'></div><div class='ktage'  id='34'></div><div class='ktage'  id='35'></div></div>");
  $("#kalender").append("<div class='line'><div class='ktage'  id='36'></div><div class='ktage'  id='37'></div><div class='ktage'  id='38'></div><div class='ktage'  id='39'></div><div class='ktage'  id='40'></div><div class='ktage'  id='41'></div><div class='ktage'  id='42'></div></div>");
  
  
  
  $("#menu").append(" <div id='InlineMenu'></div>");
  $("#menu").append(" <div id='dragged-area'></div>");
  $("#menu").append("<button class='poup-button'>Termin eintragen</button>");
  $("#menu").append("<div id='element_to_pop_up'></div>");   
 
           
  $("#sortable").sortable();
  $("#sortable").disableSelection();
  $("drag").draggable({revert: "invalid"});

//  $( "#element_to_pop_up" ).load( "" );



  $( "#element_to_pop_up" ).load( "popups/newevent.html", function() {
 
});

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
  for(var a =0; a<42;a++)
  {
    mouseover_leave(a, "mouseover",background,hover);
    mouseover_leave(a, "mouseleave",background,hover);
    
  }
  personcontainer = load_person();
  
 popup();
  
}

function load_person()
{
  var container = false;
  
  $.post( "php/person.php", function( data ) {
      
         container = jQuery.parseJSON( data );
        
        for(var a=0;a< container.length;a++)
        {
          $("#persons").append(" <option value='"+container[a][0]+"'>"+container[a][2]+" "+container[a][1]+"</option>");
        }
       return container; 
});
   return container; 
}


function popup()
{
  /**********************************************
   Laden des Pod 
   
   */
  ;
  (function ($) {

    // DOM Ready
    $(function () {

      // Binding a click event
      // From jQuery v.1.7.0 use .on() instead of .bind()
      $('.poup-button').on('click', function (e) {

        // Prevents the default action to be triggered. 
        e.preventDefault();
        var id = $(this).text();
        console.log(id);
        // Triggering bPopup when click event is fired
        $('#element_to_pop_up').bPopup();

      });

    });

  })(jQuery);

}
//*************************************
// Termin verwaltung
//*************************************
/*
function load_event()
{
  var persons     = $("#persons").val();
  var title       = $("#Title").val();
  var clock       = $("#Uhrzeit").val();
  var description = $("#Beschreibung").val();
  var priority    =$("input[name='prority']:checked").val();
  var event       = [priority,title,clock,description,persons];
  container = event;
  generate_event();
}


function generate_event()
{
  $("#dragged-area").append("<div class='draggable'>"+container[1]+"</div>"); 
  container.each(function( index ) {
  $( ".draggable" ).draggable({ revert: "invalid" });
})}*/

function mouseover_leave(id, effekt,background,hover)
{
  $("#" + id).on(effekt, function () {
   
    if (effekt === "mouseover")
    {
    $("#" + id).css({"background-color": background});
  
    } else
    {
     $("#"+id).css({"background-color":hover});

    }
  })
}

function getmonth(date)
{

  var month = date.getMonth();
  year = date.getFullYear();
  extmonth = month;
  extyear = year;
  if (month === 0)
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

  if (n === 0) {
    n = 6;
  } else
  {
    n--;
  }
  var days2 = days;
  days2 = days2 - n;
  var weekday = new Array(7);

  for (var count = 0; count < n; count++)
  {
    weekday[count] = days2 + count + 1;
  }
  return weekday;
}


function monatsTage(monat, jahr) {
  if (monat !== 2) {
    if (monat === 9 ||
            monat === 4 ||
            monat === 6 ||
            monat === 11) {
      return 30;
    } else {
      return 31;
    }
  } else {
    return (jahr % 4) === "" && (jahr % 100) !== "" ? 29 : 28;
  }
}
