var statusObject = new Object();
var Web3 = require('web3');

var web3Instance;

if (Web3.currentProvider !== undefined) {
    var web3Instance = new Web3(Web3.currentProvider);
    console.log(Web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3Instance = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log('localhost:8545');
}

if(web3Instance.isConnected()) {
    statusObject.message = "Ethereum Network is OK";
} else {
    statusObject.message = "Ethereum Network is Offline";
}

statusObject.isApplicationConnected = function () {
    return web3Instance.isConnected();
}

module.exports = statusObject;