const CryptoJS = require("crypto-js");
//encrypt
var str='This is plain text';
var cipherText = CryptoJS.AES.encrypt(str,'SecretKey@123');

//decrypt
var bytes = CryptoJS.AES.decrypt(cipherText.toString(),'SecretKey@123');
var plainText = bytes.toString(CryptoJS.enc.Utf8);
console.log('enc text: '+bytes);
console.log(plainText);


//OBJECT ENCRPTION
var data = [{id: 1}, {id: 2}]
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log('enc object: '+bytes)
console.log(decryptedData);

