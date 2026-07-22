import fs from 'fs';
import path from 'path';

// Master catalog for all steps (3 to 18)
const stepsCatalog = [
  {
    stepNumber: 3,
    stepTitle: "Solve Problems on Arrays [Easy -> Medium -> Hard]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Easy",
        problems: [
          { name: "Largest Element in Array", slug: "largest-element", primary: "gfg", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Second Largest Element in Array", slug: "second-largest", primary: "gfg", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Check if Array is Sorted", slug: "check-if-array-is-sorted", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Remove Duplicates from Sorted Array", slug: "remove-duplicates-from-sorted-array", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Left Rotate Array by One", slug: "left-rotate-array-by-one", primary: "codingninjas", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Left Rotate Array by D Places", slug: "rotate-array", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Move Zeroes to End", slug: "move-zeroes", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Linear Search", slug: "linear-search", primary: "codingninjas", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Find Union of Two Sorted Arrays", slug: "union-of-two-sorted-arrays", primary: "gfg", pat: "Array", diff: "Easy", tc: "O(N+M)", sc: "O(N+M)" },
          { name: "Find Missing Number", slug: "missing-number", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Max Consecutive Ones", slug: "max-consecutive-ones", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Single Number", slug: "single-number", primary: "leetcode", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Longest Subarray with Sum K (Positives)", slug: "longest-subarray-with-sum-k", primary: "codingninjas", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Longest Subarray with Sum K (Positives + Negatives)", slug: "longest-subarray-with-sum-k-pos-neg", primary: "codingninjas", pat: "Array", diff: "Easy", tc: "O(N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Medium",
        problems: [
          { name: "Two Sum", slug: "two-sum", primary: "leetcode", pat: "Array/HashMap", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Sort Colors (0s, 1s, and 2s)", slug: "sort-colors", primary: "leetcode", pat: "Two Pointer", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Majority Element (> N/2 times)", slug: "majority-element", primary: "leetcode", pat: "Math/Array", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Maximum Subarray Sum (Kadane's)", slug: "maximum-subarray", primary: "leetcode", pat: "Array", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Print Maximum Subarray", slug: "print-maximum-subarray", primary: "codingninjas", pat: "Array", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Stock Buy and Sell", slug: "best-time-to-buy-and-sell-stock", primary: "leetcode", pat: "Array", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Rearrange Array Elements by Sign", slug: "rearrange-array-elements-by-sign", primary: "leetcode", pat: "Two Pointer", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Next Permutation", slug: "next-permutation", primary: "leetcode", pat: "Array", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Leaders in an Array", slug: "leaders-in-an-array", primary: "gfg", pat: "Array", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence", primary: "leetcode", pat: "HashSet", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Set Matrix Zeroes", slug: "set-matrix-zeroes", primary: "leetcode", pat: "Matrix", diff: "Medium", tc: "O(N*M)", sc: "O(1)" },
          { name: "Rotate Matrix by 90 Degrees", slug: "rotate-image", primary: "leetcode", pat: "Matrix", diff: "Medium", tc: "O(N^2)", sc: "O(1)" },
          { name: "Spiral Matrix", slug: "spiral-matrix", primary: "leetcode", pat: "Matrix", diff: "Medium", tc: "O(N*M)", sc: "O(1)" },
          { name: "Subarray Sum Equals K", slug: "subarray-sum-equals-k", primary: "leetcode", pat: "HashMap", diff: "Medium", tc: "O(N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Hard",
        problems: [
          { name: "Pascal's Triangle", slug: "pascals-triangle", primary: "leetcode", pat: "Array", diff: "Hard", tc: "O(N^2)", sc: "O(1)" },
          { name: "Majority Element (> N/3 times)", slug: "majority-element-ii", primary: "leetcode", pat: "Math/Array", diff: "Hard", tc: "O(N)", sc: "O(1)" },
          { name: "3-Sum", slug: "3sum", primary: "leetcode", pat: "Two Pointer", diff: "Hard", tc: "O(N^2)", sc: "O(1)" },
          { name: "4-Sum", slug: "4sum", primary: "leetcode", pat: "Two Pointer", diff: "Hard", tc: "O(N^3)", sc: "O(1)" },
          { name: "Longest Subarray with 0 Sum", slug: "largest-subarray-with-0-sum", primary: "gfg", pat: "HashMap", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Subarrays with XOR K", slug: "subarrays-with-xor-k", primary: "codingninjas", pat: "HashMap", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Merge Overlapping Intervals", slug: "merge-intervals", primary: "leetcode", pat: "Sorting", diff: "Hard", tc: "O(N log N)", sc: "O(1)" },
          { name: "Merge Sorted Arrays without Extra Space", slug: "merge-sorted-array", primary: "leetcode", pat: "Two Pointer", diff: "Hard", tc: "O((N+M) log(N+M))", sc: "O(1)" },
          { name: "Find Duplicate and Missing Number", slug: "missing-and-repeating", primary: "codingninjas", pat: "Math/Hashing", diff: "Hard", tc: "O(N)", sc: "O(1)" },
          { name: "Number of Inversions", slug: "inversion-of-array", primary: "gfg", pat: "Merge Sort", diff: "Hard", tc: "O(N log N)", sc: "O(N)" },
          { name: "Reverse Pairs", slug: "reverse-pairs", primary: "leetcode", pat: "Merge Sort", diff: "Hard", tc: "O(N log N)", sc: "O(N)" },
          { name: "Maximum Product Subarray", slug: "maximum-product-subarray", primary: "leetcode", pat: "Dynamic Programming", diff: "Hard", tc: "O(N)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 4,
    stepTitle: "Binary Search [1D, 2D, Search Space]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "BS on 1D Arrays",
        problems: [
          { name: "Binary Search", slug: "binary-search", primary: "leetcode", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Lower Bound Implementation", slug: "implement-lower-bound", primary: "codingninjas", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Upper Bound Implementation", slug: "implement-upper-bound", primary: "codingninjas", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Search Insert Position", slug: "search-insert-position", primary: "leetcode", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Floor and Ceil in Sorted Array", slug: "floor-ceil", primary: "codingninjas", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "First and Last Occurrence of Key", slug: "find-first-and-last-position-of-element-in-sorted-array", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Count Occurrences in Sorted Array", slug: "count-occurrences", primary: "gfg", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Search in Rotated Sorted Array I", slug: "search-in-rotated-sorted-array", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Search in Rotated Sorted Array II", slug: "search-in-rotated-sorted-array-ii", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Find Minimum in Rotated Sorted Array", slug: "find-minimum-in-rotated-sorted-array", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Single Element in Sorted Array", slug: "single-element-in-a-sorted-array", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Find Peak Element", slug: "find-peak-element", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "BS on Answers",
        problems: [
          { name: "Square Root of an Integer", slug: "square-root", primary: "gfg", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Nth Root of an Integer", slug: "nth-root", primary: "gfg", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Koko Eating Bananas", slug: "koko-eating-bananas", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Minimum Days to Make M Bouquets", slug: "minimum-number-of-days-to-make-m-bouquets", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Smallest Divisor Given a Threshold", slug: "find-the-smallest-divisor-given-a-threshold", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Capacity to Ship Packages Within D Days", slug: "capacity-to-ship-packages-within-d-days", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Kth Missing Positive Number", slug: "kth-missing-positive-number", primary: "leetcode", pat: "Binary Search", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Aggressive Cows", slug: "aggressive-cows", primary: "gfg", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Book Allocation Problem", slug: "allocate-books", primary: "codingninjas", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Split Array Largest Sum", slug: "split-array-largest-sum", primary: "leetcode", pat: "Binary Search", diff: "Hard", tc: "O(N log M)", sc: "O(1)" },
          { name: "Painter's Partition", slug: "painters-partition", primary: "codingninjas", pat: "Binary Search", diff: "Medium", tc: "O(N log M)", sc: "O(1)" },
          { name: "Minimize Max Distance to Gas Station", slug: "minimize-max-distance-to-gas-station", primary: "gfg", pat: "Binary Search", diff: "Hard", tc: "O(N log M)", sc: "O(1)" },
          { name: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays", primary: "leetcode", pat: "Binary Search", diff: "Hard", tc: "O(log(min(N,M)))", sc: "O(1)" },
          { name: "Kth Element of Two Sorted Arrays", slug: "kth-element-of-two-sorted-arrays", primary: "gfg", pat: "Binary Search", diff: "Medium", tc: "O(log(min(N,M)))", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "BS on 2D Arrays",
        problems: [
          { name: "Row with Max 1s", slug: "row-with-max-1s", primary: "gfg", pat: "Binary Search", diff: "Medium", tc: "O(N + M)", sc: "O(1)" },
          { name: "Search in a 2D Matrix I", slug: "search-a-2d-matrix", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(log(N*M))", sc: "O(1)" },
          { name: "Search in a 2D Matrix II", slug: "search-a-2d-matrix-ii", primary: "leetcode", pat: "Binary Search", diff: "Medium", tc: "O(N + M)", sc: "O(1)" },
          { name: "Find Peak Element in 2D Matrix", slug: "find-a-peak-element-ii", primary: "leetcode", pat: "Binary Search", diff: "Hard", tc: "O(M log N)", sc: "O(1)" },
          { name: "Median in Row-wise Sorted Matrix", slug: "matrix-median", primary: "gfg", pat: "Binary Search", diff: "Hard", tc: "O(32 * N log M)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 5,
    stepTitle: "Strings [Easy, Medium]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Basic Strings",
        problems: [
          { name: "Remove Outermost Parentheses", slug: "remove-outermost-parentheses", primary: "leetcode", pat: "String", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Reverse Words in String", slug: "reverse-words-in-a-string", primary: "leetcode", pat: "String", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Largest Odd Number in String", slug: "largest-odd-number-in-string", primary: "leetcode", pat: "String", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Longest Common Prefix", slug: "longest-common-prefix", primary: "leetcode", pat: "String", diff: "Easy", tc: "O(N * M)", sc: "O(1)" },
          { name: "Isomorphic Strings", slug: "isomorphic-strings", primary: "leetcode", pat: "String/HashMap", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Rotate String", slug: "rotate-string", primary: "leetcode", pat: "String", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Valid Anagram", slug: "valid-anagram", primary: "leetcode", pat: "String/HashMap", diff: "Easy", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Medium Strings",
        problems: [
          { name: "Sort Characters By Frequency", slug: "sort-characters-by-frequency", primary: "leetcode", pat: "String/Hashing", diff: "Medium", tc: "O(N log N)", sc: "O(N)" },
          { name: "Maximum Nesting Depth of Parentheses", slug: "maximum-nesting-depth-of-the-parentheses", primary: "leetcode", pat: "String", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Roman to Integer", slug: "roman-to-integer", primary: "leetcode", pat: "String", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Integer to Roman", slug: "integer-to-roman", primary: "leetcode", pat: "String", diff: "Medium", tc: "O(1)", sc: "O(1)" },
          { name: "Implement Atoi (String to Integer)", slug: "string-to-integer-atoi", primary: "leetcode", pat: "String/Math", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Count Substrings with K Distinct Chars", slug: "subarrays-with-k-different-integers", primary: "leetcode", pat: "Sliding Window", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Longest Palindromic Substring", slug: "longest-palindromic-substring", primary: "leetcode", pat: "String/DP", diff: "Medium", tc: "O(N^2)", sc: "O(1)" },
          { name: "Sum of Beauty of All Substrings", slug: "sum-of-beauty-of-all-substrings", primary: "leetcode", pat: "String", diff: "Medium", tc: "O(N^2)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 6,
    stepTitle: "Learn LinkedList [1D, 2D, Medium, Hard]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "1D LinkedList",
        problems: [
          { name: "Array to LinkedList", slug: "introduction-to-linked-list", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Insert Node in LinkedList", slug: "insert-node-in-ll", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Delete Node in LinkedList", slug: "delete-node-in-ll", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Length of LinkedList", slug: "length-of-ll", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Search Element in LinkedList", slug: "search-in-ll", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Doubly LinkedList",
        problems: [
          { name: "Array to Doubly LinkedList", slug: "introduction-to-doubly-linked-list", primary: "codingninjas", pat: "Doubly LinkedList", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Insert Node in Doubly LinkedList", slug: "insert-node-in-dll", primary: "codingninjas", pat: "Doubly LinkedList", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Delete Node in Doubly LinkedList", slug: "delete-node-in-dll", primary: "codingninjas", pat: "Doubly LinkedList", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Reverse a Doubly LinkedList", slug: "reverse-a-doubly-linked-list", primary: "codingninjas", pat: "Doubly LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Medium LL",
        problems: [
          { name: "Middle of LinkedList", slug: "middle-of-the-linked-list", primary: "leetcode", pat: "Two Pointer", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Reverse LinkedList (Iterative)", slug: "reverse-linked-list", primary: "leetcode", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Reverse LinkedList (Recursive)", slug: "reverse-linked-list-recursive", primary: "leetcode", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Detect Cycle in LinkedList", slug: "linked-list-cycle", primary: "leetcode", pat: "Two Pointer", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Find Starting Point of Cycle", slug: "linked-list-cycle-ii", primary: "leetcode", pat: "Two Pointer", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Length of Loop in LinkedList", slug: "find-length-of-loop", primary: "gfg", pat: "Two Pointer", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Check if LinkedList is Palindrome", slug: "palindrome-linked-list", primary: "leetcode", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Odd Even LinkedList", slug: "odd-even-linked-list", primary: "leetcode", pat: "LinkedList", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list", primary: "leetcode", pat: "Two Pointer", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Delete Middle Node of LinkedList", slug: "delete-the-middle-node-of-a-linked-list", primary: "leetcode", pat: "Two Pointer", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Sort LinkedList", slug: "sort-list", primary: "leetcode", pat: "Merge Sort", diff: "Medium", tc: "O(N log N)", sc: "O(log N)" },
          { name: "Sort 0s, 1s, and 2s in LinkedList", slug: "sort-linked-list-of-0s-1s-2s", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Intersection of Two LinkedLists", slug: "intersection-of-two-linked-lists", primary: "leetcode", pat: "Two Pointer", diff: "Easy", tc: "O(N + M)", sc: "O(1)" },
          { name: "Add 1 to Number Represented as LinkedList", slug: "add-1-to-a-number-represented-as-linked-list", primary: "gfg", pat: "LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Add Two Numbers represented as LLs", slug: "add-two-numbers", primary: "leetcode", pat: "LinkedList", diff: "Medium", tc: "O(max(N,M))", sc: "O(max(N,M))" }
        ]
      },
      {
        lectureNumber: 4,
        lectureTitle: "Medium DLL",
        problems: [
          { name: "Find Pairs with Sum K in DLL", slug: "find-pairs-with-given-sum-in-doubly-linked-list", primary: "gfg", pat: "Two Pointer", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Remove Duplicates from Sorted DLL", slug: "remove-duplicates-from-a-sorted-doubly-linked-list", primary: "gfg", pat: "Doubly LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Delete All Occurrences of Key in DLL", slug: "delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list", primary: "gfg", pat: "Doubly LinkedList", diff: "Easy", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 5,
        lectureTitle: "Hard LL",
        problems: [
          { name: "Reverse LinkedList in K-Group", slug: "reverse-nodes-in-k-group", primary: "leetcode", pat: "LinkedList", diff: "Hard", tc: "O(N)", sc: "O(1)" },
          { name: "Rotate LinkedList", slug: "rotate-list", primary: "leetcode", pat: "LinkedList", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Clone LinkedList with Random Pointer", slug: "copy-list-with-random-pointer", primary: "leetcode", pat: "HashMap/LL", diff: "Medium", tc: "O(N)", sc: "O(1) / O(N)" },
          { name: "Flattening a LinkedList", slug: "flattening-a-linked-list", primary: "gfg", pat: "LinkedList", diff: "Medium", tc: "O(N * M)", sc: "O(1)" },
          { name: "Merge K Sorted Lists", slug: "merge-k-sorted-lists", primary: "leetcode", pat: "Heap", diff: "Hard", tc: "O(N log K)", sc: "O(K)" }
        ]
      }
    ]
  },
  {
    stepNumber: 7,
    stepTitle: "Recursion [Strong Hold, Subsequences, Patterns, Hard]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Strong Hold",
        problems: [
          { name: "Recursive implementation of Atoi", slug: "string-to-integer-atoi", primary: "leetcode", pat: "Recursion", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Pow(x, n)", slug: "powx-n", primary: "leetcode", pat: "Recursion", diff: "Medium", tc: "O(log N)", sc: "O(log N)" },
          { name: "Count Good Numbers", slug: "count-good-numbers", primary: "leetcode", pat: "Recursion/Math", diff: "Medium", tc: "O(log N)", sc: "O(log N)" },
          { name: "Sort a Stack Using Recursion", slug: "sort-a-stack", primary: "gfg", pat: "Recursion", diff: "Easy", tc: "O(N^2)", sc: "O(N)" },
          { name: "Reverse a Stack Using Recursion", slug: "reverse-a-stack", primary: "gfg", pat: "Recursion", diff: "Easy", tc: "O(N^2)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Subsequences Pattern",
        problems: [
          { name: "Generate Binary Strings without Consecutive 1s", slug: "generate-all-binary-strings", primary: "gfg", pat: "Recursion", diff: "Medium", tc: "O(2^N)", sc: "O(N)" },
          { name: "Generate All Balanced Parentheses", slug: "generate-parentheses", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(4^N / sqrt(N))", sc: "O(N)" },
          { name: "Print All Subsequences / Power Set", slug: "subsets", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(2^N * N)", sc: "O(N)" },
          { name: "Subsets I", slug: "subset-sum", primary: "gfg", pat: "Recursion", diff: "Easy", tc: "O(2^N)", sc: "O(N)" },
          { name: "Subsets II", slug: "subsets-ii", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(2^N * N)", sc: "O(N)" },
          { name: "Combination Sum I", slug: "combination-sum", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(2^T * K)", sc: "O(T)" },
          { name: "Combination Sum II", slug: "combination-sum-ii", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(2^N * K)", sc: "O(N)" },
          { name: "Combination Sum III", slug: "combination-sum-iii", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(9! / (K! * (9-K)!))", sc: "O(K)" },
          { name: "Letter Combinations of a Phone Number", slug: "letter-combinations-of-a-phone-number", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(4^N * N)", sc: "O(N)" },
          { name: "Perfect Sum Problem", slug: "perfect-sum-problem", primary: "gfg", pat: "Recursion", diff: "Medium", tc: "O(2^N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Hard Recursion",
        problems: [
          { name: "Word Search", slug: "word-search", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(N * M * 4^L)", sc: "O(L)" },
          { name: "N-Queens", slug: "n-queens", primary: "leetcode", pat: "Backtracking", diff: "Hard", tc: "O(N!)", sc: "O(N^2)" },
          { name: "Rat in a Maze", slug: "rat-in-a-maze-problem-i", primary: "gfg", pat: "Backtracking", diff: "Hard", tc: "O(3^(N^2))", sc: "O(N^2)" },
          { name: "Sudoku Solver", slug: "sudoku-solver", primary: "leetcode", pat: "Backtracking", diff: "Hard", tc: "O(9^(N^2))", sc: "O(1)" },
          { name: "M-Coloring Problem", slug: "m-coloring-problem", primary: "gfg", pat: "Backtracking", diff: "Hard", tc: "O(M^V)", sc: "O(V)" },
          { name: "Palindrome Partitioning", slug: "palindrome-partitioning", primary: "leetcode", pat: "Backtracking", diff: "Medium", tc: "O(2^N * N)", sc: "O(N)" },
          { name: "Word Break", slug: "word-break", primary: "leetcode", pat: "Dynamic Programming", diff: "Medium", tc: "O(N^3)", sc: "O(N)" },
          { name: "Expression Add Operators", slug: "expression-add-operators", primary: "leetcode", pat: "Backtracking", diff: "Hard", tc: "O(4^N)", sc: "O(N)" }
        ]
      }
    ]
  },
  {
    stepNumber: 8,
    stepTitle: "Bit Manipulation [Learn, Interview, Advanced]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Learn Bit Manipulation",
        problems: [
          { name: "Intro to Bit Manipulation", slug: "bit-manipulation", primary: "gfg", pat: "Bit Manipulation", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Check if i-th Bit is Set", slug: "check-whether-k-th-bit-is-set-or-not", primary: "gfg", pat: "Bit Manipulation", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Check if Number is Power of Two", slug: "power-of-two", primary: "leetcode", pat: "Bit Manipulation", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Count Number of Set Bits", slug: "number-of-1-bits", primary: "leetcode", pat: "Bit Manipulation", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Set/Clear Rightmost Set Bit", slug: "set-rightmost-unset-bit", primary: "gfg", pat: "Bit Manipulation", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Swap Two Numbers Using Bitwise", slug: "swap-two-numbers", primary: "codingninjas", pat: "Bit Manipulation", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Divide Two Integers Without Operators", slug: "divide-two-integers", primary: "leetcode", pat: "Bit Manipulation", diff: "Medium", tc: "O(log N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Interview Problems",
        problems: [
          { name: "Single Number I", slug: "single-number", primary: "leetcode", pat: "Bit Manipulation", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Single Number II", slug: "single-number-ii", primary: "leetcode", pat: "Bit Manipulation", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Single Number III", slug: "single-number-iii", primary: "leetcode", pat: "Bit Manipulation", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Two Numbers with Odd Occurrences", slug: "two-repeated-elements", primary: "gfg", pat: "Bit Manipulation", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Power Set Using Bit Manipulation", slug: "subsets", primary: "leetcode", pat: "Bit Manipulation", diff: "Medium", tc: "O(2^N * N)", sc: "O(N)" },
          { name: "XOR of Numbers in Range L to R", slug: "xor-queries-of-a-subarray", primary: "leetcode", pat: "Bit Manipulation", diff: "Medium", tc: "O(N)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 9,
    stepTitle: "Stack and Queues [Learning, Monotonic, Implementation]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Learning Stack and Queue",
        problems: [
          { name: "Implement Stack Using Array", slug: "implement-stack-using-array", primary: "codingninjas", pat: "Stack", diff: "Easy", tc: "O(1)", sc: "O(N)" },
          { name: "Implement Queue Using Array", slug: "implement-queue-using-array", primary: "codingninjas", pat: "Queue", diff: "Easy", tc: "O(1)", sc: "O(N)" },
          { name: "Implement Stack Using Queues", slug: "implement-stack-using-queues", primary: "leetcode", pat: "Queue", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Implement Queue Using Stacks", slug: "implement-queue-using-stacks", primary: "leetcode", pat: "Stack", diff: "Easy", tc: "O(1) amortized", sc: "O(N)" },
          { name: "Implement Stack Using LinkedList", slug: "implement-stack-using-linked-list", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(1)", sc: "O(N)" },
          { name: "Implement Queue Using LinkedList", slug: "implement-queue-using-linked-list", primary: "codingninjas", pat: "LinkedList", diff: "Easy", tc: "O(1)", sc: "O(N)" },
          { name: "Check for Balanced Parentheses", slug: "valid-parentheses", primary: "leetcode", pat: "Stack", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Implement Min Stack", slug: "min-stack", primary: "leetcode", pat: "Stack", diff: "Medium", tc: "O(1)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Conversion Prefix, Infix, Postfix",
        problems: [
          { name: "Infix to Postfix", slug: "infix-to-postfix", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Infix to Prefix", slug: "infix-to-prefix", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Postfix to Infix", slug: "postfix-to-infix", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Postfix to Prefix", slug: "postfix-to-prefix", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Prefix to Infix", slug: "prefix-to-infix", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Prefix to Postfix", slug: "prefix-to-postfix", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Monotonic Stack/Queue Problems",
        problems: [
          { name: "Next Greater Element I", slug: "next-greater-element-i", primary: "leetcode", pat: "Monotonic Stack", diff: "Medium", tc: "O(N + M)", sc: "O(N)" },
          { name: "Next Greater Element II", slug: "next-greater-element-ii", primary: "leetcode", pat: "Monotonic Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Next Smaller Element", slug: "next-smaller-element", primary: "gfg", pat: "Monotonic Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Number of NGEs to the Right", slug: "next-greater-elements-iii", primary: "leetcode", pat: "Monotonic Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Trapping Rain Water", slug: "trapping-rain-water", primary: "leetcode", pat: "Two Pointer", diff: "Hard", tc: "O(N)", sc: "O(1)" },
          { name: "Sum of Subarray Minimums", slug: "sum-of-subarray-minimums", primary: "leetcode", pat: "Monotonic Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Sum of Subarray Ranges", slug: "sum-of-subarray-ranges", primary: "leetcode", pat: "Monotonic Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Asteroid Collision", slug: "asteroid-collision", primary: "leetcode", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Largest Rectangle in Histogram", slug: "largest-rectangle-in-histogram", primary: "leetcode", pat: "Monotonic Stack", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Maximal Rectangle", slug: "maximal-rectangle", primary: "leetcode", pat: "Monotonic Stack", diff: "Hard", tc: "O(N * M)", sc: "O(M)" }
        ]
      },
      {
        lectureNumber: 4,
        lectureTitle: "Implementation Problems",
        problems: [
          { name: "Sliding Window Maximum", slug: "sliding-window-maximum", primary: "leetcode", pat: "Deque", diff: "Hard", tc: "O(N)", sc: "O(K)" },
          { name: "LRU Cache Implementation", slug: "lru-cache", primary: "leetcode", pat: "Design/DLL", diff: "Medium", tc: "O(1)", sc: "O(Capacity)" },
          { name: "LFU Cache Implementation", slug: "lfu-cache", primary: "leetcode", pat: "Design/DLL", diff: "Hard", tc: "O(1)", sc: "O(Capacity)" },
          { name: "The Celebrity Problem", slug: "the-celebrity-problem", primary: "gfg", pat: "Stack", diff: "Medium", tc: "O(N)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 10,
    stepTitle: "Sliding Window & Two Pointer",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Medium Problems",
        problems: [
          { name: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(min(M, N))" },
          { name: "Max Consecutive Ones III", slug: "max-consecutive-ones-iii", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Fruit Into Baskets", slug: "fruit-into-baskets", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Binary Subarrays With Sum", slug: "binary-subarrays-with-sum", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Count Number of Nice Subarrays", slug: "count-number-of-nice-subarrays", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Number of Substrings Containing All Three Chars", slug: "number-of-substrings-containing-all-three-characters", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Maximum Points You Can Obtain from Cards", slug: "maximum-points-you-can-obtain-from-cards", primary: "leetcode", pat: "Sliding Window", diff: "Medium", tc: "O(K)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Hard Problems",
        problems: [
          { name: "Longest Substring with At Most K Distinct Chars", slug: "longest-substring-with-at-most-k-distinct-characters", primary: "codingninjas", pat: "Sliding Window", diff: "Hard", tc: "O(N)", sc: "O(K)" },
          { name: "Subarrays with K Different Integers", slug: "subarrays-with-k-different-integers", primary: "leetcode", pat: "Sliding Window", diff: "Hard", tc: "O(N)", sc: "O(K)" },
          { name: "Minimum Window Substring", slug: "minimum-window-substring", primary: "leetcode", pat: "Sliding Window", diff: "Hard", tc: "O(N)", sc: "O(1)" },
          { name: "Minimum Window Subsequence", slug: "minimum-window-subsequence", primary: "gfg", pat: "Sliding Window", diff: "Hard", tc: "O(N * M)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 11,
    stepTitle: "Heaps [Learning, Medium, Hard]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Learning Heap",
        problems: [
          { name: "Min/Max Heap Implementation", slug: "min-heap", primary: "codingninjas", pat: "Heap", diff: "Easy", tc: "O(log N)", sc: "O(N)" },
          { name: "Binary Heap Operations", slug: "heap-operations", primary: "gfg", pat: "Heap", diff: "Easy", tc: "O(log N)", sc: "O(1)" },
          { name: "Priority Queue Implementation", slug: "priority-queue", primary: "codingninjas", pat: "Heap", diff: "Easy", tc: "O(log N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Medium Problems",
        problems: [
          { name: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array", primary: "leetcode", pat: "Heap", diff: "Medium", tc: "O(N log K)", sc: "O(K)" },
          { name: "Kth Smallest Element in an Array", slug: "kth-smallest-element", primary: "gfg", pat: "Heap", diff: "Medium", tc: "O(N log K)", sc: "O(K)" },
          { name: "Sort a K Sorted Array", slug: "nearly-sorted", primary: "gfg", pat: "Heap", diff: "Medium", tc: "O(N log K)", sc: "O(K)" },
          { name: "Replace Elements by Its Rank in Array", slug: "replace-elements-by-its-rank-in-the-array", primary: "leetcode", pat: "Sorting/Heap", diff: "Easy", tc: "O(N log N)", sc: "O(N)" },
          { name: "Task Scheduler", slug: "task-scheduler", primary: "leetcode", pat: "Greedy/Heap", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Hand of Straights", slug: "hand-of-straights", primary: "leetcode", pat: "Greedy/HashMap", diff: "Medium", tc: "O(N log N)", sc: "O(N)" },
          { name: "Design Twitter", slug: "design-twitter", primary: "leetcode", pat: "Design/Heap", diff: "Medium", tc: "O(V log K)", sc: "O(V)" },
          { name: "Merge K Sorted Arrays", slug: "merge-k-sorted-arrays", primary: "codingninjas", pat: "Heap", diff: "Medium", tc: "O(N log K)", sc: "O(K)" },
          { name: "Merge K Sorted Lists", slug: "merge-k-sorted-lists", primary: "leetcode", pat: "Heap", diff: "Hard", tc: "O(N log K)", sc: "O(K)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Hard Problems",
        problems: [
          { name: "K Most Frequent Elements", slug: "top-k-frequent-elements", primary: "leetcode", pat: "Heap/HashMap", diff: "Medium", tc: "O(N log K)", sc: "O(N)" },
          { name: "Find Median from Data Stream", slug: "find-median-from-data-stream", primary: "leetcode", pat: "Heap", diff: "Hard", tc: "O(log N)", sc: "O(N)" },
          { name: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream", primary: "leetcode", pat: "Heap", diff: "Easy", tc: "O(log K)", sc: "O(K)" },
          { name: "Maximum Sum Combinations", slug: "maximum-sum-combinations", primary: "gfg", pat: "Heap", diff: "Hard", tc: "O(N log N)", sc: "O(N)" }
        ]
      }
    ]
  },
  {
    stepNumber: 12,
    stepTitle: "Greedy Algorithms [Easy, Medium/Hard]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Easy",
        problems: [
          { name: "Assign Cookies", slug: "assign-cookies", primary: "leetcode", pat: "Greedy", diff: "Easy", tc: "O(N log N)", sc: "O(1)" },
          { name: "Fractional Knapsack", slug: "fractional-knapsack", primary: "gfg", pat: "Greedy", diff: "Medium", tc: "O(N log N)", sc: "O(1)" },
          { name: "Lemonade Change", slug: "lemonade-change", primary: "leetcode", pat: "Greedy", diff: "Easy", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Medium/Hard",
        problems: [
          { name: "N Meetings In One Room", slug: "n-meetings-in-one-room", primary: "gfg", pat: "Greedy", diff: "Easy", tc: "O(N log N)", sc: "O(N)" },
          { name: "Jump Game I", slug: "jump-game", primary: "leetcode", pat: "Greedy", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Jump Game II", slug: "jump-game-ii", primary: "leetcode", pat: "Greedy", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Minimum Platforms Required", slug: "minimum-platforms", primary: "gfg", pat: "Greedy/Sorting", diff: "Medium", tc: "O(N log N)", sc: "O(1)" },
          { name: "Job Sequencing Problem", slug: "job-sequencing-problem", primary: "gfg", pat: "Greedy", diff: "Medium", tc: "O(N log N + N * M)", sc: "O(M)" },
          { name: "Candy Distribution", slug: "candy", primary: "leetcode", pat: "Greedy", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Gas Station / Circular Tour", slug: "gas-station", primary: "leetcode", pat: "Greedy", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Valid Parenthesis String", slug: "valid-parenthesis-string", primary: "leetcode", pat: "Greedy/Stack", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Insert Interval", slug: "insert-interval", primary: "leetcode", pat: "Greedy", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Merge Intervals", slug: "merge-intervals", primary: "leetcode", pat: "Sorting/Greedy", diff: "Medium", tc: "O(N log N)", sc: "O(1)" },
          { name: "Non-overlapping Intervals", slug: "non-overlapping-intervals", primary: "leetcode", pat: "Sorting/Greedy", diff: "Medium", tc: "O(N log N)", sc: "O(1)" },
          { name: "Minimum Number of Arrows to Burst Balloons", slug: "minimum-number-of-arrows-to-burst-balloons", primary: "leetcode", pat: "Sorting/Greedy", diff: "Medium", tc: "O(N log N)", sc: "O(1)" }
        ]
      }
    ]
  },
  {
    stepNumber: 13,
    stepTitle: "Binary Trees [Traversals, Medium, Hard, Requirements]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Traversals",
        problems: [
          { name: "Introduction to Trees", slug: "introduction-to-trees", primary: "codingninjas", pat: "Binary Tree", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Binary Tree Representation", slug: "binary-tree-representation", primary: "codingninjas", pat: "Binary Tree", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Preorder Traversal of Binary Tree", slug: "binary-tree-preorder-traversal", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Inorder Traversal of Binary Tree", slug: "binary-tree-inorder-traversal", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Postorder Traversal of Binary Tree", slug: "binary-tree-postorder-traversal", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Level Order Traversal", slug: "binary-tree-level-order-traversal", primary: "leetcode", pat: "BFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Iterative Traversals (Pre, In, Post)", slug: "iterative-traversals", primary: "codingninjas", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Medium Problems",
        problems: [
          { name: "Height of Binary Tree", slug: "maximum-depth-of-binary-tree", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Balanced Binary Tree Check", slug: "balanced-binary-tree", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Diameter of Binary Tree", slug: "diameter-of-binary-tree", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum", primary: "leetcode", pat: "DFS", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Check if Two Trees are Identical", slug: "same-tree", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Zigzag Level Order Traversal", slug: "binary-tree-zigzag-level-order-traversal", primary: "leetcode", pat: "BFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Boundary Traversal of Binary Tree", slug: "boundary-traversal-of-binary-tree", primary: "gfg", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Vertical Order Traversal", slug: "vertical-order-traversal", primary: "leetcode", pat: "BFS/DFS", diff: "Hard", tc: "O(N log N)", sc: "O(N)" },
          { name: "Top View of Binary Tree", slug: "top-view-of-binary-tree", primary: "gfg", pat: "BFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Bottom View of Binary Tree", slug: "bottom-view-of-binary-tree", primary: "gfg", pat: "BFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Left/Right View of Binary Tree", slug: "binary-tree-right-side-view", primary: "leetcode", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Symmetric Tree Check", slug: "symmetric-tree", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Hard Problems",
        problems: [
          { name: "Root to Leaf Paths", slug: "root-to-leaf-paths", primary: "gfg", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Lowest Common Ancestor", slug: "lowest-common-ancestor-of-a-binary-tree", primary: "leetcode", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Maximum Width of Binary Tree", slug: "maximum-width-of-binary-tree", primary: "leetcode", pat: "BFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Children Sum Property in Binary Tree", slug: "children-sum-property", primary: "codingninjas", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Print All Nodes at Distance K", slug: "all-nodes-distance-k-in-binary-tree", primary: "leetcode", pat: "BFS/DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Minimum Time to Burn a Tree", slug: "burning-tree", primary: "gfg", pat: "BFS", diff: "Hard", tc: "O(N)", sc: "O(N)" },
          { name: "Count Complete Tree Nodes", slug: "count-complete-tree-nodes", primary: "leetcode", pat: "DFS/Math", diff: "Easy", tc: "O(log^2 N)", sc: "O(log N)" },
          { name: "Requirements to Construct Binary Tree", slug: "construct-binary-tree", primary: "codingninjas", pat: "Concept", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Serialize and Deserialize Binary Tree", slug: "serialize-and-deserialize-binary-tree", primary: "leetcode", pat: "BFS/DFS", diff: "Hard", tc: "O(N)", sc: "O(N)" }
        ]
      }
    ]
  },
  {
    stepNumber: 14,
    stepTitle: "Binary Search Trees [Concepts, Practice]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Concepts",
        problems: [
          { name: "Introduction to BST", slug: "introduction-to-bst", primary: "codingninjas", pat: "BST", diff: "Easy", tc: "O(1)", sc: "O(1)" },
          { name: "Search in Binary Search Tree", slug: "search-in-a-binary-search-tree", primary: "leetcode", pat: "BST", diff: "Easy", tc: "O(log N)", sc: "O(log N)" },
          { name: "Find Minimum/Maximum Value in BST", slug: "minimum-element-in-bst", primary: "gfg", pat: "BST", diff: "Easy", tc: "O(log N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Practice",
        problems: [
          { name: "Floor in BST", slug: "floor-from-bst", primary: "gfg", pat: "BST", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Ceil in BST", slug: "ceil-from-bst", primary: "gfg", pat: "BST", diff: "Medium", tc: "O(log N)", sc: "O(1)" },
          { name: "Insert a Node in BST", slug: "insert-into-a-binary-search-tree", primary: "leetcode", pat: "BST", diff: "Medium", tc: "O(log N)", sc: "O(log N)" },
          { name: "Delete a Node in BST", slug: "delete-node-in-a-bst", primary: "leetcode", pat: "BST", diff: "Medium", tc: "O(log N)", sc: "O(log N)" },
          { name: "K-th Smallest/Largest Element in BST", slug: "kth-smallest-element-in-a-bst", primary: "leetcode", pat: "Inorder DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Validate Binary Search Tree", slug: "validate-binary-search-tree", primary: "leetcode", pat: "DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Lowest Common Ancestor in BST", slug: "lowest-common-ancestor-of-a-binary-search-tree", primary: "leetcode", pat: "BST", diff: "Easy", tc: "O(log N)", sc: "O(log N)" },
          { name: "Construct BST from Preorder Traversal", slug: "construct-binary-search-tree-from-preorder-traversal", primary: "leetcode", pat: "BST/DFS", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Binary Search Tree Iterator", slug: "binary-search-tree-iterator", primary: "leetcode", pat: "Stack/Design", diff: "Medium", tc: "O(1) average", sc: "O(H)" },
          { name: "Two Sum in BST", slug: "two-sum-iv-input-is-a-bst", primary: "leetcode", pat: "Iterator/Two Pointer", diff: "Medium", tc: "O(N)", sc: "O(H)" },
          { name: "Recover Binary Search Tree", slug: "recover-binary-search-tree", primary: "leetcode", pat: "Inorder DFS", diff: "Medium", tc: "O(N)", sc: "O(H)" },
          { name: "Largest BST in Binary Tree", slug: "largest-bst", primary: "gfg", pat: "DFS", diff: "Hard", tc: "O(N)", sc: "O(H)" }
        ]
      }
    ]
  },
  {
    stepNumber: 15,
    stepTitle: "Graphs [Learning, BFS/DFS, Shortest Path, MST]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Learning Graph",
        problems: [
          { name: "Graph Representation", slug: "print-adjacency-list", primary: "gfg", pat: "Graph", diff: "Easy", tc: "O(V + E)", sc: "O(V + E)" },
          { name: "Breadth First Search (BFS)", slug: "bfs-traversal-of-graph", primary: "gfg", pat: "BFS", diff: "Easy", tc: "O(V + E)", sc: "O(V)" },
          { name: "Depth First Search (DFS)", slug: "dfs-traversal-of-graph", primary: "gfg", pat: "DFS", diff: "Easy", tc: "O(V + E)", sc: "O(V)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "BFS/DFS Problems",
        problems: [
          { name: "Number of Provinces", slug: "number-of-provinces", primary: "leetcode", pat: "BFS/DFS", diff: "Medium", tc: "O(V^2)", sc: "O(V)" },
          { name: "Rotting Oranges", slug: "rotting-oranges", primary: "leetcode", pat: "BFS", diff: "Medium", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Flood Fill", slug: "flood-fill", primary: "leetcode", pat: "DFS", diff: "Easy", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Cycle Detection Undirected (BFS)", slug: "detect-cycle-in-an-undirected-graph", primary: "gfg", pat: "BFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Cycle Detection Undirected (DFS)", slug: "detect-cycle-in-an-undirected-graph-dfs", primary: "gfg", pat: "DFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "0/1 Matrix (Distance to Nearest 0)", slug: "01-matrix", primary: "leetcode", pat: "BFS", diff: "Medium", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Surrounded Regions", slug: "surrounded-regions", primary: "leetcode", pat: "DFS", diff: "Medium", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Number of Enclaves", slug: "number-of-enclaves", primary: "leetcode", pat: "DFS", diff: "Medium", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Word Ladder I", slug: "word-ladder", primary: "leetcode", pat: "BFS", diff: "Hard", tc: "O(N * WordLength * 26)", sc: "O(N)" },
          { name: "Word Ladder II", slug: "word-ladder-ii", primary: "leetcode", pat: "BFS/Backtracking", diff: "Hard", tc: "O(Exponential)", sc: "O(Exponential)" },
          { name: "Cycle Detection Directed (DFS)", slug: "detect-cycle-in-a-directed-graph", primary: "gfg", pat: "DFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Topological Sort (DFS)", slug: "topological-sort", primary: "gfg", pat: "DFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Kahn's Algorithm (Topological Sort BFS)", slug: "topological-sort-kahns", primary: "gfg", pat: "BFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Cycle Detection Directed (BFS)", slug: "detect-cycle-in-directed-bfs", primary: "gfg", pat: "BFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "Shortest Path Algorithms",
        problems: [
          { name: "Shortest Path in DAG", slug: "shortest-path-in-directed-acyclic-graph", primary: "gfg", pat: "Topological Sort", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Shortest Path in Undirected Graph", slug: "shortest-path-in-undirected-graph-having-unit-distance", primary: "gfg", pat: "BFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Dijkstra's Algorithm", slug: "implementing-dijkstra-set-1-adjacency-matrix", primary: "gfg", pat: "Priority Queue", diff: "Medium", tc: "O(E log V)", sc: "O(V)" },
          { name: "Shortest Path in Binary Matrix", slug: "shortest-path-in-binary-matrix", primary: "leetcode", pat: "BFS", diff: "Medium", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Path with Minimum Effort", slug: "path-with-minimum-effort", primary: "leetcode", pat: "Dijkstra", diff: "Medium", tc: "O(N * M log(N*M))", sc: "O(N * M)" },
          { name: "Cheapest Flights Within K Stops", slug: "cheapest-flights-within-k-stops", primary: "leetcode", pat: "BFS/Dijkstra", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Network Delay Time", slug: "network-delay-time", primary: "leetcode", pat: "Dijkstra", diff: "Medium", tc: "O(E log V)", sc: "O(V)" },
          { name: "Number of Ways to Arrive at Destination", slug: "number-of-ways-to-arrive-at-destination", primary: "leetcode", pat: "Dijkstra", diff: "Hard", tc: "O(E log V)", sc: "O(V)" },
          { name: "Bellman Ford Algorithm", slug: "distance-from-the-source-bellman-ford-vector", primary: "gfg", pat: "Graph", diff: "Medium", tc: "O(V * E)", sc: "O(V)" },
          { name: "Floyd Warshall Algorithm", slug: "floyd-warshall", primary: "gfg", pat: "Matrix", diff: "Medium", tc: "O(V^3)", sc: "O(V^2)" }
        ]
      },
      {
        lectureNumber: 4,
        lectureTitle: "MST & Disjoint Set",
        problems: [
          { name: "Prim's Algorithm (Minimum Spanning Tree)", slug: "minimum-spanning-tree-prims", primary: "gfg", pat: "Dijkstra", diff: "Medium", tc: "O(E log V)", sc: "O(V)" },
          { name: "Kruskal's Algorithm", slug: "minimum-spanning-tree-kruskals", primary: "gfg", pat: "Disjoint Set", diff: "Medium", tc: "O(E log V)", sc: "O(V)" },
          { name: "Disjoint Set (Union-Find)", slug: "disjoint-set-union-find", primary: "codingninjas", pat: "Disjoint Set", diff: "Easy", tc: "O(Alpha(N))", sc: "O(N)" },
          { name: "Operations to Make Network Connected", slug: "number-of-operations-to-make-network-connected", primary: "leetcode", pat: "Disjoint Set", diff: "Medium", tc: "O(V + E)", sc: "O(V)" },
          { name: "Most Stones Removed with Same Row or Column", slug: "most-stones-removed-with-same-row-or-column", primary: "leetcode", pat: "Disjoint Set", diff: "Medium", tc: "O(N)", sc: "O(N)" },
          { name: "Accounts Merge", slug: "accounts-merge", primary: "leetcode", pat: "Disjoint Set", diff: "Medium", tc: "O(N log N)", sc: "O(N)" },
          { name: "Number of Islands II", slug: "number-of-islands-ii", primary: "gfg", pat: "Disjoint Set", diff: "Hard", tc: "O(Q * Alpha(V))", sc: "O(V)" },
          { name: "Making a Large Island", slug: "making-a-large-island", primary: "leetcode", pat: "Disjoint Set", diff: "Hard", tc: "O(N^2)", sc: "O(N^2)" }
        ]
      },
      {
        lectureNumber: 5,
        lectureTitle: "Advanced Graph Concepts",
        problems: [
          { name: "Bridges in Graph (Tarjan's)", slug: "critical-connections-in-a-network", primary: "leetcode", pat: "DFS", diff: "Hard", tc: "O(V + E)", sc: "O(V)" },
          { name: "Articulation Points in Graph", slug: "articulation-point-1", primary: "gfg", pat: "DFS", diff: "Hard", tc: "O(V + E)", sc: "O(V)" },
          { name: "Kosaraju's Algorithm (SCC)", slug: "strongly-connected-components-kosarajus-algo", primary: "gfg", pat: "DFS", diff: "Medium", tc: "O(V + E)", sc: "O(V)" }
        ]
      }
    ]
  },
  {
    stepNumber: 16,
    stepTitle: "Dynamic Programming [Intro, Grids, Subsequences, Strings, Stocks, LIS]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Introduction",
        problems: [
          { name: "Introduction to Dynamic Programming", slug: "introduction-to-dp", primary: "codingninjas", pat: "DP", diff: "Easy", tc: "O(N)", sc: "O(N)" },
          { name: "Climbing Stairs", slug: "climbing-stairs", primary: "leetcode", pat: "DP", diff: "Easy", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "1D DP",
        problems: [
          { name: "Frog Jump", slug: "frog-jump", primary: "codingninjas", pat: "DP", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Frog Jump with K Jumps", slug: "minimal-cost", primary: "gfg", pat: "DP", diff: "Medium", tc: "O(N * K)", sc: "O(N)" },
          { name: "Maximum Sum of Non-Adjacent Elements", slug: "maximum-sum-of-non-adjacent-elements", primary: "codingninjas", pat: "DP", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "House Robber", slug: "house-robber", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "House Robber II", slug: "house-robber-ii", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Ninja's Training", slug: "ninja-training", primary: "codingninjas", pat: "DP", diff: "Medium", tc: "O(N * 4)", sc: "O(4)" }
        ]
      },
      {
        lectureNumber: 3,
        lectureTitle: "2D/3D DP",
        problems: [
          { name: "Grid Unique Paths", slug: "unique-paths", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Grid Unique Paths II", slug: "unique-paths-ii", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Minimum Path Sum in Grid", slug: "minimum-path-sum", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Triangle Path Min Sum", slug: "triangle", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N^2)", sc: "O(N)" },
          { name: "Minimum/Maximum Falling Path Sum", slug: "minimum-falling-path-sum", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Cherry Pickup II (3D DP)", slug: "cherry-pickup-ii", primary: "leetcode", pat: "3D DP", diff: "Hard", tc: "O(N * M * M)", sc: "O(M * M)" }
        ]
      },
      {
        lectureNumber: 4,
        lectureTitle: "DP on Subsequences",
        problems: [
          { name: "Subset Sum Equals K", slug: "subset-sum-equal-to-k", primary: "codingninjas", pat: "DP", diff: "Medium", tc: "O(N * K)", sc: "O(K)" },
          { name: "Partition Equal Subset Sum", slug: "partition-equal-subset-sum", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * Sum)", sc: "O(Sum)" },
          { name: "Partition Array into Two Subsets with Min Difference", slug: "partition-a-set-into-two-subsets-with-minimum-absolute-sum-difference", primary: "codingninjas", pat: "DP", diff: "Hard", tc: "O(N * Sum)", sc: "O(Sum)" },
          { name: "Count Subsets with Sum K", slug: "perfect-sum-problem", primary: "gfg", pat: "DP", diff: "Medium", tc: "O(N * K)", sc: "O(K)" },
          { name: "Count Partitions with Given Difference", slug: "partitions-with-given-difference", primary: "gfg", pat: "DP", diff: "Medium", tc: "O(N * Sum)", sc: "O(Sum)" },
          { name: "0-1 Knapsack Problem", slug: "0-1-knapsack-problem", primary: "gfg", pat: "DP", diff: "Medium", tc: "O(N * W)", sc: "O(W)" },
          { name: "Target Sum", slug: "target-sum", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * Sum)", sc: "O(Sum)" },
          { name: "Coin Change I (Min Coins)", slug: "coin-change", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * Amount)", sc: "O(Amount)" },
          { name: "Coin Change II (Total Ways)", slug: "coin-change-ii", primary: "leetcode", pat: "DP", diff: "Medium", tc: "O(N * Amount)", sc: "O(Amount)" },
          { name: "Unbounded Knapsack", slug: "unbounded-knapsack", primary: "gfg", pat: "DP", diff: "Medium", tc: "O(N * W)", sc: "O(W)" },
          { name: "Rod Cutting Problem", slug: "rod-cutting", primary: "gfg", pat: "DP", diff: "Medium", tc: "O(N * N)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 5,
        lectureTitle: "DP on Strings",
        problems: [
          { name: "Longest Common Subsequence", slug: "longest-common-subsequence", primary: "leetcode", pat: "DP on Strings", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Print Longest Common Subsequence", slug: "print-lcs", primary: "codingninjas", pat: "DP on Strings", diff: "Medium", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Longest Common Substring", slug: "longest-common-substring", primary: "gfg", pat: "DP on Strings", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Longest Palindromic Subsequence", slug: "longest-palindromic-subsequence", primary: "leetcode", pat: "DP on Strings", diff: "Medium", tc: "O(N * N)", sc: "O(N)" },
          { name: "Min Insertions to Make String Palindrome", slug: "minimum-insertion-steps-to-make-a-string-palindrome", primary: "leetcode", pat: "DP on Strings", diff: "Medium", tc: "O(N * N)", sc: "O(N)" },
          { name: "Min Insertions/Deletions to convert A to B", slug: "delete-operation-for-two-strings", primary: "leetcode", pat: "DP on Strings", diff: "Medium", tc: "O(N * M)", sc: "O(M)" },
          { name: "Shortest Common Supersequence", slug: "shortest-common-supersequence", primary: "leetcode", pat: "DP on Strings", diff: "Hard", tc: "O(N * M)", sc: "O(N * M)" },
          { name: "Distinct Subsequences", slug: "distinct-subsequences", primary: "leetcode", pat: "DP on Strings", diff: "Hard", tc: "O(N * M)", sc: "O(M)" },
          { name: "Edit Distance", slug: "edit-distance", primary: "leetcode", pat: "DP on Strings", diff: "Hard", tc: "O(N * M)", sc: "O(M)" },
          { name: "Wildcard Matching", slug: "wildcard-matching", primary: "leetcode", pat: "DP on Strings", diff: "Hard", tc: "O(N * M)", sc: "O(M)" }
        ]
      },
      {
        lectureNumber: 6,
        lectureTitle: "DP on Stocks",
        problems: [
          { name: "Best Time to Buy & Sell Stock I", slug: "best-time-to-buy-and-sell-stock", primary: "leetcode", pat: "Array/Greedy", diff: "Easy", tc: "O(N)", sc: "O(1)" },
          { name: "Best Time to Buy & Sell Stock II", slug: "best-time-to-buy-and-sell-stock-ii", primary: "leetcode", pat: "DP on Stocks", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Best Time to Buy & Sell Stock III", slug: "best-time-to-buy-and-sell-stock-iii", primary: "leetcode", pat: "DP on Stocks", diff: "Hard", tc: "O(N)", sc: "O(1)" },
          { name: "Best Time to Buy & Sell Stock IV", slug: "best-time-to-buy-and-sell-stock-iv", primary: "leetcode", pat: "DP on Stocks", diff: "Hard", tc: "O(N * K)", sc: "O(K)" },
          { name: "Best Time to Buy & Sell Stock with Cooldown", slug: "best-time-to-buy-and-sell-stock-with-cooldown", primary: "leetcode", pat: "DP on Stocks", diff: "Medium", tc: "O(N)", sc: "O(1)" },
          { name: "Best Time to Buy & Sell Stock with Transaction Fee", slug: "best-time-to-buy-and-sell-stock-with-transaction-fee", primary: "leetcode", pat: "DP on Stocks", diff: "Medium", tc: "O(N)", sc: "O(1)" }
        ]
      },
      {
        lectureNumber: 7,
        lectureTitle: "DP on LIS",
        problems: [
          { name: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence", primary: "leetcode", pat: "DP on LIS", diff: "Medium", tc: "O(N^2)", sc: "O(N)" },
          { name: "Print Longest Increasing Subsequence", slug: "printing-longest-increasing-subsequence", primary: "gfg", pat: "DP on LIS", diff: "Medium", tc: "O(N^2)", sc: "O(N)" },
          { name: "LIS Using Binary Search", slug: "lis-binary-search", primary: "codingninjas", pat: "DP/Binary Search", diff: "Medium", tc: "O(N log N)", sc: "O(N)" },
          { name: "Largest Divisible Subset", slug: "largest-divisible-subset", primary: "leetcode", pat: "DP on LIS", diff: "Medium", tc: "O(N^2)", sc: "O(N)" },
          { name: "Longest String Chain", slug: "longest-string-chain", primary: "leetcode", pat: "DP on LIS", diff: "Medium", tc: "O(N log N + N * L)", sc: "O(N)" },
          { name: "Longest Bitonic Subsequence", slug: "longest-bitonic-subsequence", primary: "gfg", pat: "DP on LIS", diff: "Medium", tc: "O(N^2)", sc: "O(N)" },
          { name: "Number of LIS", slug: "number-of-longest-increasing-subsequence", primary: "leetcode", pat: "DP on LIS", diff: "Medium", tc: "O(N^2)", sc: "O(N)" }
        ]
      },
      {
        lectureNumber: 8,
        lectureTitle: "Partition DP",
        problems: [
          { name: "Matrix Chain Multiplication", slug: "matrix-chain-multiplication", primary: "gfg", pat: "Partition DP", diff: "Hard", tc: "O(N^3)", sc: "O(N^2)" },
          { name: "Minimum Cost to Cut a Stick", slug: "minimum-cost-to-cut-a-stick", primary: "leetcode", pat: "Partition DP", diff: "Hard", tc: "O(N^3)", sc: "O(N^2)" },
          { name: "Burst Balloons", slug: "burst-balloons", primary: "leetcode", pat: "Partition DP", diff: "Hard", tc: "O(N^3)", sc: "O(N^2)" },
          { name: "Evaluate Boolean Expression to True", slug: "boolean-parenthesization", primary: "gfg", pat: "Partition DP", diff: "Hard", tc: "O(N^3)", sc: "O(N^2)" },
          { name: "Palindrome Partitioning II", slug: "palindrome-partitioning-ii", primary: "leetcode", pat: "Partition DP", diff: "Hard", tc: "O(N^2)", sc: "O(N^2)" },
          { name: "Partition Array for Maximum Sum", slug: "partition-array-for-maximum-sum", primary: "leetcode", pat: "Partition DP", diff: "Medium", tc: "O(N * K)", sc: "O(N)" }
        ]
      }
    ]
  },
  {
    stepNumber: 17,
    stepTitle: "Tries [Theory, Practice]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Theory",
        problems: [
          { name: "Implement Trie I (Insert, Search, StartsWith)", slug: "implement-trie-prefix-tree", primary: "leetcode", pat: "Trie", diff: "Medium", tc: "O(L)", sc: "O(WordCount * L)" },
          { name: "Implement Trie II (Insert, CountWords, Erase)", slug: "implement-trie-ii", primary: "codingninjas", pat: "Trie", diff: "Medium", tc: "O(L)", sc: "O(WordCount * L)" }
        ]
      },
      {
        lectureNumber: 2,
        lectureTitle: "Practice",
        problems: [
          { name: "Longest Word With All Prefixes", slug: "longest-word-with-all-prefixes", primary: "codingninjas", pat: "Trie", diff: "Medium", tc: "O(Sum(L))", sc: "O(Sum(L))" },
          { name: "Number of Distinct Substrings", slug: "number-of-distinct-substrings-in-a-string", primary: "codingninjas", pat: "Trie", diff: "Medium", tc: "O(N^2)", sc: "O(N^2)" },
          { name: "Maximum XOR of Two Numbers in Array", slug: "maximum-xor-of-two-numbers-in-an-array", primary: "leetcode", pat: "Trie/Bitwise", diff: "Medium", tc: "O(N * 32)", sc: "O(N * 32)" },
          { name: "Maximum XOR With Element From Array", slug: "maximum-xor-with-an-element-from-array", primary: "leetcode", pat: "Trie/Bitwise", diff: "Hard", tc: "O((N+Q) * 32)", sc: "O(N * 32)" }
        ]
      }
    ]
  },
  {
    stepNumber: 18,
    stepTitle: "Segment Trees / Fenwick Trees [Theory, Practice]",
    lectures: [
      {
        lectureNumber: 1,
        lectureTitle: "Theory & Practice",
        problems: [
          { name: "Segment Tree Range Query & Node Update", slug: "range-sum-query-mutable", primary: "leetcode", pat: "Segment Tree", diff: "Medium", tc: "O(log N)", sc: "O(N)" },
          { name: "Lazy Propagation Segment Tree", slug: "range-sum-query-2d-mutable", primary: "leetcode", pat: "Segment Tree", diff: "Hard", tc: "O(log N)", sc: "O(N)" },
          { name: "Fenwick Tree Range Query & Point Update", slug: "count-of-smaller-numbers-after-self", primary: "leetcode", pat: "Fenwick Tree", diff: "Hard", tc: "O(log N)", sc: "O(N)" }
        ]
      }
    ]
  }
];

// Helper to expand and format a problem with all Striver fields
function expandProblem(prob, stepNum, topicNum, index) {
  const code = `s${stepNum}_l${topicNum}_p${index + 1}`;
  
  // Format primary links
  let primaryLink = '';
  if (prob.primary === 'leetcode') {
    primaryLink = `https://leetcode.com/problems/${prob.slug}/`;
  } else if (prob.primary === 'gfg') {
    primaryLink = `https://www.geeksforgeeks.org/problems/${prob.slug}/1`;
  } else {
    primaryLink = `https://www.codingninjas.com/studio/problems/${prob.slug}`;
  }

  const alternativeLinks = [
    { platform: "LeetCode", link: `https://leetcode.com/problems/${prob.slug}/` },
    { platform: "GeeksforGeeks", link: `https://www.geeksforgeeks.org/problems/${prob.slug}/1` },
    { platform: "Coding Ninjas", link: `https://www.codingninjas.com/studio/problems/${prob.slug}` }
  ];

  const companiesList = ["Google", "Amazon", "Microsoft", "Meta", "Adobe", "Uber", "Bloomberg"];
  const selectedCompanies = companiesList.slice(0, Math.floor(Math.random() * 3) + 2); // 2-4 random companies
  const frequencies = ["Very High", "High", "Medium", "Low"];
  const frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  const solveTime = prob.diff === "Easy" ? "20-30 mins" : prob.diff === "Medium" ? "30-60 mins" : "60-120 mins";

  return {
    id: code,
    name: prob.name,
    difficulty: prob.diff,
    pattern: prob.pat,
    primaryLink: primaryLink,
    alternativeLinks: alternativeLinks,
    striverSolution: {
      article: `https://takeuforward.org/strivers-a2z-dsa-course/`,
      video: `https://www.youtube.com/results?search_query=striver+${encodeURIComponent(prob.name)}`
    },
    alternativeVideos: [
      { name: "NeetCode", link: `https://www.youtube.com/results?search_query=neetcode+${encodeURIComponent(prob.name)}` }
    ],
    prerequisites: [`Basics of ${prob.pat}`],
    companies: selectedCompanies,
    frequency: frequency,
    solveTime: solveTime,
    tc: prob.tc,
    sc: prob.sc,
    commonMistakes: "Incorrect boundary checking, off-by-one errors, or stack-overflow in recursion.",
    hints: [
      "Analyze the problem using manual drawings for small inputs.",
      "Consider using auxiliary data structures like hash maps or arrays to cache results.",
      "Check time complexity constraints to select the optimal approach (e.g. Binary Search for sorted arrays)."
    ],
    similarProblems: [
      { name: "Related problem A", link: primaryLink },
      { name: "Related problem B", link: primaryLink }
    ],
    harderFollowUps: [
      { name: "Advanced follow-up A", link: primaryLink }
    ],
    learningLists: "Not Included",
    tags: [prob.pat, prob.diff, "Interview"]
  };
}

// Generate files for Steps 3 to 18
const dataDir = './src/data';
const markdownDir = './markdown';

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(markdownDir)) fs.mkdirSync(markdownDir, { recursive: true });

stepsCatalog.forEach((step) => {
  const stepNum = step.stepNumber;
  const filename = `step${stepNum}.js`;
  const mdFilename = `Step_${stepNum}_${step.stepTitle.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
  
  // Format Lectures and problems
  const formattedLectures = step.lectures.map((lec) => {
    const formattedProblems = lec.problems.map((prob, idx) => expandProblem(prob, stepNum, lec.lectureNumber, idx));
    return {
      lectureNumber: lec.lectureNumber,
      lectureTitle: lec.lectureTitle,
      problems: formattedProblems
    };
  });

  const stepDataContent = {
    stepNumber: stepNum,
    stepTitle: step.stepTitle,
    lectures: formattedLectures
  };

  // 1. Write JS data file
  const jsContent = `export const step${stepNum}Data = ${JSON.stringify(stepDataContent, null, 2)};\n`;
  fs.writeFileSync(path.join(dataDir, filename), jsContent);
  console.log(`Successfully generated ${filename}`);

  // 2. Generate Markdown Tracker
  let mdContent = `# ${step.stepTitle}\n\n`;
  mdContent += `Detailed progress tracker for Step ${stepNum} of the Striver A2Z DSA Sheet.\n\n---\n\n`;

  let totalProblems = 0;
  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;

  formattedLectures.forEach((lec) => {
    mdContent += `## 📂 Lec ${lec.lectureNumber}: ${lec.lectureTitle}\n\n`;
    
    lec.problems.forEach((p) => {
      totalProblems++;
      if (p.difficulty === "Easy") easyCount++;
      else if (p.difficulty === "Medium") mediumCount++;
      else if (p.difficulty === "Hard") hardCount++;

      mdContent += `### 📄 ${p.name}\n`;
      mdContent += `- **Difficulty**: ${p.difficulty}\n`;
      mdContent += `- **Problem Pattern**: ${p.pattern}\n`;
      mdContent += `- **Official Problem Link**: [Primary Practice Link](${p.primaryLink})\n`;
      mdContent += `- **Alternative Practice Links**:\n`;
      p.alternativeLinks.forEach(alt => {
        mdContent += `  - [${alt.platform}](${alt.link})\n`;
      });
      mdContent += `- **Striver Solution**:\n`;
      mdContent += `  - [TakeUForward Article](${p.striverSolution.article})\n`;
      mdContent += `  - [Striver YouTube Video](${p.striverSolution.video})\n`;
      mdContent += `- **Alternative Video Resources**:\n`;
      p.alternativeVideos.forEach(v => {
        mdContent += `  - [${v.name}](${v.link})\n`;
      });
      mdContent += `- **Prerequisites**:\n`;
      p.prerequisites.forEach(pr => {
        mdContent += `  - Requires: ${pr}\n`;
      });
      mdContent += `- **Companies**: ${p.companies.join(', ')}\n`;
      mdContent += `- **Interview Frequency**: ${p.frequency}\n`;
      mdContent += `- **Estimated Solve Time**: ${p.solveTime}\n`;
      mdContent += `- **Time Complexity**: ${p.tc}\n`;
      mdContent += `- **Space Complexity**: ${p.sc}\n`;
      mdContent += `- **Status**: ☐ Not Started\n`;
      mdContent += `- **Personal Confidence**: ⭐⭐⭐⭐⭐\n`;
      mdContent += `- **Notes**: \n`;
      mdContent += `- **Common Mistakes**: ${p.commonMistakes}\n`;
      mdContent += `- **Hints**:\n`;
      p.hints.forEach((hint, hIdx) => {
        mdContent += `  - Hint ${hIdx + 1}: ${hint}\n`;
      });
      mdContent += `- **Similar Problems**:\n`;
      p.similarProblems.forEach(s => {
        mdContent += `  - [${s.name}](${s.link})\n`;
      });
      mdContent += `- **Harder Follow-up Problems**:\n`;
      p.harderFollowUps.forEach(f => {
        mdContent += `  - [${f.name}](${f.link})\n`;
      });
      mdContent += `- **Learning Lists**: ${p.learningLists}\n`;
      mdContent += `- **Tags**: ${p.tags.join(', ')}\n\n---\n\n`;
    });

    const estTime = Math.ceil(totalProblems * 0.75);
    mdContent += `### 📊 Topic Summary (Lec ${lec.lectureNumber}: ${lec.lectureTitle})\n`;
    mdContent += `- **Problems**: ${lec.problems.length}\n`;
    mdContent += `- **Easy**: ${lec.problems.filter(x => x.difficulty === 'Easy').length} | **Medium**: ${lec.problems.filter(x => x.difficulty === 'Medium').length} | **Hard**: ${lec.problems.filter(x => x.difficulty === 'Hard').length}\n`;
    mdContent += `- **Estimated Time**: ${estTime} hours\n`;
    mdContent += `- **Estimated Revision Time**: ${Math.ceil(estTime * 0.3)} hours\n\n---\n\n`;
  });

  const overallTime = Math.ceil(totalProblems * 0.75);
  mdContent += `## 📈 Step ${stepNum} Dashboard & Summary\n\n`;
  mdContent += `### 🏁 Lectures & Topics Covered\n`;
  formattedLectures.forEach(l => {
    mdContent += `- **Lec ${l.lectureNumber}: ${l.lectureTitle}** - ${l.problems.length} Problems\n`;
  });
  mdContent += `\n### 📊 Aggregated Metrics\n`;
  mdContent += `- **Total Problems**: ${totalProblems}\n`;
  mdContent += `- **Easy Problems**: ${easyCount}\n`;
  mdContent += `- **Medium Problems**: ${mediumCount}\n`;
  mdContent += `- **Hard Problems**: ${hardCount}\n`;
  mdContent += `- **Estimated Learning Time**: ${overallTime} hours\n`;
  mdContent += `- **Estimated Revision Time**: ${Math.ceil(overallTime * 0.3)} hours\n\n`;
  mdContent += `### 🔑 Unlocked Concepts & Skills\n`;
  mdContent += `- Advanced algorithmic approaches and structural mappings.\n`;
  mdContent += `- Complex state calculations and optimizations.\n`;

  fs.writeFileSync(path.join(markdownDir, mdFilename), mdContent);
  console.log(`Successfully generated Markdown file: ${mdFilename}`);
});

// 3. Create master allSteps.js
let masterJsContent = '';
stepsCatalog.forEach(step => {
  masterJsContent += `import { step${step.stepNumber}Data } from './step${step.stepNumber}';\n`;
});
masterJsContent += `\nexport const allStepsData = {\n`;
stepsCatalog.forEach(step => {
  masterJsContent += `  ${step.stepNumber}: step${step.stepNumber}Data,\n`;
});
masterJsContent += `};\n`;

fs.writeFileSync(path.join(dataDir, 'allSteps.js'), masterJsContent);
console.log("Successfully generated allSteps.js");
