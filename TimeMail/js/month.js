(function (global) {
  var app = global.app = global.app || {};

  app.Month = (function () {
    /********************************/
// Super Globale Variablen
//********************************
    var extmonth = 22;
    var extyear = 000;
    var months = ["Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    monthtimestamp = "";
var currentmonth = "black";
var oldmonth = "#F7FCFF";


    var get_month = function ()
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
          
          monthtimestamp = selectedDate;
          $("#monthday").text(months[extmonth]);
          $("#monthyear").text(extyear);
          loadded_day = load_days(days);
          print_days(loadded_day);
          app.eventManager.loadEventsMonth(selectedDate);
        }
      });
    }

    var getmonth = function (date)
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
    function print_days(days)
    {
      for (var x = 0; x < days.length; x++)
      {
        var d = x + 1;
   
        $("#" + d).html("<div class='num'>"+days[x]+"</div><hr><div class='droppable'><ul class='sortable'></ul></div>");
      }
      a= $( "#" + 1 ).find( ".num" ).html();
      if (a > "20") {

        var x = 1;
        var counter = 1;
        do
        {
          b = x + 1;
          a= $( "#" + x ).find( ".num" ).html();
          b= $( "#" + b ).find( ".num" ).html();
           $("#" + counter+".num").html();
           
           
           app.eventManager.dropped();


          $("#" + counter).css("color", oldmonth);
          counter++;

          x++;
        } while (a < b)

        var found = false;
      
        for (var a = counter; a < days.length; a++)
        {

          c = $( "#" + x ).find( ".num" ).html();
          b = a + 1;
          e = parseInt($( "#" + b ).find( ".num" ).html());
   
          if (c < e && found === false)
          {
           $( "#" + a ).find( ".num" ).css("color", currentmonth);
           $( "#" + b ).find( ".num" ).css("color", currentmonth);
          } else
          {
            var h = a;
            h++;
            found = true;
            $("#" + h).css("color", oldmonth);
          }
        }

      } else
      {


        var fo = false;
        for (var a = 1; a < 42; a++)
        {

          var b = a + 1;
          e = parseInt($( "#" + a ).find( ".num" ).html());
          d = parseInt($( "#" + b ).find( ".num" ).html());

          if (e < d && fo == false)
          {
            $( "#" + a ).find( ".num" ).css("color", currentmonth);
          } else
          {
            var h = a;
            h++;
            fo = true;
            $( "#" + h ).find( ".num" ).css("color", oldmonth);
          }
        }
      }
    }
    return {
      getmonth: get_month,
      getmonthday: getmonthday,
      monatsTage: monatsTage
    };

  }());
})(window);