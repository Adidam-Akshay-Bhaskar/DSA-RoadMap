import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const dsaData = [
  {
    id: 1,
    order: "01",
    emoji: "🔢",
    title: "Math & Bit Manipulation",
    subtitle: "Prerequisites",
    color: "#64B5F6",
    structures: ["Integers", "Bits", "Number Line"],
    algorithms: [
      "GCD / LCM (Euclidean Algorithm)",
      "Sieve of Eratosthenes (Prime Numbers)",
      "Fast Exponentiation",
      "Modular Arithmetic",
      "Integer Overflow Handling",
      "AND / OR / XOR / NOT",
      "Left Shift / Right Shift",
      "Bit Masking",
      "Count Set Bits (Brian Kernighan's)",
    ],
    patterns: [
      "XOR to find unique element",
      "Check Power of 2 — (n & n-1) == 0",
      "Swap without temp (XOR swap)",
      "Get / Set / Clear a specific bit",
    ],
    questions: [
      { id: 7, name: "Reverse Integer", difficulty: "M" },
      { id: 9, name: "Palindrome Number", difficulty: "E" },
      { id: 29, name: "Divide Two Integers", difficulty: "M" },
      { id: 50, name: "Pow(x, n)", difficulty: "M" },
      { id: 66, name: "Plus One", difficulty: "E" },
      { id: 67, name: "Add Binary", difficulty: "E" },
      { id: 69, name: "Sqrt(x)", difficulty: "E" },
      { id: 136, name: "Single Number", difficulty: "E" },
      { id: 137, name: "Single Number II", difficulty: "M" },
      { id: 168, name: "Excel Sheet Column Title", difficulty: "E" },
      { id: 171, name: "Excel Sheet Column Number", difficulty: "E" },
      { id: 190, name: "Reverse Bits", difficulty: "E" },
      { id: 191, name: "Number of 1 Bits", difficulty: "E" },
      { id: 201, name: "Bitwise AND of Numbers Range", difficulty: "M" },
      { id: 202, name: "Happy Number", difficulty: "E" },
      { id: 204, name: "Count Primes (Sieve)", difficulty: "M" },
      { id: 231, name: "Power of Two", difficulty: "E" },
      { id: 260, name: "Single Number III", difficulty: "M" },
      { id: 268, name: "Missing Number", difficulty: "E" },
      { id: 326, name: "Power of Three", difficulty: "E" },
      { id: 338, name: "Counting Bits", difficulty: "E" },
      { id: 371, name: "Sum of Two Integers (no +)", difficulty: "M" },
      { id: 461, name: "Hamming Distance", difficulty: "E" },
      { id: 477, name: "Total Hamming Distance", difficulty: "M" },
    ],
  },
  {
    id: 2,
    order: "02",
    emoji: "📦",
    title: "Arrays",
    subtitle: "Foundation",
    color: "#FF7043",
    structures: [
      "Static Array",
      "Dynamic Array (ArrayList / Vector)",
      "Multi-dimensional Array",
    ],
    algorithms: [
      "Linear Search — O(n)",
      "Binary Search — O(log n)",
      "Bubble Sort — O(n²)",
      "Selection Sort — O(n²)",
      "Insertion Sort — O(n²)",
      "Merge Sort — O(n log n)",
      "Quick Sort — O(n log n) avg",
      "Counting Sort — O(n+k)",
      "Prefix Sum Construction — O(n)",
      "Kadane's Algorithm (Max Subarray)",
      "Dutch National Flag (3-way partition)",
    ],
    patterns: [
      "Two Pointers (opposite ends)",
      "Fast & Slow Pointers",
      "Sliding Window — Fixed Size",
      "Sliding Window — Variable Size",
      "Prefix Sum",
      "Suffix Sum",
      "Binary Search on Answer",
      "Divide & Conquer",
    ],
    questions: [
      { id: 1, name: "Two Sum", difficulty: "E" },
      { id: 11, name: "Container With Most Water", difficulty: "M" },
      { id: 15, name: "3Sum", difficulty: "M" },
      { id: 16, name: "3Sum Closest", difficulty: "M" },
      { id: 18, name: "4Sum", difficulty: "M" },
      { id: 42, name: "Trapping Rain Water", difficulty: "H" },
      { id: 45, name: "Jump Game II", difficulty: "M" },
      { id: 53, name: "Maximum Subarray (Kadane)", difficulty: "M" },
      { id: 54, name: "Spiral Matrix", difficulty: "M" },
      { id: 55, name: "Jump Game", difficulty: "M" },
      { id: 56, name: "Merge Intervals", difficulty: "M" },
      { id: 57, name: "Insert Interval", difficulty: "M" },
      { id: 59, name: "Spiral Matrix II", difficulty: "M" },
      { id: 4, name: "Median of Two Sorted Arrays", difficulty: "H" },
      { id: 73, name: "Set Matrix Zeroes", difficulty: "M" },
      { id: 75, name: "Sort Colors (Dutch Flag)", difficulty: "M" },
      { id: 121, name: "Best Time to Buy/Sell Stock", difficulty: "E" },
      { id: 122, name: "Best Time to Buy/Sell Stock II", difficulty: "M" },
      { id: 123, name: "Best Time to Buy/Sell Stock III", difficulty: "H" },
      { id: 152, name: "Maximum Product Subarray", difficulty: "M" },
      { id: 153, name: "Find Min in Rotated Sorted Array", difficulty: "M" },
      { id: 162, name: "Find Peak Element", difficulty: "M" },
      { id: 188, name: "Best Time to Buy/Sell Stock IV", difficulty: "H" },
      { id: 189, name: "Rotate Array", difficulty: "M" },
      { id: 217, name: "Contains Duplicate", difficulty: "E" },
      { id: 219, name: "Contains Duplicate II", difficulty: "E" },
      { id: 220, name: "Contains Duplicate III", difficulty: "H" },
      { id: 238, name: "Product of Array Except Self", difficulty: "M" },
      { id: 283, name: "Move Zeroes", difficulty: "E" },
      { id: 289, name: "Game of Life", difficulty: "M" },
      { id: 33, name: "Search in Rotated Sorted Array", difficulty: "M" },
      { id: 435, name: "Non-overlapping Intervals", difficulty: "M" },
      { id: 560, name: "Subarray Sum Equals K", difficulty: "M" },
    ],
  },
  {
    id: 3,
    order: "03",
    emoji: "🔤",
    title: "Strings",
    subtitle: "Foundation",
    color: "#FFA726",
    structures: [
      "String (immutable)",
      "StringBuilder / StringBuffer",
      "Character Array",
      "Frequency Array (char[26])",
    ],
    algorithms: [
      "Linear Scan",
      "Two Pointer on String",
      "KMP Pattern Matching — O(n+m)",
      "Rabin-Karp (Rolling Hash)",
      "Z-Algorithm",
      "Anagram Check (Frequency Map)",
    ],
    patterns: [
      "Sliding Window on String",
      "Two Pointers (Palindrome check)",
      "Hashing / Frequency Count",
      "Expand Around Center (Palindrome)",
    ],
    questions: [
      { id: 3, name: "Longest Substring Without Repeating Chars", difficulty: "M" },
      { id: 5, name: "Longest Palindromic Substring", difficulty: "M" },
      { id: 6, name: "Zigzag Conversion", difficulty: "M" },
      { id: 8, name: "String to Integer (atoi)", difficulty: "M" },
      { id: 14, name: "Longest Common Prefix", difficulty: "E" },
      { id: 20, name: "Valid Parentheses", difficulty: "E" },
      { id: 28, name: "Implement strStr", difficulty: "E" },
      { id: 43, name: "Multiply Strings", difficulty: "M" },
      { id: 49, name: "Group Anagrams", difficulty: "M" },
      { id: 76, name: "Minimum Window Substring", difficulty: "H" },
      { id: 125, name: "Valid Palindrome", difficulty: "E" },
      { id: 205, name: "Isomorphic Strings", difficulty: "E" },
      { id: 242, name: "Valid Anagram", difficulty: "E" },
      { id: 271, name: "Encode & Decode Strings", difficulty: "M" },
      { id: 424, name: "Longest Repeating Char Replacement", difficulty: "M" },
      { id: 438, name: "Find All Anagrams in String", difficulty: "M" },
      { id: 647, name: "Palindromic Substrings", difficulty: "M" },
    ],
  },
  {
    id: 4,
    order: "04",
    emoji: "🗂️",
    title: "Hashing",
    subtitle: "Foundation",
    color: "#FFCA28",
    structures: ["HashMap / HashTable", "HashSet", "LinkedHashMap"],
    algorithms: [
      "Hash Function Design",
      "Collision Handling — Chaining",
      "Collision Handling — Open Addressing",
      "Frequency Count",
      "Rolling Hash",
    ],
    patterns: [
      "Count Frequencies",
      "Seen / Visited Set",
      "Complement Lookup (Two Sum pattern)",
      "Prefix Sum + HashMap",
      "Grouping by Key",
    ],
    questions: [
      { id: 1, name: "Two Sum (HashMap)", difficulty: "E" },
      { id: 49, name: "Group Anagrams", difficulty: "M" },
      { id: 128, name: "Longest Consecutive Sequence", difficulty: "M" },
      { id: 202, name: "Happy Number", difficulty: "E" },
      { id: 205, name: "Isomorphic Strings", difficulty: "E" },
      { id: 242, name: "Valid Anagram", difficulty: "E" },
      { id: 287, name: "Find Duplicate in Array", difficulty: "M" },
      { id: 290, name: "Word Pattern", difficulty: "E" },
      { id: 347, name: "Top K Frequent Elements", difficulty: "M" },
      { id: 438, name: "Find All Anagrams in String", difficulty: "M" },
      { id: 454, name: "Four Sum II", difficulty: "M" },
      { id: 523, name: "Continuous Subarray Sum", difficulty: "M" },
      { id: 560, name: "Subarray Sum Equals K", difficulty: "M" },
    ],
  },
  {
    id: 5,
    order: "05",
    emoji: "📚",
    title: "Stack",
    subtitle: "Linear DS",
    color: "#66BB6A",
    structures: [
      "Array-backed Stack",
      "LinkedList-backed Stack",
      "Monotonic Stack",
    ],
    algorithms: [
      "Push / Pop / Peek — O(1)",
      "DFS using explicit Stack",
      "Iterative Tree Traversal (Inorder/Preorder)",
      "Balanced Parentheses Check",
      "Monotonic Increasing Stack",
      "Monotonic Decreasing Stack",
    ],
    patterns: [
      "Monotonic Stack — Next Greater Element",
      "Monotonic Stack — Next Smaller Element",
      "Min Stack (auxiliary stack)",
      "Two-Stack Queue simulation",
      "Stack for expression evaluation",
    ],
    questions: [
      { id: 20, name: "Valid Parentheses", difficulty: "E" },
      { id: 42, name: "Trapping Rain Water", difficulty: "H" },
      { id: 84, name: "Largest Rectangle in Histogram", difficulty: "H" },
      { id: 150, name: "Evaluate Reverse Polish Notation", difficulty: "M" },
      { id: 155, name: "Min Stack", difficulty: "M" },
      { id: 224, name: "Basic Calculator", difficulty: "H" },
      { id: 227, name: "Basic Calculator II", difficulty: "M" },
      { id: 394, name: "Decode String", difficulty: "M" },
      { id: 402, name: "Remove K Digits", difficulty: "M" },
      { id: 456, name: "132 Pattern", difficulty: "M" },
      { id: 496, name: "Next Greater Element I", difficulty: "E" },
      { id: 503, name: "Next Greater Element II", difficulty: "M" },
      { id: 735, name: "Asteroid Collision", difficulty: "M" },
      { id: 739, name: "Daily Temperatures", difficulty: "M" },
    ],
  },
  {
    id: 6,
    order: "06",
    emoji: "🚶",
    title: "Queue & Deque",
    subtitle: "Linear DS",
    color: "#26C6DA",
    structures: [
      "Array Queue",
      "LinkedList Queue",
      "Circular Queue",
      "Deque (Double-ended Queue)",
    ],
    algorithms: [
      "Enqueue / Dequeue — O(1)",
      "BFS using Queue",
      "Circular Buffer",
      "Monotonic Deque for Window Max",
    ],
    patterns: [
      "BFS Level-by-Level",
      "Sliding Window Maximum (Monotonic Deque)",
      "Queue from Two Stacks",
    ],
    questions: [
      { id: 102, name: "BFS — Binary Tree Level Order Traversal", difficulty: "M" },
      { id: 225, name: "Implement Stack using Queues", difficulty: "E" },
      { id: 232, name: "Implement Queue using Stacks", difficulty: "E" },
      { id: 239, name: "Sliding Window Maximum", difficulty: "H" },
      { id: 387, name: "First Unique Character in String", difficulty: "E" },
      { id: 622, name: "Design Circular Queue", difficulty: "M" },
      { id: 641, name: "Design Circular Deque", difficulty: "M" },
      { id: 933, name: "Number of Recent Calls", difficulty: "E" },
    ],
  },
  {
    id: 7,
    order: "07",
    emoji: "🔗",
    title: "Linked List",
    subtitle: "Linear DS",
    color: "#4DB6AC",
    structures: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Linked List",
    ],
    algorithms: [
      "Traversal — O(n)",
      "Insert at Head / Tail / Position",
      "Delete a Node",
      "Reverse Iteratively",
      "Reverse Recursively",
      "Floyd's Cycle Detection Algorithm",
      "Merge Sort on Linked List",
      "Find Middle (Fast & Slow pointer)",
    ],
    patterns: [
      "Fast & Slow Pointers (Floyd's)",
      "In-place Reversal of sub-list",
      "Dummy Head Node trick",
      "Two Pointers distance-based (Nth from end)",
      "Merge Two Sorted Lists",
    ],
    questions: [
      { id: 2, name: "Add Two Numbers", difficulty: "M" },
      { id: 19, name: "Remove Nth Node From End", difficulty: "M" },
      { id: 21, name: "Merge Two Sorted Lists", difficulty: "E" },
      { id: 138, name: "Copy List with Random Pointer", difficulty: "M" },
      { id: 141, name: "Detect Cycle", difficulty: "E" },
      { id: 142, name: "Linked List Cycle II", difficulty: "M" },
      { id: 143, name: "Reorder List", difficulty: "M" },
      { id: 146, name: "LRU Cache", difficulty: "H" },
      { id: 148, name: "Sort List (Merge Sort on LL)", difficulty: "M" },
      { id: 160, name: "Intersection of Two Linked Lists", difficulty: "E" },
      { id: 206, name: "Reverse Linked List", difficulty: "E" },
      { id: 234, name: "Palindrome Linked List", difficulty: "E" },
      { id: 430, name: "Flatten Multilevel Linked List", difficulty: "M" },
      { id: 876, name: "Find Middle of Linked List", difficulty: "E" },
    ],
  },
  {
    id: 8,
    order: "08",
    emoji: "🌳",
    title: "Binary Tree",
    subtitle: "Non-Linear DS",
    color: "#A5D6A7",
    structures: [
      "Binary Tree Node",
      "Binary Search Tree (BST)",
      "Complete Binary Tree",
    ],
    algorithms: [
      "Inorder Traversal — Left→Root→Right",
      "Preorder Traversal — Root→Left→Right",
      "Postorder Traversal — Left→Right→Root",
      "Level Order Traversal (BFS)",
      "DFS — Recursive",
      "DFS — Iterative (Stack)",
      "Morris Traversal — O(1) space",
      "BST Insert / Delete / Search",
      "Height / Depth Calculation",
    ],
    patterns: [
      "Top-Down DFS (pass value down)",
      "Bottom-Up DFS (collect from children)",
      "BFS Level-by-Level",
      "Path problems — Root to Leaf",
      "LCA — Binary Lifting",
    ],
    questions: [
      { id: 100, name: "Same Tree", difficulty: "E" },
      { id: 101, name: "Symmetric Tree", difficulty: "E" },
      { id: 102, name: "Level Order Traversal", difficulty: "M" },
      { id: 103, name: "Zigzag Level Order Traversal", difficulty: "M" },
      { id: 104, name: "Max Depth of Binary Tree", difficulty: "E" },
      { id: 105, name: "Construct from Preorder + Inorder", difficulty: "M" },
      { id: 110, name: "Balanced Binary Tree", difficulty: "E" },
      { id: 112, name: "Path Sum", difficulty: "E" },
      { id: 113, name: "Path Sum II", difficulty: "M" },
      { id: 114, name: "Flatten Tree to Linked List", difficulty: "M" },
      { id: 124, name: "Binary Tree Max Path Sum", difficulty: "H" },
      { id: 199, name: "Right Side View", difficulty: "M" },
      { id: 226, name: "Invert Binary Tree", difficulty: "E" },
      { id: 230, name: "Kth Smallest in BST", difficulty: "M" },
      { id: 235, name: "Lowest Common Ancestor (BST)", difficulty: "M" },
      { id: 236, name: "Lowest Common Ancestor (BT)", difficulty: "M" },
      { id: 297, name: "Serialize / Deserialize Binary Tree", difficulty: "H" },
      { id: 543, name: "Diameter of Binary Tree", difficulty: "E" },
      { id: 98, name: "Validate BST", difficulty: "M" },
      { id: 1448, name: "Count Good Nodes", difficulty: "M" },
    ],
  },
  {
    id: 9,
    order: "09",
    emoji: "🌲",
    title: "Advanced Trees",
    subtitle: "Non-Linear DS",
    color: "#81C784",
    structures: [
      "Trie (Prefix Tree)",
      "Segment Tree",
      "Fenwick Tree (Binary Indexed Tree)",
      "AVL Tree",
      "N-ary Tree",
    ],
    algorithms: [
      "Trie Insert / Search / StartsWith — O(L)",
      "Segment Tree Build — O(n)",
      "Segment Tree Range Query / Point Update — O(log n)",
      "BIT (Fenwick) Prefix Sum Query / Update — O(log n)",
      "N-ary Tree Traversal",
    ],
    patterns: [
      "Prefix Matching (Trie)",
      "Word Search (Trie + Backtracking)",
      "Range Query (Segment Tree / BIT)",
    ],
    questions: [
      { id: 98, name: "Validate Binary Search Tree", difficulty: "M" },
      { id: 99, name: "Recover Binary Search Tree", difficulty: "H" },
      { id: 208, name: "Implement Trie", difficulty: "M" },
      { id: 211, name: "Add & Search Words (Wildcard Trie)", difficulty: "M" },
      { id: 212, name: "Word Search II", difficulty: "H" },
      { id: 230, name: "Kth Smallest Element in BST", difficulty: "M" },
      { id: 297, name: "Serialize & Deserialize Binary Tree", difficulty: "H" },
      { id: 307, name: "Range Sum Query — Mutable", difficulty: "M" },
      { id: 315, name: "Count of Smaller Numbers After Self", difficulty: "H" },
      { id: 429, name: "N-ary Tree Level Order", difficulty: "M" },
      { id: 450, name: "Delete Node in BST", difficulty: "M" },
      { id: 648, name: "Replace Words", difficulty: "M" },
      { id: 1008, name: "Construct BST from Preorder Traversal", difficulty: "M" },
      { id: 1268, name: "Search Suggestions System", difficulty: "M" },
    ],
  },
  {
    id: 10,
    order: "10",
    emoji: "⛰️",
    title: "Heap / Priority Queue",
    subtitle: "Non-Linear DS",
    color: "#EF9A9A",
    structures: ["Min Heap", "Max Heap", "Custom Comparator Heap"],
    algorithms: [
      "Heapify — O(n)",
      "Insert — O(log n)",
      "Extract Min/Max — O(log n)",
      "Heap Sort — O(n log n)",
      "K-way Merge with Min Heap",
    ],
    patterns: [
      "Top K Elements — Max Heap",
      "Kth Largest/Smallest — Min Heap of size K",
      "Two Heaps — Median Stream",
      "K-way Merge — Min Heap",
      "Greedy scheduling with Heap",
    ],
    questions: [
      { id: 215, name: "Kth Largest Element in Array", difficulty: "M" },
      { id: 347, name: "Top K Frequent Elements", difficulty: "M" },
      { id: 295, name: "Find Median from Data Stream", difficulty: "H" },
      { id: 621, name: "Task Scheduler", difficulty: "M" },
      { id: 973, name: "K Closest Points to Origin", difficulty: "M" },
      { id: 23, name: "Merge K Sorted Lists", difficulty: "H" },
      { id: 767, name: "Reorganize String", difficulty: "M" },
      { id: 480, name: "Sliding Window Median", difficulty: "H" },
      { id: 373, name: "Find K Pairs with Smallest Sums", difficulty: "M" },
      { id: 502, name: "IPO (Maximize Capital)", difficulty: "H" },
    ],
  },
  {
    id: 11,
    order: "11",
    emoji: "🔷",
    title: "Graphs",
    subtitle: "Non-Linear DS",
    color: "#CE93D8",
    structures: [
      "Adjacency List",
      "Adjacency Matrix",
      "Edge List",
      "Union-Find (Disjoint Set Union — DSU)",
    ],
    algorithms: [
      "BFS — O(V+E)",
      "DFS — O(V+E)",
      "Topological Sort — Kahn's BFS",
      "Topological Sort — DFS + Stack",
      "Cycle Detection — Directed (DFS colors)",
      "Cycle Detection — Undirected (Union-Find)",
      "Dijkstra's Shortest Path — O((V+E) log V)",
      "Bellman-Ford — O(V·E)",
      "Floyd-Warshall All-Pairs — O(V³)",
      "Kruskal's MST — Sort + Union-Find",
      "Prim's MST — Min Heap",
      "Bipartite Check (2-coloring BFS)",
    ],
    patterns: [
      "BFS Shortest Path (unweighted graph)",
      "DFS Island Counting",
      "Union-Find — Connectivity",
      "Topological Sort — Dependency order",
      "Multi-source BFS",
      "0/1 BFS using Deque",
    ],
    questions: [
      { id: 127, name: "Word Ladder", difficulty: "H" },
      { id: 133, name: "Clone Graph", difficulty: "M" },
      { id: 200, name: "Number of Islands", difficulty: "M" },
      { id: 207, name: "Course Schedule I", difficulty: "M" },
      { id: 210, name: "Course Schedule II", difficulty: "M" },
      { id: 261, name: "Graph Valid Tree", difficulty: "M" },
      { id: 269, name: "Alien Dictionary", difficulty: "H" },
      { id: 323, name: "Number of Connected Components", difficulty: "M" },
      { id: 417, name: "Pacific Atlantic Water Flow", difficulty: "M" },
      { id: 684, name: "Redundant Connection", difficulty: "M" },
      { id: 743, name: "Network Delay Time", difficulty: "M" },
      { id: 778, name: "Swim in Rising Water", difficulty: "H" },
      { id: 785, name: "Is Graph Bipartite?", difficulty: "M" },
      { id: 787, name: "Cheapest Flights Within K Stops", difficulty: "M" },
      { id: 994, name: "Rotting Oranges", difficulty: "M" },
      { id: 1584, name: "Min Cost to Connect All Points", difficulty: "M" },
    ],
  },
  {
    id: 12,
    order: "12",
    emoji: "🔙",
    title: "Recursion & Backtracking",
    subtitle: "Technique",
    color: "#F48FB1",
    structures: ["Recursion Tree", "Call Stack"],
    algorithms: [
      "Base Case + Recursive Case",
      "Backtrack Template — choose → explore → unchoose",
      "Pruning / Early Termination",
      "Memoization on top of Recursion",
    ],
    patterns: [
      "Subsets — Power Set",
      "Permutations",
      "Combinations",
      "N-Queens Style — Constraint Satisfaction",
      "Decision Tree Backtracking",
    ],
    questions: [
      { id: 78, name: "Subsets", difficulty: "M" },
      { id: 90, name: "Subsets II", difficulty: "M" },
      { id: 46, name: "Permutations", difficulty: "M" },
      { id: 47, name: "Permutations II", difficulty: "M" },
      { id: 39, name: "Combination Sum", difficulty: "M" },
      { id: 40, name: "Combination Sum II", difficulty: "M" },
      { id: 79, name: "Word Search", difficulty: "M" },
      { id: 51, name: "N-Queens", difficulty: "H" },
      { id: 37, name: "Sudoku Solver", difficulty: "H" },
      { id: 131, name: "Palindrome Partitioning", difficulty: "M" },
      { id: 17, name: "Letter Combinations of Phone Number", difficulty: "M" },
      { id: 22, name: "Generate Parentheses", difficulty: "M" },
    ],
  },
  {
    id: 13,
    order: "13",
    emoji: "🧩",
    title: "Greedy",
    subtitle: "Technique",
    color: "#FFAB40",
    structures: ["Sorted Array", "Priority Queue"],
    algorithms: [
      "Activity Selection by End Time",
      "Huffman Coding",
      "Fractional Knapsack",
      "Interval Scheduling Maximization",
    ],
    patterns: [
      "Sort + Greedy Choice Property",
      "Interval Scheduling — sort by end time",
      "Jump Game — greedy farthest reach",
      "Two Pointer Greedy",
    ],
    questions: [
      { id: 45, name: "Jump Game II", difficulty: "M" },
      { id: 55, name: "Jump Game I", difficulty: "M" },
      { id: 134, name: "Gas Station", difficulty: "M" },
      { id: 135, name: "Candy", difficulty: "H" },
      { id: 253, name: "Meeting Rooms II", difficulty: "M" },
      { id: 406, name: "Queue Reconstruction by Height", difficulty: "M" },
      { id: 435, name: "Non-overlapping Intervals", difficulty: "M" },
      { id: 452, name: "Min Arrows to Burst Balloons", difficulty: "M" },
      { id: 621, name: "Task Scheduler", difficulty: "M" },
      { id: 678, name: "Valid Parenthesis String", difficulty: "M" },
      { id: 763, name: "Partition Labels", difficulty: "M" },
      { id: 846, name: "Hand of Straights", difficulty: "M" },
      { id: 1899, name: "Merge Triplets to Form Target", difficulty: "M" },
    ],
  },
  {
    id: 14,
    order: "14",
    emoji: "🔄",
    title: "Dynamic Programming",
    subtitle: "Technique",
    color: "#80DEEA",
    structures: [
      "1D DP Array",
      "2D DP Table",
      "Memoization HashMap",
      "Rolling Array (space optimization)",
    ],
    algorithms: [
      "Top-Down DP — Memoization",
      "Bottom-Up DP — Tabulation",
      "Space-Optimized DP (rolling row)",
      "Bitmask DP",
      "Digit DP",
    ],
    patterns: [
      "1D DP — Fibonacci / House Robber",
      "0/1 Knapsack",
      "Unbounded Knapsack (Coin Change)",
      "Longest Common Subsequence (LCS)",
      "Longest Increasing Subsequence (LIS — O(n log n))",
      "Edit Distance",
      "Matrix DP — Unique Paths",
      "Interval DP — Burst Balloons",
      "State Machine DP — Stock Problems",
      "Partition DP",
      "DP on Trees",
    ],
    questions: [
      { id: 10, name: "Regular Expression Matching", difficulty: "H" },
      { id: 62, name: "Unique Paths", difficulty: "M" },
      { id: 63, name: "Unique Paths II", difficulty: "M" },
      { id: 70, name: "Climbing Stairs", difficulty: "E" },
      { id: 72, name: "Edit Distance", difficulty: "H" },
      { id: 91, name: "Decode Ways", difficulty: "M" },
      { id: 97, name: "Interleaving String", difficulty: "M" },
      { id: 115, name: "Distinct Subsequences", difficulty: "H" },
      { id: 132, name: "Palindrome Partitioning II", difficulty: "H" },
      { id: 139, name: "Word Break", difficulty: "M" },
      { id: 152, name: "Maximum Product Subarray", difficulty: "M" },
      { id: 198, name: "House Robber", difficulty: "M" },
      { id: 213, name: "House Robber II", difficulty: "M" },
      { id: 300, name: "Longest Increasing Subsequence", difficulty: "M" },
      { id: 309, name: "Best Time to Buy/Sell — Cooldown", difficulty: "M" },
      { id: 312, name: "Burst Balloons", difficulty: "H" },
      { id: 322, name: "Coin Change", difficulty: "M" },
      { id: 416, name: "Partition Equal Subset Sum", difficulty: "M" },
      { id: 494, name: "Target Sum", difficulty: "M" },
      { id: 518, name: "Coin Change II", difficulty: "M" },
      { id: 1143, name: "Longest Common Subsequence", difficulty: "M" },
      { id: 1235, name: "Maximum Profit in Job Scheduling", difficulty: "H" },
    ],
  },
];

