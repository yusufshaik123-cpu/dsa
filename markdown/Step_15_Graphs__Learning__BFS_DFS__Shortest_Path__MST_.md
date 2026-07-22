# Graphs [Learning, BFS/DFS, Shortest Path, MST]

Detailed progress tracker for Step 15 of the Striver A2Z DSA Sheet.

---

## 📂 Lec 1: Learning Graph

### 📄 Graph Representation
- **Difficulty**: Easy
- **Problem Pattern**: Graph
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/print-adjacency-list/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/print-adjacency-list/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/print-adjacency-list/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Graph%20Representation)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Graph%20Representation)
- **Prerequisites**:
  - Requires: Basics of Graph
- **Companies**: Google, Amazon
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 20-30 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V + E)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/print-adjacency-list/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/print-adjacency-list/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/print-adjacency-list/1)
- **Learning Lists**: Not Included
- **Tags**: Graph, Easy, Interview

---

### 📄 Breadth First Search (BFS)
- **Difficulty**: Easy
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/bfs-traversal-of-graph/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Breadth%20First%20Search%20(BFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Breadth%20First%20Search%20(BFS))
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 20-30 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1)
- **Learning Lists**: Not Included
- **Tags**: BFS, Easy, Interview

---

### 📄 Depth First Search (DFS)
- **Difficulty**: Easy
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/dfs-traversal-of-graph/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Depth%20First%20Search%20(DFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Depth%20First%20Search%20(DFS))
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 20-30 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/dfs-traversal-of-graph/1)
- **Learning Lists**: Not Included
- **Tags**: DFS, Easy, Interview

---

### 📊 Topic Summary (Lec 1: Learning Graph)
- **Problems**: 3
- **Easy**: 3 | **Medium**: 0 | **Hard**: 0
- **Estimated Time**: 3 hours
- **Estimated Revision Time**: 1 hours

---

## 📂 Lec 2: BFS/DFS Problems

### 📄 Number of Provinces
- **Difficulty**: Medium
- **Problem Pattern**: BFS/DFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/number-of-provinces/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/number-of-provinces/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/number-of-provinces/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Number%20of%20Provinces)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Number%20of%20Provinces)
- **Prerequisites**:
  - Requires: Basics of BFS/DFS
- **Companies**: Google, Amazon
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V^2)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/number-of-provinces/)
  - [Related problem B](https://leetcode.com/problems/number-of-provinces/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/number-of-provinces/)
- **Learning Lists**: Not Included
- **Tags**: BFS/DFS, Medium, Interview

---

### 📄 Rotting Oranges
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/rotting-oranges/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/rotting-oranges/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/rotting-oranges/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Rotting%20Oranges)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Rotting%20Oranges)
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/rotting-oranges/)
  - [Related problem B](https://leetcode.com/problems/rotting-oranges/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/rotting-oranges/)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📄 Flood Fill
- **Difficulty**: Easy
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/flood-fill/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/flood-fill/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/flood-fill/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Flood%20Fill)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Flood%20Fill)
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon
- **Interview Frequency**: High
- **Estimated Solve Time**: 20-30 mins
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/flood-fill/)
  - [Related problem B](https://leetcode.com/problems/flood-fill/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/flood-fill/)
- **Learning Lists**: Not Included
- **Tags**: DFS, Easy, Interview

---

### 📄 Cycle Detection Undirected (BFS)
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/detect-cycle-in-an-undirected-graph/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Undirected%20(BFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Undirected%20(BFS))
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📄 Cycle Detection Undirected (DFS)
- **Difficulty**: Medium
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/detect-cycle-in-an-undirected-graph-dfs/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Undirected%20(DFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Undirected%20(DFS))
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph-dfs/1)
- **Learning Lists**: Not Included
- **Tags**: DFS, Medium, Interview

---

