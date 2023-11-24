// Get the button element by its ID
var button = document.getElementById("hashingbutton");

// Attach a click event handler to the button
button.addEventListener("click", function(event) {
    // This code will be executed when the button is clicked
    alert("Button clicked!");
});

function hashInput() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");

    // Implement hashing logic here
    var md5Hash = new jsSHA("SHA-512", "TEXT").update(input).getHash("HEX");
    var sha1Hash = new jsSHA("SHA-1", "TEXT").update(input).getHash("HEX");
    var sha256Hash = new jsSHA("SHA-256", "TEXT").update(input).getHash("HEX");

    output.innerHTML = "MD5: " + md5Hash + "<br>" +
                        "SHA-1: " + sha1Hash + "<br>" +
                        "SHA-256: " + sha256Hash;
}