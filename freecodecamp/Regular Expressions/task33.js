let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello.replace(/\s(?!W)/g, ''); // Change this line