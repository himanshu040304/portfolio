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
  architecture?: string[];
  depth?: string;
  sections?: ProjectSection[];
  outcomes?: string[];
  techStack: string[];
  featured: boolean;
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

export const PROJECTS: Project[] = [
  {
    id: "rrm-plus",
    title: "RRM-Plus: Client-Centric WiFi RRM",
    oneLineProblem: "Traditional WiFi RRM is AP-centric and blind to client-side interference, causing poor QoE in dense environments.",
    tags: ["Distributed Systems", "Networking", "ML Systems", "Causal Inference"],
    role: "Lead Systems Engineer & Architect",
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
    featured: true,
    links: [
      { label: "Technical Report", url: "#" },
      { label: "Architecture Doc", url: "#" },
    ],
  },
  {
    id: "xv6-os",
    title: "xv6 OS Kernel Modifications",
    oneLineProblem: "Standard educational kernels lack modern scheduling and memory management features.",
    tags: ["OS Internals", "C", "Kernel Dev"],
    role: "Systems Programmer",
    depth: "Engineered threads, mutexes, spinlocks, and hybrid SJF-Round Robin CPU scheduling for efficient lazy memory allocation and LRU paging.",
    sections: [
        {
            title: "Scheduling Algorithms",
            content: "Implemented a hybrid Shortest Job First (SJF) and Round Robin scheduler. This balances throughput for short tasks while ensuring fairness for long-running processes, preventing starvation."
        },
        {
            title: "Memory Management",
            content: "Implemented Lazy Memory Allocation to reduce startup time for large processes. Added LRU (Least Recently Used) paging to swap out pages to disk under memory pressure."
        }
    ],
    techStack: ["C", "Assembly (RISC-V)", "Makefile"],
    featured: false,
  },
  {
    id: "chaintune",
    title: "ChainTune: Decentralized Audio Protocol",
    oneLineProblem: "Centralized streaming platforms monopolize revenue and control artist distribution.",
    tags: ["Blockchain", "Distributed Systems", "Web3"],
    role: "Full Stack Engineer",
    depth: "Built a decentralized on-chain protocol on Aptos. Implemented IPFS for storage and smart contracts for royalty distribution.",
    techStack: ["Rust", "Move", "TypeScript", "IPFS", "Aptos"],
    featured: false,
  },
  {
    id: "tofu-swap",
    title: "ToFu Swap: Arbitrage Bot",
    oneLineProblem: "Inefficiencies in DEX liquidity pools create transient arbitrage opportunities.",
    tags: ["DeFi", "Algo Trading", "Systems"],
    role: "Backend Engineer",
    depth: "Developed an automated arbitrage bot using Bellman-Ford algorithm to identify profitable cycles across liquidity pools.",
    techStack: ["Node.js", "Ethers.js", "1inch API", "Graph Protocol"],
    featured: false,
  },
];
