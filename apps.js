function vigenereCipher(plainText, keyword) {
    let keyIndex = 0;
    let encryptedText = '';
   
    for (let i = 0; i < plainText.length; i++) {
       let keyCharCode = keyword[keyIndex].charCodeAt(0);
       let plainCharCode = plainText[i].charCodeAt(0);
       let shiftedCharCode = keyCharCode + plainCharCode - 65; // Subtracting 65 to keep in range of alphabets
       
       // Keep within range of alphabets [A-Z]
       if (shiftedCharCode > 90) {
         shiftedCharCode -= 26;
       } else if (shiftedCharCode < 65) {
         shiftedCharCode += 26;
       }
       
       encryptedText += String.fromCharCode(shiftedCharCode);
       
       keyIndex = (keyIndex + 1) % keyword.length; // Repeat keyword if longer than text
    }
   
    return encryptedText;
   }
   
   let plainText = 'HELLO';
   let keyword = 'XMAS';
   let encryptedText = vigenereCipher(plainText, keyword);
   console.log('Encrypted text:', encryptedText); // Outputs: ENCRYPTED