// ====== String Operations ======
function reverseString() {
    let str = document.getElementById("inputString").value;
    document.getElementById("stringResult").innerText = str.split("").reverse().join("");
}

function extractChars() {
    let str = document.getElementById("inputString").value;
    document.getElementById("stringResult").innerText = str.slice(2,4);
}

function findLongestWord() {
    let str = document.getElementById("inputString").value;
    let words = str.split(" ");
    let longest = words.reduce((a,b) => a.length > b.length ? a : b, "");
    document.getElementById("stringResult").innerText = longest;
}

function convertToLower() {
    let str = document.getElementById("inputString").value;
    document.getElementById("stringResult").innerText = str.toLowerCase();
}

function convertToUpper() {
    let str = document.getElementById("inputString").value;
    document.getElementById("stringResult").innerText = str.toUpperCase();
}

function detectWordsSpecials() {
    let str = document.getElementById("inputString").value;
    let words = str.split(/\s+/).length;
    let specials = (str.match(/[^a-zA-Z0-9\s]/g) || []).length;
    document.getElementById("stringResult").innerText = `Words: ${words}, Special symbols: ${specials}`;
}

// ====== Array Operations ======
let numArray = [];

function createArray() {
    let str = document.getElementById("arrayInput").value;
    numArray = str.split(",").map(Number);
    document.getElementById("arrayResult").innerText = `Array: [${numArray}]`;
}

function displayThird() {
    document.getElementById("arrayResult").innerText = `3rd Element: ${numArray[2]}`;
}

function displayLast() {
    document.getElementById("arrayResult").innerText = `Last Element: ${numArray[numArray.length-1]}`;
}

function findTenthChar() {
    let str = document.getElementById("arrayInput").value;
    document.getElementById("arrayResult").innerText = `10th Character: ${str[9] || "N/A"}`;
}

function doubleArray() {
    numArray = numArray.map(x => x*2);
    document.getElementById("arrayResult").innerText = `Doubled Array: [${numArray}]`;
}

function deleteElements() {
    numArray.splice(0,2);
    document.getElementById("arrayResult").innerText = `After Deletion: [${numArray}]`;
}

// ====== Function Operations ======
function addNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("funcResult").innerText = `Sum: ${n1+n2}`;
}

function multiplyNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("funcResult").innerText = `Product: ${n1*n2}`;
}

function divideNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    if(n2 === 0) {
        document.getElementById("funcResult").innerText = "Cannot divide by zero!";
    } else {
        document.getElementById("funcResult").innerText = `Division: ${n1/n2}`;
    }
}

function checkEvenOdd() {
    let n = Number(document.getElementById("checkEvenOdd").value);
    document.getElementById("funcResult").innerText = n%2 === 0 ? "Even" : "Odd";
}

// ====== Form Operations ======
function displayFormData() {
    let form = document.getElementById("personForm");
    let data = {};
    for(let element of form.elements) {
        if(element.name) data[element.name] = element.value;
    }
    document.getElementById("formResult").innerText = JSON.stringify(data, null, 2);
}

function formDataCount() {
    let form = document.getElementById("personForm");
    let count = 0;
    for(let element of form.elements) {
        if(element.value) count++;
    }
    document.getElementById("formResult").innerText = `Filled Fields: ${count}`;
}

// ====== Person Object ======
function createPerson() {
    let person = {
        name: "John Doe",
        age: 25,
        email: "john@example.com"
    };
    document.getElementById("personResult").innerText = JSON.stringify(person, null, 2);
}
