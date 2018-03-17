const StellarSdk = require('stellar-sdk')
var pair = StellarSdk.Keypair.random()

console.log(pair.secret())
console.log(pair.publicKey())