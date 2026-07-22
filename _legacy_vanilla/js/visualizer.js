// C++ & DSA MasterClass Pro - Interactive Visualizers & Animations (visualizer.js)

class VisualizerEngine {
    constructor() {
        this.currentMode = 'stack';
        this.stageEl = null;

        // State for Stack
        this.stackItems = [10, 25, 64];

        // State for Queue
        this.queueItems = [14, 88, 32];
        this.qFront = 0;
        this.qRear = 2;
        this.qMax = 6;

        // State for Linked List
        this.llNodes = [101, 204, 309, 412];

        // State for Sorting Sandbox
        this.sortArray = [45, 12, 89, 23, 67, 5, 34, 91];
        this.sortInterval = null;
        this.isSorting = false;

        // State for Memory
        this.heapBlocks = [
            { id: '0x7ffd01', type: 'int*', val: '42 (Allocated via new int)' },
            { id: '0x7ffd08', type: 'Node*', val: 'Node {data: 10, next: 0x0}' }
        ];
        this.stackVars = [
            { name: 'ptr', addr: '0x10a4', pointsTo: '0x7ffd01 (Heap)' },
            { name: 'head', addr: '0x10a8', pointsTo: '0x7ffd08 (Heap)' },
            { name: 'localAge', addr: '0x10ac', pointsTo: '21 (Immediate Stack)' }
        ];
    }

    init(stageElement) {
        this.stageEl = stageElement;
        this.render();
    }

    setMode(mode) {
        if (this.sortInterval) clearInterval(this.sortInterval);
        this.isSorting = false;
        this.currentMode = mode;
        this.render();
    }

    render() {
        if (!this.stageEl) return;
        this.stageEl.innerHTML = '';

        if (this.currentMode === 'stack') {
            this.renderStackVisualizer();
        } else if (this.currentMode === 'queue') {
            this.renderQueueVisualizer();
        } else if (this.currentMode === 'linkedlist') {
            this.renderLinkedListVisualizer();
        } else if (this.currentMode === 'sorting') {
            this.renderSortingVisualizer();
        } else if (this.currentMode === 'memory') {
            this.renderMemoryVisualizer();
        }
    }

