<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<link href="css/main.css" type="text/css" rel="stylesheet">

<script src="js/sugar.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="jquery-ui/jquery-ui.min.js"></script>
<script src="jquery-ui-month/MonthPicker.min.js"></script>


  <style>
  #sortable { list-style-type: none; margin: 0; padding: 0; width: 60%; }
  #sortable li { margin: 0 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1.4em; height: 18px; }
  #sortable li span { position: absolute; margin-left: -1.3em; }
  </style>
  <script>
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
  </script>


<title>jQuery</title>
</head>
<body>
  <div id="content"></div>
  <script src="js/popup.js"></script>
<script data-main="scripts/main" src="js/database.js"></script>
<script data-main="scripts/main" src="js/calendar.js"></script>
<script data-main="scripts/main" src="js/month.js"></script>
<script data-main="scripts/main" src="js/js/eventmanager.js"></script>

<script src="js/main.js"></script>

<script src="js/apointment.js"></script>
</body>
</html>	