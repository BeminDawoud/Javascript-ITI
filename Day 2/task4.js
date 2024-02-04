function countTimes(arr, num) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }

    return count;
}


var arr = [1, 2, 3, 4, 2, 5, 2, 6];
var num = 2;

var result = countTimes(arr, num);
document.write("<h1> Number "+ num + " occurs " + result + " times in the array. </h1>");