    // =========================================================================
    // 1. STACK & EXPRESSIONS VISUALIZER
    // =========================================================================
    renderStackVisualizer() {
        this.stageEl.innerHTML = `
            <div class="vis-controls-bar">
                <div class="vis-input-group">
                    <input type="number" id="stack-input-val" placeholder="Enter number (e.g. 99)" value="99">
                    <button class="vis-btn primary" onclick="visualizer.stackPush()"><i class="fa-solid fa-arrow-down"></i> Push(val)</button>
                    <button class="vis-btn" onclick="visualizer.stackPop()"><i class="fa-solid fa-arrow-up"></i> Pop()</button>
                    <button class="vis-btn" onclick="visualizer.stackPeek()"><i class="fa-solid fa-eye"></i> Peek()</button>
                    <button class="vis-btn outline" onclick="visualizer.stackClear()"><i class="fa-solid fa-trash"></i> Clear</button>
                </div>
                <div class="vis-status" id="stack-status-text">Stack Top Index: ${this.stackItems.length - 1}</div>
            </div>

            <div class="stack-visual-container">
                <div>
                    <h4 style="margin-bottom: 12px; color: var(--accent-cyan);"><i class="fa-solid fa-cubes-stacked"></i> Animated LIFO Stack Box</h4>
                    <div class="stack-box-render" id="stack-box-render">
                        ${this.stackItems.map((val, idx) => `
                            <div class="stack-item" style="${idx === this.stackItems.length - 1 ? 'border: 2px solid var(--accent-yellow);' : ''}">
                                [Index ${idx}] -> ${val} ${idx === this.stackItems.length - 1 ? ' <span style="font-size:11px; color:var(--accent-yellow)">(TOP)</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="flex: 1;">
                    <h4 style="margin-bottom: 12px; color: var(--accent-purple);"><i class="fa-solid fa-calculator"></i> Live Shunting-Yard Infix to Postfix Converter</h4>
                    <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color);">
                        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">Type an algebraic infix expression (<code>A+B*C-D</code>) and watch the stack algorithm convert it to Postfix notation instantly.</p>
                        <div class="vis-input-group" style="margin-bottom: 16px;">
                            <input type="text" id="infix-input" value="A+B*C/(D-E)" style="width: 240px; font-family: var(--font-mono);">
                            <button class="vis-btn primary" onclick="visualizer.convertInfix()"><i class="fa-solid fa-bolt"></i> Convert to Postfix</button>
                        </div>
                        <div id="postfix-output" style="font-family: var(--font-mono); font-size: 18px; color: var(--accent-emerald); font-weight: 700; background: var(--bg-card); padding: 12px 16px; border-radius: 8px;">
                            Postfix Result: A B C * D E - / +
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    stackPush() {
        const input = document.getElementById('stack-input-val');
        const val = parseInt(input.value);
        if (isNaN(val)) return app.showToast("Please enter a valid integer number to Push!", "warning");
        if (this.stackItems.length >= 7) return app.showToast("Stack Overflow! Maximum 7 items allowed in visualizer.", "warning");

        this.stackItems.push(val);
        input.value = Math.floor(Math.random() * 90) + 10;
        this.render();
        app.showToast(`Pushed value ${val} to Top of Stack. Top index is now ${this.stackItems.length - 1}.`, "success");
    }

    stackPop() {
        if (this.stackItems.length === 0) return app.showToast("Stack Underflow! Stack is currently empty.", "warning");
        const popped = this.stackItems.pop();
        this.render();
        app.showToast(`Popped value ${popped} from Top of Stack.`, "info");
    }

    stackPeek() {
        if (this.stackItems.length === 0) return app.showToast("Stack is empty. Nothing to peek!", "warning");
        const topVal = this.stackItems[this.stackItems.length - 1];
        app.showToast(`Peeked Top Element: ${topVal} at Index ${this.stackItems.length - 1}`, "success");
    }

    stackClear() {
        this.stackItems = [];
        this.render();
        app.showToast("Stack cleared completely.", "info");
    }

    convertInfix() {
        const infix = document.getElementById('infix-input').value.replace(/\s+/g, '');
        if (!infix) return;

        const precedence = (op) => {
            if (op === '^') return 3;
            if (op === '*' || op === '/') return 2;
            if (op === '+' || op === '-') return 1;
            return 0;
        };

        let st = [];
        let postfix = "";

        for (let c of infix) {
            if (/[a-zA-Z0-9]/.test(c)) {
                postfix += c + " ";
            } else if (c === '(') {
                st.push('(');
            } else if (c === ')') {
                while (st.length > 0 && st[st.length - 1] !== '(') {
                    postfix += st.pop() + " ";
                }
                if (st.length > 0) st.pop();
            } else {
                while (st.length > 0 && precedence(st[st.length - 1]) >= precedence(c)) {
                    postfix += st.pop() + " ";
                }
                st.push(c);
            }
        }
        while (st.length > 0) postfix += st.pop() + " ";

        const outputEl = document.getElementById('postfix-output');
        outputEl.innerHTML = `Postfix Result: <span style="color: #fff;">${postfix.trim()}</span>`;
        app.showToast("Successfully converted Infix to Postfix using operator stack!", "success");
    }

    // =========================================================================
    // 2. QUEUE & CIRCULAR QUEUE VISUALIZER
    // =========================================================================
    renderQueueVisualizer() {
        this.stageEl.innerHTML = `
            <div class="vis-controls-bar">
                <div class="vis-input-group">
                    <input type="number" id="queue-input-val" placeholder="Value (e.g. 50)" value="50">
                    <button class="vis-btn primary" onclick="visualizer.queueEnqueue()"><i class="fa-solid fa-plus"></i> Enqueue(val)</button>
                    <button class="vis-btn" onclick="visualizer.queueDequeue()"><i class="fa-solid fa-minus"></i> Dequeue()</button>
                    <button class="vis-btn outline" onclick="visualizer.queueClear()"><i class="fa-solid fa-rotate-left"></i> Reset Queue</button>
                </div>
                <div class="vis-status">Front Index: <strong style="color:var(--accent-cyan);">${this.qFront}</strong> | Rear Index: <strong style="color:var(--accent-emerald);">${this.qRear}</strong></div>
            </div>

            <div>
                <h4 style="margin-bottom: 16px; color: var(--accent-emerald);"><i class="fa-solid fa-left-long"></i> FIFO Linear Queue Buffer (Max Size: ${this.qMax})</h4>
                <div class="queue-box-render">
                    ${Array.from({ length: this.qMax }).map((_, idx) => {
                        const val = this.queueItems[idx];
                        const isFront = idx === this.qFront && val !== undefined && val !== null;
                        const isRear = idx === this.qRear && val !== undefined && val !== null;
                        return `
                            <div style="display:flex; flex-direction:column; align-items:center; min-width:80px;">
                                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-muted); margin-bottom:4px;">Index [${idx}]</div>
                                <div class="queue-item" style="width:100%; ${isFront ? 'border:2px solid var(--accent-cyan);' : ''} ${isRear ? 'border:2px solid var(--accent-emerald);' : ''} ${val === undefined || val === null ? 'background:var(--bg-surface); color:var(--text-muted);' : ''}">
                                    ${val !== undefined && val !== null ? val : 'EMPTY'}
                                </div>
                                <div style="font-size:11px; font-weight:700; margin-top:6px; height:18px;">
                                    ${isFront ? '<span style="color:var(--accent-cyan);">↑ FRONT</span>' : ''}
                                    ${isRear ? '<span style="color:var(--accent-emerald);">↑ REAR</span>' : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div style="margin-top: 36px; background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color);">
                <h4 style="color: var(--accent-yellow); margin-bottom: 8px;"><i class="fa-solid fa-circle-nodes"></i> Why Circular Queue Modulo Math (<code>(rear + 1) % MAX</code>) works:</h4>
                <p style="font-size: 13.5px; color: var(--text-secondary);">Notice how as elements are dequeued from Front [0], Front advances rightward. In a basic linear queue, once Rear reaches index [5], no new elements can be enqueued even if indices [0] and [1] are empty! Modulo wrapping <code>rear = (rear + 1) % 6</code> loops pointer back to index [0] seamlessly.</p>
            </div>
        `;
    }

    queueEnqueue() {
        const val = parseInt(document.getElementById('queue-input-val').value);
        if (isNaN(val)) return app.showToast("Enter a valid integer!", "warning");

        // Find next empty slot
        let nextRear = (this.qRear + 1) % this.qMax;
        if (this.queueItems[nextRear] !== undefined && this.queueItems[nextRear] !== null) {
            return app.showToast("Queue Overflow! Buffer is completely full.", "warning");
        }

        if (this.queueItems.filter(x => x !== undefined && x !== null).length === 0) {
            this.qFront = 0;
            this.qRear = 0;
        } else {
            this.qRear = nextRear;
        }

        this.queueItems[this.qRear] = val;
        document.getElementById('queue-input-val').value = Math.floor(Math.random() * 90) + 10;
        this.render();
        app.showToast(`Enqueued ${val} at Rear Index [${this.qRear}].`, "success");
    }

    queueDequeue() {
        if (this.queueItems[this.qFront] === undefined || this.queueItems[this.qFront] === null) {
            return app.showToast("Queue Underflow! Queue is empty.", "warning");
        }

        const removed = this.queueItems[this.qFront];
        this.queueItems[this.qFront] = null;

        // Check if last element removed
        const remaining = this.queueItems.filter(x => x !== undefined && x !== null).length;
        if (remaining === 0) {
            this.qFront = 0;
            this.qRear = 0;
        } else {
            this.qFront = (this.qFront + 1) % this.qMax;
        }

        this.render();
        app.showToast(`Dequeued ${removed} from Front Index.`, "info");
    }

    queueClear() {
        this.queueItems = [14, 88, 32];
        this.qFront = 0;
        this.qRear = 2;
        this.render();
        app.showToast("Queue reset to initial state.", "info");
    }

    // =========================================================================
    // 3. POINTERS & LINKED LIST VISUALIZER
    // =========================================================================
    renderLinkedListVisualizer() {
        this.stageEl.innerHTML = `
            <div class="vis-controls-bar">
                <div class="vis-input-group">
                    <input type="number" id="ll-input-val" placeholder="Node Data (e.g. 505)" value="505">
                    <button class="vis-btn primary" onclick="visualizer.llInsertHead()"><i class="fa-solid fa-left-long"></i> Insert at Head</button>
                    <button class="vis-btn" onclick="visualizer.llInsertTail()"><i class="fa-solid fa-right-long"></i> Insert at Tail</button>
                    <button class="vis-btn outline" onclick="visualizer.llDeleteHead()"><i class="fa-solid fa-trash-can"></i> Delete Head</button>
                </div>
                <div class="vis-status">Total Nodes: <strong style="color:var(--accent-cyan);">${this.llNodes.length}</strong></div>
            </div>

            <div>
                <h4 style="margin-bottom: 16px; color: var(--accent-cyan);"><i class="fa-solid fa-link"></i> Singly Linked List Node Traversal Chain (<code>Node* next</code> pointers)</h4>
                <div class="ll-container">
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-yellow); margin-right:12px;">HEAD &rarr;</div>
                    ${this.llNodes.map((val, idx) => `
                        <div class="ll-node-box">
                            <div class="ll-node-inner">
                                <div class="ll-data">${val}</div>
                                <div class="ll-next" title="Next Pointer Address">next: ${idx === this.llNodes.length - 1 ? '0x0' : '0x' + (idx+2) + 'a8'}</div>
                            </div>
                            <div class="ll-arrow">&rarr;</div>
                        </div>
                    `).join('')}
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-muted); padding:12px; background:var(--bg-surface); border-radius:8px; border:1px dashed var(--border-color);">NULL</div>
                </div>
            </div>

