(function (global) {
  var app = global.app = global.app || {};

  app.Database = (function () {
    var localeVar;

    var getEvents = function (date)
    {
      /*
       obj = {"file": obj, "id": id};
       json = JSON.stringify(obj);*/
      postdata = {"date": date};
      return $.ajax({
        method: "POST",
        url: "php/getdata.php",
        data: {data: postdata}
      }).promise();
    }

    return {
      getEvents: getEvents

    };

  }());
})(window);