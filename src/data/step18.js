export const step18Data = {
  "stepNumber": 18,
  "stepTitle": "Segment Trees / Fenwick Trees [Theory, Practice]",
  "lectures": [
    {
      "lectureNumber": 1,
      "lectureTitle": "Theory & Practice",
      "problems": [
        {
          "id": "s18_l1_p1",
          "name": "Segment Tree Range Query & Node Update",
          "difficulty": "Medium",
          "pattern": "Segment Tree",
          "primaryLink": "https://leetcode.com/problems/range-sum-query-mutable/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/range-sum-query-mutable/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/range-sum-query-mutable/1"
            },
            {
              "platform": "Coding Ninjas",
              "link": "https://www.codingninjas.com/studio/problems/range-sum-query-mutable"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Segment%20Tree%20Range%20Query%20%26%20Node%20Update"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Segment%20Tree%20Range%20Query%20%26%20Node%20Update"
            }
          ],
          "prerequisites": [
            "Basics of Segment Tree"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(log N)",
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
              "link": "https://leetcode.com/problems/range-sum-query-mutable/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/range-sum-query-mutable/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/range-sum-query-mutable/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Segment Tree",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s18_l1_p2",
          "name": "Lazy Propagation Segment Tree",
          "difficulty": "Hard",
          "pattern": "Segment Tree",
          "primaryLink": "https://leetcode.com/problems/range-sum-query-2d-mutable/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/range-sum-query-2d-mutable/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/range-sum-query-2d-mutable/1"
            },
            {
              "platform": "Coding Ninjas",
              "link": "https://www.codingninjas.com/studio/problems/range-sum-query-2d-mutable"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Lazy%20Propagation%20Segment%20Tree"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Lazy%20Propagation%20Segment%20Tree"
            }
          ],
          "prerequisites": [
            "Basics of Segment Tree"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Medium",
          "solveTime": "60-120 mins",
          "tc": "O(log N)",
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
              "link": "https://leetcode.com/problems/range-sum-query-2d-mutable/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/range-sum-query-2d-mutable/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/range-sum-query-2d-mutable/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Segment Tree",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s18_l1_p3",
          "name": "Fenwick Tree Range Query & Point Update",
          "difficulty": "Hard",
          "pattern": "Fenwick Tree",
          "primaryLink": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/count-of-smaller-numbers-after-self/1"
            },
            {
              "platform": "Coding Ninjas",
              "link": "https://www.codingninjas.com/studio/problems/count-of-smaller-numbers-after-self"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Fenwick%20Tree%20Range%20Query%20%26%20Point%20Update"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Fenwick%20Tree%20Range%20Query%20%26%20Point%20Update"
            }
          ],
          "prerequisites": [
            "Basics of Fenwick Tree"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Very High",
          "solveTime": "60-120 mins",
          "tc": "O(log N)",
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
              "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Fenwick Tree",
            "Hard",
            "Interview"
          ]
        }
      ]
    }
  ]
};
