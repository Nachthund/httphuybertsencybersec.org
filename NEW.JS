function getHash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
   }
   
   function checkFile(file, callback) {
    const reader = new FileReader();
   
    reader.onload = function (event) {
       const fileData = event.target.result;
       const fileHash = getHash(fileData);
   
       if (knownViruses.includes(fileHash)) {
         callback('The file is infected with a virus.');
       } else {
         callback('The file is safe.');
       }
    };
   
    reader.onerror = function (event) {
       callback('An error occurred while reading the file: ' + event.target.error);
    };
   
    reader.readAsArrayBuffer(file);
   }
   
   // Example usage:
   const fileInputt = document.getElementById('fileInputt');
   fileInputt.addEventListener('change', function (event) {
    const file = event.target.files[0];
    checkFile(file, function (result) {
       console.log(result);
    });
   });