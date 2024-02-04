function removeChar(arr, char) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== char) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


var arr = ['a', 'b', 'c', 'a', 'd', 'e'];
var char = 'a';

var newArray = removeChar(arr, char);
console.log("Array after removing", char + ":", newArray);
