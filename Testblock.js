//Create a recursive function that reverses a string. For example, take "hello" and make it output "olleh"
function reverseString(word){
    if (word === ""){
        return word; //base case - designed to stop the function if no value is present
    }
    return reverseString
        (word.substring(1)) + word[0]; // Designed to take the letter in position 1 from the input string and places it in position 0 in the output
}

console.log(reverseString("test"));
console.log(reverseString("This is the worst idea")); //these two strings should show as reversed in the console log


// Object Oriented Programming Example
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.isActive = true;
    }

    updateEmail(newEmail){
        this.email = newEmail;
    }

    deactivate(){
        this.isActive = false;
    }
}

//Create a new user

const user1 = new User("John Doe", "john.doe@example.com");
console.log(user1.name); //Output John Doe

user1.updateEmail("john.new@example.com");
console.log(user1.email); // Output john.new@example.com

user1.deactivate();
console.log(user1.isActive) //Output should show false
