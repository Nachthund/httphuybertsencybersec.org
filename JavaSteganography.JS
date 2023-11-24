import CryptoJS from 'crypto-js';
function encode(data, password) {
    let encodedData = '';
    for (let i = 0; i < data.length; i++) {
        let charCode = data.charCodeAt(i);
        let encodedChar = String.fromCharCode(charCode + i % 2);
        encodedData += encodedChar;
    }
    return encodedData;
}

function encrypt(data, password) {
    let key = CryptoJS.MD5(password);
    let encrypted = CryptoJS.AES.encrypt(data, key);
    return encrypted.toString();
}
let fileInput = document.getElementById('fileInput');
let secretMessageInput = document.getElementById('secretMessageInput');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
    let file = fileInput.files[0];
    let secretMessage = secretMessageInput.value;
    let reader = new FileReader();
    reader.onload = function(event) {
        let originalDataURL = event.target.result;
        let imageDataURL = encode(secretMessage, 'password');
        let encryptedMessage = encrypt(imageDataURL, 'password');
        console.log('Encrypted message:', encryptedMessage);
    };
    reader.readAsDataURL(file);
});