            <div style="margin-top: 36px; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 8px;">C++ Node Struct Code:</h4>
                    <pre style="font-family: var(--font-mono); font-size:13px; color:var(--code-text);">struct Node {
    int data;
    Node* next;
    Node(int v) : data(v), next(nullptr) {}
};</pre>
                </div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 8px;">Insertion at Head Logic (<code>O(1)</code>):</h4>
                    <pre style="font-family: var(--font-mono); font-size:13px; color:var(--code-text);">Node* newNode = new Node(val);
newNode-&gt;next = head; // 1. Point to old head
head = newNode;       // 2. Update head pointer</pre>
                </div>
            </div>
        `;
    }

    llInsertHead() {
        const val = parseInt(document.getElementById('ll-input-val').value);
        if (isNaN(val)) return;
        if (this.llNodes.length >= 8) return app.showToast("Maximum 8 nodes allowed in visualizer chain.", "warning");

        this.llNodes.unshift(val);
        document.getElementById('ll-input-val').value = Math.floor(Math.random() * 900) + 100;
        this.render();
        app.showToast(`Inserted Node(${val}) at HEAD. pointer updated instantly.`, "success");
    }

    llInsertTail() {
        const val = parseInt(document.getElementById('ll-input-val').value);
        if (isNaN(val)) return;
        if (this.llNodes.length >= 8) return app.showToast("Maximum 8 nodes allowed.", "warning");

        this.llNodes.push(val);
        document.getElementById('ll-input-val').value = Math.floor(Math.random() * 900) + 100;
        this.render();
        app.showToast(`Traversed chain and inserted Node(${val}) at TAIL.`, "success");
    }

    llDeleteHead() {
        if (this.llNodes.length === 0) return app.showToast("Linked List is already empty!", "warning");
        const removed = this.llNodes.shift();
        this.render();
        app.showToast(`Deleted Node(${removed}) from HEAD and freed heap memory block.`, "info");
    }

    // =========================================================================
    // 4. SORTING & SEARCHING SANDBOX
    // =========================================================================
    renderSortingVisualizer() {
        this.stageEl.innerHTML = `
            <div class="vis-controls-bar">
                <div class="vis-input-group">
                    <button class="vis-btn primary" onclick="visualizer.runSort('bubble')" id="btn-bubble"><i class="fa-solid fa-play"></i> Run Bubble Sort</button>
                    <button class="vis-btn" onclick="visualizer.runSort('selection')" id="btn-selection"><i class="fa-solid fa-play"></i> Run Selection Sort</button>
                    <button class="vis-btn" onclick="visualizer.randomizeSortArray()"><i class="fa-solid fa-shuffle"></i> Randomize Array</button>
                </div>
                <div class="vis-status" id="sort-commentary" style="font-weight:600; color:var(--accent-yellow);">Ready! Choose a sorting algorithm above to begin live step-by-step animation.</div>
            </div>

