//Task 1: Finding the average of positive numbers
function findAverage(array) {
    var sum = 0;
    var count = 0;
    var average = 0;

    for (var item of array) {
        if (item > 0 && item <= 100) {
            sum += item;  
            count++;     
            average = sum / count;
        }
    }
    return average;
}



//Task 2: Finding the maximum value of an array
function findMaxNumber(array) {
    var max = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 1 && array[i] <= 10000 && array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