const TABS = [
  { key: "structures", label: "🏗 Structures" },
  { key: "algorithms", label: "⚙️ Algorithms" },
  { key: "patterns", label: "🔁 Patterns" },
  { key: "questions", label: "❓ Questions" },
];

export default function DSARoadmap() {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecovering, setIsRecovering] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (event === "PASSWORD_RECOVERY") {
        setIsRecovering(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isLoading)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#07090d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        Loading...
      </div>
    );

  if (!session || isRecovering) {
    return (
      <AuthScreen 
        initialView={isRecovering ? "recovery" : "signIn"} 
        onRecoveryComplete={() => {
          setIsRecovering(false);
          setSession(null);
        }}
      />
    );
  }

  return <Roadmap session={session} />;
}

function AuthScreen({ initialView = "signIn", onRecoveryComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(initialView); // signIn, signUp, forgot, recovery
  const [msg, setMsg] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  useEffect(() => {
    // If we are in recovery view, we should try to get the user's email from the session
    if (view === "recovery") {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user?.email) {
          setEmail(session.user.email);
        }
      });
    }
  }, [view]);

  useEffect(() => {
    // Detect if user came from a "Reset Password" link
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setView("recovery");
        if (session?.user?.email) {
          setEmail(session.user.email);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    let error;
    if (view === "signUp") {
      const res = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      error = res.error;
      
      // Handle "User already exists" scenario
      if (error && error.message.toLowerCase().includes("already registered")) {
        error.message = "An account with this email already exists.";
      }

      if (!error && res.data.user)
        setMsg("Check your email for the confirmation link!");
    } else if (view === "signIn") {
      const res = await supabase.auth.signInWithPassword({ email, password });
      error = res.error;
    } else if (view === "forgot") {
      if (resendCooldown > 0) {
        setMsg(`Please wait ${resendCooldown}s before trying again.`);
        setLoading(false);
        return;
      }
      const res = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin,
      });
      error = res.error;
      if (!error) {
        setMsg("Password reset link sent to your email!");
        setResendCooldown(60);
      }
    } else if (view === "recovery") {
      if (password !== confirmPassword) {
        setMsg("Passwords do not match!");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setMsg("Password must be at least 6 characters.");
        setLoading(false);
        return;
      }
      const res = await supabase.auth.updateUser({ password });
      error = res.error;
      if (!error) {
        setMsg("Password updated successfully! Clearing session...");
        
        // Wait bit, then log out to clear the "Recovery" state from Supabase
        setTimeout(async () => {
          await supabase.auth.signOut();
          if (onRecoveryComplete) onRecoveryComplete();
          setView("signIn");
        }, 1500);
      }
    }

    if (error) setMsg(error.message);
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070c18",
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 30px 30px, 30px 30px",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Orbs */}
      <div style={{ position: "absolute", top: "10%", right: "10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(7,9,13,0) 70%)", borderRadius: "50%", zIndex: 0 }} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: 1000,
          background: "rgba(13, 17, 23, 0.8)",
          backdropFilter: "blur(20px)",
          borderRadius: 32,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 40px 80px -15px rgba(0,0,0,0.6)",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Side Decorative Panel */}
        <div className="auth-panel-left">
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3, backgroundImage: "radial-gradient(#1a2535 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <img src="/logo.png" alt="Logo" style={{ width: 48, height: 48, borderRadius: 12, background: "#000", border: "1px solid rgba(255,255,255,0.1)" }} />
              <h1 style={{ margin: 0, fontSize: 44, fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1px" }}>
                DSA-roadmap
              </h1>
            </div>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
              Your ultimate platform to track and master Data Structures and Algorithms. Explore 14 core topics, learn crucial patterns, and conquer interview questions.
            </p>
            
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ background: "#111", padding: "16px", borderRadius: 12, border: "1px solid #222", flex: 1, minWidth: 140 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🎯</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#ddd", marginBottom: 4 }}>Structured</div>
                <div style={{ fontSize: 12, color: "#555" }}>Master topics sequentially</div>
              </div>
              <div style={{ background: "#111", padding: "16px", borderRadius: 12, border: "1px solid #222", flex: 1, minWidth: 140 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🔗</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#ddd", marginBottom: 4 }}>LeetCode Focus</div>
                <div style={{ fontSize: 12, color: "#555" }}>Master 200+ curated questions organized by difficulty.</div>
              </div>
            </div>

            <div style={{ fontSize: 13, color: "#444", fontWeight: 500, borderTop: "1px solid #222", paddingTop: 16 }}>
              Made by Adidam Akshay Bhaskar
            </div>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="auth-panel-right">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div
              style={{
                display: "inline-block",
                background: "#111",
                border: "1px solid #333",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 13,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: 2,
                marginBottom: 16,
              }}
            >
              {view === "signUp" ? "GET STARTED" : view === "forgot" ? "RECOVERY" : view === "recovery" ? "RESET" : "HELLO"}
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 800,
                color: "#fff",
              }}
            >
              {view === "signUp" ? "Create an Account" : 
               view === "forgot" ? "Reset Password" : 
               view === "recovery" ? "New Password" : 
               "Welcome Back"}
            </h2>
            <p style={{ color: "#555", fontSize: 14, marginTop: 8 }}>
              {view === "signUp" ? "Sign up to track your progress" : 
               view === "forgot" ? "Enter your email to receive a reset link" : 
               view === "recovery" ? "Enter your new secure password" :
               "Log in to continue your journey"}
            </p>
          </div>

          <form
            onSubmit={handleAuth}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={view === "recovery"}
              style={{
                background: "#07090d",
                border: "1px solid #1f2937",
                color: "#fff",
                padding: "14px 16px",
                borderRadius: 10,
                fontSize: 15,
                outline: "none",
                transition: "border 0.2s",
                opacity: view === "recovery" ? 0.5 : 1
              }}
              onFocus={(e) => e.target.style.borderColor = "#666"}
              onBlur={(e) => e.target.style.borderColor = "#1f2937"}
            />
            {view !== "forgot" && (
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={view === "recovery" ? "New Password" : "Password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    background: "#07090d",
                    border: "1px solid #1f2937",
                    color: "#fff",
                    padding: "14px 45px 14px 16px",
                    borderRadius: 10,
                    fontSize: 15,
                    outline: "none",
                    transition: "border 0.2s",
                    width: "100%",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#666"}
                  onBlur={(e) => e.target.style.borderColor = "#1f2937"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#444",
                    cursor: "pointer",
                    padding: 8,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
            )}

            {view === "recovery" && (
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{
                    background: "#07090d",
                    border: "1px solid #1f2937",
                    color: "#fff",
                    padding: "14px 45px 14px 16px",
                    borderRadius: 10,
                    fontSize: 15,
                    outline: "none",
                    transition: "border 0.2s",
                    width: "100%",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#666"}
                  onBlur={(e) => e.target.style.borderColor = "#1f2937"}
                />
              </div>
            )}

            {view === "signIn" && (
              <div style={{ textAlign: "right", marginTop: -8 }}>
                <button
                  type="button"
                  onClick={() => { setView("forgot"); setMsg(""); }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#64748b",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: 0
                  }}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {msg && (
              <div
                style={{
                  color: (msg.includes("Check") || msg.includes("sent") || msg.includes("successfully")) ? "#4ade80" : "#ef4444",
                  fontSize: 13,
                  textAlign: "center",
                  padding: "8px",
                  background: (msg.includes("Check") || msg.includes("sent") || msg.includes("successfully")) ? "#4ade8015" : "#ef444415",
                  borderRadius: 8,
                }}
              >
                {msg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#e2e8f4",
                color: "#0d1117",
                padding: "14px",
                borderRadius: 10,
                border: "none",
                fontSize: 15,
                fontWeight: 800,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                marginTop: 8,
                transition: "all 0.1s",
              }}
            >
              {loading ? "Please wait..." : 
               view === "signUp" ? "Create Account" : 
               view === "forgot" ? "Send Reset Link" : 
               view === "recovery" ? "Secure Account" :
               "Sign In"}
            </button>
          </form>

          {view !== "recovery" && (
            <div
              style={{
                marginTop: 28,
                textAlign: "center",
                fontSize: 14,
                color: "#64748b",
              }}
            >
              {view === "signIn" ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  if (view === "forgot") setView("signIn");
                  else setView(view === "signIn" ? "signUp" : "signIn");
                  setMsg("");
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#ccc",
                  fontWeight: 700,
                  cursor: "pointer",
                  padding: 0,
                  marginLeft: 4
                }}
              >
                {view === "signIn" ? "Sign Up" : "Sign In"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Roadmap({ session }) {
  const [active, setActive] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const topicId = params.get('topic');
    return topicId ? parseInt(topicId, 10) : null;
  });
  const [tab, setTab] = useState("algorithms");
  const [completedQs, setCompletedQs] = useState(() => {
    if (session?.user) {
      const saved = localStorage.getItem(`dsa_completed_${session.user.id}`);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });
  const [showTracker, setShowTracker] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'tracker';
  });
  const [syncing, setSyncing] = useState(true);
  const [streak, setStreak] = useState(() => {
    if (session?.user) {
      const saved = localStorage.getItem(`dsa_streak_${session.user.id}`);
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [lastActivityDate, setLastActivityDate] = useState(() => {
    if (session?.user) {
      return localStorage.getItem(`dsa_last_date_${session.user.id}`);
    }
    return null;
  });
  const [prevStreak, setPrevStreak] = useState(() => {
    if (session?.user) {
      const saved = localStorage.getItem(`dsa_prev_streak_${session.user.id}`);
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [prevActivityDate, setPrevActivityDate] = useState(() => {
    if (session?.user) {
      return localStorage.getItem(`dsa_prev_date_${session.user.id}`);
    }
    return null;
  });
  const [todayQs, setTodayQs] = useState(() => {
    if (session?.user) {
      const saved = localStorage.getItem(`dsa_today_qs_${session.user.id}`);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [todos, setTodos] = useState(() => {
    if (session && session.user) {
      const savedTodos = localStorage.getItem(`dsa_todos_${session.user.id}`);
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
    return [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [profile, setProfile] = useState(() => {
    if (session?.user) {
      const saved = localStorage.getItem(`dsa_profile_${session.user.id}`);
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });
  const [showProfile, setShowProfile] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'profile';
  });

  useEffect(() => {
    if (session && session.user) {
      localStorage.setItem(`dsa_todos_${session.user.id}`, JSON.stringify(todos));
    }
  }, [todos, session?.user?.id]);

  useEffect(() => {
    // Correctly initialize history state if it's currently null
    if (!window.history.state) {
      const params = new URLSearchParams(window.location.search);
      const topicId = params.get('topic');
      const view = params.get('view');
      
      if (view === 'tracker') {
        window.history.replaceState({ view: 'tracker' }, "", window.location.href);
      } else if (topicId) {
        window.history.replaceState({ view: 'topic', id: parseInt(topicId, 10) }, "", window.location.href);
      } else {
        window.history.replaceState({ view: 'dashboard' }, "", window.location.href);
      }
    }

    const handlePopState = (e) => {
      const state = e.state;
      if (state && state.view === 'topic') {
        setActive(state.id);
        setShowTracker(false);
        setShowProfile(false);
      } else if (state && state.view === 'tracker') {
        setShowTracker(true);
        setActive(null);
        setShowProfile(false);
      } else if (state && state.view === 'profile') {
        setShowProfile(true);
        setActive(null);
        setShowTracker(false);
      } else {
        setActive(null);
        setShowTracker(false);
        setShowProfile(false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openDataStructure = (id) => {
    setActive(id);
    setTab("algorithms");
    window.history.pushState({ view: 'topic', id }, "", `?topic=${id}`);
  };

  const openProfile = () => {
    setShowProfile(true);
    setShowTracker(false);
    setActive(null);
    window.history.pushState({ view: 'profile' }, "", "?view=profile");
  };

  const toggleTracker = () => {
    const nextState = !showTracker;
    setShowTracker(nextState);
    setShowProfile(false);
    setActive(null);
    if (nextState) {
      window.history.pushState({ view: 'tracker' }, "", "?view=tracker");
    } else {
      window.history.pushState({ view: 'dashboard' }, "", "/");
    }
  };

  const goBackToDashboard = () => {
    setActive(null);
    setShowTracker(false);
    setShowProfile(false);
    window.history.pushState({ view: 'dashboard' }, "", "/");
  };

  const updateProfile = async (updates) => {
    const { error } = await supabase
      .from("profiles")
      .upsert({ 
        id: session.user.id,
        ...updates, 
        updated_at: new Date().toISOString() 
      });
    
    if (!error) {
      const nextProfile = { ...(prev || {}), ...updates, id: session.user.id };
      setProfile(nextProfile);
      localStorage.setItem(`dsa_profile_${session.user.id}`, JSON.stringify(nextProfile));
      return { success: true };
    }
    return { success: false, error };
  };

  const selected = dsaData.find((d) => d.id === active);
  const totalQuestions = new Set(dsaData.flatMap(topic => topic.questions.map(q => q.id))).size;

  // Load progress from Supabase on mount
  useEffect(() => {
    async function fetchProgress() {
      const { data } = await supabase
        .from("user_progress")
        .select("completed_qs, streak_count, last_activity_date, today_qs, previous_streak_count, previous_activity_date")
        .eq("id", session.user.id)
        .single();

      if (data) {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (data.completed_qs) {
          const fetchedSet = new Set(data.completed_qs);
          setCompletedQs(fetchedSet);
          localStorage.setItem(`dsa_completed_${session.user.id}`, JSON.stringify([...fetchedSet]));
        }
        
        let fetchedTodayQs = data.today_qs || [];
        // Clear today_qs if it's from a previous date
        if (data.last_activity_date && data.last_activity_date !== today) {
          fetchedTodayQs = [];
        }
        setTodayQs(fetchedTodayQs);
        localStorage.setItem(`dsa_today_qs_${session.user.id}`, JSON.stringify(fetchedTodayQs));

        let currentStreak = data.streak_count || 0;
        let currentLastDate = data.last_activity_date;
        let pStreak = data.previous_streak_count || 0;
        let pDate = data.previous_activity_date;
        
        // Check if streak is lost due to inactivity
        if (data.last_activity_date && data.last_activity_date !== today && data.last_activity_date !== yesterday) {
          currentStreak = 0;
          currentLastDate = null;
          pStreak = 0;
          pDate = null;
          await supabase.from("user_progress").upsert({
            id: session.user.id,
            streak_count: 0,
            today_qs: [],
            previous_streak_count: 0,
            previous_activity_date: null
          });
        }

        // If activity was undoed (no questions for today), show the previous streak
        if (currentLastDate === today && fetchedTodayQs.length === 0) {
          currentStreak = pStreak;
          currentLastDate = pDate;
        }

        setStreak(currentStreak);
        setLastActivityDate(currentLastDate);
        setPrevStreak(pStreak);
        setPrevActivityDate(pDate);

        localStorage.setItem(`dsa_streak_${session.user.id}`, currentStreak.toString());
        localStorage.setItem(`dsa_last_date_${session.user.id}`, currentLastDate || "");
        localStorage.setItem(`dsa_prev_streak_${session.user.id}`, pStreak.toString());
        localStorage.setItem(`dsa_prev_date_${session.user.id}`, pDate || "");
      }

      // Fetch Profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
        localStorage.setItem(`dsa_profile_${session.user.id}`, JSON.stringify(profileData));
      }

      setSyncing(false);
    }
    fetchProgress();
  }, [session.user.id]);

  const toggleQuestion = async (qId) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const isAdding = !completedQs.has(qId);
    
    // 1. Update completed_qs
    const nextArr = [...completedQs];
    if (isAdding) {
      nextArr.push(qId);
    } else {
      nextArr.splice(nextArr.indexOf(qId), 1);
    }
    const nextSet = new Set(nextArr);
    setCompletedQs(nextSet);
    localStorage.setItem(`dsa_completed_${session.user.id}`, JSON.stringify(nextArr));

    // 2. Update today_qs & streak logic
    let currentTodayQsArr = [...todayQs];
    // If we're starting fresh on a new day
    if (lastActivityDate !== today) {
      currentTodayQsArr = [];
    }

    let newTodayQsArr = [...currentTodayQsArr];
    let newStreak = streak;
    let newLastDate = lastActivityDate;
    let newPrevStreak = prevStreak;
    let newPrevDate = prevActivityDate;

    if (isAdding) {
      if (!newTodayQsArr.includes(qId)) {
        newTodayQsArr.push(qId);
      }
      // If this is the FIRST question ticked today
      if (currentTodayQsArr.length === 0) {
        newPrevStreak = streak;
        newPrevDate = lastActivityDate;
        if (lastActivityDate === yesterday) {
          newStreak += 1;
        } else if (lastActivityDate !== today) {
          newStreak = 1;
        }
        newLastDate = today;
      }
    } else {
      // Removing
      newTodayQsArr = newTodayQsArr.filter(id => id !== qId);
      // If we just became empty today: REVERT to previous state
      if (newTodayQsArr.length === 0 && lastActivityDate === today) {
        newStreak = prevStreak;
        newLastDate = prevActivityDate; 
      }
    }

    setTodayQs(newTodayQsArr);
    setStreak(newStreak);
    setLastActivityDate(newLastDate);
    setPrevStreak(newPrevStreak);
    setPrevActivityDate(newPrevDate);
    
    localStorage.setItem(`dsa_today_qs_${session.user.id}`, JSON.stringify(newTodayQsArr));
    localStorage.setItem(`dsa_streak_${session.user.id}`, newStreak.toString());
    localStorage.setItem(`dsa_last_date_${session.user.id}`, newLastDate || "");
    localStorage.setItem(`dsa_prev_streak_${session.user.id}`, newPrevStreak.toString());
    localStorage.setItem(`dsa_prev_date_${session.user.id}`, newPrevDate || "");

    // 3. Save to Supabase Cloud
    await supabase.from("user_progress").upsert({
      id: session.user.id,
      completed_qs: nextArr,
      today_qs: newTodayQsArr,
      streak_count: newStreak,
      last_activity_date: newLastDate,
      previous_streak_count: newPrevStreak,
      previous_activity_date: newPrevDate,
      updated_at: new Date().toISOString(),
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070c18",
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 30px 30px, 30px 30px",
        fontFamily: "'Inter', sans-serif",
        color: "#cbd5e1",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        className="header-container"
        style={{
          background: "rgba(13, 17, 23, 0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 28px",
          position: "sticky",
          top: 0,
          zIndex: 200,
        }}
      >
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  background: "#000",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  width: 42,
                  height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}
              >
                <img src="/logo.png" alt="DSA Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div 
                onClick={openProfile}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 12, 
                  cursor: "pointer",
                  padding: "6px 14px",
                  borderRadius: 20,
                  transition: "all 0.2s",
                  background: showProfile ? "rgba(59, 130, 246, 0.15)" : "rgba(255,255,255,0.03)",
                  border: showProfile ? "1px solid rgba(59, 130, 246, 0.4)" : "1px solid rgba(255,255,255,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                }}
                onMouseLeave={(e) => {
                  if (!showProfile) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 10, 
                  background: "linear-gradient(135deg, #1e293b, #0f172a)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                }}>
                  {profile?.avatar_url ? <img src={profile.avatar_url} style={{ width: "100%", height: "100%", borderRadius: 8 }} /> : "👤"}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <span
                    className="header-title-text"
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#f8fafc",
                      lineHeight: 1
                    }}
                  >
                    {profile?.display_name || session?.user?.email.split('@')[0]}
                  </span>
                  <span style={{ fontSize: 10, color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>View Profile</span>
                </div>
              </div>
            </div>

            {/* Tracker UI & Logout */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                className="tracker-toggle-btn"
                onClick={toggleTracker}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: showTracker ? "#1f2937" : "#111827",
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: "1px solid #222",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: 18 }}>{showTracker ? "←" : "🎯"}</span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#888",
                    marginRight: showTracker ? 0 : 4,
                  }}
                >
                  {showTracker ? "Back to Roadmap" : "Progress:"}
                </span>
                {!showTracker && (
                  <>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color:
                          completedQs.size === totalQuestions
                            ? "#fff"
                            : "#ccc",
                      }}
                    >
                      {completedQs.size}{" "}
                      <span style={{ color: "#444", fontSize: 12 }}>
                        / {totalQuestions}
                      </span>
                    </span>
                    <div
                      style={{
                        width: 60,
                        height: 6,
                        background: "#1f2937",
                        borderRadius: 3,
                        marginLeft: 8,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${Math.round((completedQs.size / totalQuestions) * 100)}%`,
                          height: "100%",
                          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                          borderRadius: 3,
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Streak Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#111827",
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: "1px solid #1a2535",
                  position: "relative",
                  overflow: "hidden",
                  opacity: streak > 0 ? 1 : 0.6
                }}
                title="Your DSA Streak"
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  <span style={{ 
                    fontSize: 22, 
                    filter: streak > 0 ? "drop-shadow(0 0 10px #3b82f6) drop-shadow(0 0 5px #3b82f6)" : "grayscale(1) brightness(0.5)",
                    display: "flex", 
                    alignItems: "center",
                    transition: "all 0.3s ease"
                  }}>
                    <span style={{ filter: "hue-rotate(180deg) brightness(1.5)" }}>🔥</span>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                  <span style={{ 
                    fontSize: 16, 
                    fontWeight: 900, 
                    color: streak > 0 ? "#fff" : "#64748b",
                    transition: "color 0.3s ease"
                  }}>{streak}</span>
                  <span style={{ 
                    fontSize: 8, 
                    fontWeight: 800, 
                    color: streak > 0 ? "#3b82f6" : "#475569", 
                    textTransform: "uppercase", 
                    letterSpacing: 0.5,
                    transition: "color 0.3s ease"
                  }}>STREAK</span>
                </div>
              </div>

              <button
                onClick={() => supabase.auth.signOut()}
                style={{
                  background: "transparent",
                  border: "1px solid #444",
                  color: "#aaa",
                  padding: "6px 14px",
                  borderRadius: 20,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  transition: "color 0.08s, border-color 0.08s, transform 0.08s, background 0.08s",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#888";
                  e.currentTarget.style.background = "#ffffff0d";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#aaa";
                  e.currentTarget.style.borderColor = "#444";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: 1060, margin: "0 auto", padding: window.innerWidth < 600 ? "16px 20px 60px" : "40px 20px 60px" }}
      >
        {showProfile ? (
          <div style={{ animation: "slideDown 0.3s ease" }}>
             <ProfileTab 
                profile={profile}
                session={session}
                streak={streak}
                completedCount={completedQs}
                totalQuestions={totalQuestions}
                questions={dsaData}
                onUpdate={updateProfile}
                onBack={goBackToDashboard}
                defaultName={session?.user?.email?.split('@')[0] || "User"}
             />
          </div>
        ) : showTracker ? (
          <div style={{ animation: "slideDown 0.2s ease" }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                margin: "0 0 24px",
                color: "#e2e8f4",
              }}
            >
              Completed Topics & Questions
            </h2>
            {dsaData.map((item) => {
              const completedInThisTopic = item.questions.filter((q) =>
                completedQs.has(q.id),
              );
              if (completedInThisTopic.length === 0) return null;

              return (
                <div
                  key={item.id}
                  style={{
                    marginBottom: 24,
                    background: "#0d1117",
                    border: "1px solid #333",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "#111",
                      padding: "16px 20px",
                      borderBottom: "1px solid #222",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{item.emoji}</span>
                    <div>
                      <h3
                        style={{ margin: 0, fontSize: 18, color: item.color }}
                      >
                        {item.title}
                      </h3>
                      <div
                        style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}
                      >
                        {completedInThisTopic.length} / {item.questions.length}{" "}
                        completed
                      </div>
                    </div>
                  </div>
                  <div
                    className="questions-grid"
                    style={{ padding: 20 }}
                  >
                    {completedInThisTopic.map((q) => (
                      <div
                        key={q.id}
                        className="question-card"
                        style={{
                          background: "#111",
                          border: "1px solid #222",
                        }}
                      >
                        <span 
                          className="question-id"
                          style={{ color: "#555" }}
                        >
                          #{q.id}
                        </span>
                        <span 
                          className="question-name"
                          style={{ color: "#eee" }}
                        >
                          {q.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            {completedQs.size === 0 && (
              <div
                style={{
                  padding: 40,
                  textAlign: "center",
                  color: "#64748b",
                  background: "#0d1117",
                  borderRadius: 12,
                  border: "1px dashed #1e293b",
                }}
              >
                <span
                  style={{ fontSize: 32, display: "block", marginBottom: 12 }}
                >
                  📭
                </span>
                You haven't completed any questions yet. Head to the roadmap to
                get started!
              </div>
            )}
          </div>
        ) : active !== null ? (
          <div style={{ animation: "fadeIn 0.2s ease" }}>
            <button
              onClick={goBackToDashboard}
              style={{
                background: "transparent",
                border: "1px solid #333",
                color: "#888",
                padding: "8px 16px",
                borderRadius: 8,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
                fontSize: 14,
                fontWeight: 600,
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#666";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.borderColor = "#333";
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>←</span> Back to
              Roadmap
            </button>

            <div
              style={{
                background: "#0d1117",
                border: "1px solid #222",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div
                className="topic-header"
                style={{
                  background: "#111",
                  borderBottom: "1px solid #222",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <span style={{ fontSize: 40 }}>{selected.emoji}</span>
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    {selected.title}
                  </h2>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#555",
                      marginTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                      fontWeight: 600,
                    }}
                  >
                    {selected.subtitle}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #222",
                  padding: "0 10px",
                  background: "#0a0a0a",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  padding: "0 4px",
                  gap: 8
                }}
              >
                {TABS.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    style={{
                      border: "none",
                      background: "none",
                      borderBottom:
                        tab === t.key
                          ? "2px solid #3b82f6"
                          : "2px solid transparent",
                      color: tab === t.key ? "#fff" : "#64748b",
                      padding: "16px 12px",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 700,
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                      marginBottom: -1,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div
                className="roadmap-content"
                style={{
                  background: "#0a0a0a",
                  minHeight: 400,
                }}
              >
                {tab === "structures" && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {selected.structures.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          background: "#111",
                          border: "1px solid #222",
                          borderRadius: 8,
                          padding: "10px 18px",
                          fontSize: 14,
                          color: "#ccc",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {tab === "algorithms" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {selected.algorithms.map((a, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 14,
                          padding: "14px 18px",
                          background: "#0d1520",
                          borderRadius: 8,
                          border: "1px solid #141e2d",
                        }}
                      >
                        <span
                          style={{
                            minWidth: 26,
                            height: 26,
                            background: "#ffffff10",
                            border: "1px solid #333",
                            borderRadius: 6,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 800,
                            color: "#ddd",
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </span>
                        <span
                          style={{
                            fontSize: 15,
                            color: "#ddd",
                            lineHeight: 1.5,
                          }}
                        >
                          {a}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {tab === "patterns" && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {selected.patterns.map((p, i) => (
                      <span
                        key={i}
                        style={{
                          background: "#111",
                          border: "1px solid #333",
                          borderRadius: 24,
                          padding: "10px 20px",
                          fontSize: 14,
                          color: "#ddd",
                          fontWeight: 600,
                        }}
                      >
                        ⬡ {p}
                      </span>
                    ))}
                  </div>
                )}
                {tab === "questions" && (
                  <div className="questions-grid">
                    {[...selected.questions].sort((a, b) => {
                      const order = { E: 0, M: 1, H: 2 };
                      return (order[a.difficulty] ?? 1) - (order[b.difficulty] ?? 1);
                    }).map((q) => {
                      const isCompleted = completedQs.has(q.id);
                      return (
                        <div
                          key={q.id}
                          className="question-card"
                          style={{
                            background: isCompleted ? "#10b981" : "#111",
                            border: isCompleted ? "1px solid #10b981" : "1px solid #222",
                          }}
                          onClick={() => toggleQuestion(q.id)}
                        >
                          <span 
                            className="question-id"
                            style={{ color: isCompleted ? "rgba(0,0,0,0.5)" : "#444" }}
                          >
                            #{q.id}
                          </span>
                          <span 
                            className="question-name"
                            style={{ color: isCompleted ? "#000" : "#ccc" }}
                          >
                            {q.name}
                          </span>
                          {!isCompleted && (
                            <span className="difficulty-badge" style={{
                              background: q.difficulty === "E" ? "#16532420" : q.difficulty === "H" ? "#7f1d1d20" : "#78350f20",
                              color: q.difficulty === "E" ? "#4ade80" : q.difficulty === "H" ? "#f87171" : "#fb923c",
                              border: `1px solid ${q.difficulty === "E" ? "#4ade8020" : q.difficulty === "H" ? "#f8717120" : "#fb923c20"}`
                            }}>
                              {q.difficulty === "E" ? "Easy" : q.difficulty === "H" ? "Hard" : "Med"}
                            </span>
                          )}
                          <div 
                            className="action-btn"
                            style={{ 
                              color: isCompleted ? "#000" : "#555",
                              border: isCompleted ? "2px solid rgba(0,0,0,0.3)" : "2px solid #333",
                              background: isCompleted ? "rgba(0,0,0,0.1)" : "transparent"
                            }}
                          >
                            {isCompleted ? "✓" : "+"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="roadmap-grid">
            {dsaData.map((item) => {
              const totalQ = item.questions.length;
              const compQ = item.questions.filter(q => completedQs.has(q.id)).length;
              const isAllComp = totalQ > 0 && totalQ === compQ;

              return (
                <div
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  style={{
                    background:
                      active === item.id
                        ? "rgba(59, 130, 246, 0.12)"
                        : isAllComp
                        ? "rgba(16, 185, 129, 0.05)"
                        : "rgba(13, 17, 23, 0.6)",
                    borderRadius: 24,
                    padding: "24px",
                    cursor: "pointer",
                    border:
                      active === item.id
                        ? "1.5px solid rgba(59, 130, 246, 0.5)"
                        : isAllComp
                        ? "1.5px solid rgba(16, 185, 129, 0.3)"
                        : "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    boxShadow: active === item.id ? "0 10px 25px -5px rgba(59, 130, 246, 0.2)" : "none",
                    height: "190px",
                    justifyContent: "space-between",
                    backdropFilter: "blur(4px)"
                  }}
                  onMouseEnter={(e) => {
                    if (active !== item.id) {
                      e.currentTarget.style.background = isAllComp ? "rgba(16, 185, 129, 0.08)" : "rgba(22, 27, 34, 0.8)";
                      e.currentTarget.style.borderColor = isAllComp ? "#10b981" : "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== item.id) {
                      e.currentTarget.style.background = isAllComp ? "rgba(16, 185, 129, 0.05)" : "rgba(13, 17, 23, 0.6)";
                      e.currentTarget.style.borderColor = isAllComp ? "rgba(16, 185, 129, 0.4)" : "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: 32 }}>{item.emoji}</span>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#1e2530",
                        border: "2px solid #3a4555",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        color: "#888",
                      }}
                    >
                      {item.order}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#e2e8f4",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: 1.2,
                        color: "#666",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.subtitle}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      borderTop: "1px solid #2a3545",
                      paddingTop: 14,
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      color: "#666",
                      fontWeight: 500,
                    }}
                  >
                    <div style={{ display: "flex", gap: 14 }}>
                      <span title="Algorithms">
                        ⚙️ {item.algorithms.length}
                      </span>
                      <span title="Questions">❓ {item.questions.length}</span>
                    </div>
                    <div
                      style={{
                        color: item.color,
                        fontSize: 16,
                        fontWeight: 700,
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Embedded Notes / To-Do List Section */}
            <div
              className="todo-container"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(13, 17, 23, 0.6)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                borderRadius: 20,
                padding: "24px",
                height: "190px",
                backdropFilter: "blur(4px)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={{ margin: "0 0 16px", color: "#f1f5f9", fontSize: 16, fontWeight: 800, display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>
                 <span style={{ filter: "drop-shadow(0 0 8px #3b82f6)" }}>📝</span> Daily Tasks
              </h3>
              <div 
                style={{ 
                  flex: 1, 
                  overflowY: "auto", 
                  marginBottom: 16, 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 10, 
                  paddingRight: 6 
                }}
              >
                {todos.length === 0 ? (
                  <div style={{ color: "#475569", fontSize: 13, fontStyle: "italic", textAlign: "center", marginTop: 10 }}>Your task list is empty.</div>
                ) : (
                  todos.map((t, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: t.done ? "#475569" : "#cbd5e1", background: "rgba(255,255,255,0.02)", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.03)" }}>
                      <input 
                        type="checkbox" 
                        checked={t.done} 
                        onChange={() => {
                          const newTodos = [...todos];
                          newTodos[idx].done = !newTodos[idx].done;
                          setTodos(newTodos);
                        }}
                        style={{ cursor: "pointer", width: 18, height: 18, accentColor: "#3b82f6" }}
                      />
                      <span style={{ flex: 1, textDecoration: t.done ? "line-through" : "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: 500 }}>{t.text}</span>
                      <button 
                        onClick={() => setTodos(todos.filter((_, i) => i !== idx))}
                        style={{ background: "transparent", border: "none", color: "#f87171", cursor: "pointer", fontSize: 18, padding: 0.2, opacity: 0.6 }}
                      >
                        ×
                      </button>
                    </div>
                  ))
                )}
              </div>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newTodo.trim()) return;
                  setTodos([...todos, { text: newTodo.trim(), done: false }]);
                  setNewTodo("");
                }}
                style={{ display: "flex", gap: 10, flexShrink: 0 }}
              >
                <input 
                  type="text" 
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="What's next?" 
                  style={{
                    flex: 1,
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontSize: 13,
                    outline: "none",
                    transition: "border 0.2s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
                <button 
                  type="submit"
                  style={{
                    background: "#3b82f6",
                    color: "#fff",
                    border: "none",
                    padding: "0 18px",
                    borderRadius: 12,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "0.2s"
                  }}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 15,
            letterSpacing: 0.5,
            color: "#64748b",
            fontWeight: 600,
          }}
        >
          DSA Roadmap made by Adidam Akshay Bhaskar
        </div>
      </div>

      <style>{`@keyframes slideDown { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

function ProfileTab({ profile, streak, completedCount, totalQuestions, onUpdate, questions, onBack, defaultName }) {
  const [name, setName] = useState(profile?.display_name || defaultName || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  // Sync state with props when they finally load
  useEffect(() => {
    if (!isEditing && profile) {
      setName(profile.display_name || defaultName || "");
      setBio(profile.bio || "");
    }
  }, [profile, isEditing, defaultName]);

  const difficultyStats = { E: 0, M: 0, H: 0 };
  const userStats = { E: 0, M: 0, H: 0 };

  questions.forEach(topic => {
    topic.questions.forEach(q => {
      difficultyStats[q.difficulty]++;
      if (completedCount.has(q.id)) {
        userStats[q.difficulty]++;
      }
    });
  });

  const handleSave = async () => {
    if (!name.trim()) return;
    setSaving(true);
    await onUpdate({ display_name: name, bio });
    setIsEditing(false);
    setSaving(false);
  };

  const memberSince = profile?.updated_at 
    ? new Date(profile.updated_at).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
    : new Date().toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  return (
    <div style={{
      background: "rgba(13, 17, 23, 0.4)",
      borderRadius: 32,
      border: "1px solid rgba(255, 255, 255, 0.08)",
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(4px)"
    }}>
      {/* Banner Section */}
      <div className="profile-banner">
         <div style={{ 
           position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
           opacity: 0.1, backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
           backgroundSize: "20px 20px" 
         }} />

          {/* Stages Display */}
          <div className="stages-display">
            {[1, 2, 3, 4, 5].map(s => {
              // Define topic groups for each level
              const levelGroups = {
                1: [1, 2, 3],    // Early Human: Math, Arrays, Strings
                2: [4, 5, 6],    // Human: Hashing, Stack, Queue
                3: [7, 8, 9],    // Pro: Linked List, Binary Trees, Advanced Trees
                4: [10, 11],     // Hacker: Heap, Graphs
                5: [12, 13, 14]  // God: Recursion, Greedy, DP
              };

              const levelTitles = {
                1: "Early Human",
                2: "Human",
                3: "Pro",
                4: "Hacker",
                5: "God"
              };

              // Helper to check if a topic is fully completed
              const isTopicDone = (topicId) => {
                const topic = questions.find(d => d.id === topicId);
                if (!topic) return false;
                return topic.questions.every(q => completedCount.has(q.id));
              };

              // Level is unlocked if ALL previous levels + current level topics are done
              // (Or based on user request: if they complete the entire structure then level is unlocked)
              const isUnlocked = levelGroups[s].every(id => isTopicDone(id));
              
              // Find current level (the first one not yet unlocked)
              let currentLevel = 1;
              for (let i = 1; i <= 5; i++) {
                if (!levelGroups[i].every(id => isTopicDone(id))) {
                  currentLevel = i;
                  break;
                } else if (i === 5) {
                  currentLevel = 5;
                }
              }
              const isCurrent = s === currentLevel;
              
              return (
                <div key={s} className="stage-item" style={{ 
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  position: "relative",
                  transition: "all 0.4s ease",
                  cursor: isUnlocked ? "pointer" : "default",
                  opacity: isUnlocked ? 1 : 0.2,
                  filter: isUnlocked ? "none" : "grayscale(1) brightness(0.3)",
                }}
                onMouseEnter={e => {
                  if (isUnlocked) {
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = "translateY(-15px) scale(1.15)";
                    e.currentTarget.style.zIndex = 10;
                  }
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = "none";
                  e.currentTarget.style.zIndex = 1;
                }}>
                  {/* Character Image with Ascending Size */}
                  <div style={{ 
                    height: 80 + (s * 20), // Slightly smaller scaling for mobile compatibility
                    width: "100%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    marginBottom: 10
                  }}>
                    <img 
                      src={`/stages/stage${s}.png`} 
                      alt={levelTitles[s]} 
                      style={{ 
                        height: "100%",
                        width: "auto",
                        maxWidth: "180%", 
                        objectFit: "contain",
                        imageRendering: "pixelated",
                        mixBlendMode: "multiply",
                        filter: `contrast(1.4) brightness(1.1) ${isCurrent ? "drop-shadow(0 0 15px rgba(59,130,246,0.6))" : ""}`,
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                      }} 
                    />
                  </div>
                  
                  {/* Progress Indicator */}
                  <div style={{
                    width: "80%",
                    height: 4,
                    background: isUnlocked ? "#10b981" : isCurrent ? "#3b82f6" : "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    boxShadow: isUnlocked ? "0 0 10px rgba(16,185,129,0.4)" : isCurrent ? "0 0 20px #3b82f6" : "none",
                    marginBottom: 8,
                    transition: "all 0.3s ease"
                  }} />

                  {/* Level Label */}
                  <div style={{ 
                    fontSize: 9, 
                    fontWeight: 900, 
                    color: isUnlocked ? "#10b981" : isCurrent ? "#3b82f6" : "rgba(255,255,255,0.3)",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    textAlign: "center",
                    textShadow: isCurrent ? "0 0 10px rgba(59,130,246,0.4)" : "none",
                    transition: "color 0.3s ease"
                  }}>
                    {levelTitles[s]}
                  </div>
                </div>
              );
            })}
          </div>
      </div>

      {/* Profile Content */}
      <div style={{ padding: window.innerWidth < 600 ? "0 20px 40px" : "0 40px 40px", marginTop: -60, position: "relative" }}>

        <div className="profile-info-row">
          <div className="profile-avatar-container">
            {profile?.avatar_url ? <img src={profile.avatar_url} style={{ width: "100%", height: "100%", borderRadius: 28 }} /> : "👤"}
          </div>
          
          <div style={{ flex: 1, paddingBottom: 10, minWidth: 280 }}>
            {isEditing ? (
              <div style={{ position: "relative" }}>
                <input 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  autoFocus
                  placeholder="Enter your name"
                  style={{ 
                    background: "rgba(255,255,255,0.03)", 
                    border: "1px solid #334155", 
                    color: "#fff",
                    fontSize: 32, fontWeight: 900, 
                    padding: "8px 16px", 
                    borderRadius: 16,
                    width: "100%", 
                    outline: "none",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)"
                  }} 
                />
              </div>
            ) : (
              <h2 style={{ 
                margin: 0, fontSize: 36, fontWeight: 900, color: "#f8fafc",
                letterSpacing: "-1px"
              }}>
                {profile?.display_name || defaultName}
              </h2>
            )}
            <div style={{ fontSize: 14, color: "#64748b", fontWeight: 600, marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ opacity: 0.6 }}>📅</span> Member since {memberSince}
            </div>
          </div>

          {!isEditing && (
            <div style={{ display: "flex", gap: 12, marginBottom: 10, width: window.innerWidth < 600 ? "100%" : "auto" }}>
              <button
                onClick={onBack}
                style={{
                  flex: window.innerWidth < 600 ? 1 : "initial",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#aaa",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  padding: "10px 24px",
                  borderRadius: 12,
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#aaa";
                }}
              >
                ← Roadmap
              </button>
              <button 
                onClick={() => setIsEditing(true)} 
                style={{ 
                  flex: window.innerWidth < 600 ? 1 : "initial",
                  background: "rgba(59, 130, 246, 0.1)", 
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  color: "#3b82f6", 
                  fontSize: 14, 
                  fontWeight: 700, 
                  cursor: "pointer",
                  padding: "10px 24px",
                  borderRadius: 12,
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(59,130,246,0.1)"}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>

        {/* Premium Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginBottom: 40 }}>
          <div style={{ 
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))", 
            padding: "24px", borderRadius: 24, border: "1px solid rgba(59, 130, 246, 0.2)",
            position: "relative", overflow: "hidden"
          }}>
            <div style={{ fontSize: 12, color: "#3b82f6", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Current Streak</div>
            <div style={{ fontSize: 40, fontWeight: 950, color: "#fff", display: "flex", alignItems: "center", gap: 12 }}>
               {streak} <span style={{ fontSize: 32, filter: "drop-shadow(0 0 10px #3b82f6)" }}>🔥</span>
            </div>
          </div>
          <div style={{ 
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))", 
            padding: "24px", borderRadius: 24, border: "1px solid rgba(255, 255, 255, 0.1)" 
          }}>
            <div style={{ fontSize: 12, color: "#888", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Total Completed</div>
            <div style={{ fontSize: 40, fontWeight: 950, color: "#fff" }}>
              {completedCount.size} <span style={{ fontSize: 20, color: "#444" }}>/ {totalQuestions}</span>
            </div>
          </div>
        </div>

        {/* Journey & Bio Section */}
        <div style={{ marginBottom: 40, maxWidth: 800 }}>
          <label style={{ fontSize: 12, fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 16 }}>Journey & Bio</label>
          {isEditing ? (
            <textarea 
              value={bio} 
              onChange={e => setBio(e.target.value)}
              placeholder="Share your DSA goals and achievements..."
              style={{ 
                background: "rgba(255,255,255,0.03)", 
                border: "1px solid #334155", 
                color: "#cbd5e1",
                fontSize: 16, padding: "20px", borderRadius: 20, width: "100%",
                minHeight: 140, outline: "none", resize: "none",
                lineHeight: 1.6,
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)"
              }} 
            />
          ) : (
            <div style={{ 
              background: "rgba(255,255,255,0.02)", 
              padding: "24px", 
              borderRadius: 24, 
              border: "1px solid rgba(255,255,255,0.05)",
              minHeight: 80
            }}>
              <p style={{ margin: 0, fontSize: 16, color: "#94a3b8", lineHeight: 1.8, fontStyle: bio ? "normal" : "italic" }}>
                {profile?.bio || "No biography added yet. Share your journey and inspire others!"}
              </p>
            </div>
          )}
        </div>

        {/* Detailed Progress Breakdown */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 12, fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 24 }}>Skill Mastery</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: window.innerWidth < 600 ? 16 : 32 }}>
            {[
              { label: 'Easy', code: 'E', color: '#4ade80' },
              { label: 'Medium', code: 'M', color: '#fb923c' },
              { label: 'Hard', code: 'H', color: '#f87171' }
            ].map(item => (
              <div key={item.code} style={{ background: "rgba(255,255,255,0.02)", padding: 24, borderRadius: 24, border: "1px solid rgba(255,255,255,0.03)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, boxShadow: `0 0 10px ${item.color}88` }} />
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#e2e8f4" }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: 13, color: "#64748b", fontWeight: 700 }}>
                    {userStats[item.code]} <span style={{ opacity: 0.5 }}>/ {difficultyStats[item.code]}</span>
                  </span>
                </div>
                <div style={{ height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 5, overflow: "hidden" }}>
                  <div style={{ 
                    width: `${(userStats[item.code] / Math.max(1, difficultyStats[item.code])) * 100}%`, 
                    height: "100%", 
                    background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                    transition: "width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    boxShadow: `0 0 15px ${item.color}44`
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {isEditing && (
          <div style={{ display: "flex", gap: 16, marginTop: 40, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 32 }}>
            <button 
              onClick={handleSave} disabled={saving}
              style={{ 
                flex: 1, maxWidth: 240, background: "#f8fafc", color: "#0f172a", border: "none",
                padding: "16px", borderRadius: 16, fontWeight: 850, cursor: "pointer",
                boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}
            >
              {saving ? "Syncing..." : "Update Profile"}
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              style={{ 
                 background: "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)",
                padding: "16px 32px", borderRadius: 16, fontWeight: 800, cursor: "pointer"
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
