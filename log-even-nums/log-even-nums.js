// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {

    // if the given number is odd -- set the final number to one less than it's given value
    let evenNumEnd = 0;
    if (num/2 > Math.floor(num/2)) {
        evenNumEnd = num - 1;
    } else {
        evenNumEnd = num;
    }

    for(var i = 0; i <= evenNumEnd; i += 2) {
        console.log (i);
    };
};

// CAN BE WRITTEN DRYer
// var logEvenNums = function(num) {
//     for(var i = 0; i <= num; i += 2) {
//         console.log (i);
//     };
// };