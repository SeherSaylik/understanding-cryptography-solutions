1.14. An obvious approach to increase the security of an asymmetrical algorithm is to apply the same cipher twice, i.e.: 
$$y = e_{k2}(e_{k1}(x))$$
As is often the case in cryptography, things are very tricky and results are often different from the expected and/or desired ones. In this problem, we show that a double encryption with the affine cipher is only as secure as single encryption! Assume two affine ciphers ek1 = a1x + b1 and ek2 = a2x + b2. 
**1. Show that there is a single affine cipher $$e_{k3} = a_3x + b_3$$ which performs exactly the same encryption (and decryption) as the combination $$e_{k2}(e_{k1}(x))$$**

The encryption process for ek1 and ek2; 
$$e_{k1} = a_1x + b_1$$
$$e_{k2} = a_2(a_1x + b_1) + b_2$$
Since we are looking for the equation of e_k3 = e_k1.e_k2 ;
$$a_3x + b_3 = (a_2 . a_1)x +  (b_1.a_2) + b_2$$
$$a_3 = (a_2 . a_1)\ and\  b_3 = (b_1.a_2) + b_2$$

 **2. Find the values for a3, b3 when a1 = 3, b1 = 5, and a2 = 11, b2 = 7.**
$$a_3 = (a_2 . a_1)\ and\  b_3 = (b_1.a_2) + b_2$$


Therefore, **a3 = 33 and b3 = 62**.

 **1. For verification: (1) encrypt the letter K first with e_k1 and the result with e_k2, and (2) encrypt the letter K with e_k3.**

 Encryption equation for the first key pair is:
 $$y = a_1x+b_1\ mod\ 26 $$
K = 10th index for the letter K, first encryption:
$$y_1 = 3.10+5\ mod\ 26 = 9$$ 
Second encryption:
$$y_2 = e_{k2}(9)\ mod\ 26$$ 
$$y_2 = 11.9 + 7\ mod\ 26 = 2$$ 

Third encryption as e_k3:
$$a_3 = (a_2 . a_1)\ and\  b_3 = (b_1.a_2) + b_2$$
a3 = 33 and b = 62
$$y_3 = 33.10 + 62\ mod\ 26 = 2 $$

As we can see, we observed that the y2=y3.
   
 **3.  Briefly describe what happens if an exhaustive key-search attack is applied to a double-encrypted affine ciphertext. Is the effective keyspace increased? Remark: The issue of multiple encryption is of great practical importance in the case of the Data Encryption Standard (DES), for which multiple encryption (in particular, triple encryption) does increase security considerably.**

When double encryption is employed, it does not necessarily increase the effective keyspace in the same way that it does for certain block ciphers like DES. In the case of DES, triple encryption significantly increases security because it introduces a third key and adds complexity to the attack surface.


