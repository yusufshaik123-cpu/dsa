export const step2Data = {
  stepNumber: 2,
  stepTitle: "Learn Important Sorting Techniques",
  lectures: [
    {
      lectureNumber: 1,
      lectureTitle: "Sorting-I",
      problems: [
        {
          id: "s2_l1_p1",
          name: "Selection Sort",
          difficulty: "Easy",
          pattern: "Sorting",
          primaryLink: "https://www.geeksforgeeks.org/problems/selection-sort/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/selection-sort/1" },
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/selection-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/sorting/selection-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=HGk_ypEUj24"
          },
          alternativeVideos: [
            { name: "Abdul Bari (Selection Sort)", link: "https://www.youtube.com/watch?v=CoN8F1ZdfG8" }
          ],
          prerequisites: ["Arrays", "Nested Loops"],
          companies: ["TCS", "Infosys", "Wipro"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(N^2)",
          sc: "O(1)",
          commonMistakes: "Swapping elements unnecessarily when the minimum is already at the correct position, or starting the inner loop index incorrectly.",
          hints: [
            "Select the minimum element from the unsorted subarray and swap it with the element at the beginning of the unsorted subarray.",
            "Iterate from index 0 to N-2 as the outer loop.",
            "The inner loop starts from i up to N-1 to find the minimum element in the remaining unsorted portion."
          ],
          similarProblems: [
            { name: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/" }
          ],
          harderFollowUps: [
            { name: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" }
          ],
          learningLists: "Not Included",
          tags: ["Sorting", "Arrays", "Easy"]
        },
        {
          id: "s2_l1_p2",
          name: "Bubble Sort",
          difficulty: "Easy",
          pattern: "Sorting",
          primaryLink: "https://www.geeksforgeeks.org/problems/bubble-sort/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/bubble-sort/1" },
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/bubble-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/sorting/bubble-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=HGk_ypEUj24"
          },
          alternativeVideos: [
            { name: "Abdul Bari (Bubble Sort)", link: "https://www.youtube.com/watch?v=Vca808JTbI8" }
          ],
          prerequisites: ["Arrays", "Nested Loops"],
          companies: ["Cognizant", "Accenture"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(N^2) worst case, O(N) optimized best case",
          sc: "O(1)",
          commonMistakes: "Continuing to run the outer loop even if the array is already sorted, resulting in redundant iterations.",
          hints: [
            "Repeatedly swap adjacent elements if they are in the wrong order.",
            "In each pass, the largest unsorted element bubbles up to its correct position at the end.",
            "Optimize by adding a flag to check if any swap occurred in a pass. If no swaps occurred, the array is already sorted."
          ],
          similarProblems: [
            { name: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Sorting", "Arrays", "Easy"]
        },
        {
          id: "s2_l1_p3",
          name: "Insertion Sort",
          difficulty: "Easy",
          pattern: "Sorting",
          primaryLink: "https://www.geeksforgeeks.org/problems/insertion-sort/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/insertion-sort/1" },
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/insertion-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/sorting/insertion-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=HGk_ypEUj24"
          },
          alternativeVideos: [
            { name: "Abdul Bari (Insertion Sort)", link: "https://www.youtube.com/watch?v=i-SKeOcBwko" }
          ],
          prerequisites: ["Arrays", "Nested Loops"],
          companies: ["Amazon", "Cisco"],
          frequency: "Medium",
          solveTime: "20-30 mins",
          tc: "O(N^2) worst case, O(N) best case",
          sc: "O(1)",
          commonMistakes: "Incorrectly shifting array elements or overwriting values without copying the key element.",
          hints: [
            "Build the sorted array one element at a time by consuming one input element per repetition and placing it in its proper position.",
            "Start the outer loop from index 1. Store the element at index i as the key.",
            "Shift elements of the sorted segment (to the left of key) that are larger than the key one position to the right."
          ],
          similarProblems: [
            { name: "Insertion Sort List", link: "https://leetcode.com/problems/insertion-sort-list/" }
          ],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Sorting", "Arrays", "Easy"]
        }
      ]
    },
    {
      lectureNumber: 2,
      lectureTitle: "Sorting-II",
      problems: [
        {
          id: "s2_l2_p1",
          name: "Merge Sort",
          difficulty: "Medium",
          pattern: "Divide & Conquer",
          primaryLink: "https://www.geeksforgeeks.org/problems/merge-sort/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/merge-sort/1" },
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/merge-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/merge-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=ogkf3tD3ee0"
          },
          alternativeVideos: [
            { name: "Abdul Bari (Merge Sort)", link: "https://www.youtube.com/watch?v=TzeBrDU-JaY" }
          ],
          prerequisites: ["Recursion", "Divide & Conquer basic concepts"],
          companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs"],
          frequency: "Very High",
          solveTime: "30-60 mins",
          tc: "O(N log N)",
          sc: "O(N) auxiliary space",
          commonMistakes: "Using invalid midpoints (like (low+high)/2 which can overflow in some languages) or forgetting to copy elements back from the temporary array.",
          hints: [
            "Divide the array into two halves recursively until each subarray has size 1.",
            "Merge two sorted halves by comparing elements and building a temporary sorted array.",
            "Copy the elements from the temporary array back into the original array."
          ],
          similarProblems: [
            { name: "Sort An Array", link: "https://leetcode.com/problems/sort-an-array/" },
            { name: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/" }
          ],
          harderFollowUps: [
            { name: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" }
          ],
          learningLists: "LeetCode Top Interview 150",
          tags: ["Sorting", "Divide-Conquer", "Recursion", "Medium"]
        },
        {
          id: "s2_l2_p2",
          name: "Recursive Bubble Sort",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/recursive-bubble-sort/0",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/bubble-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/sorting/recursive-bubble-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=yVdKa8dnKiE"
          },
          alternativeVideos: [],
          prerequisites: ["Bubble Sort", "Recursion"],
          companies: ["TCS", "Accenture"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(N^2)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Forgetting the base case (size N <= 1) causing a Stack Overflow.",
          hints: [
            "Perform one pass of bubble sort to move the largest element to the end.",
            "Recursively call the sorting function on the remaining N-1 elements.",
            "Base Case: If the array size is 1, return."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Sorting", "Recursion", "Easy"]
        },
        {
          id: "s2_l2_p3",
          name: "Recursive Insertion Sort",
          difficulty: "Easy",
          pattern: "Recursion",
          primaryLink: "https://www.geeksforgeeks.org/problems/recursive-insertion-sort/0",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/insertion-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/sorting/recursive-insertion-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=yVdKa8dnKiE"
          },
          alternativeVideos: [],
          prerequisites: ["Insertion Sort", "Recursion"],
          companies: ["Infosys"],
          frequency: "Low",
          solveTime: "20-30 mins",
          tc: "O(N^2)",
          sc: "O(N) recursion stack space",
          commonMistakes: "Not passing the correct index index/size recursively, or incorrect shifts in the recursive stack.",
          hints: [
            "Recursively sort the first N-1 elements.",
            "Insert the Nth element into its correct sorted position in the remaining subarray.",
            "Base Case: If index is N, return."
          ],
          similarProblems: [],
          harderFollowUps: [],
          learningLists: "Not Included",
          tags: ["Sorting", "Recursion", "Easy"]
        },
        {
          id: "s2_l2_p4",
          name: "Quick Sort",
          difficulty: "Medium",
          pattern: "Divide & Conquer",
          primaryLink: "https://www.geeksforgeeks.org/problems/quick-sort/1",
          alternativeLinks: [
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/quick-sort/1" },
            { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/problems/quick-sort/1" }
          ],
          striverSolution: {
            article: "https://takeuforward.org/data-structure/quick-sort-algorithm/",
            video: "https://www.youtube.com/watch?v=WIrA4YexLRQ"
          },
          alternativeVideos: [
            { name: "Abdul Bari (Quick Sort)", link: "https://www.youtube.com/watch?v=7h1s2SojIRw" }
          ],
          prerequisites: ["Recursion", "Partition index logic"],
          companies: ["Google", "Facebook", "Amazon", "Bloomberg", "Atlassian"],
          frequency: "Very High",
          solveTime: "30-60 mins",
          tc: "O(N log N) average case, O(N^2) worst case",
          sc: "O(log N) stack space",
          commonMistakes: "Incorrect partition boundary indexes or poorly selected pivot resulting in performance degradation to O(N^2).",
          hints: [
            "Pick a pivot element (e.g. first element, last element, or random).",
            "Rearrange the array so that all elements smaller than pivot go to the left and larger go to the right (partition process).",
            "Recursively apply quick sort to left and right subarrays."
          ],
          similarProblems: [
            { name: "Sort An Array", link: "https://leetcode.com/problems/sort-an-array/" }
          ],
          harderFollowUps: [
            { name: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" }
          ],
          learningLists: "LeetCode Top Interview 150",
          tags: ["Sorting", "Divide-Conquer", "Recursion", "Medium"]
        }
      ]
    }
  ]
};
