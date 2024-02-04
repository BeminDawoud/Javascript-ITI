var userInput;

function showDate() {
    userInput = prompt("Enter the date in the format DD-MM-YYYY (e.g., 22-01-1999):");
    
    if (isValidDate()){
  var day = parseInt(userInput.substring(0,2))
  var month = parseInt(userInput.substring(3,5)) - 1
  var year = parseInt(userInput.substring(6,10))
  
  var date = new Date(year, month, day)
  
  alert("the date entered is: " + date)
  
}
else {
  alert("Wrong Date Format, Try again!")
}
}




function isValidDate() {
    if (userInput.length !== 10) {
        return false;
    }

    if (userInput.charAt(2) !== '-' || userInput.charAt(5) !== '-') {
        return false;
    }

    for (var i = 0; i < 10; i++) {
        if (i === 2 || i === 5) {
            continue;
        }

        if (isNaN(parseInt(userInput[i], 10))) {
            return false;
        }
    }

    return true;
}
