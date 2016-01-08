$(document).ready(function () {


    var clock = new Date();

    var millis = clock.getMilliseconds();
    var sec = clock.getSeconds();
    var min = clock.getMinutes();

   setInterval( function() {

       var clock = new Date();

       var millis = clock.getMilliseconds();
       var sec = clock.getSeconds();
       var min = clock.getMinutes();



       $("#milliseconds").text(millis);
        $("#seconds").text(sec);
        $("#minutes").text(min);
        $("#hours").text(clock.getHours());


       }, 50);

});