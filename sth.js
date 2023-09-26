let Mixstring = [ 'ckqkv6MPkL', '7n4fAJFkbl8', '8B3TMOkSbRZ', 'h486Co98LX', 'MlB-ks' ];
let secretOne = "88";
let secretTwo = "XYpUC";

let secret = secretTwo.split("").reverse().join("");

stepone = Mixstring.join("").split("").reverse().join("");
steptwo = stepone.split(secretOne);

stepthree = steptwo[0] + steptwo[1];
key = stepthree + secret;

