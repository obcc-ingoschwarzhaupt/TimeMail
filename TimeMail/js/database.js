(function(global) {
    var app = global.app = global.app || {};
    
    app.Database = (function () {
    var localeVar;
        
    var getData = function (date)
    {
       var container = false;
       
       /*
       obj = {"file": obj, "id": id};
       json = JSON.stringify(obj);*/
       postdata = {"date": date};
       
       $container ="false";
       
      $.post("php/getdata.php", { data: postdata},  function (data) {

      container = jQuery.parseJSON(data);
  
      return container;
    });
    return container;
  }
        
        return {
           getData:getData

        };
        
    }());
})(window);