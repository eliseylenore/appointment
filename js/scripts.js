$(document).ready(function(){
  $(".blanks form").submit(function(event){

    event.preventDefault();

alert("hey");
    var nameInput = $("input#name").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

alert("hey");
    $(".name").text(nameInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#confirmation").show();
alert("hey");

  });
});