### 📄 0/1 Matrix (Distance to Nearest 0)
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/01-matrix/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/01-matrix/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/01-matrix/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+0%2F1%20Matrix%20(Distance%20to%20Nearest%200))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+0%2F1%20Matrix%20(Distance%20to%20Nearest%200))
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/01-matrix/)
  - [Related problem B](https://leetcode.com/problems/01-matrix/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/01-matrix/)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📄 Surrounded Regions
- **Difficulty**: Medium
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/surrounded-regions/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/surrounded-regions/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/surrounded-regions/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Surrounded%20Regions)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Surrounded%20Regions)
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Low
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/surrounded-regions/)
  - [Related problem B](https://leetcode.com/problems/surrounded-regions/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/surrounded-regions/)
- **Learning Lists**: Not Included
- **Tags**: DFS, Medium, Interview

---

### 📄 Number of Enclaves
- **Difficulty**: Medium
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/number-of-enclaves/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/number-of-enclaves/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/number-of-enclaves/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Number%20of%20Enclaves)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Number%20of%20Enclaves)
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/number-of-enclaves/)
  - [Related problem B](https://leetcode.com/problems/number-of-enclaves/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/number-of-enclaves/)
- **Learning Lists**: Not Included
- **Tags**: DFS, Medium, Interview

---

### 📄 Word Ladder I
- **Difficulty**: Hard
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/word-ladder/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/word-ladder/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/word-ladder/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Word%20Ladder%20I)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Ladder%20I)
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Low
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(N * WordLength * 26)
- **Space Complexity**: O(N)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/word-ladder/)
  - [Related problem B](https://leetcode.com/problems/word-ladder/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/word-ladder/)
- **Learning Lists**: Not Included
- **Tags**: BFS, Hard, Interview

---

### 📄 Word Ladder II
- **Difficulty**: Hard
- **Problem Pattern**: BFS/Backtracking
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/word-ladder-ii/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/word-ladder-ii/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/word-ladder-ii/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Word%20Ladder%20II)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Ladder%20II)
- **Prerequisites**:
  - Requires: Basics of BFS/Backtracking
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(Exponential)
- **Space Complexity**: O(Exponential)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/word-ladder-ii/)
  - [Related problem B](https://leetcode.com/problems/word-ladder-ii/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/word-ladder-ii/)
- **Learning Lists**: Not Included
- **Tags**: BFS/Backtracking, Hard, Interview

---

### 📄 Cycle Detection Directed (DFS)
- **Difficulty**: Medium
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/detect-cycle-in-a-directed-graph/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Directed%20(DFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Directed%20(DFS))
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)
- **Learning Lists**: Not Included
- **Tags**: DFS, Medium, Interview

---

### 📄 Topological Sort (DFS)
- **Difficulty**: Medium
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/topological-sort/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/topological-sort/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/topological-sort/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Topological%20Sort%20(DFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Topological%20Sort%20(DFS))
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/topological-sort/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/topological-sort/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/topological-sort/1)
- **Learning Lists**: Not Included
- **Tags**: DFS, Medium, Interview

---

### 📄 Kahn's Algorithm (Topological Sort BFS)
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/topological-sort-kahns/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/topological-sort-kahns/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/topological-sort-kahns/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Kahn's%20Algorithm%20(Topological%20Sort%20BFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Kahn's%20Algorithm%20(Topological%20Sort%20BFS))
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/topological-sort-kahns/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/topological-sort-kahns/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/topological-sort-kahns/1)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📄 Cycle Detection Directed (BFS)
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/detect-cycle-in-directed-bfs/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Cycle%20Detection%20Directed%20(BFS))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cycle%20Detection%20Directed%20(BFS))
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/detect-cycle-in-directed-bfs/1)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📊 Topic Summary (Lec 2: BFS/DFS Problems)
- **Problems**: 14
- **Easy**: 1 | **Medium**: 11 | **Hard**: 2
- **Estimated Time**: 13 hours
- **Estimated Revision Time**: 4 hours

---

## 📂 Lec 3: Shortest Path Algorithms

### 📄 Shortest Path in DAG
- **Difficulty**: Medium
- **Problem Pattern**: Topological Sort
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/shortest-path-in-directed-acyclic-graph/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Shortest%20Path%20in%20DAG)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Shortest%20Path%20in%20DAG)
- **Prerequisites**:
  - Requires: Basics of Topological Sort
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1)
- **Learning Lists**: Not Included
- **Tags**: Topological Sort, Medium, Interview

