// Mono-alphabetic Cipher
function monAlphEncrypt() {
    const input = document.getElementById('monAlphInput').value;
    const output = document.getElementById('monAlphOutput');
    output.value = monAlphabeticCipher(input, 1);
}

function monAlphDecrypt() {
    const input = document.getElementById('monAlphInput').value;
    const output = document.getElementById('monAlphOutput');
    output.value = monAlphabeticCipher(input, -1);
}

function monAlphabeticCipher(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (char.match(/[A-Za-z]/)) {
            const ascii = char.charCodeAt(0);
            const shiftedAscii = ascii + (shift > 0 ? 3 : -3);
            result += String.fromCharCode(shiftedAscii % 26 + (ascii >= 97 ? 97 : 65));
        } else {
            result += char;
        }
    }
    return result;
}

// Poly-alphabetic Cipher
function polyAlphEncrypt() {
    const input = document.getElementById('polyAlphInput').value;
    const output = document.getElementById('polyAlphOutput');
    output.value = polyAlphabeticCipher(input, '123');
}

function polyAlphDecrypt() {
    const input = document.getElementById('polyAlphInput').value;
    const output = document.getElementById('polyAlphOutput');
    output.value = polyAlphabeticCipher(input, '321');
}

function polyAlphabeticCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (char.match(/[A-Za-z]/)) {
            const ascii = char.charCodeAt(0);
            const shift = key.charCodeAt(i % key.length) - 48;
            const shiftedAscii = ascii + (shift > 0 ? shift : -shift);
            result += String.fromCharCode(shiftedAscii % 26 + (ascii >= 97 ? 97 : 65));
        } else {
            result += char;
        }
    }
    return result;
}