function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
var ranNum = randomNumber(100,1000000);

module.exports = ranNum;  //exports number
