function encrypt() {
    var input = document.getElementById('input').value;
    var key = 'This is a key123';
    var encrypted = CryptoJS.AES.encrypt(input, key);
    document.getElementById('output').value = encrypted.toString();
}

function decrypt() {
    var encrypted = document.getElementById('output').value;
    var key = 'This is a key123';
    var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    document.getElementById('output').value = decrypted.toString(CryptoJS.enc.Utf8);
}