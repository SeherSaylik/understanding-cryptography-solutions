1.Assume that an attacker has a special-purpose Application-Specific Integrated Circuit (ASIC), which checks 5·10^8 keys per second, and she has a budget of $1 million. One ASIC costs $50, and we assume 100% overhead for integrating (manufacturing the printed circuit boards, power supply, cooling, etc.). How many ASICs can we run in parallel with the given budget? How long does an average key search take? Relate this time to the age of the Universe, which is about 10^10 years.

- Price for 5·10^8 (1 ASIC) = 50$(ASIC cost) + 50$(overhead) = 100$
 
10.000x5·10^8 tryings = 1.000.000 => We can run 10.000 ASICs in parallel. 

- To break the algorithm with brute-force we need to try 2^128 keys.

  The time required to solve it: X = 2^128/ 5·10^8 = 680,564,733,726,780,192,964,172,878,128.91
  The calculated time is significantly larger than the age of the Universe. 
  So, even if it runs in every second of universe lifespan, it won't be able to try all possibilities. 
                             

2.Now, we try to take advances in computer technology into account. Predicting the future tends to be tricky, but the estimate usually applied is Moore’s Law, which states that computer power doubles every 18 months while the costs of integrated circuits stay constant. How many years do we have to wait until a key-search machine can be built for breaking AES with 128 bits with an average search time of 24 hours? Again, assume a budget of $1 million (do not take inflation into account).