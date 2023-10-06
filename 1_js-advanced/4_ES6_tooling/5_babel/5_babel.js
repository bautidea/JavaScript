// ! This file is mearly for demostration, its not the workflow we use when building real applications.
// We use the command prompt to initialize a node project in this folder, by running
// * npm init --yes
// This will create a file in the folder called 'package.json' which is a identification
// for our application.

// After this we are ready to install Babel. There are three packages that we need to install
// We are going to install these packages as development dependencies, we do that by running the
// '--save-dev' statement.
// * npm i babel-cli --> Babel command line interface
// We are going to install a custom version so --> npm i babel-cli@6.26.0 --save-dev
// We run Babel from Command Line (CLI) and we give the name of our JS file an it will conver or compile that JS code.

// * npm i babel-core --> Basically is the core of babel where all the logic for transpiring code is implemented.
// The version we are going to use --> npm i babel-core@6.26.0 --save-dev

// * npn i babel-preset-env@1.6.1 --> In Babel we have a pluging for every new JS feature starting from ES6.
// Version --> npm i babel-preset-env@1.6.1 --save-dev
// If in the application you want to use only only two of new features (arrow function, let, and ES6 features)
// we can only install only those two plugins. But in order to have more flexibility we can install this 'babel-preset'
// that combines all the plugins, it understand all new features in JS.

// When executing this code it will generate, a file called 'package-lock.json' which is used internally by npm, and
// one folder 'node_modules', which stores all installed packages. Now lets write some code.

const x = 1;

// Now we use babel to convert this to code that all browsers can understand.
// We need to go to package.json, in the script setion, we replace what we have for test ("test": "echo \"Error: no test specified\" && exit 1")
// with a command that will run in terminal
// * --> "babel" : "babel --presets env 5_babel.js -o build/index.js"
// --presets env, is the preset we are going to use, env in this case
// After that is the name of the source file '5_babel.js'
// -o, is the output, this is going to be in a folder 'build/index.js'

// We can run the script that we defined using npm --> npm run babel
// will execute the command defined in package.js

// If we go to index.js we will see that 'const' was replaced by 'var' because in ES6 there isnt a 'const' keyword.
// This is the basic of Babel, one problem with this set up is that in package.json we are compiling 'index.js'
// if the application have more files we dont want to repeat this for every file.
// * Thats when we use Webpack. With it we are going to get all our Js files and put them in a boundle.
// ! However before puting these file in the bundle, we are goign to run each through Babel.
