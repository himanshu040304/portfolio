import archImage from "@assets/generated_images/system_architecture_diagram_schematic_dark_wireframe.png";
import loopImage from "@assets/generated_images/control_loop_diagram_schematic_dark_wireframe.png";

export interface ProjectSection {
  title: string;
  content: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  oneLineProblem: string;
  tags: string[];
  role: string;
  year: string;
  architecture?: string[];
  depth?: string;
  sections?: ProjectSection[];
  outcomes?: string[];
  techStack: string[];
  links?: { label: string; url: string }[];
}

export const PHILOSOPHY = [
  {
    title: "Correctness & Observability",
    content: "I prioritize systems that fail predictably over those that fail silently. Observability isn't an afterthought—it's a core design constraint.",
  },
  {
    title: "Low-Level Abstractions",
    content: "Comfortable navigating from React components down to kernel syscalls. Understanding the full stack enables better trade-offs.",
  },
  {
    title: "Trade-off Driven Design",
    content: "There are no perfect solutions, only optimal trade-offs. I design for specific constraints: performance vs. safety vs. scalability.",
  },
  {
    title: "Simulation First",
    content: "For complex distributed systems, simulation (ns-3) is critical for validation before deployment. Test in the matrix, deploy in reality.",
  },
];

export const SKILLS = {
  "Primary Focus": [
    "C / C++",
    "Networking Protocols",
    "OS Internals",
    "ns-3 Simulations",
    "xv6 Kernel",
    "Distributed Systems Design",
  ],
  "Secondary Focus": [
    "Blockchain Infra",
    "Lens Protocol",
    "Aave",
    "Arbitrage Bots",
    "DeFi Systems",
  ],
  "Tertiary Focus": [
    "Frontend (React/Next.js)",
    "Technical Writing",
    "System Documentation",
  ],
};

export const ACHIEVEMENTS = [
  "Inter IIT Tech Meet 14.0: 2nd Place in Arista High Prep Problem Statement (RRM-Plus) with comprehensive technical design across causal inference, reinforcement learning, and ns-3 simulation frameworks",
  "Inter IIT Tech Meet 12.0: 2nd-highest overall judging score in Aptos blockchain problem statement (ChainTune protocol)",
  "Decenbuild Social dApp Hackathon: 3rd position among 50+ teams nationwide (Web3 infrastructure)",
  "Kriti Inter-Hostel Tech Meet: 3rd-highest overall judging score in Digital Identity Problem Statement",
  "Inter IIT Technical Bootcamp: Institute Rank 2 in Quant Problem Statement (Pair Trading Strategy implementation)",
  "JEE Advanced: AIR 2435 among 0.20 million candidates",
  "JEE Main: 99.01 percentile among 1.20 million candidates",
  "Regional Mathematics Olympiad: Selected among top 30 students in state (conducted by HBCSE)",
];

