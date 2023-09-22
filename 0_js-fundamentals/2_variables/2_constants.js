let intrestRate = 0.3;

// To change a variable value.
intrestRate = 1;
console.log(intrestRate);

/*
    There are real world applications, in which we dont want the value
    of a variable to change, because otherwise it's going to create all
    kind of bugs in our application.
    In those scenarios instead of a variable, we use constants.
    As the name implies.
        The name of a variable can change.
        But the value of a constant cannto change.
*/
const intrestRateConstant = 0.3;
intrestRateConstant = 1;
console.log(intrestRateConstant); // This will throw an error.

/*  
    The best practice is to use constant when you dont need to reassign.
    Otherwise if you need to reassign a variable use let.
*/
