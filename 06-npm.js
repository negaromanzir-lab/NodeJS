// npm is node packege manager 
//manual approach (create package.json in the rooot,  create properties etc)
// npm init (step by step press enter to skip)
//npm init -y (everything default)

//then for this examples to run this app you ahve to install the packege first which is (lodash, bootstrap)
// is you want uninstall with the package name at the end of the packages.

//to install nodemon globaly to be access by any project in this pc by using this command on the terminal(sudo npm install -g nodemon)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
