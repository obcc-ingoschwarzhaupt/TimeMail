
(function (global) {
  var app = global.app = global.app || {};

  app.Calendar = (function () {   

   background = "red";
   hover      = "#E8E8E8";
    var loadCalender = function ()
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
      
      var day = 0;
      for(var b=0;b< 6;b++)
      {
        $("#kalender").append("<div class='line' id=l"+b+">");
        for(var a=0;a< 7;a++)
        { day++;
       $("#l"+b).append(" <div class='ktage'  id='"+day+"'></div>");
        }
        $("#kalender").append("</div>");
      }
      
      
      $("#kalender").append("<div class='line'><div class='ktage' name='kalender' id='1'>1</div><div class='ktage' name='kalender'  id='2'>2<hr> <p><ul id='sortable'><li><h3 class='name' name='drag'>1</h3></li><li><h3 class='name' name='drag' >2</h3></li><li><h3 class='name' name='drag' >2</h3></li></ul></p></div><div class='ktage' name='kalender' id='3'>3</div><div class='ktage' name='kalender' id='4'>4</div><div class='ktage' name='kalender' id='5'>5</div><div class='ktage' name='kalender' id='6'>6</div><div class='ktage' name='kalender' id='7'>7</div></div>");



      $("#menu").append(" <div id='InlineMenu'></div>");
      $("#menu").append(" <div id='dragged-area'></div>");
      $("#menu").append("<button class='poup-button'>Termin eintragen</button>");
      $("#menu").append("<div id='element_to_pop_up'></div>");


      $("#sortable").sortable();
      $("#sortable").disableSelection();
      $("drag").draggable({revert: "invalid"});

      //  $( "#element_to_pop_up" ).load( "" );



      $("#element_to_pop_up").load("popups/newevent.html", function () {

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
      for (var a = 0; a < 42; a++)
      {
        mouseover_leave(a, "mouseover", background, hover);
        mouseover_leave(a, "mouseleave", background, hover);

      }
      personcontainer = load_person();

      popup();

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

    function mouseover_leave(id, effekt, background, hover)
    {
      $("#" + id).on(effekt, function () {

        if (effekt === "mouseover")
        {
          $("#" + id).css({"background-color": background});

        } else
        {
          $("#" + id).css({"background-color": hover});

        }
      })
    }

    function load_person()
    {
      var container = false;

      $.post("php/person.php", function (data) {

        container = jQuery.parseJSON(data);

        for (var a = 0; a < container.length; a++)
        {
          $("#persons").append(" <option value='" + container[a][0] + "'>" + container[a][2] + " " + container[a][1] + "</option>");
        }
        return container;
      });
      return container;
    }

    return {
      loadCalender: loadCalender
    };

  }());
})(window);


/*
function generatedays(days)
{

  days.forEach(generatedays);

}
*/




