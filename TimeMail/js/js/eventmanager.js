(function (global) {
  var app = global.app = global.app || {};

  app.eventManager = (function () {
    var eventid = 0;
    var loadEvent = function ()
    {
      var persons = $("#persons").val();
      var title = $("#Title").val();
      var clock = $("#Uhrzeit").val();
      var description = $("#Beschreibung").val();
      var priority = $("input[name='prority']:checked").val();
      // var event     = [title,description,priority,clock,persons];

      console.log(monthtimestamp);
      var obj = {title: title, description: description, persons: persons, priority: priority, clock: clock};
      sessionStorage.setItem("event" + eventid, JSON.stringify(obj));

      generateNewEvent(eventid);

      eventid++;
    }

    var getid = function (id)
    {

      $.post("php/person.php", function (data) {

        container = jQuery.parseJSON(data);

        for (var a = 0; a < container.length; a++)
        {
          $("#persons").append(" <option value='" + container[a][0] + "'>" + container[a][2] + " " + container[a][1] + "</option>");
        }
        return container;
      });

    }

    var get_events = function (date)
    {
      year = date.setDate(2);
      date = date.getDate();
      console.log(date);
    }

    var getDatabase = function (date) {
      app.Database.getEvents(date).then(function (data) {
        json = JSON.parse(data);        
        $.each(json, function (index, obj) {
          sessionStorage.setItem("event" + obj[0], JSON.stringify(obj));
          generateExistingEvent("event"+obj[0],obj);
        });
      }, function (error) {
        console.log(error);
      });
    }
    var loadEventsMonth = function (date)
    {
      getDatabase(date);
   

    }
   var generateExistingEvent = function (id,event)
    {
console.log(event);
    
      $("#dragged-area").append("<div class='draggable' id='event" + id + "'>" + event[1] + "</div>");
      $.each(event, function (index) {
        $(".draggable").draggable({revert: "invalid"});
      })
    }

    
    var generateNewEvent = function (id)
    {

      var json = sessionStorage.getItem("event" + id);
      event = jQuery.parseJSON(json);
      console.log(event);
      $("#dragged-area").append("<div class='draggable' id='event" + id + "'>" + event.title + "</div>");
      $.each(event, function (index) {
        $(".draggable").draggable({revert: "invalid"});
      })
    }


    var dropped = function ()
    {
      $(".droppable").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
          $(this)
                  .addClass("ui-state-highlight")
                  .find("ul")
                  .html("<li id=" + $('.draggable').attr('id') + ">" + $(".draggable").html() + "</li>");




          $(".ktage").on("mousedown", function () {
            // if()
            console.log($(this).attr('id'));

          })


          convertDivtoLi();
        },
        over: function (event, ui) {

          $(this).css({"background-color": hover});
        }
      })
    }
    $("#sortable").sortable();

    var convertDivtoLi = function ()
    {
      var $ul = $("<ul>");
      $(".pagination").children().each(function ()
      {
        var $li = $("<li>").append($(this));
        $ul.append($li);
      });


    }






    return {
      loadEvent: loadEvent,
      dropped: dropped,
      get_events: get_events,
      loadEventsMonth: loadEventsMonth
    };

  }());
})(window);

