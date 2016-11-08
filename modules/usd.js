
// function usdNum(usdNumber.toLocaleString('en-EN', { style: 'currency', currency: 'USD' }))


function usdNum(number){
  var usdRandomNum = number.toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
  return usdRandomNum;
}
module.exports = usdNum;  //exports function
