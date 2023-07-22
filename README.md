# RSA Encryption with JSEncrypt

## Overview

This project demonstrates RSA encryption and decryption using the JSEncrypt library in a web application. The JSEncrypt library is a JavaScript library used for RSA encryption, decryption, and key generation. It allows us to generate an RSA key pair, encrypt a message using the public key, and decrypt a message using the private key. This powerful tool helps secure data communication and ensures the privacy of sensitive information.

## Dependencies

To implement RSA encryption and decryption, we utilize the JSEncrypt library. Instead of hosting the library on our server, we use a Content Delivery Network (CDN) to load the library. The JSEncrypt library is available on the CDN at:

[https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.3.2/jsencrypt.min.js](https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.3.2/jsencrypt.min.js)

## Usage

To use the application, follow these steps:

1. Clone this repository to your local machine or fork it on GitHub.
2. Open the `index.html` file in your web browser.
3. Choose the desired key size from the dropdown list.
4. Click the "Generate Key Pair" button to generate the RSA key pair.
5. The generated public key and private key will be displayed in their respective text areas.
6. Enter the plaintext message in the "Encrypt Message" section.
7. Click the "Encrypt" button to encrypt the message using the public key.
8. The encrypted message will be displayed in the "Encrypted Result" text area.
9. Enter the ciphertext message in the "Decrypt Message" section.
10. Click the "Decrypt" button to decrypt the message using the private key.
11. The decrypted message will be displayed in the "Decrypted Result" text area.

## Source Code

The JavaScript code for implementing RSA encryption and decryption using the JSEncrypt library can be found in the `script.js` file. The code is written in strict mode to catch common programming errors and ensure best practices.

The source code for the JSEncrypt library can be found on GitHub at:

[https://github.com/travist/jsencrypt/tree/master](https://github.com/travist/jsencrypt/tree/master)

Please visit the provided links to access the library's documentation and to check for any updates or changes to the library.

## Styling

The user interface of the application is styled using CSS, with attention to color schemes that are suitable for colorblind users. The colors used aim to provide better visibility and accessibility for all users.

## License

This project is open-source and available under the MIT License. You can find the license details in the `LICENSE` file.

---

This application is intended for educational purposes and to showcase the use of RSA encryption in web applications. It is not suitable for production use without further security measures and enhancements.