            <div class="sorting-bars-container" id="sorting-bars-container">
                ${this.sortArray.map((val, idx) => `
                    <div class="sort-bar" id="bar-${idx}" style="height: ${val * 2.8}px;" title="Value: ${val}">
                        ${val}
                    </div>
                `).join('')}
            </div>

            <div style="display:flex; justify-content:center; gap:20px; margin-top:16px;">
                <span style="font-size:12px; display:flex; align-items:center; gap:6px;"><div style="width:12px; height:12px; background:var(--accent-cyan); border-radius:3px;"></div> Unsorted Element</span>
                <span style="font-size:12px; display:flex; align-items:center; gap:6px;"><div style="width:12px; height:12px; background:var(--accent-yellow); border-radius:3px;"></div> Comparing (<code>A[j] vs A[j+1]</code>)</span>
                <span style="font-size:12px; display:flex; align-items:center; gap:6px;"><div style="width:12px; height:12px; background:var(--accent-pink); border-radius:3px;"></div> Swapping Elements</span>
                <span style="font-size:12px; display:flex; align-items:center; gap:6px;"><div style="width:12px; height:12px; background:var(--accent-emerald); border-radius:3px;"></div> Sorted & Locked</span>
            </div>
        `;
    }

    randomizeSortArray() {
        if (this.isSorting) clearInterval(this.sortInterval);
        this.isSorting = false;
        this.sortArray = Array.from({ length: 12 }, () => Math.floor(Math.random() * 85) + 10);
        this.render();
        app.showToast("Generated new randomized array for sorting sandbox.", "info");
    }

    runSort(algo) {
        if (this.isSorting) return app.showToast("Sorting animation already running! Please wait or click Randomize.", "warning");
        this.isSorting = true;

        const bars = () => Array.from(document.querySelectorAll('.sort-bar'));
        let n = this.sortArray.length;

        if (algo === 'bubble') {
            let i = 0, j = 0;
            const commEl = document.getElementById('sort-commentary');

            this.sortInterval = setInterval(() => {
                if (i >= n - 1) {
                    clearInterval(this.sortInterval);
                    this.isSorting = false;
                    bars().forEach(b => b.className = 'sort-bar sorted');
                    commEl.textContent = "Bubble Sort Complete! All elements sorted in ascending order (O(N²) comparisons).";
                    app.showToast("Bubble Sort animation finished!", "success");
                    return;
                }

                bars().forEach((b, idx) => {
                    if (idx < n - i) b.className = 'sort-bar';
                    else b.className = 'sort-bar sorted';
                });

                const b1 = document.getElementById(`bar-${j}`);
                const b2 = document.getElementById(`bar-${j + 1}`);

                if (b1 && b2) {
                    b1.className = 'sort-bar active-compare';
                    b2.className = 'sort-bar active-compare';
                    commEl.textContent = `Comparing indices [${j}] (${this.sortArray[j]}) and [${j+1}] (${this.sortArray[j+1]})...`;

                    if (this.sortArray[j] > this.sortArray[j + 1]) {
                        // Swap
                        let temp = this.sortArray[j];
                        this.sortArray[j] = this.sortArray[j + 1];
                        this.sortArray[j + 1] = temp;

                        b1.style.height = `${this.sortArray[j] * 2.8}px`;
                        b1.textContent = this.sortArray[j];
                        b2.style.height = `${this.sortArray[j+1] * 2.8}px`;
                        b2.textContent = this.sortArray[j+1];
                        b1.className = 'sort-bar active-swap';
                        b2.className = 'sort-bar active-swap';
                        commEl.textContent = `Swapping (${this.sortArray[j]}) and (${this.sortArray[j+1]}) because left > right!`;
                    }
                }

                j++;
                if (j >= n - i - 1) {
                    const sortedBar = document.getElementById(`bar-${n - i - 1}`);
                    if (sortedBar) sortedBar.className = 'sort-bar sorted';
                    j = 0;
                    i++;
                }
            }, 350);
        } else if (algo === 'selection') {
            let i = 0, j = 1, minIdx = 0;
            const commEl = document.getElementById('sort-commentary');

            this.sortInterval = setInterval(() => {
                if (i >= n - 1) {
                    clearInterval(this.sortInterval);
                    this.isSorting = false;
                    bars().forEach(b => b.className = 'sort-bar sorted');
                    commEl.textContent = "Selection Sort Complete! Minimums systematically placed at front.";
                    app.showToast("Selection Sort finished!", "success");
                    return;
                }

                bars().forEach((b, idx) => {
                    if (idx < i) b.className = 'sort-bar sorted';
                    else if (idx === minIdx) b.className = 'sort-bar active-swap';
                    else b.className = 'sort-bar';
                });

                const currBar = document.getElementById(`bar-${j}`);
                if (currBar) currBar.className = 'sort-bar active-compare';

                commEl.textContent = `Scanning right sub-array. Current min at index [${minIdx}] (${this.sortArray[minIdx]}). Checking [${j}] (${this.sortArray[j]}).`;

                if (this.sortArray[j] < this.sortArray[minIdx]) {
                    minIdx = j;
                }

                j++;
                if (j >= n) {
                    // Swap minIdx with i
                    let temp = this.sortArray[i];
                    this.sortArray[i] = this.sortArray[minIdx];
                    this.sortArray[minIdx] = temp;

                    const bi = document.getElementById(`bar-${i}`);
                    const bm = document.getElementById(`bar-${minIdx}`);
                    if (bi && bm) {
                        bi.style.height = `${this.sortArray[i] * 2.8}px`;
                        bi.textContent = this.sortArray[i];
                        bm.style.height = `${this.sortArray[minIdx] * 2.8}px`;
                        bm.textContent = this.sortArray[minIdx];
                    }
                    i++;
                    minIdx = i;
                    j = i + 1;
                }
            }, 300);
        }
    }

    // =========================================================================
    // 5. MEMORY ALLOCATION (STACK VS HEAP)
    // =========================================================================
    renderMemoryVisualizer() {
        this.stageEl.innerHTML = `
            <div class="vis-controls-bar">
                <div class="vis-input-group">
                    <button class="vis-btn primary" onclick="visualizer.memAllocate()"><i class="fa-solid fa-plus"></i> Execute: <code>int* p = new int(88);</code></button>
                    <button class="vis-btn" onclick="visualizer.memDeallocate()"><i class="fa-solid fa-trash"></i> Execute: <code>delete p; p = nullptr;</code></button>
                </div>
                <div class="vis-status">Active Heap Allocations: <strong style="color:var(--accent-emerald);">${this.heapBlocks.length}</strong></div>
            </div>

