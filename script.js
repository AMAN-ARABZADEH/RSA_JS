// We Use "use strict" to enable strict mode, which helps catch common programming errors
"use strict";

// Execute the code when the DOM content is fully loaded and ready
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the elements
    const keySizeSelect = document.getElementById("keySize");
    // For generating public key
    const publicKeyTextArea = document.getElementById("publicKey");
    // For private key to decrypt the text.
    const privateKeyTextArea = document.getElementById("privateKey");
    // Selecting the elements for buttons, for event listeners
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");

    // Generate RSA Key Pair
    // This function generates a new RSA key pair based on the selected key size
    // Read more: https://github.com/travist/jsencrypt/blob/master/src/JSEncrypt.ts
    const generateKeyPair = (keySize) => {
        // Create a new JSEncrypt instance with the specified key size from options
        const key = new JSEncrypt( keySize );
        // Get the public key and set it to the public key textarea show for users
        publicKeyTextArea.value = key.getPublicKey();
        // same here, showing private key for the user 
        privateKeyTextArea.value = key.getPrivateKey();
    };

    // Listen for changes in the key size selection
    // When the user selects a different key size, regenerate the key pair accordingly
    // for each selections
    keySizeSelect.addEventListener("change", () => {
        // Parse the selected key size to an integer, converts value to integer
        const selectedKeySize = parseInt(keySizeSelect.value);
        // Generate a new key pair with the selected key size
        generateKeyPair(selectedKeySize);
    });

    // Listen for a click on the "Encrypt" button
    encryptButton.addEventListener("click", () => {
        // Create a new JSEncrypt instance for encryption
        const publicKey = new JSEncrypt();
        // Set the public key from the public key textarea
        publicKey.setPublicKey(publicKeyTextArea.value);
        // Get the plaintext message from the input
        const plaintext = document.getElementById("plaintext-encrypt").value;
        // Encrypt the message using the public key
        const encrypted = publicKey.encrypt(plaintext);
        // Display the encrypted message in the result textarea
        document.getElementById("encrypted-result").value = encrypted;
    });

    // Listen for a click on the "Decrypt" button to decrypt the message
    decryptButton.addEventListener("click", () => {
        // Create a new JSEncrypt instance for decryption
        const privateKey = new JSEncrypt();
        // Set the private key from the private key textarea
        privateKey.setPrivateKey(privateKeyTextArea.value);

        // Get the ciphertext message from the input
        const ciphertext = document.getElementById("ciphertext-decrypt").value;
        // Decrypt the message using the private key
        const decrypted = privateKey.decrypt(ciphertext);
        // Display the decrypted message in the result textarea
        document.getElementById("decrypted-result").value = decrypted;
    });

    // Generate key pair with initial selected key size
    const initialSelectedKeySize = parseInt(keySizeSelect.value);
    // Generate the initial key pair
    generateKeyPair(initialSelectedKeySize);
});
