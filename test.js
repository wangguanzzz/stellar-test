const StellarSdk = require('stellar-sdk')
var pair = StellarSdk.Keypair.random()

//console.log(pair.secret())
//SA62M3IGLCBRCJSPWQAAECMETUYS4QOMK35DK27LZESQHSKSIZJXOJSC
//console.log(pair.publicKey())
const PUBLICKEY = 'GA7DOPRIFVDLPOJ65ZZT4EM55XH3YHXXIM2YQRIBNUCTQEKNYLAM3C5J'


//create account
/*
var request = require('request');
request.get({
  url: 'https://horizon-testnet.stellar.org/friendbot',
  qs: { addr: PUBLICKEY },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
  }
});
*/

var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount(PUBLICKEY.then(function(account) {
  console.log('Balances for account: ' + PUBLICKEY;
  account.balances.forEach(function(balance) {
    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
  });
});