---

### 📄 Shortest Path in Undirected Graph
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/shortest-path-in-undirected-graph-having-unit-distance/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Shortest%20Path%20in%20Undirected%20Graph)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Shortest%20Path%20in%20Undirected%20Graph)
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📄 Dijkstra's Algorithm
- **Difficulty**: Medium
- **Problem Pattern**: Priority Queue
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/implementing-dijkstra-set-1-adjacency-matrix/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Dijkstra's%20Algorithm)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Dijkstra's%20Algorithm)
- **Prerequisites**:
  - Requires: Basics of Priority Queue
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(E log V)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1)
- **Learning Lists**: Not Included
- **Tags**: Priority Queue, Medium, Interview

---

### 📄 Shortest Path in Binary Matrix
- **Difficulty**: Medium
- **Problem Pattern**: BFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/shortest-path-in-binary-matrix/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Shortest%20Path%20in%20Binary%20Matrix)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Shortest%20Path%20in%20Binary%20Matrix)
- **Prerequisites**:
  - Requires: Basics of BFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Low
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
  - [Related problem B](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
- **Learning Lists**: Not Included
- **Tags**: BFS, Medium, Interview

---

### 📄 Path with Minimum Effort
- **Difficulty**: Medium
- **Problem Pattern**: Dijkstra
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/path-with-minimum-effort/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/path-with-minimum-effort/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/path-with-minimum-effort/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Path%20with%20Minimum%20Effort)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Path%20with%20Minimum%20Effort)
- **Prerequisites**:
  - Requires: Basics of Dijkstra
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N * M log(N*M))
- **Space Complexity**: O(N * M)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/path-with-minimum-effort/)
  - [Related problem B](https://leetcode.com/problems/path-with-minimum-effort/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/path-with-minimum-effort/)
- **Learning Lists**: Not Included
- **Tags**: Dijkstra, Medium, Interview

---

### 📄 Cheapest Flights Within K Stops
- **Difficulty**: Medium
- **Problem Pattern**: BFS/Dijkstra
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/cheapest-flights-within-k-stops/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Cheapest%20Flights%20Within%20K%20Stops)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cheapest%20Flights%20Within%20K%20Stops)
- **Prerequisites**:
  - Requires: Basics of BFS/Dijkstra
- **Companies**: Google, Amazon
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
  - [Related problem B](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- **Learning Lists**: Not Included
- **Tags**: BFS/Dijkstra, Medium, Interview

---

### 📄 Network Delay Time
- **Difficulty**: Medium
- **Problem Pattern**: Dijkstra
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/network-delay-time/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/network-delay-time/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/network-delay-time/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Network%20Delay%20Time)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Network%20Delay%20Time)
- **Prerequisites**:
  - Requires: Basics of Dijkstra
- **Companies**: Google, Amazon
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(E log V)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/network-delay-time/)
  - [Related problem B](https://leetcode.com/problems/network-delay-time/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/network-delay-time/)
- **Learning Lists**: Not Included
- **Tags**: Dijkstra, Medium, Interview

---

### 📄 Number of Ways to Arrive at Destination
- **Difficulty**: Hard
- **Problem Pattern**: Dijkstra
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/number-of-ways-to-arrive-at-destination/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Number%20of%20Ways%20to%20Arrive%20at%20Destination)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Number%20of%20Ways%20to%20Arrive%20at%20Destination)
- **Prerequisites**:
  - Requires: Basics of Dijkstra
- **Companies**: Google, Amazon
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(E log V)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
  - [Related problem B](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
- **Learning Lists**: Not Included
- **Tags**: Dijkstra, Hard, Interview

---

### 📄 Bellman Ford Algorithm
- **Difficulty**: Medium
- **Problem Pattern**: Graph
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/distance-from-the-source-bellman-ford-vector/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Bellman%20Ford%20Algorithm)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bellman%20Ford%20Algorithm)
- **Prerequisites**:
  - Requires: Basics of Graph
