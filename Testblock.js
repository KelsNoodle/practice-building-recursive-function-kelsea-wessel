//Create a recursive function that reverses a string. For example, take "hello" and make it output "olleh"
function reverseString(word){
    if (word === ""){
        return word; //base case - designed to stop the function if no value is present
    }
    return reverseString
        (word.substring(1)) + word[0]; // Designed to take the letter in position 1 from the input string and places it in position 0 in the output
}

console.log(reverseString("test"));
console.log(reverseString("This is the worst idea"));


