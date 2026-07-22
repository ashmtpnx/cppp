export const curriculumData = [
  {
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
  },
  {
    "id": "mod-2",
    "title": "Hands on programming with C++",
    "category": "core",
    "subtopics": [
      {
        "id": "mod-2-1",
        "title": "How to write program in C++",
        "level": "Beginner",
        "summary": "Understanding the compilation pipeline: source code (.cpp) -> preprocessor -> compiler (.obj) -> linker (.exe).",
        "content": "\n                    <h2>The C++ Compilation & Execution Pipeline</h2>\n                    <p>Unlike interpreted languages like Python or JavaScript, C++ code must be compiled down to raw machine instructions before execution.</p>\n                    \n                    <h3>4-Step Build Cycle</h3>\n                    <ol>\n                        <li><strong>Preprocessing (<code>#include</code>, <code>#define</code>):</strong> The preprocessor resolves headers and macro replacements, producing expanded source code.</li>\n                        <li><strong>Compilation (<code>.cpp -&gt; .s/.asm</code>):</strong> Converts expanded source into assembly code.</li>\n                        <li><strong>Assembly (<code>.asm -&gt; .obj/.o</code>):</strong> Converts assembly instructions into object binary files containing machine code.</li>\n                        <li><strong>Linking (<code>.obj + Libraries -&gt; .exe</code>):</strong> The linker binds object files with standard libraries (<code>msvcrt.lib</code>, <code>libstdc++.a</code>) to create the final executable.</li>\n                    </ol>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Full Build Cycle",
              "highlightNodes": [
                "src",
                "prep",
                "comp",
                "asm",
                "link",
                "exe"
              ],
              "highlightEdges": [
                "e1",
                "e2",
                "e3",
                "e4",
                "e5"
              ]
            },
            {
              "id": "p1",
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
              "id": "p2",
              "label": "2. Compiler",
              "highlightNodes": [
                "prep",
                "comp",
                "asm"
              ],
              "highlightEdges": [
                "e2",
                "e3"
              ]
            },
            {
              "id": "p3",
              "label": "3. Linker",
              "highlightNodes": [
                "asm",
                "link",
                "exe"
              ],
              "highlightEdges": [
                "e4",
                "e5"
              ]
            }
          ],
          "nodes": [
            {
              "id": "src",
              "label": "Source Code (.cpp)",
              "x": 50,
              "y": 150
            },
            {
              "id": "prep",
              "label": "Preprocessor",
              "x": 180,
              "y": 150
            },
            {
              "id": "comp",
              "label": "Compiler",
              "x": 310,
              "y": 150
            },
            {
              "id": "asm",
              "label": "Assembly (.s)",
              "x": 440,
              "y": 150
            },
            {
              "id": "link",
              "label": "Linker + Libs",
              "x": 570,
              "y": 150
            },
            {
              "id": "exe",
              "label": "Executable (.exe)",
              "x": 700,
              "y": 150
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
              "to": "asm"
            },
            {
              "id": "e4",
              "from": "asm",
              "to": "link"
            },
            {
              "id": "e5",
              "from": "link",
              "to": "exe"
            }
          ]
        }
      },
      {
        "id": "mod-2-2",
        "title": "How to install Turbo C++ on windows",
        "level": "Beginner",
        "summary": "Historical perspective on configuring DOSBox and Turbo C++ 3.2 on modern Windows 10/11 machines.",
        "content": "\n                    <h2>Running Legacy Turbo C++ on Modern Windows</h2>\n                    <p>While Turbo C++ (1990) is obsolete for production software, many university syllabi still reference it. Because 64-bit Windows cannot natively run 16-bit DOS applications, DOSBox virtualization is required.</p>\n                    \n                    <h3>Installation Steps</h3>\n                    <ol>\n                        <li>Download the packaged <code>Turbo C++ 3.2 with DOSBox</code> installer.</li>\n                        <li>Extract to <code>C:TC</code> directory to maintain standard include paths (<code>C:TCINCLUDE</code>).</li>\n                        <li>Launch DOSBox and mount the drive: <code>mount c c:\tc</code> then run <code>tc.exe</code>.</li>\n                    </ol>\n                    <div class=\"highlight-box warning\">\n                        <strong>Important Note:</strong> Turbo C++ uses pre-standard C++ syntax (e.g., <code>#include &lt;iostream.h&gt;</code> without <code>using namespace std;</code>). For modern software engineering, always use VS Code + GCC/MSVC.\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Virtualization",
              "highlightNodes": [
                "win",
                "dos",
                "tc"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "win",
              "label": "Windows 64-bit",
              "x": 100,
              "y": 150
            },
            {
              "id": "dos",
              "label": "DOSBox (16-bit env)",
              "x": 300,
              "y": 150
            },
            {
              "id": "tc",
              "label": "Turbo C++ 3.2",
              "x": 500,
              "y": 150
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "win",
              "to": "dos"
            },
            {
              "id": "e2",
              "from": "dos",
              "to": "tc"
            }
          ]
        }
      },
      {
        "id": "mod-2-3",
        "title": "How to install & set VS Code for C++",
        "level": "Beginner",
        "summary": "Complete step-by-step setup guide for Visual Studio Code with MinGW-w64 (GCC 13+) / MSVC and IntelliSense.",
        "content": "\n                    <h2>Setting Up Modern C++ Development in Visual Studio Code</h2>\n                    <p>VS Code is the industry-standard lightweight editor for C++ when paired with a powerful compiler chain.</p>\n                    \n                    <h3>Step-by-Step Configuration on Windows</h3>\n                    <ol>\n                        <li><strong>Install Compiler (<code>MinGW-w64 GCC</code>):</strong> Download via MSYS2 (<code>pacman -S mingw-w64-ucrt-x86_64-gcc</code>) and add <code>C:\\msys64\\ucrt64\\bin</code> to your Windows <code>PATH</code> environment variable.</li>\n                        <li><strong>Verify in PowerShell:</strong> Type <code>g++ --version</code> to ensure compiler recognition.</li>\n                        <li><strong>Install VS Code Extensions:</strong> Install official Microsoft <strong>C/C++ Extension Pack</strong> and <strong>Code Runner</strong>.</li>\n                        <li><strong>Configure <code>tasks.json</code>:</strong> Set up automated build tasks with <code>-std=c++20</code> flags for modern syntax.</li>\n                    </ol>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Modern Setup",
              "highlightNodes": [
                "vscode",
                "ext",
                "mingw"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "vscode",
              "label": "VS Code Editor",
              "x": 100,
              "y": 150
            },
            {
              "id": "ext",
              "label": "C/C++ Extension",
              "x": 300,
              "y": 150
            },
            {
              "id": "mingw",
              "label": "MinGW GCC",
              "x": 500,
              "y": 150
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "vscode",
              "to": "ext"
            },
            {
              "id": "e2",
              "from": "ext",
              "to": "mingw"
            }
          ]
        }
      },
      {
        "id": "mod-2-4",
        "title": "First program in C++",
        "level": "Beginner",
        "summary": "Anatomy of main(), #include headers, namespace std, and return codes.",
        "content": "\n                    <h2>Anatomy of Your First C++ Program</h2>\n                    <p>Let's dissect every line of the classic \"Hello, World!\" application to understand standard anatomy.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">hello_world.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt; // 1. Preprocessor directive including standard I/O library\n\nusing namespace std; // 2. Brings standard library symbols directly into scope\n\nint main() {         // 3. Entry point of every C++ program\n    cout &lt;&lt; \"Welcome to C++ & DSA MasterClass Pro!\" &lt;&lt; endl; // 4. Console print\n    return 0;        // 5. Return code 0 indicates successful execution to OS\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Program Anatomy",
              "highlightNodes": [
                "inc",
                "main",
                "cout",
                "ret"
              ],
              "highlightEdges": [
                "e1",
                "e2",
                "e3"
              ]
            },
            {
              "id": "inc",
              "label": "1. Headers",
              "highlightNodes": [
                "inc"
              ],
              "highlightEdges": []
            },
            {
              "id": "main",
              "label": "2. Entry Point",
              "highlightNodes": [
                "main",
                "cout",
                "ret"
              ],
              "highlightEdges": [
                "e2",
                "e3"
              ]
            }
          ],
          "nodes": [
            {
              "id": "inc",
              "label": "#include <iostream>",
              "x": 100,
              "y": 200
            },
            {
              "id": "main",
              "label": "int main()",
              "x": 300,
              "y": 200
            },
            {
              "id": "cout",
              "label": "cout Statement",
              "x": 500,
              "y": 200
            },
            {
              "id": "ret",
              "label": "return 0",
              "x": 700,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "inc",
              "to": "main"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "cout"
            },
            {
              "id": "e3",
              "from": "cout",
              "to": "ret"
            }
          ]
        }
      },
      {
        "id": "mod-2-5",
        "title": "Error and its types",
        "level": "Beginner",
        "summary": "Comprehensive breakdown of Compile-time (Syntax), Linker, Runtime, and Semantic/Logical errors.",
        "content": "\n                    <h2>Understanding and Debugging C++ Error Types</h2>\n                    <p>Writing robust code requires knowing how to diagnose compiler feedback and runtime failures.</p>\n                    \n                    <h3>1. Syntax Errors (Compile-Time)</h3>\n                    <p>Occur when code violates grammar rules (e.g., missing semicolon <code>;</code>, unclosed bracket <code>}</code>, or typo in <code>int x = \"hello\";</code>).</p>\n                    \n                    <h3>2. Linker Errors</h3>\n                    <p>Occur when the compiler creates <code>.obj</code> files successfully, but the linker cannot resolve a function definition (e.g., declaring <code>void foo();</code> and calling it in <code>main()</code> without writing its body -> <code>LNK2019: unresolved external symbol</code>).</p>\n                    \n                    <h3>3. Runtime Errors</h3>\n                    <p>Occur while the executable is running, causing crashes or segmentation faults (<code>SIGSEGV</code>). Common causes include dividing by zero (<code>x / 0</code>), dereferencing <code>nullptr</code>, or accessing out-of-bounds array indices <code>arr[100]</code>.</p>\n                    \n                    <h3>4. Logical Errors (Semantic)</h3>\n                    <p>The program compiles and runs cleanly without crashing, but produces incorrect calculations (e.g., writing <code>area = width + height</code> instead of multiplication).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Error Types",
              "highlightNodes": [
                "err",
                "syn",
                "link",
                "run",
                "log"
              ],
              "highlightEdges": [
                "e1",
                "e2",
                "e3",
                "e4"
              ]
            },
            {
              "id": "syn",
              "label": "Compile-Time",
              "highlightNodes": [
                "err",
                "syn"
              ],
              "highlightEdges": [
                "e1"
              ]
            },
            {
              "id": "link",
              "label": "Linker",
              "highlightNodes": [
                "err",
                "link"
              ],
              "highlightEdges": [
                "e2"
              ]
            },
            {
              "id": "run",
              "label": "Run-Time",
              "highlightNodes": [
                "err",
                "run"
              ],
              "highlightEdges": [
                "e3"
              ]
            },
            {
              "id": "log",
              "label": "Logical",
              "highlightNodes": [
                "err",
                "log"
              ],
              "highlightEdges": [
                "e4"
              ]
            }
          ],
          "nodes": [
            {
              "id": "err",
              "label": "Program Errors",
              "x": 400,
              "y": 100
            },
            {
              "id": "syn",
              "label": "Syntax (Compile)",
              "x": 100,
              "y": 300
            },
            {
              "id": "link",
              "label": "Linker",
              "x": 300,
              "y": 300
            },
            {
              "id": "run",
              "label": "Runtime (Crash)",
              "x": 500,
              "y": 300
            },
            {
              "id": "log",
              "label": "Logical (Bugs)",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "err",
              "to": "syn"
            },
            {
              "id": "e2",
              "from": "err",
              "to": "link"
            },
            {
              "id": "e3",
              "from": "err",
              "to": "run"
            },
            {
              "id": "e4",
              "from": "err",
              "to": "log"
            }
          ]
        }
      },
      {
        "id": "mod-2-6",
        "title": "How to build correct programming logic",
        "level": "Beginner",
        "summary": "Problem decomposition techniques using Flowcharts, Pseudocode, Dry-Running, and Edge Case analysis.",
        "content": "\n                    <h2>Building Strong Problem-Solving Logic</h2>\n                    <p>Before typing C++ syntax, professional engineers structure their thoughts using systemic algorithmic decomposition.</p>\n                    \n                    <h3>The 4 Golden Rules of Logic Building</h3>\n                    <ol>\n                        <li><strong>Understand Input & Output Spec:</strong> Clarify constraints (<code>N &lt;= 10^5</code>) and corner cases (negative numbers, empty inputs).</li>\n                        <li><strong>Write Pseudocode / Algorithm:</strong> Draft logical steps in plain English or structured flow diagrams before writing code.</li>\n                        <li><strong>Dry Run on Paper (Hand Tracing):</strong> Trace variables step-by-step with sample test inputs (<code>n = 5</code>) to verify loop termination and pointer states.</li>\n                        <li><strong>Modularize with Functions:</strong> Break complex tasks into small, testable utility functions (<code>isPrime()</code>, <code>swap()</code>).</li>\n                    </ol>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Logic Pipeline",
              "highlightNodes": [
                "in",
                "algo",
                "dry",
                "mod"
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
              "id": "in",
              "label": "Understand Specs",
              "x": 100,
              "y": 200
            },
            {
              "id": "algo",
              "label": "Write Pseudocode",
              "x": 250,
              "y": 200
            },
            {
              "id": "dry",
              "label": "Dry Run on Paper",
              "x": 400,
              "y": 200
            },
            {
              "id": "mod",
              "label": "Modularize Code",
              "x": 550,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "in",
              "to": "algo"
            },
            {
              "id": "e2",
              "from": "algo",
              "to": "dry"
            },
            {
              "id": "e3",
              "from": "dry",
              "to": "mod"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-3",
    "title": "Data types in C++",
    "category": "core",
    "subtopics": [
      {
        "id": "mod-3-1",
        "title": "Data types and their types",
        "level": "Beginner",
        "summary": "Classification of Primitive (char, int, float), Derived (array, pointer), and User-Defined (class, struct, enum) types.",
        "content": "\n                    <h2>Classification of C++ Data Types</h2>\n                    <p>C++ is a strongly typed language where every variable must declare its memory footprint and data category at compile time.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">Data Type Tree Hierarchy</span></div>\n                        <pre><code>C++ DATA TYPES\n ├── 1. Primitive / Built-in Types\n │    ├── Integer: int, short, long, long long\n │    ├── Character: char, wchar_t, char16_t\n │    ├── Floating Point: float, double, long double\n │    ├── Boolean: bool (true / false)\n │    └── Void: void (valueless / raw memory)\n │\n ├── 2. Derived Types\n │    ├── Array (int arr[10])\n │    ├── Pointer (int* ptr)\n │    └── Reference (int& ref = x)\n │\n └── 3. User-Defined Types\n      ├── Structure (struct)\n      ├── Class (class)\n      ├── Enumeration (enum / enum class)\n      └── Union (union)</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Data types and their",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-3-2",
        "title": "int data type",
        "level": "Beginner",
        "summary": "Memory size (4 bytes), signed vs unsigned modifiers, and integer overflow mechanics.",
        "content": "\n                    <h2>The Integer Data Type (<code>int</code>)</h2>\n                    <p>On modern 32-bit and 64-bit architectures, <code>int</code> typically occupies <strong>4 bytes (32 bits)</strong> of memory, using Two's Complement representation for signed values.</p>\n                    \n                    <h3>Range and Type Modifiers</h3>\n                    <ul>\n                        <li><strong><code>signed int</code> (Default):</strong> Range is <code>-2,147,483,648</code> to <code>+2,147,483,647</code> (<code>-2^31</code> to <code>2^31 - 1</code>).</li>\n                        <li><strong><code>unsigned int</code>:</strong> Range is <code>0</code> to <code>4,294,967,295</code> (<code>0</code> to <code>2^32 - 1</code>). Double the positive capacity!</li>\n                        <li><strong><code>long long int</code> (8 bytes):</strong> Essential for large calculations like factorial or competitive programming (<code>[-9 x 10^18, +9 x 10^18]</code>).</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1"
              ],
              "highlightEdges": [
                "e1"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "int data type",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Range and Type Modifiers",
              "x": 400,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            }
          ]
        }
      },
      {
        "id": "mod-3-3",
        "title": "Integer Representation – Decimal, Octal, Hexadecimal",
        "level": "Intermediate",
        "summary": "Number bases in C++ literals: prefix 0 for octal, 0x for hexadecimal, and 0b for binary (C++14).",
        "content": "\n                    <h2>Number Base Literals in C++</h2>\n                    <p>You can initialize integers directly in different base systems by applying prefixes in your code:</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">number_bases.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int decVal = 65;       // Decimal (Base 10)\n    int octVal = 0101;     // Octal (Base 8, begins with prefix '0') -> 65 in base 10\n    int hexVal = 0x41;     // Hexadecimal (Base 16, prefix '0x') -> 65 in base 10\n    int binVal = 0b01000001; // Binary literal (Base 2, prefix '0b' C++14) -> 65\n\n    cout &lt;&lt; \"All represent integer 65: \" &lt;&lt; decVal &lt;&lt; \" \" &lt;&lt; octVal &lt;&lt; \" \" &lt;&lt; hexVal &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Integer Representati",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-3-4",
        "title": "Character Data Type",
        "level": "Beginner",
        "summary": "ASCII character encoding, char (1 byte) memory storage, and typecasting characters to integer values.",
        "content": "\n                    <h2>The Character Data Type (<code>char</code>)</h2>\n                    <p><code>char</code> occupies exactly <strong>1 byte (8 bits)</strong> of memory and stores characters as their corresponding integer ASCII codes (e.g., <code>'A' = 65</code>, <code>'a' = 97</code>, <code>'0' = 48</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">char_ascii.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    char ch = 'A';\n    // Explicit casting to int reveals underlying ASCII value\n    cout &lt;&lt; \"Character: \" &lt;&lt; ch &lt;&lt; \" | ASCII Code: \" &lt;&lt; (int)ch &lt;&lt; endl; // Outputs 65\n    \n    char lower = ch + 32; // Adding 32 converts uppercase ASCII to lowercase\n    cout &lt;&lt; \"Converted: \" &lt;&lt; lower &lt;&lt; \" | ASCII Code: \" &lt;&lt; (int)lower &lt;&lt; endl; // Outputs 'a' (97)\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Character Data Type",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-3-5",
        "title": "Float and double data type",
        "level": "Beginner",
        "summary": "IEEE 754 floating-point precision: float (4 bytes, 7 decimal digits) vs double (8 bytes, 15 digits).",
        "content": "\n                    <h2>Floating Point Numbers: <code>float</code> vs <code>double</code></h2>\n                    <p>Real numbers with fractional parts are stored using the IEEE 754 standard floating-point representation.</p>\n                    \n                    <ul>\n                        <li><strong><code>float</code> (4 bytes / Single Precision):</strong> Provides roughly ~6-7 significant decimal digits of precision. Must use <code>f</code> suffix (<code>float pi = 3.14159f;</code>).</li>\n                        <li><strong><code>double</code> (8 bytes / Double Precision - Default):</strong> Provides ~15-17 decimal digits of precision (<code>double pi = 3.141592653589793;</code>). Recommended for scientific computation.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Float and double data typ",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "float (4 bytes / Single P..",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "double (8 bytes / Double ..",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-4",
    "title": "Operators in C++",
    "category": "core",
    "subtopics": [
      {
        "id": "mod-4-1",
        "title": "Types of operators",
        "level": "Beginner",
        "summary": "Overview of Arithmetic, Relational, Logical, Bitwise, Assignment, and Ternary operators.",
        "content": "\n                    <h2>Comprehensive C++ Operator Classification</h2>\n                    <p>Operators are symbols that command the compiler to perform specific mathematical, logical, or bit-level computations on operands.</p>\n                    \n                    <ul>\n                        <li><strong>Arithmetic (<code>+, -, *, /, %</code>):</strong> Basic mathematical computation. Note that <code>%</code> (modulo) only works on integral types.</li>\n                        <li><strong>Relational (<code>==, !=, &lt;, &gt;, &lt;=, &gt;=</code>):</strong> Compares values and returns <code>bool</code> (<code>true</code>/<code>false</code>).</li>\n                        <li><strong>Logical (<code>&&, ||, !</code>):</strong> Combines conditional expressions with short-circuit evaluation.</li>\n                        <li><strong>Bitwise (<code>&, |, ^, ~, &lt;&lt;, &gt;&gt;</code>):</strong> Manipulates individual binary bits directly inside integer memory.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3",
                "n4"
              ],
              "highlightEdges": [
                "e1",
                "e2",
                "e3",
                "e4"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Types of operators",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Arithmetic (+, -, *, /, %..",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Relational (==, !=, &lt;,..",
              "x": 300,
              "y": 300
            },
            {
              "id": "n3",
              "label": "Logical (&&, ||, !)",
              "x": 500,
              "y": 300
            },
            {
              "id": "n4",
              "label": "Bitwise (&, |, ^, ~, &lt;..",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            },
            {
              "id": "e4",
              "from": "main",
              "to": "n4"
            }
          ]
        }
      },
      {
        "id": "mod-4-2",
        "title": "Increment and decrement operator",
        "level": "Beginner",
        "summary": "Pre-increment (++x) vs Post-increment (x++) execution priority and memory side-effects.",
        "content": "\n                    <h2>Pre vs Post Increment (<code>++</code>) and Decrement (<code>--</code>)</h2>\n                    <p>Understanding when the increment happens relative to expression evaluation is a critical C++ interview topic.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">increment_demo.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a = 10;\n    // Pre-increment (++a): First increments 'a' to 11, then returns 11 to 'b'\n    int b = ++a; \n    cout &lt;&lt; \"After ++a -> a: \" &lt;&lt; a &lt;&lt; \", b: \" &lt;&lt; b &lt;&lt; endl; // a: 11, b: 11\n\n    int x = 10;\n    // Post-increment (x++): First assigns current value 10 to 'y', THEN increments 'x' to 11\n    int y = x++; \n    cout &lt;&lt; \"After x++ -> x: \" &lt;&lt; x &lt;&lt; \", y: \" &lt;&lt; y &lt;&lt; endl; // x: 11, y: 10\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Increment and decrem",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-4-3",
        "title": "Logical operator",
        "level": "Beginner",
        "summary": "Logical AND (&&), Logical OR (||), Logical NOT (!) and short-circuit evaluation optimization.",
        "content": "\n                    <h2>Logical Operators and Short-Circuit Evaluation</h2>\n                    <p>Logical operators evaluate multiple boolean conditions together. C++ employs <strong>Short-Circuit Evaluation</strong> for optimal efficiency:</p>\n                    \n                    <ul>\n                        <li><strong>In <code>(condA && condB)</code>:</strong> If <code>condA</code> evaluates to <code>false</code>, C++ immediately skips testing <code>condB</code> because the entire AND expression is guaranteed to be false.</li>\n                        <li><strong>In <code>(condA || condB)</code>:</strong> If <code>condA</code> evaluates to <code>true</code>, C++ skips <code>condB</code> because the OR expression is already satisfied.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Logical operator",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "In (condA && condB)",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "In (condA || condB)",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-4-4",
        "title": "Conditional operator",
        "level": "Beginner",
        "summary": "Ternary operator syntax (condition ? true_val : false_val) as a compact if-else alternative.",
        "content": "\n                    <h2>The Ternary Conditional Operator (<code>?:</code>)</h2>\n                    <p>The ternary operator is the only C++ operator that requires three operands. It acts as an inline single-line <code>if-else</code> statement.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">ternary.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int age = 18;\n    // Syntax: condition ? expression_if_true : expression_if_false\n    string status = (age &gt;= 18) ? \"Eligible to Vote\" : \"Minor\";\n    \n    cout &lt;&lt; \"Status: \" &lt;&lt; status &lt;&lt; endl;\n    \n    // Finding maximum of two numbers cleanly\n    int x = 45, y = 88;\n    int maxVal = (x &gt; y) ? x : y;\n    cout &lt;&lt; \"Max: \" &lt;&lt; maxVal &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Conditional operator",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-4-5",
        "title": "Bitwise operator",
        "level": "Intermediate",
        "summary": "Bit-level AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), and Right Shift (>>) operations.",
        "content": "\n                    <h2>Bitwise Manipulation Operators</h2>\n                    <p>Bitwise operations process integers bit by bit at the hardware ALU level, making them extremely fast for flags, encryption, and competitive programming hacks.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">bitwise.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a = 5;  // Binary: 0000 0101\n    int b = 3;  // Binary: 0000 0011\n\n    cout &lt;&lt; \"a & b  (AND): \" &lt;&lt; (a & b)  &lt;&lt; endl; // 0001 (1) -> Both bits 1\n    cout &lt;&lt; \"a | b   (OR): \" &lt;&lt; (a | b)  &lt;&lt; endl; // 0111 (7) -> Either bit 1\n    cout &lt;&lt; \"a ^ b  (XOR): \" &lt;&lt; (a ^ b)  &lt;&lt; endl; // 0110 (6) -> Different bits\n    cout &lt;&lt; \"a << 1 (Left Shift x2): \" &lt;&lt; (a &lt;&lt; 1) &lt;&lt; endl; // 1010 (10) -> Multiplies by 2\n    cout &lt;&lt; \"a >> 1 (Right Shift /2): \" &lt;&lt; (a &gt;&gt; 1) &lt;&lt; endl; // 0010 (2) -> Divides by 2\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Bitwise operator",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-4-6",
        "title": "How to solve circuit expression",
        "level": "Intermediate",
        "summary": "Evaluating complex operator precedence, associativity rules, and parenthesizing boolean logic circuits.",
        "content": "\n                    <h2>Solving Complex Boolean & Circuit Expressions</h2>\n                    <p>In digital electronics and C++ expressions (<code>A || B && !C</code>), resolving the output requires strict adherence to <strong>Precedence</strong> and <strong>Associativity</strong>.</p>\n                    \n                    <h3>Precedence Order (Highest to Lowest)</h3>\n                    <ol>\n                        <li>Parentheses <code>()</code></li>\n                        <li>Logical NOT <code>!</code> and Bitwise NOT <code>~</code></li>\n                        <li>Arithmetic (<code>*, /, %</code> followed by <code>+, -</code>)</li>\n                        <li>Relational (<code>&lt;, &gt;, &lt;=, &gt;=</code> followed by <code>==, !=</code>)</li>\n                        <li>Logical AND <code>&&</code> (Evaluated before <code>||</code>)</li>\n                        <li>Logical OR <code>||</code></li>\n                        <li>Assignment <code>=</code> (Right-to-Left associativity)</li>\n                    </ol>\n                    <div class=\"highlight-box success\">\n                        <strong>Example Trace:</strong> <code>true || false && !true</code><br>\n                        Step 1 (<code>!</code> highest): <code>!true</code> becomes <code>false</code> -> <code>true || false && false</code><br>\n                        Step 2 (<code>&&</code> before <code>||</code>): <code>false && false</code> becomes <code>false</code> -> <code>true || false</code><br>\n                        Step 3 (<code>||</code> final): <code>true || false</code> -> Result is <strong>true</strong>!\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "n1",
                "n2",
                "n3",
                "n4",
                "n5"
              ],
              "highlightEdges": [
                "e1",
                "e2",
                "e3",
                "e4"
              ]
            }
          ],
          "nodes": [
            {
              "id": "n1",
              "label": "Parentheses ()",
              "x": 100,
              "y": 200
            },
            {
              "id": "n2",
              "label": "Logical NOT ! and Bitwise..",
              "x": 250,
              "y": 200
            },
            {
              "id": "n3",
              "label": "Arithmetic (*, /, % follo..",
              "x": 400,
              "y": 200
            },
            {
              "id": "n4",
              "label": "Relational (&lt;, &gt;, &..",
              "x": 550,
              "y": 200
            },
            {
              "id": "n5",
              "label": "Logical AND && (Evaluated..",
              "x": 700,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "n1",
              "to": "n2"
            },
            {
              "id": "e2",
              "from": "n2",
              "to": "n3"
            },
            {
              "id": "e3",
              "from": "n3",
              "to": "n4"
            },
            {
              "id": "e4",
              "from": "n4",
              "to": "n5"
            }
          ]
        }
      },
      {
        "id": "mod-4-7",
        "title": "Assignment Operators",
        "level": "Beginner",
        "summary": "Simple (=) vs Compound arithmetic assignment operators (+=, -=, *=, /=, %=, &=, |=).",
        "content": "\n                    <h2>Compound Assignment Operators</h2>\n                    <p>Compound assignment combines arithmetic/bitwise calculation with variable assignment in a clean right-associative statement.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">compound_assign.cpp</span></div>\n                        <pre><code class=\"language-cpp\">int x = 10;\nx += 5;   // Equivalent to: x = x + 5  (x is now 15)\nx -= 3;   // Equivalent to: x = x - 3  (x is now 12)\nx *= 2;   // Equivalent to: x = x * 2  (x is now 24)\nx /= 4;   // Equivalent to: x = x / 4  (x is now 6)\nx %= 4;   // Equivalent to: x = x % 4  (x is now 2)\nx &lt;&lt;= 2;  // Bitwise left shift assign: x = x &lt;&lt; 2 (x is now 8)</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Assignment Operators",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-5",
    "title": "Statements and Loops in C++",
    "category": "core",
    "subtopics": [
      {
        "id": "mod-5-1",
        "title": "Conditional statements",
        "level": "Beginner",
        "summary": "if, if-else, and if-else-if ladder decision structures branching execution flow.",
        "content": "\n                    <h2>Decision Making: <code>if</code>, <code>if-else</code>, and <code>if-else-if</code></h2>\n                    <p>Conditional statements branch program flow based on boolean expression evaluation (<code>true</code>/<code>false</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">conditions.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    if (score &gt;= 90) {\n        cout &lt;&lt; \"Grade: A+ (Outstanding)\" &lt;&lt; endl;\n    } else if (score &gt;= 80) {\n        cout &lt;&lt; \"Grade: A (Excellent)\" &lt;&lt; endl;\n    } else if (score &gt;= 70) {\n        cout &lt;&lt; \"Grade: B (Good)\" &lt;&lt; endl;\n    } else {\n        cout &lt;&lt; \"Grade: Needs Improvement\" &lt;&lt; endl;\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Conditional statemen",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-2",
        "title": "Nested if else",
        "level": "Beginner",
        "summary": "Placing if-else decision branches inside inner scope blocks for multi-level logic validation.",
        "content": "\n                    <h2>Nested <code>if-else</code> Structures</h2>\n                    <p>When multiple hierarchical checks must pass (e.g., checking credentials first, then checking account authorization), statements can be nested inside outer blocks.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">nested_if.cpp</span></div>\n                        <pre><code class=\"language-cpp\">int age = 21;\nbool hasLicense = true;\n\nif (age &gt;= 18) {\n    if (hasLicense) {\n        cout &lt;&lt; \"Authorized to drive vehicle.\" &lt;&lt; endl;\n    } else {\n        cout &lt;&lt; \"Adult age, but valid driver license is required.\" &lt;&lt; endl;\n    }\n} else {\n    cout &lt;&lt; \"Underage for driving.\" &lt;&lt; endl;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Nested if else",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-3",
        "title": "Switch case",
        "level": "Beginner",
        "summary": "Menu-driven branching using switch(expr), case labels, break statements, and default fallbacks.",
        "content": "\n                    <h2>Multi-Way Branching: <code>switch-case</code></h2>\n                    <p>The <code>switch</code> statement compares an integral or character expression against multiple constant <code>case</code> labels using jump tables (<code>O(1)</code> lookup speed).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">switch_demo.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    char op = '*';\n    int a = 12, b = 4;\n\n    switch(op) {\n        case '+': cout &lt;&lt; \"Sum: \" &lt;&lt; (a + b) &lt;&lt; endl; break;\n        case '-': cout &lt;&lt; \"Diff: \" &lt;&lt; (a - b) &lt;&lt; endl; break;\n        case '*': cout &lt;&lt; \"Prod: \" &lt;&lt; (a * b) &lt;&lt; endl; break; // Executes here\n        case '/': cout &lt;&lt; \"Div: \" &lt;&lt; (a / b) &lt;&lt; endl; break;\n        default:  cout &lt;&lt; \"Error: Invalid operation label!\" &lt;&lt; endl; break;\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Switch case",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-4",
        "title": "Goto statements",
        "level": "Beginner",
        "summary": "Unconditional jumps using goto label; and why structured programming discourages spaghetti code.",
        "content": "\n                    <h2>Unconditional Jumps (<code>goto</code>)</h2>\n                    <p><code>goto</code> transfers execution immediately to a named label within the same function scope.</p>\n                    \n                    <div class=\"highlight-box warning\">\n                        <strong>Why <code>goto</code> is Discouraged in Industry:</strong> Overuse creates unmaintainable \"spaghetti code\" where execution jumps unpredictably across scopes, bypassing variable initialization and breaking RAII cleanup. Use loops (<code>for</code>/<code>while</code>) or <code>break</code>/<code>continue</code> instead.\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Goto statements",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-5",
        "title": "What are loops?",
        "level": "Beginner",
        "summary": "Concept of iteration: initialization, termination condition, and increment/decrement step.",
        "content": "\n                    <h2>Iteration and Loop Architecture</h2>\n                    <p>Loops allow executing a block of statements repeatedly as long as a specified boundary condition evaluates to <code>true</code>.</p>\n                    \n                    <h3>3 Components of Every Loop</h3>\n                    <ol>\n                        <li><strong>Initialization (<code>int i = 0</code>):</strong> Sets up loop control counter once before entering iteration.</li>\n                        <li><strong>Termination Condition (<code>i &lt; n</code>):</strong> Checked before or after each cycle; loop exits when false.</li>\n                        <li><strong>Step Update (<code>i++</code>):</strong> Advances counter towards the termination boundary.</li>\n                    </ol>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "n1",
                "n2",
                "n3"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "n1",
              "label": "Initialization (int i = 0..",
              "x": 100,
              "y": 200
            },
            {
              "id": "n2",
              "label": "Termination Condition (i ..",
              "x": 400,
              "y": 200
            },
            {
              "id": "n3",
              "label": "Step Update (i++)",
              "x": 700,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "n1",
              "to": "n2"
            },
            {
              "id": "e2",
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-5-6",
        "title": "While loop",
        "level": "Beginner",
        "summary": "Entry-controlled iteration checking condition before each pass.",
        "content": "\n                    <h2>Entry-Controlled Iteration: <code>while</code> Loop</h2>\n                    <p>A <code>while</code> loop evaluates its condition <strong>before</strong> entering the body. If the condition is false initially, the loop body executes zero times.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">while_countdown.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int count = 5;\n    while (count &gt; 0) {\n        cout &lt;&lt; \"Countdown: \" &lt;&lt; count &lt;&lt; endl;\n        count--; // Step decrement\n    }\n    cout &lt;&lt; \"Ignition sequence complete!\" &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "While loop",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-7",
        "title": "While vs do while",
        "level": "Beginner",
        "summary": "Compare Entry-controlled (while) vs Exit-controlled (do-while) guaranteed single execution.",
        "content": "\n                    <h2><code>while</code> (Entry-Controlled) vs <code>do-while</code> (Exit-Controlled)</h2>\n                    <p>The <code>do-while</code> loop checks its condition at the bottom of the loop block, guaranteeing that the code inside executes <strong>at least once</strong> regardless of the initial condition check.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">do_while_menu.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int choice;\n    do {\n        cout &lt;&lt; \"\\n--- Interactive Menu ---\" &lt;&lt; endl;\n        cout &lt;&lt; \"1. Start Game\\n2. Load Settings\\n0. Exit\\nEnter choice: \";\n        cin &gt;&gt; choice;\n    } while (choice != 0); // Guaranteed to show menu at least once!\n    \n    cout &lt;&lt; \"Program exited.\" &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "While vs do while",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-8",
        "title": "for loop",
        "level": "Beginner",
        "summary": "Compact iteration combining initialization, condition check, and step update on one line.",
        "content": "\n                    <h2>The Standard <code>for</code> Loop</h2>\n                    <p>The <code>for</code> loop packs all three iteration control mechanisms cleanly into a single header statement.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">for_loop.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    // Syntax: for (init; condition; update)\n    for (int i = 1; i &lt;= 10; i++) {\n        cout &lt;&lt; \"2 x \" &lt;&lt; i &lt;&lt; \" = \" &lt;&lt; (2 * i) &lt;&lt; endl;\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "for loop",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-9",
        "title": "Nested loop",
        "level": "Intermediate",
        "summary": "Loops running inside loops: 2D matrix traversal and combinatorial iterations.",
        "content": "\n                    <h2>Nested Loops (<code>O(N x M)</code> Complexity)</h2>\n                    <p>When a loop exists inside another loop, the inner loop completes all its iterations for every single step of the outer loop.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">nested_multiplication_grid.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nint main() {\n    for (int row = 1; row &lt;= 5; row++) {\n        for (int col = 1; col &lt;= 5; col++) {\n            cout &lt;&lt; setw(4) &lt;&lt; (row * col);\n        }\n        cout &lt;&lt; endl; // Newline after each row completes\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Nested loop",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-10",
        "title": "C++ program to find sum of digits",
        "level": "Beginner",
        "summary": "Extracting digits using modulo (% 10) and division (/ 10) inside a while loop.",
        "content": "\n                    <h2>Algorithm: Sum of Digits of a Number</h2>\n                    <p>To extract digits from right to left from any integer <code>N</code>, we repeatedly use <code>digit = N % 10</code> to get the last digit and <code>N /= 10</code> to drop the last digit.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">sum_of_digits.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n = 4852;\n    int sum = 0;\n    \n    while (n &gt; 0) {\n        int lastDigit = n % 10; // Extract rightmost digit\n        sum += lastDigit;       // Add to running accumulator\n        n /= 10;                // Remove rightmost digit\n    }\n    \n    cout &lt;&lt; \"Sum of digits of 4852 is: \" &lt;&lt; sum &lt;&lt; endl; // 4+8+5+2 = 19\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program to find ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-11",
        "title": "C++ program to reverse number",
        "level": "Beginner",
        "summary": "Constructing reversed integer using formula: rev = (rev * 10) + digit.",
        "content": "\n                    <h2>Algorithm: Reversing an Integer</h2>\n                    <p>We build the reversed number by multiplying our accumulator <code>rev</code> by 10 and adding the extracted last digit.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">reverse_number.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n = 12345;\n    int rev = 0;\n    \n    while (n != 0) {\n        int digit = n % 10;\n        rev = (rev * 10) + digit; // Shift existing digits left and append new digit\n        n /= 10;\n    }\n    \n    cout &lt;&lt; \"Reversed Number: \" &lt;&lt; rev &lt;&lt; endl; // Outputs 54321\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program to rever",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-12",
        "title": "C++ program for palindrome number",
        "level": "Beginner",
        "summary": "Checking symmetry by comparing original number copy against its mathematical reverse.",
        "content": "\n                    <h2>Algorithm: Palindrome Number Verification</h2>\n                    <p>A number is a palindrome if it reads the exact same forward and backward (<code>121</code>, <code>4554</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">palindrome.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nbool isPalindrome(int n) {\n    if (n &lt; 0) return false; // Negative numbers are not palindromes (-121 != 121-)\n    int original = n;\n    int rev = 0;\n    \n    while (n &gt; 0) {\n        rev = (rev * 10) + (n % 10);\n        n /= 10;\n    }\n    return (original == rev);\n}\n\nint main() {\n    int testNum = 12321;\n    cout &lt;&lt; testNum &lt;&lt; (isPalindrome(testNum) ? \" IS a Palindrome\" : \" is NOT a Palindrome\") &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program for pali",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-13",
        "title": "Armstrong number",
        "level": "Intermediate",
        "summary": "Number equal to sum of its own digits each raised to the power of number of digits (e.g. 153 = 1^3 + 5^3 + 3^3).",
        "content": "\n                    <h2>Algorithm: Armstrong (Narcissistic) Number Check</h2>\n                    <p>An $N$-digit number is an Armstrong number if the sum of its individual digits each raised to the power $N$ equals the number itself (e.g., $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">armstrong.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;cmath&gt;\nusing namespace std;\n\nbool isArmstrong(int n) {\n    int original = n;\n    int digitsCount = 0;\n    int temp = n;\n    while (temp &gt; 0) { digitsCount++; temp /= 10; }\n    \n    int sum = 0;\n    temp = n;\n    while (temp &gt; 0) {\n        int d = temp % 10;\n        sum += round(pow(d, digitsCount));\n        temp /= 10;\n    }\n    return (sum == original);\n}\n\nint main() {\n    cout &lt;&lt; \"153 Armstrong? \" &lt;&lt; (isArmstrong(153) ? \"YES\" : \"NO\") &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Armstrong number",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-14",
        "title": "C++ program to check prime number",
        "level": "Beginner",
        "summary": "Optimized O(sqrt(N)) trial division algorithm to verify primality.",
        "content": "\n                    <h2>Algorithm: Primality Test in <code>O(sqrt(N))</code> Complexity</h2>\n                    <p>Instead of dividing from $2$ to $N-1$ ($O(N)$ time), we only need to test divisors up to $sqrt{N}$ because if $N = a \times b$, one factor must be $le sqrt{N}$.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">prime_check.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n &lt;= 1) return false;\n    for (int i = 2; i * i &lt;= n; i++) { // Loop runs up to sqrt(n)\n        if (n % i == 0) return false;  // Found a divisor, not prime!\n    }\n    return true;\n}\n\nint main() {\n    int num = 29;\n    cout &lt;&lt; num &lt;&lt; (isPrime(num) ? \" is a PRIME number.\" : \" is COMPOSITE.\") &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program to check",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-15",
        "title": "C++ program to print series of prime number",
        "level": "Intermediate",
        "summary": "Generating prime numbers in a range [L, R] and Sieve of Eratosthenes introduction.",
        "content": "\n                    <h2>Generating All Primes in Range <code>[1, N]</code></h2>\n                    <p>We can loop through integers and apply our <code>isPrime()</code> check to print primes up to $N$. For ultra-high performance up to $10^7$, the <strong>Sieve of Eratosthenes</strong> is used.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">prime_series.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n &lt;= 1) return false;\n    for (int i = 2; i * i &lt;= n; i++)\n        if (n % i == 0) return false;\n    return true;\n}\n\nint main() {\n    int limit = 50;\n    cout &lt;&lt; \"Primes up to \" &lt;&lt; limit &lt;&lt; \": \";\n    for (int i = 2; i &lt;= limit; i++) {\n        if (isPrime(i)) cout &lt;&lt; i &lt;&lt; \" \";\n    }\n    cout &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program to print",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-16",
        "title": "Fibonacci series",
        "level": "Beginner",
        "summary": "Generating Fibonacci numbers (0, 1, 1, 2, 3, 5, 8...) iteratively in O(N) time with O(1) space.",
        "content": "\n                    <h2>Algorithm: Fibonacci Sequence Generation</h2>\n                    <p>In the Fibonacci sequence, each term is the sum of the two preceding terms ($F_n = F_{n-1} + F_{n-2}$ with $F_0=0, F_1=1$).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">fibonacci.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int terms = 10;\n    int t1 = 0, t2 = 1, nextTerm = 0;\n\n    cout &lt;&lt; \"First \" &lt;&lt; terms &lt;&lt; \" Fibonacci terms: \";\n    for (int i = 1; i &lt;= terms; ++i) {\n        if(i == 1) { cout &lt;&lt; t1 &lt;&lt; \" \"; continue; }\n        if(i == 2) { cout &lt;&lt; t2 &lt;&lt; \" \"; continue; }\n        \n        nextTerm = t1 + t2;\n        t1 = t2;\n        t2 = nextTerm;\n        cout &lt;&lt; nextTerm &lt;&lt; \" \";\n    }\n    cout &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Fibonacci series",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-17",
        "title": "C++ program to convert number into word",
        "level": "Intermediate",
        "summary": "Translating numeric digits into English vocabulary (e.g. 523 -> 'Five Two Three').",
        "content": "\n                    <h2>Algorithm: Converting Number Digits to English Words</h2>\n                    <p>To print digits in correct left-to-right reading order without storing in array, we first reverse the number and map each digit via <code>switch</code> or string lookup array.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">num_to_words.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    int n = 5208;\n    string words[] = {\"Zero\", \"One\", \"Two\", \"Three\", \"Four\", \"Five\", \"Six\", \"Seven\", \"Eight\", \"Nine\"};\n    \n    string nStr = to_string(n);\n    cout &lt;&lt; n &lt;&lt; \" in words: \";\n    for (char c : nStr) {\n        cout &lt;&lt; words[c - '0'] &lt;&lt; \" \";\n    }\n    cout &lt;&lt; endl; // Outputs: Five Two Zero Eight\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program to conve",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-5-18",
        "title": "Pyramid program",
        "level": "Beginner",
        "summary": "Mastering nested loop index math to print star (*), number, and alphabetical pyramid patterns.",
        "content": "\n                    <h2>Mastering Pattern Logic: Star and Number Pyramids</h2>\n                    <p>Pattern printing questions test your ability to coordinate row (<code>i</code>) and column (<code>j</code>) relationships with precise space padding.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">star_pyramid.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int rows = 5;\n    for (int i = 1; i &lt;= rows; i++) {\n        // Print leading spaces for centering\n        for (int s = 1; s &lt;= (rows - i); s++) {\n            cout &lt;&lt; \" \";\n        }\n        // Print stars (2*i - 1 stars per row)\n        for (int j = 1; j &lt;= (2 * i - 1); j++) {\n            cout &lt;&lt; \"*\";\n        }\n        cout &lt;&lt; endl;\n    }\n    return 0;\n}\n/* Output:\n    *\n   ***\n  *****\n *******\n*********  */</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Pyramid program",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-6",
    "title": "C++ Arrays",
    "category": "core",
    "subtopics": [
      {
        "id": "mod-6-1",
        "title": "What is Arrays?",
        "level": "Beginner",
        "summary": "Contiguous block of fixed-size homogeneous memory accessed in O(1) via base address plus index offset.",
        "content": "\n                    <h2>Understanding Fixed-Size Contiguous Arrays</h2>\n                    <p>An <strong>Array</strong> is a collection of homogeneous data elements stored at contiguous memory locations under a single variable identifier.</p>\n                    <p>Because elements are side-by-side in RAM, any element <code>arr[i]</code> can be accessed in instant <code>O(1)</code> time using the formula: <br>\n                    <code>Address(arr[i]) = BaseAddress + (i * sizeof(DataType))</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Arrays?",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-2",
        "title": "C++ program for largest & smallest element of an array",
        "level": "Beginner",
        "summary": "Single-pass O(N) linear scan using INT_MAX and INT_MIN initialization.",
        "content": "\n                    <h2>Finding Min & Max in Single <code>O(N)</code> Scan</h2>\n                    <p>We initialize <code>minVal</code> and <code>maxVal</code> to the first element (or extremes <code>INT_MAX</code>/<code>INT_MIN</code>) and iterate through the array once.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">min_max_array.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;climits&gt;\nusing namespace std;\n\nint main() {\n    int arr[] = {45, 12, 89, -3, 67, 2, 91};\n    int n = sizeof(arr) / sizeof(arr[0]);\n\n    int minVal = INT_MAX;\n    int maxVal = INT_MIN;\n\n    for (int i = 0; i &lt; n; i++) {\n        if (arr[i] &lt; minVal) minVal = arr[i];\n        if (arr[i] &gt; maxVal) maxVal = arr[i];\n    }\n\n    cout &lt;&lt; \"Smallest: \" &lt;&lt; minVal &lt;&lt; \" | Largest: \" &lt;&lt; maxVal &lt;&lt; endl; // -3 and 91\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program for larg",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-3",
        "title": "Memory Allocation of array",
        "level": "Intermediate",
        "summary": "Stack vs Heap allocation and understanding sizeof(arr) vs decay to pointers when passed to functions.",
        "content": "\n                    <h2>How C++ Allocates Arrays in Memory</h2>\n                    <p>When you declare <code>int arr[5];</code> inside a function, the compiler reserves exactly <code>5 * 4 = 20 bytes</code> of contiguous Stack memory.</p>\n                    \n                    <div class=\"highlight-box warning\">\n                        <strong>Array Decay Rule:</strong> When you pass an array to a function <code>void process(int arr[])</code>, it <em>decays</em> into a raw pointer <code>int* arr</code>. Therefore <code>sizeof(arr)</code> inside the function returns pointer size (8 bytes on 64-bit), NOT array size! Always pass <code>int n</code> length explicitly.\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Memory Allocation of",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-4",
        "title": "Advantages & disadvantages of array",
        "level": "Beginner",
        "summary": "Why arrays offer O(1) random access and cache locality, but suffer from static size and O(N) insertion/deletion cost.",
        "content": "\n                    <h2>Pros & Cons of Contiguous Arrays</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">Array Trade-Offs</span></div>\n                        <pre><code>ADVANTAGES (+):\n [✓] O(1) Instant Random Access by index (arr[i]).\n [✓] Excellent CPU Cache Locality (spatial locality) leading to fast iterations.\n [✓] Minimal memory overhead per element (no extra pointers like linked lists).\n\nDISADVANTAGES (-):\n [✗] Fixed Static Size (cannot resize automatically without re-allocating).\n [✗] Costly Insertion & Deletion (requires O(N) shifting of subsequent elements).\n [✗] Memory wastage if array is declared with 1000 size but only 10 items used.</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Advantages & disadva",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-5",
        "title": "Linear search",
        "level": "Beginner",
        "summary": "O(N) sequential search scanning from index 0 to N-1 until target is found.",
        "content": "\n                    <h2>Linear Search (<code>O(N)</code> Time Complexity)</h2>\n                    <p>Linear search checks every single element sequentially until a match is found or the end of the array is reached. Works on unsorted data.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">linear_search.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i &lt; n; i++) {\n        if (arr[i] == target) return i; // Found target, return index\n    }\n    return -1; // Not found\n}\n\nint main() {\n    int data[] = {14, 5, 88, 23, 9, 41};\n    int index = linearSearch(data, 6, 23);\n    cout &lt;&lt; \"Element 23 found at index: \" &lt;&lt; index &lt;&lt; endl; // Index 3\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Linear search",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-6",
        "title": "Binary search",
        "level": "Intermediate",
        "summary": "O(log N) divide-and-conquer search on sorted arrays by repeatedly halving search intervals.",
        "content": "\n                    <h2>Binary Search (<code>O(log N)</code> Time Complexity)</h2>\n                    <p>On a <strong>sorted array</strong>, binary search cuts the search space in half each iteration by comparing the target with the middle element <code>mid = low + (high - low)/2</code>.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">binary_search.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint binarySearch(int arr[], int n, int target) {\n    int low = 0, high = n - 1;\n    while (low &lt;= high) {\n        int mid = low + (high - low) / 2; // Avoids integer overflow\n        \n        if (arr[mid] == target) return mid;\n        else if (arr[mid] &lt; target) low = mid + 1;  // Search right half\n        else high = mid - 1;                        // Search left half\n    }\n    return -1;\n}\n\nint main() {\n    int sortedArr[] = {2, 7, 14, 23, 45, 67, 89, 102};\n    cout &lt;&lt; \"Target 67 found at index: \" &lt;&lt; binarySearch(sortedArr, 8, 67) &lt;&lt; endl; // Index 5\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Binary search",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-7",
        "title": "Convert decimal to binary",
        "level": "Beginner",
        "summary": "Repeated division by 2 and storing remainders in array or bit-shifting algorithm.",
        "content": "\n                    <h2>Algorithm: Decimal to Binary Conversion</h2>\n                    <p>We divide the number by $2$ repeatedly, store the remainders ($0$ or $1$) in an array, and print them in reverse order.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">dec_to_bin.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nvoid decToBinary(int n) {\n    if (n == 0) { cout &lt;&lt; \"0\" &lt;&lt; endl; return; }\n    int bin[32];\n    int i = 0;\n    while (n &gt; 0) {\n        bin[i++] = n % 2;\n        n /= 2;\n    }\n    cout &lt;&lt; \"Binary: \";\n    for (int j = i - 1; j &gt;= 0; j--) cout &lt;&lt; bin[j];\n    cout &lt;&lt; endl;\n}\n\nint main() {\n    decToBinary(45); // Outputs: 101101\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Convert decimal to b",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-8",
        "title": "Convert decimal to octal",
        "level": "Beginner",
        "summary": "Repeated division by 8 and storing octal digits (0-7).",
        "content": "\n                    <h2>Algorithm: Decimal to Octal (Base 8)</h2>\n                    <p>We divide by $8$ repeatedly and store the remainders ($0-7$).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">dec_to_oct.cpp</span></div>\n                        <pre><code class=\"language-cpp\">void decToOctal(int n) {\n    int oct[32], i = 0;\n    while (n &gt; 0) {\n        oct[i++] = n % 8;\n        n /= 8;\n    }\n    cout &lt;&lt; \"Octal: \";\n    for (int j = i - 1; j &gt;= 0; j--) cout &lt;&lt; oct[j];\n    cout &lt;&lt; endl;\n} // For n=65 -> outputs 101</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Convert decimal to o",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-9",
        "title": "Convert decimal to hexadecimal",
        "level": "Intermediate",
        "summary": "Repeated division by 16 mapping remainders 10-15 to hex characters A-F.",
        "content": "\n                    <h2>Algorithm: Decimal to Hexadecimal (Base 16)</h2>\n                    <p>Remainders between $10$ and $15$ must be mapped to characters <code>'A'</code> through <code>'F'</code> using ASCII character math (<code>rem - 10 + 'A'</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">dec_to_hex.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nvoid decToHex(int n) {\n    char hex[32];\n    int i = 0;\n    while (n &gt; 0) {\n        int rem = n % 16;\n        if (rem &lt; 10) hex[i++] = rem + '0';\n        else          hex[i++] = rem - 10 + 'A';\n        n /= 16;\n    }\n    cout &lt;&lt; \"Hex: 0x\";\n    for (int j = i - 1; j &gt;= 0; j--) cout &lt;&lt; hex[j];\n    cout &lt;&lt; endl;\n}\n\nint main() { decToHex(255); return 0; } // Outputs: 0xFF</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Convert decimal to h",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-10",
        "title": "Delete an element from array",
        "level": "Intermediate",
        "summary": "O(N) deletion algorithm shifting all right-side elements one step to the left to close memory gap.",
        "content": "\n                    <h2>Deleting an Element at Index <code>idx</code> (<code>O(N)</code> Time)</h2>\n                    <p>To delete an element at index $K$, every subsequent element from $K+1$ to $N-1$ must be shifted one position to the left: <code>arr[j] = arr[j+1]</code>.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">delete_array.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nvoid deleteAtIndex(int arr[], int& n, int idx) {\n    if (idx &lt; 0 || idx &gt;= n) { cout &lt;&lt; \"Invalid Index\" &lt;&lt; endl; return; }\n    \n    // Shift elements left\n    for (int i = idx; i &lt; n - 1; i++) {\n        arr[i] = arr[i + 1];\n    }\n    n--; // Decrease logical array size\n}\n\nint main() {\n    int arr[10] = {10, 20, 30, 40, 50};\n    int size = 5;\n    deleteAtIndex(arr, size, 2); // Deletes element 30 at index 2\n    \n    for(int i = 0; i &lt; size; i++) cout &lt;&lt; arr[i] &lt;&lt; \" \"; // 10 20 40 50\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete an element fr",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-11",
        "title": "Two dimensional array",
        "level": "Intermediate",
        "summary": "Row-major order memory mapping of 2D grid matrix: arr[row][col].",
        "content": "\n                    <h2>2D Matrix Arrays and Row-Major Memory Mapping</h2>\n                    <p>A 2D array <code>int mat[R][C]</code> is conceptually a grid of rows and columns, but physically stored as a flat 1D sequence in RAM using <strong>Row-Major Order</strong>.</p>\n                    <p>Formula for linear RAM address: <br><code>Address(mat[r][c]) = BaseAddress + (r * TotalColumns + c) * sizeof(int)</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Two dimensional arra",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-12",
        "title": "C++ program for matrix",
        "level": "Beginner",
        "summary": "Inputting and displaying a 3x3 2D matrix using nested for loops.",
        "content": "\n                    <h2>Input and Displaying 2D Matrix</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">matrix_io.cpp</span></div>\n                        <pre><code class=\"language-cpp\">int mat[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\nfor(int i=0; i&lt;3; i++) {\n    for(int j=0; j&lt;3; j++) {\n        cout &lt;&lt; mat[i][j] &lt;&lt; \"\\t\";\n    }\n    cout &lt;&lt; endl;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ program for matr",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-13",
        "title": "Addition, subtraction, division of matrix",
        "level": "Intermediate",
        "summary": "Element-by-element matrix addition (C[i][j] = A[i][j] + B[i][j]) and scalar division.",
        "content": "\n                    <h2>Matrix Addition and Subtraction (<code>O(R x C)</code>)</h2>\n                    <p>Two matrices can be added or subtracted if and only if they share identical dimensions ($R \times C$). Computation is performed element-wise.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">matrix_add.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int A[2][2] = {{10, 20}, {30, 40}};\n    int B[2][2] = {{5, 5}, {2, 8}};\n    int C[2][2];\n\n    for(int i=0; i&lt;2; i++) {\n        for(int j=0; j&lt;2; j++) {\n            C[i][j] = A[i][j] + B[i][j]; // Or - for subtraction\n            cout &lt;&lt; C[i][j] &lt;&lt; \" \";\n        }\n        cout &lt;&lt; endl;\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Addition, subtractio",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-6-14",
        "title": "Multiplication of matrix",
        "level": "Advanced",
        "summary": "O(N^3) triple nested loop matrix dot-product algorithm where columns of A must equal rows of B.",
        "content": "\n                    <h2>Matrix Multiplication (<code>O(N^3)</code> Dot-Product Algorithm)</h2>\n                    <p>To multiply matrix $A_{R1 \times C1}$ with $B_{R2 \times C2}$, the requirement $C1 == R2$ must hold. Each cell $C[i][j]$ is the dot-product of row $i$ of $A$ and column $j$ of $B$.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">matrix_mul.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int B[3][2] = {{7, 8}, {9, 1}, {2, 3}};\n    int C[2][2] = {0}; // Result matrix R1 x C2 (2x2)\n\n    for(int i=0; i&lt;2; i++) {\n        for(int j=0; j&lt;2; j++) {\n            for(int k=0; k&lt;3; k++) {\n                C[i][j] += A[i][k] * B[k][j];\n            }\n            cout &lt;&lt; C[i][j] &lt;&lt; \"\\t\";\n        }\n        cout &lt;&lt; endl;\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Multiplication of ma",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-7",
    "title": "Functions and Pointers in C++",
    "category": "core",
    "subtopics": [
      {
        "id": "mod-7-1",
        "title": "Types of functions",
        "level": "Beginner",
        "summary": "Built-in library functions (sqrt, pow) vs User-defined functions, and return type classifications.",
        "content": "\n                    <h2>Function Classification in C++</h2>\n                    <p>Functions divide large software projects into self-contained, modular blocks of reusable logic.</p>\n                    <ul>\n                        <li><strong>Built-in / Library Functions:</strong> Provided by standard libraries (<code>std::max()</code>, <code>sqrt()</code>, <code>sort()</code>).</li>\n                        <li><strong>User-Defined Functions:</strong> Custom functions authored by the programmer (<code>calculateTax()</code>, <code>printMenu()</code>).</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Types of functions",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Built-in / Library Functi..",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "User-Defined Functions",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-7-2",
        "title": "Function declaration, definition, calling",
        "level": "Beginner",
        "summary": "Separating function prototype (declaration in .h) from implementation block (.cpp) and invocation.",
        "content": "\n                    <h2>Prototype Declaration vs Definition Block</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">func_anatomy.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\n// 1. Function Declaration (Prototype): Tells compiler signature beforehand\nint multiply(int a, int b);\n\nint main() {\n    // 3. Function Calling: Invoking with actual arguments (5, 8)\n    int result = multiply(5, 8); \n    cout &lt;&lt; \"Product: \" &lt;&lt; result &lt;&lt; endl;\n    return 0;\n}\n\n// 2. Function Definition: Actual execution body\nint multiply(int a, int b) {\n    return a * b;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Function declaration",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-3",
        "title": "Local and global variables",
        "level": "Beginner",
        "summary": "Variable visibility scopes, stack activation record lifetime, and shadowing rules.",
        "content": "\n                    <h2>Variable Scope: Local vs Global</h2>\n                    <p><strong>Local variables</strong> are declared inside a function or <code>{}</code> block scope. They live on the Stack activation record and are destroyed when the block exits.</p>\n                    <p><strong>Global variables</strong> are declared outside all functions at the top level. They persist in the Data Segment throughout program lifetime and can be accessed anywhere.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Local and global var",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-4",
        "title": "Scope resolution operator",
        "level": "Intermediate",
        "summary": "Using :: to access shadowed global variables or class methods inside separate definitions.",
        "content": "\n                    <h2>The Scope Resolution Operator (<code>::</code>)</h2>\n                    <p>If a local variable inside <code>main()</code> has the same name as a global variable, the local variable shadows (hides) the global one. Use <code>::varName</code> to explicitly access the global scope.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">scope_resolution.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint count = 100; // Global variable\n\nint main() {\n    int count = 15; // Local variable shadows global count\n    \n    cout &lt;&lt; \"Local count: \" &lt;&lt; count &lt;&lt; endl;         // Outputs 15\n    cout &lt;&lt; \"Global count: \" &lt;&lt; ::count &lt;&lt; endl;     // Outputs 100 using ::\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Scope resolution ope",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-5",
        "title": "Call by value function",
        "level": "Beginner",
        "summary": "Passing copies of variables into functions; modifications inside do NOT alter original caller variable.",
        "content": "\n                    <h2>Call by Value (<code>void foo(int x)</code>)</h2>\n                    <p>In Call by Value, the actual arguments are copied into new local parameters on the function's stack frame. Modifying the parameter has zero impact on the original caller variable.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">call_by_value.cpp</span></div>\n                        <pre><code class=\"language-cpp\">void tryModify(int x) {\n    x = 999; // Only modifies local copy!\n}\nint main() {\n    int val = 10;\n    tryModify(val);\n    cout &lt;&lt; val; // Still outputs 10!\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Call by value functi",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-6",
        "title": "Default arguments",
        "level": "Beginner",
        "summary": "Specifying fallback parameter values from right to left in function signatures.",
        "content": "\n                    <h2>Default Function Arguments</h2>\n                    <p>You can assign default fallback values in the function declaration. If the caller omits those arguments during invocation, default values are automatically used.</p>\n                    <div class=\"highlight-box warning\">\n                        <strong>Rule:</strong> Default arguments must always be assigned from <strong>right to left</strong> (<code>void log(string msg, int level = 1, bool verbose = true)</code>).\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Default arguments",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-7",
        "title": "Return by value",
        "level": "Beginner",
        "summary": "Returning computed values back to caller vs return by reference rules and dangling pointer pitfalls.",
        "content": "\n                    <h2>Return by Value and Return by Reference</h2>\n                    <p>When a function exits via <code>return expr;</code>, the result is copied back to the caller expression.</p>\n                    <div class=\"highlight-box warning\">\n                        <strong>Critical C++ Pitfall:</strong> Never return a reference <code>int&</code> or pointer <code>int*</code> to a local stack variable (<code>int x = 5; return x;</code>)! The variable is destroyed when the stack frame pops, creating a hazardous dangling reference.\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Return by value",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-8",
        "title": "Menu driven program",
        "level": "Intermediate",
        "summary": "Designing enterprise CLI controllers combining do-while loops and switch statements.",
        "content": "\n                    <h2>Designing Clean Menu-Driven Systems</h2>\n                    <p>Menu-driven architecture forms the core of CLI applications (like our Bank and Hotel projects in Module 13). It loops infinitely until the user enters an exit code.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Menu driven program",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-9",
        "title": "Function overloading",
        "level": "Intermediate",
        "summary": "Compile-time polymorphism: functions sharing identical names but differing in parameter count or data types.",
        "content": "\n                    <h2>Compile-Time Polymorphism: Function Overloading</h2>\n                    <p>Function Overloading allows multiple functions in the same scope to share the exact same name, provided their parameter lists (<code>signature</code>) differ in count or data types.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">overloading.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\nint add(int a, int b, int c) { return a + b + c; }\n\nint main() {\n    cout &lt;&lt; add(5, 10) &lt;&lt; endl;       // Resolves to int add(int, int) -> 15\n    cout &lt;&lt; add(3.5, 2.1) &lt;&lt; endl;    // Resolves to double add(double, double) -> 5.6\n    cout &lt;&lt; add(1, 2, 3) &lt;&lt; endl;     // Resolves to int add(int, int, int) -> 6\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Function overloading",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-10",
        "title": "Storage classes",
        "level": "Intermediate",
        "summary": "auto, register, static, extern, and mutable memory storage, default initial values, and lifetime rules.",
        "content": "\n                    <h2>C++ Storage Classes (<code>static</code>, <code>extern</code>, <code>register</code>)</h2>\n                    <p>Storage classes determine variable lifetime, visibility scope, and memory location (<code>Stack vs Data vs Register</code>).</p>\n                    <ul>\n                        <li><strong><code>static</code>:</strong> Preserves variable value across multiple function calls. Stored in Data Segment, initialized to <code>0</code> by default.</li>\n                        <li><strong><code>extern</code>:</strong> Declares a global variable that is defined in another separate <code>.cpp</code> compilation unit.</li>\n                        <li><strong><code>register</code> (Deprecated C++17):</strong> Hinted compiler to store variable inside CPU registers.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3"
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
              "id": "main",
              "label": "Storage classes",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "static",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "extern",
              "x": 400,
              "y": 300
            },
            {
              "id": "n3",
              "label": "register (Deprecated C++1..",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-7-11",
        "title": "Recursion",
        "level": "Intermediate",
        "summary": "Functions calling themselves: base cases, stack overflow risks, and mathematical recurrence relations.",
        "content": "\n                    <h2>Recursion and Stack Frame Unwinding</h2>\n                    <p>A recursive function solves a problem by calling itself with smaller sub-problems until a terminating <strong>Base Case</strong> is reached.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">factorial_recursion.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint factorial(int n) {\n    if (n &lt;= 1) return 1; // Base case prevents infinite stack overflow\n    return n * factorial(n - 1); // Recursive call\n}\n\nint main() {\n    cout &lt;&lt; \"5! = \" &lt;&lt; factorial(5) &lt;&lt; endl; // 5 * 4 * 3 * 2 * 1 = 120\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Recursion",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-12",
        "title": "Passing array as an argument to function",
        "level": "Intermediate",
        "summary": "Why arrays pass by pointer reference by default and how to pass 2D arrays cleanly.",
        "content": "\n                    <h2>Passing Arrays to Functions (<code>void foo(int arr[], int n)</code>)</h2>\n                    <p>As covered earlier, arrays passed as parameters decay into <code>int*</code>. Therefore, modifying <code>arr[i]</code> inside a function directly mutates the original caller's array in RAM!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Passing array as an ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-13",
        "title": "sizeof an operator",
        "level": "Beginner",
        "summary": "Compile-time operator determining exact byte size of types and variables.",
        "content": "\n                    <h2>The <code>sizeof()</code> Compile-Time Operator</h2>\n                    <p><code>sizeof</code> is a keyword operator evaluated during compilation that returns the exact number of bytes occupied by a variable or data type.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "sizeof an operator",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-14",
        "title": "What are Pointers?",
        "level": "Intermediate",
        "summary": "Variables storing raw memory addresses using address-of (&) and dereference (*) operators.",
        "content": "\n                    <h2>Mastering Pointers (<code>*</code> and <code>&</code>)</h2>\n                    <p>A <strong>Pointer</strong> is a variable whose value is the raw hexadecimal memory address of another variable.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">pointers_basics.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int* ptr = &x; // Address-of operator (&) extracts RAM address\n    \n    cout &lt;&lt; \"Value of x: \" &lt;&lt; x &lt;&lt; endl;                 // 42\n    cout &lt;&lt; \"Address of x (&x): \" &lt;&lt; ptr &lt;&lt; endl;        // e.g., 0x7ffd1a2b\n    cout &lt;&lt; \"Dereferenced (*ptr): \" &lt;&lt; *ptr &lt;&lt; endl;     // 42 (Follows pointer to fetch data)\n    \n    *ptr = 100; // Mutates original variable x through pointer!\n    cout &lt;&lt; \"New value of x: \" &lt;&lt; x &lt;&lt; endl;             // 100\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What are Pointers?",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-15",
        "title": "Types of Pointers",
        "level": "Intermediate",
        "summary": "Null pointer, Void/Generic pointer (void*), Wild pointer, and Dangling pointer definitions.",
        "content": "\n                    <h2>Four Essential Pointer Categories</h2>\n                    <ul>\n                        <li><strong>Null Pointer (<code>nullptr</code> C++11):</strong> Pointer intentionally set to zero address <code>int* p = nullptr;</code> indicating it points nowhere safely.</li>\n                        <li><strong>Void/Generic Pointer (<code>void* p</code>):</strong> Pointer that can hold the address of any data type (<code>int</code>, <code>float</code>, <code>char</code>). Must be explicitly typecast before dereferencing!</li>\n                        <li><strong>Wild Pointer:</strong> Uninitialized pointer (<code>int* p;</code>) pointing to random garbage memory. Dangerous!</li>\n                        <li><strong>Dangling Pointer:</strong> Pointer holding the address of a memory block that has already been deallocated (<code>delete p;</code> without setting <code>p = nullptr</code>).</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3",
                "n4"
              ],
              "highlightEdges": [
                "e1",
                "e2",
                "e3",
                "e4"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Types of Pointers",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Null Pointer (nullptr C++..",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Void/Generic Pointer (voi..",
              "x": 300,
              "y": 300
            },
            {
              "id": "n3",
              "label": "Wild Pointer",
              "x": 500,
              "y": 300
            },
            {
              "id": "n4",
              "label": "Dangling Pointer",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            },
            {
              "id": "e4",
              "from": "main",
              "to": "n4"
            }
          ]
        }
      },
      {
        "id": "mod-7-16",
        "title": "Data type of a Pointer",
        "level": "Intermediate",
        "summary": "Why pointer size is uniform (8 bytes on 64-bit) while pointer arithmetic depends on target data type stride.",
        "content": "\n                    <h2>Pointer Size vs Pointer Arithmetic Stride</h2>\n                    <p>On a 64-bit operating system, <strong>all pointers (<code>int*</code>, <code>char*</code>, <code>double*</code>, <code>MyClass*</code>) occupy exactly 8 bytes</strong> of memory because they all store a 64-bit memory address.</p>\n                    <p>However, the pointer's data type dictates its <strong>Pointer Arithmetic Stride</strong>: when you write <code>ptr++</code>, an <code>int*</code> jumps forward <code>+4 bytes</code>, whereas a <code>double*</code> jumps <code>+8 bytes</code>!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Data type of a Point",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-17",
        "title": "Call by reference",
        "level": "Intermediate",
        "summary": "Zero-copy function passing using C++ references (&) and pointer addresses (*).",
        "content": "\n                    <h2>Call by Reference (<code>void swap(int& a, int& b)</code>)</h2>\n                    <p>By passing parameters using C++ references (<code>&</code>) or pointers (<code>*</code>), the function operates directly on caller memory without making copies (<code>O(1)</code> overhead).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">call_by_ref.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nvoid swapValues(int& a, int& b) { // Reference aliases\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 99;\n    swapValues(x, y);\n    cout &lt;&lt; \"x: \" &lt;&lt; x &lt;&lt; \" | y: \" &lt;&lt; y &lt;&lt; endl; // Successfully swapped: x: 99 | y: 10\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Call by reference",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-7-18",
        "title": "Array of pointers",
        "level": "Advanced",
        "summary": "Declaring arrays whose individual elements are pointer addresses (e.g. const char* names[]).",
        "content": "\n                    <h2>Array of Pointers (<code>int* arr[5]</code>)</h2>\n                    <p>An array of pointers is an array where every single slot holds a memory address pointing to another variable or string.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">array_of_pointers.cpp</span></div>\n                        <pre><code class=\"language-cpp\">const char* fruits[] = {\"Apple\", \"Banana\", \"Mango\", \"Strawberry\"};\nfor(int i = 0; i &lt; 4; i++) {\n    cout &lt;&lt; fruits[i] &lt;&lt; endl; // Prints each string pointer cleanly\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Array of pointers",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-8",
    "title": "Classes and Objects in C++",
    "category": "oop",
    "subtopics": [
      {
        "id": "mod-8-1",
        "title": "What are classes and objects?",
        "level": "Beginner",
        "summary": "Classes as user-defined blueprints containing data members and member functions; Objects as concrete memory instances.",
        "content": "\n                    <h2>Classes as Blueprints and Objects as Instances</h2>\n                    <p>A <code>class</code> is a user-defined data type that bundles attributes (<code>data members</code>) and behaviors (<code>member functions</code>) under a single roof. An <code>object</code> is a physical instance of that class allocated in memory.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">class_object.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;  // Encapsulated private data\n    int rollNo;\n\npublic:\n    // Member function to set data\n    void setDetails(string n, int r) {\n        name = n;\n        rollNo = r;\n    }\n\n    void display() {\n        cout &lt;&lt; \"Student: \" &lt;&lt; name &lt;&lt; \" (Roll: \" &lt;&lt; rollNo &lt;&lt; \")\" &lt;&lt; endl;\n    }\n};\n\nint main() {\n    Student s1; // Object instantiation\n    s1.setDetails(\"Alice Smith\", 101);\n    s1.display();\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What are classes and",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-2",
        "title": "Constructors",
        "level": "Beginner",
        "summary": "Special member functions invoked automatically upon object creation to initialize attributes.",
        "content": "\n                    <h2>The Lifecycle Initialization Constructor</h2>\n                    <p>A <strong>Constructor</strong> is a special member function having the exact same name as the class (<code>Student()</code>) and zero return type (<code>not even void</code>). It fires automatically the instant an object is created in memory.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Constructors",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-3",
        "title": "Default constructor",
        "level": "Beginner",
        "summary": "Zero-argument constructor setting initial fallback values (<code>MyClass()</code>).",
        "content": "\n                    <h2>Default Constructor (<code>MyClass()</code>)</h2>\n                    <p>A constructor taking no parameters. If you don't write any constructor, C++ synthesizes an empty implicit default constructor automatically.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Default constructor",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-4",
        "title": "Parameterized constructor",
        "level": "Beginner",
        "summary": "Constructors accepting arguments during instantiation (<code>MyClass(int x, string y)</code>).",
        "content": "\n                    <h2>Parameterized Constructor</h2>\n                    <p>Allows passing initialization data directly inside constructor brackets when creating an object: <code>Student s1(\"Alice\", 101);</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Parameterized constr",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-5",
        "title": "Constructor Overloading",
        "level": "Intermediate",
        "summary": "Multiple constructors inside a class differing in parameter list signatures.",
        "content": "\n                    <h2>Constructor Overloading</h2>\n                    <p>Like normal function overloading, a class can define multiple constructors (Default, Parameterized, Copy) tailored for different instantiation scenarios.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Constructor Overload",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-6",
        "title": "C++ Constructor with Default Arguments",
        "level": "Intermediate",
        "summary": "Combining default and parameterized constructors via default argument values.",
        "content": "\n                    <h2>Constructor with Default Arguments</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">constructor_defaults.cpp</span></div>\n                        <pre><code class=\"language-cpp\">class Box {\nprivate:\n    int length, width, height;\npublic:\n    // Single constructor acting as both default and parameterized!\n    Box(int l = 1, int w = 1, int h = 1) : length(l), width(w), height(h) {}\n};\nBox b1;       // Box(1, 1, 1)\nBox b2(10, 5);// Box(10, 5, 1)</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ Constructor with",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-7",
        "title": "Copy constructor",
        "level": "Intermediate",
        "summary": "Shallow vs Deep copying (<code>MyClass(const MyClass& obj)</code>) across object cloning.",
        "content": "\n                    <h2>Copy Constructor and Deep Copying</h2>\n                    <p>A Copy Constructor (<code>Box(const Box& other)</code>) creates a new object as an exact replica of an existing object.</p>\n                    <div class=\"highlight-box warning\">\n                        <strong>Shallow vs Deep Copy:</strong> The default compiler copy constructor performs a bitwise <em>Shallow Copy</em>. If your class contains heap-allocated pointer members (<code>int* data</code>), shallow copying makes both objects point to the same RAM block—causing double-free crashes upon destructor execution! Always implement a <em>Deep Copy Constructor</em> to allocate fresh heap memory.\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Copy constructor",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-8",
        "title": "Constructor for multiple object",
        "level": "Intermediate",
        "summary": "Initializing arrays of class objects (<code>Student batch[3];</code>).",
        "content": "\n                    <h2>Arrays of Objects and Constructor Invocation</h2>\n                    <p>When you create an array of objects <code>Student batch[10];</code>, the default constructor fires sequentially 10 times—once for every slot in the array.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Constructor for mult",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-9",
        "title": "this pointer",
        "level": "Intermediate",
        "summary": "Implicit pointer (*this) passed inside member functions pointing to the calling object instance.",
        "content": "\n                    <h2>The Implicit <code>this</code> Pointer</h2>\n                    <p><code>this</code> is a hidden const pointer available inside every non-static member function pointing directly to the memory address of the object calling the function (<code>this-&gt;member</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">this_pointer.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">class Account {\nprivate:\n    int balance;\npublic:\n    void setBalance(int balance) {\n        // Disambiguates member variable from parameter sharing exact same name!\n        this-&gt;balance = balance; \n    }\n};</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "this pointer",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-10",
        "title": "Static keyword",
        "level": "Intermediate",
        "summary": "Class-level attributes shared across all object instances in Data Segment.",
        "content": "\n                    <h2>The <code>static</code> Keyword in Class Architecture</h2>\n                    <p>When a data member is declared <code>static</code>, only **one shared copy** exists in the Data Segment for the entire class, rather than a separate copy per object instance.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Static keyword",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-11",
        "title": "Static variable",
        "level": "Intermediate",
        "summary": "Static member variable declaration inside class header and mandatory definition outside class block.",
        "content": "\n                    <h2>Static Variables and Class Counters</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">static_counter.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass User {\npublic:\n    static int totalUsers; // Declaration inside class\n    User() { totalUsers++; }\n};\n\n// Mandatory definition and initialization outside class block!\nint User::totalUsers = 0; \n\nint main() {\n    User u1, u2, u3;\n    cout &lt;&lt; \"Total active users: \" &lt;&lt; User::totalUsers &lt;&lt; endl; // Outputs 3\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Static variable",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-8-12",
        "title": "Method overloading",
        "level": "Intermediate",
        "summary": "Overloading non-static class member functions with differing argument lists.",
        "content": "\n                    <h2>Class Member Function Overloading</h2>\n                    <p>Just like global functions, class methods can be overloaded to accept different parameter combinations (<code>void render(int x)</code> vs <code>void render(string title, int x)</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Method overloading",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-9",
    "title": "Operator Overloading in C++",
    "category": "oop",
    "subtopics": [
      {
        "id": "mod-9-1",
        "title": "What is operator overloading?",
        "level": "Intermediate",
        "summary": "Giving special user-defined behavior to standard C++ operators (+, -, *, ==) when applied to class objects.",
        "content": "\n                    <h2>Extending Standard Operators for Custom Classes</h2>\n                    <p><strong>Operator Overloading</strong> is a form of compile-time polymorphism where standard C++ operators (<code>+</code>, <code>-</code>, <code>==</code>, <code>&lt;&lt;</code>) are taught how to operate on user-defined class objects (<code>Complex c3 = c1 + c2;</code>).</p>\n                    <div class=\"highlight-box warning\">\n                        <strong>Operators that CANNOT be overloaded:</strong> Scope resolution (<code>::</code>), Member selection (<code>.</code>), Member pointer (<code>.*</code>), and Ternary conditional (<code>?:</code>).\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is operator ove",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-2",
        "title": "Types of operator overloading",
        "level": "Intermediate",
        "summary": "Unary operators (single operand like ++x) vs Binary operators (two operands like a + b).",
        "content": "\n                    <h2>Unary vs Binary Operator Overloading</h2>\n                    <ul>\n                        <li><strong>Unary Operators:</strong> Operate on a single calling object (<code>++obj</code>, <code>--obj</code>, <code>-obj</code>). Take zero explicit parameters when declared as a member function.</li>\n                        <li><strong>Binary Operators:</strong> Operate on two objects (<code>objA + objB</code>). Take exactly one explicit parameter (<code>objB</code>) when declared as a member function on <code>objA</code>.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Types of operator overloa",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Unary Operators",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Binary Operators",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-9-3",
        "title": "Unary operator overloading",
        "level": "Intermediate",
        "summary": "Overloading unary negation (-) and logical not (!) operators inside class boundary.",
        "content": "\n                    <h2>Overloading Unary Negation (<code>-</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">unary_negation.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Vector2D {\npublic:\n    int x, y;\n    Vector2D(int xVal, int yVal) : x(xVal), y(yVal) {}\n\n    // Unary minus overload (-v)\n    Vector2D operator-() {\n        return Vector2D(-x, -y);\n    }\n};\n\nint main() {\n    Vector2D v1(10, -5);\n    Vector2D v2 = -v1;\n    cout &lt;&lt; \"Negated: (\" &lt;&lt; v2.x &lt;&lt; \", \" &lt;&lt; v2.y &lt;&lt; \")\" &lt;&lt; endl; // (-10, 5)\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Unary operator overl",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-4",
        "title": "Pre post increment operator overloading",
        "level": "Intermediate",
        "summary": "Distinguishing pre-increment (++obj) from post-increment (obj++) via dummy int parameter.",
        "content": "\n                    <h2>Pre vs Post Increment Overloading (<code>++obj</code> vs <code>obj++</code>)</h2>\n                    <p>To differentiate pre-increment from post-increment, C++ mandates that post-increment must accept a dummy <code>int</code> parameter in its signature!</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">increment_overload.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">class Counter {\npublic:\n    int count;\n    Counter(int c = 0) : count(c) {}\n\n    // 1. Pre-Increment (++obj): returns reference to modified self\n    Counter& operator++() {\n        ++count;\n        return *this;\n    }\n\n    // 2. Post-Increment (obj++): accepts dummy 'int', returns un-incremented copy\n    Counter operator++(int) {\n        Counter temp = *this;\n        count++;\n        return temp;\n    }\n};</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Pre post increment o",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-5",
        "title": "Pre post decrement operator overloading",
        "level": "Intermediate",
        "summary": "Overloading pre-decrement (--obj) and post-decrement (obj--) on custom numeric classes.",
        "content": "\n                    <h2>Pre vs Post Decrement Overloading</h2>\n                    <p>Follows the exact same mechanics as increment: <code>Counter& operator--()</code> vs <code>Counter operator--(int)</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Pre post decrement o",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-6",
        "title": "Pre and post increment with assignment operator overloading",
        "level": "Advanced",
        "summary": "Chaining compound operators and self-assignment checks during operator chaining.",
        "content": "\n                    <h2>Chaining Assignment and Compound Increment</h2>\n                    <p>When chaining assignments like <code>a = ++b;</code> or <code>a += b;</code>, returning <code>*this</code> by reference (<code>MyClass&</code>) ensures proper lvalue assignability without temporary object overhead.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Pre and post increme",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-7",
        "title": "Binary operator overloading",
        "level": "Intermediate",
        "summary": "Overloading two-operand arithmetic operators inside classes.",
        "content": "\n                    <h2>Binary Operator Overloading Architecture</h2>\n                    <p>When <code>objA + objB</code> executes, C++ translates it to <code>objA.operator+(objB)</code>. Thus, <code>objA</code> is the implicit <code>*this</code> caller and <code>objB</code> is the explicit parameter.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Binary operator over",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-8",
        "title": "Arithmetic operator overloading",
        "level": "Intermediate",
        "summary": "Overloading addition (+), subtraction (-), and multiplication (*) for Complex Numbers class.",
        "content": "\n                    <h2>Complex Number Arithmetic Overloading (<code>+</code>, <code>-</code>, <code>*</code>)</h2>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">complex_arithmetic.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Complex {\npublic:\n    double real, imag;\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n\n    // Overload + operator for Complex + Complex\n    Complex operator+(const Complex& other) const {\n        return Complex(real + other.real, imag + other.imag);\n    }\n};\n\nint main() {\n    Complex c1(3.5, 2.0), c2(1.5, 4.5);\n    Complex c3 = c1 + c2; // Calls c1.operator+(c2)\n    cout &lt;&lt; \"Sum: \" &lt;&lt; c3.real &lt;&lt; \" + \" &lt;&lt; c3.imag &lt;&lt; \"i\" &lt;&lt; endl; // 5 + 6.5i\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Arithmetic operator ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-9",
        "title": "Friend function",
        "level": "Intermediate",
        "summary": "Granting external non-member functions full access to private and protected class data members.",
        "content": "\n                    <h2>Breaking Encapsulation Safely: The <code>friend</code> Function</h2>\n                    <p>A <code>friend</code> function is declared inside a class but is not a member of that class. It is granted special administrative privileges to read and modify <code>private</code> and <code>protected</code> variables.</p>\n                    <p>Essential when overloading stream operators <code>std::ostream& operator&lt;&lt;(ostream& os, const MyClass& obj)</code> because the left operand (<code>cout</code>) belongs to standard library!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Friend function",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-9-10",
        "title": "Relational operator overloading",
        "level": "Intermediate",
        "summary": "Overloading ==, !=, <, and > to enable direct object comparison and sorting.",
        "content": "\n                    <h2>Overloading Relational Comparison (<code>==</code>, <code>&lt;</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">relational_overload.cpp</span></div>\n                        <pre><code class=\"language-cpp\">bool operator==(const Complex& other) const {\n    return (real == other.real && imag == other.imag);\n}\nbool operator&lt;(const Complex& other) const {\n    return (real*real + imag*imag) &lt; (other.real*other.real + other.imag*other.imag);\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Relational operator ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-10",
    "title": "Object Oriented Programming with C++",
    "category": "oop",
    "subtopics": [
      {
        "id": "mod-10-1",
        "title": "What is Inline Function?",
        "level": "Intermediate",
        "summary": "Requesting compiler macro substitution of function body to eliminate call-stack jump overhead.",
        "content": "\n                    <h2>High-Performance Optimization: <code>inline</code> Functions</h2>\n                    <p>When a small function is prefixed with <code>inline</code>, the compiler is requested to replace every function call site directly with the actual body of the function during compilation—eliminating stack pushing/popping overhead.</p>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">inline_func.cpp</span></div>\n                        <pre><code class=\"language-cpp\">inline int square(int x) { return x * x; }\n// Calling square(5) is expanded at compile time directly into (5 * 5)</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Inline Funct",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-2",
        "title": "Inheritance",
        "level": "Intermediate",
        "summary": "Creating derived classes from parent base classes to inherit attributes and methods.",
        "content": "\n                    <h2>Code Reusability via Inheritance</h2>\n                    <p>Inheritance allows a new class (<code>Derived</code>) to acquire properties of an existing class (<code>Base</code>). Syntax: <code>class Derived : public Base {}</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Inheritance",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-3",
        "title": "Role of constructor in inheritance",
        "level": "Intermediate",
        "summary": "Base class constructors fire first before Derived class constructors across hierarchy tree.",
        "content": "\n                    <h2>Constructor Execution Order in Inheritance Tree</h2>\n                    <p>When initializing a child class object <code>Derived d;</code>, the execution order is:</p>\n                    <ol>\n                        <li>Base class constructor <code>Base()</code> executes first.</li>\n                        <li>Derived class constructor <code>Derived()</code> executes second.</li>\n                    </ol>\n                    <p>Destructors execute in exact reverse order (<code>~Derived()</code> then <code>~Base()</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1"
              ]
            }
          ],
          "nodes": [
            {
              "id": "n1",
              "label": "Base class constructor Ba..",
              "x": 100,
              "y": 200
            },
            {
              "id": "n2",
              "label": "Derived class constructor..",
              "x": 700,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "n1",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-10-4",
        "title": "Multiple inheritance",
        "level": "Intermediate",
        "summary": "A single child inheriting from two or more distinct parent base classes simultaneously.",
        "content": "\n                    <h2>Multiple Inheritance (<code>class Child : public Parent1, public Parent2</code>)</h2>\n                    <p>Allows inheriting attributes from multiple independent domains simultaneously (e.g., <code>SmartPhone</code> inherits from both <code>Phone</code> and <code>Camera</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Multiple inheritance",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-5",
        "title": "Difference Between Method Overloading and Method Overriding",
        "level": "Intermediate",
        "summary": "Compile-time signature variation (Overloading) vs Runtime virtual function re-definition across inheritance tree (Overriding).",
        "content": "\n                    <h2>Overloading vs Overriding Comparison</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">Comparison Matrix</span></div>\n                        <pre><code>+----------------------+------------------------------------+-------------------------------------+\n| Criteria             | Method Overloading                 | Method Overriding (Virtual)         |\n+----------------------+------------------------------------+-------------------------------------+\n| Scope                | Same class scope                   | Across Base and Derived class scope |\n| Function Signature   | MUST differ in parameters          | MUST be exactly identical           |\n| Polymorphism Type    | Compile-Time (Early Binding)       | Runtime (Late Binding / vtable)     |\n| Virtual Keyword      | Not required                       | Base method must be marked virtual  |\n+----------------------+------------------------------------+-------------------------------------+</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Difference Between M",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-6",
        "title": "Pointers to an object",
        "level": "Intermediate",
        "summary": "Accessing class members via object pointers using the arrow (->) member access operator.",
        "content": "\n                    <h2>Object Pointers and Arrow Operator (<code>-&gt;</code>)</h2>\n                    <p>When you hold a pointer to an object (<code>Student* ptr = new Student();</code>), you access its members using the arrow operator (<code>ptr-&gt;display()</code>) instead of dot (<code>.</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Pointers to an objec",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-7",
        "title": "Virtual fucntion",
        "level": "Advanced",
        "summary": "Late binding dynamic polymorphism using vtable mechanism and virtual destructor requirement.",
        "content": "\n                    <h2>Runtime Polymorphism: Virtual Functions & <code>vtable</code></h2>\n                    <p>A <code>virtual</code> function declared in a base class informs the compiler to defer method address resolution until runtime (<code>Late Binding</code>) by querying the object's Virtual Table (<code>vtable</code> pointer).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">virtual_polymorphism.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void makeSound() { cout &lt;&lt; \"Generic Animal Sound\" &lt;&lt; endl; }\n    virtual ~Animal() {} // Virtual destructor ensures proper cleanup of derived objects!\n};\n\nclass Dog : public Animal {\npublic:\n    void makeSound() override { cout &lt;&lt; \"Woof! Woof!\" &lt;&lt; endl; }\n};\n\nint main() {\n    Animal* pet = new Dog(); // Base pointer holding Derived object\n    pet-&gt;makeSound();        // Outputs \"Woof! Woof!\" dynamically via vtable lookup!\n    delete pet;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Virtual fucntion",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-8",
        "title": "Hybrid inheritance",
        "level": "Advanced",
        "summary": "Combining hierarchical, multiple, and multi-level inheritance structures.",
        "content": "\n                    <h2>Hybrid Inheritance Architecture</h2>\n                    <p>Hybrid inheritance mixes two or more inheritance patterns into a complex topology (<code>Diamond Problem</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Hybrid inheritance",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-9",
        "title": "Virtual base class",
        "level": "Advanced",
        "summary": "Solving the Diamond Problem (ambiguity from duplicate base instances) using virtual inheritance (<code>virtual public Base</code>).",
        "content": "\n                    <h2>Solving the Diamond Problem: Virtual Base Classes</h2>\n                    <p>If <code>Class B</code> and <code>Class C</code> both inherit from <code>Class A</code>, and <code>Class D</code> inherits from both <code>B</code> and <code>C</code>, <code>D</code> receives two duplicate copies of <code>A</code>'s variables! Using <code>class B : virtual public A</code> ensures only a single shared instance of <code>A</code> is instantiated.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Virtual base class",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-10",
        "title": "Aggregation in C++",
        "level": "Intermediate",
        "summary": "HAS-A structural association where child objects can exist independently of parent container lifetime.",
        "content": "\n                    <h2>Object Association: Aggregation (<code>HAS-A</code>) vs Composition</h2>\n                    <p>In <strong>Aggregation</strong> (<code>HAS-A</code>), one class contains a pointer/reference to another class (<code>Department</code> has <code>Professor*</code>), but if the container dies, the contained object lives on independently.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Aggregation in C++",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-11",
        "title": "C++ I/O Streams",
        "level": "Intermediate",
        "summary": "Deep dive into ios, istream, ostream, and iomanip formatting manipulators (setw, setprecision).",
        "content": "\n                    <h2>Formatting Streams with <code>&lt;iomanip&gt;</code></h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">iomanip_demo.cpp</span></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iomanip&gt;\ncout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; 3.14159 &lt;&lt; endl; // Outputs 3.14\ncout &lt;&lt; setw(10) &lt;&lt; \"RightAlign\" &lt;&lt; endl;</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "C++ I/O Streams",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-10-12",
        "title": "get() and getline() functions",
        "level": "Beginner",
        "summary": "Reading multi-word string input with spaces using getline(cin, str) and unformatted character reading with cin.get().",
        "content": "\n                    <h2>Reading Strings with Spaces: <code>cin.getline()</code> and <code>std::getline()</code></h2>\n                    <p>The standard <code>cin &gt;&gt; str</code> stops reading the exact moment it hits a space or newline (<code>\"Alice Smith\" -&gt; reads only \"Alice\"</code>). To capture full sentences including spaces, use <code>std::getline(cin, fullName)</code>.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">getline_demo.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string fullName;\n    cout &lt;&lt; \"Enter full name: \";\n    getline(cin, fullName); // Captures entire line with spaces!\n    cout &lt;&lt; \"Welcome, \" &lt;&lt; fullName &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "get() and getline() ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-11",
    "title": "File Handling in C++",
    "category": "oop",
    "subtopics": [
      {
        "id": "mod-11-1",
        "title": "What is File Handling?",
        "level": "Intermediate",
        "summary": "Persistent storage using <fstream> classes: ifstream (read), ofstream (write), and fstream (both).",
        "content": "\n                    <h2>Persistent Data Storage via <code>&lt;fstream&gt;</code></h2>\n                    <p>File handling allows C++ programs to save state, user databases, and system logs permanently onto hard drives.</p>\n                    <ul>\n                        <li><strong><code>std::ofstream</code>:</strong> Output file stream for creating and writing data to files.</li>\n                        <li><strong><code>std::ifstream</code>:</strong> Input file stream for reading data from existing files on disk.</li>\n                        <li><strong><code>std::fstream</code>:</strong> Combined stream supporting both read and write operations simultaneously.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3"
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
              "id": "main",
              "label": "What is File Handling?",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "std",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "std",
              "x": 400,
              "y": 300
            },
            {
              "id": "n3",
              "label": "std",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-11-2",
        "title": "How to Open a File Using Constructor?",
        "level": "Intermediate",
        "summary": "Opening files directly upon stream initialization (<code>ofstream fout(\"data.txt\");</code>).",
        "content": "\n                    <h2>Opening Files via Stream Constructor</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">open_constructor.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;fstream&gt;\nusing namespace std;\n\nint main() {\n    // Constructor automatically opens \"records.txt\" for writing\n    ofstream outFile(\"records.txt\");\n    if (outFile.is_open()) {\n        outFile &lt;&lt; \"User: Alice | Score: 980\" &lt;&lt; endl;\n        outFile.close(); // Explicitly flush and release OS handle\n    }\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "How to Open a File U",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-11-3",
        "title": "How to Open File Using Open Method?",
        "level": "Intermediate",
        "summary": "Using .open() method with explicit file modes (ios::in, ios::out, ios::app, ios::binary).",
        "content": "\n                    <h2>Opening Files with Explicit Modes (<code>.open()</code>)</h2>\n                    <p>You can open files specifying bitwise mode flags:</p>\n                    <ul>\n                        <li><strong><code>ios::app</code>:</strong> Append mode (writes new data at the end without erasing existing contents).</li>\n                        <li><strong><code>ios::binary</code>:</strong> Binary mode (stores raw byte structures instead of text translation).</li>\n                    </ul>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">open_method.cpp</span></div>\n                        <pre><code class=\"language-cpp\">fstream file;\nfile.open(\"app.log\", ios::out | ios::app); // Opens for appending logs</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "How to Open File Using Op",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "ios",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "ios",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-11-4",
        "title": "How to Read Data from File Line by Line",
        "level": "Intermediate",
        "summary": "Looping with getline(ifstream_obj, line) until EOF is reached.",
        "content": "\n                    <h2>Reading Files Line by Line (<code>getline()</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">read_lines.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;fstream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    ifstream inFile(\"records.txt\");\n    string line;\n    \n    while (getline(inFile, line)) { // Reads until End-Of-File (EOF)\n        cout &lt;&lt; \"File Line -> \" &lt;&lt; line &lt;&lt; endl;\n    }\n    inFile.close();\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "How to Read Data fro",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-11-5",
        "title": "How to read and write data",
        "level": "Intermediate",
        "summary": "Binary reading/writing of class object blocks using .write((char*)&obj, sizeof(obj)) and .read().",
        "content": "\n                    <h2>Binary File I/O for Class Objects (<code>.write()</code> / <code>.read()</code>)</h2>\n                    <p>For high-speed database projects (like our Bank Management System), storing class objects as raw binary bytes using <code>.write(reinterpret_cast&lt;char*&gt;(&obj), sizeof(obj))</code> is exponentially faster than parsing text lines.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "How to read and writ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-12",
    "title": "Deep Dive into C++",
    "category": "oop",
    "subtopics": [
      {
        "id": "mod-12-1",
        "title": "Preprocessor Directives",
        "level": "Intermediate",
        "summary": "#define macros, conditional compilation (#ifdef, #ifndef), and header guards.",
        "content": "\n                    <h2>Preprocessor Directives and Header Guards</h2>\n                    <p>The preprocessor transforms source code before the compiler starts. Essential directives include <code>#include</code>, <code>#define MAX 100</code>, and header guards (<code>#ifndef MY_HEADER_H #define MY_HEADER_H ... #endif</code>) that prevent duplicate class definitions.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Preprocessor Directi",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-12-2",
        "title": "Templates in C++",
        "level": "Advanced",
        "summary": "Generic programming using template <typename T> to write type-agnostic algorithms and classes.",
        "content": "\n                    <h2>Generic Programming: Function & Class Templates</h2>\n                    <p>Templates allow writing a single algorithmic blueprint (<code>template &lt;typename T&gt;</code>) that the C++ compiler automatically instantiates for <code>int</code>, <code>double</code>, <code>string</code>, or custom classes at compile time.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">template_function.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\ntemplate &lt;typename T&gt;\nT getMax(T a, T b) {\n    return (a &gt; b) ? a : b;\n}\n\nint main() {\n    cout &lt;&lt; getMax&lt;int&gt;(10, 45) &lt;&lt; endl;       // Instantiates with int -> 45\n    cout &lt;&lt; getMax&lt;double&gt;(3.14, 9.81) &lt;&lt; endl; // Instantiates with double -> 9.81\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Templates in C++",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-12-3",
        "title": "Types of Templates in C++",
        "level": "Advanced",
        "summary": "Function Templates, Class Templates (<code>template &lt;class T&gt; class Stack</code>), and Variable Templates (C++14).",
        "content": "\n                    <h2>Function vs Class Templates (<code>STL</code> Foundation)</h2>\n                    <p>All Standard Template Library containers (<code>std::vector&lt;T&gt;</code>, <code>std::map&lt;K, V&gt;</code>) are built entirely on Class Templates.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Types of Templates i",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-12-4",
        "title": "Template pointer in C++",
        "level": "Advanced",
        "summary": "Using template parameter types as pointers inside generic class data structures (<code>T* ptr</code>).",
        "content": "\n                    <h2>Template Pointers (<code>T* data</code>)</h2>\n                    <p>When building dynamic arrays or nodes (<code>Node&lt;T&gt;* next</code>), template pointers allow managing arbitrary data payloads dynamically across heap memory.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Template pointer in ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-12-5",
        "title": "What is Dynamic Memory Allocation?",
        "level": "Intermediate",
        "summary": "Allocating memory at runtime on the Heap segment when size is not known at compile time.",
        "content": "\n                    <h2>Stack vs Heap: Why Dynamic Memory Allocation Matters</h2>\n                    <p>When variable sizes are known at compile time, the Stack manages them automatically (<code>RAII</code>). But when data sizes depend on user input (<code>e.g., allocating 1,000,000 nodes at runtime</code>), dynamic allocation on the **Heap** is mandatory.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Dynamic Memo",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-12-6",
        "title": "new and delete Operators",
        "level": "Intermediate",
        "summary": "Allocating heap memory using new / new[] and freeing memory using delete / delete[] without memory leaks.",
        "content": "\n                    <h2>The <code>new</code> and <code>delete</code> Operators</h2>\n                    <p><code>new</code> allocates heap memory and returns a typed pointer while invoking constructor initialization. <code>delete</code> invokes the destructor and frees the heap memory block.</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">new_delete.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    // Single int allocation on Heap\n    int* ptr = new int(42);\n    cout &lt;&lt; \"Heap Value: \" &lt;&lt; *ptr &lt;&lt; endl;\n    delete ptr; // Prevent memory leak!\n    ptr = nullptr;\n\n    // Dynamic Array Allocation on Heap\n    int n = 5;\n    int* arr = new int[n];\n    for(int i=0; i&lt;n; i++) arr[i] = i * 10;\n    \n    delete[] arr; // MUST use delete[] for arrays!\n    arr = nullptr;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "new and delete Opera",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-12-7",
        "title": "Difference Between new & malloc() and delete & free()",
        "level": "Advanced",
        "summary": "Why type-safe C++ new/delete automatically invoke constructors/destructors while C malloc()/free() only allocate raw bytes.",
        "content": "\n                    <h2>C++ <code>new/delete</code> vs C <code>malloc/free</code></h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">Comparison Matrix</span></div>\n                        <pre><code>+-----------------------+----------------------------------+------------------------------------+\n| Feature               | new / delete (C++ Operators)     | malloc() / free() (C Library Func) |\n+-----------------------+----------------------------------+------------------------------------+\n| Constructor/Destructor| YES! Automatically invokes both  | NO! Only allocates/frees raw bytes |\n| Return Type           | Exact typed pointer (e.g. Box*)  | Raw void* (requires explicit cast) |\n| Size Calculation      | Automatic (compiler knows type)  | Manual (must specify sizeof(Box))  |\n| On Allocation Failure | Throws std::bad_alloc exception  | Returns NULL pointer               |\n+-----------------------+----------------------------------+------------------------------------+</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Difference Between n",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-13",
    "title": "C++ Projects",
    "category": "oop",
    "subtopics": [
      {
        "id": "mod-13-1",
        "title": "Bank Management System Project",
        "level": "Advanced",
        "summary": "Production-ready Object-Oriented Banking portal using file handling, account classes, and transaction verification.",
        "content": "\n                    <h2>Project 1: Enterprise Bank Management System</h2>\n                    <p>This project combines <code>class BankAccount</code> encapsulation, persistent <code>fstream</code> binary file storage, and secure PIN/balance validation into a complete CLI banking application.</p>\n                    <p>Check out the <strong>C++ Projects</strong> tab in the top navigation bar to view, copy, and explore the complete 250+ line production source code (<code>bank_management.cpp</code>) and architectural flow diagram!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Bank Management Syst",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-13-2",
        "title": "Hotel Management Billing System Project",
        "level": "Advanced",
        "summary": "Automated room reservation and itemized invoice system featuring room types, taxes, and receipt generation.",
        "content": "\n                    <h2>Project 2: Hotel Management & Billing Portal</h2>\n                    <p>Demonstrates polymorphism, room categorization (<code>Standard</code>, <code>Deluxe</code>, <code>Suite</code>), restaurant order tracking, tax computation, and automated customer receipt output.</p>\n                    <p>Check out the <strong>C++ Projects</strong> tab in the top navigation bar to copy the full working code (<code>hotel_billing.cpp</code>)!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Hotel Management Bil",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-14",
    "title": "DSA C++ Introduction",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-14-1",
        "title": "What is Data Structures with C++?",
        "level": "Beginner",
        "summary": "Systematic organization and storage of data in RAM to enable efficient operations (Search, Insert, Delete, Sort).",
        "content": "\n                    <h2>Entering the World of Data Structures & Algorithms (DSA)</h2>\n                    <p>A <strong>Data Structure</strong> is a specialized format for organizing, processing, retrieving, and storing data in computer memory. An <strong>Algorithm</strong> is a finite sequence of well-defined instructions for solving a specific computational problem.</p>\n                    \n                    <h3>Linear vs Non-Linear Structures</h3>\n                    <ul>\n                        <li><strong>Linear DSA:</strong> Elements arranged sequentially (<code>Array</code>, <code>Stack</code>, <code>Queue</code>, <code>Linked List</code>).</li>\n                        <li><strong>Non-Linear DSA:</strong> Elements connected hierarchically or networked (<code>Trees</code>, <code>BST</code>, <code>Graphs</code>).</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1"
              ],
              "highlightEdges": [
                "e1"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Data Structures w",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Linear vs Non-Linear Stru..",
              "x": 400,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            }
          ]
        }
      },
      {
        "id": "mod-14-2",
        "title": "Data Structure using C++ Syllabus and Prerequisite",
        "level": "Beginner",
        "summary": "Prerequisites checklist: Pointers, Structs/Classes, Dynamic Memory Allocation (new/delete), and Big-O Notation.",
        "content": "\n                    <h2>Prerequisites & Big-O Asymptotic Complexity</h2>\n                    <p>To master Modules 15 through 24, you must be comfortable with pointer dereferencing (<code>*</code> / <code>-&gt;</code>) and heap memory allocation (<code>new</code>/<code>delete</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">Big-O Time Complexity Hierarchy</span></div>\n                        <pre><code>O(1)        -> Constant Time (Instant array index access arr[i])\nO(log N)    -> Logarithmic Time (Binary Search, AVL Tree operations)\nO(N)        -> Linear Time (Linear Search, Single loop scans)\nO(N log N)  -> Linearithmic Time (Quick Sort, Merge Sort, Heap Sort)\nO(N^2)      -> Quadratic Time (Bubble Sort, Selection Sort nested loops)</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Data Structure using",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-15",
    "title": "Stack in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-15-1",
        "title": "What is Stack in DSA using C++?",
        "level": "Beginner",
        "summary": "LIFO (Last-In-First-Out) linear data structure where all insertions (push) and deletions (pop) happen at the top.",
        "content": "\n                    <h2>LIFO Architecture: Stack Data Structure</h2>\n                    <p>A <strong>Stack</strong> is a linear, Last-In-First-Out (<code>LIFO</code>) data structure where elements are added (<code>push</code>) and removed (<code>pop</code>) from only one end called the <strong>Top</strong>.</p>\n                    <p>Think of a stack of cafeteria plates: you place new plates on top, and you remove plates from the top. The first plate placed at the bottom is the last one removed (<code>FILO / LIFO</code>).</p>\n                    <div class=\"highlight-box success\">\n                        <strong>Interactive Visualizer:</strong> Click on the <em>Interactive Animations</em> tab above to dynamically push and pop numbers on a live visual stack box!\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Stack in DSA",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-15-2",
        "title": "Practical implementation of Stack",
        "level": "Intermediate",
        "summary": "C++ array-based implementation featuring push(), pop(), peek/top(), isEmpty(), and isFull() in O(1) time.",
        "content": "\n                    <h2>Array-Based Stack Implementation (<code>O(1)</code> Operations)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">stack_array.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\n#define MAX 100\n\nclass Stack {\nprivate:\n    int top;\n    int arr[MAX];\npublic:\n    Stack() { top = -1; }\n\n    bool push(int val) {\n        if (top &gt;= MAX - 1) { cout &lt;&lt; \"Stack Overflow!\\n\"; return false; }\n        arr[++top] = val;\n        return true;\n    }\n\n    int pop() {\n        if (top &lt; 0) { cout &lt;&lt; \"Stack Underflow!\\n\"; return -1; }\n        return arr[top--];\n    }\n\n    int peek() {\n        if (top &lt; 0) return -1;\n        return arr[top];\n    }\n\n    bool isEmpty() { return (top &lt; 0); }\n};</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-15-3",
        "title": "Infix, Prefix and Postfix Expressions in DSA C++",
        "level": "Intermediate",
        "summary": "Operator placement conventions: Infix (A + B), Prefix (+ A B), and Postfix (A B +).",
        "content": "\n                    <h2>Expression Notations in Computer Science</h2>\n                    <p>Computers process algebraic expressions far more efficiently in Postfix or Prefix notation because parentheses and operator precedence are completely eliminated during evaluation.</p>\n                    <ul>\n                        <li><strong>Infix Notation (<code>A + B</code>):</strong> Operator sits between operands. Requires PEMDAS precedence handling.</li>\n                        <li><strong>Prefix Notation (<code>+ A B</code> / Polish Notation):</strong> Operator sits before operands.</li>\n                        <li><strong>Postfix Notation (<code>A B +</code> / Reverse Polish Notation - RPN):</strong> Operator sits after operands. Standard for stack evaluation engines!</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3"
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
              "id": "main",
              "label": "Infix, Prefix and Postfix",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Infix Notation (A + B)",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Prefix Notation (+ A B / ..",
              "x": 400,
              "y": 300
            },
            {
              "id": "n3",
              "label": "Postfix Notation (A B + /..",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-15-4",
        "title": "Infix to Postfix using Stack",
        "level": "Intermediate",
        "summary": "Shunting-Yard algorithm using stack to manage operator precedence and associativity.",
        "content": "\n                    <h2>Algorithm: Shunting-Yard Infix to Postfix Conversion</h2>\n                    <p>We scan the infix expression from left to right while maintaining an operator stack:</p>\n                    <ol>\n                        <li>If token is an operand (<code>A-Z, 0-9</code>), append immediately to output string.</li>\n                        <li>If token is <code>'('</code>, push to stack.</li>\n                        <li>If token is <code>')'</code>, pop operators from stack to output until <code>'('</code> is popped.</li>\n                        <li>If token is operator (<code>+, -, *, /</code>), pop all stack operators with $ge$ precedence before pushing token.</li>\n                    </ol>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "n1",
                "n2",
                "n3",
                "n4"
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
              "id": "n1",
              "label": "If token is an operand (A..",
              "x": 100,
              "y": 200
            },
            {
              "id": "n2",
              "label": "If token is '(', push to ..",
              "x": 300,
              "y": 200
            },
            {
              "id": "n3",
              "label": "If token is ')', pop oper..",
              "x": 500,
              "y": 200
            },
            {
              "id": "n4",
              "label": "If token is operator (+, ..",
              "x": 700,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "n1",
              "to": "n2"
            },
            {
              "id": "e2",
              "from": "n2",
              "to": "n3"
            },
            {
              "id": "e3",
              "from": "n3",
              "to": "n4"
            }
          ]
        }
      },
      {
        "id": "mod-15-5",
        "title": "Practical implementation of Infix to Postfix using Stack",
        "level": "Advanced",
        "summary": "Full C++ implementation converting algebraic strings using std::stack.",
        "content": "\n                    <h2>Complete C++ Infix to Postfix Code</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">infix_to_postfix.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;stack&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint precedence(char op) {\n    if (op == '^') return 3;\n    if (op == '*' || op == '/') return 2;\n    if (op == '+' || op == '-') return 1;\n    return 0;\n}\n\nstring infixToPostfix(string s) {\n    stack&lt;char&gt; st;\n    string res = \"\";\n\n    for (char c : s) {\n        if (isalnum(c)) {\n            res += c;\n        } else if (c == '(') {\n            st.push('(');\n        } else if (c == ')') {\n            while (!st.empty() && st.top() != '(') {\n                res += st.top(); st.pop();\n            }\n            if(!st.empty()) st.pop(); // Pop '('\n        } else {\n            while (!st.empty() && precedence(st.top()) &gt;= precedence(c)) {\n                res += st.top(); st.pop();\n            }\n            st.push(c);\n        }\n    }\n    while (!st.empty()) { res += st.top(); st.pop(); }\n    return res;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-16",
    "title": "Queue in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-16-1",
        "title": "What is Queue in DSA C++?",
        "level": "Beginner",
        "summary": "FIFO (First-In-First-Out) structure where insertions occur at rear and deletions occur at front.",
        "content": "\n                    <h2>FIFO Architecture: Queue Data Structure</h2>\n                    <p>A <strong>Queue</strong> is a linear First-In-First-Out (<code>FIFO</code>) data structure where elements are inserted (<code>enqueue</code>) at the <strong>Rear</strong> and removed (<code>dequeue</code>) from the <strong>Front</strong> (like a ticket counter line).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Queue in DSA",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-2",
        "title": "Linear Queue in DSA C++",
        "level": "Beginner",
        "summary": "Standard array-based linear queue maintaining front and rear indices.",
        "content": "\n                    <h2>Array-Based Linear Queue (<code>front</code> and <code>rear</code> pointers)</h2>\n                    <p>We initialize both <code>front</code> and <code>rear</code> to <code>-1</code>. When <code>enqueue(x)</code> occurs, <code>rear++</code>. When <code>dequeue()</code> occurs, <code>front++</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Linear Queue in DSA ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-3",
        "title": "Limitation of Linear Queue in DSA C++",
        "level": "Intermediate",
        "summary": "False Overflow problem where rear == MAX-1 even though front indices have been vacated.",
        "content": "\n                    <h2>The \"False Overflow\" Bottleneck</h2>\n                    <p>In a simple array queue, as elements are dequeued, <code>front</code> advances forward, leaving empty wasted slots (<code>arr[0], arr[1]</code>) behind. Once <code>rear</code> reaches <code>MAX-1</code>, the queue reports <code>Overflow</code> even if $90%$ of the front slots are totally empty! This is why Circular Queues were invented.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Limitation of Linear",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-4",
        "title": "Circular Queue in DSA C++",
        "level": "Intermediate",
        "summary": "Connecting rear index back to index 0 via modulo arithmetic: rear = (rear + 1) % MAX.",
        "content": "\n                    <h2>Circular Queue: Modulo Arithmetic (<code>% MAX</code>)</h2>\n                    <p>A Circular Queue connects the last array slot back to the first slot. We wrap pointers around using: <br><code>rear = (rear + 1) % MAX</code> and <code>front = (front + 1) % MAX</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Circular Queue in DS",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-5",
        "title": "Practical implementation of Circular Queue in DSA C++",
        "level": "Intermediate",
        "summary": "Full C++ implementation of Circular Queue handling wrap-around logic cleanly.",
        "content": "\n                    <h2>Circular Queue C++ Code</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">circular_queue.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">class CircularQueue {\n    int front, rear, size;\n    int* arr;\npublic:\n    CircularQueue(int s) {\n        size = s; arr = new int[size];\n        front = rear = -1;\n    }\n\n    void enqueue(int val) {\n        if ((rear + 1) % size == front) { cout &lt;&lt; \"Queue Full\\n\"; return; }\n        if (front == -1) front = 0;\n        rear = (rear + 1) % size;\n        arr[rear] = val;\n    }\n\n    int dequeue() {\n        if (front == -1) { cout &lt;&lt; \"Queue Empty\\n\"; return -1; }\n        int val = arr[front];\n        if (front == rear) front = rear = -1; // Last item removed\n        else front = (front + 1) % size;\n        return val;\n    }\n};</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-6",
        "title": "Deque in DSA C++",
        "level": "Intermediate",
        "summary": "Double-Ended Queue (Deque) permitting insertions and deletions at both Front and Rear.",
        "content": "\n                    <h2>Double-Ended Queue (<code>Deque</code>)</h2>\n                    <p>A Deque generalizes both stack and queue behavior by allowing <code>push_front</code>, <code>push_back</code>, <code>pop_front</code>, and <code>pop_back</code> simultaneously (<code>std::deque</code> in STL).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Deque in DSA C++",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-7",
        "title": "Insertion in Deque in DSA C++",
        "level": "Intermediate",
        "summary": "Algorithms for insertFront() with wrap-around decrements and insertRear().",
        "content": "\n                    <h2>Insertion Mechanics (<code>insertFront</code> vs <code>insertRear</code>)</h2>\n                    <p>For <code>insertFront(val)</code>, if <code>front == 0</code>, we wrap <code>front</code> backward to <code>MAX - 1</code>. For <code>insertRear(val)</code>, we advance <code>rear = (rear + 1) % MAX</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Insertion in Deque i",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-8",
        "title": "Delete and Display in Deque in DSA C++",
        "level": "Intermediate",
        "summary": "Algorithms for deleteFront(), deleteRear(), and looping display across circular deque bounds.",
        "content": "\n                    <h2>Deletion Mechanics (<code>deleteFront</code> vs <code>deleteRear</code>)</h2>\n                    <p>For <code>deleteRear()</code>, <code>rear</code> wraps backward via <code>(rear - 1 + MAX) % MAX</code>. Display loops from <code>i = front</code> to <code>rear</code> modulo <code>MAX</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete and Display i",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-9",
        "title": "Practical implementation of Deque in DSA C++",
        "level": "Advanced",
        "summary": "Complete C++ class managing double-ended circular operations.",
        "content": "\n                    <h2>Full C++ Deque Implementation</h2>\n                    <p>Using STL <code>#include &lt;deque&gt;</code> gives professional performance, but array-based implementation is essential for understanding circular bounds.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-10",
        "title": "Priority Queue in DSA C++",
        "level": "Advanced",
        "summary": "Queue where elements are dequeued based on priority value rather than arrival order (implemented via Max/Min Binary Heap).",
        "content": "\n                    <h2>Priority Queue (<code>O(log N)</code> Heap Operations)</h2>\n                    <p>In a Priority Queue (<code>std::priority_queue&lt;int&gt;</code>), elements with higher priority values always dequeue before lower-priority elements. Backed internally by Binary Max/Min Heaps.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Priority Queue in DS",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-11",
        "title": "Create and Display Method in Priority Queue in DSA C++",
        "level": "Advanced",
        "summary": "Inserting elements into array/heap and maintaining priority ordering during display.",
        "content": "\n                    <h2>Heap Insertion and Ordered Display</h2>\n                    <p>Displaying a priority queue in sorted order requires repeatedly calling <code>.top()</code> and <code>.pop()</code> (<code>O(N log N)</code> total time).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Create and Display M",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-16-12",
        "title": "Practical implementation of Priority Queue in DSA C++",
        "level": "Advanced",
        "summary": "Using C++ STL priority_queue with custom comparator structs (<code>greater&lt;int&gt;</code> for Min Heap).",
        "content": "\n                    <h2>STL Priority Queue (<code>Max Heap vs Min Heap</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">priority_queue.cpp</span></div>\n                        <pre><code class=\"language-cpp\">#include &lt;queue&gt;\n// Max Heap (Default): 99 pops first\npriority_queue&lt;int&gt; maxpq; \n\n// Min Heap: 2 pops first\npriority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minpq;</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-17",
    "title": "Linked List in DSA C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-17-1",
        "title": "What is Linked List in DSA C++?",
        "level": "Beginner",
        "summary": "Dynamic chain of nodes scattered in Heap memory connected by Node* next pointers.",
        "content": "\n                    <h2>Dynamic Node Architecture: Singly Linked List</h2>\n                    <p>A <strong>Linked List</strong> is a linear data structure where elements (<code>Nodes</code>) are dynamically allocated in arbitrary Heap addresses and linked together via pointer references (<code>Node* next</code>).</p>\n                    <div class=\"highlight-box success\">\n                        Unlike fixed arrays, linked lists can grow or shrink infinitely at runtime with <strong><code>O(1)</code> insertion/deletion</strong> when a node pointer is known!\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Linked List ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-2",
        "title": "Create and Display Elements of Linked List in DSA C++",
        "level": "Beginner",
        "summary": "Defining Node struct and traversing from head to nullptr using a while loop.",
        "content": "\n                    <h2>Node Struct definition & Display Traversal (<code>O(N)</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">ll_display.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\nvoid displayList(Node* head) {\n    Node* curr = head;\n    while (curr != nullptr) {\n        cout &lt;&lt; curr-&gt;data &lt;&lt; \" -&gt; \";\n        curr = curr-&gt;next;\n    }\n    cout &lt;&lt; \"NULL\" &lt;&lt; endl;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Create and Display E",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-3",
        "title": "Insert element in Linked List",
        "level": "Intermediate",
        "summary": "Inserting at Head O(1), at Tail O(N), or at specific index position O(K).",
        "content": "\n                    <h2>Insertion at Head (<code>O(1)</code>) and Tail (<code>O(N)</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">ll_insert.cpp</span></div>\n                        <pre><code class=\"language-cpp\">void insertHead(Node*& head, int val) {\n    Node* newNode = new Node(val);\n    newNode-&gt;next = head;\n    head = newNode;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Insert element in Li",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-4",
        "title": "Delete an element from Linked List",
        "level": "Intermediate",
        "summary": "Unlinking node pointers safely and calling delete on heap node to prevent memory leaks.",
        "content": "\n                    <h2>Deleting Node by Value (<code>O(N)</code>)</h2>\n                    <p>To delete a target node, we maintain a <code>prev</code> pointer, unlink <code>prev-&gt;next = curr-&gt;next</code>, and invoke <code>delete curr;</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete an element fr",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-5",
        "title": "Searching in Linked List",
        "level": "Beginner",
        "summary": "Iterative vs Recursive pointer traversal (<code>O(N)</code> linear time).",
        "content": "\n                    <h2>Linear Search in Linked List (<code>O(N)</code>)</h2>\n                    <p>Traverses from <code>head</code> checking <code>if (curr-&gt;data == target)</code>. Random access (<code>O(1)</code>) is impossible because nodes are not contiguous in RAM.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Searching in Linked ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-6",
        "title": "Display element of Linked List in reverse order",
        "level": "Intermediate",
        "summary": "Using recursion call stack (<code>displayRev(node-&gt;next); cout &lt;&lt; node-&gt;data;</code>) to print backward.",
        "content": "\n                    <h2>Printing Reverse via Recursion (<code>O(N)</code> Stack Space)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">ll_print_rev.cpp</span></div>\n                        <pre><code class=\"language-cpp\">void printReverse(Node* node) {\n    if (node == nullptr) return;\n    printReverse(node-&gt;next); // Go to end of list first\n    cout &lt;&lt; node-&gt;data &lt;&lt; \" \"; // Print as recursion unwinds!\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Display element of L",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-7",
        "title": "Sorting in Linked List",
        "level": "Advanced",
        "summary": "O(N log N) Merge Sort on Linked Lists using Floyd's slow & fast pointer middle-finding.",
        "content": "\n                    <h2>Merge Sort on Linked List (<code>O(N log N)</code>)</h2>\n                    <p>Because pointers can be rearranged without swapping massive data blocks, **Merge Sort** is the optimal <code>O(N log N)</code> algorithm for linked lists (<code>using slow & fast pointers to find mid</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Sorting in Linked Li",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-8",
        "title": "Stack Linked List in DSA C++",
        "level": "Intermediate",
        "summary": "Dynamic Stack implementation where push() is insertAtHead and pop() is deleteFromHead (<code>O(1)</code>).",
        "content": "\n                    <h2>Dynamic Stack using Linked List (<code>O(1)</code> Unlimited Capacity)</h2>\n                    <p>By mapping <code>push(x)</code> to <code>insertAtHead</code> and <code>pop()</code> to <code>deleteFromHead</code>, we get a stack that never overflows unless system RAM is exhausted!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Stack Linked List in",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-9",
        "title": "Queue Linked List in DSA C++",
        "level": "Intermediate",
        "summary": "Dynamic Queue maintaining both head (front) and tail (rear) pointers for O(1) enqueue and dequeue.",
        "content": "\n                    <h2>Dynamic Queue with <code>head</code> and <code>tail</code> Pointers (<code>O(1)</code>)</h2>\n                    <p>Maintaining a <code>tail</code> pointer allows <code>enqueue(x)</code> (<code>tail-&gt;next = newNode; tail = newNode</code>) and <code>dequeue()</code> (<code>delete from head</code>) inside pure <code>O(1)</code> constant time.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Queue Linked List in",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-17-10",
        "title": "Create, insert, display and delete in Queue Linked List",
        "level": "Advanced",
        "summary": "Complete C++ class for linked-list based Queue.",
        "content": "\n                    <h2>Full Linked-List Queue Implementation</h2>\n                    <p>Combines dynamic pointer allocation with clean FIFO edge-case handling (<code>when queue becomes empty after dequeue</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Create, insert, disp",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-18",
    "title": "Circular Linked List in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-18-1",
        "title": "What is a Circular Linked List in DSA C++?",
        "level": "Beginner",
        "summary": "Linked List where the last node points back to head instead of nullptr (<code>tail-&gt;next = head</code>).",
        "content": "\n                    <h2>Endless Ring: Circular Singly Linked List</h2>\n                    <p>In a Circular Linked List, the <code>next</code> pointer of the last node (<code>tail</code>) points back to the <code>head</code> node instead of <code>nullptr</code>. Any node can act as a starting point to traverse the entire list ring!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is a Circular L",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-18-2",
        "title": "Create and Display Elements of Circular Linked List in DSA C++",
        "level": "Intermediate",
        "summary": "Traversing ring using do-while loop until curr pointer returns to head.",
        "content": "\n                    <h2>Displaying Ring Traversal (<code>do-while</code> loop)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">cll_display.cpp</span></div>\n                        <pre><code class=\"language-cpp\">void displayCircular(Node* head) {\n    if (head == nullptr) return;\n    Node* curr = head;\n    do {\n        cout &lt;&lt; curr-&gt;data &lt;&lt; \" -&gt; \";\n        curr = curr-&gt;next;\n    } while (curr != head); // Exits exactly when loop completes one full cycle!\n    cout &lt;&lt; \"(HEAD)\" &lt;&lt; endl;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Create and Display E",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-18-3",
        "title": "Insert element in Circular Linked List",
        "level": "Intermediate",
        "summary": "Inserting into empty list, at head (requiring tail->next update), or at tail.",
        "content": "\n                    <h2>Insertion into Circular Ring (<code>O(1)</code> via <code>tail</code> pointer)</h2>\n                    <p>By keeping a pointer to the <code>tail</code> node, we can access <code>head</code> immediately via <code>tail-&gt;next</code>—enabling <code>O(1)</code> insertion at both front and back!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Insert element in Ci",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-18-4",
        "title": "Delete an element from Circular Linked List",
        "level": "Intermediate",
        "summary": "Handling single-node deletion (head = nullptr) vs multi-node ring unlinking.",
        "content": "\n                    <h2>Ring Deletion Mechanics</h2>\n                    <p>If the deleted node is <code>head</code>, <code>tail-&gt;next</code> must be updated to point to <code>head-&gt;next</code> before deleting the old head.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete an element fr",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-18-5",
        "title": "Practical implementation of Circular Linked List",
        "level": "Advanced",
        "summary": "Complete C++ class managing round-robin scheduling algorithms.",
        "content": "\n                    <h2>Round-Robin OS Scheduler Simulation</h2>\n                    <p>Circular linked lists form the foundation of CPU Round-Robin time-slice task scheduling.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-19",
    "title": "Doubly Linked List in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-19-1",
        "title": "What is Doubly Linked List in DSA using C++?",
        "level": "Beginner",
        "summary": "Bidirectional list where each node contains both Node* prev and Node* next pointers.",
        "content": "\n                    <h2>Bidirectional Traversal: Doubly Linked List (<code>DLL</code>)</h2>\n                    <p>Every node in a Doubly Linked List has two pointer links: <code>prev</code> (pointing to the preceding node) and <code>next</code> (pointing to the succeeding node). Enables <code>O(1)</code> deletion when given a direct node pointer!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Doubly Linke",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-19-2",
        "title": "Create and Display in Doubly Linked List in DSA C++",
        "level": "Intermediate",
        "summary": "Node definition (prev, data, next) and bidirectional traversal.",
        "content": "\n                    <h2>DLL Node Anatomy and Traversal</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">dll_node.cpp</span></div>\n                        <pre><code class=\"language-cpp\">struct DNode {\n    int data;\n    DNode* prev;\n    DNode* next;\n    DNode(int val) : data(val), prev(nullptr), next(nullptr) {}\n};</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Create and Display i",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-19-3",
        "title": "Insert element in Doubly Linked List",
        "level": "Intermediate",
        "summary": "Updating 4 pointer links when inserting between two existing DLL nodes.",
        "content": "\n                    <h2>The 4-Pointer Insertion Dance (<code>O(1)</code>)</h2>\n                    <p>To insert <code>newNode</code> after <code>curr</code>: <br>\n                    1. <code>newNode-&gt;next = curr-&gt;next;</code><br>\n                    2. <code>newNode-&gt;prev = curr;</code><br>\n                    3. <code>if(curr-&gt;next) curr-&gt;next-&gt;prev = newNode;</code><br>\n                    4. <code>curr-&gt;next = newNode;</code></p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Insert element in Do",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-19-4",
        "title": "Delete element from Doubly Linked List",
        "level": "Intermediate",
        "summary": "Unlinking node->prev->next and node->next->prev cleanly.",
        "content": "\n                    <h2><code>O(1)</code> Deletion with Direct Pointer</h2>\n                    <p>If we hold <code>DNode* target</code>, we can unlink and delete it instantly without searching from head: <code>if(target-&gt;prev) target-&gt;prev-&gt;next = target-&gt;next;</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete element from ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-19-5",
        "title": "Practical implementation of Doubly Linked List",
        "level": "Advanced",
        "summary": "Complete C++ class (<code>std::list</code> internal mechanics).",
        "content": "\n                    <h2>Complete C++ Doubly Linked List Class</h2>\n                    <p>STL <code>std::list&lt;T&gt;</code> is implemented as a doubly linked list, enabling bidirectional iterator movement (<code>itr++</code> and <code>itr--</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-19-6",
        "title": "Searching and Sorting in Doubly Linked List",
        "level": "Advanced",
        "summary": "Quick Sort on Doubly Linked List by swapping node data or pointers.",
        "content": "\n                    <h2>Quick Sort and Insertion Sort on DLL</h2>\n                    <p>Because DLL supports backward traversal (<code>prev</code>), Insertion Sort and Quick Sort (partitioning from head and tail) can be executed cleanly.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Searching and Sortin",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-19-7",
        "title": "Practical implementation of Searching and Sorting in Doubly Linked List",
        "level": "Advanced",
        "summary": "Full code for partitioning a Doubly Linked List inside Quick Sort.",
        "content": "\n                    <h2>Complete DLL Sorting Code</h2>\n                    <p>Demonstrates pointer partition optimization across doubly linked node buffers.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-20",
    "title": "Circular Doubly Linked List in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-20-1",
        "title": "What is Circular Doubly Linked List in DSA using C++?",
        "level": "Intermediate",
        "summary": "Bidirectional ring where head->prev points to tail and tail->next points to head.",
        "content": "\n                    <h2>The Ultimate List Structure: Circular Doubly Linked List (<code>CDLL</code>)</h2>\n                    <p>In a Circular Doubly Linked List, <code>head-&gt;prev</code> links to <code>tail</code> and <code>tail-&gt;next</code> links to <code>head</code>. Combines infinite ring cycling with bidirectional traversal capabilities!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Circular Dou",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-20-2",
        "title": "Create and Display in Circular Doubly Linked List in DSA C++",
        "level": "Intermediate",
        "summary": "Connecting ring pointers and bidirectional do-while traversal.",
        "content": "\n                    <h2>CDLL Initialization and Bidirectional Display</h2>\n                    <p>We can loop forward (<code>curr = curr-&gt;next</code> until <code>head</code>) or backward (<code>curr = curr-&gt;prev</code> from <code>tail</code> to <code>head</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Create and Display i",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-20-3",
        "title": "Insert element in Circular Doubly Linked List",
        "level": "Advanced",
        "summary": "Updating ring boundaries during head and tail insertions.",
        "content": "\n                    <h2>CDLL Insertion Mechanics (<code>O(1)</code>)</h2>\n                    <p>Inserting at head or tail requires updating all 4 border pointers (<code>newNode-&gt;next</code>, <code>newNode-&gt;prev</code>, <code>head-&gt;prev</code>, <code>tail-&gt;next</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Insert element in Ci",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-20-4",
        "title": "Delete element from Circular Doubly Linked List",
        "level": "Advanced",
        "summary": "Unlinking target node while preserving circular bidirectional integrity.",
        "content": "\n                    <h2>CDLL Ring Deletion</h2>\n                    <p>Ensures that if the list reduces to a single node, <code>head-&gt;next = head</code> and <code>head-&gt;prev = head</code> are properly managed.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete element from ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-20-5",
        "title": "Practical implementation of Circular Doubly Linked List",
        "level": "Advanced",
        "summary": "Full C++ implementation for Fibonacci Heap base list structures.",
        "content": "\n                    <h2>Complete C++ CDLL Class (<code>Used in Fibonacci Heaps</code>)</h2>\n                    <p>Circular doubly linked lists are the exact underlying structure used in advanced graph priority queues like Fibonacci Heaps.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical implementa",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-21",
    "title": "Searching and Sorting in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-21-1",
        "title": "Linear Search in DSA C++",
        "level": "Beginner",
        "summary": "Review of O(N) sequential search across arrays and vectors.",
        "content": "\n                    <h2>Linear Search Revisited (<code>O(N)</code> Time Complexity)</h2>\n                    <p>The universal baseline search suitable for both unsorted and dynamic lists.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Linear Search in DSA",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-2",
        "title": "Practical – Linear Search with time complexity",
        "level": "Beginner",
        "summary": "Measuring Best Case O(1), Average O(N/2), and Worst Case O(N) comparisons.",
        "content": "\n                    <h2>Time Complexity Analysis (<code>Best vs Worst Case</code>)</h2>\n                    <ul>\n                        <li><strong>Best Case (<code>O(1)</code>):</strong> Target element is found right at index <code>0</code>.</li>\n                        <li><strong>Worst Case (<code>O(N)</code>):</strong> Target is at index <code>N-1</code> or completely missing from array.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical – Linear Search",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Best Case (O(1))",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Worst Case (O(N))",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-21-3",
        "title": "Binary Search in DSA C++",
        "level": "Intermediate",
        "summary": "O(log N) search on sorted arrays using mid = low + (high - low)/2.",
        "content": "\n                    <h2>Divide & Conquer: Binary Search (<code>O(log N)</code>)</h2>\n                    <p>Each comparison halves the remaining search space ($N \to N/2 \to N/4 \to dots \to 1$), taking at most $approx log_2(N)$ steps. For $1,000,000$ elements, binary search takes only ~20 checks!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Binary Search in DSA",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-4",
        "title": "Practical – Binary Search with time complexity",
        "level": "Intermediate",
        "summary": "std::binary_search, std::lower_bound, and std::upper_bound in STL.",
        "content": "\n                    <h2>STL Binary Search (<code>lower_bound</code> & <code>upper_bound</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">stl_binary_search.cpp</span></div>\n                        <pre><code class=\"language-cpp\">#include &lt;algorithm&gt;\n#include &lt;vector&gt;\nvector&lt;int&gt; v = {10, 20, 30, 40, 50};\nbool found = binary_search(v.begin(), v.end(), 30); // true in O(log N)</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Practical – Binary S",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-5",
        "title": "Recursion in DSA C++",
        "level": "Intermediate",
        "summary": "Mastering call stack depth, base cases, and recursion trees.",
        "content": "\n                    <h2>Recursion Trees and Stack Frame Memory</h2>\n                    <p>Every recursive call pushes a new activation record containing local variables and return addresses onto the system call stack.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Recursion in DSA C++",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-6",
        "title": "Implementation of Recursion in DSA C++",
        "level": "Intermediate",
        "summary": "Recursive Binary Search and Tower of Hanoi (<code>O(2^N)</code>) implementation.",
        "content": "\n                    <h2>Recursive Binary Search & Tower of Hanoi</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">recursive_binary_search.cpp</span></div>\n                        <pre><code class=\"language-cpp\">int recBinarySearch(int arr[], int low, int high, int target) {\n    if (low &gt; high) return -1;\n    int mid = low + (high - low) / 2;\n    if (arr[mid] == target) return mid;\n    if (arr[mid] &gt; target) return recBinarySearch(arr, low, mid - 1, target);\n    return recBinarySearch(arr, mid + 1, high, target);\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Implementation of Re",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-7",
        "title": "What is Sorting in DSA C++?",
        "level": "Beginner",
        "summary": "Arranging data elements in ascending or descending order. In-place vs Out-of-place and Stable vs Unstable sorts.",
        "content": "\n                    <h2>Sorting Terminology: Stability & In-Place Space</h2>\n                    <ul>\n                        <li><strong>In-Place Sort (<code>O(1)</code> Auxiliary Space):</strong> Sorts elements without requiring extra array allocations (<code>Bubble Sort</code>, <code>Heap Sort</code>).</li>\n                        <li><strong>Stable Sort:</strong> Preserves the relative order of identical elements (<code>Merge Sort</code>, <code>Insertion Sort</code>).</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Sorting in DSA C+",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "In-Place Sort (O(1) Auxil..",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Stable Sort",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            }
          ]
        }
      },
      {
        "id": "mod-21-8",
        "title": "Linear Sort",
        "level": "Beginner",
        "summary": "Counting Sort and Bucket Sort linear time sorting for restricted integer ranges (<code>O(N + K)</code>).",
        "content": "\n                    <h2>Linear Time Sorting (<code>Counting Sort</code> <code>O(N + K)</code>)</h2>\n                    <p>When element values fall within a small range <code>[0...K]</code>, Counting Sort counts frequency occurrences in an auxiliary array to sort without any <code>&lt;</code>/<code>&gt;</code> comparisons!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Linear Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-9",
        "title": "Bubble Sort",
        "level": "Beginner",
        "summary": "O(N^2) sort repeatedly swapping adjacent out-of-order elements until largest bubbles to top.",
        "content": "\n                    <h2>Bubble Sort (<code>O(N^2)</code> Time Complexity)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">bubble_sort.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">void bubbleSort(int arr[], int n) {\n    for (int i = 0; i &lt; n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j &lt; n - i - 1; j++) {\n            if (arr[j] &gt; arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n                swapped = true;\n            }\n        }\n        if (!swapped) break; // Optimized check if already sorted!\n    }\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Bubble Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-10",
        "title": "Selection Sort",
        "level": "Beginner",
        "summary": "O(N^2) sort finding the minimum element in unsorted right sub-array and swapping to left boundary.",
        "content": "\n                    <h2>Selection Sort (<code>O(N^2)</code> with minimum <code>O(N)</code> swaps)</h2>\n                    <p>Selection sort scans the unsorted portion to find the absolute minimum and places it at the front. Makes exactly $N-1$ swaps total.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Selection Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-11",
        "title": "Insertion Sort",
        "level": "Intermediate",
        "summary": "O(N^2) sort shifting elements right to insert key into sorted left sub-array (O(N) best case on nearly sorted data).",
        "content": "\n                    <h2>Insertion Sort (<code>O(N)</code> Best Case on Nearly Sorted Data)</h2>\n                    <p>Works like sorting playing cards in your hand: pick the next card (<code>key</code>) and slide larger cards right to make room.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Insertion Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-12",
        "title": "Quick Sort",
        "level": "Advanced",
        "summary": "O(N log N) divide-and-conquer algorithm partitioning around a Pivot (<code>Lomuto vs Hoare partition</code>).",
        "content": "\n                    <h2>Quick Sort (<code>O(N log N)</code> Average, <code>O(1)</code> In-Place Space)</h2>\n                    <p>Chooses a **Pivot** element and partitions the array such that all smaller elements sit left of the pivot and all larger elements sit right. Recursively sorts both halves.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Quick Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-13",
        "title": "Shell Sort",
        "level": "Advanced",
        "summary": "Generalized Insertion Sort comparing elements separated by shrinking gap intervals (<code>gap /= 2</code>).",
        "content": "\n                    <h2>Shell Sort (<code>O(N^(4/3))</code> Gap-Based Optimization)</h2>\n                    <p>Shell sort improves Insertion Sort by initially swapping elements far apart (<code>gap = N/2</code>) to quickly eliminate inversions before reducing <code>gap</code> to 1.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Shell Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-14",
        "title": "Heap Sort",
        "level": "Advanced",
        "summary": "O(N log N) in-place sort building a Max-Binary Heap and repeatedly extracting root to end of array.",
        "content": "\n                    <h2>Heap Sort (<code>O(N log N)</code> Guaranteed In-Place)</h2>\n                    <p>First transforms the array into a **Max-Heap** using <code>heapify()</code> in <code>O(N)</code> time, then repeatedly swaps root (<code>largest</code>) with the last element and heapifies down (<code>O(log N)</code> per item).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Heap Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-15",
        "title": "Two way merge Sort",
        "level": "Advanced",
        "summary": "Merging two pre-sorted lists/sub-arrays into a single sorted buffer in O(N+M) time.",
        "content": "\n                    <h2>Two-Way Merge Algorithm (<code>O(N + M)</code>)</h2>\n                    <p>Given two already sorted arrays $A$ and $B$, two pointers compare heads (<code>A[i] vs B[j]</code>) and append the smaller value into output $C$ in single linear pass.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Two way merge Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-21-16",
        "title": "Merge Sort",
        "level": "Advanced",
        "summary": "O(N log N) stable divide-and-conquer sort splitting array in halves and merging sorted results (<code>O(N)</code> space).",
        "content": "\n                    <h2>Merge Sort (<code>O(N log N)</code> Guaranteed Stable Sort)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">merge_sort_summary.cpp</span></div>\n                        <pre><code class=\"language-cpp\">void mergeSort(int arr[], int l, int r) {\n    if (l &lt; r) {\n        int m = l + (r - l) / 2;\n        mergeSort(arr, l, m);     // Sort left half\n        mergeSort(arr, m + 1, r); // Sort right half\n        merge(arr, l, m, r);      // Combine both halves\n    }\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Merge Sort",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-22",
    "title": "Tree in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-22-1",
        "title": "What is Tree in DSA C++?",
        "level": "Intermediate",
        "summary": "Non-linear hierarchical data structure composed of Root, Parent, Child, Leaf, and Edge relationships.",
        "content": "\n                    <h2>Hierarchical Data: Trees & Terminology</h2>\n                    <p>A **Tree** is a non-linear data structure representing hierarchical relationships (<code>File Systems</code>, <code>DOM Tree</code>, <code>Organization Chart</code>). Composed of nodes connected by edges without any cycles.</p>\n                    <ul>\n                        <li><strong>Root:</strong> Topmost starting node (<code>depth 0</code>).</li>\n                        <li><strong>Leaf Nodes:</strong> Terminal nodes with zero children (<code>left == right == nullptr</code>).</li>\n                        <li><strong>Height of Tree:</strong> Longest path from root down to deepest leaf.</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3"
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
              "id": "main",
              "label": "What is Tree in DSA C++?",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Root",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Leaf Nodes",
              "x": 400,
              "y": 300
            },
            {
              "id": "n3",
              "label": "Height of Tree",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-22-2",
        "title": "Binary Tree in DSA C++",
        "level": "Intermediate",
        "summary": "Tree where every node has at most two children (<code>TreeNode* left, TreeNode* right</code>).",
        "content": "\n                    <h2>Binary Tree Node Architecture (<code>left</code> and <code>right</code> pointers)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">binary_tree_node.cpp</span></div>\n                        <pre><code class=\"language-cpp\">struct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Binary Tree in DSA C",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-3",
        "title": "Binary Search Tree in DSA C++",
        "level": "Intermediate",
        "summary": "Binary tree ordered property: left subtree < root < right subtree for O(log N) lookup.",
        "content": "\n                    <h2>Binary Search Tree (<code>BST</code> Ordered Property)</h2>\n                    <p>In a **Binary Search Tree**, for any node $X$: all nodes in its left subtree have keys strictly less than $X.val$, and all nodes in its right subtree have keys strictly greater than $X.val$.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Binary Search Tree i",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-4",
        "title": "Tree Traversing Inorder, Preorder, Postorder",
        "level": "Intermediate",
        "summary": "DFS traversals: Inorder (L-Root-R outputs BST sorted), Preorder (Root-L-R), Postorder (L-R-Root).",
        "content": "\n                    <h2>DFS Tree Traversal Mechanics</h2>\n                    <ul>\n                        <li><strong>Inorder (<code>Left -&gt; Root -&gt; Right</code>):</strong> On a BST, Inorder traversal always yields elements in **Sorted Ascending Order**!</li>\n                        <li><strong>Preorder (<code>Root -&gt; Left -&gt; Right</code>):</strong> Used for cloning/copying tree hierarchies.</li>\n                        <li><strong>Postorder (<code>Left -&gt; Right -&gt; Root</code>):</strong> Used for deleting/freeing tree memory (<code>delete children before parent</code>).</li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3"
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
              "id": "main",
              "label": "Tree Traversing Inorder, ",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "Inorder (Left -&gt; Root ..",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "Preorder (Root -&gt; Left..",
              "x": 400,
              "y": 300
            },
            {
              "id": "n3",
              "label": "Postorder (Left -&gt; Rig..",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-22-5",
        "title": "Creation of Tree from Inorder to Preorder",
        "level": "Advanced",
        "summary": "Reconstructing unique binary tree given both Preorder (root identifier) and Inorder (left/right split) sequences.",
        "content": "\n                    <h2>Algorithm: Reconstruct Binary Tree (<code>O(N)</code> via HashMap)</h2>\n                    <p>1. The first element of <code>Preorder</code> is always the current <code>Root</code>.<br>\n                    2. Locate <code>Root</code>'s index inside <code>Inorder</code>. Elements left of that index form the left subtree; elements right form the right subtree.<br>\n                    3. Recursively build <code>root-&gt;left</code> and <code>root-&gt;right</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Creation of Tree fro",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-6",
        "title": "Creation of BST in DSA C++",
        "level": "Intermediate",
        "summary": "Inserting elements into BST in O(h) height time (<code>root = insert(root, val)</code>).",
        "content": "\n                    <h2>BST Insertion (<code>O(log N)</code> on balanced tree)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">bst_insert.cpp</span></div>\n                        <pre><code class=\"language-cpp\">TreeNode* insertBST(TreeNode* root, int val) {\n    if (root == nullptr) return new TreeNode(val);\n    if (val &lt; root-&gt;val) root-&gt;left = insertBST(root-&gt;left, val);\n    else if (val &gt; root-&gt;val) root-&gt;right = insertBST(root-&gt;right, val);\n    return root;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Creation of BST in D",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-7",
        "title": "Inorder, Preorder and Postorder Traversing of BST in DSA C++",
        "level": "Intermediate",
        "summary": "Code implementations of recursive and iterative (using std::stack) tree traversals.",
        "content": "\n                    <h2>Recursive Inorder Traversal Code</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">inorder_bst.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">void inorder(TreeNode* root) {\n    if (root == nullptr) return;\n    inorder(root-&gt;left);\n    cout &lt;&lt; root-&gt;val &lt;&lt; \" \"; // Outputs sorted BST\n    inorder(root-&gt;right);\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Inorder, Preorder an",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-8",
        "title": "Searching in BST in DSA C++",
        "level": "Intermediate",
        "summary": "O(log N) iterative lookup descending left or right based on target key.",
        "content": "\n                    <h2>BST Key Search (<code>O(log N)</code>)</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">bst_search.cpp</span></div>\n                        <pre><code class=\"language-cpp\">TreeNode* searchBST(TreeNode* root, int target) {\n    while (root != nullptr && root-&gt;val != target) {\n        root = (target &lt; root-&gt;val) ? root-&gt;left : root-&gt;right;\n    }\n    return root;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Searching in BST in ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-9",
        "title": "Strictly Binary Tree in DSA C++",
        "level": "Intermediate",
        "summary": "Binary tree where every node has either exactly 0 or exactly 2 children (Full/Proper Binary Tree).",
        "content": "\n                    <h2>Strictly / Full Binary Tree</h2>\n                    <p>Every node has strictly $0$ or $2$ children (<code>no node has only 1 child</code>). If a strictly binary tree has $L$ leaves, total internal nodes with two children equals exactly $L - 1$.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Strictly Binary Tree",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-10",
        "title": "Delete an Element from Tree in DSA C++",
        "level": "Advanced",
        "summary": "General binary tree deletion replacing target node with deepest rightmost node before deleting leaf.",
        "content": "\n                    <h2>Deleting from Unordered Binary Tree</h2>\n                    <p>To preserve binary tree connectivity, we find the target node, copy the value of the deepest rightmost leaf into the target, and delete that deepest leaf.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Delete an Element fr",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-11",
        "title": "Delete an Element from BST in DSA C++",
        "level": "Advanced",
        "summary": "3-case BST deletion: leaf node, 1-child node, and 2-child node (using Inorder Successor / Minimum in right subtree).",
        "content": "\n                    <h2>The 3 Cases of BST Deletion</h2>\n                    <ol>\n                        <li><strong>Case 1 (Leaf Node):</strong> Simply <code>delete node; return nullptr;</code>.</li>\n                        <li><strong>Case 2 (One Child):</strong> Replace node with its only non-null child pointer (<code>root = root-&gt;left or root-&gt;right</code>).</li>\n                        <li><strong>Case 3 (Two Children):</strong> Find the **Inorder Successor** (<code>smallest node in right subtree</code>), copy its value to current node, and recursively delete the successor leaf!</li>\n                    </ol>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "n1",
                "n2",
                "n3"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "n1",
              "label": "Case 1 (Leaf Node)",
              "x": 100,
              "y": 200
            },
            {
              "id": "n2",
              "label": "Case 2 (One Child)",
              "x": 400,
              "y": 200
            },
            {
              "id": "n3",
              "label": "Case 3 (Two Children)",
              "x": 700,
              "y": 200
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "n1",
              "to": "n2"
            },
            {
              "id": "e2",
              "from": "n2",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-22-12",
        "title": "AVL Tree in DSA C++",
        "level": "Advanced",
        "summary": "Self-balancing Binary Search Tree where balance factor |Height(L) - Height(R)| <= 1 via LL, RR, LR, and RL rotations.",
        "content": "\n                    <h2>Self-Balancing AVL Trees (<code>O(log N)</code> Guaranteed)</h2>\n                    <p>An **AVL Tree** guarantees <code>O(log N)</code> worst-case performance by maintaining a Balance Factor (<code>BF = height(L) - height(R)</code>) between <code>-1, 0, +1</code>. If insertion causes <code>|BF| &gt; 1</code>, rotations restore balance immediately!</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "AVL Tree in DSA C++",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-13",
        "title": "Threaded Binary Tree in DSA C++",
        "level": "Advanced",
        "summary": "Converting null right pointers to point directly to Inorder Successors (<code>threads</code>) to enable O(1) space traversal.",
        "content": "\n                    <h2>Threaded Binary Trees (<code>Zero Stack Traversal</code>)</h2>\n                    <p>In normal binary trees, over $50%$ of child pointers are <code>nullptr</code>! Threaded binary trees utilize these empty <code>right</code> pointers to point directly to their Inorder Successor, allowing non-recursive inorder traversal with <code>O(1)</code> stack space.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Threaded Binary Tree",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-22-14",
        "title": "B Tree in DSA C++",
        "level": "Advanced",
        "summary": "Self-balancing multi-way search tree optimized for disk I/O and databases (storing keys and child pointers per node).",
        "content": "\n                    <h2>Database Indexing Engine: B-Tree & B+ Tree</h2>\n                    <p>A **B-Tree** of order $M$ allows every node to store up to $M-1$ sorted keys and $M$ child pointers (<code>multi-way branching</code>). Essential for database engines (<code>MySQL InnoDB</code>, <code>PostgreSQL</code>) where minimizing hard drive page reads (<code>O(log_M N)</code>) is paramount.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "B Tree in DSA C++",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-23",
    "title": "Address Calculation in DSA using C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-23-1",
        "title": "Address Calculation of 1D, 2D Array in DSA C++",
        "level": "Intermediate",
        "summary": "Mathematical derivation of base address plus index stride offsets for 1D and Row/Column Major 2D grids.",
        "content": "\n                    <h2>Address Math for 1D & 2D Arrays</h2>\n                    <p>Given Base Address $B$ and element byte size $W$ (<code>sizeof(int) = 4</code>):</p>\n                    <ul>\n                        <li><strong>1D Array (<code>arr[i]</code>):</strong> <br> <code>Address = B + (i - LowerBound) * W</code></li>\n                        <li><strong>2D Array Row-Major (<code>mat[r][c]</code>):</strong> <br> <code>Address = B + [(r - LR) * TotalColumns + (c - LC)] * W</code></li>\n                        <li><strong>2D Array Column-Major (<code>mat[r][c]</code>):</strong> <br> <code>Address = B + [(c - LC) * TotalRows + (r - LR)] * W</code></li>\n                    </ul>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "n1",
                "n2",
                "n3"
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
              "id": "main",
              "label": "Address Calculation of 1D",
              "x": 400,
              "y": 100
            },
            {
              "id": "n1",
              "label": "1D Array (arr[i])",
              "x": 100,
              "y": 300
            },
            {
              "id": "n2",
              "label": "2D Array Row-Major (mat[r..",
              "x": 400,
              "y": 300
            },
            {
              "id": "n3",
              "label": "2D Array Column-Major (ma..",
              "x": 700,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "n1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "n2"
            },
            {
              "id": "e3",
              "from": "main",
              "to": "n3"
            }
          ]
        }
      },
      {
        "id": "mod-23-2",
        "title": "Address Calculation of 3D Array in DSA C++",
        "level": "Advanced",
        "summary": "Address formulas for 3D tensor arrays mat[i][j][k] across planes, rows, and columns.",
        "content": "\n                    <h2>3D Tensor Array Address (<code>arr[P][R][C]</code>)</h2>\n                    <p>For a 3D array (<code>Planes x Rows x Columns</code>) in Row-Major order: <br>\n                    <code>Address(arr[i][j][k]) = B + [(i * R * C) + (j * C) + k] * W</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Address Calculation ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-23-3",
        "title": "Address Calculation of Lower & Upper Bound of Array in DSA C++",
        "level": "Advanced",
        "summary": "Calculating total elements and memory span given arbitrary lower and upper index bounds [L, U].",
        "content": "\n                    <h2>Total Elements & Memory Span from Bounds <code>[L, U]</code></h2>\n                    <p>Total elements inside bound <code>[Lower, Upper]</code> equals: <code>Total = Upper - Lower + 1</code>. Total memory consumed equals <code>Total * sizeof(DataType)</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Address Calculation ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "mod-24",
    "title": "Graph in DSA C++",
    "category": "dsa",
    "subtopics": [
      {
        "id": "mod-24-1",
        "title": "What is Graph in DSA C++?",
        "level": "Advanced",
        "summary": "Non-linear network of Vertices (V) connected by Edges (E). Directed vs Undirected and Weighted graphs.",
        "content": "\n                    <h2>Network Topology: Graph <code>G = (V, E)</code></h2>\n                    <p>A **Graph** consists of a finite set of **Vertices** (<code>Nodes</code>) and **Edges** (<code>Connections</code>). Models real-world networks like Google Maps road routing, social media friendships, and computer networks.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "What is Graph in DSA",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-24-2",
        "title": "Graph representation in DSA C++",
        "level": "Advanced",
        "summary": "Adjacency Matrix (O(V^2) space) vs Adjacency List (vector<int> adj[V] in O(V + E) space).",
        "content": "\n                    <h2>Adjacency Matrix vs Adjacency List</h2>\n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">graph_representation.cpp</span><button class=\"copy-code-btn\" onclick=\"app.copyCode(this)\">Copy Code</button></div>\n                        <pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nint main() {\n    int V = 5;\n    // Adjacency List: Array of dynamic vectors (O(V + E) memory space)\n    vector&lt;int&gt; adj[5];\n\n    // Add undirected edge between node 0 and 1\n    adj[0].push_back(1);\n    adj[1].push_back(0);\n    \n    cout &lt;&lt; \"Node 0 is connected to Node: \" &lt;&lt; adj[0][0] &lt;&lt; endl;\n    return 0;\n}</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Graph representation",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-24-3",
        "title": "Kruskal’s Algorithm in DSA C++",
        "level": "Advanced",
        "summary": "O(E log E) Minimum Spanning Tree (MST) greedy algorithm using Disjoint Set Union (DSU / Union-Find).",
        "content": "\n                    <h2>Greedy MST: Kruskal's Algorithm (<code>O(E log E)</code> via <code>Union-Find</code>)</h2>\n                    <p>To find the **Minimum Spanning Tree** (<code>connecting all V nodes with minimum total edge weight</code>):<br>\n                    1. Sort all edges in ascending order of weight.<br>\n                    2. Iterate through edges: if adding the edge does not form a cycle (<code>verified via Disjoint Set Union</code>), include it in the MST.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Kruskal’s Algorithm ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-24-4",
        "title": "Prims Algorithm in DSA C++",
        "level": "Advanced",
        "summary": "O(E log V) vertex-centric MST algorithm growing tree starting from arbitrary root via Priority Queue.",
        "content": "\n                    <h2>Greedy MST: Prim's Algorithm (<code>O(E log V)</code> via Priority Queue)</h2>\n                    <p>Unlike Kruskal's which grows forests of edges, Prim's algorithm starts from node <code>0</code> and greedily expands the single connected component by picking the smallest outgoing edge using a Min-Heap (<code>priority_queue</code>).</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Prims Algorithm in D",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-24-5",
        "title": "Dijkstra’s Shortest Path Algorithm DSA C++",
        "level": "Advanced",
        "summary": "O((V + E) log V) single-source shortest path finding minimum distance from source to all vertices.",
        "content": "\n                    <h2>Single-Source Shortest Path: Dijkstra's (<code>O((V + E) log V)</code>)</h2>\n                    <p>Finds the absolute shortest path from a starting node $S$ to every other node in a graph with **non-negative weights** using relaxation (<code>if dist[u] + weight &lt; dist[v] then dist[v] = dist[u] + weight</code>).</p>\n                    \n                    <div class=\"code-container\">\n                        <div class=\"code-header\"><span class=\"code-lang\">dijkstra_summary.cpp</span></div>\n                        <pre><code class=\"language-cpp\">// Min-priority queue storing {distance, node}\npriority_queue&lt;pair&lt;int,int&gt;, vector&lt;pair&lt;int,int&gt;&gt;, greater&lt;pair&lt;int,int&gt;&gt;&gt; pq;\npq.push({0, source});\ndist[source] = 0;</code></pre>\n                    </div>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Dijkstra’s Shortest ",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      },
      {
        "id": "mod-24-6",
        "title": "Floyd Warshall Algorithm in DSA C++",
        "level": "Advanced",
        "summary": "O(V^3) All-Pairs Shortest Path dynamic programming algorithm computing distances between all node pairs.",
        "content": "\n                    <h2>All-Pairs Shortest Path: Floyd-Warshall (<code>O(V^3)</code> Dynamic Programming)</h2>\n                    <p>Computes the shortest paths between **every pair of vertices** $(i, j)$ in the entire graph, even with negative edge weights (<code>no negative cycles</code>). Uses a triple loop checking whether path through intermediate node $k$ is shorter: <br>\n                    <code>dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</code>.</p>\n                ",
        "diagram": {
          "controls": [
            {
              "id": "all",
              "label": "Overview",
              "highlightNodes": [
                "main",
                "c1",
                "c2"
              ],
              "highlightEdges": [
                "e1",
                "e2"
              ]
            }
          ],
          "nodes": [
            {
              "id": "main",
              "label": "Floyd Warshall Algor",
              "x": 400,
              "y": 100
            },
            {
              "id": "c1",
              "label": "Theory & Rules",
              "x": 250,
              "y": 300
            },
            {
              "id": "c2",
              "label": "Implementation",
              "x": 550,
              "y": 300
            }
          ],
          "edges": [
            {
              "id": "e1",
              "from": "main",
              "to": "c1"
            },
            {
              "id": "e2",
              "from": "main",
              "to": "c2"
            }
          ]
        }
      }
    ]
  }
];
