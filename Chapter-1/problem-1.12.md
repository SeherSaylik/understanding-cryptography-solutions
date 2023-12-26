**1.12.Now,we want to extend the affine cipher from Sect.1.4.4 such that we can encrypt and decrypt messages written with the full German alphabet.The German alphabet consists of the English one together with the three umlauts,  'Ä', 'Ö', 'Ü',and the (even stranger) “double s” character ß. We use the following mapping from letters to integers:**
**A↔0 B↔1 C↔2 D↔3 E↔4 F↔5 G↔6 H↔7 I↔8 J↔9 K↔10 L↔11 M↔12 N↔13 O↔14 P↔15 Q↔16 R↔17 S↔18 T↔19 U↔20 V↔21 W↔22 X↔23 Y↔24 Z↔25 ¨Ä↔26 ¨ Ö↔27 ¨ Ü↔28 ß↔29**

**1.What are the encryption and decryption equations for the cipher?**
Let x,y,a,b ∈ Z 30
Encription equation:
$$e_k\left( x \right)=y ≡\ a·x\ +\ b\mod 30$$
Decription equation:
$$d_k\left( y \right)=x ≡\ a^{-1}\ \ .\ y-b\mod 30$$

With the key: k=(a,b)
**2.How large is the key space of the affine cipher for this alphabet?**
As we know that an element a and the modulus must be relatively prime for the inverse of a to exist.Thus, a must be in the set: a ∈ {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28}

As we have 29 letters as b, and 30 elements in the set a, the key space is:
28x30= 840
**3.The following cipher text was encrypted using the key (a=17,b=1). What is the corresponding plain text?**

**a u ß w ß**
$$d_k\left( y \right)=x ≡\ a^{-1}\ \ .\ y-b\mod 30$$

**Let's decrypt**

For the letter a = 0;
x = 17^(-1) . (0-1)  mod 30 = 7
Keep in mind that 17^(-1) mod 30 = 23.
7th element is "H". So the letter "H" is encrypted as "A".

For the letter u = 20
x = 17^(-1) . (20-1)  mod 30 = 17
17th element is "R". So the letter "R" is encrypted as "U".

For the letter ß = 29;
x = 17^(-1) . (29-1) mod 30 = 14
14th element is "O".

For the letter w = 22;
x = 17^(-1) . (22-1) mod 30 = 3 
3rd element is "D"

Therefore, the encrypted plain text is "hrodo".