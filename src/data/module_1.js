export const module1Data = {
  "id": "mod-1",
  "title": "Introduction to C++",
  "category": "core",
  "subtopics": [
    {
      "id": "mod-1-1",
      "title": "What is C++?",
      "level": "Beginner",
      "summary": "Comprehensive overview of C++ as a high-performance, statically typed language. Focus on its underlying architecture and why it dominates Competitive Programming.",
      "content": "\n        <h2>The Foundation of Modern Software Systems</h2>\n        <p><strong>C++</strong> is a general-purpose, statically typed, and compiled programming language created by Bjarne Stroustrup in 1979 at Bell Labs. Originally named \"C with Classes\", it was designed as an extension of the C programming language to provide high-level object-oriented features without sacrificing the low-level memory manipulation and execution speed that C was famous for.</p>\n        \n        <h3>Why is C++ so important?</h3>\n        <p>Today, C++ forms the invisible backbone of the digital world. It is the language of choice for systems that require absolute maximum performance and minimal latency. This includes:</p>\n        <ul>\n            <li><strong>Operating Systems:</strong> Windows, macOS, and Linux kernel components.</li>\n            <li><strong>Game Engines:</strong> Unreal Engine and Unity (core engine) are built in C++ to squeeze every frame of performance out of the GPU.</li>\n            <li><strong>Web Browsers:</strong> Google Chrome's V8 JavaScript engine and Mozilla Firefox are written in C++.</li>\n            <li><strong>Financial Trading:</strong> High-frequency algorithmic trading systems where microseconds translate to millions of dollars.</li>\n        </ul>\n\n        <div class=\"highlight-box\">\n            <i class=\"fa-solid fa-bolt\"></i> <strong>The \"Zero-Overhead\" Principle</strong><br/>\n            C++ operates on the philosophy that \"you don't pay for what you don't use.\" Unlike Java or C#, C++ does not require a Virtual Machine (VM) or a Garbage Collector running in the background. Your code is compiled directly into raw machine instructions that the CPU executes instantly.\n        </div>\n\n        <h3>C++ in Competitive Programming</h3>\n        <p>In the context of <strong>Competitive Programming (LeetCode, Codeforces, HackerRank)</strong>, C++ is the absolute standard. Over 85% of competitive programming grandmasters use C++ for three main reasons:</p>\n        <ol>\n            <li><strong>Lightning-fast Execution:</strong> Crucial for passing strict Time Limit Exceeded (TLE) constraints on Codeforces.</li>\n            <li><strong>The STL (Standard Template Library):</strong> Provides highly optimized, pre-written data structures like <code>std::vector</code>, <code>std::map</code>, and <code>std::priority_queue</code>.</li>\n            <li><strong>Deterministic Memory:</strong> Total control over the stack and heap, avoiding unexpected Garbage Collection pauses.</li>\n        </ol>\n\n        <h3>The Compilation Architecture</h3>\n        <p>Because C++ is a compiled language, your human-readable source code goes through a rigorous multi-step transformation before it can be executed by the computer:</p>\n        <ul>\n            <li><strong>1. Preprocessor:</strong> Scans the code for directives like <code>#include &lt;iostream&gt;</code> and macros, pasting the required header files directly into your code.</li>\n            <li><strong>2. Compiler:</strong> Translates the preprocessed C++ code into assembly language, and then into machine-readable Object Code (<code>.o</code> or <code>.obj</code> files).</li>\n            <li><strong>3. Linker:</strong> Combines your object files with the standard C++ libraries to produce the final Executable binary (<code>.exe</code> on Windows).</li>\n        </ul>\n      ",
      "diagram": {
        "viewBox": "0 0 700 200",
        "controls": [
          {
            "id": "all",
            "label": "Full Compilation Flow",
            "highlightNodes": [
              "src",
              "prep",
              "comp",
              "obj",
              "link",
              "exe"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3",
              "e4"
            ]
          },
          {
            "id": "prep_stage",
            "label": "1. Preprocessor",
            "highlightNodes": [
              "src",
              "prep"
            ],
            "highlightEdges": [
              "e1"
            ]
          },
          {
            "id": "comp_stage",
            "label": "2. Compiler",
            "highlightNodes": [
              "prep",
              "comp",
              "obj"
            ],
            "highlightEdges": [
              "e2",
              "e3"
            ]
          },
          {
            "id": "link_stage",
            "label": "3. Linker",
            "highlightNodes": [
              "obj",
              "link",
              "exe"
            ],
            "highlightEdges": [
              "e4"
            ]
          }
        ],
        "nodes": [
          {
            "id": "src",
            "label": "Source (.cpp)",
            "x": 70,
            "y": 100
          },
          {
            "id": "prep",
            "label": "Preprocessor",
            "x": 200,
            "y": 100
          },
          {
            "id": "comp",
            "label": "Compiler",
            "x": 330,
            "y": 100
          },
          {
            "id": "obj",
            "label": "Object (.o)",
            "x": 460,
            "y": 100
          },
          {
            "id": "link",
            "label": "Linker",
            "x": 560,
            "y": 100
          },
          {
            "id": "exe",
            "label": "Binary (.exe)",
            "x": 660,
            "y": 100
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "src",
            "to": "prep"
          },
          {
            "id": "e2",
            "from": "prep",
            "to": "comp"
          },
          {
            "id": "e3",
            "from": "comp",
            "to": "obj"
          },
          {
            "id": "e4",
            "from": "obj",
            "to": "link"
          }
        ]
      }
    },
    {
      "id": "mod-1-2",
      "title": "History of C++",
      "level": "Beginner",
      "summary": "Trace the evolution of C++ from its inception as 'C with Classes' to the modern powerhouse it is today.",
      "content": "\n        <h2>The Evolution of C++</h2>\n        <p>The history of C++ is a story of continuous evolution. Bjarne Stroustrup began developing the language in 1979 at Bell Labs. His goal was simple but ambitious: create a language that combined the high-level code organization of <strong>Simula</strong> (the first object-oriented language) with the raw execution speed and low-level hardware access of <strong>C</strong>.</p>\n        \n        <h3>The Name \"C++\"</h3>\n        <p>Originally called <em>\"C with Classes\"</em>, it was renamed to <strong>C++</strong> in 1983. In the C programming language, <code>++</code> is the increment operator, meaning \"add one to the variable\". The name playfully suggests that C++ is the next logical increment, or evolution, of C.</p>\n\n        <h3>Key Milestone Standards</h3>\n        <p>C++ is standardized by the International Organization for Standardization (ISO). Modern C++ is vastly different—and much safer—than historical C++. Here is the timeline of critical updates that you must know:</p>\n        \n        <table class=\"w-full text-left border-collapse mt-4 mb-6\">\n            <thead>\n                <tr class=\"border-b border-forest/50 text-lime\">\n                    <th class=\"py-2 pr-4\">Standard</th>\n                    <th class=\"py-2 pr-4\">Year</th>\n                    <th class=\"py-2\">Major Features Introduced</th>\n                </tr>\n            </thead>\n            <tbody class=\"text-cream/90 text-sm\">\n                <tr class=\"border-b border-forest/20\">\n                    <td class=\"py-3 font-mono text-cream\">C++98</td>\n                    <td class=\"py-3\">1998</td>\n                    <td class=\"py-3\">First ISO standard. Introduced the <strong>Standard Template Library (STL)</strong>, providing containers like <code>vector</code>, <code>map</code>, and <code>set</code> which revolutionized algorithmic programming.</td>\n                </tr>\n                <tr class=\"border-b border-forest/20\">\n                    <td class=\"py-3 font-mono text-cream\">C++11</td>\n                    <td class=\"py-3\">2011</td>\n                    <td class=\"py-3\">The \"Modern C++\" revolution. Completely transformed the language by introducing <code>auto</code> type deduction, lambda expressions, smart pointers (<code>std::unique_ptr</code>), move semantics, and range-based for loops.</td>\n                </tr>\n                <tr class=\"border-b border-forest/20\">\n                    <td class=\"py-3 font-mono text-cream\">C++14 / C++17</td>\n                    <td class=\"py-3\">2014-2017</td>\n                    <td class=\"py-3\">Introduced structured bindings (e.g., <code>auto [x, y] = pair;</code>)—a massive quality-of-life feature for graph algorithms in LeetCode. Added <code>std::optional</code> and parallel algorithms.</td>\n                </tr>\n                <tr>\n                    <td class=\"py-3 font-mono text-cream\">C++20 / C++23</td>\n                    <td class=\"py-3\">2020-2023</td>\n                    <td class=\"py-3\">Major leap introducing <strong>Concepts</strong>, <strong>Ranges</strong>, <strong>Coroutines</strong>, and standard library <strong>Modules</strong> (allowing <code>import std;</code> instead of <code>#include</code>).</td>\n                </tr>\n            </tbody>\n        </table>\n      ",
      "diagram": {
        "viewBox": "0 0 600 250",
        "controls": [
          {
            "id": "all",
            "label": "Timeline",
            "highlightNodes": [
              "c",
              "cpp98",
              "cpp11",
              "cpp17"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3"
            ]
          },
          {
            "id": "cpp11",
            "label": "C++11 (Modern C++)",
            "highlightNodes": [
              "cpp11"
            ],
            "highlightEdges": []
          },
          {
            "id": "cpp17",
            "label": "C++17 (Structured Bindings)",
            "highlightNodes": [
              "cpp17"
            ],
            "highlightEdges": []
          }
        ],
        "nodes": [
          {
            "id": "c",
            "label": "1979: C w/ Classes",
            "x": 100,
            "y": 125
          },
          {
            "id": "cpp98",
            "label": "1998: C++98",
            "x": 250,
            "y": 125
          },
          {
            "id": "cpp11",
            "label": "2011: C++11",
            "x": 400,
            "y": 125
          },
          {
            "id": "cpp17",
            "label": "2017: C++17",
            "x": 550,
            "y": 125
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "c",
            "to": "cpp98"
          },
          {
            "id": "e2",
            "from": "cpp98",
            "to": "cpp11"
          },
          {
            "id": "e3",
            "from": "cpp11",
            "to": "cpp17"
          }
        ]
      }
    },
    {
      "id": "mod-1-3",
      "title": "Top reasons to learn C++",
      "level": "Beginner",
      "summary": "Understand why C++ remains the undisputed king of Competitive Programming and high-performance system engineering.",
      "content": "\n        <h2>Why learn C++ today?</h2>\n        <p>With easier languages like Python and JavaScript dominating web development, why do top-tier tech companies (FAANG) and algorithmic competitions still strictly demand C++ expertise? Here is why learning C++ is the most valuable investment you can make for your computer science fundamentals.</p>\n        \n        <h3>1. The King of Competitive Programming</h3>\n        <p>In algorithmic coding platforms like <strong>HackerRank</strong>, <strong>Codeforces</strong>, and <strong>LeetCode</strong>, your solution is judged against strict Time Limit Exceeded (TLE) constraints (usually 1.0s or 2.0s per test case). C++ handles massive datasets mathematically faster than interpreted languages.</p>\n        <ul>\n            <li><strong>Python:</strong> Highly readable, but often times out on complex Dynamic Programming (DP) or Graph algorithms due to interpreter overhead.</li>\n            <li><strong>Java:</strong> Fast, but carries high memory overhead (Garbage Collector) and requires extensive boilerplate code.</li>\n            <li><strong>C++:</strong> Provides the perfect balance. Lightning-fast execution, microscopic memory footprint, and the STL (Standard Template Library) which allows you to deploy complex data structures in a single line of code.</li>\n        </ul>\n        \n        <div class=\"code-container my-6\">\n            <div class=\"code-header\"><span class=\"code-lang\">Performance Comparison Metrics (Approximated for 10^8 operations)</span></div>\n            <pre><code class=\"language-plaintext\">Language   | Execution Speed | Memory Overhead | Typical CP Usage\n-----------|-----------------|-----------------|-------------------\nC++        | ~0.05 seconds   | ~2 MB           | 85% of Grandmasters\nJava       | ~0.40 seconds   | ~40 MB          | 10%\nPython     | ~2.50 seconds   | ~15 MB          | 5% (Often TLEs)</code></pre>\n        </div>\n\n        <h3>2. Deep Understanding of Computer Science</h3>\n        <p>Languages like Python hide how computers actually work. By learning C++, you are forced to understand <strong>Pointers</strong>, <strong>Memory Allocation (Stack vs Heap)</strong>, and <strong>Cache Locality</strong>. This deep mental model of hardware transfers seamlessly to any other language you learn in the future (like Rust or Go).</p>\n\n        <h3>3. High-Paying Industry Demand</h3>\n        <p>C++ engineers command some of the highest salaries in tech because writing safe, high-performance C++ is a specialized skill. If you want to work on Tesla's Autopilot AI inference, SpaceX flight software, high-frequency quantitative trading, or AAA Game Engines (Unreal), C++ is a strict requirement.</p>\n      ",
      "diagram": {
        "viewBox": "0 0 500 300",
        "controls": [
          {
            "id": "all",
            "label": "Speed Comparison",
            "highlightNodes": [
              "cpp",
              "java",
              "py"
            ],
            "highlightEdges": []
          },
          {
            "id": "cpp",
            "label": "C++ (Fastest)",
            "highlightNodes": [
              "cpp"
            ],
            "highlightEdges": []
          }
        ],
        "nodes": [
          {
            "id": "cpp",
            "label": "C++: ~0.05s",
            "x": 250,
            "y": 250
          },
          {
            "id": "java",
            "label": "Java: ~0.40s",
            "x": 250,
            "y": 150
          },
          {
            "id": "py",
            "label": "Python: ~2.50s",
            "x": 250,
            "y": 50
          }
        ],
        "edges": []
      }
    },
    {
      "id": "mod-1-4",
      "title": "Procedural Oriented vs Object Oriented Programming",
      "level": "Beginner",
      "summary": "A detailed structural comparison between function-driven procedural paradigms (C) and data-driven object-oriented paradigms (C++).",
      "content": "\n        <h2>Understanding Programming Paradigms</h2>\n        <p>Before Object-Oriented Programming (OOP) revolutionized software architecture, almost all code was written using <strong>Procedural Oriented Programming (POP)</strong>. To understand why C++ was created, we must compare it to its predecessor, C.</p>\n        \n        <h3>Procedural Oriented Programming (POP)</h3>\n        <p>In languages like C, Pascal, and early Basic, the program is divided into small, manageable units called <strong>functions</strong>. The focus is purely on the <em>logic</em> and the <em>actions</em> to be performed.</p>\n        <ul class=\"list-disc ml-6 mt-2 mb-4 text-cream/80\">\n            <li><strong>Top-Down Approach:</strong> You start with the main problem and break it down into smaller functions.</li>\n            <li><strong>Global Data:</strong> Data variables are usually declared globally, meaning any function in the entire program can modify them. This makes debugging massive applications a nightmare.</li>\n            <li><strong>Real-world modeling:</strong> Poor. It is difficult to model a complex real-world system (like a banking app) purely using standalone functions.</li>\n        </ul>\n\n        <h3>Object-Oriented Programming (OOP)</h3>\n        <p>C++, Java, and Python embrace OOP. Instead of focusing on functions, the program is divided into independent entities called <strong>Objects</strong>. An object bundles both the <strong>Data</strong> (variables) and the <strong>Methods</strong> (functions) that operate on that data into a single, secure unit.</p>\n        <ul class=\"list-disc ml-6 mt-2 mb-4 text-cream/80\">\n            <li><strong>Bottom-Up Approach:</strong> You design the base components (Objects) first, and then assemble them to form the final system.</li>\n            <li><strong>Data Security:</strong> Data is hidden inside the object (Encapsulation). Outside functions cannot accidentally corrupt it.</li>\n            <li><strong>Real-world modeling:</strong> Excellent. You can create a <code>Car</code> object that has data (<code>speed</code>, <code>color</code>) and methods (<code>accelerate()</code>, <code>brake()</code>).</li>\n        </ul>\n\n        <div class=\"code-container my-6\">\n            <div class=\"code-header\"><span class=\"code-lang\">Paradigm Comparison Table</span></div>\n            <pre><code class=\"language-plaintext\">Feature             | Procedural (POP)                | Object-Oriented (OOP)\n--------------------|---------------------------------|---------------------------------\nCore Focus          | Functions (Actions)             | Objects (Data + Methods)\nData Security       | Low (Global variables exposed)  | High (Private/Protected scopes)\nCode Reusability    | Low                             | High (via Inheritance)\nModifiability       | Difficult in large codebases    | Easy to scale and maintain\nExamples            | C, Pascal, Fortran              | C++, Java, Python, C#</code></pre>\n        </div>\n      ",
      "diagram": {
        "viewBox": "0 0 600 300",
        "controls": [
          {
            "id": "all",
            "label": "Compare Architectures",
            "highlightNodes": [
              "pop",
              "oop"
            ],
            "highlightEdges": []
          },
          {
            "id": "pop",
            "label": "Procedural (Action focused)",
            "highlightNodes": [
              "pop"
            ],
            "highlightEdges": []
          },
          {
            "id": "oop",
            "label": "OOP (Data focused)",
            "highlightNodes": [
              "oop"
            ],
            "highlightEdges": []
          }
        ],
        "nodes": [
          {
            "id": "pop",
            "label": "POP: Global() -> Data",
            "x": 170,
            "y": 150
          },
          {
            "id": "oop",
            "label": "OOP: Object{ Data, Methods() }",
            "x": 450,
            "y": 150
          }
        ],
        "edges": []
      }
    },
    {
      "id": "mod-1-5",
      "title": "Introduction to Object Oriented Programming",
      "level": "Beginner",
      "summary": "A deep dive into the 4 Pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism, complete with C++ examples.",
      "content": "\n        <h2>The 4 Pillars of Object-Oriented Programming</h2>\n        <p>To master C++ system design, you must understand the four foundational concepts of Object-Oriented software architecture. These pillars allow us to write code that is secure, reusable, and infinitely scalable.</p>\n        \n        <h3>1. Encapsulation (Data Hiding)</h3>\n        <p>Encapsulation is the process of bundling the data (variables) and the functions that manipulate that data into a single unit known as a <strong>class</strong>. Furthermore, it involves restricting direct access to some of the object's components, which is a means of preventing accidental interference.</p>\n        <p><em>Real-world analogy:</em> A medical capsule contains medicine inside, protected by an outer shell. You consume the capsule without touching the raw chemicals.</p>\n\n        <h3>2. Abstraction</h3>\n        <p>Abstraction means hiding the complex internal implementation details and showing only the essential features to the user. It reduces complexity and isolates the impact of changes.</p>\n        <p><em>Real-world analogy:</em> When you press the accelerator in a car, the car speeds up. You don't need to know how the fuel injector or engine combustion works internally. You just use the \"accelerate interface\".</p>\n        <p><em>Code analogy:</em> When you call <code>std::sort()</code> in C++, you don't need to write the complex Introsort algorithm yourself. The complexity is abstracted away.</p>\n\n        <h3>3. Inheritance</h3>\n        <p>Inheritance allows a new class (the <em>Derived Class</em>) to inherit properties and behaviors from an existing class (the <em>Base Class</em>). This promotes extreme code reusability and establishes a natural hierarchy.</p>\n        <p><em>Real-world analogy:</em> A <code>Dog</code> inherits generic traits from an <code>Animal</code> (like eating and sleeping), but it can also have specific traits (barking).</p>\n\n        <h3>4. Polymorphism (One Interface, Many Forms)</h3>\n        <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass. More practically, it allows functions or operators to behave differently based on the data they are given.</p>\n        <ul>\n            <li><strong>Compile-time Polymorphism:</strong> Function Overloading (e.g., having multiple <code>add()</code> functions, one for integers, one for floats).</li>\n            <li><strong>Run-time Polymorphism:</strong> Virtual Function Overriding (e.g., a base class has a <code>draw()</code> function, but <code>Circle::draw()</code> and <code>Square::draw()</code> execute entirely different code).</li>\n        </ul>\n      ",
      "diagram": {
        "viewBox": "0 0 500 400",
        "controls": [
          {
            "id": "all",
            "label": "The 4 Pillars",
            "highlightNodes": [
              "oop",
              "encap",
              "abs",
              "inh",
              "poly"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3",
              "e4"
            ]
          },
          {
            "id": "encap",
            "label": "1. Encapsulation",
            "highlightNodes": [
              "oop",
              "encap"
            ],
            "highlightEdges": [
              "e1"
            ]
          },
          {
            "id": "abs",
            "label": "2. Abstraction",
            "highlightNodes": [
              "oop",
              "abs"
            ],
            "highlightEdges": [
              "e2"
            ]
          },
          {
            "id": "inh",
            "label": "3. Inheritance",
            "highlightNodes": [
              "oop",
              "inh"
            ],
            "highlightEdges": [
              "e3"
            ]
          },
          {
            "id": "poly",
            "label": "4. Polymorphism",
            "highlightNodes": [
              "oop",
              "poly"
            ],
            "highlightEdges": [
              "e4"
            ]
          }
        ],
        "nodes": [
          {
            "id": "oop",
            "label": "OOP",
            "x": 250,
            "y": 200
          },
          {
            "id": "encap",
            "label": "Encapsulation",
            "x": 250,
            "y": 50
          },
          {
            "id": "abs",
            "label": "Abstraction",
            "x": 400,
            "y": 200
          },
          {
            "id": "inh",
            "label": "Inheritance",
            "x": 250,
            "y": 350
          },
          {
            "id": "poly",
            "label": "Polymorphism",
            "x": 100,
            "y": 200
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "oop",
            "to": "encap"
          },
          {
            "id": "e2",
            "from": "oop",
            "to": "abs"
          },
          {
            "id": "e3",
            "from": "oop",
            "to": "inh"
          },
          {
            "id": "e4",
            "from": "oop",
            "to": "poly"
          }
        ]
      }
    },
    {
      "id": "mod-1-6",
      "title": "What is stream and types of stream?",
      "level": "Intermediate",
      "summary": "Mastering the C++ I/O stream hierarchy: istream, ostream, and buffer flow mechanisms essential for fast I/O in CP.",
      "content": "\n        <h2>Understanding C++ I/O Streams (<code>&lt;iostream&gt;</code>)</h2>\n        <p>In C++, input and output are not built into the core language itself. Instead, they are handled by the Standard Library via <strong>Streams</strong>. A stream is simply an abstraction—a sequence of bytes flowing smoothly from a source (like a keyboard or a file) to a destination (like a console screen or a network socket).</p>\n        \n        <h3>The Stream Hierarchy</h3>\n        <p>C++ categorizes streams hierarchically. At the very top is the base <code>ios</code> class, which branches into specialized input and output classes.</p>\n        \n        <ul>\n            <li><strong><code>std::istream</code> (Input Stream):</strong> Handles byte flow <em>into</em> your program variables. The most common instance is <code>std::cin</code>, which is bound to the standard input device (usually the keyboard).</li>\n            <li><strong><code>std::ostream</code> (Output Stream):</strong> Handles byte flow <em>out of</em> your program. The most common instance is <code>std::cout</code>, bound to the standard output device (the monitor).</li>\n        </ul>\n\n        <h3>Buffered vs Unbuffered Streams</h3>\n        <p>Understanding buffers is a secret weapon in Competitive Programming.</p>\n        <ul>\n            <li><strong><code>std::cout</code> (Buffered):</strong> When you output text, it doesn't immediately go to the screen. It is stored in a memory buffer. When the buffer is full, or when you explicitly flush it (using <code>std::endl</code>), the data is dumped to the screen all at once. This makes it very fast.</li>\n            <li><strong><code>std::cerr</code> (Unbuffered Error Stream):</strong> Used for critical error messages. It bypasses the buffer and prints to the screen instantly so you can see the error even if the program crashes immediately after.</li>\n            <li><strong><code>std::clog</code> (Buffered Log Stream):</strong> Used for general diagnostic logging, functioning similarly to <code>cout</code> but semantically indicating log data.</li>\n        </ul>\n\n        <div class=\"highlight-box\">\n            <i class=\"fa-solid fa-rocket\"></i> <strong>Competitive Programming Fast I/O Hack</strong><br/>\n            In C++, <code>cin</code> and <code>cout</code> are synchronized with C's <code>scanf</code> and <code>printf</code> by default to prevent issues if you mix them. This synchronization makes C++ streams slow! To achieve lightning-fast I/O in LeetCode/Codeforces, add this line at the start of <code>main()</code>:<br/>\n            <code>ios_base::sync_with_stdio(false); cin.tie(NULL);</code>\n        </div>\n      ",
      "diagram": {
        "viewBox": "0 0 500 300",
        "controls": [
          {
            "id": "all",
            "label": "Stream Hierarchy",
            "highlightNodes": [
              "ios",
              "istream",
              "ostream",
              "cin",
              "cout",
              "cerr"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3",
              "e4",
              "e5"
            ]
          }
        ],
        "nodes": [
          {
            "id": "ios",
            "label": "ios (Base)",
            "x": 250,
            "y": 50
          },
          {
            "id": "istream",
            "label": "istream",
            "x": 120,
            "y": 150
          },
          {
            "id": "ostream",
            "label": "ostream",
            "x": 380,
            "y": 150
          },
          {
            "id": "cin",
            "label": "cin",
            "x": 120,
            "y": 250
          },
          {
            "id": "cout",
            "label": "cout (Buffered)",
            "x": 300,
            "y": 250
          },
          {
            "id": "cerr",
            "label": "cerr (Unbuffered)",
            "x": 460,
            "y": 250
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "ios",
            "to": "istream"
          },
          {
            "id": "e2",
            "from": "ios",
            "to": "ostream"
          },
          {
            "id": "e3",
            "from": "istream",
            "to": "cin"
          },
          {
            "id": "e4",
            "from": "ostream",
            "to": "cout"
          },
          {
            "id": "e5",
            "from": "ostream",
            "to": "cerr"
          }
        ]
      }
    },
    {
      "id": "mod-1-7",
      "title": "Cout & Cin",
      "level": "Beginner",
      "summary": "Mastering standard console output (std::cout <<) and input (std::cin >>) operator mechanics and formatting.",
      "content": "\n        <h2>Standard Console Input (<code>cin</code>) and Output (<code>cout</code>)</h2>\n        <p>In C++, we utilize the bitwise shift operators in a radically different way to perform stream operations. This is a classic example of <strong>Operator Overloading</strong> (a form of Polymorphism).</p>\n        \n        <h3>The Insertion Operator <code>&lt;&lt;</code></h3>\n        <p>Used strictly with <code>cout</code>. Think of the arrows as pointing towards the stream. You are \"inserting\" data into the output stream buffer.</p>\n        \n        <h3>The Extraction Operator <code>&gt;&gt;</code></h3>\n        <p>Used strictly with <code>cin</code>. Think of the arrows as pointing away from the stream, extracting data out of the input buffer and dropping it into your variables.</p>\n        \n        <div class=\"code-container my-6\">\n            <div class=\"code-header\"><span class=\"code-lang\">cin_cout_demo.cpp</span><button class=\"copy-code-btn\">Copy</button></div>\n            <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string firstName;\n    int age;\n    \n    // Output prompt using insertion operator (<<)\n    cout &lt;&lt; \"Enter your first name and age: \";\n    \n    // Extraction operator (>>) reads space-separated input\n    // Chaining allows us to read both variables in one line!\n    cin &gt;&gt; firstName &gt;&gt; age;\n    \n    // Chaining output variables and text literals\n    cout &lt;&lt; \"Hello \" &lt;&lt; firstName &lt;&lt; \", you are \" &lt;&lt; age &lt;&lt; \" years old.\\n\";\n    \n    return 0;\n}</code></pre>\n        </div>\n\n        <div class=\"highlight-box\">\n            <i class=\"fa-solid fa-triangle-exclamation\"></i> <strong>endl vs \\n</strong><br/>\n            Never use <code>std::endl</code> in a loop during competitive programming. <code>endl</code> inserts a newline AND forces the buffer to flush to the screen immediately, which is a heavy OS operation. Always use the newline character <code>\\n</code> for significantly faster performance.\n        </div>\n      ",
      "diagram": {
        "viewBox": "0 0 600 200",
        "controls": [
          {
            "id": "all",
            "label": "Data Flow Pipeline",
            "highlightNodes": [
              "kb",
              "cin",
              "var",
              "cout",
              "scr"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3",
              "e4"
            ]
          },
          {
            "id": "input_flow",
            "label": "Input Extraction (>>)",
            "highlightNodes": [
              "kb",
              "cin",
              "var"
            ],
            "highlightEdges": [
              "e1",
              "e2"
            ]
          },
          {
            "id": "output_flow",
            "label": "Output Insertion (<<)",
            "highlightNodes": [
              "var",
              "cout",
              "scr"
            ],
            "highlightEdges": [
              "e3",
              "e4"
            ]
          }
        ],
        "nodes": [
          {
            "id": "kb",
            "label": "Keyboard",
            "x": 70,
            "y": 100
          },
          {
            "id": "cin",
            "label": "cin >>",
            "x": 180,
            "y": 100
          },
          {
            "id": "var",
            "label": "Variables (RAM)",
            "x": 300,
            "y": 100
          },
          {
            "id": "cout",
            "label": "cout <<",
            "x": 420,
            "y": 100
          },
          {
            "id": "scr",
            "label": "Monitor",
            "x": 530,
            "y": 100
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "kb",
            "to": "cin"
          },
          {
            "id": "e2",
            "from": "cin",
            "to": "var"
          },
          {
            "id": "e3",
            "from": "var",
            "to": "cout"
          },
          {
            "id": "e4",
            "from": "cout",
            "to": "scr"
          }
        ]
      }
    },
    {
      "id": "mod-1-8",
      "title": "How to use clrscr function in VS Code",
      "level": "Beginner",
      "summary": "Understand why conio.h is deprecated and the modern standard techniques for clearing terminal output across different operating systems.",
      "content": "\n        <h2>Clearing the Terminal Screen</h2>\n        <p>If you have read older textbooks or used Turbo C++, you are probably familiar with <code>clrscr()</code> from the <code>&lt;conio.h&gt;</code> library. <strong>This library is obsolete and is not supported by modern compilers like GCC or Clang used in VS Code.</strong></p>\n        \n        <h3>The Modern Approach: <code>system()</code></h3>\n        <p>The standard way to clear the console in modern C++ is to ask the Operating System's terminal to run its native clear command using the <code>system()</code> function from the <code>&lt;cstdlib&gt;</code> header.</p>\n        \n        <ul>\n            <li><strong>Windows:</strong> <code>system(\"cls\");</code></li>\n            <li><strong>Linux / macOS:</strong> <code>system(\"clear\");</code></li>\n        </ul>\n\n        <div class=\"code-container my-6\">\n            <div class=\"code-header\"><span class=\"code-lang\">clear_screen.cpp</span><button class=\"copy-code-btn\">Copy</button></div>\n            <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;cstdlib&gt; // Required for system()\nusing namespace std;\n\nint main() {\n    cout &lt;&lt; \"This text is messy and clutters the terminal.\\n\";\n    cout &lt;&lt; \"Press Enter to clear the screen...\";\n    cin.get(); // Wait for user input\n    \n    // Clear screen for Windows OS\n    system(\"cls\"); \n    \n    cout &lt;&lt; \"The screen is now clean!\" &lt;&lt; endl;\n    return 0;\n}</code></pre>\n        </div>\n\n        <h3>The Cross-Platform \"ANSI Escape Code\" Method</h3>\n        <p>Using <code>system()</code> is generally considered bad practice in enterprise software due to heavy overhead and security risks. A hyper-fast, cross-platform alternative supported by modern terminals is to print an ANSI escape code:<br/>\n        <code>cout &lt;&lt; \"\\033[2J\\033[1;1H\";</code><br/>\n        This instantly wipes the terminal buffer without calling the OS shell.</p>\n      ",
      "diagram": {
        "viewBox": "0 0 500 200",
        "controls": [
          {
            "id": "all",
            "label": "Clearing Process",
            "highlightNodes": [
              "pre",
              "sys",
              "post"
            ],
            "highlightEdges": [
              "e1",
              "e2"
            ]
          }
        ],
        "nodes": [
          {
            "id": "pre",
            "label": "Messy Terminal",
            "x": 100,
            "y": 100
          },
          {
            "id": "sys",
            "label": "system('cls')",
            "x": 250,
            "y": 100
          },
          {
            "id": "post",
            "label": "Clean UI",
            "x": 400,
            "y": 100
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "pre",
            "to": "sys"
          },
          {
            "id": "e2",
            "from": "sys",
            "to": "post"
          }
        ]
      }
    },
    {
      "id": "mod-1-9",
      "title": "Keywords & Identifiers",
      "level": "Beginner",
      "summary": "Master the strict rules for naming variables, functions, and classes, and understand the reserved keywords of the language.",
      "content": "\n        <h2>Syntax Foundations: Words in C++</h2>\n        <p>Every word you type in a C++ program is classified as either a <strong>Keyword</strong> (owned by the language) or an <strong>Identifier</strong> (created by you).</p>\n        \n        <h3>1. Keywords (Reserved Words)</h3>\n        <p>Keywords are predefined words that hold special meaning to the C++ compiler. You cannot use them as variable names. C++ has 95 reserved keywords.</p>\n        <p><em>Examples:</em> <code>int</code>, <code>class</code>, <code>return</code>, <code>public</code>, <code>if</code>, <code>break</code>, <code>namespace</code>.</p>\n\n        <h3>2. Identifiers (Your Variable Names)</h3>\n        <p>Identifiers are the custom names you give to variables, arrays, functions, and classes. However, the compiler enforces strict rules on what constitutes a valid identifier:</p>\n        \n        <ul class=\"list-disc ml-6 mt-2 mb-4 text-cream/80\">\n            <li><strong>Rule 1:</strong> Can only contain letters (A-Z, a-z), digits (0-9), and underscores (<code>_</code>).</li>\n            <li><strong>Rule 2:</strong> Must <strong>start</strong> with a letter or an underscore. It CANNOT start with a digit.</li>\n            <li><strong>Rule 3:</strong> Cannot be a reserved keyword.</li>\n            <li><strong>Rule 4:</strong> C++ is strictly case-sensitive. <code>myVar</code> and <code>myvar</code> are entirely different variables.</li>\n        </ul>\n\n        <div class=\"code-container my-6\">\n            <div class=\"code-header\"><span class=\"code-lang\">Validation Examples</span></div>\n            <pre><code class=\"language-cpp\">int totalCount = 10;     // VALID\nint _playerSpeed = 50;   // VALID\nint 1stPlace = 100;      // INVALID (starts with a digit)\nint player score = 0;    // INVALID (contains a space)\nint return = 5;          // INVALID (return is a keyword)</code></pre>\n        </div>\n      ",
      "diagram": {
        "viewBox": "0 0 500 250",
        "controls": [
          {
            "id": "all",
            "label": "Identifier Validation",
            "highlightNodes": [
              "id",
              "val",
              "val2",
              "inval1",
              "inval2"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3",
              "e4"
            ]
          },
          {
            "id": "valid",
            "label": "Valid Identifiers",
            "highlightNodes": [
              "id",
              "val",
              "val2"
            ],
            "highlightEdges": [
              "e1",
              "e2"
            ]
          },
          {
            "id": "invalid",
            "label": "Invalid Identifiers",
            "highlightNodes": [
              "id",
              "inval1",
              "inval2"
            ],
            "highlightEdges": [
              "e3",
              "e4"
            ]
          }
        ],
        "nodes": [
          {
            "id": "id",
            "label": "Is Valid Identifier?",
            "x": 150,
            "y": 125
          },
          {
            "id": "val",
            "label": "_speed (Yes)",
            "x": 380,
            "y": 40
          },
          {
            "id": "val2",
            "label": "player1 (Yes)",
            "x": 380,
            "y": 100
          },
          {
            "id": "inval1",
            "label": "1player (No)",
            "x": 380,
            "y": 160
          },
          {
            "id": "inval2",
            "label": "int (No)",
            "x": 380,
            "y": 220
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "id",
            "to": "val"
          },
          {
            "id": "e2",
            "from": "id",
            "to": "val2"
          },
          {
            "id": "e3",
            "from": "id",
            "to": "inval1"
          },
          {
            "id": "e4",
            "from": "id",
            "to": "inval2"
          }
        ]
      }
    },
    {
      "id": "mod-1-10",
      "title": "Escape Sequences",
      "level": "Beginner",
      "summary": "Manipulating terminal output formatting using backslash escape characters.",
      "content": "\n        <h2>Formatting Output with Escape Sequences</h2>\n        <p>Sometimes you need to print special characters that cannot be typed directly (like a line break) or characters that have special meaning in C++ (like a double quote <code>\"</code> which usually ends a string). To bypass this, we use <strong>Escape Sequences</strong>.</p>\n        \n        <p>An escape sequence begins with a backslash <code>\\</code>. It forces the compiler to escape its normal behavior and treat the next character as a special formatting command.</p>\n\n        <table class=\"w-full text-left border-collapse mt-4 mb-6\">\n            <thead>\n                <tr class=\"border-b border-forest/50 text-lime\">\n                    <th class=\"py-2 pr-4\">Sequence</th>\n                    <th class=\"py-2\">Description</th>\n                    <th class=\"py-2\">Example Output</th>\n                </tr>\n            </thead>\n            <tbody class=\"text-cream/90 text-sm font-mono\">\n                <tr class=\"border-b border-forest/20\">\n                    <td class=\"py-3 text-rust\">\\n</td>\n                    <td class=\"py-3 font-sans\">Creates a New Line (Fastest way to break lines)</td>\n                    <td class=\"py-3 text-cream/50\">Hello<br/>World</td>\n                </tr>\n                <tr class=\"border-b border-forest/20\">\n                    <td class=\"py-3 text-rust\">\\t</td>\n                    <td class=\"py-3 font-sans\">Inserts a Horizontal Tab (creates visual spacing)</td>\n                    <td class=\"py-3 text-cream/50\">Item1 &nbsp;&nbsp;&nbsp; Item2</td>\n                </tr>\n                <tr class=\"border-b border-forest/20\">\n                    <td class=\"py-3 text-rust\">\\\\</td>\n                    <td class=\"py-3 font-sans\">Prints a literal backslash</td>\n                    <td class=\"py-3 text-cream/50\">C:\\Program Files\\</td>\n                </tr>\n                <tr>\n                    <td class=\"py-3 text-rust\">\\\"</td>\n                    <td class=\"py-3 font-sans\">Prints a double quote inside a string</td>\n                    <td class=\"py-3 text-cream/50\">He said \"Hello\"</td>\n                </tr>\n            </tbody>\n        </table>\n        \n        <div class=\"code-container my-6\">\n            <div class=\"code-header\"><span class=\"code-lang\">escape_demo.cpp</span></div>\n            <pre><code class=\"language-cpp\">cout &lt;&lt; \"Column1\\tColumn2\\n\";\ncout &lt;&lt; \"She screamed, \\\"Watch out!\\\"\";</code></pre>\n        </div>\n      ",
      "diagram": {
        "viewBox": "0 0 500 250",
        "controls": [
          {
            "id": "all",
            "label": "Escape Character Mapping",
            "highlightNodes": [
              "esc",
              "nl",
              "tab",
              "quote"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3"
            ]
          }
        ],
        "nodes": [
          {
            "id": "esc",
            "label": "Escape Token: \\",
            "x": 120,
            "y": 125
          },
          {
            "id": "nl",
            "label": "n -> [Line Break]",
            "x": 380,
            "y": 50
          },
          {
            "id": "tab",
            "label": "t -> [Tab Space]",
            "x": 380,
            "y": 125
          },
          {
            "id": "quote",
            "label": "\" -> [Print Quote]",
            "x": 380,
            "y": 200
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "esc",
            "to": "nl"
          },
          {
            "id": "e2",
            "from": "esc",
            "to": "tab"
          },
          {
            "id": "e3",
            "from": "esc",
            "to": "quote"
          }
        ]
      }
    },
    {
      "id": "mod-1-11",
      "title": "Comments in C++",
      "level": "Beginner",
      "summary": "The art of documenting your algorithmic code without affecting compilation.",
      "content": "\n        <h2>Code Documentation</h2>\n        <p>Code is read by humans much more often than it is written. <strong>Comments</strong> are explanatory notes added to your source code. When you hit \"Run\", the Preprocessor instantly strips all comments out of the file, meaning they have <strong>zero impact</strong> on execution speed or file size.</p>\n\n        <h3>1. Single-Line Comments <code>//</code></h3>\n        <p>Everything following the double slashes on that specific line is ignored. Ideal for quick, inline explanations.</p>\n        <pre class=\"bg-darkbase p-3 rounded-lg text-sm text-cream/80 my-2\"><code class=\"language-cpp\">int x = 5; // Initialize x with starting health</code></pre>\n\n        <h3>2. Multi-Line Comments <code>/* ... */</code></h3>\n        <p>Everything enclosed between the block syntax is ignored. Useful for writing large algorithmic explanations at the top of a file (like LeetCode intuition logic) or temporarily disabling large blocks of code during debugging.</p>\n        <pre class=\"bg-darkbase p-3 rounded-lg text-sm text-cream/80 my-2\"><code class=\"language-cpp\">/* \n  Algorithm Strategy:\n  1. Sort array using quicksort O(N log N)\n  2. Apply two-pointer technique to find target\n*/\nsort(arr.begin(), arr.end());</code></pre>\n\n        <div class=\"highlight-box\">\n            <i class=\"fa-solid fa-code-merge\"></i> <strong>Best Practices for LeetCode</strong><br/>\n            During interviews, you should always add comments to explain the <strong>Time Complexity (O(N))</strong> and <strong>Space Complexity (O(1))</strong> of your function before writing the logic. It proves to the interviewer that you plan before you type.\n        </div>\n      ",
      "diagram": {
        "viewBox": "0 0 500 200",
        "controls": [
          {
            "id": "all",
            "label": "Compiler Flow",
            "highlightNodes": [
              "code",
              "comp",
              "ignore",
              "exec"
            ],
            "highlightEdges": [
              "e1",
              "e2",
              "e3"
            ]
          }
        ],
        "nodes": [
          {
            "id": "code",
            "label": "Source Code + //",
            "x": 100,
            "y": 100
          },
          {
            "id": "comp",
            "label": "Preprocessor",
            "x": 260,
            "y": 100
          },
          {
            "id": "ignore",
            "label": "Ignores // Text",
            "x": 260,
            "y": 30
          },
          {
            "id": "exec",
            "label": "Clean Code",
            "x": 420,
            "y": 100
          }
        ],
        "edges": [
          {
            "id": "e1",
            "from": "code",
            "to": "comp"
          },
          {
            "id": "e2",
            "from": "comp",
            "to": "ignore"
          },
          {
            "id": "e3",
            "from": "comp",
            "to": "exec"
          }
        ]
      }
    }
  ]
};