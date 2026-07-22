// C++ & DSA MasterClass Pro - Granular Subtopic Diagrams & Deep Theory Engine
// Provides specific, tailored 3D/2D/ASCII diagrams, deep theoretical architecture mechanics, and pictorial flowcharts for EVERY subtopic ID/theme across all 24 modules.

window.SubtopicDiagramsEngine = {
    getSpecificBundle: function(modData, subData, app) {
        if (!subData || !modData || !app || !typeof app.generateGraphicalDiagramCard === "function") {
            return null;
        }

        const subId = (subData.id || "").toLowerCase();
        const subTitle = (subData.title || "").toLowerCase();
        const modId = (modData.id || "").toLowerCase();
        const modTitle = (modData.title || "").toLowerCase();

        let diagramHtml = "";
        let deepConceptHtml = "";
        let errorHtml = "";

        // =========================================================================
        // MODULE 1: Introduction to C++
        // =========================================================================
        if (subId === "mod-1-1" || subTitle.includes("what is c++")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "C++ MULTI-PARADIGM ARCHITECTURE & ZERO-OVERHEAD COMPILATION PIPELINE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:14px;">
                        <div class="g-node highlight-purple" style="min-width:110px; padding:12px;">
                            <div class="g-node-title">Source (.cpp)</div>
                            <div class="g-node-value" style="font-size:12px;">High-Level Syntax</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-bolt"></i><span style="font-size:10px;">Preprocess</span></div>
                        <div class="g-node" style="border-color:#38bdf8; min-width:120px; padding:12px;">
                            <div class="g-node-title" style="color:#38bdf8;">Compiler AST</div>
                            <div class="g-node-value" style="font-size:12px;">Zero-Overhead Check</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-microchip"></i><span style="font-size:10px;">Optimize -O3</span></div>
                        <div class="g-node highlight-green" style="min-width:130px; padding:12px; box-shadow:0 0 25px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Native Assembly</div>
                            <div class="g-node-value" style="font-size:13px; color:#10b981;">Direct CPU Instructions</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial C++ Factory:</strong> C++ bypasses virtual machines (<code>JVM/CLR</code>), compiling abstractions directly to bare-metal hardware instructions.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="flex-wrap:wrap; justify-content:center; gap:16px;">
                        <div class="g-node highlight-purple" style="width:140px;">
                            <div class="g-node-title"><i class="fa-solid fa-layer-group"></i> Object-Oriented</div>
                            <div class="g-node-value">Classes & Encapsulation</div>
                        </div>
                        <div class="g-node highlight-cyan" style="width:140px;">
                            <div class="g-node-title"><i class="fa-solid fa-code-branch"></i> Procedural</div>
                            <div class="g-node-value">High-Speed Functions</div>
                        </div>
                        <div class="g-node highlight-gold" style="width:140px;">
                            <div class="g-node-title"><i class="fa-solid fa-clone"></i> Generic (STL)</div>
                            <div class="g-node-value">Compile-Time Templates</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Multi-Paradigm Harmony:</strong> Combine OOP data safety with generic STL speed and procedural hardware access.</p>`,
                `+-------------------------------------------------------------------------+
| C++ ZERO-OVERHEAD COMPILATION & HARDWARE MAPPING PIPELINE               |
+-------------------------------------------------------------------------+
| [ Source Code (.cpp) ]                                                  |
|       |                                                                 |
|       v (Preprocessor #include / #define expansion)                     |
| [ Translation Unit (.i) ]                                               |
|       |                                                                 |
|       v (Compiler AST Generation & Type Checking)                       |
| [ Intermediate Representation (LLVM IR / Assembly .s) ]                 |
|       |                                                                 |
|       v (Assembler emitting native machine code)                        |
| [ Object Code (.o / .obj) ] ===(Linker resolving symbols)===> [ EXE ]   |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Theoretical Architecture: Zero-Overhead Abstraction Principle
                    </div>
                    <p class="deep-concept-text">
                        The fundamental design thesis of C++, formulated by Bjarne Stroustrup, is the <code>Zero-Overhead Principle</code>: <em>"What you don't use, you don't pay for. And further: What you do use, you couldn't hand code any better."</em> Unlike interpreted languages that incur runtime garbage collection (<code>GC</code>) pauses and dynamic type lookups, C++ resolves polymorphic VTables, template monomorphization, and RAII stack destruction strictly at compile time (<code>-O3 optimization</code>), achieving maximum instructions per cycle (<code>IPC</code>) on modern superscalar CPUs.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Beginner Compilation Error: Undefined Reference / Symbol Not Found
                    </div>
                    <div class="error-code-snippet">
/usr/bin/ld: /tmp/ccX9Zq2b.o: in function 'main':
main.cpp:(.text+0x15): undefined reference to 'calculateHash(int)'
collect2: error: ld returned 1 exit status
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> This occurs during the <code>Linker</code> phase when a function definition is declared in a header file (<code>#include "header.h"</code>) but its implementation inside the source file (<code>header.cpp</code>) was omitted during the compiler build command. Always compile all participating source files: <code>g++ main.cpp header.cpp -o app</code>.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        if (subId === "mod-1-2" || subTitle.includes("history of c++")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "CHRONOLOGICAL ROADMAP: FROM 1972 C GENESIS TO MODERN C++23",
                `<div class="history-roadmap-container">
                    <div class="history-card">
                        <div><span class="history-year-pill"><i class="fa-solid fa-code"></i> 1972 • AT&T BELL LABS</span></div>
                        <div class="history-card-body">
                            <div class="history-card-title">The C Language Genesis <span style="font-size:13px; color:#9ca3af; font-weight:500;">(Dennis Ritchie)</span></div>
                            <div class="history-card-desc">Created to rewrite the UNIX Operating System with near-assembly speed and raw memory pointer mastery. Established the syntax foundation for all modern systems engineering.</div>
                            <div class="tech-tags-group">
                                <span class="tech-tag cyan">UNIX OS Kernel</span>
                                <span class="tech-tag">Procedural Paradigm</span>
                                <span class="tech-tag">Manual malloc() / free()</span>
                                <span class="tech-tag">Zero Overhead</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-conduit">
                        <div class="conduit-line"><div class="conduit-pulse-ball"></div></div>
                        <span>1979: Simula 67 OOP Concepts Fused with C Hardware Speed</span>
                    </div>
                    <div class="history-card purple">
                        <div><span class="history-year-pill"><i class="fa-solid fa-cube"></i> 1979 • BJARNE STROUSTRUP</span></div>
                        <div class="history-card-body">
                            <div class="history-card-title">C with Classes & The C++ Paradigm Shift</div>
                            <div class="history-card-desc">Introduced class encapsulation, data hiding, and virtual inheritance without sacrificing raw C assembly execution speed. Formally renamed to C++ (++ increment operator) in 1983.</div>
                            <div class="tech-tags-group">
                                <span class="tech-tag purple">Class Encapsulation</span>
                                <span class="tech-tag purple">Virtual Table Dispatch</span>
                                <span class="tech-tag">++ Increment Operator</span>
                                <span class="tech-tag">RAII Foundations</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-conduit">
                        <div class="conduit-line"><div class="conduit-pulse-ball"></div></div>
                        <span>1998: Standardization & Alexander Stepanov's STL Revolution</span>
                    </div>
                    <div class="history-card gold">
                        <div><span class="history-year-pill"><i class="fa-solid fa-book-bookmark"></i> 1998 • FIRST ISO STANDARD</span></div>
                        <div class="history-card-body">
                            <div class="history-card-title">ISO C++98 / C++03 & Standard Template Library (STL)</div>
                            <div class="history-card-desc">Standardized generic programming across the industry via templates, introducing foundational containers (std::vector, std::map) and algorithmic iterators.</div>
                            <div class="tech-tags-group">
                                <span class="tech-tag gold">Template Generics (T)</span>
                                <span class="tech-tag gold">STL Containers</span>
                                <span class="tech-tag gold">Algorithm Iterators</span>
                                <span class="tech-tag">ISO Specification</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-conduit">
                        <div class="conduit-line"><div class="conduit-pulse-ball"></div></div>
                        <span>2011–2023: The Modern C++ Revolution & Zero-Copy Move Semantics</span>
                    </div>
                    <div class="history-card green">
                        <div><span class="history-year-pill"><i class="fa-solid fa-rocket"></i> 2011–2023 • MODERN C++ ERA</span></div>
                        <div class="history-card-body">
                            <div class="history-card-title">C++11/14/17/20/23 Superpower Revolution</div>
                            <div class="history-card-desc">Eliminated O(N) heap copies via Move Semantics (rvalue references T&&), formalized multi-threading, introduced smart pointer RAII, and C++20 Modules for instantaneous compilation.</div>
                            <div class="tech-tags-group">
                                <span class="tech-tag green">rvalue Move T&&</span>
                                <span class="tech-tag green">Smart Ptrs (unique/shared)</span>
                                <span class="tech-tag green">C++20 Modules & Concepts</span>
                                <span class="tech-tag green">Coroutines</span>
                            </div>
                        </div>
                    </div>
                </div>`,
                `<div class="comparison-card-grid">
                    <div class="comp-panel c-legacy">
                        <div class="comp-panel-header"><i class="fa-solid fa-terminal" style="color:#94a3b8;"></i> 1972 C Architecture (Procedural)</div>
                        <div class="comp-row">
                            <span class="comp-label">Data Organization</span>
                            <span class="comp-val">struct Data + Free Global Functions</span>
                        </div>
                        <div class="comp-row">
                            <span class="comp-label">Memory Management</span>
                            <span class="comp-val">Manual malloc() & free() (Vulnerable to memory leaks)</span>
                        </div>
                        <div class="comp-row">
                            <span class="comp-label">Resource Scope Lifetime</span>
                            <span class="comp-val">No destructors; requires manual cleanup calls</span>
                        </div>
                        <div class="comp-row">
                            <span class="comp-label">Polymorphism & Dispatch</span>
                            <span class="comp-val">Manual function pointer tables (Error-prone & verbose)</span>
                        </div>
                    </div>
                    <div class="comp-panel cpp-modern">
                        <div class="comp-panel-header"><i class="fa-solid fa-layer-group" style="color:var(--accent-cyan);"></i> Modern C++ Architecture (Multi-Paradigm)</div>
                        <div class="comp-row">
                            <span class="comp-label">Data Organization</span>
                            <span class="comp-val">Encapsulated Classes with Private/Public Access Control</span>
                        </div>
                        <div class="comp-row">
                            <span class="comp-label">Memory Management</span>
                            <span class="comp-val">RAII Smart Pointers & Move Semantics (Zero-Cost Transfer)</span>
                        </div>
                        <div class="comp-row">
                            <span class="comp-label">Resource Scope Lifetime</span>
                            <span class="comp-val">Automatic ~Destructor() execution upon scope exit</span>
                        </div>
                        <div class="comp-row">
                            <span class="comp-label">Polymorphism & Dispatch</span>
                            <span class="comp-val">Compiler-verified VTables & Compile-Time Concepts</span>
                        </div>
                    </div>
                </div>`,
                `+-----------------------------------------------------------------------------------+
| CHRONOLOGICAL HISTORY OF C & C++ ANCESTRY TREE                                    |
+-----------------------------------------------------------------------------------+
| 1960: ALGOL 60 ===> 1963: CPL ===> 1967: BCPL (Martin Richards)                   |
|                                         |                                         |
|                                         v                                         |
| 1969: B Language (Ken Thompson at AT&T Bell Labs)                                 |
|                                         |                                         |
|                                         v                                         |
| 1972: C Language (Dennis Ritchie at AT&T Bell Labs - Built for UNIX OS)           |
|         |                                                                         |
|         +---------------------------------------+                                 |
|         |                                       |                                 |
|         v                                       v                                 |
| 1979: C with Classes (Stroustrup)       1989: ANSI C (C89 / C90 Standard)         |
|         |                                       |                                 |
|         v                                       v                                 |
| 1983: Renamed to C++ (++ operator)      1999: C99 / 2011: C11 / 2018: C18         |
|         |                                                                         |
|         v                                                                         |
| 1998: ISO C++98 (First Standard & STL) ===> 2003: C++03 (Bug Fixes)               |
|         |                                                                         |
|         v                                                                         |
| 2011: C++11 (Modern Revolution: auto, lambdas, smart pointers, move semantics)    |
|         |                                                                         |
|         v                                                                         |
| 2014: C++14 ===> 2017: C++17 ===> 2020: C++20 (Modules) ===> 2023: C++23          |
+-----------------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-history"></i> Theoretical Evolution: Why Bjarne Stroustrup Created C++ from C
                    </div>
                    <p class="deep-concept-text">
                        In 1972, Dennis Ritchie created the **C programming language** at AT&T Bell Labs to rewrite the UNIX operating system. C provided unprecedented low-level memory control and near-assembly execution speed, but as software projects scaled beyond 50,000 lines of code, C's procedural nature (separating data structures from functions and lacking data encapsulation) led to massive complexity and maintenance bottlenecks. In 1979, while working on PhD simulations, Bjarne Stroustrup combined the high-level Object-Oriented organization of **Simula 67** (<code>classes, inheritance, strong typing</code>) with the raw metal hardware performance of **C**, initially calling it <em>"C with Classes"</em>. In 1983, it was renamed **C++** (<code>using the C increment operator ++ to signify an evolutionary step above C</code>), establishing the world's premier multi-paradigm systems language.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Legacy C vs Modern C++ Bug: Mixing <code>malloc/free</code> with <code>new/delete</code>
                    </div>
                    <div class="error-code-snippet">
Account* acc = (Account*)malloc(sizeof(Account)); // WRONG: Does NOT call constructor!
free(acc);                                        // WRONG: Does NOT call destructor ~Account()!

Account* modAcc = new Account(); // CORRECT: Allocates heap memory AND executes Account() constructor
delete modAcc;                   // CORRECT: Executes ~Account() destructor AND frees memory
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Because C++ inherits C's standard library, beginners often use C's <code>malloc()</code> and <code>free()</code> on C++ objects. Unlike C++'s <code>new</code> and <code>delete</code> keywords, <code>malloc/free</code> only allocate raw uninitialized bytes—they never execute object constructors or destructors! Always use C++ RAII smart pointers (<code>std::make_unique&lt;Account&gt;()</code>) or <code>new/delete</code> for object lifetimes.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        if (subId === "mod-1-3" || subTitle.includes("reasons to learn")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "HARDWARE MEMORY HIERARCHY & CACHE-LINE SPATIAL PREFETCHING",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="flex-direction:column; gap:10px;">
                        <div class="g-node highlight-green" style="width:240px; padding:10px;">
                            <div class="g-node-title">CPU Registers & L1 Cache (~1-2 ns)</div>
                            <div class="g-node-value">C++ Stack / Raw Variables</div>
                        </div>
                        <div class="g-node highlight-purple" style="width:240px; padding:10px;">
                            <div class="g-node-title">L2 / L3 Shared Cache (~10-20 ns)</div>
                            <div class="g-node-value">Contiguous Vectors & Arrays</div>
                        </div>
                        <div class="g-node" style="width:240px; padding:10px; border-color:#fbbf24;">
                            <div class="g-node-title" style="color:#fbbf24;">Main Memory / RAM (~80-100 ns)</div>
                            <div class="g-node-value">Dynamic Heap Allocation (new/malloc)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Latency Pyramid:</strong> C++ gives exact control over where objects live, keeping critical loops inside ultra-fast CPU L1 caches.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-cyan" style="width:170px;">
                            <div class="g-node-title">C++ Contiguous Layout</div>
                            <div class="g-node-value">100% Cache Hit Rate (Burst)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-not-equal"></i></div>
                        <div class="g-node" style="border-color:#ef4444; width:170px;">
                            <div class="g-node-title" style="color:#ef4444;">Garbage Collected Objects</div>
                            <div class="g-node-value">Scattered Heap References (Cache Miss)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why C++ Wins in High-Frequency Trading & Games:</strong> Eliminating pointer chasing across fragmented RAM prevents CPU pipeline stalls.</p>`,
                `+-------------------------------------------------------------------------+
| LATENCY COMPARISON MATRIX (WHY HIGH-PERFORMANCE SYSTEMS USE C++)        |
+-------------------------------------------------------------------------+
| Memory Tier        | Access Latency | C++ Control Mechanism             |
+--------------------+----------------+-----------------------------------+
| CPU Registers      | ~0.5 cycles    | register keyword / Local stack    |
| L1 Cache           | ~4 cycles      | Contiguous std::vector / arrays   |
| Main RAM           | ~200 cycles    | Heap new / Custom memory pools    |
| NVMe SSD / Disk    | ~100,000 cycles| Asynchronous Memory-Mapped I/O    |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Hardware Mechanics: Spatial Prefetching & Cache-Line Locality
                    </div>
                    <p class="deep-concept-text">
                        Modern CPU memory controllers fetch RAM data in fixed blocks called <code>Cache Lines (64 bytes)</code>. When C++ accesses sequential array or <code>std::vector</code> elements, the hardware prefetcher automatically loads surrounding elements directly into the CPU L1/L2 cache before the CPU requests them. Interpreted languages using pointer-chasing objects (<code>Java/Python</code>) scatter objects randomly across the heap, triggering continuous cache misses (<code>80+ ns delays per lookup</code>).
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Performance Anti-Pattern: Pointer Chasing via Linked Lists in Hot Loops
                    </div>
                    <div class="error-code-snippet">
// POOR CACHE LOCALITY (High L1/L2 Miss Rate):
std::list<int> slow_list; // Nodes scattered randomly in heap
for(int x : slow_list) { process(x); } // CPU stalls waiting for RAM fetches!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Unless frequent node insertions/deletions in the middle of a collection are strictly required, always default to contiguous storage using <code>std::vector<int></code>. Contiguous memory ensures CPU hardware prefetchers operate at 100% capacity!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        if (subId === "mod-1-4" || subId === "mod-1-5" || subTitle.includes("procedural") || subTitle.includes("object oriented")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "PROCEDURAL TOP-DOWN vs OBJECT-ORIENTED ENCAPSULATION ARCHITECTURE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node" style="width:160px; border-color:#ef4444; padding:12px;">
                            <div class="g-node-title" style="color:#ef4444;">Procedural (POP/C)</div>
                            <div class="g-node-value" style="font-size:11px;">Global Data Accessible by All Decoupled Functions</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-shield-halved"></i></div>
                        <div class="g-node highlight-green" style="width:170px; padding:12px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Object-Oriented (OOP/C++)</div>
                            <div class="g-node-value" style="font-size:11px;">Data + Methods Bundled Inside Private Class Capsule</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Paradigm Shift:</strong> OOP eliminates global state pollution by restricting direct data modification to member functions.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:150px;">
                            <div class="g-node-title">Encapsulation</div>
                            <div class="g-node-value">private / public access</div>
                        </div>
                        <div class="g-node highlight-cyan" style="width:150px;">
                            <div class="g-node-title">Inheritance</div>
                            <div class="g-node-value">Code Reuse Base->Derived</div>
                        </div>
                        <div class="g-node highlight-gold" style="width:150px;">
                            <div class="g-node-title">Polymorphism</div>
                            <div class="g-node-value">Virtual VTable Dispatch</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>The 3 Pillars of OOP:</strong> Structuring software for modularity, maintainability, and architectural reuse.</p>`,
                `+-------------------------------------------------------------------------+
| PARADIGM ARCHITECTURAL BOUNDARY COMPARISON                              |
+-------------------------------------------------------------------------+
| PROCEDURAL (C / POP):                                                   |
|   [ Global Data: int balance ] <=== modified directly by any function ==|
|   Function1(balance)   Function2(balance)   Function3(balance)          |
|                                                                         |
| OBJECT-ORIENTED (C++ / OOP):                                            |
|   +--- Class BankAccount -------------------------------------------+   |
|   | private: int balance;                                           |   |
|   | public:  void deposit(int amt) { balance += amt; }             |   |
|   +-----------------------------------------------------------------+   |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-shield-halved"></i> Theoretical Architecture: Invariant Protection via Access Specifiers
                    </div>
                    <p class="deep-concept-text">
                        Procedural programming separates data structures (<code>structs</code>) from the functions that operate on them, creating fragile codebases where global invariants are easily broken by unauthorized modifications. C++ Object-Oriented Programming (<code>OOP</code>) enforces <code>Invariant Protection</code> by bundling state and behavioral logic into contiguous <code>Class Capsules</code>. Using <code>private</code> and <code>protected</code> access specifiers guarantees that internal state (<code>e.g., bank balance or array bounds</code>) can only be mutated through validated <code>public</code> methods.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Architectural Error: Violating Encapsulation with Public Fields
                    </div>
                    <div class="error-code-snippet">
class Account {
public:
    double balance; // BAD: Direct public field access allows invalid state!
};
Account acc;
acc.balance = -9999.99; // CRITICAL BUG: Negative balance set without validation!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Always declare member variables as <code>private</code> and provide controlled setter functions: <code>void setBalance(double b) { if(b >= 0) balance = b; }</code>. This guarantees state validation across all access points!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 2: Hands on programming with C++ / Installation
        // =========================================================================
        if (modId === "mod-2" || subId.startsWith("mod-2-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "C++ PROGRAM STRUCTURE & ENTRY POINT EXECUTION STACK",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="flex-direction:column; gap:12px;">
                        <div class="g-node highlight-purple" style="width:260px; padding:10px;">
                            <div class="g-node-title">1. Preprocessor Header Inclusion</div>
                            <div class="g-node-value" style="font-size:12px;">#include &lt;iostream&gt;</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-down"></i></div>
                        <div class="g-node highlight-cyan" style="width:260px; padding:10px;">
                            <div class="g-node-title">2. Global Namespace & Static Initialization</div>
                            <div class="g-node-value" style="font-size:12px;">using namespace std;</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-down"></i></div>
                        <div class="g-node highlight-green" style="width:260px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">3. Entry Point Execution Frame</div>
                            <div class="g-node-value" style="font-size:13px; color:#10b981;">int main(int argc, char* argv[])</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Program Flow:</strong> Every C++ executable must define exactly one <code>main()</code> entry function where the OS kernel transfers control.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:150px;">
                            <div class="g-node-title">std::cin &gt;&gt; var;</div>
                            <div class="g-node-value">Standard Input Buffer</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-exchange-alt"></i></div>
                        <div class="g-node highlight-green" style="width:150px;">
                            <div class="g-node-title">std::cout &lt;&lt; "Text";</div>
                            <div class="g-node-value">Standard Output Flush</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Stream I/O Architecture:</strong> The <code>iostream</code> library connects console byte streams directly to hardware terminal devices.</p>`,
                `+-------------------------------------------------------------------------+
| MINIMAL PRODUCTION C++ SKELETON WITH RETURN CODES                       |
+-------------------------------------------------------------------------+
| #include <iostream>  // 1. Load standard input/output stream definitions|
|                                                                         |
| int main(int argc, char* argv[]) { // 2. OS entry point with CLI args   |
|     std::cout << "Hello, C++ Engineering!" << std::endl;                |
|     return 0; // 3. Return 0 to OS Kernel signifying successful exit    |
| }                                                                       |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Theoretical Mechanics: CRT Initialization & The <code>main()</code> Stack Frame
                    </div>
                    <p class="deep-concept-text">
                        When you execute a C++ binary (<code>app.exe</code>), the operating system does not jump directly into <code>main()</code>. Instead, control is first passed to the C Runtime Library (<code>CRT</code>) startup routine (<code>_start</code> on Linux, <code>mainCRTStartup</code> on Windows). The CRT sets up global/static object constructors (<code>.data</code> segment), initializes the process stack pointer (<code>RSP</code>), and then invokes <code>int main(int argc, char* argv[])</code>. When <code>main()</code> returns <code>0</code>, the CRT invokes static object destructors in reverse order before triggering the OS <code>exit()</code> system call.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Beginner Syntax Error: Missing Semicolon or Stream Mismatch
                    </div>
                    <div class="error-code-snippet">
std::cout << "Welcome to MasterClass Pro" // ERROR: Missing semicolon ';' at end of statement!
std::cin << my_variable; // ERROR: Invalid direction! '<<' is for insertion (cout), '>>' is for extraction (cin).
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Every instruction statement in C++ must terminate with a semicolon (<code>;</code>). For I/O streams, remember the arrows point in the direction of data flow: <code>cin &gt;&gt; var;</code> (into variable) and <code>cout &lt;&lt; var;</code> (out to screen).
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 3: Data types in C++
        // =========================================================================
        if (modId === "mod-3" || subId.startsWith("mod-3-")) {
            if (subId === "mod-3-3" || subTitle.includes("representation") || subTitle.includes("hexadecimal")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "NUMBER SYSTEMS & BITWISE REGISTER REPRESENTATION MAP",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:16px;">
                            <div class="g-node highlight-purple" style="min-width:110px; padding:12px;">
                                <div class="g-node-title">Decimal (Base-10)</div>
                                <div class="g-node-value" style="font-size:14px;">255</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-equals"></i></div>
                            <div class="g-node highlight-cyan" style="min-width:120px; padding:12px;">
                                <div class="g-node-title">Hexadecimal (Base-16)</div>
                                <div class="g-node-value" style="font-size:14px;">0xFF</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-equals"></i></div>
                            <div class="g-node highlight-green" style="min-width:140px; padding:12px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">Binary (Base-2 CPU)</div>
                                <div class="g-node-value" style="font-size:13px; font-family:monospace; color:#10b981;">1111 1111</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Register Conversion:</strong> Hexadecimal (<code>0x</code>) is preferred by systems engineers because exactly two hex digits correspond to one 8-bit byte.</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:14px;">
                            <div class="g-node highlight-gold" style="width:200px;">
                                <div class="g-node-title">Bitwise AND (&amp;) Masking</div>
                                <div class="g-node-value">0xFF &amp; 0x0F == 0x0F (15)</div>
                            </div>
                            <div class="g-node highlight-purple" style="width:200px;">
                                <div class="g-node-title">Bitwise Left Shift (&lt;&lt;)</div>
                                <div class="g-node-value">1 &lt;&lt; 3 == 8 (Powers of 2)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Hardware Math Hacks:</strong> Bit shifts execute in 1 clock cycle on ALU hardware, far faster than division or multiplication.</p>`,
                    `+-------------------------------------------------------------------------+
| NUMBER SYSTEM CONVERSION & BINARY BYTE EQUIVALENCE                      |
+-------------------------------------------------------------------------+
| Decimal | Binary (8-bit) | Octal (0) | Hexadecimal (0x) | Description   |
+---------+----------------+-----------+------------------+---------------+
| 0       | 0000 0000      | 00        | 0x00             | Zero / Null   |
| 15      | 0000 1111      | 017       | 0x0F             | Lower Nibble  |
| 128     | 1000 0000      | 0200      | 0x80             | MSB Signed Bit|
| 255     | 1111 1111      | 0377      | 0xFF             | Max Unsigned  |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Theoretical Architecture: Two's Complement Signed Representation
                        </div>
                        <p class="deep-concept-text">
                            Inside CPU arithmetic logic units (<code>ALU</code>), negative integers are stored using <code>Two's Complement</code> binary representation. To negate an integer (<code>e.g., -5</code>), the CPU inverts all bits (<code>One's Complement</code>) and adds <code>1</code> (<code>~x + 1</code>). The Most Significant Bit (<code>MSB</code>) serves as the sign flag (<code>0 = positive, 1 = negative</code>). This representation guarantees that addition and subtraction circuitry function identically regardless of whether operands are signed or unsigned!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Common Number Trap: Unintended Octal Literal Leading Zero
                        </div>
                        <div class="error-code-snippet">
int id = 015; // WARNING: Leading zero means OCTAL (Base-8), NOT Decimal 15!
std::cout << id; // Outputs 13! (8*1 + 5 = 13)
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> In C and C++, any integer literal prefixed with a leading zero (<code>015</code>) is interpreted as an <code>Octal (Base-8)</code> number. For hexadecimal use <code>0x15</code>, and for decimal never use leading zeros (<code>15</code>)!
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            diagramHtml = app.generateGraphicalDiagramCard(
                "PRIMITIVE DATA TYPE BIT-WIDTHS & MEMORY ALIGNMENT ARENA",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node highlight-cyan" style="width:110px; padding:10px;">
                            <div class="g-node-title">bool / char</div>
                            <div class="g-node-value">1 Byte (8 bits)</div>
                        </div>
                        <div class="g-node highlight-purple" style="width:110px; padding:10px;">
                            <div class="g-node-title">short int</div>
                            <div class="g-node-value">2 Bytes (16 bits)</div>
                        </div>
                        <div class="g-node highlight-gold" style="width:110px; padding:10px;">
                            <div class="g-node-title">int / float</div>
                            <div class="g-node-value">4 Bytes (32 bits)</div>
                        </div>
                        <div class="g-node highlight-green" style="width:120px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">double / long long</div>
                            <div class="g-node-value" style="color:#10b981;">8 Bytes (64 bits)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Byte Widths:</strong> Every primitive type occupies an exact number of RAM cells, determinable via the <code>sizeof(T)</code> operator.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:180px;">
                            <div class="g-node-title">Struct Memory Padding</div>
                            <div class="g-node-value">[char 1B | 3B Pad | int 4B]</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-green" style="width:180px;">
                            <div class="g-node-title">Optimized Reordering</div>
                            <div class="g-node-value">[int 4B | char 1B | 3B Free]</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Struct Packing Optimization:</strong> Order members from largest to smallest to minimize compiler padding waste.</p>`,
                `+-------------------------------------------------------------------------+
| C++ PRIMITIVE DATA TYPES ALIGNMENT & RANGE TABLE (64-BIT ARCHITECTURE)  |
+-------------------------------------------------------------------------+
| Type          | Size (Bytes) | Range / Limits                           |
+---------------+--------------+------------------------------------------+
| bool          | 1 Byte       | true (1) or false (0)                    |
| char          | 1 Byte       | -128 to 127 (ASCII characters)           |
| int           | 4 Bytes      | -2,147,483,648 to 2,147,483,647 (~2 Billion)|
| double        | 8 Bytes      | 15 decimal digits precision (IEEE 754)   |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Theoretical Architecture: Hardware Word Boundaries & Struct Padding
                    </div>
                    <p class="deep-concept-text">
                        Modern 64-bit CPUs read RAM most efficiently along natural word boundaries (<code>multiple of 4 or 8 bytes</code>). When you place a 1-byte <code>char</code> immediately before a 4-byte <code>int</code> inside a <code>struct</code>, the compiler automatically inserts 3 bytes of invisible padding (<code>Slop Bytes</code>) so the integer aligns on a 4-byte boundary. By sorting struct fields from largest (<code>8B double/pointer</code>) to smallest (<code>1B bool/char</code>), you minimize memory footprint by over 30%!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical Production Bug: Signed Integer Overflow (Undefined Behavior)
                    </div>
                    <div class="error-code-snippet">
int max_int = 2147483647; // Maximum 32-bit signed integer
max_int = max_int + 1;    // CRITICAL BUG: Signed integer overflow!
// Result wraps around to negative -2147483648 (Undefined Behavior in C++)
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++, overflowing a signed integer (<code>int</code>) triggers <code>Undefined Behavior (UB)</code>, allowing compilers to optimize away overflow checks entirely. When handling financial counters or large timestamps, always use <code>long long int</code> (<code>64-bit</code>) or <code>std::int64_t</code> from <code>#include <cstdint></code>.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 4: Operators in C++
        // =========================================================================
        if (modId === "mod-4" || subId.startsWith("mod-4-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "ALU ARITHMETIC LOGIC UNIT & OPERATOR PRECEDENCE TREE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-cyan" style="width:140px; padding:10px;">
                            <div class="g-node-title">Unary Pre-Increment</div>
                            <div class="g-node-value">++x (In-Place Add)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-check"></i></div>
                        <div class="g-node highlight-purple" style="width:150px; padding:10px;">
                            <div class="g-node-title">Multiplication / Div</div>
                            <div class="g-node-value">a * b / c (High Priority)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-check"></i></div>
                        <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Logical Short-Circuit</div>
                            <div class="g-node-value" style="color:#10b981;">(x &gt; 0) &amp;&amp; check()</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Evaluation Tree:</strong> Unary operators execute first, followed by arithmetic operations, and finally logical/assignment operators.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">Pre-Increment (++i)</div>
                            <div class="g-node-value">Returns reference to modified value (<code>O(1)</code>)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-scale-balanced"></i></div>
                        <div class="g-node" style="border-color:#fbbf24; width:170px;">
                            <div class="g-node-title" style="color:#fbbf24;">Post-Increment (i++)</div>
                            <div class="g-node-value">Creates temporary copy before incrementing!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why <code>++it</code> is faster than <code>it++</code>:</strong> For complex object iterators, post-increment wastes CPU cycles creating temporary copies.</p>`,
                `+-------------------------------------------------------------------------+
| OPERATOR PRECEDENCE & ASSOCIATIVITY HIERARCHY                           |
+-------------------------------------------------------------------------+
| Priority | Operator Symbol(s)             | Associativity | Type        |
+----------+--------------------------------+---------------+-------------+
| 1 (High) | ::  .  ->  []  ()  x++  x--    | Left-to-Right | Postfix     |
| 2        | ++x  --x  +x  -x  !  ~  *ptr  &| Right-to-Left | Unary       |
| 3        | *   /   %                      | Left-to-Right | Multiplicative|
| 4        | +   -                          | Left-to-Right | Additive    |
| 5        | <<  >>                         | Left-to-Right | Bit-Shift   |
| 6        | <  <=  >  >=  ==  !=           | Left-to-Right | Relational  |
| 7        | &&   ||                        | Left-to-Right | Logical     |
| 8 (Low)  | =   +=   -=   *=   /=          | Right-to-Left | Assignment  |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Theoretical Architecture: Logical Short-Circuiting & Branch Jumps
                    </div>
                    <p class="deep-concept-text">
                        When evaluating logical expressions like <code>if (ptr != nullptr &amp;&amp; ptr-&gt;isValid())</code>, C++ compilers guarantee <code>Short-Circuit Evaluation</code>. If the left-hand operand (<code>ptr != nullptr</code>) evaluates to <code>false</code>, the right-hand operand (<code>ptr->isValid()</code>) is strictly bypassed by emitting a direct conditional jump assembly instruction (<code>je / jz</code>). This invariant prevents null-pointer dereference crashes in complex conditionals without requiring nested <code>if</code> blocks!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Bug: Assignment <code>=</code> inside Equality Check <code>==</code>
                    </div>
                    <div class="error-code-snippet">
int status = 0;
if (status = 1) { // BUG: Assignment operator '=' instead of equality '=='!
    std::cout << "Status is 1!"; // ALWAYS EXECUTED because status is set to 1 (true)!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++, <code>status = 1</code> assigns <code>1</code> to <code>status</code> and returns <code>1</code>, which evaluates as <code>true</code> inside the <code>if</code> condition. Always double-check <code>==</code> for comparisons, or enable compiler warnings (<code>-Wall</code>) to catch accidental assignment in conditions.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 5: Statements and Loops in C++
        // =========================================================================
        if (modId === "mod-5" || subId.startsWith("mod-5-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "CPU BRANCH PREDICTION & CONDITIONAL JUMP PIPELINE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                            <div class="g-node-title">Condition Check</div>
                            <div class="g-node-value">cmp eax, ebx</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-code-branch"></i></div>
                        <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Branch Taken (je)</div>
                            <div class="g-node-value" style="color:#10b981;">Execute if-block</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-ban"></i></div>
                        <div class="g-node" style="border-color:#ef4444; width:140px; padding:10px;">
                            <div class="g-node-title" style="color:#ef4444;">Branch Miss / Else</div>
                            <div class="g-node-value">Pipeline Flush (~15 cycles)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial CPU Speculation:</strong> Modern CPUs guess branch outcomes in advance using the Branch Target Buffer (<code>BTB</code>).</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-cyan" style="width:170px;">
                            <div class="g-node-title">if-else / switch</div>
                            <div class="g-node-value">O(1) Jump Table via <code>switch</code> when dense</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-retweet"></i></div>
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">for / while Loops</div>
                            <div class="g-node-value">Loop Unrolling (-O3 Optimization)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Loop Unrolling Architecture:</strong> Compilers transform small loops <code>for(int i=0; i&lt;4; ++i) do(i);</code> into 4 direct sequential calls.</p>`,
                `+-------------------------------------------------------------------------+
| CONTROL FLOW JUMP TABLE vs IF-ELSE LADDER PERFORMANCE                   |
+-------------------------------------------------------------------------+
| Structure         | Hardware Instruction | Complexity | Best Use Case       |
+-------------------+----------------------+------------+---------------------+
| if / else if      | Sequence of cmp/jne  | O(K) checks| Sparse, non-integer |
| switch (dense)    | Indirect jmp [table] | O(1) jump  | Dense integer/enum  |
| for / while loop  | Conditional backward | O(N) cycles| Iteration & batches |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Theoretical Architecture: Branch Prediction & Jump Tables
                    </div>
                    <p class="deep-concept-text">
                        When executing conditional statements (<code>if-else</code> or <code>switch</code>), modern superscalar CPUs employ <code>Speculative Branch Prediction</code>. To prevent pipeline stalls waiting for comparison flags (<code>ZF/CF</code>), the CPU guesses the likely path and starts executing instructions speculatively. If a <code>switch</code> statement has dense integer cases (<code>case 1 .. case 8</code>), the compiler constructs a static <code>Jump Table</code> in memory (<code>.rdata</code>), converting <code>switch(val)</code> into an instant <code>O(1)</code> indirect assembly jump (<code>jmp [JumpTable + val*8]</code>) regardless of the number of cases!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Switch Trap: Accidental Case Fallthrough (Missing <code>break;</code>)
                    </div>
                    <div class="error-code-snippet">
switch (option) {
    case 1:
        std::cout << "Starting Game...\n";
        // BUG: Missing break; statement here!
    case 2:
        std::cout << "Exiting Game...\n"; // UNINTENDED EXECUTION when option == 1!
        break;
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++, <code>switch</code> cases fall through sequentially to the next case unless explicitly stopped by a <code>break;</code> statement or explicit <code>[[fallthrough]];</code> C++17 attribute. Always end each case with <code>break;</code>!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // Check Part 2 or Part 3 if not handled in Part 1 (Modules 1-5)
        if (window.SubtopicDiagramsEnginePart2) {
            const res2 = window.SubtopicDiagramsEnginePart2.getBundle(modData, subData, app);
            if (res2) return res2;
        }
        if (window.SubtopicDiagramsEnginePart3) {
            const res3 = window.SubtopicDiagramsEnginePart3.getBundle(modData, subData, app);
            if (res3) return res3;
        }

        // Return null if not in modules 1-24 so we let generic architecture fallback handle it cleanly!
        return null;
    }
};
