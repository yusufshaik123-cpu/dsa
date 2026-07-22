export const step15Data = {
  "stepNumber": 15,
  "stepTitle": "Graphs [Learning, BFS/DFS, Shortest Path, MST]",
  "lectures": [
    {
      "lectureNumber": 1,
      "lectureTitle": "Learning Graph",
      "problems": [
        {
          "id": "s15_l1_p1",
          "name": "Graph Representation",
          "difficulty": "Easy",
          "pattern": "Graph",
          "primaryLink": "https://www.geeksforgeeks.org/problems/print-adjacency-list/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/print-adjacency-list/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/print-adjacency-list/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Graph%20Representation"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Graph%20Representation"
            }
          ],
          "prerequisites": [
            "Basics of Graph"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Very High",
          "solveTime": "20-30 mins",
          "tc": "O(V + E)",
          "sc": "O(V + E)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/print-adjacency-list/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/print-adjacency-list/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/print-adjacency-list/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Graph",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s15_l1_p2",
          "name": "Breadth First Search (BFS)",
          "difficulty": "Easy",
          "pattern": "BFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/bfs-traversal-of-graph/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Breadth%20First%20Search%20(BFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Breadth%20First%20Search%20(BFS)"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Medium",
          "solveTime": "20-30 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s15_l1_p3",
          "name": "Depth First Search (DFS)",
          "difficulty": "Easy",
          "pattern": "DFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/dfs-traversal-of-graph/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Depth%20First%20Search%20(DFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Depth%20First%20Search%20(DFS)"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "20-30 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Easy",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 2,
      "lectureTitle": "BFS/DFS Problems",
      "problems": [
        {
          "id": "s15_l2_p1",
          "name": "Number of Provinces",
          "difficulty": "Medium",
          "pattern": "BFS/DFS",
          "primaryLink": "https://leetcode.com/problems/number-of-provinces/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-provinces/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-provinces/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Number%20of%20Provinces"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Number%20of%20Provinces"
            }
          ],
          "prerequisites": [
            "Basics of BFS/DFS"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(V^2)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/number-of-provinces/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/number-of-provinces/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/number-of-provinces/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS/DFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p2",
          "name": "Rotting Oranges",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://leetcode.com/problems/rotting-oranges/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/rotting-oranges/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/rotting-oranges/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Rotting%20Oranges"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Rotting%20Oranges"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
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
              "link": "https://leetcode.com/problems/rotting-oranges/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/rotting-oranges/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/rotting-oranges/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p3",
          "name": "Flood Fill",
          "difficulty": "Easy",
          "pattern": "DFS",
          "primaryLink": "https://leetcode.com/problems/flood-fill/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/flood-fill/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/flood-fill/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Flood%20Fill"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Flood%20Fill"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "20-30 mins",
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
              "link": "https://leetcode.com/problems/flood-fill/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/flood-fill/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/flood-fill/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p4",
          "name": "Cycle Detection Undirected (BFS)",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/detect-cycle-in-an-undirected-graph/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Undirected%20(BFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Undirected%20(BFS)"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p5",
          "name": "Cycle Detection Undirected (DFS)",
          "difficulty": "Medium",
          "pattern": "DFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/detect-cycle-in-an-undirected-graph-dfs/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Undirected%20(DFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Undirected%20(DFS)"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p6",
          "name": "0/1 Matrix (Distance to Nearest 0)",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://leetcode.com/problems/01-matrix/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/01-matrix/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/01-matrix/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+0%2F1%20Matrix%20(Distance%20to%20Nearest%200)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+0%2F1%20Matrix%20(Distance%20to%20Nearest%200)"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
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
              "link": "https://leetcode.com/problems/01-matrix/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/01-matrix/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/01-matrix/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p7",
          "name": "Surrounded Regions",
          "difficulty": "Medium",
          "pattern": "DFS",
          "primaryLink": "https://leetcode.com/problems/surrounded-regions/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/surrounded-regions/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/surrounded-regions/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Surrounded%20Regions"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Surrounded%20Regions"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
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
              "link": "https://leetcode.com/problems/surrounded-regions/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/surrounded-regions/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/surrounded-regions/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p8",
          "name": "Number of Enclaves",
          "difficulty": "Medium",
          "pattern": "DFS",
          "primaryLink": "https://leetcode.com/problems/number-of-enclaves/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-enclaves/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-enclaves/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Number%20of%20Enclaves"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Number%20of%20Enclaves"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
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
              "link": "https://leetcode.com/problems/number-of-enclaves/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/number-of-enclaves/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/number-of-enclaves/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p9",
          "name": "Word Ladder I",
          "difficulty": "Hard",
          "pattern": "BFS",
          "primaryLink": "https://leetcode.com/problems/word-ladder/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/word-ladder/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/word-ladder/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Word%20Ladder%20I"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Word%20Ladder%20I"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
          "solveTime": "60-120 mins",
          "tc": "O(N * WordLength * 26)",
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
              "link": "https://leetcode.com/problems/word-ladder/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/word-ladder/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/word-ladder/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p10",
          "name": "Word Ladder II",
          "difficulty": "Hard",
          "pattern": "BFS/Backtracking",
          "primaryLink": "https://leetcode.com/problems/word-ladder-ii/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/word-ladder-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/word-ladder-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Word%20Ladder%20II"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Word%20Ladder%20II"
            }
          ],
          "prerequisites": [
            "Basics of BFS/Backtracking"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "60-120 mins",
          "tc": "O(Exponential)",
          "sc": "O(Exponential)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/word-ladder-ii/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/word-ladder-ii/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/word-ladder-ii/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS/Backtracking",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p11",
          "name": "Cycle Detection Directed (DFS)",
          "difficulty": "Medium",
          "pattern": "DFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/detect-cycle-in-a-directed-graph/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Directed%20(DFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Directed%20(DFS)"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p12",
          "name": "Topological Sort (DFS)",
          "difficulty": "Medium",
          "pattern": "DFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/topological-sort/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/topological-sort/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Topological%20Sort%20(DFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Topological%20Sort%20(DFS)"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p13",
          "name": "Kahn's Algorithm (Topological Sort BFS)",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/topological-sort-kahns/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/topological-sort-kahns/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort-kahns/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Kahn's%20Algorithm%20(Topological%20Sort%20BFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Kahn's%20Algorithm%20(Topological%20Sort%20BFS)"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort-kahns/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort-kahns/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/topological-sort-kahns/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l2_p14",
          "name": "Cycle Detection Directed (BFS)",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/detect-cycle-in-directed-bfs/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Directed%20(BFS)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Directed%20(BFS)"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 3,
      "lectureTitle": "Shortest Path Algorithms",
      "problems": [
        {
          "id": "s15_l3_p1",
          "name": "Shortest Path in DAG",
          "difficulty": "Medium",
          "pattern": "Topological Sort",
          "primaryLink": "https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/shortest-path-in-directed-acyclic-graph/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Shortest%20Path%20in%20DAG"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Shortest%20Path%20in%20DAG"
            }
          ],
          "prerequisites": [
            "Basics of Topological Sort"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Topological Sort",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p2",
          "name": "Shortest Path in Undirected Graph",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/shortest-path-in-undirected-graph-having-unit-distance/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Shortest%20Path%20in%20Undirected%20Graph"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Shortest%20Path%20in%20Undirected%20Graph"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p3",
          "name": "Dijkstra's Algorithm",
          "difficulty": "Medium",
          "pattern": "Priority Queue",
          "primaryLink": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/implementing-dijkstra-set-1-adjacency-matrix/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Dijkstra's%20Algorithm"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Dijkstra's%20Algorithm"
            }
          ],
          "prerequisites": [
            "Basics of Priority Queue"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(E log V)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Priority Queue",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p4",
          "name": "Shortest Path in Binary Matrix",
          "difficulty": "Medium",
          "pattern": "BFS",
          "primaryLink": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/shortest-path-in-binary-matrix/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Shortest%20Path%20in%20Binary%20Matrix"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Shortest%20Path%20in%20Binary%20Matrix"
            }
          ],
          "prerequisites": [
            "Basics of BFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Low",
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
              "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p5",
          "name": "Path with Minimum Effort",
          "difficulty": "Medium",
          "pattern": "Dijkstra",
          "primaryLink": "https://leetcode.com/problems/path-with-minimum-effort/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/path-with-minimum-effort/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/path-with-minimum-effort/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Path%20with%20Minimum%20Effort"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Path%20with%20Minimum%20Effort"
            }
          ],
          "prerequisites": [
            "Basics of Dijkstra"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(N * M log(N*M))",
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
              "link": "https://leetcode.com/problems/path-with-minimum-effort/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/path-with-minimum-effort/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/path-with-minimum-effort/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Dijkstra",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p6",
          "name": "Cheapest Flights Within K Stops",
          "difficulty": "Medium",
          "pattern": "BFS/Dijkstra",
          "primaryLink": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/cheapest-flights-within-k-stops/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Cheapest%20Flights%20Within%20K%20Stops"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Cheapest%20Flights%20Within%20K%20Stops"
            }
          ],
          "prerequisites": [
            "Basics of BFS/Dijkstra"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "BFS/Dijkstra",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p7",
          "name": "Network Delay Time",
          "difficulty": "Medium",
          "pattern": "Dijkstra",
          "primaryLink": "https://leetcode.com/problems/network-delay-time/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/network-delay-time/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/network-delay-time/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Network%20Delay%20Time"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Network%20Delay%20Time"
            }
          ],
          "prerequisites": [
            "Basics of Dijkstra"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(E log V)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/network-delay-time/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/network-delay-time/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/network-delay-time/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Dijkstra",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p8",
          "name": "Number of Ways to Arrive at Destination",
          "difficulty": "Hard",
          "pattern": "Dijkstra",
          "primaryLink": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-ways-to-arrive-at-destination/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Number%20of%20Ways%20to%20Arrive%20at%20Destination"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Number%20of%20Ways%20to%20Arrive%20at%20Destination"
            }
          ],
          "prerequisites": [
            "Basics of Dijkstra"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Medium",
          "solveTime": "60-120 mins",
          "tc": "O(E log V)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Dijkstra",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p9",
          "name": "Bellman Ford Algorithm",
          "difficulty": "Medium",
          "pattern": "Graph",
          "primaryLink": "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/distance-from-the-source-bellman-ford-vector/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Bellman%20Ford%20Algorithm"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Bellman%20Ford%20Algorithm"
            }
          ],
          "prerequisites": [
            "Basics of Graph"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "Low",
          "solveTime": "30-60 mins",
          "tc": "O(V * E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Graph",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l3_p10",
          "name": "Floyd Warshall Algorithm",
          "difficulty": "Medium",
          "pattern": "Matrix",
          "primaryLink": "https://www.geeksforgeeks.org/problems/floyd-warshall/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/floyd-warshall/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/floyd-warshall/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Floyd%20Warshall%20Algorithm"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Floyd%20Warshall%20Algorithm"
            }
          ],
          "prerequisites": [
            "Basics of Matrix"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(V^3)",
          "sc": "O(V^2)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/floyd-warshall/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/floyd-warshall/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/floyd-warshall/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Matrix",
            "Medium",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 4,
      "lectureTitle": "MST & Disjoint Set",
      "problems": [
        {
          "id": "s15_l4_p1",
          "name": "Prim's Algorithm (Minimum Spanning Tree)",
          "difficulty": "Medium",
          "pattern": "Dijkstra",
          "primaryLink": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-spanning-tree-prims/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Prim's%20Algorithm%20(Minimum%20Spanning%20Tree)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Prim's%20Algorithm%20(Minimum%20Spanning%20Tree)"
            }
          ],
          "prerequisites": [
            "Basics of Dijkstra"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(E log V)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Dijkstra",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p2",
          "name": "Kruskal's Algorithm",
          "difficulty": "Medium",
          "pattern": "Disjoint Set",
          "primaryLink": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/minimum-spanning-tree-kruskals/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Kruskal's%20Algorithm"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Kruskal's%20Algorithm"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
          "tc": "O(E log V)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p3",
          "name": "Disjoint Set (Union-Find)",
          "difficulty": "Easy",
          "pattern": "Disjoint Set",
          "primaryLink": "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/disjoint-set-union-find/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Disjoint%20Set%20(Union-Find)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Disjoint%20Set%20(Union-Find)"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "20-30 mins",
          "tc": "O(Alpha(N))",
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
              "link": "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Easy",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p4",
          "name": "Operations to Make Network Connected",
          "difficulty": "Medium",
          "pattern": "Disjoint Set",
          "primaryLink": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-operations-to-make-network-connected/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Operations%20to%20Make%20Network%20Connected"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Operations%20to%20Make%20Network%20Connected"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Medium",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p5",
          "name": "Most Stones Removed with Same Row or Column",
          "difficulty": "Medium",
          "pattern": "Disjoint Set",
          "primaryLink": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/most-stones-removed-with-same-row-or-column/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "30-60 mins",
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
              "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p6",
          "name": "Accounts Merge",
          "difficulty": "Medium",
          "pattern": "Disjoint Set",
          "primaryLink": "https://leetcode.com/problems/accounts-merge/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/accounts-merge/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/accounts-merge/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Accounts%20Merge"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Accounts%20Merge"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
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
              "link": "https://leetcode.com/problems/accounts-merge/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/accounts-merge/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/accounts-merge/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Medium",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p7",
          "name": "Number of Islands II",
          "difficulty": "Hard",
          "pattern": "Disjoint Set",
          "primaryLink": "https://www.geeksforgeeks.org/problems/number-of-islands-ii/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/number-of-islands-ii/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/number-of-islands-ii/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Number%20of%20Islands%20II"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Number%20of%20Islands%20II"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "High",
          "solveTime": "60-120 mins",
          "tc": "O(Q * Alpha(V))",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/number-of-islands-ii/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/number-of-islands-ii/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/number-of-islands-ii/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s15_l4_p8",
          "name": "Making a Large Island",
          "difficulty": "Hard",
          "pattern": "Disjoint Set",
          "primaryLink": "https://leetcode.com/problems/making-a-large-island/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/making-a-large-island/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/making-a-large-island/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Making%20a%20Large%20Island"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Making%20a%20Large%20Island"
            }
          ],
          "prerequisites": [
            "Basics of Disjoint Set"
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
              "link": "https://leetcode.com/problems/making-a-large-island/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/making-a-large-island/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/making-a-large-island/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "Disjoint Set",
            "Hard",
            "Interview"
          ]
        }
      ]
    },
    {
      "lectureNumber": 5,
      "lectureTitle": "Advanced Graph Concepts",
      "problems": [
        {
          "id": "s15_l5_p1",
          "name": "Bridges in Graph (Tarjan's)",
          "difficulty": "Hard",
          "pattern": "DFS",
          "primaryLink": "https://leetcode.com/problems/critical-connections-in-a-network/",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/critical-connections-in-a-network/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Bridges%20in%20Graph%20(Tarjan's)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Bridges%20in%20Graph%20(Tarjan's)"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft"
          ],
          "frequency": "Medium",
          "solveTime": "60-120 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
            },
            {
              "name": "Related problem B",
              "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s15_l5_p2",
          "name": "Articulation Points in Graph",
          "difficulty": "Hard",
          "pattern": "DFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/articulation-point-1/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/articulation-point-1/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/articulation-point-1/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Articulation%20Points%20in%20Graph"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Articulation%20Points%20in%20Graph"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon"
          ],
          "frequency": "High",
          "solveTime": "60-120 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/articulation-point-1/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/articulation-point-1/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/articulation-point-1/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Hard",
            "Interview"
          ]
        },
        {
          "id": "s15_l5_p3",
          "name": "Kosaraju's Algorithm (SCC)",
          "difficulty": "Medium",
          "pattern": "DFS",
          "primaryLink": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
          "alternativeLinks": [
            {
              "platform": "LeetCode",
              "link": "https://leetcode.com/problems/strongly-connected-components-kosarajus-algo/"
            },
            {
              "platform": "GeeksforGeeks",
              "link": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
            }
          ],
          "striverSolution": {
            "article": "https://takeuforward.org/strivers-a2z-dsa-course/",
            "video": "https://www.youtube.com/results?search_query=striver+Kosaraju's%20Algorithm%20(SCC)"
          },
          "alternativeVideos": [
            {
              "name": "NeetCode",
              "link": "https://www.youtube.com/results?search_query=neetcode+Kosaraju's%20Algorithm%20(SCC)"
            }
          ],
          "prerequisites": [
            "Basics of DFS"
          ],
          "companies": [
            "Google",
            "Amazon",
            "Microsoft",
            "Meta"
          ],
          "frequency": "Very High",
          "solveTime": "30-60 mins",
          "tc": "O(V + E)",
          "sc": "O(V)",
          "commonMistakes": "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
          "hints": [
            "Analyze the problem using manual drawings for small inputs.",
            "Consider using auxiliary data structures like hash maps or arrays to cache results.",
            "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
          ],
          "similarProblems": [
            {
              "name": "Related problem A",
              "link": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
            },
            {
              "name": "Related problem B",
              "link": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
            }
          ],
          "harderFollowUps": [
            {
              "name": "Advanced follow-up A",
              "link": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
            }
          ],
          "learningLists": "Not Included",
          "tags": [
            "DFS",
            "Medium",
            "Interview"
          ]
        }
      ]
    }
  ]
};
