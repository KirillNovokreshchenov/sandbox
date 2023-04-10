let username = "JackOfAllTrades";
let userCheck = /^[^\d]([a-zA-Z]+|\d\d)\d*$/; // Change this line
let result = userCheck.test(username);