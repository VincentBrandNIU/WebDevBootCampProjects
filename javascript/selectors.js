var tag = document.getElementById("highlight"); //Gets element with ID highlight

var tags = document.getElementsByClassName("bolded"); //Get elements by Tag Name returns all bolded class
console.log(tags[0]);

var newTags = document.getElementsByTagName("li"); //Get elemnts by Tag Name returns all li's

var newTags2 = document.querySelector("#highlight"); //Returns first match of CSS-style selector of id highlight

var newTags3 = document.querySelectorAll(".bolded"); //returns all matches of CSS-style selector of class bolded

var p1 = document.getElementById("first");
var p2 = document.querySelector("#first");
var p3 = document.querySelector(".special");
var p4 = document.getElementsByClassName("special")[0];
