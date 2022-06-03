// Learn_with_Krish

// Dyan Fernando 
// ddyanfdo@gmail.com


// Question

// Write a NodeJS program to find a missing number of given sequence. 
// Sequence start number is random but it is guaranteed n+1 sequence. 
// e.g.: if range is 10 numbers then array would contain 9 elements as one is missing.
// i.e. : numberSeq= [21,25,29,28,22,24,27,26,30] here missing one is 23. 
// Trick is if start number or end number is missing how to figure that. make sure they captured that.


// Answer

const numberSeq = [21,25,29,28,22,24,27,26,30];
//numberSeq.sort();

function bubbleSort(numberSeq){
    const length = numberSeq.length

    for(const i = 0; i < length; i++){
        for(const j = 0; j < length; j++){
            if (numberSeq[j] > numberSeq[j + 1]){
                const temp = numberSeq[j]
                numberSeq[j] = numberSeq [j + 1]
                numberSeq[j + 1] = temp
            }
        }
        console.log('iteration ${i + 1}' , numberSeq)
    }
    return numberSeq
}
console.log(bubbleSort(numberSeq));