/*
var secret = "007";

function getSecret() {
    var secret = "008";

    function getValue() {
        return secret;
    }
    return getValue;
}
var getValueFun = getSecret();
console.log(getValueFun());



function counter() {
    var count = 0;
    count = count + 1;
    return count;
}
console.log(counter());
console.log(counter());
console.log(counter());


var count1 = 0;
function counter1() {
    count1 = count1 + 1;
    return count1;
}
console.log(counter1());
console.log(counter1());
console.log(counter1());
*/

// with closure

function makeCounter() {
    var count = 0;
    
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}
var a = makeCounter();
console.log(a());
console.log(a());
console.log(a());

function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    };
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));



function makeCountera() {
    var count = 0;
    return {
        increment: function() {
            count++;
            return count;
        }
    };
}
var counter = makeCountera();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());



function handler() {
    alert(doneMessage);
}

function makeTimer(doneMessage, n) {
    setTimeout(handler, n);
}
makeTimer("Cookies are done!", 1000);



function setTimer(doneMessage, n) {
    setTimeout(function() {
        alert(doneMessage);
    }, n);
    doneMessage = "OUCH!";
}
setTimer("Cookies are done!", 1000);