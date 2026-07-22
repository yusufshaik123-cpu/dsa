# Step 2: Learn Important Sorting Techniques

Detailed progress tracker for Step 2 of the Striver A2Z DSA Sheet.

---

## 📂 Lec 1: Sorting-I

### 📄 Selection Sort
- **Difficulty**: Easy
- **Problem Pattern**: Sorting
- **Official Problem Link**: [GeeksforGeeks - Selection Sort](https://www.geeksforgeeks.org/problems/selection-sort/1)
- **Alternative Practice Links**:
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/selection-sort/1)
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/selection-sort_624469)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/sorting/selection-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=HGk_ypEUj24)
- **Alternative Video Resources**:
  - [Abdul Bari (Selection Sort)](https://www.youtube.com/watch?v=CoN8F1ZdfG8)
- **Prerequisites**:
  - Requires: Arrays, Nested Loops
- **Companies**: TCS, Infosys, Wipro
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 20-30 minutes
- **Time Complexity**: O(N^2)
- **Space Complexity**: O(1)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Swapping elements unnecessarily when the minimum is already at the correct position, or starting the inner loop index incorrectly.
- **Hints**:
  - Hint 1: Select the minimum element from the unsorted subarray and swap it with the element at the beginning of the unsorted subarray.
  - Hint 2: Iterate from index 0 to N-2 as the outer loop.
  - Hint 3: The inner loop starts from i up to N-1 to find the minimum element in the remaining unsorted portion.
- **Similar Problems**:
  - [Sort Colors](https://leetcode.com/problems/sort-colors/)
- **Harder Follow-up Problems**:
  - [Kth Largest Element](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- **Learning Lists**: Not Included
- **Tags**: Sorting, Arrays, Easy

---

### 📄 Bubble Sort
- **Difficulty**: Easy
- **Problem Pattern**: Sorting
- **Official Problem Link**: [GeeksforGeeks - Bubble Sort](https://www.geeksforgeeks.org/problems/bubble-sort/1)
- **Alternative Practice Links**:
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/bubble-sort/1)
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/bubble-sort_624470)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/sorting/bubble-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=HGk_ypEUj24)
- **Alternative Video Resources**:
  - [Abdul Bari (Bubble Sort)](https://www.youtube.com/watch?v=Vca808JTbI8)
- **Prerequisites**:
  - Requires: Arrays, Nested Loops
- **Companies**: Cognizant, Accenture
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 20-30 minutes
- **Time Complexity**: O(N^2)
- **Space Complexity**: O(1)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Continuing to run the outer loop even if the array is already sorted, resulting in redundant iterations.
- **Hints**:
  - Hint 1: Repeatedly swap adjacent elements if they are in the wrong order.
  - Hint 2: In each pass, the largest unsorted element bubbles up to its correct position at the end.
  - Hint 3: Optimize by adding a flag to check if any swap occurred in a pass. If no swaps occurred, the array is already sorted.
- **Similar Problems**:
  - [Sort Colors](https://leetcode.com/problems/sort-colors/)
- **Harder Follow-up Problems**: None
- **Learning Lists**: Not Included
- **Tags**: Sorting, Arrays, Easy

---

### 📄 Insertion Sort
- **Difficulty**: Easy
- **Problem Pattern**: Sorting
- **Official Problem Link**: [GeeksforGeeks - Insertion Sort](https://www.geeksforgeeks.org/problems/insertion-sort/1)
- **Alternative Practice Links**:
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/insertion-sort/1)
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/insertion-sort_624459)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/sorting/insertion-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=HGk_ypEUj24)
- **Alternative Video Resources**:
  - [Abdul Bari (Insertion Sort)](https://www.youtube.com/watch?v=i-SKeOcBwko)
- **Prerequisites**:
  - Requires: Arrays, Nested Loops
- **Companies**: Amazon, Cisco
- **Interview Frequency**: Medium
- **Estimated Solve Time**: 20-30 minutes
- **Time Complexity**: O(N^2)
- **Space Complexity**: O(1)
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrectly shifting array elements or overwriting values without copying the key element.
- **Hints**:
  - Hint 1: Build the sorted array one element at a time by consuming one input element per repetition and placing it in its proper position.
  - Hint 2: Start the outer loop from index 1. Store the element at index i as the key.
  - Hint 3: Shift elements of the sorted segment (to the left of key) that are larger than the key one position to the right.
- **Similar Problems**:
  - [Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)
- **Harder Follow-up Problems**: None
- **Learning Lists**: Not Included
- **Tags**: Sorting, Arrays, Easy

### 📊 Topic Summary (Lec 1: Sorting-I)
- **Problems**: 3
- **Easy**: 3 | **Medium**: 0 | **Hard**: 0
- **Estimated Time**: 1.5 hours
- **Estimated Revision Time**: 0.5 hours

---

## 📂 Lec 2: Sorting-II

### 📄 Merge Sort
- **Difficulty**: Medium
- **Problem Pattern**: Divide & Conquer
- **Official Problem Link**: [GeeksforGeeks - Merge Sort](https://www.geeksforgeeks.org/problems/merge-sort/1)
- **Alternative Practice Links**:
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/merge-sort/1)
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/merge-sort_920442)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/data-structure/merge-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=ogkf3tD3ee0)
- **Alternative Video Resources**:
  - [Abdul Bari (Merge Sort)](https://www.youtube.com/watch?v=TzeBrDU-JaY)
- **Prerequisites**:
  - Requires: Recursion, Divide & Conquer basic concepts
- **Companies**: Google, Microsoft, Amazon, Goldman Sachs
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 minutes
- **Time Complexity**: O(N log N)
- **Space Complexity**: O(N) auxiliary space
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Using invalid midpoints (like (low+high)/2 which can overflow) or forgetting to copy elements back from the temporary array.
- **Hints**:
  - Hint 1: Divide the array into two halves recursively until each subarray has size 1.
  - Hint 2: Merge two sorted halves by comparing elements and building a temporary sorted array.
  - Hint 3: Copy the elements from the temporary array back into the original array.
- **Similar Problems**:
  - [Sort An Array](https://leetcode.com/problems/sort-an-array/)
  - [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
- **Harder Follow-up Problems**:
  - [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- **Learning Lists**: LeetCode Top Interview 150
- **Tags**: Sorting, Divide-Conquer, Recursion, Medium

---

### 📄 Recursive Bubble Sort
- **Difficulty**: Easy
- **Problem Pattern**: Recursion
- **Official Problem Link**: [GeeksforGeeks - Recursive Bubble Sort](https://www.geeksforgeeks.org/problems/recursive-bubble-sort/0)
- **Alternative Practice Links**:
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/bubble-sort_624470)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/sorting/recursive-bubble-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=yVdKa8dnKiE)
- **Alternative Video Resources**: None
- **Prerequisites**:
  - Requires: Bubble Sort, Recursion
- **Companies**: TCS, Accenture
- **Interview Frequency**: Low
- **Estimated Solve Time**: 20-30 minutes
- **Time Complexity**: O(N^2)
- **Space Complexity**: O(N) recursion stack space
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Forgetting the base case (size N <= 1) causing a Stack Overflow.
- **Hints**:
  - Hint 1: Perform one pass of bubble sort to move the largest element to the end.
  - Hint 2: Recursively call the sorting function on the remaining N-1 elements.
  - Hint 3: Base Case: If the array size is 1, return.
- **Similar Problems**: None
- **Harder Follow-up Problems**: None
- **Learning Lists**: Not Included
- **Tags**: Sorting, Recursion, Easy

---

### 📄 Recursive Insertion Sort
- **Difficulty**: Easy
- **Problem Pattern**: Recursion
- **Official Problem Link**: [GeeksforGeeks - Recursive Insertion Sort](https://www.geeksforgeeks.org/problems/recursive-insertion-sort/0)
- **Alternative Practice Links**:
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/insertion-sort_624459)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/sorting/recursive-insertion-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=yVdKa8dnKiE)
- **Alternative Video Resources**: None
- **Prerequisites**:
  - Requires: Insertion Sort, Recursion
- **Companies**: Infosys
- **Interview Frequency**: Low
- **Estimated Solve Time**: 20-30 minutes
- **Time Complexity**: O(N^2)
- **Space Complexity**: O(N) recursion stack space
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Not passing the correct index/size recursively, or incorrect shifts in the recursive stack.
- **Hints**:
  - Hint 1: Recursively sort the first N-1 elements.
  - Hint 2: Insert the Nth element into its correct sorted position in the remaining subarray.
  - Hint 3: Base Case: If index is N, return.
- **Similar Problems**: None
- **Harder Follow-up Problems**: None
- **Learning Lists**: Not Included
- **Tags**: Sorting, Recursion, Easy

---

### 📄 Quick Sort
- **Difficulty**: Medium
- **Problem Pattern**: Divide & Conquer
- **Official Problem Link**: [GeeksforGeeks - Quick Sort](https://www.geeksforgeeks.org/problems/quick-sort/1)
- **Alternative Practice Links**:
  - [GeeksforGeeks](https://www.geeksforgeeks.org/problems/quick-sort/1)
  - [Coding Ninjas](https://www.codingninjas.com/studio/problems/quick-sort_980589)
- **Striver Solution**:
  - [TakeUForward Article](https://takeuforward.org/data-structure/quick-sort-algorithm/)
  - [Striver YouTube Video](https://www.youtube.com/watch?v=WIrA4YexLRQ)
- **Alternative Video Resources**:
  - [Abdul Bari (Quick Sort)](https://www.youtube.com/watch?v=7h1s2SojIRw)
- **Prerequisites**:
  - Requires: Recursion, Partition index logic
- **Companies**: Google, Facebook, Amazon, Bloomberg, Atlassian
- **Interview Frequency**: Very High
- **Estimated Solve Time**: 30-60 minutes
- **Time Complexity**: O(N log N) average case, O(N^2) worst case
- **Space Complexity**: O(log N) stack space
- **Status**: ☐ Not Started
- **Personal Confidence**: ⭐⭐⭐⭐⭐
- **Notes**: 
- **Common Mistakes**: Incorrect partition boundary indexes or poorly selected pivot resulting in performance degradation to O(N^2).
- **Hints**:
  - Hint 1: Pick a pivot element (e.g. first element, last element, or random).
  - Hint 2: Rearrange the array so that all elements smaller than pivot go to the left and larger go to the right (partition process).
  - Hint 3: Recursively apply quick sort to left and right subarrays.
- **Similar Problems**:
  - [Sort An Array](https://leetcode.com/problems/sort-an-array/)
- **Harder Follow-up Problems**:
  - [Kth Largest Element](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- **Learning Lists**: LeetCode Top Interview 150
- **Tags**: Sorting, Divide-Conquer, Recursion, Medium

### 📊 Topic Summary (Lec 2: Sorting-II)
- **Problems**: 4
- **Easy**: 2 | **Medium**: 2 | **Hard**: 0
- **Estimated Time**: 3 hours
- **Estimated Revision Time**: 1.5 hours

---

## 📈 Step 2 Dashboard & Summary

### 🏁 Lectures & Topics Covered
- **Lec 1: Sorting-I (Basic Sorting)** - 3 Problems (Selection, Bubble, Insertion Sort)
- **Lec 2: Sorting-II (Advanced Sorting)** - 4 Problems (Merge, Recursive Bubble, Recursive Insertion, Quick Sort)

### 📊 Aggregated Metrics
- **Total Problems**: 7
- **Easy Problems**: 5
- **Medium Problems**: 2
- **Hard Problems**: 0
- **Estimated Learning Time**: 4.5 hours
- **Estimated Revision Time**: 2 hours

### 🔑 Unlocked Concepts & Skills
- In-place element comparison and index tracking.
- Shifting mechanisms and stable/unstable sorting properties.
- Divide & Conquer recursive strategies.
- Two-pointer sorting merges and partitioning processes.
- Tree call optimizations and recursion stack bounds.
