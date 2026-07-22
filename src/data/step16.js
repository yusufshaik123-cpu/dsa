export const step16Data = {
  "stepNumber": 16,
  "stepTitle": "Dynamic Programming [Intro, Grids, Subsequences, Strings, Stocks, LIS]",
  "lectures": [
    {
      "lectureNumber": 1,
      "lectureTitle": "Introduction",
      "problems": [
        {
          "id": "s16_l1_p1",
          "name": "Introduction to Dynamic Programming",
          "difficulty": "Easy",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/introduction-to-dp/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/introduction-to-dp/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/introduction-to-dp/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Introduction%20to%20Dynamic%20Programming"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Introduction%20to%20Dynamic%20Programming"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Low",
          "solveTime": "20-30 mins",
          "tc": "O(N)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/introduction-to-dp/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/introduction-to-dp/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/introduction-to-dp/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s16_l1_p2",
          "name": "Climbing Stairs",
          "difficulty": "Easy",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/climbing-stairs/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/climbing-stairs/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/climbing-stairs/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Climbing%20Stairs"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Climbing%20Stairs"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "20-30 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/climbing-stairs/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/climbing-stairs/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/climbing-stairs/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Easy",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 2,
      "lectureTitle": "1D DP",
      "problems": [
        {
          "id": "s16_l2_p1",
          "name": "Frog Jump",
          "difficulty": "Easy",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/geek-jump/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/geek-jump/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/geek-jump/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Frog%20Jump"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Frog%20Jump"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Low",
          "solveTime": "20-30 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/geek-jump/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/geek-jump/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/geek-jump/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s16_l2_p2",
          "name": "Frog Jump with K Jumps",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/minimal-cost/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimal-cost/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimal-cost/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Frog%20Jump%20with%20K%20Jumps"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Frog%20Jump%20with%20K%20Jumps"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N * K)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/minimal-cost/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/minimal-cost/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/minimal-cost/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l2_p3",
          "name": "Maximum Sum of Non-Adjacent Elements",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/max-sum-without-adjacents2430/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Maximum%20Sum%20of%20Non-Adjacent%20Elements"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Maximum%20Sum%20of%20Non-Adjacent%20Elements"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l2_p4",
          "name": "House Robber",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/house-robber/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/house-robber/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/house-robber/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+House%20Robber"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+House%20Robber"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/house-robber/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/house-robber/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/house-robber/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l2_p5",
          "name": "House Robber II",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/house-robber-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/house-robber-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/house-robber-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+House%20Robber%20II"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+House%20Robber%20II"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/house-robber-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/house-robber-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/house-robber-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l2_p6",
          "name": "Ninja's Training",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/geeks-training/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/geeks-training/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/geeks-training/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Ninja's%20Training"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Ninja's%20Training"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N * 4)",
          "sc": "O(4)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/geeks-training/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/geeks-training/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/geeks-training/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 3,
      "lectureTitle": "2D/3D DP",
      "problems": [
        {
          "id": "s16_l3_p1",
          "name": "Grid Unique Paths",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/unique-paths/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/unique-paths/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/unique-paths/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Grid%20Unique%20Paths"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Grid%20Unique%20Paths"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/unique-paths/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/unique-paths/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/unique-paths/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l3_p2",
          "name": "Grid Unique Paths II",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/unique-paths-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/unique-paths-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/unique-paths-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Grid%20Unique%20Paths%20II"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Grid%20Unique%20Paths%20II"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/unique-paths-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/unique-paths-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/unique-paths-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l3_p3",
          "name": "Minimum Path Sum in Grid",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/minimum-path-sum/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-path-sum/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-path-sum/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Minimum%20Path%20Sum%20in%20Grid"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Minimum%20Path%20Sum%20in%20Grid"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/minimum-path-sum/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/minimum-path-sum/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/minimum-path-sum/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l3_p4",
          "name": "Triangle Path Min Sum",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/triangle/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/triangle/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/triangle/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Triangle%20Path%20Min%20Sum"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Triangle%20Path%20Min%20Sum"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N^2)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/triangle/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/triangle/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/triangle/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l3_p5",
          "name": "Minimum/Maximum Falling Path Sum",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/minimum-falling-path-sum/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-falling-path-sum/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Minimum%2FMaximum%20Falling%20Path%20Sum"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Minimum%2FMaximum%20Falling%20Path%20Sum"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l3_p6",
          "name": "Cherry Pickup II (3D DP)",
          "difficulty": "Hard",
          "pattern": "3D DP",
          "primaryLink": "https://leetcode.com/problems/cherry-pickup-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/cherry-pickup-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/cherry-pickup-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Cherry%20Pickup%20II%20(3D%20DP)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Cherry%20Pickup%20II%20(3D%20DP)"
            }
          ],
          "prerequisites": [
            "Basics of 3D DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "60-120 mins",
          "tc": "O(N * M * M)",
          "sc": "O(M * M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/cherry-pickup-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/cherry-pickup-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/cherry-pickup-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "3D DP",
            "Hard",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 4,
      "lectureTitle": "DP on Subsequences",
      "problems": [
        {
          "id": "s16_l4_p1",
          "name": "Subset Sum Equals K",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555635/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/subset-sum-problem-1611555635/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555635/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Subset%20Sum%20Equals%20K"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Subset%20Sum%20Equals%20K"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N * K)",
          "sc": "O(K)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555635/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555635/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555635/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p2",
          "name": "Partition Equal Subset Sum",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/partition-equal-subset-sum/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/partition-equal-subset-sum/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Partition%20Equal%20Subset%20Sum"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Partition%20Equal%20Subset%20Sum"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N * Sum)",
          "sc": "O(Sum)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p3",
          "name": "Partition Array into Two Subsets with Min Difference",
          "difficulty": "Hard",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-sum-partition3317/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Partition%20Array%20into%20Two%20Subsets%20with%20Min%20Difference"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Partition%20Array%20into%20Two%20Subsets%20with%20Min%20Difference"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "60-120 mins",
          "tc": "O(N * Sum)",
          "sc": "O(Sum)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p4",
          "name": "Count Subsets with Sum K",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/perfect-sum-problem/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Count%20Subsets%20with%20Sum%20K"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Count%20Subsets%20with%20Sum%20K"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * K)",
          "sc": "O(K)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p5",
          "name": "Count Partitions with Given Difference",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/partitions-with-given-difference/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Count%20Partitions%20with%20Given%20Difference"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Count%20Partitions%20with%20Given%20Difference"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * Sum)",
          "sc": "O(Sum)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p6",
          "name": "0-1 Knapsack Problem",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/0-1-knapsack-problem/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+0-1%20Knapsack%20Problem"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+0-1%20Knapsack%20Problem"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N * W)",
          "sc": "O(W)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p7",
          "name": "Target Sum",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/target-sum/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/target-sum/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/target-sum/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Target%20Sum"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Target%20Sum"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N * Sum)",
          "sc": "O(Sum)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/target-sum/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/target-sum/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/target-sum/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p8",
          "name": "Coin Change I (Min Coins)",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/coin-change/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/coin-change/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/coin-change/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Coin%20Change%20I%20(Min%20Coins)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Coin%20Change%20I%20(Min%20Coins)"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N * Amount)",
          "sc": "O(Amount)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/coin-change/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/coin-change/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/coin-change/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p9",
          "name": "Coin Change II (Total Ways)",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://leetcode.com/problems/coin-change-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/coin-change-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/coin-change-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Coin%20Change%20II%20(Total%20Ways)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Coin%20Change%20II%20(Total%20Ways)"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * Amount)",
          "sc": "O(Amount)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/coin-change-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/coin-change-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/coin-change-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p10",
          "name": "Unbounded Knapsack",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/unbounded-knapsack-or-fractional-knapsack/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/unbounded-knapsack-or-fractional-knapsack/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/unbounded-knapsack-or-fractional-knapsack/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Unbounded%20Knapsack"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Unbounded%20Knapsack"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N * W)",
          "sc": "O(W)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/unbounded-knapsack-or-fractional-knapsack/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/unbounded-knapsack-or-fractional-knapsack/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/unbounded-knapsack-or-fractional-knapsack/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l4_p11",
          "name": "Rod Cutting Problem",
          "difficulty": "Medium",
          "pattern": "DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/rod-cutting/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/rod-cutting/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/rod-cutting/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Rod%20Cutting%20Problem"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Rod%20Cutting%20Problem"
            }
          ],
          "prerequisites": [
            "Basics of DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * N)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/rod-cutting/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/rod-cutting/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/rod-cutting/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 5,
      "lectureTitle": "DP on Strings",
      "problems": [
        {
          "id": "s16_l5_p1",
          "name": "Longest Common Subsequence",
          "difficulty": "Medium",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/longest-common-subsequence/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-common-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20Common%20Subsequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20Common%20Subsequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/longest-common-subsequence/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/longest-common-subsequence/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/longest-common-subsequence/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p2",
          "name": "Print Longest Common Subsequence",
          "difficulty": "Medium",
          "pattern": "DP on Strings",
          "primaryLink": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-common-subsequence-1587115620/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Print%20Longest%20Common%20Subsequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Print%20Longest%20Common%20Subsequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(N * M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p3",
          "name": "Longest Common Substring",
          "difficulty": "Medium",
          "pattern": "DP on Strings",
          "primaryLink": "https://www.geeksforgeeks.org/problems/longest-common-substring/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-common-substring/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-substring/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20Common%20Substring"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20Common%20Substring"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-substring/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-substring/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/longest-common-substring/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p4",
          "name": "Longest Palindromic Subsequence",
          "difficulty": "Medium",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/longest-palindromic-subsequence/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-palindromic-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20Palindromic%20Subsequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20Palindromic%20Subsequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N * N)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p5",
          "name": "Min Insertions to Make String Palindrome",
          "difficulty": "Medium",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-insertion-steps-to-make-a-string-palindrome/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Min%20Insertions%20to%20Make%20String%20Palindrome"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Min%20Insertions%20to%20Make%20String%20Palindrome"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * N)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p6",
          "name": "Min Insertions/Deletions to convert A to B",
          "difficulty": "Medium",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/delete-operation-for-two-strings/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/delete-operation-for-two-strings/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/delete-operation-for-two-strings/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Min%20Insertions%2FDeletions%20to%20convert%20A%20to%20B"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Min%20Insertions%2FDeletions%20to%20convert%20A%20to%20B"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/delete-operation-for-two-strings/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/delete-operation-for-two-strings/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/delete-operation-for-two-strings/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p7",
          "name": "Shortest Common Supersequence",
          "difficulty": "Hard",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/shortest-common-supersequence/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/shortest-common-supersequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/shortest-common-supersequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Shortest%20Common%20Supersequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Shortest%20Common%20Supersequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "60-120 mins",
          "tc": "O(N * M)",
          "sc": "O(N * M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/shortest-common-supersequence/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/shortest-common-supersequence/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/shortest-common-supersequence/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p8",
          "name": "Distinct Subsequences",
          "difficulty": "Hard",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/distinct-subsequences/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/distinct-subsequences/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/distinct-subsequences/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Distinct%20Subsequences"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Distinct%20Subsequences"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Low",
          "solveTime": "60-120 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/distinct-subsequences/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/distinct-subsequences/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/distinct-subsequences/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p9",
          "name": "Edit Distance",
          "difficulty": "Hard",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/edit-distance/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/edit-distance/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/edit-distance/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Edit%20Distance"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Edit%20Distance"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "60-120 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/edit-distance/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/edit-distance/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/edit-distance/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l5_p10",
          "name": "Wildcard Matching",
          "difficulty": "Hard",
          "pattern": "DP on Strings",
          "primaryLink": "https://leetcode.com/problems/wildcard-matching/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/wildcard-matching/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/wildcard-matching/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Wildcard%20Matching"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Wildcard%20Matching"
            }
          ],
          "prerequisites": [
            "Basics of DP on Strings"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "60-120 mins",
          "tc": "O(N * M)",
          "sc": "O(M)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/wildcard-matching/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/wildcard-matching/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/wildcard-matching/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Strings",
            "Hard",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 6,
      "lectureTitle": "DP on Stocks",
      "problems": [
        {
          "id": "s16_l6_p1",
          "name": "Best Time to Buy & Sell Stock I",
          "difficulty": "Easy",
          "pattern": "Array/Greedy",
          "primaryLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20I"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20I"
            }
          ],
          "prerequisites": [
            "Basics of Array/Greedy"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "20-30 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Array/Greedy",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s16_l6_p2",
          "name": "Best Time to Buy & Sell Stock II",
          "difficulty": "Medium",
          "pattern": "DP on Stocks",
          "primaryLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20II"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20II"
            }
          ],
          "prerequisites": [
            "Basics of DP on Stocks"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Stocks",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l6_p3",
          "name": "Best Time to Buy & Sell Stock III",
          "difficulty": "Hard",
          "pattern": "DP on Stocks",
          "primaryLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20III"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20III"
            }
          ],
          "prerequisites": [
            "Basics of DP on Stocks"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "60-120 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Stocks",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l6_p4",
          "name": "Best Time to Buy & Sell Stock IV",
          "difficulty": "Hard",
          "pattern": "DP on Stocks",
          "primaryLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-iv/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20IV"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20IV"
            }
          ],
          "prerequisites": [
            "Basics of DP on Stocks"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "60-120 mins",
          "tc": "O(N * K)",
          "sc": "O(K)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Stocks",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l6_p5",
          "name": "Best Time to Buy & Sell Stock with Cooldown",
          "difficulty": "Medium",
          "pattern": "DP on Stocks",
          "primaryLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-with-cooldown/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20with%20Cooldown"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20with%20Cooldown"
            }
          ],
          "prerequisites": [
            "Basics of DP on Stocks"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Stocks",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l6_p6",
          "name": "Best Time to Buy & Sell Stock with Transaction Fee",
          "difficulty": "Medium",
          "pattern": "DP on Stocks",
          "primaryLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20with%20Transaction%20Fee"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20%26%20Sell%20Stock%20with%20Transaction%20Fee"
            }
          ],
          "prerequisites": [
            "Basics of DP on Stocks"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N)",
          "sc": "O(1)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on Stocks",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 7,
      "lectureTitle": "DP on LIS",
      "problems": [
        {
          "id": "s16_l7_p1",
          "name": "Longest Increasing Subsequence",
          "difficulty": "Medium",
          "pattern": "DP on LIS",
          "primaryLink": "https://leetcode.com/problems/longest-increasing-subsequence/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20Increasing%20Subsequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20Increasing%20Subsequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on LIS"
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
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on LIS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l7_p2",
          "name": "Print Longest Increasing Subsequence",
          "difficulty": "Medium",
          "pattern": "DP on LIS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/printing-longest-increasing-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Print%20Longest%20Increasing%20Subsequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Print%20Longest%20Increasing%20Subsequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on LIS"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N^2)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on LIS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l7_p3",
          "name": "LIS Using Binary Search",
          "difficulty": "Medium",
          "pattern": "DP/Binary Search",
          "primaryLink": "https://leetcode.com/problems/longest-increasing-subsequence/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+LIS%20Using%20Binary%20Search"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+LIS%20Using%20Binary%20Search"
            }
          ],
          "prerequisites": [
            "Basics of DP/Binary Search"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N log N)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP/Binary Search",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l7_p4",
          "name": "Largest Divisible Subset",
          "difficulty": "Medium",
          "pattern": "DP on LIS",
          "primaryLink": "https://leetcode.com/problems/largest-divisible-subset/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/largest-divisible-subset/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/largest-divisible-subset/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Largest%20Divisible%20Subset"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Largest%20Divisible%20Subset"
            }
          ],
          "prerequisites": [
            "Basics of DP on LIS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N^2)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/largest-divisible-subset/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/largest-divisible-subset/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/largest-divisible-subset/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on LIS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l7_p5",
          "name": "Longest String Chain",
          "difficulty": "Medium",
          "pattern": "DP on LIS",
          "primaryLink": "https://leetcode.com/problems/longest-string-chain/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-string-chain/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-string-chain/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20String%20Chain"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20String%20Chain"
            }
          ],
          "prerequisites": [
            "Basics of DP on LIS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N log N + N * L)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/longest-string-chain/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/longest-string-chain/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/longest-string-chain/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on LIS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l7_p6",
          "name": "Longest Bitonic Subsequence",
          "difficulty": "Medium",
          "pattern": "DP on LIS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/longest-bitonic-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Longest%20Bitonic%20Subsequence"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Longest%20Bitonic%20Subsequence"
            }
          ],
          "prerequisites": [
            "Basics of DP on LIS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(N^2)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on LIS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s16_l7_p7",
          "name": "Number of LIS",
          "difficulty": "Medium",
          "pattern": "DP on LIS",
          "primaryLink": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-longest-increasing-subsequence/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Number%20of%20LIS"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Number%20of%20LIS"
            }
          ],
          "prerequisites": [
            "Basics of DP on LIS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(N^2)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DP on LIS",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 8,
      "lectureTitle": "Partition DP",
      "problems": [
        {
          "id": "s16_l8_p1",
          "name": "Matrix Chain Multiplication",
          "difficulty": "Hard",
          "pattern": "Partition DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/matrix-chain-multiplication/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Matrix%20Chain%20Multiplication"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Matrix%20Chain%20Multiplication"
            }
          ],
          "prerequisites": [
            "Basics of Partition DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "60-120 mins",
          "tc": "O(N^3)",
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
              "link": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Partition DP",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l8_p2",
          "name": "Minimum Cost to Cut a Stick",
          "difficulty": "Hard",
          "pattern": "Partition DP",
          "primaryLink": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-cost-to-cut-a-stick/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Minimum%20Cost%20to%20Cut%20a%20Stick"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Minimum%20Cost%20to%20Cut%20a%20Stick"
            }
          ],
          "prerequisites": [
            "Basics of Partition DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "60-120 mins",
          "tc": "O(N^3)",
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
              "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Partition DP",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l8_p3",
          "name": "Burst Balloons",
          "difficulty": "Hard",
          "pattern": "Partition DP",
          "primaryLink": "https://leetcode.com/problems/burst-balloons/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/burst-balloons/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/burst-balloons/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Burst%20Balloons"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Burst%20Balloons"
            }
          ],
          "prerequisites": [
            "Basics of Partition DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "60-120 mins",
          "tc": "O(N^3)",
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
              "link": "https://leetcode.com/problems/burst-balloons/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/burst-balloons/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/burst-balloons/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Partition DP",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l8_p4",
          "name": "Evaluate Boolean Expression to True",
          "difficulty": "Hard",
          "pattern": "Partition DP",
          "primaryLink": "https://www.geeksforgeeks.org/problems/boolean-parenthesization/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/boolean-parenthesization/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/boolean-parenthesization/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Evaluate%20Boolean%20Expression%20to%20True"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Evaluate%20Boolean%20Expression%20to%20True"
            }
          ],
          "prerequisites": [
            "Basics of Partition DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "60-120 mins",
          "tc": "O(N^3)",
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
              "link": "https://www.geeksforgeeks.org/problems/boolean-parenthesization/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/boolean-parenthesization/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/boolean-parenthesization/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Partition DP",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l8_p5",
          "name": "Palindrome Partitioning II",
          "difficulty": "Hard",
          "pattern": "Partition DP",
          "primaryLink": "https://leetcode.com/problems/palindrome-partitioning-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/palindrome-partitioning-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Palindrome%20Partitioning%20II"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Palindrome%20Partitioning%20II"
            }
          ],
          "prerequisites": [
            "Basics of Partition DP"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "60-120 mins",
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
              "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Partition DP",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s16_l8_p6",
          "name": "Partition Array for Maximum Sum",
          "difficulty": "Medium",
          "pattern": "Partition DP",
          "primaryLink": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/partition-array-for-maximum-sum/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
            "video": "https://www.youtube.com/results?search_query=striver+Partition%20Array%20for%20Maximum%20Sum"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Partition%20Array%20for%20Maximum%20Sum"
            }
          ],
          "prerequisites": [
            "Basics of Partition DP"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * K)",
          "sc": "O(N)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Partition DP",
            "Medium",
            "Interview"
          ]
        }
      ]
    }
  ]
};
