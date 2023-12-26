1.4. We now consider the relation between passwords and key size. For this purpose, we consider a cryptosystem where the user enters a key in the form of a password.

**1. Assume a password consisting of 8 letters, where each letter is encoded by the ASCII scheme (7 bits per character, i.e., 128 possible characters). What is the size of the key space which can be constructed by such passwords?**
When we consider that each bit can have 2 different binary values which are 1 and 0, a 7 bit character will have 2^7 = 128 possible combinations.    
Since we will have 8 letters for the given example password, each letter has 128 possible combinations. This means it will have 128^8 different password options.

**1. What is the corresponding key length in bits?**
Key length in bits: 8×7= 56 bits

**3. Assume that most users use only the 26 lowercase letters from the alphabet instead of the full 7 bits of the ASCII encoding. What is the corresponding key length in bits in this case?**

That means each character only represents itself and there will be only 1 bit per character. 
Therefore the key length in bits is 8×1=**8** bits.

**4. At least how many characters are required for a password in order to generate a key length of 128 bits in the case of:**

**a. 7-bit characters?**
For one 7-bit character, 1 letter, it occupies 2^7 = 128 bits. Therefore, to get 128 bit-password, user needs to input **1-letter** password. (128x1)

**b. 26 lowercase letters from the alphabet?**
Since for this scenario, each letter will be represented by itself( by 1 bit), we will need **128** characters to get 128 bit-password.
