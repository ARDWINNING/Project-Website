import type { Project } from "@/types/project"

export const cppProjects: Project[] = [
  {
    title: "AVL Tree",
    description:
      "Self-balancing binary search tree implementation with automatic rebalancing through rotations. Maintains O(log n) operations.",
    tags: ["C++", "Data Structures", "BST"],
    category: "Implementation",
    icon: "🌲",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "Memory Allocator",
    description:
      "A word-based memory allocator using linked lists and best or worst fit allocation. Optionally outputs bitmaps and maps to visualise current memory usage.",
    tags: ["C++", "Systems", "Memory Management"],
    category: "Utility",
    icon: "🧠",
    githubUrl: "https://github.com/ARDWINNING/Memory-Manager",
  },
  {
    title: "Minesweeper",
    description:
      "Classic Minesweeper game implementation featuring recursive flood-fill algorithm, grid-based UI, and game state management.",
    tags: ["C++", "Game", "UI"],
    category: "Application",
    icon: "💣",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "PageRank Algorithm",
    description:
      "Implementation of the PageRank algorithm. Takes pages, builds a directed graph and power iterates to converge upon a stable state.", 
    tags: ["C++", "Algorithm", "Graph Theory"],
    category: "Implementation",
    icon: "📊",
    githubUrl: "https://github.com/ARDWINNING/PageRank",
  },
  {
    title: "Road Trip Planner",
    description:
      "A route trip planner across a contiguous area. Takes a dataset, start and ending coords in and using KD Trees and Dijstra's it outputs an itinerary.",
    tags: ["C++", "Trees", "Pathfinding"],
    category: "Application",
    icon: "🗺️",
    githubUrl: "https://github.com/ARDWINNING/Road-Trip-Planner",
  },
  {
    title: "WAD Filesystem",
    description:
      "Implementation of a WAD filesystem and a FUSE daemon. These facilitate WADFS file operations, such as read, create, write, mkdir and getattr.",
    tags: ["C++", "FUSE", "File I/O"],
    category: "Utility",
    icon: "📁",
    githubUrl: "https://github.com/ARDWINNING/WAD-Filesystem",
  },
]

export const pythonProjects: Project[] = [
  {
    title: "Pakuri-Dex",
    description:
      "Pokemon-inspired collection manager with a complete Pokedex interface. Features creature stats, evolution chains, and search functionality.",
    tags: ["Python", "OOP", "Data Management"],
    category: "Application",
    icon: "🕹️",
    githubUrl: "https://github.com/ARDWINNING/",
  },
]

export const assemblyProjects: Project[] = [
  {
    title: "Fibonacci Generator",
    description:
      "Efficient Fibonacci sequence generator in ARM assembly. Showcases iterative computation and register management.",
    tags: ["ARM Assembly", "Algorithm", "Recursion"],
    category: "Low-level",
    icon: "🔢",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "Palindrome Checker",
    description:
      "ARM assembly program to check if strings are palindromes. Demonstrates string manipulation and conditional branching in assembly.",
    tags: ["ARM Assembly", "String Processing"],
    category: "Low-level",
    icon: "🔄",
    githubUrl: "https://github.com/ARDWINNING/",
  },
]

export const inProgressProjects: (Project & { progress: number; githubUrl?: string })[] = [
  {
    title: "Autonomous Tractor",
    description:
      "Robotics project for autonomous agricultural vehicle navigation. Implementing path planning, obstacle detection, and GPS-based waypoint following.",
    tags: ["C++", "Robotics", "Computer Vision"],
    category: "Robotics",
    icon: "🚜",
    githubUrl: "https://github.com/ARDWINNING/Autonomous-Tractor",
    progress: 20,
  },
  {
    title: "Git Implementation",
    description:
      "Building a Git version control system from scratch in C. Features include repository initialization, commit tracking, and basic branching.",
    tags: ["C", "Systems", "Version Control"],
    category: "Utility",
    icon: "🔀",
    githubUrl: "https://github.com/ARDWINNING/",
    progress: 5,
  },
  {
    title: "News Website",
    description:
      "Full-stack news aggregation platform with article management, user authentication, and real-time updates. Modern responsive design.",
    tags: ["Full Stack", "React", "Node.js", "Database"],
    category: "Website",
    icon: "📰",
    githubUrl: "https://github.com/ARDWINNING/Winning-News",
    progress: 5,
  },
  {
    title: "TCP/IP Implementation",
    description:
      "Implementing core TCP/IP protocols from the ground up in C. Covers packet handling, connection management, and data transmission.",
    tags: ["C", "Networking", "Systems"],
    category: "Implementation",
    icon: "🌐",
    githubUrl: "https://github.com/ARDWINNING/",
    progress: 5,
  },
]
