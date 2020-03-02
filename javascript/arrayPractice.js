var friends = ["Charlie", "Liz", "Vincent", "Celia"];

console.log(friends);
console.log(friends[3]);
console.log(friends.pop());
console.log(friends);
friends.push("Celia");
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift("Dooper");
console.log(friends);
friends[4] = "Red";
console.log(friends);
console.log(friends.length);

var friends2 = new Array(); //uncommon call out more Java-esk
friends2.push("Fun", "...");
console.log(friends2);
console.log(friends2.indexOf("Boobs"));
