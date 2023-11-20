let Mixstring = [ 'P8drXzB3QG', 'KrJwIJFkbl8', '8B3TdYAU9dQ', 'Ofk3FumfBO', 'rEO-ks' ];
let secretOne = "88";
let secretTwo = "SDj9S";

let secret = secretTwo.split("").reverse().join("");

stepone = Mixstring.join("").split("").reverse().join("");
steptwo = stepone.split(secretOne);

stepthree = steptwo[0] + steptwo[1];
key = stepthree + secret;