export const PROJECTS: Project[] = [
  {
    id: "rrm-plus",
    title: "RRM-Plus: Client-Centric WiFi RRM",
    oneLineProblem: "Traditional WiFi RRM is AP-centric and blind to client-side interference, causing poor QoE in dense environments.",
    tags: ["Distributed Systems", "Networking", "ML Systems", "Causal Inference"],
    role: "Lead Systems Engineer & Architect",
    year: "2025",
    architecture: [
      "Sensing Orchestrator (Edge): Dedicated radio for continuous spectrum analysis.",
      "Fast Loop Control: Reacts to interference in <15s.",
      "Centralized Optimization (Cloud): GNN + Causal Inference for global planning.",
    ],
    depth: `Designed a closed-loop control system for Enterprise WiFi (Arista Networks). Core Innovation: Moved from correlation-based rewards to Causal Inference (Difference-in-Differences) to validate that RRM changes actually CAUSED QoE improvements.`,
    sections: [
      {
        title: "The Problem: AP-Centric Blindness",
        content: "Traditional RRM relies on AP-side metrics. It cannot see what the client sees (local interference, hidden nodes). This leads to suboptimal channel/power decisions. RRM-Plus introduces a 'Sensing Orchestrator' on a dedicated third radio to scan the spectrum continuously without interrupting client traffic, classifying non-WiFi interference (Microwave, BLE) via a lightweight CNN.",
        image: archImage
      },
      {
        title: "Multi-Timescale Control Loops",
        content: "The system decouples control into three distinct loops:\n1. Fast Loop (<15s): Handles immediate threats like DFS radar or massive noise spikes.\n2. Event Loop (Async): Triggered by specific signatures (microwave start).\n3. Slow Loop (Hours): Runs the heavy Global Planner (GNN + Causal Inference) to optimize long-term network topology.",
        image: loopImage
      },
      {
        title: "ns-3 Simulation as Digital Twin",
        content: "We cannot train RL agents on production networks. I built a high-fidelity ns-3 simulation that models 5GHz noise floors, client mobility, and specific interference signatures. This 'Digital Twin' generates synthetic data to train the GNN and RL agents safely."
      },
      {
        title: "Safe RL & Causal Validation",
        content: "We use Conservative Q-Learning (CQL) to learn policies that stick to high-confidence regions of the state space. Crucially, we validate rewards using Causal Inference (Difference-in-Differences). Instead of just assuming a throughput increase was due to our action, we compare against a counterfactual control group to prove causality."
      }
    ],
    outcomes: [
      "+25-35% median throughput for edge clients.",
      "-30% P95 retry rate network-wide.",
      "Zero-impact sensing using dedicated radio architecture.",
    ],
    techStack: ["Python", "C++", "ns-3", "PyTorch (GNN)", "CausalML", "Docker"],
    links: [
      { label: "Technical Report", url: "#" },
      { label: "Architecture Doc", url: "#" },
    ],
  },
  {
    id: "xv6-os",
    title: "xv6 OS Kernel Modifications",
    oneLineProblem: "Designed modern scheduling and memory management for an educational kernel to enable multitasking and efficient resource allocation.",
    tags: ["OS Internals", "C", "Kernel Dev"],
    role: "Systems Programmer",
    year: "2024",
    depth: "Engineered threads, mutexes, spinlocks, and hybrid SJF-Round Robin CPU scheduling for efficient lazy memory allocation and LRU paging.",
    sections: [
        {
            title: "Scheduling Algorithms",
            content: "Implemented a hybrid Shortest Job First (SJF) and Round Robin scheduler. This balances throughput for short tasks while ensuring fairness for long-running processes, preventing starvation."
        },
        {
            title: "Memory Management",
            content: "Implemented Lazy Memory Allocation to reduce startup time for large processes. Added LRU (Least Recently Used) paging to swap out pages to disk under memory pressure."
        },
        {
            title: "Concurrency Primitives",
            content: "Built thread management with spin locks and condition variables for safe inter-process communication. Implemented atomic operations to prevent race conditions in critical sections."
        }
    ],
    outcomes: [
      "Reduced context switch overhead by 40%",
      "Enabled efficient multithreading support",
      "Implemented fair scheduling with zero starvation"
    ],
    techStack: ["C", "Assembly (RISC-V)", "Makefile"],
  },
  {
    id: "chaintune",
    title: "ChainTune: Decentralized Audio Protocol",
    oneLineProblem: "Centralized streaming platforms monopolize revenue and control artist distribution—build decentralized ownership.",
    tags: ["Blockchain", "Distributed Systems", "Web3"],
    role: "Full Stack Engineer",
    year: "2023",
    depth: "Built a decentralized on-chain protocol on Aptos with IPFS for immutable storage and smart contracts for transparent royalty distribution.",
    sections: [
        {
            title: "Protocol Design",
            content: "Architected an on-chain music marketplace where artists mint NFTs, set pricing, and receive direct payments. Smart contracts enforce royalty splits automatically via Move language on Aptos."
        },
        {
            title: "Decentralized Storage",
            content: "Integrated Pinata (IPFS gateway) to store audio files and metadata immutably. Enabled artists to upload directly without intermediaries, maintaining complete control over their content."
        },
        {
            title: "Frontend & UX",
            content: "Built a Next.js application for artist uploads, playlist creation, and fan engagement. Integrated MetaMask for Web3 authentication and streamlined wallet management."
        }
    ],
    outcomes: [
      "Artist revenue streams fully transparent",
      "Zero intermediaries in payment flow",
      "Immutable metadata via IPFS"
    ],
    techStack: ["Rust", "Move", "TypeScript", "IPFS", "Aptos", "Next.js"],
  },
  {
    id: "tofu-swap",
    title: "ToFu Swap: Arbitrage Bot",
    oneLineProblem: "Inefficiencies in DEX liquidity pools create transient arbitrage opportunities—exploit them systematically.",
    tags: ["DeFi", "Algo Trading", "Systems"],
    role: "Backend Engineer",
    year: "2024",
    depth: "Developed an automated arbitrage bot using Bellman-Ford algorithm to identify profitable cycles across liquidity pools with flash loan integration.",
    sections: [
        {
            title: "Graph-Based Cycle Detection",
            content: "Built a real-time price graph of DEX liquidity pools. Used Bellman-Ford algorithm to detect negative-weight cycles (profitable arbitrage routes) faster than competitors."
        },
        {
            title: "Flash Loan Integration",
            content: "Integrated Aave V3 flash loans to borrow capital with zero collateral, execute swaps atomically, repay in a single transaction, and capture the profit spread."
        },
        {
            title: "On-Chain Execution",
            content: "Built smart contracts to execute arbitrage atomically on-chain. Implemented gas optimization to maximize profit after fees."
        }
    ],
    outcomes: [
      "Identified profitable cycles in <100ms",
      "Executed 50+ successful arbitrage transactions",
      "Demonstrated cycle-based trading strategy"
    ],
    techStack: ["Node.js", "Ethers.js", "1inch API", "Graph Protocol", "Solidity"],
  },
  {
    id: "tcp-networks",
    title: "Advanced Computer Networks: Concurrent TCP/UDP Stack",
    oneLineProblem: "Build low-level networking protocols from scratch to understand packet flow, congestion, and reliability.",
    tags: ["Networking", "C", "Protocols"],
    role: "Network Systems Developer",
    year: "2023",
    depth: "Implemented concurrent TCP/UDP encoders, chat servers, and network calculators. Simulated dynamic OSPF routing, CSMA/CA MAC protocol, and Stop-and-Wait flow control.",
    sections: [
        {
            title: "Protocol Implementation",
            content: "Built TCP and UDP socket implementations from scratch. Implemented handshakes, flow control (Stop-and-Wait), and congestion handling."
        },
        {
            title: "MAC Layer Simulation",
            content: "Simulated CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) protocol used in WiFi. Modeled collision detection and backoff strategies."
        },
        {
            title: "Routing Simulation",
            content: "Implemented dynamic OSPF (Open Shortest Path First) routing protocol. Simulated network topology changes and re-convergence in real-time."
        }
    ],
    outcomes: [
      "Built 3 concurrent network applications",
      "Simulated realistic network conditions",
      "Demonstrated protocol correctness under loss"
    ],
    techStack: ["C/C++", "Linux Sockets", "GCC", "Network Protocols"],
  },
];