- **Companies**: Google, Amazon
- **Interview Frequency**: Low
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V * E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-vector/1)
- **Learning Lists**: Not Included
- **Tags**: Graph, Medium, Interview

---

### 📄 Floyd Warshall Algorithm
- **Difficulty**: Medium
- **Problem Pattern**: Matrix
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/floyd-warshall/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/floyd-warshall/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/floyd-warshall/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Floyd%20Warshall%20Algorithm)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Floyd%20Warshall%20Algorithm)
- **Prerequisites**:
  - Requires: Basics of Matrix
- **Companies**: Google, Amazon
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V^3)
- **Space Complexity**: O(V^2)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/floyd-warshall/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/floyd-warshall/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/floyd-warshall/1)
- **Learning Lists**: Not Included
- **Tags**: Matrix, Medium, Interview

---

### 📊 Topic Summary (Lec 3: Shortest Path Algorithms)
- **Problems**: 10
- **Easy**: 0 | **Medium**: 9 | **Hard**: 1
- **Estimated Time**: 21 hours
- **Estimated Revision Time**: 7 hours

---

## 📂 Lec 4: MST & Disjoint Set

### 📄 Prim's Algorithm (Minimum Spanning Tree)
- **Difficulty**: Medium
- **Problem Pattern**: Dijkstra
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/minimum-spanning-tree-prims/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Prim's%20Algorithm%20(Minimum%20Spanning%20Tree))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Prim's%20Algorithm%20(Minimum%20Spanning%20Tree))
- **Prerequisites**:
  - Requires: Basics of Dijkstra
- **Companies**: Google, Amazon
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(E log V)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-prims/1)
- **Learning Lists**: Not Included
- **Tags**: Dijkstra, Medium, Interview

---

### 📄 Kruskal's Algorithm
- **Difficulty**: Medium
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/minimum-spanning-tree-kruskals/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Kruskal's%20Algorithm)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Kruskal's%20Algorithm)
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(E log V)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/minimum-spanning-tree-kruskals/1)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Medium, Interview

---

### 📄 Disjoint Set (Union-Find)
- **Difficulty**: Easy
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/disjoint-set-union-find/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Disjoint%20Set%20(Union-Find))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Disjoint%20Set%20(Union-Find))
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 20-30 mins
- **Time Complexity**: O(Alpha(N))
- **Space Complexity**: O(N)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Easy, Interview

---

### 📄 Operations to Make Network Connected
- **Difficulty**: Medium
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/number-of-operations-to-make-network-connected/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Operations%20to%20Make%20Network%20Connected)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Operations%20to%20Make%20Network%20Connected)
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
  - [Related problem B](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Medium, Interview

---

### 📄 Most Stones Removed with Same Row or Column
- **Difficulty**: Medium
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/most-stones-removed-with-same-row-or-column/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column)
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
  - [Related problem B](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Medium, Interview

---

### 📄 Accounts Merge
- **Difficulty**: Medium
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/accounts-merge/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/accounts-merge/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/accounts-merge/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Accounts%20Merge)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Accounts%20Merge)
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(N log N)
- **Space Complexity**: O(N)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/accounts-merge/)
  - [Related problem B](https://leetcode.com/problems/accounts-merge/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/accounts-merge/)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Medium, Interview

---

### 📄 Number of Islands II
- **Difficulty**: Hard
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/number-of-islands-ii/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/number-of-islands-ii/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/number-of-islands-ii/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Number%20of%20Islands%20II)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Number%20of%20Islands%20II)
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: High
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(Q * Alpha(V))
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/number-of-islands-ii/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/number-of-islands-ii/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/number-of-islands-ii/1)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Hard, Interview

---

