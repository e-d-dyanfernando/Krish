// Learn_with_Krish

// Dyan Fernando 
// ddyanfdo@gmail.com


// Question

// Write a NodeJS program to find a missing number of given sequence. 
// Sequence start number is random but it is guaranteed n+1 sequence. 
// e.g.: if range is 10 numbers then array would contain 9 elements as one is missing.
// i.e. : numberSeq= [21,25,29,28,22,24,27,26,30] here missing one is 23. 
// Trick is if start number or end number is missing how to figure that. make sure they captured that.

// Check your program with given example data set. 
// Also test what happened if first number is missing and also test what happens if last number is missing. 
// Your program should detect all three cases correctly.


// Answer

var numberSeq = [21,25,29,28,22,24,27,26,30];
//numberSeq.sort();

function bubbleSort(numberSeq){
    var length = numberSeq.length

    for(var i = 0; i < length; i++){
        for(var j = 0; j < length; j++){
            if (numberSeq[j] > numberSeq[j + 1]){
                var temp = numberSeq[j]
                numberSeq[j] = numberSeq [j + 1]
                numberSeq[j + 1] = temp
            }
        }
        console.log('iteration '+(i+1)+'' , numberSeq)
    }
    return numberSeq
}
numberSeq = bubbleSort(numberSeq);

// Sorting numbers are itterating through the array
for(var i =0; i<(numberSeq.length-1);i++){
    // After adding the vaule to the current index checking weather its equal to the next index value 
    if( numberSeq[i]+1 != numberSeq[i+1] ){
        console.log("\nLost Number: ",numberSeq[i]+1);
    }
}