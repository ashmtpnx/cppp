// C++ & DSA MasterClass Pro - Curriculum Data (Modules 15 to 24)
window.CURRICULUM_DATA = window.CURRICULUM_DATA || [];

window.CURRICULUM_DATA.push(
    // =========================================================================
    // MODULE 15: Stack in DSA using C++
    // =========================================================================
    {
        id: "mod-15",
        title: "Stack in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-15-1",
                title: "What is Stack in DSA using C++?",
                level: "Beginner",
                summary: "LIFO (Last-In-First-Out) linear data structure where all insertions (push) and deletions (pop) happen at the top.",
                content: `
                    <h2>LIFO Architecture: Stack Data Structure</h2>
                    <p>A <strong>Stack</strong> is a linear, Last-In-First-Out (<code>LIFO</code>) data structure where elements are added (<code>push</code>) and removed (<code>pop</code>) from only one end called the <strong>Top</strong>.</p>
                    <p>Think of a stack of cafeteria plates: you place new plates on top, and you remove plates from the top. The first plate placed at the bottom is the last one removed (<code>FILO / LIFO</code>).</p>
                    <div class="highlight-box success">
                        <strong>Interactive Visualizer:</strong> Click on the <em>Interactive Animations</em> tab above to dynamically push and pop numbers on a live visual stack box!
                    </div>
                `
            },
            {
                id: "mod-15-2",
                title: "Practical implementation of Stack",
                level: "Intermediate",
                summary: "C++ array-based implementation featuring push(), pop(), peek/top(), isEmpty(), and isFull() in O(1) time.",
                content: `
                    <h2>Array-Based Stack Implementation (<code>O(1)</code> Operations)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">stack_array.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

#define MAX 100

class Stack {
private:
    int top;
    int arr[MAX];
public:
    Stack() { top = -1; }

    bool push(int val) {
        if (top &gt;= MAX - 1) { cout &lt;&lt; "Stack Overflow!\\n"; return false; }
        arr[++top] = val;
        return true;
    }

    int pop() {
        if (top &lt; 0) { cout &lt;&lt; "Stack Underflow!\\n"; return -1; }
        return arr[top--];
    }

    int peek() {
        if (top &lt; 0) return -1;
        return arr[top];
    }

    bool isEmpty() { return (top &lt; 0); }
};</code></pre>
                    </div>
                `
            },
            {
                id: "mod-15-3",
                title: "Infix, Prefix and Postfix Expressions in DSA C++",
                level: "Intermediate",
                summary: "Operator placement conventions: Infix (A + B), Prefix (+ A B), and Postfix (A B +).",
                content: `
                    <h2>Expression Notations in Computer Science</h2>
                    <p>Computers process algebraic expressions far more efficiently in Postfix or Prefix notation because parentheses and operator precedence are completely eliminated during evaluation.</p>
                    <ul>
                        <li><strong>Infix Notation (<code>A + B</code>):</strong> Operator sits between operands. Requires PEMDAS precedence handling.</li>
                        <li><strong>Prefix Notation (<code>+ A B</code> / Polish Notation):</strong> Operator sits before operands.</li>
                        <li><strong>Postfix Notation (<code>A B +</code> / Reverse Polish Notation - RPN):</strong> Operator sits after operands. Standard for stack evaluation engines!</li>
                    </ul>
                `
            },
            {
                id: "mod-15-4",
                title: "Infix to Postfix using Stack",
                level: "Intermediate",
                summary: "Shunting-Yard algorithm using stack to manage operator precedence and associativity.",
                content: `
                    <h2>Algorithm: Shunting-Yard Infix to Postfix Conversion</h2>
                    <p>We scan the infix expression from left to right while maintaining an operator stack:</p>
                    <ol>
                        <li>If token is an operand (<code>A-Z, 0-9</code>), append immediately to output string.</li>
                        <li>If token is <code>'('</code>, push to stack.</li>
                        <li>If token is <code>')'</code>, pop operators from stack to output until <code>'('</code> is popped.</li>
                        <li>If token is operator (<code>+, -, *, /</code>), pop all stack operators with $\ge$ precedence before pushing token.</li>
                    </ol>
                `
            },
            {
                id: "mod-15-5",
                title: "Practical implementation of Infix to Postfix using Stack",
                level: "Advanced",
                summary: "Full C++ implementation converting algebraic strings using std::stack.",
                content: `
                    <h2>Complete C++ Infix to Postfix Code</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">infix_to_postfix.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;stack&gt;
#include &lt;string&gt;
using namespace std;

int precedence(char op) {
    if (op == '^') return 3;
    if (op == '*' || op == '/') return 2;
    if (op == '+' || op == '-') return 1;
    return 0;
}

string infixToPostfix(string s) {
    stack&lt;char&gt; st;
    string res = "";

    for (char c : s) {
        if (isalnum(c)) {
            res += c;
        } else if (c == '(') {
            st.push('(');
        } else if (c == ')') {
            while (!st.empty() && st.top() != '(') {
                res += st.top(); st.pop();
            }
            if(!st.empty()) st.pop(); // Pop '('
        } else {
            while (!st.empty() && precedence(st.top()) &gt;= precedence(c)) {
                res += st.top(); st.pop();
            }
            st.push(c);
        }
    }
    while (!st.empty()) { res += st.top(); st.pop(); }
    return res;
}</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 16: Queue in DSA using C++
    // =========================================================================
    {
        id: "mod-16",
        title: "Queue in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-16-1",
                title: "What is Queue in DSA C++?",
                level: "Beginner",
                summary: "FIFO (First-In-First-Out) structure where insertions occur at rear and deletions occur at front.",
                content: `
                    <h2>FIFO Architecture: Queue Data Structure</h2>
                    <p>A <strong>Queue</strong> is a linear First-In-First-Out (<code>FIFO</code>) data structure where elements are inserted (<code>enqueue</code>) at the <strong>Rear</strong> and removed (<code>dequeue</code>) from the <strong>Front</strong> (like a ticket counter line).</p>
                `
            },
            {
                id: "mod-16-2",
                title: "Linear Queue in DSA C++",
                level: "Beginner",
                summary: "Standard array-based linear queue maintaining front and rear indices.",
                content: `
                    <h2>Array-Based Linear Queue (<code>front</code> and <code>rear</code> pointers)</h2>
                    <p>We initialize both <code>front</code> and <code>rear</code> to <code>-1</code>. When <code>enqueue(x)</code> occurs, <code>rear++</code>. When <code>dequeue()</code> occurs, <code>front++</code>.</p>
                `
            },
            {
                id: "mod-16-3",
                title: "Limitation of Linear Queue in DSA C++",
                level: "Intermediate",
                summary: "False Overflow problem where rear == MAX-1 even though front indices have been vacated.",
                content: `
                    <h2>The "False Overflow" Bottleneck</h2>
                    <p>In a simple array queue, as elements are dequeued, <code>front</code> advances forward, leaving empty wasted slots (<code>arr[0], arr[1]</code>) behind. Once <code>rear</code> reaches <code>MAX-1</code>, the queue reports <code>Overflow</code> even if $90\%$ of the front slots are totally empty! This is why Circular Queues were invented.</p>
                `
            },
            {
                id: "mod-16-4",
                title: "Circular Queue in DSA C++",
                level: "Intermediate",
                summary: "Connecting rear index back to index 0 via modulo arithmetic: rear = (rear + 1) % MAX.",
                content: `
                    <h2>Circular Queue: Modulo Arithmetic (<code>% MAX</code>)</h2>
                    <p>A Circular Queue connects the last array slot back to the first slot. We wrap pointers around using: <br><code>rear = (rear + 1) % MAX</code> and <code>front = (front + 1) % MAX</code>.</p>
                `
            },
            {
                id: "mod-16-5",
                title: "Practical implementation of Circular Queue in DSA C++",
                level: "Intermediate",
                summary: "Full C++ implementation of Circular Queue handling wrap-around logic cleanly.",
                content: `
                    <h2>Circular Queue C++ Code</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">circular_queue.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">class CircularQueue {
    int front, rear, size;
    int* arr;
public:
    CircularQueue(int s) {
        size = s; arr = new int[size];
        front = rear = -1;
    }

    void enqueue(int val) {
        if ((rear + 1) % size == front) { cout &lt;&lt; "Queue Full\\n"; return; }
        if (front == -1) front = 0;
        rear = (rear + 1) % size;
        arr[rear] = val;
    }

    int dequeue() {
        if (front == -1) { cout &lt;&lt; "Queue Empty\\n"; return -1; }
        int val = arr[front];
        if (front == rear) front = rear = -1; // Last item removed
        else front = (front + 1) % size;
        return val;
    }
};</code></pre>
                    </div>
                `
            },
            {
                id: "mod-16-6",
                title: "Deque in DSA C++",
                level: "Intermediate",
                summary: "Double-Ended Queue (Deque) permitting insertions and deletions at both Front and Rear.",
                content: `
                    <h2>Double-Ended Queue (<code>Deque</code>)</h2>
                    <p>A Deque generalizes both stack and queue behavior by allowing <code>push_front</code>, <code>push_back</code>, <code>pop_front</code>, and <code>pop_back</code> simultaneously (<code>std::deque</code> in STL).</p>
                `
            },
            {
                id: "mod-16-7",
                title: "Insertion in Deque in DSA C++",
                level: "Intermediate",
                summary: "Algorithms for insertFront() with wrap-around decrements and insertRear().",
                content: `
                    <h2>Insertion Mechanics (<code>insertFront</code> vs <code>insertRear</code>)</h2>
                    <p>For <code>insertFront(val)</code>, if <code>front == 0</code>, we wrap <code>front</code> backward to <code>MAX - 1</code>. For <code>insertRear(val)</code>, we advance <code>rear = (rear + 1) % MAX</code>.</p>
                `
            },
            {
                id: "mod-16-8",
                title: "Delete and Display in Deque in DSA C++",
                level: "Intermediate",
                summary: "Algorithms for deleteFront(), deleteRear(), and looping display across circular deque bounds.",
                content: `
                    <h2>Deletion Mechanics (<code>deleteFront</code> vs <code>deleteRear</code>)</h2>
                    <p>For <code>deleteRear()</code>, <code>rear</code> wraps backward via <code>(rear - 1 + MAX) % MAX</code>. Display loops from <code>i = front</code> to <code>rear</code> modulo <code>MAX</code>.</p>
                `
            },
            {
                id: "mod-16-9",
                title: "Practical implementation of Deque in DSA C++",
                level: "Advanced",
                summary: "Complete C++ class managing double-ended circular operations.",
                content: `
                    <h2>Full C++ Deque Implementation</h2>
                    <p>Using STL <code>#include &lt;deque&gt;</code> gives professional performance, but array-based implementation is essential for understanding circular bounds.</p>
                `
            },
            {
                id: "mod-16-10",
                title: "Priority Queue in DSA C++",
                level: "Advanced",
                summary: "Queue where elements are dequeued based on priority value rather than arrival order (implemented via Max/Min Binary Heap).",
                content: `
                    <h2>Priority Queue (<code>O(log N)</code> Heap Operations)</h2>
                    <p>In a Priority Queue (<code>std::priority_queue&lt;int&gt;</code>), elements with higher priority values always dequeue before lower-priority elements. Backed internally by Binary Max/Min Heaps.</p>
                `
            },
            {
                id: "mod-16-11",
                title: "Create and Display Method in Priority Queue in DSA C++",
                level: "Advanced",
                summary: "Inserting elements into array/heap and maintaining priority ordering during display.",
                content: `
                    <h2>Heap Insertion and Ordered Display</h2>
                    <p>Displaying a priority queue in sorted order requires repeatedly calling <code>.top()</code> and <code>.pop()</code> (<code>O(N log N)</code> total time).</p>
                `
            },
            {
                id: "mod-16-12",
                title: "Practical implementation of Priority Queue in DSA C++",
                level: "Advanced",
                summary: "Using C++ STL priority_queue with custom comparator structs (<code>greater&lt;int&gt;</code> for Min Heap).",
                content: `
                    <h2>STL Priority Queue (<code>Max Heap vs Min Heap</code>)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">priority_queue.cpp</span></div>
                        <pre><code class="language-cpp">#include &lt;queue&gt;
// Max Heap (Default): 99 pops first
priority_queue&lt;int&gt; maxpq; 

// Min Heap: 2 pops first
priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minpq;</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 17: Linked List in DSA C++
    // =========================================================================
    {
        id: "mod-17",
        title: "Linked List in DSA C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-17-1",
                title: "What is Linked List in DSA C++?",
                level: "Beginner",
                summary: "Dynamic chain of nodes scattered in Heap memory connected by Node* next pointers.",
                content: `
                    <h2>Dynamic Node Architecture: Singly Linked List</h2>
                    <p>A <strong>Linked List</strong> is a linear data structure where elements (<code>Nodes</code>) are dynamically allocated in arbitrary Heap addresses and linked together via pointer references (<code>Node* next</code>).</p>
                    <div class="highlight-box success">
                        Unlike fixed arrays, linked lists can grow or shrink infinitely at runtime with <strong><code>O(1)</code> insertion/deletion</strong> when a node pointer is known!
                    </div>
                `
            },
            {
                id: "mod-17-2",
                title: "Create and Display Elements of Linked List in DSA C++",
                level: "Beginner",
                summary: "Defining Node struct and traversing from head to nullptr using a while loop.",
                content: `
                    <h2>Node Struct definition & Display Traversal (<code>O(N)</code>)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">ll_display.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

void displayList(Node* head) {
    Node* curr = head;
    while (curr != nullptr) {
        cout &lt;&lt; curr-&gt;data &lt;&lt; " -&gt; ";
        curr = curr-&gt;next;
    }
    cout &lt;&lt; "NULL" &lt;&lt; endl;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-17-3",
                title: "Insert element in Linked List",
                level: "Intermediate",
                summary: "Inserting at Head O(1), at Tail O(N), or at specific index position O(K).",
                content: `
                    <h2>Insertion at Head (<code>O(1)</code>) and Tail (<code>O(N)</code>)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">ll_insert.cpp</span></div>
                        <pre><code class="language-cpp">void insertHead(Node*& head, int val) {
    Node* newNode = new Node(val);
    newNode-&gt;next = head;
    head = newNode;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-17-4",
                title: "Delete an element from Linked List",
                level: "Intermediate",
                summary: "Unlinking node pointers safely and calling delete on heap node to prevent memory leaks.",
                content: `
                    <h2>Deleting Node by Value (<code>O(N)</code>)</h2>
                    <p>To delete a target node, we maintain a <code>prev</code> pointer, unlink <code>prev-&gt;next = curr-&gt;next</code>, and invoke <code>delete curr;</code>.</p>
                `
            },
            {
                id: "mod-17-5",
                title: "Searching in Linked List",
                level: "Beginner",
                summary: "Iterative vs Recursive pointer traversal (<code>O(N)</code> linear time).",
                content: `
                    <h2>Linear Search in Linked List (<code>O(N)</code>)</h2>
                    <p>Traverses from <code>head</code> checking <code>if (curr-&gt;data == target)</code>. Random access (<code>O(1)</code>) is impossible because nodes are not contiguous in RAM.</p>
                `
            },
            {
                id: "mod-17-6",
                title: "Display element of Linked List in reverse order",
                level: "Intermediate",
                summary: "Using recursion call stack (<code>displayRev(node-&gt;next); cout &lt;&lt; node-&gt;data;</code>) to print backward.",
                content: `
                    <h2>Printing Reverse via Recursion (<code>O(N)</code> Stack Space)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">ll_print_rev.cpp</span></div>
                        <pre><code class="language-cpp">void printReverse(Node* node) {
    if (node == nullptr) return;
    printReverse(node-&gt;next); // Go to end of list first
    cout &lt;&lt; node-&gt;data &lt;&lt; " "; // Print as recursion unwinds!
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-17-7",
                title: "Sorting in Linked List",
                level: "Advanced",
                summary: "O(N log N) Merge Sort on Linked Lists using Floyd's slow & fast pointer middle-finding.",
                content: `
                    <h2>Merge Sort on Linked List (<code>O(N log N)</code>)</h2>
                    <p>Because pointers can be rearranged without swapping massive data blocks, **Merge Sort** is the optimal <code>O(N log N)</code> algorithm for linked lists (<code>using slow & fast pointers to find mid</code>).</p>
                `
            },
            {
                id: "mod-17-8",
                title: "Stack Linked List in DSA C++",
                level: "Intermediate",
                summary: "Dynamic Stack implementation where push() is insertAtHead and pop() is deleteFromHead (<code>O(1)</code>).",
                content: `
                    <h2>Dynamic Stack using Linked List (<code>O(1)</code> Unlimited Capacity)</h2>
                    <p>By mapping <code>push(x)</code> to <code>insertAtHead</code> and <code>pop()</code> to <code>deleteFromHead</code>, we get a stack that never overflows unless system RAM is exhausted!</p>
                `
            },
            {
                id: "mod-17-9",
                title: "Queue Linked List in DSA C++",
                level: "Intermediate",
                summary: "Dynamic Queue maintaining both head (front) and tail (rear) pointers for O(1) enqueue and dequeue.",
                content: `
                    <h2>Dynamic Queue with <code>head</code> and <code>tail</code> Pointers (<code>O(1)</code>)</h2>
                    <p>Maintaining a <code>tail</code> pointer allows <code>enqueue(x)</code> (<code>tail-&gt;next = newNode; tail = newNode</code>) and <code>dequeue()</code> (<code>delete from head</code>) inside pure <code>O(1)</code> constant time.</p>
                `
            },
            {
                id: "mod-17-10",
                title: "Create, insert, display and delete in Queue Linked List",
                level: "Advanced",
                summary: "Complete C++ class for linked-list based Queue.",
                content: `
                    <h2>Full Linked-List Queue Implementation</h2>
                    <p>Combines dynamic pointer allocation with clean FIFO edge-case handling (<code>when queue becomes empty after dequeue</code>).</p>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 18: Circular Linked List in DSA using C++
    // =========================================================================
    {
        id: "mod-18",
        title: "Circular Linked List in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-18-1",
                title: "What is a Circular Linked List in DSA C++?",
                level: "Beginner",
                summary: "Linked List where the last node points back to head instead of nullptr (<code>tail-&gt;next = head</code>).",
                content: `
                    <h2>Endless Ring: Circular Singly Linked List</h2>
                    <p>In a Circular Linked List, the <code>next</code> pointer of the last node (<code>tail</code>) points back to the <code>head</code> node instead of <code>nullptr</code>. Any node can act as a starting point to traverse the entire list ring!</p>
                `
            },
            {
                id: "mod-18-2",
                title: "Create and Display Elements of Circular Linked List in DSA C++",
                level: "Intermediate",
                summary: "Traversing ring using do-while loop until curr pointer returns to head.",
                content: `
                    <h2>Displaying Ring Traversal (<code>do-while</code> loop)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">cll_display.cpp</span></div>
                        <pre><code class="language-cpp">void displayCircular(Node* head) {
    if (head == nullptr) return;
    Node* curr = head;
    do {
        cout &lt;&lt; curr-&gt;data &lt;&lt; " -&gt; ";
        curr = curr-&gt;next;
    } while (curr != head); // Exits exactly when loop completes one full cycle!
    cout &lt;&lt; "(HEAD)" &lt;&lt; endl;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-18-3",
                title: "Insert element in Circular Linked List",
                level: "Intermediate",
                summary: "Inserting into empty list, at head (requiring tail->next update), or at tail.",
                content: `
                    <h2>Insertion into Circular Ring (<code>O(1)</code> via <code>tail</code> pointer)</h2>
                    <p>By keeping a pointer to the <code>tail</code> node, we can access <code>head</code> immediately via <code>tail-&gt;next</code>—enabling <code>O(1)</code> insertion at both front and back!</p>
                `
            },
            {
                id: "mod-18-4",
                title: "Delete an element from Circular Linked List",
                level: "Intermediate",
                summary: "Handling single-node deletion (head = nullptr) vs multi-node ring unlinking.",
                content: `
                    <h2>Ring Deletion Mechanics</h2>
                    <p>If the deleted node is <code>head</code>, <code>tail-&gt;next</code> must be updated to point to <code>head-&gt;next</code> before deleting the old head.</p>
                `
            },
            {
                id: "mod-18-5",
                title: "Practical implementation of Circular Linked List",
                level: "Advanced",
                summary: "Complete C++ class managing round-robin scheduling algorithms.",
                content: `
                    <h2>Round-Robin OS Scheduler Simulation</h2>
                    <p>Circular linked lists form the foundation of CPU Round-Robin time-slice task scheduling.</p>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 19: Doubly Linked List in DSA using C++
    // =========================================================================
    {
        id: "mod-19",
        title: "Doubly Linked List in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-19-1",
                title: "What is Doubly Linked List in DSA using C++?",
                level: "Beginner",
                summary: "Bidirectional list where each node contains both Node* prev and Node* next pointers.",
                content: `
                    <h2>Bidirectional Traversal: Doubly Linked List (<code>DLL</code>)</h2>
                    <p>Every node in a Doubly Linked List has two pointer links: <code>prev</code> (pointing to the preceding node) and <code>next</code> (pointing to the succeeding node). Enables <code>O(1)</code> deletion when given a direct node pointer!</p>
                `
            },
            {
                id: "mod-19-2",
                title: "Create and Display in Doubly Linked List in DSA C++",
                level: "Intermediate",
                summary: "Node definition (prev, data, next) and bidirectional traversal.",
                content: `
                    <h2>DLL Node Anatomy and Traversal</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">dll_node.cpp</span></div>
                        <pre><code class="language-cpp">struct DNode {
    int data;
    DNode* prev;
    DNode* next;
    DNode(int val) : data(val), prev(nullptr), next(nullptr) {}
};</code></pre>
                    </div>
                `
            },
            {
                id: "mod-19-3",
                title: "Insert element in Doubly Linked List",
                level: "Intermediate",
                summary: "Updating 4 pointer links when inserting between two existing DLL nodes.",
                content: `
                    <h2>The 4-Pointer Insertion Dance (<code>O(1)</code>)</h2>
                    <p>To insert <code>newNode</code> after <code>curr</code>: <br>
                    1. <code>newNode-&gt;next = curr-&gt;next;</code><br>
                    2. <code>newNode-&gt;prev = curr;</code><br>
                    3. <code>if(curr-&gt;next) curr-&gt;next-&gt;prev = newNode;</code><br>
                    4. <code>curr-&gt;next = newNode;</code></p>
                `
            },
            {
                id: "mod-19-4",
                title: "Delete element from Doubly Linked List",
                level: "Intermediate",
                summary: "Unlinking node->prev->next and node->next->prev cleanly.",
                content: `
                    <h2><code>O(1)</code> Deletion with Direct Pointer</h2>
                    <p>If we hold <code>DNode* target</code>, we can unlink and delete it instantly without searching from head: <code>if(target-&gt;prev) target-&gt;prev-&gt;next = target-&gt;next;</code>.</p>
                `
            },
            {
                id: "mod-19-5",
                title: "Practical implementation of Doubly Linked List",
                level: "Advanced",
                summary: "Complete C++ class (<code>std::list</code> internal mechanics).",
                content: `
                    <h2>Complete C++ Doubly Linked List Class</h2>
                    <p>STL <code>std::list&lt;T&gt;</code> is implemented as a doubly linked list, enabling bidirectional iterator movement (<code>itr++</code> and <code>itr--</code>).</p>
                `
            },
            {
                id: "mod-19-6",
                title: "Searching and Sorting in Doubly Linked List",
                level: "Advanced",
                summary: "Quick Sort on Doubly Linked List by swapping node data or pointers.",
                content: `
                    <h2>Quick Sort and Insertion Sort on DLL</h2>
                    <p>Because DLL supports backward traversal (<code>prev</code>), Insertion Sort and Quick Sort (partitioning from head and tail) can be executed cleanly.</p>
                `
            },
            {
                id: "mod-19-7",
                title: "Practical implementation of Searching and Sorting in Doubly Linked List",
                level: "Advanced",
                summary: "Full code for partitioning a Doubly Linked List inside Quick Sort.",
                content: `
                    <h2>Complete DLL Sorting Code</h2>
                    <p>Demonstrates pointer partition optimization across doubly linked node buffers.</p>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 20: Circular Doubly Linked List in DSA using C++
    // =========================================================================
    {
        id: "mod-20",
        title: "Circular Doubly Linked List in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-20-1",
                title: "What is Circular Doubly Linked List in DSA using C++?",
                level: "Intermediate",
                summary: "Bidirectional ring where head->prev points to tail and tail->next points to head.",
                content: `
                    <h2>The Ultimate List Structure: Circular Doubly Linked List (<code>CDLL</code>)</h2>
                    <p>In a Circular Doubly Linked List, <code>head-&gt;prev</code> links to <code>tail</code> and <code>tail-&gt;next</code> links to <code>head</code>. Combines infinite ring cycling with bidirectional traversal capabilities!</p>
                `
            },
            {
                id: "mod-20-2",
                title: "Create and Display in Circular Doubly Linked List in DSA C++",
                level: "Intermediate",
                summary: "Connecting ring pointers and bidirectional do-while traversal.",
                content: `
                    <h2>CDLL Initialization and Bidirectional Display</h2>
                    <p>We can loop forward (<code>curr = curr-&gt;next</code> until <code>head</code>) or backward (<code>curr = curr-&gt;prev</code> from <code>tail</code> to <code>head</code>).</p>
                `
            },
            {
                id: "mod-20-3",
                title: "Insert element in Circular Doubly Linked List",
                level: "Advanced",
                summary: "Updating ring boundaries during head and tail insertions.",
                content: `
                    <h2>CDLL Insertion Mechanics (<code>O(1)</code>)</h2>
                    <p>Inserting at head or tail requires updating all 4 border pointers (<code>newNode-&gt;next</code>, <code>newNode-&gt;prev</code>, <code>head-&gt;prev</code>, <code>tail-&gt;next</code>).</p>
                `
            },
            {
                id: "mod-20-4",
                title: "Delete element from Circular Doubly Linked List",
                level: "Advanced",
                summary: "Unlinking target node while preserving circular bidirectional integrity.",
                content: `
                    <h2>CDLL Ring Deletion</h2>
                    <p>Ensures that if the list reduces to a single node, <code>head-&gt;next = head</code> and <code>head-&gt;prev = head</code> are properly managed.</p>
                `
            },
            {
                id: "mod-20-5",
                title: "Practical implementation of Circular Doubly Linked List",
                level: "Advanced",
                summary: "Full C++ implementation for Fibonacci Heap base list structures.",
                content: `
                    <h2>Complete C++ CDLL Class (<code>Used in Fibonacci Heaps</code>)</h2>
                    <p>Circular doubly linked lists are the exact underlying structure used in advanced graph priority queues like Fibonacci Heaps.</p>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 21: Searching and Sorting in DSA using C++
    // =========================================================================
    {
        id: "mod-21",
        title: "Searching and Sorting in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-21-1",
                title: "Linear Search in DSA C++",
                level: "Beginner",
                summary: "Review of O(N) sequential search across arrays and vectors.",
                content: `
                    <h2>Linear Search Revisited (<code>O(N)</code> Time Complexity)</h2>
                    <p>The universal baseline search suitable for both unsorted and dynamic lists.</p>
                `
            },
            {
                id: "mod-21-2",
                title: "Practical – Linear Search with time complexity",
                level: "Beginner",
                summary: "Measuring Best Case O(1), Average O(N/2), and Worst Case O(N) comparisons.",
                content: `
                    <h2>Time Complexity Analysis (<code>Best vs Worst Case</code>)</h2>
                    <ul>
                        <li><strong>Best Case (<code>O(1)</code>):</strong> Target element is found right at index <code>0</code>.</li>
                        <li><strong>Worst Case (<code>O(N)</code>):</strong> Target is at index <code>N-1</code> or completely missing from array.</li>
                    </ul>
                `
            },
            {
                id: "mod-21-3",
                title: "Binary Search in DSA C++",
                level: "Intermediate",
                summary: "O(log N) search on sorted arrays using mid = low + (high - low)/2.",
                content: `
                    <h2>Divide & Conquer: Binary Search (<code>O(log N)</code>)</h2>
                    <p>Each comparison halves the remaining search space ($N \to N/2 \to N/4 \to \dots \to 1$), taking at most $\approx \log_2(N)$ steps. For $1,000,000$ elements, binary search takes only ~20 checks!</p>
                `
            },
            {
                id: "mod-21-4",
                title: "Practical – Binary Search with time complexity",
                level: "Intermediate",
                summary: "std::binary_search, std::lower_bound, and std::upper_bound in STL.",
                content: `
                    <h2>STL Binary Search (<code>lower_bound</code> & <code>upper_bound</code>)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">stl_binary_search.cpp</span></div>
                        <pre><code class="language-cpp">#include &lt;algorithm&gt;
#include &lt;vector&gt;
vector&lt;int&gt; v = {10, 20, 30, 40, 50};
bool found = binary_search(v.begin(), v.end(), 30); // true in O(log N)</code></pre>
                    </div>
                `
            },
            {
                id: "mod-21-5",
                title: "Recursion in DSA C++",
                level: "Intermediate",
                summary: "Mastering call stack depth, base cases, and recursion trees.",
                content: `
                    <h2>Recursion Trees and Stack Frame Memory</h2>
                    <p>Every recursive call pushes a new activation record containing local variables and return addresses onto the system call stack.</p>
                `
            },
            {
                id: "mod-21-6",
                title: "Implementation of Recursion in DSA C++",
                level: "Intermediate",
                summary: "Recursive Binary Search and Tower of Hanoi (<code>O(2^N)</code>) implementation.",
                content: `
                    <h2>Recursive Binary Search & Tower of Hanoi</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">recursive_binary_search.cpp</span></div>
                        <pre><code class="language-cpp">int recBinarySearch(int arr[], int low, int high, int target) {
    if (low &gt; high) return -1;
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] &gt; target) return recBinarySearch(arr, low, mid - 1, target);
    return recBinarySearch(arr, mid + 1, high, target);
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-21-7",
                title: "What is Sorting in DSA C++?",
                level: "Beginner",
                summary: "Arranging data elements in ascending or descending order. In-place vs Out-of-place and Stable vs Unstable sorts.",
                content: `
                    <h2>Sorting Terminology: Stability & In-Place Space</h2>
                    <ul>
                        <li><strong>In-Place Sort (<code>O(1)</code> Auxiliary Space):</strong> Sorts elements without requiring extra array allocations (<code>Bubble Sort</code>, <code>Heap Sort</code>).</li>
                        <li><strong>Stable Sort:</strong> Preserves the relative order of identical elements (<code>Merge Sort</code>, <code>Insertion Sort</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-21-8",
                title: "Linear Sort",
                level: "Beginner",
                summary: "Counting Sort and Bucket Sort linear time sorting for restricted integer ranges (<code>O(N + K)</code>).",
                content: `
                    <h2>Linear Time Sorting (<code>Counting Sort</code> <code>O(N + K)</code>)</h2>
                    <p>When element values fall within a small range <code>[0...K]</code>, Counting Sort counts frequency occurrences in an auxiliary array to sort without any <code>&lt;</code>/<code>&gt;</code> comparisons!</p>
                `
            },
            {
                id: "mod-21-9",
                title: "Bubble Sort",
                level: "Beginner",
                summary: "O(N^2) sort repeatedly swapping adjacent out-of-order elements until largest bubbles to top.",
                content: `
                    <h2>Bubble Sort (<code>O(N^2)</code> Time Complexity)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">bubble_sort.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">void bubbleSort(int arr[], int n) {
    for (int i = 0; i &lt; n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j &lt; n - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break; // Optimized check if already sorted!
    }
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-21-10",
                title: "Selection Sort",
                level: "Beginner",
                summary: "O(N^2) sort finding the minimum element in unsorted right sub-array and swapping to left boundary.",
                content: `
                    <h2>Selection Sort (<code>O(N^2)</code> with minimum <code>O(N)</code> swaps)</h2>
                    <p>Selection sort scans the unsorted portion to find the absolute minimum and places it at the front. Makes exactly $N-1$ swaps total.</p>
                `
            },
            {
                id: "mod-21-11",
                title: "Insertion Sort",
                level: "Intermediate",
                summary: "O(N^2) sort shifting elements right to insert key into sorted left sub-array (O(N) best case on nearly sorted data).",
                content: `
                    <h2>Insertion Sort (<code>O(N)</code> Best Case on Nearly Sorted Data)</h2>
                    <p>Works like sorting playing cards in your hand: pick the next card (<code>key</code>) and slide larger cards right to make room.</p>
                `
            },
            {
                id: "mod-21-12",
                title: "Quick Sort",
                level: "Advanced",
                summary: "O(N log N) divide-and-conquer algorithm partitioning around a Pivot (<code>Lomuto vs Hoare partition</code>).",
                content: `
                    <h2>Quick Sort (<code>O(N log N)</code> Average, <code>O(1)</code> In-Place Space)</h2>
                    <p>Chooses a **Pivot** element and partitions the array such that all smaller elements sit left of the pivot and all larger elements sit right. Recursively sorts both halves.</p>
                `
            },
            {
                id: "mod-21-13",
                title: "Shell Sort",
                level: "Advanced",
                summary: "Generalized Insertion Sort comparing elements separated by shrinking gap intervals (<code>gap /= 2</code>).",
                content: `
                    <h2>Shell Sort (<code>O(N^(4/3))</code> Gap-Based Optimization)</h2>
                    <p>Shell sort improves Insertion Sort by initially swapping elements far apart (<code>gap = N/2</code>) to quickly eliminate inversions before reducing <code>gap</code> to 1.</p>
                `
            },
            {
                id: "mod-21-14",
                title: "Heap Sort",
                level: "Advanced",
                summary: "O(N log N) in-place sort building a Max-Binary Heap and repeatedly extracting root to end of array.",
                content: `
                    <h2>Heap Sort (<code>O(N log N)</code> Guaranteed In-Place)</h2>
                    <p>First transforms the array into a **Max-Heap** using <code>heapify()</code> in <code>O(N)</code> time, then repeatedly swaps root (<code>largest</code>) with the last element and heapifies down (<code>O(log N)</code> per item).</p>
                `
            },
            {
                id: "mod-21-15",
                title: "Two way merge Sort",
                level: "Advanced",
                summary: "Merging two pre-sorted lists/sub-arrays into a single sorted buffer in O(N+M) time.",
                content: `
                    <h2>Two-Way Merge Algorithm (<code>O(N + M)</code>)</h2>
                    <p>Given two already sorted arrays $A$ and $B$, two pointers compare heads (<code>A[i] vs B[j]</code>) and append the smaller value into output $C$ in single linear pass.</p>
                `
            },
            {
                id: "mod-21-16",
                title: "Merge Sort",
                level: "Advanced",
                summary: "O(N log N) stable divide-and-conquer sort splitting array in halves and merging sorted results (<code>O(N)</code> space).",
                content: `
                    <h2>Merge Sort (<code>O(N log N)</code> Guaranteed Stable Sort)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">merge_sort_summary.cpp</span></div>
                        <pre><code class="language-cpp">void mergeSort(int arr[], int l, int r) {
    if (l &lt; r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);     // Sort left half
        mergeSort(arr, m + 1, r); // Sort right half
        merge(arr, l, m, r);      // Combine both halves
    }
}</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 22: Tree in DSA using C++
    // =========================================================================
    {
        id: "mod-22",
        title: "Tree in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-22-1",
                title: "What is Tree in DSA C++?",
                level: "Intermediate",
                summary: "Non-linear hierarchical data structure composed of Root, Parent, Child, Leaf, and Edge relationships.",
                content: `
                    <h2>Hierarchical Data: Trees & Terminology</h2>
                    <p>A **Tree** is a non-linear data structure representing hierarchical relationships (<code>File Systems</code>, <code>DOM Tree</code>, <code>Organization Chart</code>). Composed of nodes connected by edges without any cycles.</p>
                    <ul>
                        <li><strong>Root:</strong> Topmost starting node (<code>depth 0</code>).</li>
                        <li><strong>Leaf Nodes:</strong> Terminal nodes with zero children (<code>left == right == nullptr</code>).</li>
                        <li><strong>Height of Tree:</strong> Longest path from root down to deepest leaf.</li>
                    </ul>
                `
            },
            {
                id: "mod-22-2",
                title: "Binary Tree in DSA C++",
                level: "Intermediate",
                summary: "Tree where every node has at most two children (<code>TreeNode* left, TreeNode* right</code>).",
                content: `
                    <h2>Binary Tree Node Architecture (<code>left</code> and <code>right</code> pointers)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">binary_tree_node.cpp</span></div>
                        <pre><code class="language-cpp">struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};</code></pre>
                    </div>
                `
            },
            {
                id: "mod-22-3",
                title: "Binary Search Tree in DSA C++",
                level: "Intermediate",
                summary: "Binary tree ordered property: left subtree < root < right subtree for O(log N) lookup.",
                content: `
                    <h2>Binary Search Tree (<code>BST</code> Ordered Property)</h2>
                    <p>In a **Binary Search Tree**, for any node $X$: all nodes in its left subtree have keys strictly less than $X.val$, and all nodes in its right subtree have keys strictly greater than $X.val$.</p>
                `
            },
            {
                id: "mod-22-4",
                title: "Tree Traversing Inorder, Preorder, Postorder",
                level: "Intermediate",
                summary: "DFS traversals: Inorder (L-Root-R outputs BST sorted), Preorder (Root-L-R), Postorder (L-R-Root).",
                content: `
                    <h2>DFS Tree Traversal Mechanics</h2>
                    <ul>
                        <li><strong>Inorder (<code>Left -&gt; Root -&gt; Right</code>):</strong> On a BST, Inorder traversal always yields elements in **Sorted Ascending Order**!</li>
                        <li><strong>Preorder (<code>Root -&gt; Left -&gt; Right</code>):</strong> Used for cloning/copying tree hierarchies.</li>
                        <li><strong>Postorder (<code>Left -&gt; Right -&gt; Root</code>):</strong> Used for deleting/freeing tree memory (<code>delete children before parent</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-22-5",
                title: "Creation of Tree from Inorder to Preorder",
                level: "Advanced",
                summary: "Reconstructing unique binary tree given both Preorder (root identifier) and Inorder (left/right split) sequences.",
                content: `
                    <h2>Algorithm: Reconstruct Binary Tree (<code>O(N)</code> via HashMap)</h2>
                    <p>1. The first element of <code>Preorder</code> is always the current <code>Root</code>.<br>
                    2. Locate <code>Root</code>'s index inside <code>Inorder</code>. Elements left of that index form the left subtree; elements right form the right subtree.<br>
                    3. Recursively build <code>root-&gt;left</code> and <code>root-&gt;right</code>.</p>
                `
            },
            {
                id: "mod-22-6",
                title: "Creation of BST in DSA C++",
                level: "Intermediate",
                summary: "Inserting elements into BST in O(h) height time (<code>root = insert(root, val)</code>).",
                content: `
                    <h2>BST Insertion (<code>O(log N)</code> on balanced tree)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">bst_insert.cpp</span></div>
                        <pre><code class="language-cpp">TreeNode* insertBST(TreeNode* root, int val) {
    if (root == nullptr) return new TreeNode(val);
    if (val &lt; root-&gt;val) root-&gt;left = insertBST(root-&gt;left, val);
    else if (val &gt; root-&gt;val) root-&gt;right = insertBST(root-&gt;right, val);
    return root;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-22-7",
                title: "Inorder, Preorder and Postorder Traversing of BST in DSA C++",
                level: "Intermediate",
                summary: "Code implementations of recursive and iterative (using std::stack) tree traversals.",
                content: `
                    <h2>Recursive Inorder Traversal Code</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">inorder_bst.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">void inorder(TreeNode* root) {
    if (root == nullptr) return;
    inorder(root-&gt;left);
    cout &lt;&lt; root-&gt;val &lt;&lt; " "; // Outputs sorted BST
    inorder(root-&gt;right);
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-22-8",
                title: "Searching in BST in DSA C++",
                level: "Intermediate",
                summary: "O(log N) iterative lookup descending left or right based on target key.",
                content: `
                    <h2>BST Key Search (<code>O(log N)</code>)</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">bst_search.cpp</span></div>
                        <pre><code class="language-cpp">TreeNode* searchBST(TreeNode* root, int target) {
    while (root != nullptr && root-&gt;val != target) {
        root = (target &lt; root-&gt;val) ? root-&gt;left : root-&gt;right;
    }
    return root;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-22-9",
                title: "Strictly Binary Tree in DSA C++",
                level: "Intermediate",
                summary: "Binary tree where every node has either exactly 0 or exactly 2 children (Full/Proper Binary Tree).",
                content: `
                    <h2>Strictly / Full Binary Tree</h2>
                    <p>Every node has strictly $0$ or $2$ children (<code>no node has only 1 child</code>). If a strictly binary tree has $L$ leaves, total internal nodes with two children equals exactly $L - 1$.</p>
                `
            },
            {
                id: "mod-22-10",
                title: "Delete an Element from Tree in DSA C++",
                level: "Advanced",
                summary: "General binary tree deletion replacing target node with deepest rightmost node before deleting leaf.",
                content: `
                    <h2>Deleting from Unordered Binary Tree</h2>
                    <p>To preserve binary tree connectivity, we find the target node, copy the value of the deepest rightmost leaf into the target, and delete that deepest leaf.</p>
                `
            },
            {
                id: "mod-22-11",
                title: "Delete an Element from BST in DSA C++",
                level: "Advanced",
                summary: "3-case BST deletion: leaf node, 1-child node, and 2-child node (using Inorder Successor / Minimum in right subtree).",
                content: `
                    <h2>The 3 Cases of BST Deletion</h2>
                    <ol>
                        <li><strong>Case 1 (Leaf Node):</strong> Simply <code>delete node; return nullptr;</code>.</li>
                        <li><strong>Case 2 (One Child):</strong> Replace node with its only non-null child pointer (<code>root = root-&gt;left or root-&gt;right</code>).</li>
                        <li><strong>Case 3 (Two Children):</strong> Find the **Inorder Successor** (<code>smallest node in right subtree</code>), copy its value to current node, and recursively delete the successor leaf!</li>
                    </ol>
                `
            },
            {
                id: "mod-22-12",
                title: "AVL Tree in DSA C++",
                level: "Advanced",
                summary: "Self-balancing Binary Search Tree where balance factor |Height(L) - Height(R)| <= 1 via LL, RR, LR, and RL rotations.",
                content: `
                    <h2>Self-Balancing AVL Trees (<code>O(log N)</code> Guaranteed)</h2>
                    <p>An **AVL Tree** guarantees <code>O(log N)</code> worst-case performance by maintaining a Balance Factor (<code>BF = height(L) - height(R)</code>) between <code>-1, 0, +1</code>. If insertion causes <code>|BF| &gt; 1</code>, rotations restore balance immediately!</p>
                `
            },
            {
                id: "mod-22-13",
                title: "Threaded Binary Tree in DSA C++",
                level: "Advanced",
                summary: "Converting null right pointers to point directly to Inorder Successors (<code>threads</code>) to enable O(1) space traversal.",
                content: `
                    <h2>Threaded Binary Trees (<code>Zero Stack Traversal</code>)</h2>
                    <p>In normal binary trees, over $50\%$ of child pointers are <code>nullptr</code>! Threaded binary trees utilize these empty <code>right</code> pointers to point directly to their Inorder Successor, allowing non-recursive inorder traversal with <code>O(1)</code> stack space.</p>
                `
            },
            {
                id: "mod-22-14",
                title: "B Tree in DSA C++",
                level: "Advanced",
                summary: "Self-balancing multi-way search tree optimized for disk I/O and databases (storing keys and child pointers per node).",
                content: `
                    <h2>Database Indexing Engine: B-Tree & B+ Tree</h2>
                    <p>A **B-Tree** of order $M$ allows every node to store up to $M-1$ sorted keys and $M$ child pointers (<code>multi-way branching</code>). Essential for database engines (<code>MySQL InnoDB</code>, <code>PostgreSQL</code>) where minimizing hard drive page reads (<code>O(log_M N)</code>) is paramount.</p>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 23: Address Calculation in DSA using C++
    // =========================================================================
    {
        id: "mod-23",
        title: "Address Calculation in DSA using C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-23-1",
                title: "Address Calculation of 1D, 2D Array in DSA C++",
                level: "Intermediate",
                summary: "Mathematical derivation of base address plus index stride offsets for 1D and Row/Column Major 2D grids.",
                content: `
                    <h2>Address Math for 1D & 2D Arrays</h2>
                    <p>Given Base Address $B$ and element byte size $W$ (<code>sizeof(int) = 4</code>):</p>
                    <ul>
                        <li><strong>1D Array (<code>arr[i]</code>):</strong> <br> <code>Address = B + (i - LowerBound) * W</code></li>
                        <li><strong>2D Array Row-Major (<code>mat[r][c]</code>):</strong> <br> <code>Address = B + [(r - LR) * TotalColumns + (c - LC)] * W</code></li>
                        <li><strong>2D Array Column-Major (<code>mat[r][c]</code>):</strong> <br> <code>Address = B + [(c - LC) * TotalRows + (r - LR)] * W</code></li>
                    </ul>
                `
            },
            {
                id: "mod-23-2",
                title: "Address Calculation of 3D Array in DSA C++",
                level: "Advanced",
                summary: "Address formulas for 3D tensor arrays mat[i][j][k] across planes, rows, and columns.",
                content: `
                    <h2>3D Tensor Array Address (<code>arr[P][R][C]</code>)</h2>
                    <p>For a 3D array (<code>Planes x Rows x Columns</code>) in Row-Major order: <br>
                    <code>Address(arr[i][j][k]) = B + [(i * R * C) + (j * C) + k] * W</code>.</p>
                `
            },
            {
                id: "mod-23-3",
                title: "Address Calculation of Lower & Upper Bound of Array in DSA C++",
                level: "Advanced",
                summary: "Calculating total elements and memory span given arbitrary lower and upper index bounds [L, U].",
                content: `
                    <h2>Total Elements & Memory Span from Bounds <code>[L, U]</code></h2>
                    <p>Total elements inside bound <code>[Lower, Upper]</code> equals: <code>Total = Upper - Lower + 1</code>. Total memory consumed equals <code>Total * sizeof(DataType)</code>.</p>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 24: Graph in DSA C++
    // =========================================================================
    {
        id: "mod-24",
        title: "Graph in DSA C++",
        category: "dsa",
        subtopics: [
            {
                id: "mod-24-1",
                title: "What is Graph in DSA C++?",
                level: "Advanced",
                summary: "Non-linear network of Vertices (V) connected by Edges (E). Directed vs Undirected and Weighted graphs.",
                content: `
                    <h2>Network Topology: Graph <code>G = (V, E)</code></h2>
                    <p>A **Graph** consists of a finite set of **Vertices** (<code>Nodes</code>) and **Edges** (<code>Connections</code>). Models real-world networks like Google Maps road routing, social media friendships, and computer networks.</p>
                `
            },
            {
                id: "mod-24-2",
                title: "Graph representation in DSA C++",
                level: "Advanced",
                summary: "Adjacency Matrix (O(V^2) space) vs Adjacency List (vector<int> adj[V] in O(V + E) space).",
                content: `
                    <h2>Adjacency Matrix vs Adjacency List</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">graph_representation.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

int main() {
    int V = 5;
    // Adjacency List: Array of dynamic vectors (O(V + E) memory space)
    vector&lt;int&gt; adj[5];

    // Add undirected edge between node 0 and 1
    adj[0].push_back(1);
    adj[1].push_back(0);
    
    cout &lt;&lt; "Node 0 is connected to Node: " &lt;&lt; adj[0][0] &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-24-3",
                title: "Kruskal’s Algorithm in DSA C++",
                level: "Advanced",
                summary: "O(E log E) Minimum Spanning Tree (MST) greedy algorithm using Disjoint Set Union (DSU / Union-Find).",
                content: `
                    <h2>Greedy MST: Kruskal's Algorithm (<code>O(E log E)</code> via <code>Union-Find</code>)</h2>
                    <p>To find the **Minimum Spanning Tree** (<code>connecting all V nodes with minimum total edge weight</code>):<br>
                    1. Sort all edges in ascending order of weight.<br>
                    2. Iterate through edges: if adding the edge does not form a cycle (<code>verified via Disjoint Set Union</code>), include it in the MST.</p>
                `
            },
            {
                id: "mod-24-4",
                title: "Prims Algorithm in DSA C++",
                level: "Advanced",
                summary: "O(E log V) vertex-centric MST algorithm growing tree starting from arbitrary root via Priority Queue.",
                content: `
                    <h2>Greedy MST: Prim's Algorithm (<code>O(E log V)</code> via Priority Queue)</h2>
                    <p>Unlike Kruskal's which grows forests of edges, Prim's algorithm starts from node <code>0</code> and greedily expands the single connected component by picking the smallest outgoing edge using a Min-Heap (<code>priority_queue</code>).</p>
                `
            },
            {
                id: "mod-24-5",
                title: "Dijkstra’s Shortest Path Algorithm DSA C++",
                level: "Advanced",
                summary: "O((V + E) log V) single-source shortest path finding minimum distance from source to all vertices.",
                content: `
                    <h2>Single-Source Shortest Path: Dijkstra's (<code>O((V + E) log V)</code>)</h2>
                    <p>Finds the absolute shortest path from a starting node $S$ to every other node in a graph with **non-negative weights** using relaxation (<code>if dist[u] + weight &lt; dist[v] then dist[v] = dist[u] + weight</code>).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">dijkstra_summary.cpp</span></div>
                        <pre><code class="language-cpp">// Min-priority queue storing {distance, node}
priority_queue&lt;pair&lt;int,int&gt;, vector&lt;pair&lt;int,int&gt;&gt;, greater&lt;pair&lt;int,int&gt;&gt;&gt; pq;
pq.push({0, source});
dist[source] = 0;</code></pre>
                    </div>
                `
            },
            {
                id: "mod-24-6",
                title: "Floyd Warshall Algorithm in DSA C++",
                level: "Advanced",
                summary: "O(V^3) All-Pairs Shortest Path dynamic programming algorithm computing distances between all node pairs.",
                content: `
                    <h2>All-Pairs Shortest Path: Floyd-Warshall (<code>O(V^3)</code> Dynamic Programming)</h2>
                    <p>Computes the shortest paths between **every pair of vertices** $(i, j)$ in the entire graph, even with negative edge weights (<code>no negative cycles</code>). Uses a triple loop checking whether path through intermediate node $k$ is shorter: <br>
                    <code>dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</code>.</p>
                `
            }
        ]
    }
);
