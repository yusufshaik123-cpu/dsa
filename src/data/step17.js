export const step17Data = {
  "stepNumber": 17,
  "stepTitle": "Tries [Theory, Practice]",
  "lectures": [
    {
      "lectureNumber": 1,
      "lectureTitle": "Theory",
      "problems": [
        {
          "id": "s17_l1_p1",
          "name": "Implement Trie I (Insert, Search, StartsWith)",
          "difficulty": "Medium",
          "pattern": "Trie",
          "primaryLink": "https://leetcode.com/problems/implement-trie-prefix-tree/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/implement-trie-prefix-tree/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Implement%20Trie%20I%20(Insert%2C%20Search%2C%20StartsWith)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Implement%20Trie%20I%20(Insert%2C%20Search%2C%20StartsWith)"
            }
          ],
          "prerequisites": [
            "Basics of Trie"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(L)",
          "sc": "O(WordCount * L)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Trie",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s17_l1_p2",
          "name": "Implement Trie II (Insert, CountWords, Erase)",
          "difficulty": "Medium",
          "pattern": "Trie",
          "primaryLink": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/trie-insert-and-search0651/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Implement%20Trie%20II%20(Insert%2C%20CountWords%2C%20Erase)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Implement%20Trie%20II%20(Insert%2C%20CountWords%2C%20Erase)"
            }
          ],
          "prerequisites": [
            "Basics of Trie"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(L)",
          "sc": "O(WordCount * L)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Trie",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 2,
      "lectureTitle": "Practice",
      "problems": [
        {
          "id": "s17_l2_p1",
          "name": "Longest Word With All Prefixes",
          "difficulty": "Medium",
          "pattern": "Trie",
          "primaryLink": "https://www.geeksforgeeks.org/problems/longest-word-with-all-prefixes/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-word-with-all-prefixes/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-word-with-all-prefixes/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20Word%20With%20All%20Prefixes"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20Word%20With%20All%20Prefixes"
            }
          ],
          "prerequisites": [
            "Basics of Trie"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(Sum(L))",
          "sc": "O(Sum(L))",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/longest-word-with-all-prefixes/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/longest-word-with-all-prefixes/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/longest-word-with-all-prefixes/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Trie",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s17_l2_p2",
          "name": "Number of Distinct Substrings",
          "difficulty": "Medium",
          "pattern": "Trie",
          "primaryLink": "https://www.geeksforgeeks.org/problems/number-of-distinct-substrings-in-a-string/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-distinct-substrings-in-a-string/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Number%20of%20Distinct%20Substrings"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Number%20of%20Distinct%20Substrings"
            }
          ],
          "prerequisites": [
            "Basics of Trie"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N^2)",
          "sc": "O(N^2)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/number-of-distinct-substrings-in-a-string/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/number-of-distinct-substrings-in-a-string/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/number-of-distinct-substrings-in-a-string/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Trie",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s17_l2_p3",
          "name": "Maximum XOR of Two Numbers in Array",
          "difficulty": "Medium",
          "pattern": "Trie/Bitwise",
          "primaryLink": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/maximum-xor-of-two-numbers-in-an-array/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Maximum%20XOR%20of%20Two%20Numbers%20in%20Array"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Maximum%20XOR%20of%20Two%20Numbers%20in%20Array"
            }
          ],
          "prerequisites": [
            "Basics of Trie/Bitwise"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N * 32)",
          "sc": "O(N * 32)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Trie/Bitwise",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s17_l2_p4",
          "name": "Maximum XOR With Element From Array",
          "difficulty": "Hard",
          "pattern": "Trie/Bitwise",
          "primaryLink": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/maximum-xor-with-an-element-from-array/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Maximum%20XOR%20With%20Element%20From%20Array"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Maximum%20XOR%20With%20Element%20From%20Array"
            }
          ],
          "prerequisites": [
            "Basics of Trie/Bitwise"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "60-120 mins",
          "tc": "O((N+Q) * 32)",
          "sc": "O(N * 32)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Trie/Bitwise",
            "Hard",
            "Interview"
          ]
        }
      ]
    }
  ]
};