            <div class="memory-diagram-grid">
                <div class="memory-section">
                    <h4><i class="fa-solid fa-layer-group"></i> STACK SEGMENT (Automatic RAII Lifetime)</h4>
                    <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Stores local function variables, parameter copies, and pointer address holders.</p>
                    ${this.stackVars.map(sv => `
                        <div class="memory-block stack-mem-block">
                            <span><strong>${sv.name}</strong> [${sv.addr}]</span>
                            <span>&rarr; ${sv.pointsTo}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="memory-section">
                    <h4><i class="fa-solid fa-cubes"></i> HEAP SEGMENT (Dynamic <code>new</code>/<code>delete</code> Lifetime)</h4>
                    <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Persistent dynamic memory managed explicitly by programmer via new and delete.</p>
                    ${this.heapBlocks.length === 0 ? '<div style="color:var(--text-muted); padding:20px; text-align:center;">Heap is currently clean (No allocations).</div>' : ''}
                    ${this.heapBlocks.map(hb => `
                        <div class="memory-block heap-mem-block">
                            <span>Address: [<strong>${hb.id}</strong>] (${hb.type})</span>
                            <span>Payload: ${hb.val}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-top:28px; background:var(--bg-surface); padding:20px; border-radius:12px; border:1px solid var(--border-color);">
                <h4 style="color:var(--accent-cyan); margin-bottom:8px;"><i class="fa-solid fa-circle-info"></i> How C++ Pointers Bridge Stack and Heap:</h4>
                <p style="font-size:13.5px; color:var(--text-secondary);">When you execute <code>int* ptr = new int(42);</code>, the pointer variable <code>ptr</code> itself is stored on the **Stack** (<code>occupying 8 bytes</code>), while the actual integer <code>42</code> is allocated far away inside the **Heap** at address <code>0x7ffd01</code>. If you exit the function without calling <code>delete ptr;</code>, the stack variable <code>ptr</code> pops, leaving the heap block orphaned forever (<code>Memory Leak!</code>).</p>
            </div>
        `;
    }

    memAllocate() {
        if (this.heapBlocks.length >= 5) return app.showToast("Heap visualizer capacity reached!", "warning");
        const randHex = '0x7ffd' + Math.floor(Math.random() * 80 + 10);
        const randVal = Math.floor(Math.random() * 900) + 100;

        this.heapBlocks.push({ id: randHex, type: 'int*', val: `${randVal} (Allocated via new int)` });
        this.stackVars.push({ name: `p_${this.heapBlocks.length}`, addr: '0x10b' + (this.heapBlocks.length * 4), pointsTo: `${randHex} (Heap)` });

        this.render();
        app.showToast(`Executed new int(${randVal}) at Heap Address ${randHex}!`, "success");
    }

    memDeallocate() {
        if (this.heapBlocks.length === 0) return app.showToast("No heap blocks left to delete!", "warning");
        const freed = this.heapBlocks.pop();
        this.stackVars.pop();
        this.render();
        app.showToast(`Executed delete on Heap block ${freed.id}. Memory returned to OS.`, "info");
    }
}

const visualizer = new VisualizerEngine();
