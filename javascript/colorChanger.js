var buttonclick = document.querySelector("button");
var body = document.querySelector("body");
//var isChanges = false;
// if (isChanges) {
// }
// buttonclick.addEventListener("click", function() {
//   if (isChanges) {
//     body.style.background = "white";
//   } else {
//     body.style.background = "purple";
//   }
//   isChanges = !isChanges;
// });

buttonclick.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
