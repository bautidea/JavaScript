/*  
    In programming we use variables to store data temporarily, in the computers memory.
    Before ES6, variables were declared by using the "var" keyword, but there are issues 
        with that, as we will be discover later.
    So, going forward from ES6, the best practice is to use the "let" variable to 
        declare a variable.

    By default the variables defined in JS, their values is undefined, to initialize this
        variable, we need to assign a value.

    As a general rule variables names cannot contain a space of hyphen (-), we can use:
        camel notation - firstName - the first letter of the first word should be 
            lowercase, and the first letter of every word after should be Upercase.
    Also variables are case-sensitive, so 'firstName' variable would not have the same 
        assignation than a variable named 'FirstName'.
*/
let my_name = "Bauti";
console.log(my_name);

// We can declare multiple variables like this.
let firstName = "Bauti",
  lastName = "De Angelis";

// But the best practice is to declare variables in a single line.
let myFirstName = "Bauti";
let myLastName = "De Angelis";
