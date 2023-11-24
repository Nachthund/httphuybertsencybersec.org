import CryptoJS from 'crypto-js';
function decode(data) {
    let decoded = "";
    let counter = 0;
    for (let i = 0; i < data.length; i += 4) {
        let bitString = "";
        for (let j = i; j < i + 4; j++) {
            let byte = data[j].charCodeAt(0);
            let bits = byte.toString(2).padStart(8, '0');
            bitString += bits.slice(bits.length - 2, bits.length);
        }
        decoded += String.fromCharCode(parseInt(bitString, 2));
        counter++;
    }
    return decoded;
}

function decrypt(data, password) {
    let key = CryptoJS.MD5(password);
    let decrypted = CryptoJS.AES.decrypt(data, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
}
let fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
        let encodedData = event.target.result;
        let decodedData = decode(encodedData);
        let decryptedMessage = decrypt(decodedData, 'password');
        console.log('Decrypted message:', decryptedMessage);
    };
    reader.readAsDataURL(file);
});
