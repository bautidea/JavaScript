// ! We are going to see the workflow that we should use on a day to day basis.
// https://www.freecodecamp.org/news/creating-a-production-ready-webpack-4-config-from-scratch/

// The first thing to do is to gather all modules in a folder named /src

// After that we init node locally (node init --yes)

// After that we installed yarn (running npm yarn install). Then by running the command
// *'npx yarn webpack'
// we created a folder name /dist. This folder contains a file named 'main.js' that contains our minified code.

// * NOTE: you have to exectute 'npx yarn webpack' every time you make a change in any file.

// After that we go to 'index.html' and in the script element we target the created file. After doing this we should already see
// the same output.

// After this we have to create a webpack.config.js file with the next code as minimum
// * const path = require('path')

// * module.exports = {
// *   entry: './src/index.js',
// *   output: {
// *     filename: 'main.js',
// *     path: path.resolve(__dirname, 'dist')
// *   }
// * }

// Right after this we need to install babel-loader compiler to trun ES6+ code into ES5 code. But this is out of the scope of this course.

// for creating a boundle with babel Its easier if we use the webpack-cli cofig.
// we initialize is running 'npx webpack-cli init' we answer a few questions and we get a new file with webpack configuration file.

// After this we create an npm script in our package.json file. 'build:webpack'.
// We run this by running 'npm run build'
// This will create the boundle again in the dist folder

// With the current set up everytime we make a change to our source file we have to go to terminal and build again.
// To change this we go to 'package/json' and we change
// * "build" : "webpack -w"
// We add the -w, thats short for watch. With this webpack is going to watch the files, and every time there is a change
// it will automatically regenerate our bundle.
// We execute once more npm run build, and webpack will watch the file.
