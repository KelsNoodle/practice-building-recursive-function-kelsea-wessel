//Create a recursive function that reverses a string. For example, take "hello" and make it output "olleh"
function reverseString(word){
    if (word === ""){
        return word; //base case
    }
    return reverseString
        (word.substring(1)) + word[0];
}

console.log(reverseString("test"));
console.log(reverseString("This is the worst idea"));