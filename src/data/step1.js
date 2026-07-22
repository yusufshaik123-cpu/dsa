export const step1Data = {
  stepNumber: 1,
  stepTitle: "Learn the Basics",
  lectures: [
    {
      lectureNumber: 1,
      lectureTitle: "Things to Know in C++/Java/Python or any language",
      problems: [
        {
          id: "s1_l1_p1",
          name: "User Input / Output",
          difficulty: "Easy",
          pattern: "Basic Input/Output",
          primaryLink: "https://www.codingninjas.com/studio/problems/find-character-case_5851472",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/find-character-case_5851472" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [
            { name: "Abdul Bari (C++ Basics)", link: "https://www.youtube.com/watch?v=Vz292k2uCcc" }
          ],
          prerequisites: ["Basic Programming Syntax"],
          companies: ["TCS", "Accenture", "Infosys"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(1)",
          sc: "O(1)",
          commonMistakes: "Forgetting to handle characters outside 'A'-'Z' and 'a'-'z', or using incorrect case checks.",
          hints: [
            "Take input as a single character using standard I/O commands.",
            "Compare the character's ASCII value or use standard functions like isupper() or islower().",
            "Return 1 if uppercase, 0 if lowercase, and -1 otherwise."
          ],
          similarProblems: [
            { name: "Compare Casing", link: "https://leetcode.com/problems/detect-capital/" },
            { name: "ASCII Value of Character", link: "https://www.geeksforgeeks.org/problems/ascii-value-of-child-character/0" }
          ],
          harderFollowUps: [
            { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" }
          ],
          learningLists: "Not Included",
          tags: ["Basic", "Input-Output", "Char-Checking", "Easy"]
        },
        {
          id: "s1_l1_p2",
          name: "Data Types",
          difficulty: "Easy",
          pattern: "Basic Syntax",
          primaryLink: "https://www.codingninjas.com/studio/problems/data-type_8357232",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/data-type_8357232" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [],
          prerequisites: ["Variable declarations"],
          companies: ["Wipro", "Cognizant", "HCL"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(1)",
          sc: "O(1)",
          commonMistakes: "Confusing memory sizes between float/double or long/int on different architectures.",
          hints: [
            "Use a switch or conditional block to match the data type string.",
            "Return 4 for Integer/Float, 8 for Long/Double, and 1 for Character."
          ],
          similarProblems: [
            { name: "Size of Data Types", link: "https://www.geeksforgeeks.org/problems/size-of-data-types/0" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Basic", "Data-Types", "Easy"]
        },
        {
          id: "s1_l1_p3",
          name: "If Else statements",
          difficulty: "Easy",
          pattern: "Conditionals",
          primaryLink: "https://www.codingninjas.com/studio/problems/if-else-decision-making_8357235",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/if-else-decision-making_8357235" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [],
          prerequisites: ["Relational operators"],
          companies: ["TCS", "Capgemini"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(1)",
          sc: "O(1)",
          commonMistakes: "Using '=' instead of '==' in comparisons, or writing incorrect nested structures.",
          hints: [
            "Directly compare the two inputs using relational operators.",
            "Return 'greater', 'smaller', or 'equal' depending on the evaluation."
          ],
          similarProblems: [
            { name: "Find Largest of Three Numbers", link: "https://www.geeksforgeeks.org/problems/largest-of-three-numbers/0" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Basic", "Conditionals", "Easy"]
        },
        {
          id: "s1_l1_p4",
          name: "Switch Statement",
          difficulty: "Easy",
          pattern: "Conditionals",
          primaryLink: "https://www.codingninjas.com/studio/problems/switch-case-statement_8357245",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/switch-case-statement_8357245" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [],
          prerequisites: ["Switch case keywords"],
          companies: ["Tech Mahindra", "Amazon"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(1)",
          sc: "O(1)",
          commonMistakes: "Forgetting to write 'break' statements, leading to switch case fallthrough.",
          hints: [
            "Map choices (1 for Circle, 2 for Rectangle) using a switch block.",
            "Use Math.PI for accurate area calculations of the circle."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Basic", "Switch-Case", "Geometry", "Easy"]
        },
        {
          id: "s1_l1_p5",
          name: "For loops",
          difficulty: "Easy",
          pattern: "Loops",
          primaryLink: "https://www.codingninjas.com/studio/problems/nth-fibonacci-number_74126",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/nth-fibonacci-number_74126" },
            { platform: "LeetCode", link: "https://leetcode.com/problems/fibonacci-number/" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [
            { name: "NeetCode", link: "https://www.youtube.com/watch?v=dChT_lWBC2c" }
          ],
          prerequisites: ["Loop basics", "Variables"],
          companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs"],
          frequency: "High",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(1)",
          commonMistakes: "Off-by-one errors in index mapping, or starting loop counters from wrong initial terms.",
          hints: [
            "Use two variables to keep track of the last two Fibonacci numbers.",
            "Iterate from 3 to N, updating the two variables in each step.",
            "Return the sum representing the N-th term."
          ],
          similarProblems: [
            { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" }
          ],
          harderFollowUps: [
            { name: "Matrix Exponentiation for Fibonacci", link: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/" }
          ],
          learningLists: "LeetCode Top Interview 150",
          tags: ["Loops", "Fibonacci", "Math", "Easy"]
        },
        {
          id: "s1_l1_p6",
          name: "While loops",
          difficulty: "Easy",
          pattern: "Loops",
          primaryLink: "https://www.codingninjas.com/studio/problems/sum-of-even-odd_624650",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/sum-of-even-odd_624650" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [],
          prerequisites: ["Modulus operator", "While condition syntax"],
          companies: ["L&T Infotech", "Cognizant"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(log10(N))",
          sc: "O(1)",
          commonMistakes: "Not updating the loop counter, leading to infinite loop or missing the last digit.",
          hints: [
            "Extract digits one by one using N % 10 inside a while loop.",
            "Check if the digit is even or odd using the % 2 operator.",
            "Add the digit to its respective sum and divide N by 10 (N = N / 10)."
          ],
          similarProblems: [
            { name: "Reverse Integer", link: "https://leetcode.com/problems/reverse-integer/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Loops", "Digits", "Math", "Easy"]
        },
        {
          id: "s1_l1_p7",
          name: "Functions (Pass by Reference and Value)",
          difficulty: "Easy",
          pattern: "Functions",
          primaryLink: "https://www.codingninjas.com/studio/problems/pass-by-value-and-pass-by-reference_9853173",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/pass-by-value-and-pass-by-reference_9853173" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/c-basics-input-output-data-types-if-else-switch-loops-functions/",
            video: "https://www.youtube.com/watch?v=EAR7De6Gf4k"
          },
          alternativeVideos: [],
          prerequisites: ["Functions", "References/Pointers"],
          companies: ["Cisco", "Intel"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(1)",
          sc: "O(1)",
          commonMistakes: "Confusing pointer manipulation with reference declarations or returning values rather than updating arguments directly.",
          hints: [
            "Pass the first argument by value (copy) and second by reference (& in C++).",
            "Perform updates on both parameters.",
            "Observe that the change in parameter passed by value does not reflect in the calling scope."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Functions", "Pass-by-Value", "Pass-by-Reference", "Easy"]
        }
      ]
    },
    {
      lectureNumber: 2,
      lectureTitle: "Build-up Logical Thinking (Patterns)",
      problems: Array.from({ length: 22 }, (_, idx) => {
        const pNum = idx + 1;
        return {
          id: `s1_l2_pattern${pNum}`,
          name: `Pattern ${pNum}`,
          difficulty: "Easy",
          pattern: "Loops",
          primaryLink: `https://www.codingninjas.com/studio/problems/pattern-${pNum}_65819${80 + idx}`,
          alternativeLinks: [
            { platform: "Coding Ninjas", link: `https://www.codingninjas.com/studio/problems/pattern-${pNum}_65819${80 + idx}` }
          ],
          striverSolution: {
            article: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/",
            video: "https://www.youtube.com/watch?v=tNm_NNSB3_w"
          },
          alternativeVideos: [],
          prerequisites: ["Nested loops", "Conditional printing"],
          companies: ["TCS", "Accenture", "Cognizant", "Wipro"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(N^2)",
          sc: "O(1)",
          commonMistakes: "Incorrect spacing calculations or wrong index limits in nested loops.",
          hints: [
            "Observe how many lines (outer loop) are there in total.",
            "Determine the relationship between the row number and the characters/spaces in that row (inner loop).",
            "Make sure to output a newline at the end of each outer loop iteration."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Loops", "Patterns", "Logical-Thinking", "Easy"]
        };
      })
    },
    {
      lectureNumber: 3,
      lectureTitle: "Learn STL (or Language Collections)",
      problems: [
        {
          id: "s1_l3_p1",
          name: "C++ STL / Java Collections Overview",
          difficulty: "Easy",
          pattern: "Standard Template Library",
          primaryLink: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-containers-and-vectors/",
          alternativeLinks: [],
          striverSolution: {
            article: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-containers-and-vectors/",
            video: "https://www.youtube.com/watch?v=RRVYpI8tFhA"
          },
          alternativeVideos: [],
          prerequisites: ["Basics of Arrays/Lists"],
          companies: ["All major tech companies"],
          frequency: "Very High",
          solveTime: "20-30 mins",
          tc: "O(N) lookup/modification depending on structures",
          sc: "O(N) storage",
          commonMistakes: "Using std::map (O(log N)) where std::unordered_map (O(1)) would perform better.",
          hints: [
            "Learn vectors, pairs, lists, and deques for sequential storage.",
            "Learn sets, maps, multisets, and multimaps for key-value pair indexing.",
            "Learn sorting, binary search, and permutations algorithms built into the library."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["STL", "Collections", "Theory", "Easy"]
        }
      ]
    },
    {
      lectureNumber: 4,
      lectureTitle: "Know Basic Maths",
      problems: [
        {
          id: "s1_l4_p1",
          name: "Count Digits",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://www.geeksforgeeks.org/problems/count-digits5716/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/count-digits5716/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/count-digits-in-a-number/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [],
          prerequisites: ["Modulo and Division", "Loops"],
          companies: ["Amazon", "Microsoft"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(log10(N))",
          sc: "O(1)",
          commonMistakes: "Division by zero errors if checking division compatibility for digits that are 0.",
          hints: [
            "Create a copy of N to extract digits without destroying the original number.",
            "Inside a loop, retrieve the last digit with temp % 10.",
            "If the digit is non-zero and divides N completely, increment the count."
          ],
          similarProblems: [
            { name: "Sum of Digits", link: "https://leetcode.com/problems/add-digits/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Math", "Digits", "Easy"]
        },
        {
          id: "s1_l4_p2",
          name: "Reverse a Number",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://leetcode.com/problems/reverse-integer/",
          alternativeLinks: [
            { platform: "LeetCode", link: "https://leetcode.com/problems/reverse-integer/" },
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/reverse-an-integer/0" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/c/reverse-a-number-in-c/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [
            { name: "NeetCode", link: "https://www.youtube.com/watch?v=H7VJdO-w21E" }
          ],
          prerequisites: ["Modulo and Division", "Integer overflow concepts"],
          companies: ["Apple", "Amazon", "Microsoft", "Bloomberg"],
          frequency: "High",
          solveTime: "20-30 mins",
          tc: "O(log10(N))",
          sc: "O(1)",
          commonMistakes: "Not checking for integer overflow/underflow when reversing, leading to incorrect calculations.",
          hints: [
            "Iteratively strip the last digit of the number using modulo 10.",
            "Reconstruct the reversed number as rev = rev * 10 + digit.",
            "Before multiplying by 10, check if the value will exceed standard 32-bit integer limits."
          ],
          similarProblems: [
            { name: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/" }
          ],
          harderFollowUps: [],
          learningLists: "LeetCode Top Interview 150",
          tags: ["Math", "Overflow", "Digits", "Easy"]
        },
        {
          id: "s1_l4_p3",
          name: "Check Palindrome",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://leetcode.com/problems/palindrome-number/",
          alternativeLinks: [
            { platform: "LeetCode", link: "https://leetcode.com/problems/palindrome-number/" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [],
          prerequisites: ["Reverse a Number"],
          companies: ["Google", "Meta", "Adobe", "Uber"],
          frequency: "Very High",
          solveTime: "20-30 mins",
          tc: "O(log10(N))",
          sc: "O(1)",
          commonMistakes: "Handling negative numbers incorrectly (negative numbers are never palindromes since '-' is not a digit).",
          hints: [
            "Immediately return false if the input number is negative.",
            "Reverse the number and compare it to the original input.",
            "Ensure you do not modify the original input variable during reversal (use a temp variable)."
          ],
          similarProblems: [
            { name: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/" }
          ],
          harderFollowUps: [
            { name: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/" }
          ],
          learningLists: "LeetCode Top Interview 150",
          tags: ["Math", "Palindrome", "Easy"]
        },
        {
          id: "s1_l4_p4",
          name: "GCD or HCF",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://www.geeksforgeeks.org/problems/lcm-and-gcd5139/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/lcm-and-gcd5139/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/find-gcd-of-two-numbers/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [],
          prerequisites: ["Recursion basics", "Division"],
          companies: ["Amazon", "Goldman Sachs"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(log(min(A, B)))",
          sc: "O(1)",
          commonMistakes: "Using a linear search loop O(min(A,B)) which will TLE for large values.",
          hints: [
            "Use the Euclidean Algorithm: gcd(a, b) = gcd(a - b, b) if a > b.",
            "A more efficient version is gcd(a, b) = gcd(b, a % b) until a % b == 0.",
            "LCM can be computed using (A * B) / GCD(A, B)."
          ],
          similarProblems: [
            { name: "Fraction Addition and Subtraction", link: "https://leetcode.com/problems/fraction-addition-and-subtraction/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Math", "Euclidean-Algorithm", "GCD", "Easy"]
        },
        {
          id: "s1_l4_p5",
          name: "Armstrong Numbers",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://www.geeksforgeeks.org/problems/armstrong-numbers4727/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/armstrong-numbers4727/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [],
          prerequisites: ["Digits extraction", "Exponentiation"],
          companies: ["TCS", "Accenture"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(log10(N))",
          sc: "O(1)",
          commonMistakes: "Using fixed powers (like 3) instead of dynamically counting the number of digits in N first.",
          hints: [
            "Count the number of digits (say K) in N.",
            "Iterate through the digits, calculating digit raised to the power K.",
            "Sum the powers and check if the sum equals the original number N."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Math", "Armstrong", "Digits", "Easy"]
        },
        {
          id: "s1_l4_p6",
          name: "Print all Divisors",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [],
          prerequisites: ["Loops", "Square root logic"],
          companies: ["Wipro", "Capgemini"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(sqrt(N))",
          sc: "O(1) extra space",
          commonMistakes: "Using a linear loop up to N for large values (TLE), or adding square root divisors twice when i * i == N.",
          hints: [
            "Iterate from 1 up to sqrt(N).",
            "If i divides N, then both i and N/i are divisors.",
            "Be careful to add divisor N/i only if it is not equal to i."
          ],
          similarProblems: [
            { name: "Four Divisors", link: "https://leetcode.com/problems/four-divisors/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Math", "Divisors", "Sqrt-Decomposition", "Easy"]
        },
        {
          id: "s1_l4_p7",
          name: "Check for Prime",
          difficulty: "Easy",
          pattern: "Math",
          primaryLink: "https://www.geeksforgeeks.org/problems/prime-number2314/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/prime-number2314/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/",
            video: "https://www.youtube.com/watch?v=1XyVruRXFEs"
          },
          alternativeVideos: [],
          prerequisites: ["Loops", "Square root limit logic"],
          companies: ["Microsoft", "Intel"],
          frequency: "High",
          solveTime: "20-30 mins",
          tc: "O(sqrt(N))",
          sc: "O(1)",
          commonMistakes: "Not handling edge cases like 1, 0, or negative numbers which are not prime.",
          hints: [
            "If N <= 1, return false.",
            "Iterate from 2 up to sqrt(N).",
            "If any number in this range divides N, then N is composite, else it is prime."
          ],
          similarProblems: [
            { name: "Count Primes", link: "https://leetcode.com/problems/count-primes/" }
          ],
          harderFollowUps: [
            { name: "Sieve of Eratosthenes", link: "https://leetcode.com/problems/count-primes/" }
          ],
          learningLists: "Not Included",
          tags: ["Math", "Primes", "Sqrt-Decomposition", "Easy"]
        }
      ]
    },
    {
      lectureNumber: 5,
      lectureTitle: "Learn Basic Recursion",
      problems: [
        {
          id: "s1_l5_p1",
          name: "Understand recursion by print something N times",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/print-gfg-n-times/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/print-gfg-n-times/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/recursion/introduction-to-recursion-recursion-tree-stack-overflow-base-case/",
            video: "https://www.youtube.com/watch?v=yVdKa8dnKiE"
          },
          alternativeVideos: [],
          prerequisites: ["Basic Functions"],
          companies: ["TCS"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Forgetting the base condition, which leads to infinite recursion and Stack Overflow.",
          hints: [
            "Write a base condition: if N is 0 or less, stop.",
            "Print the required string once.",
            "Recursively call the function with N - 1."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Recursion", "Print", "Easy"]
        },
        {
          id: "s1_l5_p2",
          name: "Print 1 to N using recursion",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-loop/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-loop/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/recursion/print-1-to-n-using-recursion/",
            video: "https://www.youtube.com/watch?v=un6GhcYC2bs"
          },
          alternativeVideos: [],
          prerequisites: ["Recursion basics", "Stack space visualization"],
          companies: ["Cognizant"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Printing before making the recursive call (backtracking) if using descending variables.",
          hints: [
            "Base condition: If N == 0, return.",
            "Method 1: Pass an iterator parameter starting from 1 up to N.",
            "Method 2 (Backtracking): Call function recursively with N-1, and print N after the call returns."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Recursion", "Backtracking", "Easy"]
        },
        {
          id: "s1_l5_p3",
          name: "Print N to 1 using recursion",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/recursion/print-n-to-1-using-recursion/",
            video: "https://www.youtube.com/watch?v=un6GhcYC2bs"
          },
          alternativeVideos: [],
          prerequisites: ["Recursion basics"],
          companies: ["Infosys"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Incorrect parameter decrement (like N-- instead of N-1) which can cause infinite loops in some structures.",
          hints: [
            "Base condition: If N == 0, return.",
            "Print N first.",
            "Make a recursive call with parameter N - 1."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Recursion", "Print", "Easy"]
        },
        {
          id: "s1_l5_p4",
          name: "Sum of first N numbers",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/recursion/sum-of-first-n-numbers/",
            video: "https://www.youtube.com/watch?v=69yfL1qfV6M"
          },
          alternativeVideos: [],
          prerequisites: ["Functional and Parameterized Recursion"],
          companies: ["Goldman Sachs", "Amazon"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) stack space",
          commonMistakes: "Not returning the result properly in the recursive step (e.g., forgetting 'return' keyword).",
          hints: [
            "Parameterized way: Pass 'sum' variable as parameter: solve(i - 1, sum + i).",
            "Functional way: Return i + solve(i - 1) with base case returning 0.",
            "Note that this mathematical sum can also be solved in O(1) via formula (N * (N+1)) / 2."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Recursion", "Sum", "Easy"]
        },
        {
          id: "s1_l5_p5",
          name: "Factorial of N numbers",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/recursion/factorial-of-a-number-using-recursion/",
            video: "https://www.youtube.com/watch?v=69yfL1qfV6M"
          },
          alternativeVideos: [],
          prerequisites: ["Basic Recursion"],
          companies: ["Amazon"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) stack space",
          commonMistakes: "Multiplying by 0 if base case is not written carefully (should stop at N <= 1).",
          hints: [
            "Base Case: If N <= 1, return 1.",
            "Recursive formula: fact(N) = N * fact(N - 1).",
            "For this GFG problem, maintain a list and append products incrementally until it exceeds N."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Recursion", "Factorial", "Easy"]
        },
        {
          id: "s1_l5_p6",
          name: "Reverse an array",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/reverse-an-array/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/reverse-an-array/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/reverse-a-given-array/",
            video: "https://www.youtube.com/watch?v=twuYeRqgCg8"
          },
          alternativeVideos: [],
          prerequisites: ["Two pointer concepts", "Array swaps"],
          companies: ["Google", "Adobe", "Microsoft"],
          frequency: "High",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Swapping elements beyond the middle index, which reverts the array back to its original state.",
          hints: [
            "Use two indices: 'left' = 0 and 'right' = N - 1.",
            "Base case: if left >= right, return.",
            "Swap arr[left] and arr[right], then call recursively with left+1 and right-1."
          ],
          similarProblems: [
            { name: "Reverse String", link: "https://leetcode.com/problems/reverse-string/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Recursion", "Two-Pointer", "Array", "Easy"]
        },
        {
          id: "s1_l5_p7",
          name: "Check if a string is palindrome or not",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://leetcode.com/problems/valid-palindrome/",
          alternativeLinks: [
            { platform: "LeetCode", link: "https://leetcode.com/problems/valid-palindrome/" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/",
            video: "https://www.youtube.com/watch?v=twuYeRqgCg8"
          },
          alternativeVideos: [
            { name: "NeetCode", link: "https://www.youtube.com/watch?v=jJXJ16kPFWg" }
          ],
          prerequisites: ["Character checks", "Two-pointer checks"],
          companies: ["Facebook", "Microsoft", "Uber", "Apple"],
          frequency: "Very High",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Not ignoring non-alphanumeric characters or failing to normalise character cases.",
          hints: [
            "Normalise the string first: convert to lowercase and keep only alphanumeric characters.",
            "Compare the character at index 'i' with character at index 'length - i - 1'.",
            "Base Case: if i >= length / 2, return true. If characters don't match, return false."
          ],
          similarProblems: [
            { name: "Valid Palindrome II", link: "https://leetcode.com/problems/valid-palindrome-ii/" }
          ],
          harderFollowUps: [],
          learningLists: "Blind 75",
          tags: ["Recursion", "Two-Pointer", "String", "Easy"]
        },
        {
          id: "s1_l5_p8",
          name: "Fibonacci Number",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://leetcode.com/problems/fibonacci-number/",
          alternativeLinks: [
            { platform: "LeetCode", link: "https://leetcode.com/problems/fibonacci-number/" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/recursion/multiple-recursion-calls-fibonacci-number/",
            video: "https://www.youtube.com/watch?v=kvRjZy4fNyQ"
          },
          alternativeVideos: [
            { name: "NeetCode", link: "https://www.youtube.com/watch?v=dChT_lWBC2c" }
          ],
          prerequisites: ["Multiple recursive calls"],
          companies: ["Google", "Amazon", "Microsoft"],
          frequency: "High",
          solveTime: "20-30 mins",
          tc: "O(2^N) exponential without memoization",
          sc: "O(N) stack space",
          commonMistakes: "Exponential recursion without pruning causes stack overflows for larger N (> 45).",
          hints: [
            "Base case: if N <= 1, return N.",
            "Recursive step: return fib(N - 1) + fib(N - 2).",
            "Draw the recursion tree for fib(4) to understand how duplicate calculations occur."
          ],
          similarProblems: [
            { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" }
          ],
          harderFollowUps: [
            { name: "House Robber", link: "https://leetcode.com/problems/house-robber/" }
          ],
          learningLists: "NeetCode 150",
          tags: ["Recursion", "Fibonacci", "Math", "Easy"]
        }
      ]
    },
    {
      lectureNumber: 6,
      lectureTitle: "Learn Basic Hashing",
      problems: [
        {
          id: "s1_l6_p1",
          name: "Count frequency of each element in the array",
          difficulty: "Easy",
          pattern: "Hashing",
          primaryLink: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/hashing-explanation-what-is-hashing-collision-collision-avoidance-methods/",
            video: "https://www.youtube.com/watch?v=KEs5UyBJ39g"
          },
          alternativeVideos: [],
          prerequisites: ["Arrays", "Loops"],
          companies: ["Amazon", "Google", "Adobe"],
          frequency: "Very High",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) storage for map",
          commonMistakes: "Using a nested loop resulting in O(N^2) complexity, leading to Time Limit Exceeded.",
          hints: [
            "Use an array/frequency list if numbers are small and bounded.",
            "Use a Hash Map (unordered_map in C++, HashMap in Java) to store element-to-count mappings.",
            "Iterate through the array, incrementing the map's count for each element."
          ],
          similarProblems: [
            { name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" }
          ],
          harderFollowUps: [
            { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" }
          ],
          learningLists: "LeetCode Top Interview 150",
          tags: ["Hashing", "Frequency", "Array", "Easy"]
        },
        {
          id: "s1_l6_p2",
          name: "Find the highest/lowest frequency element",
          difficulty: "Easy",
          pattern: "Hashing",
          primaryLink: "https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/",
          alternativeLinks: [
            { platform: "Coding Ninjas", link: "https://www.codingninjas.com/studio/problems/k-max-sum-combinations_1062626" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/",
            video: "https://www.youtube.com/watch?v=KEs5UyBJ39g"
          },
          alternativeVideos: [],
          prerequisites: ["Hashing basics", "Map iterations"],
          companies: ["Google", "Goldman Sachs"],
          frequency: "High",
          solveTime: "20-30 mins",
          tc: "O(N)",
          sc: "O(N) storage",
          commonMistakes: "Not checking for tie-breakers correctly (e.g. if two elements have the same frequency, return the smaller element).",
          hints: [
            "Build the frequency map first.",
            "Initialize variables minFreq, maxFreq, minElement, maxElement.",
            "Iterate through the frequency map, updating counts and solving tie-breakers using element values."
          ],
          similarProblems: [
            { name: "Sort Characters By Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Hashing", "Frequency-Extremes", "Map", "Easy"]
        }
      ]
    }
  ]
};