### 📄 Making a Large Island
- **Difficulty**: Hard
- **Problem Pattern**: Disjoint Set
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/making-a-large-island/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/making-a-large-island/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/making-a-large-island/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Making%20a%20Large%20Island)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Making%20a%20Large%20Island)
- **Prerequisites**:
  - Requires: Basics of Disjoint Set
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Low
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(N^2)
- **Space Complexity**: O(N^2)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/making-a-large-island/)
  - [Related problem B](https://leetcode.com/problems/making-a-large-island/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/making-a-large-island/)
- **Learning Lists**: Not Included
- **Tags**: Disjoint Set, Hard, Interview

---

### 📊 Topic Summary (Lec 4: MST & Disjoint Set)
- **Problems**: 8
- **Easy**: 1 | **Medium**: 5 | **Hard**: 2
- **Estimated Time**: 27 hours
- **Estimated Revision Time**: 9 hours

---

## 📂 Lec 5: Advanced Graph Concepts

### 📄 Bridges in Graph (Tarjan's)
- **Difficulty**: Hard
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://leetcode.com/problems/critical-connections-in-a-network/)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/critical-connections-in-a-network/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/critical-connections-in-a-network/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Bridges%20in%20Graph%20(Tarjan's))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bridges%20in%20Graph%20(Tarjan's))
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://leetcode.com/problems/critical-connections-in-a-network/)
  - [Related problem B](https://leetcode.com/problems/critical-connections-in-a-network/)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://leetcode.com/problems/critical-connections-in-a-network/)
- **Learning Lists**: Not Included
- **Tags**: DFS, Hard, Interview

---

### 📄 Articulation Points in Graph
- **Difficulty**: Hard
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/articulation-point-1/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/articulation-point-1/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/articulation-point-1/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Articulation%20Points%20in%20Graph)
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Articulation%20Points%20in%20Graph)
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon
- **Interview Frequency**: High
- **Estimated Solve Time**: 60-120 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/articulation-point-1/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/articulation-point-1/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/articulation-point-1/1)
- **Learning Lists**: Not Included
- **Tags**: DFS, Hard, Interview

---

### 📄 Kosaraju's Algorithm (SCC)
- **Difficulty**: Medium
- **Problem Pattern**: DFS
- **Official Problem Link**: [Primary Practice Link](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1)
- **Alternative Practice Links**:
  - [LeetCode](https://leetcode.com/problems/strongly-connected-components-kosarajus-algo/)
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/strivers-a2z-dsa-course/)
  - [Striver YouTube Video](https://www.youtube.com/results?search_query=striver+Kosaraju's%20Algorithm%20(SCC))
- **Alternative Video Resources**:
  - [NeetCode](https://www.youtube.com/results?search_query=neetcode+Kosaraju's%20Algorithm%20(SCC))
- **Prerequisites**:
  - Requires: Basics of DFS
- **Companies**: Google, Amazon, Microsoft, Meta
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 mins
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.
- **Hints**:
  - Hint 1: Analyze the problem using manual drawings for small inputs.
  - Hint 2: Consider using auxiliary data structures like hash maps or arrays to cache results.
  - Hint 3: Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays).
- **Similar Problems**:
  - [Related problem A](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1)
  - [Related problem B](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1)
- **Harder Follow-up Problems**:
  - [Advanced follow-up A](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1)
- **Learning Lists**: Not Included
- **Tags**: DFS, Medium, Interview

---

### 📊 Topic Summary (Lec 5: Advanced Graph Concepts)
- **Problems**: 3
- **Easy**: 0 | **Medium**: 1 | **Hard**: 2
- **Estimated Time**: 29 hours
- **Estimated Revision Time**: 9 hours

---

## 📈 Step 15 Dashboard & Summary

### 🏁 Lectures & Topics Covered
- **Lec 1: Learning Graph** - 3 Problems
- **Lec 2: BFS/DFS Problems** - 14 Problems
- **Lec 3: Shortest Path Algorithms** - 10 Problems
- **Lec 4: MST & Disjoint Set** - 8 Problems
- **Lec 5: Advanced Graph Concepts** - 3 Problems

### 📊 Aggregated Metrics
- **Total Problems**: 38
- **Easy Problems**: 5
- **Medium Problems**: 26
- **Hard Problems**: 7
- **Estimated Learning Time**: 29 hours
- **Estimated Revision Time**: 9 hours

### 🔑 Unlocked Concepts & Skills
- Advanced algorithmic approaches and structural mappings.
- Complex state calculations and optimizations.
