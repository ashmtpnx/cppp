// C++ & DSA MasterClass Pro - Subtopic Diagrams Part 2 (Modules 6 to 13)
// Covers Arrays, Functions & Pointers, Classes & Objects, Operator Overloading, Inheritance, File Handling, Templates, and Projects.

window.SubtopicDiagramsEnginePart2 = {
    getBundle: function(modData, subData, app) {
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
        // MODULE 6: C++ Arrays
        // =========================================================================
        if (modId === "mod-6" || subId.startsWith("mod-6-")) {
            if (subId === "mod-6-2" || subTitle.includes("largest") || subTitle.includes("smallest")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "ARRAY SCANNING COMPARISON & REGISTER TRACKING FLOW",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:16px;">
                            <div class="g-node highlight-cyan" style="width:140px; padding:10px;">
                                <div class="g-node-title">arr[i] Cell Read</div>
                                <div class="g-node-value">Load value into CPU Register</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-code-compare"></i></div>
                            <div class="g-node highlight-purple" style="width:150px; padding:10px;">
                                <div class="g-node-title">cmp eax, max_reg</div>
                                <div class="g-node-value">Compare with current max</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-check"></i></div>
                            <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">Update max_reg</div>
                                <div class="g-node-value" style="color:#10b981;">If arr[i] &gt; max_val</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Register Flow:</strong> Finding min/max requires exactly <code>N-1</code> comparisons across the contiguous RAM block.</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">Initialization Rule</div>
                                <div class="g-node-value">max_val = arr[0] (NEVER 0!)</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-lightbulb"></i></div>
                            <div class="g-node highlight-purple" style="width:180px;">
                                <div class="g-node-title">Time Complexity</div>
                                <div class="g-node-value">O(N) Linear Time / O(1) Space</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why <code>arr[0]</code> init is critical:</strong> If all array numbers are negative (<code>[-5, -10, -2]</code>), initializing <code>max_val = 0</code> produces <code>0</code> (wrong!).</p>`,
                    `+-------------------------------------------------------------------------+
| STEP-BY-STEP REGISTER COMPARISON TABLE FOR [12, 45, 8, 99, 23]          |
+-------------------------------------------------------------------------+
| Step i | arr[i] | Current max_val | Condition (arr[i] > max) | Action   |
+--------+--------+-----------------+--------------------------+----------+
| 0      | 12     | 12              | Base Init                | max = 12 |
| 1      | 45     | 12              | 45 > 12 (True)           | max = 45 |
| 2      | 8      | 45              | 8 > 45 (False)           | Keep 45  |
| 3      | 99     | 45              | 99 > 45 (True)           | max = 99 |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Theoretical Mechanics: Single-Pass Scan & CPU Register Caching
                        </div>
                        <p class="deep-concept-text">
                            Finding extremum values (<code>Min/Max</code>) in an unindexed array is mathematically bound to <code>O(N)</code> time complexity because no element can be skipped without violating correctness. During optimization (<code>-O3</code>), C++ compilers place accumulator tracking variables (<code>max_val / min_val</code>) directly inside ultra-fast CPU registers (<code>RSI/RDI</code>). As the loop iterates over contiguous array memory, hardware spatial prefetchers pre-load upcoming elements into L1 cache, allowing comparisons (<code>cmp / cmov</code>) to execute in just 1 clock cycle per element!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Logic Error: Initializing Max to 0 with Negative Numbers
                        </div>
                        <div class="error-code-snippet">
int arr[] = {-15, -42, -8, -99};
int max_val = 0; // BUG: Initialized to 0 instead of arr[0]!
for(int i=0; i<4; i++) { if(arr[i] > max_val) max_val = arr[i]; }
std::cout << max_val; // Outputs 0! (But 0 is NOT even in the array!)
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> Always initialize tracking variables to the first element of the array: <code>int max_val = arr[0];</code> (or use <code>std::numeric_limits&lt;int&gt;::min()</code> from <code>#include <limits></code>).
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            // Default Module 6 (Arrays & Memory Allocation)
            diagramHtml = app.generateGraphicalDiagramCard(
                "CONTIGUOUS ARRAY MEMORY BLOCKS & O(1) INDEX OFFSET MAP",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node highlight-purple" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[0] = 10</div>
                            <div class="g-node-value">@ 0x1000</div>
                        </div>
                        <div class="g-node highlight-cyan" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[1] = 25</div>
                            <div class="g-node-value">@ 0x1004</div>
                        </div>
                        <div class="g-node highlight-gold" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[2] = 42 ★</div>
                            <div class="g-node-value">@ 0x1008</div>
                        </div>
                        <div class="g-node highlight-green" style="width:115px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">arr[3] = 88</div>
                            <div class="g-node-value" style="color:#10b981;">@ 0x100C</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Contiguous 4-Byte Steps:</strong> Notice how each <code>int</code> element steps forward exactly 4 bytes (<code>sizeof(int)</code>) in physical RAM.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-purple" style="width:200px;">
                            <div class="g-node-title">Index Calculation Formula</div>
                            <div class="g-node-value">&amp;arr[i] = Base + i * sizeof(T)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-green" style="width:200px;">
                            <div class="g-node-title">O(1) Instant Jump</div>
                            <div class="g-node-value">Zero traversal overhead!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Array Lookup is O(1):</strong> The CPU calculates the exact memory address with one multiplication and addition.</p>`,
                `+-------------------------------------------------------------------------+
| ARRAY MEMORY MAP & POINTER ARITHMETIC TABLE (INT ARRAY OF 4 BYTES)      |
+-------------------------------------------------------------------------+
| Index | Expression | Physical Address Calculation | Stored Value            |
+-------+------------+------------------------------+-------------------------+
| arr[0]| *arr       | Base (0x1000) + 0 * 4 = 0x1000 | 10                      |
| arr[1]| *(arr + 1) | Base (0x1000) + 1 * 4 = 0x1004 | 25                      |
| arr[2]| *(arr + 2) | Base (0x1000) + 2 * 4 = 0x1008 | 42                      |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Contiguous Allocation & Address Calculation Mechanics
                    </div>
                    <p class="deep-concept-text">
                        An array (<code>T arr[N]</code>) is a strictly contiguous, homogeneous sequence of memory cells allocated either on the process stack (<code>int arr[100]</code>) or heap (<code>int* arr = new int[100]</code>). Because elements are stored side-by-side without gaps, the C++ compiler transforms array indexing (<code>arr[i]</code>) into pure pointer arithmetic: <code>Address = Base_Pointer + (i * sizeof(T))</code>. This formula evaluates in <code>O(1)</code> constant hardware time, regardless of whether you access index <code>0</code> or <code>1,000,000</code>!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical Production Crash: Buffer Overflow / Index Out of Bounds
                    </div>
                    <div class="error-code-snippet">
int arr[5] = {10, 20, 30, 40, 50}; // Valid indices: 0, 1, 2, 3, 4
arr[5] = 999; // CRITICAL BUG: Writes past end of array into adjacent memory!
// AddressSanitizer report: stack-buffer-overflow / heap-buffer-overflow
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> C++ arrays do not perform bounds checking at runtime (<code>Zero-Overhead Principle</code>). Accessing index <code>arr[N]</code> writes directly over adjacent variables or return addresses (<code>Security Vulnerability</code>). Always ensure loop bounds check <code>i &lt; N</code>, or use <code>std::vector::at(i)</code> which throws <code>std::out_of_range</code> on invalid indices!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 7: Functions and Pointers in C++
        // =========================================================================
        if (modId === "mod-7" || subId.startsWith("mod-7-")) {
            if (subId === "mod-7-3" || subTitle.includes("local and global")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "PROCESS MEMORY SEGMENTATION MAP (<code>CODE, DATA, BSS, STACK, HEAP</code>)",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="flex-direction:column; gap:8px;">
                            <div class="g-node highlight-green" style="width:250px; padding:8px;">
                                <div class="g-node-title">Stack Segment (grows downward)</div>
                                <div class="g-node-value">Local function variables (<code>int x = 5;</code>)</div>
                            </div>
                            <div class="g-node" style="width:250px; padding:8px; border-color:#fbbf24;">
                                <div class="g-node-title" style="color:#fbbf24;">Heap Segment (grows upward)</div>
                                <div class="g-node-value">Dynamic allocations (<code>new int[100];</code>)</div>
                            </div>
                            <div class="g-node highlight-purple" style="width:250px; padding:8px;">
                                <div class="g-node-title">Data / BSS Segments</div>
                                <div class="g-node-value">Global &amp; Static variables (<code>static int g;</code>)</div>
                            </div>
                            <div class="g-node highlight-cyan" style="width:250px; padding:8px;">
                                <div class="g-node-title">Text / Code Segment (Read-Only)</div>
                                <div class="g-node-value">Compiled machine instructions (<code>.text</code>)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Virtual Address Space:</strong> The OS allocates distinct memory arenas for stack locals vs global variables.</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-purple" style="width:180px;">
                                <div class="g-node-title">Local Variable Lifetime</div>
                                <div class="g-node-value">Created on Stack enter, destroyed on exit (<code>}</code></div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-arrows-split-up-and-left"></i></div>
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">Global / Static Lifetime</div>
                                <div class="g-node-value">Persists across entire process execution duration</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Stack is Fast:</strong> Allocating local variables only requires subtracting bytes from the <code>RSP</code> stack pointer (<code>1 cycle</code>).</p>`,
                    `+-------------------------------------------------------------------------+
| PROCESS SEGMENTATION LIFETIME & INITIALIZATION TABLE                    |
+-------------------------------------------------------------------------+
| Segment | Content                   | Lifetime        | Default Init    |
+---------+---------------------------+-----------------+-----------------+
| Stack   | Local vars, return addrs  | Function Scope  | Garbage / Uninit|
| Heap    | new / malloc dynamic memory| Until delete    | Garbage / Uninit|
| .data   | Initialized global/static | Entire Process  | Assigned Value  |
| .bss    | Uninitialized global/static| Entire Process  | Zero (0 / null) |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: Virtual Address Space Segments & Stack vs Heap
                        </div>
                        <p class="deep-concept-text">
                            When a C++ process launches, the OS maps its virtual address space into 4 primary arenas: <code>.text</code> (read-only executable machine code), <code>.data/.bss</code> (global and static variables initialized once before <code>main()</code>), the <code>Heap</code> (dynamic pool managed by allocator metadata), and the <code>Stack</code> (LIFO call frames). Global variables persist inside <code>.data/.bss</code> across the entire process run, while local stack variables (<code>int x</code>) are automatically allocated and popped when function stack frames push and return!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Critical Bug: Returning Pointer/Reference to Local Stack Variable (<code>Dangling Pointer</code>)
                        </div>
                        <div class="error-code-snippet">
int* getSecret() {
    int secret = 42; // Local stack variable inside function frame
    return &secret;  // CRITICAL BUG: Returning address of local stack variable!
}
int* ptr = getSecret(); // Stack frame popped! *ptr accesses dead memory!
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> Local variables are destroyed (<code>popped from stack</code>) the moment their function returns. A pointer pointing to a popped stack frame is called a <code>Dangling Pointer</code>. If data must survive function return, allocate it on the heap (<code>return new int(42);</code>) or return by value (<code>int getSecret() { return 42; }</code>).
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            // Functions & Calling Conventions
            diagramHtml = app.generateGraphicalDiagramCard(
                "SYSTEM V ABI REGISTER PARAMETER PASSING & STACK FRAMES",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:135px; padding:10px;">
                            <div class="g-node-title">Caller main() Frame</div>
                            <div class="g-node-value">Push Return Addr</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-cyan" style="width:145px; padding:10px;">
                            <div class="g-node-title">CPU Registers</div>
                            <div class="g-node-value">RDI=arg1, RSI=arg2</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Callee Frame (RBP)</div>
                            <div class="g-node-value" style="color:#10b981;">Execute &amp; Ret RAX</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Call Stack:</strong> Arguments are passed via ultra-fast CPU registers before pushing local frames onto <code>RSP</code>.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">Pass-by-Value (int x)</div>
                            <div class="g-node-value">Copies entire variable data</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-clone"></i></div>
                        <div class="g-node highlight-purple" style="width:170px;">
                            <div class="g-node-title">Pass-by-Reference (int&amp; x)</div>
                            <div class="g-node-value">Passes 8-byte memory address (<code>O(1)</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Optimization Rule:</strong> Always pass large objects (<code>structs, vectors, strings</code>) by <code>const T&amp;</code> to avoid stack copy overhead.</p>`,
                `+-------------------------------------------------------------------------+
| x86-64 SYSTEM V ABI REGISTER PARAMETER PASSING ORDER                    |
+-------------------------------------------------------------------------+
| Parameter # | 64-Bit Register | Purpose / Note                          |
+-------------+-----------------+-----------------------------------------+
| 1st Argument| RDI             | Passes first integer / pointer / <code>this</code> |
| 2nd Argument| RSI             | Passes second parameter                 |
| 3rd Argument| RDX             | Passes third parameter                  |
| Return Value| RAX             | Function return result stored here      |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Function Activation Records & Calling Conventions
                    </div>
                    <p class="deep-concept-text">
                        Every function invocation creates an <code>Activation Record (Stack Frame)</code> tracked by the Base Pointer (<code>RBP</code>) and Stack Pointer (<code>RSP</code>) CPU registers. According to the <code>System V ABI (x86-64)</code>, the first 6 integer or pointer arguments are passed inside hardware registers (<code>RDI, RSI, RDX, RCX, R8, R9</code>), bypassing slower RAM memory altogether. When a function finishes, <code>LEAVE</code> and <code>RET</code> instructions restore the caller's stack frame and jump back to the saved return address (<code>RAX</code> holds the return value).
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Runtime Crash: Stack Overflow via Infinite Recursion
                    </div>
                    <div class="error-code-snippet">
void recursiveFunc(int n) {
    // BUG: Missing or unreachable Base Case termination condition!
    recursiveFunc(n + 1); // Continually pushes stack frames until process runs out of stack memory!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Each recursive function call pushes a new frame (~32 to 64+ bytes) onto the process stack (<code>typically 1 MB to 8 MB limit</code>). Without a strictly reached <code>Base Case (<code>if (n <= 0) return;</code>)</code>, the stack pointer (<code>RSP</code>) collides with the guard page, triggering an immediate OS segmentation fault (<code>SIGSEGV / Stack Overflow</code>).
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 8 & 10: Classes and Objects & OOP
        // =========================================================================
        if (modId === "mod-8" || modId === "mod-10" || subId.startsWith("mod-8-") || subId.startsWith("mod-10-")) {
            if (subId === "mod-10-2" || subTitle.includes("inheritance")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "DERIVED CLASS EMBEDDED MEMORY LAYOUT & VTABLE ARCHITECTURE",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:16px;">
                            <div class="g-node highlight-purple" style="width:140px; padding:10px;">
                                <div class="g-node-title">Base Class Object (<code>0x00</code>)</div>
                                <div class="g-node-value">Base Fields &amp; vptr</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-plus"></i></div>
                            <div class="g-node highlight-cyan" style="width:140px; padding:10px;">
                                <div class="g-node-title">Derived Members (<code>0x10</code>)</div>
                                <div class="g-node-value">Derived Specific Data</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-equals"></i></div>
                            <div class="g-node highlight-green" style="width:150px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">Derived Instance Block</div>
                                <div class="g-node-value" style="color:#10b981;">Single Contiguous Allocation</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Contiguous Inheritance Layout:</strong> A Derived object physically embeds the Base class memory right at offset <code>0</code>.</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">Base() Constructor First</div>
                                <div class="g-node-value">Top-down initialization order</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                            <div class="g-node highlight-purple" style="width:180px;">
                                <div class="g-node-title">Derived() Constructor Second</div>
                                <div class="g-node-value">Destructors execute in reverse (<code>~Derived -> ~Base</code>)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Constructor/Destructor Chaining Rule:</strong> Base classes must be fully constructed before Derived members can access base state.</p>`,
                    `+-------------------------------------------------------------------------+
| OBJECT INHERITANCE MEMORY LAYOUT WITH VTABLE POINTER (<code>VPTR</code>)           |
+-------------------------------------------------------------------------+
| Memory Offset | Field / Member          | Size (Bytes) | Belonging Class  |
+---------------+-------------------------+--------------+------------------+
| + 0x00        | _vptr (VTable Pointer)  | 8 Bytes      | Base / Polymorphic|
| + 0x08        | int base_id             | 4 Bytes      | Base Class       |
| + 0x0C        | [ 4 Bytes Padding ]     | 4 Bytes      | Compiler Alignment|
| + 0x10        | double derived_price    | 8 Bytes      | Derived Class    |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: Inheritance Sub-Typing & Virtual Method Tables (<code>VTable</code>)
                        </div>
                        <p class="deep-concept-text">
                            When class <code>Derived : public Base</code> is instantiated, C++ allocates one contiguous memory block where the <code>Base</code> class sub-object is placed at offset <code>0x00</code>, immediately followed by <code>Derived</code> fields. If any virtual functions exist (<code>virtual void speak()</code>), the compiler inserts an hidden 8-byte pointer (<code>_vptr</code>) at the start of the object pointing to a shared static <code>Virtual Method Table (VTable)</code>. Dynamic dispatch (<code>Base* ptr = new Derived(); ptr->speak();</code>) resolves at runtime via indirect function pointer jump: <code>(*ptr->_vptr[index])(ptr)</code>!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Critical Polymorphism Bug: Missing Virtual Destructor (<code>Memory Leak</code>)
                        </div>
                        <div class="error-code-snippet">
class Base {
public:
    ~Base() { std::cout << "Base Destroyed\n"; } // BUG: Not declared 'virtual'!
};
class Derived : public Base {
    int* buffer = new int[1000];
public:
    ~Derived() { delete[] buffer; std::cout << "Derived Destroyed\n"; }
};
Base* ptr = new Derived();
delete ptr; // CRITICAL LEAK: Only ~Base() is called! ~Derived() is skipped and 1000 ints leak!
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> When deleting a derived object through a base pointer (<code>delete ptr</code>), if the base class destructor is non-virtual, static compile-time binding calls <code>~Base()</code> exclusively. Always declare base class destructors as virtual: <code>virtual ~Base() = default;</code>.
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            // General Class & Object Instantiation
            diagramHtml = app.generateGraphicalDiagramCard(
                "CLASS INSTANTIATION & <code>THIS</code> POINTER REGISTER MAPPING",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                            <div class="g-node-title">int id (4B)</div>
                            <div class="g-node-value">Data Member</div>
                        </div>
                        <div class="g-node highlight-cyan" style="width:130px; padding:10px;">
                            <div class="g-node-title">double salary (8B)</div>
                            <div class="g-node-value">Data Member</div>
                        </div>
                        <div class="g-node highlight-gold" style="width:140px; padding:10px;">
                            <div class="g-node-title">Shared Code Text Segment</div>
                            <div class="g-node-value">Methods in <code>.text</code> (0B in Object!)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Zero Method Memory Footprint:</strong> Member methods (<code>void display()</code>) are stored once in shared CPU <code>.text</code> code, NOT inside every object instance!</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-green" style="width:190px;">
                            <div class="g-node-title">obj.display(42);</div>
                            <div class="g-node-value">High-Level Method Call</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-purple" style="width:190px;">
                            <div class="g-node-title">Class::display(&amp;obj, 42)</div>
                            <div class="g-node-value"><code>this</code> passed via <code>RDI</code> register!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>How <code>this</code> Pointer Works:</strong> The compiler secretly transforms member function calls by passing the object address as parameter #1.</p>`,
                `+-------------------------------------------------------------------------+
| OBJECT MEMORY FOOTPRINT vs METHOD STORAGE ARENA                         |
+-------------------------------------------------------------------------+
| Component                | Memory Location   | Size in Object Instance  |
+--------------------------+-------------------+--------------------------+
| Non-Static Data Members  | Stack or Heap RAM | Sum of sizeof(fields)+Pad|
| Static Data Members      | .data / .bss      | 0 Bytes (Shared globally)|
| Member Functions         | .text Code Segment| 0 Bytes (Shared binary)  |
| Virtual Table Pointer    | Start of Object   | 8 Bytes (if virtual used)|
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Class Instance Footprint & <code>this</code> Register Injection
                    </div>
                    <p class="deep-concept-text">
                        In C++, creating an object (<code>Class obj;</code>) only allocates memory for non-static data fields (<code>plus struct padding</code>). Member functions (<code>methods</code>) occupy exactly <code>0 bytes</code> inside individual object instances; they reside once in the shared read-only <code>.text</code> code segment. When you invoke <code>obj.calculate(10)</code>, the compiler secretly rewrites the call to <code>Class::calculate(&amp;obj, 10)</code>, passing <code>&amp;obj</code> via the first hardware register (<code>RDI</code>) as the hidden <code>this pointer</code>!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Initialization Order Trap: Constructor Initialization List Order
                    </div>
                    <div class="error-code-snippet">
class Buffer {
    int size;
    int* data;
public:
    // BUG: If 'data' is declared before 'size' in class, data is initialized FIRST using uninitialized 'size'!
    Buffer(int s) : size(s), data(new int[size]) {} 
};
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Class data members are initialized in the exact order they are <code>declared inside the class definition</code>, NOT in the order of the constructor initialization list (<code>: size(s), data(...)</code>). Always keep your constructor init list matching exact class field declaration order!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 9: Operator Overloading
        // =========================================================================
        if (modId === "mod-9" || subId.startsWith("mod-9-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "COMPILE-TIME POLYMORPHISM & OPERATOR OVERLOAD RESOLUTION TABLE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-cyan" style="width:145px; padding:10px;">
                            <div class="g-node-title">c1 + c2</div>
                            <div class="g-node-value">Syntax Expression</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-purple" style="width:165px; padding:10px;">
                            <div class="g-node-title">c1.operator+(c2)</div>
                            <div class="g-node-value">Member Function Translation</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-check"></i></div>
                        <div class="g-node highlight-green" style="width:150px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Symbol _ZN7ComplexplES_</div>
                            <div class="g-node-value" style="color:#10b981;">Mangled Linker Symbol</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Operator Translation:</strong> Overloading allows user-defined classes (<code>Complex, Vector</code>) to work naturally with standard operators (<code>+, -, ==, &lt;&lt;</code>).</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">Member Overload</div>
                            <div class="g-node-value"><code>a + b</code> == <code>a.operator+(b)</code> (<code>this</code> is <code>a</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-code-branch"></i></div>
                        <div class="g-node highlight-purple" style="width:170px;">
                            <div class="g-node-title">Friend / Global Overload</div>
                            <div class="g-node-value"><code>cin &gt;&gt; obj</code> == <code>operator&gt;&gt;(cin, obj)</code></div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Stream Operators <code>&lt;&lt; / &gt;&gt;</code> Must be Friends:</strong> Since <code>std::ostream</code> is owned by STL, we must overload <code>operator&lt;&lt;</code> as a non-member function taking <code>ostream&amp;</code> as first argument.</p>`,
                `+-------------------------------------------------------------------------+
| CANNOT OVERLOAD THESE 5 C++ OPERATORS (COMPILER RESTRICTION TABLE)      |
+-------------------------------------------------------------------------+
| Operator Symbol | Name                      | Why It Cannot Be Overloaded|
+-----------------+---------------------------+----------------------------+
| ::              | Scope Resolution          | Resolves compile-time names|
| .               | Member Access             | Protects fundamental access|
| .*              | Pointer-to-Member Access  | Preserves internal layout  |
| ?:              | Ternary Conditional       | Guarantees short-circuit   |
| sizeof          | Object Size Operator      | Evaluated purely by AST    |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Name Mangling & Overload Resolution Mechanics
                    </div>
                    <p class="deep-concept-text">
                        Operator overloading is pure <code>Compile-Time Syntactic Sugar</code>. When the compiler encounters <code>c1 + c2</code>, it checks whether <code>c1</code> and <code>c2</code> are user-defined types (<code>classes</code>). If so, it performs an AST symbol lookup for either <code>c1.operator+(c2)</code> (member) or <code>operator+(c1, c2)</code> (global/friend). Through <code>Name Mangling</code> (<code>encoding type signatures into assembly labels like _ZN7ComplexplES_</code>), overloaded operators compile down to direct, zero-overhead function calls without any runtime dynamic dispatch!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Stream Overloading Bug: Forgetting by-reference return (<code>ostream&amp;</code>)
                    </div>
                    <div class="error-code-snippet">
void operator<<(std::ostream& os, const Point& p) { // BUG: Return type 'void' breaks chaining!
    os << "(" << p.x << ", " << p.y << ")";
}
std::cout << p1 << p2; // COMPILE ERROR: Cannot chain '<< p2' onto void return!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Stream insertion expressions chain from left to right: <code>(std::cout &lt;&lt; p1) &lt;&lt; p2;</code>. Always return a reference to the stream: <code>std::ostream&amp; operator&lt;&lt;(std::ostream&amp; os, const Point&amp; p) { os &lt;&lt; ...; return os; }</code>.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 11: File Handling
        // =========================================================================
        if (modId === "mod-11" || subId.startsWith("mod-11-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "OS KERNEL FILE DESCRIPTOR TABLE & BUFFERED STREAM I/O",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                            <div class="g-node-title">std::ofstream / cout</div>
                            <div class="g-node-value">User-Space Buffer (4KB)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-water"></i><span style="font-size:10px;">Flush / endl</span></div>
                        <div class="g-node highlight-cyan" style="width:140px; padding:10px;">
                            <div class="g-node-title">OS Kernel Page Cache</div>
                            <div class="g-node-value">write() Syscall / VFS</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-hard-drive"></i></div>
                        <div class="g-node highlight-green" style="width:135px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Physical Disk / NVMe</div>
                            <div class="g-node-value" style="color:#10b981;">Persistent Sector Write</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Stream Buffering:</strong> Writing to <code>std::ofstream</code> does not write directly to disk on every <code>&lt;&lt;</code>; data aggregates inside a 4KB user buffer for speed.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">RAII Constructor Open</div>
                            <div class="g-node-value"><code>std::ifstream file("data.txt");</code></div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-lock"></i></div>
                        <div class="g-node highlight-green" style="width:170px;">
                            <div class="g-node-title">RAII Scope Exit Close</div>
                            <div class="g-node-value">Destructor auto-calls <code>file.close()</code>!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Zero Resource Leaks:</strong> RAII guarantees OS file handles (<code>FDs</code>) are closed automatically even when exceptions occur.</p>`,
                `+-------------------------------------------------------------------------+
| FILE STREAM OPEN MODES (<code>std::ios_base::openmode</code>)                      |
+-------------------------------------------------------------------------+
| Mode Flag        | Action when Open / Writing                           |
+------------------+------------------------------------------------------+
| std::ios::in     | Open file for Reading (<code>ifstream</code> default)           |
| std::ios::out    | Open file for Writing (<code>ofstream</code> default, truncates)|
| std::ios::app    | Append mode: all writes seek directly to end of file |
| std::ios::binary | Read/Write raw bytes without line-break translation  |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: File Descriptor Tables & Syscall Overhead
                    </div>
                    <p class="deep-concept-text">
                        When you instantiate <code>std::ifstream file("app.log")</code>, the C++ runtime issues an OS <code>open()</code> system call (<code>or CreateFileW on Windows</code>). The operating system allocates an entry in the process <code>File Descriptor Table (<code>FD Table</code>)</code> pointing to a kernel <code>inode</code> block. To prevent performance-destroying context switches into ring-0 kernel mode on every single character write, C++ <code>iostream</code> maintains a 4KB user-space buffer (<code>std::filebuf</code>). Only when this buffer fills, or when <code>std::endl / file.flush()</code> is called, does the runtime trigger the <code>write()</code> system call to persist bytes to the page cache!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical Performance Sink: Abusing <code>std::endl</code> inside tight file loops
                    </div>
                    <div class="error-code-snippet">
std::ofstream out("dump.csv");
for(int i=0; i<100000; i++) {
    out << i << "," << i*2 << std::endl; // CRITICAL SLOWDOWN: std::endl forces OS syscall flush on EVERY row!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> <code>std::endl</code> does TWO things: it writes a newline character <code>\n</code> AND calls <code>stream.flush()</code>. Flushing triggers an expensive OS system call (<code>context switch</code>). To write large data up to <code>100x faster</code>, use <code>\n</code> (<code>out &lt;&lt; i &lt;&lt; "\n";</code>) so the 4KB buffer handles batch flushing!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 12: Preprocessor Directives & Templates
        // =========================================================================
        if (modId === "mod-12" || subId.startsWith("mod-12-")) {
            if (subId === "mod-12-1" || subTitle.includes("preprocessor")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "PREPROCESSOR MACRO REPLACEMENT & HEADER EXPANSION MAP",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:16px;">
                            <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                                <div class="g-node-title">#include &lt;header.h&gt;</div>
                                <div class="g-node-value">#define MAX 100</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-copy"></i></div>
                            <div class="g-node highlight-cyan" style="width:145px; padding:10px;">
                                <div class="g-node-title">Textual Copy-Paste</div>
                                <div class="g-node-value">Expands macros before AST</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-check"></i></div>
                            <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">Translation Unit (.i)</div>
                                <div class="g-node-value" style="color:#10b981;">Ready for C++ Compiler</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pure Text Substitution:</strong> The preprocessor knows zero C++ grammar rules; it operates purely on token replacement!</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">Include Guard / #pragma once</div>
                                <div class="g-node-value">Prevents duplicate struct definitions</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-shield"></i></div>
                            <div class="g-node highlight-green" style="width:180px;">
                                <div class="g-node-title">Safe Header Compilation</div>
                                <div class="g-node-value">Guarantees One Definition Rule (<code>ODR</code>)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why <code>#pragma once</code> is mandatory:</strong> Without guards, including <code>header.h</code> twice causes <code>Redefinition of class</code> errors.</p>`,
                    `+-------------------------------------------------------------------------+
| MACRO vs CONSTEXPR / INLINE FUNCTION SAFETY COMPARISON                  |
+-------------------------------------------------------------------------+
| Feature           | #define SQR(x) (x*x)    | inline constexpr int sqr(int x)|
+-------------------+-------------------------+--------------------------------+
| Type Safety       | NONE (Raw text paste)   | FULL C++ type checking       |
| Debugging Symbols | Invisible in debugger   | Fully traceable in GDB/VS    |
| Side Effects      | SQR(i++) increments 2x! | Safe: evaluated exactly once   |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: The Preprocessor Pipeline & Macro Hazards
                        </div>
                        <p class="deep-concept-text">
                            The C++ Preprocessor (<code>cpp</code>) executes immediately prior to the compiler lexical analyzer (<code>AST generator</code>). It handles directives beginning with <code>#</code> (<code>#include, #define, #ifdef, #pragma</code>). When <code>#include "header.h"</code> is processed, the preprocessor opens <code>header.h</code> and literally pastes its entire contents into the <code>.cpp</code> file to form a <code>Translation Unit (.i)</code>. Because <code>#define</code> macros do not respect C++ scope or type rules, modern professional C++ (<code>C++11/20</code>) strongly favors <code>constexpr variables</code> and <code>inline functions</code> over macros!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Macro Evaluation Trap: Double Evaluation Side-Effect
                        </div>
                        <div class="error-code-snippet">
#define MAX(a, b) ((a) > (b) ? (a) : (b))
int x = 5;
int best = MAX(x++, 10); // Expands to: ((x++) > (10) ? (x++) : (10))
// BUG: x is incremented TWICE if x > 10, leading to unexpected state drift!
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> Because <code>#define</code> simply pastes text, <code>x++</code> appears multiple times inside the expanded ternary expression. Always use <code>std::max(x++, 10)</code> (<code>template function</code>) or <code>constexpr / inline functions</code> which evaluate arguments exactly once!
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            // Templates & Metaprogramming
            diagramHtml = app.generateGraphicalDiagramCard(
                "TEMPLATE MONOMORPHIZATION & COMPILE-TIME CODE GENERATION",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:140px; padding:10px;">
                            <div class="g-node-title">template&lt;class T&gt;</div>
                            <div class="g-node-value">class Vector { ... };</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-clone"></i><span style="font-size:10px;">Instantiate</span></div>
                        <div class="g-node highlight-cyan" style="width:140px; padding:10px;">
                            <div class="g-node-title">Vector&lt;int&gt; v1;</div>
                            <div class="g-node-value">Emits <code>Vector_int</code> class</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-clone"></i></div>
                        <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Vector&lt;double&gt; v2;</div>
                            <div class="g-node-value" style="color:#10b981;">Emits <code>Vector_double</code> class</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Monomorphization:</strong> Templates are blueprints. The compiler emits separate, highly optimized machine code for each type used!</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:180px;">
                            <div class="g-node-title">Compile-Time Duck Typing</div>
                            <div class="g-node-value">Checks type requirements in AST</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-green" style="width:180px;">
                            <div class="g-node-title">Zero Runtime Overhead</div>
                            <div class="g-node-value">Exact native assembly execution (<code>O(1)</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Templates Beat Java Generics:</strong> C++ templates do NOT use type erasure; <code>Vector&lt;int&gt;</code> stores direct raw 4-byte integers in RAM.</p>`,
                `+-------------------------------------------------------------------------+
| COMPILE-TIME TEMPLATES vs RUNTIME POLYMORPHISM (VIRTUAL FUNCTIONS)      |
+-------------------------------------------------------------------------+
| Metric             | C++ Templates (Static)   | Virtual VTable (Dynamic)|
+--------------------+--------------------------+-------------------------+
| Dispatch Cost      | 0 Clock cycles (Direct)  | ~3-5 cycles (Indirect jump)|
| Inlining Capability| 100% Inlineable (-O3)    | Difficult / Rarely Inlined|
| Binary Code Size   | Can grow (<code>Code Bloat</code>)  | Compact single function |
| Flexibility        | Solved at Compile Time   | Run-time dynamic choice |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Monomorphization & Compile-Time Metaprogramming
                    </div>
                    <p class="deep-concept-text">
                        Unlike Java/C# generics which erase type information at runtime via <code>Type Erasure</code>, C++ templates employ <code>Monomorphization</code>. When the compiler sees <code>std::vector&lt;int&gt;</code> and <code>std::vector&lt;double&gt;</code>, it synthesizes two entirely separate, fully optimized concrete classes at compile time. This allows the compiler to inline member operations and vectorize loops using hardware <code>SIMD</code> instructions (<code>AVX2/AVX-512</code>), delivering native execution speed without any virtual dispatch overhead!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Linker Error: Template Implementation Separated into <code>.cpp</code> File
                    </div>
                    <div class="error-code-snippet">
// Stack.h: template<typename T> class Stack { void push(T val); };
// Stack.cpp: template<typename T> void Stack<T>::push(T val) { ... }
// main.cpp: Stack<int> s; s.push(10); 
// ERROR LNK2019: Unresolved external symbol 'Stack<int>::push(int)'!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Because templates are compile-time blueprints, the compiler must see the <code>full method definition (<code>.tpp or inside header .h</code>)</code> whenever a new type instantiation (<code>Stack&lt;int&gt;</code>) is requested. Never put template definitions inside separate <code>.cpp</code> files without explicit instantiation!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 13: C++ Projects (Bank & Hotel Management)
        // =========================================================================
        if (modId === "mod-13" || subId.startsWith("mod-13-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "ENTERPRISE N-TIER SYSTEM ARCHITECTURE & BINARY DATABASE SYNC",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                            <div class="g-node-title">Console UI Menu</div>
                            <div class="g-node-value">User CLI Navigation</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-cyan" style="width:145px; padding:10px;">
                            <div class="g-node-title">Controller / Service Layer</div>
                            <div class="g-node-value">Business Logic Validation</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-hard-drive"></i></div>
                        <div class="g-node highlight-green" style="width:140px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Binary Data Storage</div>
                            <div class="g-node-value" style="color:#10b981;">file.write((char*)&amp;obj)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Production Architecture:</strong> Professional C++ projects decouple presentation (<code>Menu CLI</code>), business logic, and binary persistence (<code>RAII Streams</code>).</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:180px;">
                            <div class="g-node-title">Binary Serialization</div>
                            <div class="g-node-value"><code>file.write((char*)&amp;acc, sizeof(acc));</code></div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-green" style="width:180px;">
                            <div class="g-node-title">O(1) Instant Record Read</div>
                            <div class="g-node-value"><code>file.seekg(pos * sizeof(acc));</code></div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Binary Mode (<code>ios::binary</code>) is Fast:</strong> Directly reading struct memory blocks from disk avoids text string parsing overhead.</p>`,
                `+-------------------------------------------------------------------------+
| PROJECT PERSISTENCE: TEXT vs BINARY STREAM STORAGE MATRIX               |
+-------------------------------------------------------------------------+
| Attribute        | Text Mode (<code>ios::out</code>)  | Binary Mode (<code>ios::binary</code>)|
+------------------+-------------------------+----------------------------+
| Speed / Parsing  | Slower (string conversions)| Instant <code>O(1)</code> memory copy |
| Random Access    | Hard (variable line sizes)| Easy (<code>seekg / seekp</code>)     |
| Human Readable   | Yes (Notepad readable)  | No (Raw memory dump)       |
| Precision Loss   | Can lose double precision| 100% exact bit restoration |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Binary Serialization & Random-Access File Seek
                    </div>
                    <p class="deep-concept-text">
                        When building robust systems (<code>Bank Management or Hotel Billing System</code>), storing records as plain text (<code>CSV/JSON</code>) requires expensive parsing loops and string conversions. Professional C++ applications serialize POD (<code>Plain Old Data</code>) structs directly to disk using <code>std::ios::binary</code> mode: <code>file.write(reinterpret_cast&lt;char*&gt;(&amp;account), sizeof(BankAccount))</code>. Because all records have an exact fixed size (<code>sizeof(Account)</code>), updating account #50 only requires jumping directly to byte offset <code>50 * sizeof(Account)</code> via <code>file.seekp(offset)</code> and overwriting the record in <code>O(1)</code> disk time!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Serialization Fatal Bug: Serializing Dynamic Pointers or <code>std::string</code> to Binary File
                    </div>
                    <div class="error-code-snippet">
struct BadAccount {
    std::string name; // BUG: Contains internal heap pointer!
    int* history;     // BUG: Pointer to dynamic memory!
};
file.write((char*)&my_acc, sizeof(BadAccount)); // CRITICAL CRASH ON READ!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Classes like <code>std::string</code> or raw pointers (<code>int*</code>) store memory addresses pointing into the dynamic heap (<code>0x7FF0...</code>). Serializing them to disk writes the <code>virtual memory address</code>, NOT the actual character data! When reloaded later, the pointer points to invalid memory (<code>SIGSEGV</code>). For binary <code>file.write()</code>, always use fixed char arrays: <code>char name[64];</code>!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        return null;
    }
};
