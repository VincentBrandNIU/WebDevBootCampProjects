var toDo = new Array();
window.setTimeout(function() {
  var input = prompt("Enter what you would like to do");
  while (input !== "quit") {
    if (input === "new") {
      toDo.push(prompt("Enter a new thing to the list"));
    } else if (input === "view") {
      toDo.forEach(function(todo, i) {
        console.log(i + ": " + todo);
      });
      console.log("*********");
    } else if (input === "delete") {
      toDo.splice(toDo.indexOf(prompt("Enter what you want to delete")), 1);
    }
    input = prompt("Enter what you would like to do");
  }
}, 500);
