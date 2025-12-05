import type { Project } from "@/types/project"

export const cppProjects: Project[] = [
  {
    title: "Minesweeper",
    description:
      "Classic Minesweeper game implementation featuring recursive flood-fill algorithm, grid-based UI, and game state management.",
    tags: ["C++", "Game Development", "Algorithms"],
    category: "game",
    icon: "💣",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "AVL Tree",
    description:
      "Self-balancing binary search tree implementation with automatic rebalancing through rotations. Maintains O(log n) operations.",
    tags: ["C++", "Data Structures", "BST"],
    category: "data-structure",
    icon: "🌲",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "PageRank Algorithm",
    description:
      "Implementation of the PageRank algorithm for ranking web pages based on link structure. Iterative computation with convergence detection.",
    tags: ["C++", "Algorithms", "Graph Theory"],
    category: "algorithm",
    icon: "📊",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "Road Trip Planner",
    description:
      "Dijkstra's shortest path algorithm for optimal route planning. Features graph representation and priority queue optimization.",
    tags: ["C++", "Graphs", "Pathfinding"],
    category: "algorithm",
    icon: "🗺️",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "Memory Allocator",
    description:
      "Custom heap memory allocator implementing malloc/free with best-fit strategy. Features coalescing and memory pool management.",
    tags: ["C++", "Systems", "Memory Management"],
    category: "systems",
    icon: "🧠",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "WAD Filesystem",
    description:
      "File system implementation based on Doom WAD format. Virtual filesystem with directory management and file I/O operations.",
    tags: ["C++", "Systems", "File I/O"],
    category: "systems",
    icon: "📁",
    githubUrl: "https://github.com/ARDWINNING/",
  },
]

export const pythonProjects: Project[] = [
  {
    title: "Pakuri-Dex",
    description:
      "Pokemon-inspired collection manager with a complete Pokedex interface. Features creature stats, evolution chains, and search functionality.",
    tags: ["Python", "OOP", "Data Management"],
    category: "application",
    icon: "🎮",
    githubUrl: "https://github.com/ARDWINNING/",
  },
]

export const assemblyProjects: Project[] = [
  {
    title: "Palindrome Checker",
    description:
      "ARM assembly program to check if strings are palindromes. Demonstrates string manipulation and conditional branching in assembly.",
    tags: ["ARM Assembly", "String Processing"],
    category: "low-level",
    icon: "🔄",
    githubUrl: "https://github.com/ARDWINNING/",
  },
  {
    title: "Fibonacci Generator",
    description:
      "Efficient Fibonacci sequence generator in ARM assembly. Showcases iterative computation and register management.",
    tags: ["ARM Assembly", "Algorithms"],
    category: "low-level",
    icon: "🔢",
    githubUrl: "https://github.com/ARDWINNING/",
  },
]

export const inProgressProjects: (Project & { progress: number; githubUrl?: string })[] = [
  {
    title: "Autonomous Tractor",
    description:
      "Robotics project for autonomous agricultural vehicle navigation. Implementing path planning, obstacle detection, and GPS-based waypoint following.",
    tags: ["C++", "Robotics", "Computer Vision"],
    progress: 20,
    icon: "🚜",
    githubUrl: "https://github.com/ARDWINNING/Autonomous-Tractor",
    category: "robotics",
  },
  {
    title: "Git Implementation",
    description:
      "Building a Git version control system from scratch in C. Features include repository initialization, commit tracking, and basic branching.",
    tags: ["C", "Systems", "Version Control"],
    progress: 5,
    icon: "🔀",
    githubUrl: "https://github.com/ARDWINNING/",
    category: "systems",
    
  },
  {
    title: "News Website",
    description:
      "Full-stack news aggregation platform with article management, user authentication, and real-time updates. Modern responsive design.",
    tags: ["Full Stack", "React", "Node.js", "Database"],
    progress: 5,
    icon: "📰",
    githubUrl: "https://github.com/ARDWINNING/Winning-News",
    category: "web",
  },
  {
    title: "TCP/IP Implementation",
    description:
      "Implementing core TCP/IP protocols from the ground up in C. Covers packet handling, connection management, and data transmission.",
    tags: ["C", "Networking", "Systems"],
    progress: 5,
    icon: "🌐",
    githubUrl: "https://github.com/ARDWINNING/",
    category: "systems",
  },
]
