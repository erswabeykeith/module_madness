var randomNumber = require('./random_num');
var randomDollarFunct = require('./usd');

module.exports.first = randomDollarFunct(randomNumber);
module.exports.second = "Account balance: \n";
