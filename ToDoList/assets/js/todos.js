//Check off markers
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "li span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add it to the UL
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});
$(".fa-plus-square").click(function() {
  $("input[type='text'").fadeToggle();
});
