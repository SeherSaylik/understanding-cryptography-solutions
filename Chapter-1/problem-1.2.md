1.2.We received the following ciphertext which was encoded with a shift cipher: **xultpaajcxitltlxaarpjhtiwtgxktghidhipxciwtvgtpilpitghlxiwiwtxgqadds**

**1.Perform an attack against the cipher based on a letter frequency count: How many letters do you have to identify through a frequency count to recover the key? What is the clear text?**
As we obtained from the output of 'problem1.2.js', the most frequent letter in the ciphertext is 't', which we'll assume corresponds to 'e' in English. 
t = 20th letter and e= 5th letter. Therefore, we can say that it's shifted by 15 positions.
a b c d e f g h i j k l m n o p q r s t u v w x y z
p q r s t u v w x y z a b c d e f g h i j k l m n o

Encrypted text; ifweallunitewewillcausetheriverstostainthegreatwaterswiththeirblood
<3

**--- For the answers, run the command: 'node problem1.2.js' ---**