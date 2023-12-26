**1.13. In an attack scenario, we assume that th attacker Oscar manages somehow to provide Alice with a few pieces of plaintext that she encrypts.Show how Oscar can break the affine cipher by using two pairs of plaintext–ciphertext, (x1,y1) and (x2,y2). What is the condition for choosing x1 and x2?**
Remark:In practice such an assumption turns out to be valid for certain settings, e.g.,encryption by Web servers,etc.This attack scenario is, thus,very important and is denoted as a chosen plaintext attack.

In a chosen-plaintext attack scenario for the affine cipher, Oscar has the ability to provide Alice with plaintexts of his choice and observe the corresponding ciphertexts. This allows Oscar to collect pairs of plaintext and ciphertext (x1​,y1​) and (x2​,y2​) where y1​ and y2​ are the corresponding ciphertexts for plaintexts x1​ and x2​.

The affine cipher encryption function is E(x)=(ax+b) mod m, where a and b are the key parameters, and m is the size of the alphabet. The ciphertext y is computed as y=E(x)=(ax+b) mod m.

To break the affine cipher, Oscar needs to find the key parameters a and b. He can use the following approach with the pairs (x1​,y1​) and (x2​,y2​):

Write the Encryption Equations: Write the encryption equations for =x1​ and =x2​ in terms of a and b:
y1 ​≡ (ax1​+b) mod m
y2​ ≡ (ax2​+b) mod m

Subtract the equations to eliminate b:
y1​−y2 ​≡ a(x1​−x2​) mod m

Find a: 
Solve for a by finding the modular inverse of (x1​−x2​) modulo m:
a ≡ [(y1​−y2​ )(x1​−x2​)]^ (-1)  mod m

Find b: 
Substitute the value of a back into one of the original equations to find b:
 b ≡ y1​−a.x1​ mod m

Now, Oscar has successfully determined the key parameters a and b and can decrypt any other ciphertext encrypted with the same key.

The condition for choosing x1​ and x2​ is that (x1​−x2​) must be coprime with m, ensuring the existence of the modular inverse needed in the process. If (x1​−x2​) and m are not coprime, the attack might not work, and Oscar needs to choose different plaintext pairs.