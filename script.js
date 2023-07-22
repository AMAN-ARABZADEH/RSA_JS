"use strict"; // Recommended to use strict mode, it catches common programming errors

/*
    <!--
        Autor: Aman Arabzadeh
        Date: 2023-07-22
        Was inspired by https://travistidwell.com/jsencrypt/demo/
    -->

*/

document.addEventListener("DOMContentLoaded", () => {
  // Selectiong the elements from html file ids
  const keySizeSelect = document.getElementById("key_size_RSA");
  const publicKeyTextarea = document.getElementById("publicKey");
  const privateKeyTextarea = document.getElementById("privateKey");
  const encryptButton = document.getElementById("encryptButton");
  const decryptButton = document.getElementById("decryptButton");
  // For reseting values, if clicked reset button was pressed.
  const plaintextTextarea = document.getElementById("plaintext_encryption");
  const ciphertextTextarea = document.getElementById("ciphertext_decryption");
  const encryptedResultTextarea = document.getElementById("encrypted-result");
  const decryptedResultTextarea = document.getElementById("decrypted-result");
  const resetButton = document.getElementById("resetButton");

  // Function to reset the textarea values
  const resetTextareas = () => {
    plaintextTextarea.value = "";
    ciphertextTextarea.value = "";
    encryptedResultTextarea.value = "";
    decryptedResultTextarea.value = "";
  };

  //  for the reset button
  resetButton.addEventListener("click", resetTextareas);

  /*
    Everything is working/ showing on console
    console.log(keySizeSelect);
    console.log(publicKeyTextarea);
    console.log(privateKeyTextarea);
    console.log(encryptButton);
    console.log(decryptButton);
  */

  /*
    Generate RSA Key Pair
    This function generates a new RSA key pair based on the selected key size
    Read more: https://github.com/travist/jsencrypt/blob/master/src/JSEncrypt.ts
  */
  const generateKey = (keySize) => {
    try {
      // we need to create JSEncrypt to generate keys, for public and private
      const keys = new JSEncrypt(keySize);
      // For getting key values and showing on textarea for public and private keys
      publicKeyTextarea.value = keys.getPublicKey();
      privateKeyTextarea.value = keys.getPrivateKey();
    } catch (error) {
      console.error("Error generating key pair:", error);
    }
  };

  /*
    Listen for changes in the key size selection
    When the user selects a different key size, regenerate the key pair accordingly
    for each selections by using change mode in eventlistener.
  */
  keySizeSelect.addEventListener("change", () => {
    try {
      // we need to parse the selected value key size to an integer,
      const selectedKeySize = parseInt(keySizeSelect.value);
      generateKey(selectedKeySize); // Generates new key each new selection
    } catch (error) {
      console.error("Error selecting key size:", error);
    }
  });

  /*
    In this part we listen to encrypt button to encrypt the text.
  */
    encryptButton.addEventListener("click", () => {
        try {
          // First we need to create a new JSEncrypt instance for encryption
          const publicKey = new JSEncrypt();
          // We now set the public key from the publicKeyTextarea,
          // which was declared in generateKey function. Public keys are saved there.
          publicKey.setPublicKey(publicKeyTextarea.value);
      
          // We get the plaintext entered by the user in textarea
          const plainText = document.getElementById("plaintext_encryption").value;
      
          // Check if the plaintext is not empty before proceeding with encryption
          if (!plainText) {
            alert("Error encrypting message. Please enter your message.");
            console.error("Error: Please enter the plaintext to encrypt.");
            return;
          }
      
          // We encrypt the message using the public key
          const encrypt = publicKey.encrypt(plainText);
      
          // Now we display the encrypted message in the result textarea
          document.getElementById("encrypted-result").value = encrypt;
        } catch (error) {
          console.error("Error encrypting message:", error);
        }
      });
      

  /*
    Now we need to do the reverse to decrypt the message,
    It is the same process as the encryption, however, we use the decrypt function now.

    Check explanation in encryptButton event listener!!
  */
  decryptButton.addEventListener("click", () => {
    try {
      const privateKey = new JSEncrypt();
      privateKey.setPrivateKey(privateKeyTextarea.value);
      const ciphertext = document.getElementById("ciphertext_decryption").value;
      if (!ciphertext) {
        alert("Error decrypting message. Please enter your message first in previous step.");
        console.error("Error: Please enter the plaintext to encrypt.");
        return;
      }
      const decrypt = privateKey.decrypt(ciphertext);
      document.getElementById("decrypted-result").value = decrypt;
    } catch (error) {
      console.error("Error decrypting message:", error);
    }
  });

  // Now we are done, need to generate key size
  const keySizeInitial = parseInt(keySizeSelect.value);
  generateKey(keySizeInitial);
});
