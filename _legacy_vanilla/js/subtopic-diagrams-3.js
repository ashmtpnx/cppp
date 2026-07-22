// C++ & DSA MasterClass Pro - Subtopic Diagrams Part 3 (Modules 14 to 24)
// Covers DSA Introduction, Stacks, Queues, Singly/Doubly/Circular Linked Lists, Searching, Sorting, Trees (BST), Address Calculation, and Graphs.

window.SubtopicDiagramsEnginePart3 = {
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
        // MODULE 14: DSA C++ Introduction
        // =========================================================================
        if (modId === "mod-14" || subId.startsWith("mod-14-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "ABSTRACT DATA TYPES (<code>ADT</code>) LOGICAL VIEW vs PHYSICAL MEMORY LAYOUT",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-purple" style="width:145px; padding:10px;">
                            <div class="g-node-title">Logical ADT Interface</div>
                            <div class="g-node-value">Stack / Queue / List</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-code-branch"></i></div>
                        <div class="g-node highlight-cyan" style="width:145px; padding:10px;">
                            <div class="g-node-title">Contiguous Arena</div>
                            <div class="g-node-value">Array / Vector (<code>O(1)</code> index)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-not-equal"></i></div>
                        <div class="g-node highlight-green" style="width:145px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Linked Node Arena</div>
                            <div class="g-node-value" style="color:#10b981;">Pointers (<code>O(1)</code> insert)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial ADT Separation:</strong> Data structures separate *what* operations are allowed (<code>push/pop</code>) from *how* memory is physically structured (<code>Arrays vs Pointers</code>).</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">Time vs Space Tradeoff</div>
                            <div class="g-node-value">Arrays: Fast search, costly resize</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-scale-balanced"></i></div>
                        <div class="g-node highlight-purple" style="width:170px;">
                            <div class="g-node-title">Dynamic Node Layout</div>
                            <div class="g-node-value">Lists: Instant resize, slow lookup</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Prerequisite Mastery Matters:</strong> Choosing the right memory structure determines whether an algorithm runs in milliseconds or days.</p>`,
                `+-------------------------------------------------------------------------+
| DSA PHYSICAL MEMORY LAYOUT TRADEOFF COMPARISON MATRIX                   |
+-------------------------------------------------------------------------+
| Operation      | Contiguous Array (Vector) | Linked Node Chain (List)   |
+----------------+---------------------------+----------------------------+
| Random Access  | O(1) Instant Cache Burst  | O(N) Sequential Pointer Hop|
| Insert at Head | O(N) Shift all elements   | O(1) Instant pointer rewiring|
| Memory Overhead| 0 bytes per element       | 8 bytes pointer per node   |
| Cache Locality | 100% L1/L2 Hardware Hit   | Poor (Scattered heap nodes)|
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Logical ADTs & Physical Hardware Locality
                    </div>
                    <p class="deep-concept-text">
                        An <code>Abstract Data Type (ADT)</code> is a mathematical specification of a set of data and operations (<code>e.g., Stack ADT requires LIFO push/pop</code>). However, when implementing ADTs in C++, software architects must choose between two distinct physical memory topologies: <code>Contiguous Arenas (<code>std::vector</code>)</code> vs <code>Linked Node Graphs (<code>std::list</code>)</code>. While node graphs allow <code>O(1)</code> insertions anywhere given a pointer, contiguous arrays dominate real-world CPU performance due to hardware L1/L2 cache prefetching!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Beginner Trap: Confusing ADT Operations with Physical Limitations
                    </div>
                    <div class="error-code-snippet">
std::list<int> my_list = {10, 20, 30};
int val = my_list[1]; // COMPILE ERROR: 'std::list' does not provide subscript operator []!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> A linked list (<code>std::list</code>) does not store elements in contiguous RAM blocks; each node only knows the memory address of the next node. Thus, <code>O(1)</code> direct indexing (<code>my_list[i]</code>) is impossible! Always use <code>std::vector&lt;int&gt;</code> when direct indexed access (<code>arr[i]</code>) is required.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 15: Stack in DSA using C++
        // =========================================================================
        if (modId === "mod-15" || subId.startsWith("mod-15-")) {
            if (subId === "mod-15-3" || subTitle.includes("infix") || subTitle.includes("postfix")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "SHUNTING YARD INFIX TO POSTFIX EVALUATION STACK",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:16px;">
                            <div class="g-node highlight-purple" style="width:140px; padding:10px;">
                                <div class="g-node-title">Infix Expression</div>
                                <div class="g-node-value">3 + 4 * 2 / ( 1 - 5 )</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-bolt"></i></div>
                            <div class="g-node highlight-cyan" style="width:140px; padding:10px;">
                                <div class="g-node-title">Operator Stack</div>
                                <div class="g-node-value">Precedence Check (<code>* / + -</code>)</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-check"></i></div>
                            <div class="g-node highlight-green" style="width:145px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">Postfix Output (RPN)</div>
                                <div class="g-node-value" style="color:#10b981;">3 4 2 * 1 5 - / +</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Expression Parsing:</strong> Compilers convert infix human notation into <code>Reverse Polish Notation (RPN)</code> for instant stack evaluation.</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">Pop 2 Operands on Operator</div>
                                <div class="g-node-value"><code>op2 = stack.pop(); op1 = stack.pop();</code></div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-calculator"></i></div>
                            <div class="g-node highlight-green" style="width:180px;">
                                <div class="g-node-title">Push Result Back</div>
                                <div class="g-node-value"><code>stack.push(op1 + op2);</code> (<code>O(1)</code> Step)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Postfix Requires Zero Parentheses:</strong> Operator precedence is structurally embedded into the element ordering!</p>`,
                    `+-------------------------------------------------------------------------+
| OPERATOR PRECEDENCE & ASSOCIATIVITY RULES FOR SHUNTING YARD             |
+-------------------------------------------------------------------------+
| Operator | Precedence Level | Associativity | Action on Stack Encounter |
+----------+------------------+---------------+---------------------------+
| ^ (Power)| 3 (Highest)      | Right-to-Left | Push onto operator stack  |
| *   /    | 2                | Left-to-Right | Pop & output equal/higher |
| +   -    | 1 (Lowest)       | Left-to-Right | Pop & output equal/higher |
| (        | 0 (Special)      | N/A           | Always push directly      |
| )        | 0 (Special)      | N/A           | Pop operators until <code>(</code>   |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: Compiler Arithmetic Expression Trees & RPN
                        </div>
                        <p class="deep-concept-text">
                            When C++ compilers parse mathematical formulas (<code>int res = a + b * c;</code>), they cannot execute operators strictly left-to-right due to operator precedence rules. Compilers use Dijkstra's <code>Shunting Yard Algorithm</code> alongside an <code>Operator Stack</code> to convert infix expressions into <code>Reverse Polish Notation (Postfix)</code>. Once in postfix form (<code>a b c * +</code>), CPU stack machines or abstract syntax trees (<code>AST</code>) evaluate the formula in a single <code>O(N)</code> linear pass without needing parentheses!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Stack Underflow Bug: Invalid Postfix Operand Order (<code>op1 vs op2</code>)
                        </div>
                        <div class="error-code-snippet">
// When evaluating subtraction '-' in Postfix "10 5 -":
int op1 = stack.top(); stack.pop(); // First popped is 5 (RIGHT OPERAND!)
int op2 = stack.top(); stack.pop(); // Second popped is 10 (LEFT OPERAND!)
int res = op1 - op2; // BUG: 5 - 10 = -5! (Correct is op2 - op1 = 10 - 5 = 5!)
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> Because stacks operate strictly LIFO (<code>Last-In, First-Out</code>), the first value popped when an operator is encountered is always the <code>Right-Hand Operand (<code>op2</code>)</code>, and the second popped is the <code>Left-Hand Operand (<code>op1</code>)</code>. Always compute: <code>op2 - op1</code> or <code>op2 / op1</code>!
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            diagramHtml = app.generateGraphicalDiagramCard(
                "LIFO STACK ARRAY TOP POINTER & OVERFLOW/UNDERFLOW BOUNDS",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px; flex-direction:column;">
                        <div class="g-node highlight-green" style="width:230px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">top -&gt; arr[2] = 42 ★</div>
                            <div class="g-node-value" style="color:#10b981;">Push / Pop happen strictly here (<code>O(1)</code>)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-up-long"></i></div>
                        <div class="g-node highlight-cyan" style="width:230px; padding:10px;">
                            <div class="g-node-title">arr[1] = 25</div>
                            <div class="g-node-value">Middle Stack Slot</div>
                        </div>
                        <div class="g-node highlight-purple" style="width:230px; padding:10px;">
                            <div class="g-node-title">arr[0] = 10</div>
                            <div class="g-node-value">Base Stack Slot (<code>top == 0</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial LIFO Mechanics:</strong> <code>Last-In, First-Out</code> guarantees the most recently added item (<code>42</code>) is the first item removed.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-purple" style="width:170px;">
                            <div class="g-node-title">push(x) Operation</div>
                            <div class="g-node-value"><code>arr[++top] = x;</code> (<code>O(1)</code>)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-retweet"></i></div>
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">pop() Operation</div>
                            <div class="g-node-value"><code>return arr[top--];</code> (<code>O(1)</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Zero Array Shifting:</strong> Because elements are added and removed strictly at <code>top</code>, neither push nor pop requires shifting data.</p>`,
                `+-------------------------------------------------------------------------+
| STACK BOUNDARY CONDITIONS (<code>MAX_SIZE = 100</code>)                            |
+-------------------------------------------------------------------------+
| Condition        | Check Expression     | Action / Consequence          |
+------------------+----------------------+-------------------------------+
| Stack Empty      | top == -1            | pop() causes UNDERFLOW CRASH  |
| 1 Element        | top == 0             | Valid single item             |
| Stack Full       | top == MAX_SIZE - 1  | push() causes OVERFLOW CRASH  |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: LIFO Array Indexing & Cache-Friendly Stack Frame
                    </div>
                    <p class="deep-concept-text">
                        An array-backed Stack (<code>LIFO</code>) maintains an integer index variable <code>top</code> initialized to <code>-1</code> (<code>signifying empty</code>). When executing <code>push(val)</code>, the CPU increments <code>top</code> (<code>++top</code>) and writes into <code>arr[top]</code>. Because <code>push</code> and <code>pop</code> exclusively mutate the memory cell at the <code>top</code> boundary, stack operations achieve deterministic <code>O(1) constant time complexity</code> and maintain 100% L1 cache locality without memory fragmentation!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical Boundary Bug: Stack Underflow / Overflow Without Guard Checks
                    </div>
                    <div class="error-code-snippet">
int pop() {
    // BUG: Missing check for (top == -1)!
    return arr[top--]; // When top is -1, reads arr[-1] (Out of Bounds Memory Crash!)
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Always verify boundary conditions before modifying array pointers! For pop: <code>if (top == -1) { throw std::underflow_error("Stack Empty"); }</code>. For push: <code>if (top == MAX - 1) { throw std::overflow_error("Stack Full"); }</code>.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 16: Queue in DSA using C++
        // =========================================================================
        if (modId === "mod-16" || subId.startsWith("mod-16-")) {
            if (subId === "mod-16-3" || subTitle.includes("limitation") || subTitle.includes("circular")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "CIRCULAR QUEUE MODULO WRAPAROUND RING BUFFER (<code>(REAR + 1) % SIZE</code>)",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                            <div class="g-node highlight-green" style="width:115px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">arr[0] = 88</div>
                                <div class="g-node-value" style="color:#10b981;">&lt;- rear (Wrapped!)</div>
                            </div>
                            <div class="g-node highlight-purple" style="width:115px; padding:10px;">
                                <div class="g-node-title">arr[1] = Empty</div>
                                <div class="g-node-value">Free Ring Slot</div>
                            </div>
                            <div class="g-node highlight-cyan" style="width:115px; padding:10px;">
                                <div class="g-node-title">arr[2] = 20</div>
                                <div class="g-node-value">-&gt; front pointer</div>
                            </div>
                            <div class="g-node highlight-gold" style="width:115px; padding:10px;">
                                <div class="g-node-title">arr[3] = 45</div>
                                <div class="g-node-value">Middle Queue Item</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Modulo Ring:</strong> Notice how <code>rear</code> wraps around from index <code>3</code> back to <code>0</code>, reusing empty space left behind by <code>pop()</code>!</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-purple" style="width:190px;">
                                <div class="g-node-title">Enqueue Formula</div>
                                <div class="g-node-value"><code>rear = (rear + 1) % SIZE;</code> (<code>O(1)</code>)</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-retweet"></i></div>
                            <div class="g-node highlight-green" style="width:190px;">
                                <div class="g-node-title">Dequeue Formula</div>
                                <div class="g-node-value"><code>front = (front + 1) % SIZE;</code> (<code>O(1)</code>)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Eliminating Dead Space:</strong> The <code>% SIZE</code> modulo operation connects the end of the array back to index <code>0</code>.</p>`,
                    `+-------------------------------------------------------------------------+
| CIRCULAR QUEUE FULL vs EMPTY CONDITION TABLE (<code>SIZE = 5</code>)               |
+-------------------------------------------------------------------------+
| Condition        | Modulo Check Expression       | Why Modulo is Needed   |
+------------------+-------------------------------+------------------------+
| Queue Empty      | front == -1                   | Initial starting state |
| Queue Full       | (rear + 1) % SIZE == front    | Next slot is front!    |
| Single Element   | front == rear                 | Reset both to -1 on pop|
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: Ring Buffers & Hardware Modulo Arithmetic
                        </div>
                        <p class="deep-concept-text">
                            A Linear Queue (<code>arr[rear++]</code>) suffers from <code>Dead Space Drifting</code>: once <code>rear</code> reaches the end of the array (<code>MAX - 1</code>), no new elements can be pushed even if <code>pop()</code> has cleared indexes <code>0</code> to <code>4</code>! A <code>Circular Ring Buffer</code> solves this by replacing simple addition with modulo arithmetic: <code>rear = (rear + 1) % MAX_SIZE</code>. In high-speed OS networking kernels and audio buffers (<code>where MAX is a power of 2 like 1024</code>), compilers optimize the modulo <code>%</code> into a lightning-fast bitwise AND (<code>rear = (rear + 1) & (MAX - 1)</code>), executing in exactly <code>1 clock cycle</code>!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Full vs Empty Ambiguity Trap in Circular Queue
                        </div>
                        <div class="error-code-snippet">
// If we don't handle (front == rear) carefully:
if (front == rear) { // BUG: Is the queue completely FULL or completely EMPTY?
    // Without a count variable or sentinel check, both states look identical!
}
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> Because both an empty queue and a 1-element queue transitioning to empty can align <code>front == rear</code>, always use the standard circular full condition: <code>if ((rear + 1) % SIZE == front) { return FULL; }</code>!
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            diagramHtml = app.generateGraphicalDiagramCard(
                "FIFO LINEAR QUEUE <code>FRONT</code> & <code>REAR</code> POINTER DRIFT MAP",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node" style="width:115px; padding:10px; border-color:#ef4444; opacity:0.6;">
                            <div class="g-node-title" style="color:#ef4444;">arr[0] = Dead</div>
                            <div class="g-node-value">Popped / Wasted</div>
                        </div>
                        <div class="g-node highlight-cyan" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[1] = 10</div>
                            <div class="g-node-value">-&gt; front pointer</div>
                        </div>
                        <div class="g-node highlight-purple" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[2] = 25</div>
                            <div class="g-node-value">Middle Item</div>
                        </div>
                        <div class="g-node highlight-green" style="width:115px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">arr[3] = 42 ★</div>
                            <div class="g-node-value" style="color:#10b981;">&lt;- rear pointer</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial FIFO Drift:</strong> As items are dequeued (<code>pop</code>), <code>front</code> moves rightwards, leaving permanently dead memory behind.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-green" style="width:170px;">
                            <div class="g-node-title">enqueue(x)</div>
                            <div class="g-node-value"><code>arr[++rear] = x;</code> (<code>O(1)</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-purple" style="width:170px;">
                            <div class="g-node-title">dequeue()</div>
                            <div class="g-node-value"><code>return arr[front++];</code> (<code>O(1)</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>First-In, First-Out:</strong> The oldest element at <code>front</code> is always processed first, ideal for OS task scheduling.</p>`,
                `+-------------------------------------------------------------------------+
| LINEAR QUEUE POINTER TRACKING TABLE (<code>MAX = 4</code>)                         |
+-------------------------------------------------------------------------+
| Operation      | front Index | rear Index | Array State                 |
+----------------+-------------+------------+-----------------------------+
| Initial State  | -1          | -1         | [Empty, Empty, Empty, Empty]|
| enqueue(10)    | 0           | 0          | [10, Empty, Empty, Empty]   |
| enqueue(25)    | 0           | 1          | [10, 25, Empty, Empty]      |
| dequeue()      | 1           | 1          | [Dead, 25, Empty, Empty]    |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: FIFO Order & The Linear Queue Dead-Space Limitation
                    </div>
                    <p class="deep-concept-text">
                        A Queue (<code>FIFO - First-In, First-Out</code>) maintains two boundary pointers: <code>front</code> (<code>index of next dequeue</code>) and <code>rear</code> (<code>index of next enqueue</code>). Both operations run in <code>O(1) constant time</code> without shifting array elements. However, in a standard linear array queue, every <code>dequeue()</code> increments <code>front</code>, abandoning slots <code>0 .. front-1</code>. When <code>rear == MAX_SIZE - 1</code>, the queue reports <code>OVERFLOW</code> even if <code>front > 0</code> (<code>wasting RAM</code>). This fundamental architectural limitation motivated the invention of Circular Ring Buffers!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> False Overflow Bug: Linear Queue reporting FULL when space is available
                    </div>
                    <div class="error-code-snippet">
if (rear == MAX_SIZE - 1) {
    std::cout << "Queue Full!\n"; // BUG: Even if front == 3 (3 empty slots at start!), rejects new items!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In a linear array queue, <code>rear</code> can hit the rightmost boundary while the leftmost slots sit empty after <code>dequeue()</code>. If shifting elements <code>O(N)</code> on pop is too slow, transition to a <code>Circular Queue (<code>(rear+1)%MAX</code>)</code>!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 17, 18, 19, 20: Linked Lists (Singly, Circular, Doubly)
        // =========================================================================
        if (modId === "mod-17" || modId === "mod-18" || modId === "mod-19" || modId === "mod-20" || subId.startsWith("mod-17-") || subId.startsWith("mod-18-") || subId.startsWith("mod-19-") || subId.startsWith("mod-20-")) {
            if (modId === "mod-19" || modId === "mod-20" || subTitle.includes("doubly")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "BIDIRECTIONAL DOUBLY LINKED NODE CHAIN (<code>[*PREV|DATA|NEXT*]</code>)",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:16px; flex-wrap:wrap; justify-content:center;">
                            <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                                <div class="g-node-title">Node 1 (<code>0x200</code>)</div>
                                <div class="g-node-value">[null| 10 |0x300]</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrows-left-right"></i></div>
                            <div class="g-node highlight-cyan" style="width:130px; padding:10px;">
                                <div class="g-node-title">Node 2 (<code>0x300</code>)</div>
                                <div class="g-node-value">[0x200| 25 |0x400]</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrows-left-right"></i></div>
                            <div class="g-node highlight-green" style="width:130px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">Node 3 (<code>0x400</code>)</div>
                                <div class="g-node-value" style="color:#10b981;">[0x300| 42 |null]</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Two-Way Heap Navigation:</strong> Every node maintains two pointers (<code>prev</code> and <code>next</code>), enabling <code>O(1)</code> deletion given any node address!</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">Insert Between A &amp; B</div>
                                <div class="g-node-value">4 pointer reassignments (<code>O(1)</code>)</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-code-compare"></i></div>
                            <div class="g-node highlight-purple" style="width:180px;">
                                <div class="g-node-title">Delete Node X</div>
                                <div class="g-node-value"><code>X-&gt;prev-&gt;next = X-&gt;next;</code></div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Doubly Beats Singly for LRU Caches:</strong> Instant bidirectional rewiring allows popping arbitrary items without searching from <code>head</code>.</p>`,
                    `+-------------------------------------------------------------------------+
| SINGLY vs DOUBLY LINKED LIST PERFORMANCE & MEMORY COMPARISON            |
+-------------------------------------------------------------------------+
| Metric             | Singly Linked List       | Doubly Linked List      |
+--------------------+--------------------------+-------------------------+
| Node Memory Size   | Data + 8B <code>next</code> pointer | Data + 16B (<code>prev+next</code>)|
| Delete Given Node* | O(N) Must find previous  | O(1) Instant <code>prev->next</code>|
| Traversal Direction| Forward Only (<code>head-></code>)  | Forward & Backward      |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: Bidirectional Graph Rewiring & LRU Cache Engine
                        </div>
                        <p class="deep-concept-text">
                            A Doubly Linked List node (<code>struct Node { T data; Node* prev; Node* next; }</code>) doubles the pointer memory overhead (<code>16 bytes per node on 64-bit systems</code>) compared to Singly Linked Lists. However, this extra <code>prev</code> pointer unlocks a major algorithmic superpower: <code>O(1) Arbitrary Node Deletion</code>. When deleting a node <code>X</code> in a Singly Linked List, you must traverse <code>O(N)</code> from <code>head</code> to find its predecessor. In a Doubly Linked List, <code>X->prev</code> immediately gives the predecessor, making it the foundational architecture for enterprise <code>LRU (<code>Least Recently Used</code>) Caches</code>!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Pointer Corruption Bug: Forgetting to update <code>prev</code> on Insertion/Deletion
                        </div>
                        <div class="error-code-snippet">
// When inserting new_node right after 'cur':
new_node->next = cur->next;
cur->next = new_node;
// BUG: Forgot to update (new_node->next->prev = new_node)! 
// Backward traversal ->prev will jump straight past new_node into corrupted state!
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> Doubly linked list modifications require exactly <code>4 pointer updates</code> (<code>new->next, new->prev, cur->next, next_node->prev</code>). Always update both forward (<code>->next</code>) and backward (<code>->prev</code>) links simultaneously!
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            // Singly / Circular Linked List
            diagramHtml = app.generateGraphicalDiagramCard(
                "SINGLY LINKED LIST HEAP NODE CHAIN (<code>[DATA|NEXT*] -&gt; NULLPTR</code>)",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                            <div class="g-node-title">head (<code>0x500</code>)</div>
                            <div class="g-node-value">[ 10 | 0x8A4 ]</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-cyan" style="width:130px; padding:10px;">
                            <div class="g-node-title">Node 2 (<code>0x8A4</code>)</div>
                            <div class="g-node-value">[ 25 | 0x9C0 ]</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-green" style="width:130px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">tail (<code>0x9C0</code>)</div>
                            <div class="g-node-value" style="color:#10b981;">[ 42 | nullptr ]</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Scattered Heap Memory:</strong> Nodes live at random memory addresses (<code>0x500 -> 0x8A4 -> 0x9C0</code>), linked strictly by pointers.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:180px;">
                            <div class="g-node-title">Insert at Head (<code>O(1)</code>)</div>
                            <div class="g-node-value"><code>new->next = head; head = new;</code></div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-purple" style="width:180px;">
                            <div class="g-node-title">Search Value (<code>O(N)</code>)</div>
                            <div class="g-node-value">Must hop pointer-by-pointer from head</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Dynamic Sizing:</strong> Linked lists never require doubling array capacity (<code>realloc</code>); they allocate exact individual heap nodes via <code>new Node()</code>.</p>`,
                `+-------------------------------------------------------------------------+
| SINGLY LINKED LIST POINTER REWIRING STEPS FOR INSERTION AT HEAD         |
+-------------------------------------------------------------------------+
| Step | Action Code                   | Pointer State Change             |
+------+-------------------------------+----------------------------------+
| 1    | Node* n = new Node(99);       | Allocate <code>n</code> in heap (<code>[99|?]</code>)  |
| 2    | n->next = head;               | Point <code>n->next</code> to old head      |
| 3    | head = n;                     | Update <code>head</code> to point to <code>n</code>    |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Dynamic Heap Node Chains & Cache Locality Misses
                    </div>
                    <p class="deep-concept-text">
                        A Singly Linked List (<code>struct Node { int data; Node* next; }</code>) allocates each node independently on the dynamic heap (<code>new Node()</code>). Because allocations occur at different times, nodes are scattered across non-contiguous RAM pages (<code>e.g., 0x500 then 0x8A4</code>). While this enables instant <code>O(1)</code> node insertion/deletion without shifting array elements, traversing a linked list triggers high L1/L2 CPU hardware cache misses (<code>Pointer Chasing Delay</code>), making traversal up to 10x to 50x slower than contiguous vectors!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Segmentation Fault: Dereferencing <code>head</code> or <code>next</code> when <code>nullptr</code>
                    </div>
                    <div class="error-code-snippet">
void printList(Node* head) {
    // BUG: If head is nullptr (empty list), head->data immediately crashes!
    while (head->next != nullptr) { // BUG: Skips final node AND crashes on empty list!
        std::cout << head->data;
        head = head->next;
    }
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Always use the canonical traversal condition: <code>while (head != nullptr) { std::cout &lt;&lt; head-&gt;data; head = head-&gt;next; }</code>. This correctly handles empty lists (<code>head == nullptr</code>) and processes every single node safely!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 21: Searching and Sorting in DSA
        // =========================================================================
        if (modId === "mod-21" || subId.startsWith("mod-21-")) {
            if (subId === "mod-21-3" || subTitle.includes("binary search")) {
                diagramHtml = app.generateGraphicalDiagramCard(
                    "BINARY SEARCH <code>O(LOG N)</code> SEARCH SPACE HALVING PIPELINE",
                    `<div class="iso-3d-stage">
                        <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                            <div class="g-node highlight-cyan" style="width:115px; padding:10px;">
                                <div class="g-node-title">low = 0</div>
                                <div class="g-node-value">arr[0] = 10</div>
                            </div>
                            <div class="g-node highlight-green" style="width:130px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                                <div class="g-node-title" style="color:#10b981;">mid = (low+high)/2 ★</div>
                                <div class="g-node-value" style="color:#10b981;">arr[mid] = 45 (<code>Target?</code>)</div>
                            </div>
                            <div class="g-node highlight-purple" style="width:115px; padding:10px;">
                                <div class="g-node-title">high = 6</div>
                                <div class="g-node-value">arr[6] = 99</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Halving:</strong> At each step, Binary Search eliminates exactly 50% of remaining array elements (<code>log2(N)</code> steps)!</p>`,
                    `<div class="svg-2d-stage">
                        <div class="graphical-2d-flow" style="gap:20px;">
                            <div class="g-node highlight-gold" style="width:180px;">
                                <div class="g-node-title">If Target &lt; arr[mid]</div>
                                <div class="g-node-value"><code>high = mid - 1;</code> (Search Left)</div>
                            </div>
                            <div class="g-arrow"><i class="fa-solid fa-code-compare"></i></div>
                            <div class="g-node highlight-purple" style="width:180px;">
                                <div class="g-node-title">If Target &gt; arr[mid]</div>
                                <div class="g-node-value"><code>low = mid + 1;</code> (Search Right)</div>
                            </div>
                        </div>
                    </div>
                    <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Mandatory Prerequisite:</strong> The array MUST be strictly sorted (<code>O(N log N)</code> sort) before Binary Search can be applied.</p>`,
                    `+-------------------------------------------------------------------------+
| BINARY SEARCH vs LINEAR SEARCH EXECUTION STEPS (<code>N = 1,000,000</code>)        |
+-------------------------------------------------------------------------+
| Algorithm     | Worst-Case Steps | Complexity | Prerequisite            |
+---------------+------------------+------------+-------------------------+
| Linear Search | 1,000,000 checks | O(N)       | None (Works on any array)|
| Binary Search | ~20 checks only! | O(log N)   | Array MUST be sorted    |
+-------------------------------------------------------------------------+`
                );
                deepConceptHtml = `
                    <div class="deep-concept-box">
                        <div class="deep-concept-title">
                            <i class="fa-solid fa-microchip"></i> Deep Architecture: Logarithmic Search Space Halving & Overflow Prevention
                        </div>
                        <p class="deep-concept-text">
                            Binary Search operates by continually dividing a sorted contiguous memory block in half (<code>Divide and Conquer</code>). By comparing target value <code>X</code> with <code>arr[mid]</code>, the CPU eliminates <code>N/2</code> elements in a single comparison. For 1 billion elements, Binary Search finds the target in just <code>30 hardware comparisons (<code>log2(10^9) ≈ 30</code>)</code>! When computing midpoint, never use <code>(low + high) / 2</code> because <code>low + high</code> can exceed 2,147,483,647 (<code>Integer Overflow</code>). Always use: <code>mid = low + (high - low) / 2</code>!
                        </p>
                    </div>
                `;
                errorHtml = `
                    <div class="error-box">
                        <div class="error-title">
                            <i class="fa-solid fa-triangle-exclamation"></i> Integer Overflow Trap: <code>mid = (low + high) / 2</code>
                        </div>
                        <div class="error-code-snippet">
int low = 1500000000;
int high = 1800000000;
int mid = (low + high) / 2; // BUG: 1.5B + 1.8B = 3.3 Billion! Overflows 32-bit signed int!
// Result wraps to negative -994967296, causing immediate array out-of-bounds crash!
                        </div>
                        <p class="error-fix">
                            <strong>Why it happens & How to Fix:</strong> In C++, <code>(low + high)</code> is computed before division. To prevent overflow without using 64-bit integers, write: <code>int mid = low + (high - low) / 2;</code> (or <code>std::midpoint(low, high)</code> in C++20).
                        </p>
                    </div>
                `;
                return { diagramHtml, deepConceptHtml, errorHtml };
            }

            diagramHtml = app.generateGraphicalDiagramCard(
                "LINEAR SEARCH <code>O(N)</code> SEQUENTIAL INDEX TRAVERSAL FLOW",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:14px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node highlight-purple" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[0] Check</div>
                            <div class="g-node-value">No Match (<code>i++</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-cyan" style="width:115px; padding:10px;">
                            <div class="g-node-title">arr[1] Check</div>
                            <div class="g-node-value">No Match (<code>i++</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-green" style="width:125px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">arr[2] == Target ★</div>
                            <div class="g-node-value" style="color:#10b981;">Return index 2!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Sequential Scan:</strong> Linear search checks elements one-by-one from left to right until the target is found.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:180px;">
                            <div class="g-node-title">Best Case Time (<code>O(1)</code>)</div>
                            <div class="g-node-value">Target is at <code>arr[0]</code></div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-bolt"></i></div>
                        <div class="g-node highlight-purple" style="width:180px;">
                            <div class="g-node-title">Worst Case Time (<code>O(N)</code>)</div>
                            <div class="g-node-value">Target at <code>arr[N-1]</code> or Not Found</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Cache Line Prefetching:</strong> Because it accesses <code>arr[0] -> arr[1] -> arr[2]</code>, Linear Search runs with 100% L1 cache burst speed!</p>`,
                `+-------------------------------------------------------------------------+
| SEARCHING TIME & SPACE COMPLEXITY SUMMARY TABLE                         |
+-------------------------------------------------------------------------+
| Algorithm     | Best Case | Average Case | Worst Case | Space Overhead  |
+---------------+-----------+--------------+------------+-----------------+
| Linear Search | O(1)      | O(N/2)       | O(N)       | O(1) In-Place   |
| Binary Search | O(1)      | O(log N)     | O(log N)   | O(1) Iterative  |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Unindexed Sequential Traversal & Cache Line Bursts
                    </div>
                    <p class="deep-concept-text">
                        Linear Search (<code>Brute-Force Scan</code>) requires zero pre-processing or array sorting. While its asymptotic worst-case complexity is <code>O(N) linear time</code>, for small array sizes (<code>N &lt; 64 elements</code>), Linear Search often outperforms Binary Search on real hardware! This occurs because sequential index progression (<code>arr[i++]</code>) triggers CPU hardware prefetchers (<code>L1 Cache Line Bursts of 64 bytes</code>), avoiding the branch mispredictions (<code>BTB flushes</code>) associated with logarithmic pointer jumps!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Sentinel Return Error: Returning <code>0</code> instead of <code>-1</code> when Not Found
                    </div>
                    <div class="error-code-snippet">
int linearSearch(int arr[], int n, int target) {
    for(int i=0; i<n; i++) { if(arr[i] == target) return i; }
    return 0; // BUG: Returning 0 means target was found at index 0!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++ arrays, index <code>0</code> is the very first valid element. If the target is not in the array, returning <code>0</code> falsely signals success at index <code>0</code>! Always return a sentinel error code: <code>return -1;</code> (or <code>std::optional&lt;size_t&gt;</code> in C++17).
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 22: Tree in DSA using C++ (BST)
        // =========================================================================
        if (modId === "mod-22" || subId.startsWith("mod-22-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "HIERARCHICAL BINARY SEARCH TREE (<code>BST</code>) RECURSIVE BRANCHING MAP",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="flex-direction:column; gap:12px;">
                        <div class="g-node highlight-green" style="width:160px; padding:8px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Root Node (<code>50</code>) ★</div>
                            <div class="g-node-value" style="color:#10b981;">[Left: 30 | Right: 70]</div>
                        </div>
                        <div class="graphical-2d-flow" style="gap:40px;">
                            <div class="g-node highlight-cyan" style="width:130px; padding:8px;">
                                <div class="g-node-title">Left Child (<code>30</code>)</div>
                                <div class="g-node-value">All items &lt; 50</div>
                            </div>
                            <div class="g-node highlight-purple" style="width:130px; padding:8px;">
                                <div class="g-node-title">Right Child (<code>70</code>)</div>
                                <div class="g-node-value">All items &gt; 50</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial BST Property:</strong> For any node <code>X</code>, all nodes in <code>X-&gt;left</code> are strictly smaller, and all in <code>X-&gt;right</code> are larger.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:180px;">
                            <div class="g-node-title">In-Order Traversal</div>
                            <div class="g-node-value"><code>Left -&gt; Root -&gt; Right</code> (<code>Sorted Output!</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-tree"></i></div>
                        <div class="g-node highlight-green" style="width:180px;">
                            <div class="g-node-title">Balanced Search Depth</div>
                            <div class="g-node-value"><code>O(log N)</code> height (<code>vs O(N) skewed</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why In-Order Traversal is Magic:</strong> Recursively visiting <code>Left, then Node, then Right</code> outputs tree numbers in strictly ascending order!</p>`,
                `+-------------------------------------------------------------------------+
| BINARY TREE TRAVERSAL ORDER COMPARISON (<code>ROOT = 50, L = 30, R = 70</code>)    |
+-------------------------------------------------------------------------+
| Traversal Type | Order Sequence      | Output Result  | Common Use Case   |
+----------------+---------------------+----------------+-------------------+
| In-Order       | Left -> Root -> Right| 30, 50, 70     | Sorted data export|
| Pre-Order      | Root -> Left -> Right| 50, 30, 70     | Tree cloning/copy |
| Post-Order     | Left -> Right -> Root| 30, 70, 50     | Safe node deletion|
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: BST Invariant & Tree Height Degeneration (<code>O(log N) vs O(N)</code>)
                    </div>
                    <p class="deep-concept-text">
                        A Binary Search Tree (<code>struct TreeNode { int val; TreeNode* left; TreeNode* right; }</code>) enforces the <code>BST Invariant</code>: <code>left->val < root->val < right->val</code>. When searching for <code>X</code>, each node comparison eliminates an entire subtree branch, yielding <code>O(log N) height</code> when balanced (<code>Red-Black / AVL tree</code>). However, if numbers are inserted in already-sorted order (<code>10, 20, 30, 40</code>), the tree degenerates into a right-leaning singly linked list (<code>O(N) worst-case height</code>)!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Memory Leak: Deleting BST using Pre-Order or In-Order instead of Post-Order
                    </div>
                    <div class="error-code-snippet">
void deleteTree(TreeNode* root) {
    if (!root) return;
    delete root; // BUG: Deleted parent node BEFORE visiting left/right children!
    deleteTree(root->left);  // CRITICAL CRASH: Accessing root->left on freed memory!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> You cannot delete a parent node and then attempt to read its <code>root->left</code> or <code>root->right</code> child pointers! Always use <code>Post-Order Traversal (<code>deleteTree(left); deleteTree(right); delete root;</code>)</code> to safely destroy children before freeing the parent.
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 23: Address Calculation in DSA
        // =========================================================================
        if (modId === "mod-23" || subId.startsWith("mod-23-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "ROW-MAJOR vs COLUMN-MAJOR 2D/3D ARRAY PHYSICAL RAM FORMULA",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px; flex-wrap:wrap; justify-content:center;">
                        <div class="g-node highlight-purple" style="width:130px; padding:10px;">
                            <div class="g-node-title">2D Matrix A[i][j]</div>
                            <div class="g-node-value">Logical Rows &amp; Cols</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-arrow-right"></i></div>
                        <div class="g-node highlight-green" style="width:150px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Row-Major RAM Strip</div>
                            <div class="g-node-value" style="color:#10b981;"><code>Base + (i*Cols + j)*sizeof(T)</code></div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial RAM Mapping:</strong> Physical RAM is strictly 1-dimensional (<code>0x00 .. 0xFF</code>). C++ flattens 2D matrices row-by-row into a single strip.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-cyan" style="width:180px;">
                            <div class="g-node-title">Fast Loop (<code>Row-Major</code>)</div>
                            <div class="g-node-value"><code>for(i) for(j) A[i][j]</code> (<code>100% Cache Hit</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-not-equal"></i></div>
                        <div class="g-node" style="border-color:#ef4444; width:180px;">
                            <div class="g-node-title" style="color:#ef4444;">Slow Loop (<code>Col-Major</code>)</div>
                            <div class="g-node-value"><code>for(j) for(i) A[i][j]</code> (<code>Cache Miss Thrashing</code>)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Why Inner Loop Variable Matters:</strong> In C++, iterating <code>j</code> (columns) in the inner loop jumps smoothly along contiguous RAM cells.</p>`,
                `+-------------------------------------------------------------------------+
| MULTIDIMENSIONAL ARRAY ADDRESS FORMULA TABLE (<code>BASE = 0x1000, SIZE = 4</code>) |
+-------------------------------------------------------------------------+
| Dimension | Formula (Row-Major Order in C++)                            |
+-----------+-------------------------------------------------------------+
| 1D arr[i] | Address = Base + i * sizeof(T)                              |
| 2D A[i][j]| Address = Base + (i * TotalCols + j) * sizeof(T)            |
| 3D A[i][j][k] | Address = Base + (i * Rows*Cols + j * Cols + k) * sizeof(T)|
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Multidimensional Linear Flattening & Row-Major Order
                    </div>
                    <p class="deep-concept-text">
                        Computer RAM does not have physical <code>rows and columns</code>; it is a single flat strip of memory addresses (<code>0x0000 to 0xFFFF</code>). When you declare a 2D array (<code>int matrix[3][4]</code>), C++ uses <code>Row-Major Order</code> (<code>storing Row 0 complete, then Row 1, then Row 2</code>). To access <code>matrix[i][j]</code>, the compiler generates the offset formula <code>&amp;A[i][j] = Base + (i * Columns + j) * sizeof(T)</code>. If you write nested loops swapping <code>i</code> and <code>j</code> (<code>outer j, inner i</code>), your code skips across memory pages on every step, causing severe L1 cache thrashing!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Cache Thrashing Bug: Iterating Columns inside Inner Loop
                    </div>
                    <div class="error-code-snippet">
int matrix[1000][1000];
// BUG: Inner loop iterates 'i' (Row index), jumping 4000 bytes forward on every step!
for(int j=0; j<1000; j++) {
    for(int i=0; i<1000; i++) { matrix[i][j] = 0; } // 10x to 20x SLOWER due to L1 cache misses!
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++, adjacent column elements <code>matrix[i][j]</code> and <code>matrix[i][j+1]</code> live right next to each other in RAM (<code>4 bytes apart</code>). Always put the column index <code>j</code> inside the innermost loop: <code>for(int i=0; i&lt;1000; i++) for(int j=0; j&lt;1000; j++) matrix[i][j] = 0;</code>!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        // =========================================================================
        // MODULE 24: Graph in DSA C++
        // =========================================================================
        if (modId === "mod-24" || subId.startsWith("mod-24-")) {
            diagramHtml = app.generateGraphicalDiagramCard(
                "ADJACENCY MATRIX vs ADJACENCY LIST GRAPH MEMORY ARCHITECTURE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-purple" style="width:150px; padding:10px;">
                            <div class="g-node-title">Adjacency Matrix</div>
                            <div class="g-node-value"><code>V x V</code> 2D Array (<code>O(V^2)</code> RAM)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-scale-balanced"></i></div>
                        <div class="g-node highlight-green" style="width:150px; padding:10px; box-shadow:0 0 20px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Adjacency List</div>
                            <div class="g-node-value" style="color:#10b981;"><code>Vector of Lists</code> (<code>O(V + E)</code> RAM)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Pictorial Graph Tradeoff:</strong> Matrices check edge existence in <code>O(1)</code> time, while Lists save massive memory on sparse graphs.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div class="g-node highlight-gold" style="width:170px;">
                            <div class="g-node-title">BFS (Breadth-First)</div>
                            <div class="g-node-value">Uses <code>std::queue</code> (<code>Level-by-Level</code>)</div>
                        </div>
                        <div class="g-arrow"><i class="fa-solid fa-project-diagram"></i></div>
                        <div class="g-node highlight-cyan" style="width:170px;">
                            <div class="g-node-title">DFS (Depth-First)</div>
                            <div class="g-node-value">Uses <code>std::stack</code> or Recursion</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>Algorithm Mapping:</strong> Graph traversals directly apply our earlier Stack (<code>LIFO</code>) and Queue (<code>FIFO</code>) data structure architectures!</p>`,
                `+-------------------------------------------------------------------------+
| GRAPH REPRESENTATION COMPLEXITY COMPARISON (<code>V</code> VERTICES, <code>E</code> EDGES)    |
+-------------------------------------------------------------------------+
| Metric             | Adjacency Matrix (<code>int G[V][V]</code>) | Adjacency List  |
+--------------------+----------------------------------+-----------------+
| Space Overhead     | O(V^2) (Wastes RAM if sparse)    | O(V + E) Compact|
| Check Edge (u -> v)| O(1) Instant array lookup        | O(Degree(u)) Hop|
| Iterate Neighbors  | O(V) Must check all columns      | O(Degree(u)) Fast|
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Deep Architecture: Sparse vs Dense Graphs & Memory Allocation Tradeoffs
                    </div>
                    <p class="deep-concept-text">
                        A Graph (<code>G = (V, E)</code>) can be stored in RAM either as an <code>Adjacency Matrix (<code>int adj[V][V]</code>)</code> or an <code>Adjacency List (<code>std::vector&lt;std::vector&lt;int&gt;&gt; adj</code>)</code>. For a social network of 100,000 users where each user only has ~50 friends (<code>Sparse Graph</code>), an Adjacency Matrix requires <code>100,000 x 100,000 x 4 bytes = 40 Gigabytes</code> of RAM (<code>mostly filled with zeros</code>)! An Adjacency List only allocates memory for actual connections (<code>O(V + E) ≈ 20 Megabytes</code>), providing a <code>2,000x space savings</code>!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Infinite Loop Crash: Forgetting <code>visited</code> boolean tracking array in DFS/BFS
                    </div>
                    <div class="error-code-snippet">
void dfs(int u, const vector<vector<int>>& adj) {
    std::cout << u << " ";
    // BUG: Missing visited[u] check! If graph has cyclic loops (A -> B -> A),
    // recursion bounces infinitely until stack overflow!
    for(int v : adj[u]) { dfs(v, adj); } 
}
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Unlike trees, graphs can contain cycles (<code>Node A links to B, B links back to A</code>). Always pass a boolean array or <code>std::vector&lt;bool&gt; visited(V, false)</code>: <code>visited[u] = true; for(int v : adj[u]) { if (!visited[v]) dfs(v, adj, visited); }</code>!
                    </p>
                </div>
            `;
            return { diagramHtml, deepConceptHtml, errorHtml };
        }

        return null;
    }
};
