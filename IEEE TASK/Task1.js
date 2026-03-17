
// Task 1
let text = prompt("Enter a sentence:");
let words = text.split(" ");
console.log("Number of words:", words.length);
let lettersWithoutSpaces = text.replaceAll(" ", "");
console.log("Letters without spaces:", lettersWithoutSpaces.length);
let mostWord = "";
let maxCount = 0;
for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
        if (words[i] === words[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostWord = words[i];
    }
}
console.log("Most repeated word:", mostWord);


// Task 2
let numbers = [5, 2, 8, 2, 3, 5, 1];
let uniqueNumbers = [...new Set(numbers)];
uniqueNumbers.sort((a, b) => a - b);
console.log("Sorted numbers:", uniqueNumbers);
let sum = 0;
for (let i = 0; i < uniqueNumbers.length; i++) {
    sum += uniqueNumbers[i];
}
console.log("Sum:", sum);


// Task 3
let numbers3 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let result3 = [];
for (let i = 0; i < numbers3.length; i++) {
    for (let j = 0; j < numbers3[i].length; j++) {
        result3.push(numbers3[i][j]);
    }
}
console.log("Final Array:", result3);
