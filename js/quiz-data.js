// C++ & DSA MasterClass Pro - Interactive Quiz Data (quiz-data.js)

window.QUIZ_DATA = [
    {
        id: "q1",
        category: "core",
        question: "What is the primary difference between `++x` (Pre-increment) and `x++` (Post-increment)?",
        options: [
            "`++x` increments first and returns the updated value; `x++` returns the original value before incrementing.",
            "`x++` executes faster at the CPU hardware level than `++x`.",
            "`++x` can only be used inside `for` loops, while `x++` can be used inside `while` loops.",
            "There is no difference; both produce identical intermediate return values."
        ],
        correctIndex: 0,
        explanation: "Pre-increment (`++x`) increments the variable immediately and returns a reference to itself (`*this`). Post-increment (`x++`) makes a temporary copy of the original state, increments the variable, and returns the old copy."
    },
    {
        id: "q2",
        category: "core",
        question: "Why is `clrscr()` from `<conio.h>` not recommended for modern C++ software engineering in Visual Studio Code?",
        options: [
            "`<conio.h>` is a non-standard legacy header originating from 16-bit DOS/Turbo C++ and is not part of ISO C++ standard.",
            "`clrscr()` erases hard drive sectors if run inside Visual Studio Code.",
            "`clrscr()` only works on Linux machines and fails on Windows 11.",
            "Visual Studio Code does not support terminal output."
        ],
        correctIndex: 0,
        explanation: "`<conio.h>` (Console Input/Output) is a proprietary header from MS-DOS/Borland Turbo C++. Modern compilers like GCC, Clang, and MSVC adhere to ISO C++ standards where `<conio.h>` does not exist."
    },
    {
        id: "q3",
        category: "pointers",
        question: "What happens when an array `int arr[10]` is passed as an argument `void process(int arr[])` into a function?",
        options: [
            "The array decays into a pointer (`int* arr`), meaning `sizeof(arr)` inside the function returns pointer size (8 bytes on 64-bit), NOT 40 bytes.",
            "A deep copy of all 10 integers is created on the function's stack frame.",
            "The function receives a read-only const copy that cannot be modified.",
            "`sizeof(arr)` inside `process()` returns exactly 40 bytes."
        ],
        correctIndex: 0,
        explanation: "By C++ language rules, arrays passed as function parameters undergo 'Array Decay' into raw pointers to their first element. Therefore, modifications mutate original RAM and size must be passed separately as `int n`."
    },
    {
        id: "q4",
        category: "pointers",
        question: "If `int* ptr` points to memory address `0x1000` on a 64-bit architecture (`sizeof(int) == 4`), what is the address after `ptr++`?",
        options: [
            "`0x1004` (Increments by `sizeof(int)` = 4 bytes)",
            "`0x1001` (Increments by 1 byte)",
            "`0x1008` (Increments by 64-bit pointer size = 8 bytes)",
            "Causes a segmentation fault crash."
        ],
        correctIndex: 0,
        explanation: "Pointer arithmetic scales by the byte size of the target data type. Since `int` occupies 4 bytes, `ptr++` jumps forward exactly +4 bytes to address `0x1004`."
    },
    {
        id: "q5",
        category: "oop",
        question: "What is the critical requirement when a Base class has virtual functions that are overridden by Derived classes?",
        options: [
            "The Base class MUST declare a `virtual` destructor (`virtual ~Base()`) to ensure Derived destructors execute cleanly when deleted via Base pointer.",
            "The Base class constructor must be marked `virtual`.",
            "All private variables in Base class must be changed to `global`.",
            "Derived class constructors must be marked `static`."
        ],
        correctIndex: 0,
        explanation: "If you delete a Derived object via a Base pointer (`Base* p = new Derived(); delete p;`) without `virtual ~Base()`, C++ performs early binding and only calls `~Base()`, leaking all memory allocated by `Derived`!"
    },
    {
        id: "q6",
        category: "oop",
        question: "In operator overloading, why must `std::ostream& operator<<(std::ostream& os, const MyClass& obj)` be overloaded as a `friend` or global function?",
        options: [
            "Because the left operand (`std::cout`) belongs to `std::ostream` class in standard library, so we cannot modify `ostream` to add our member function.",
            "Because `friend` functions execute 10 times faster than member functions.",
            "Because `<<` is a bitwise shift operator that cannot work inside classes.",
            "It must be a static member function."
        ],
        correctIndex: 0,
        explanation: "In `cout << obj`, the caller (`*this`) is `cout` of type `std::ostream`. Since we cannot edit standard library headers to add member functions to `ostream`, we make a non-member function and mark it `friend`."
    },
    {
        id: "q7",
        category: "dsa_linear",
        question: "What problem does a Circular Queue (`(rear + 1) % MAX`) solve compared to a simple linear array Queue?",
        options: [
            "It eliminates 'False Overflow' where `rear == MAX-1` reports queue full even though dequeued front slots (`arr[0]`, `arr[1]`) are empty.",
            "It allows sorting elements in `O(1)` time.",
            "It changes time complexity of `dequeue()` from `O(N)` to `O(log N)`.",
            "It allows storing both `int` and `string` inside the same array."
        ],
        correctIndex: 0,
        explanation: "As items are dequeued, `front` shifts right. In a linear queue, once `rear` hits `MAX-1`, the queue is unusable. Modulo arithmetic wraps pointers around to reuse vacated front indices."
    },
    {
        id: "q8",
        category: "dsa_linear",
        question: "Why is Merge Sort (`O(N log N)`) generally preferred over Quick Sort for sorting Linked Lists?",
        options: [
            "Linked lists lack random `O(1)` index access, making Quick Sort partitioning slow (`O(N)` per swap), while Merge Sort splits cleanly using slow/fast pointers without needing random access.",
            "Quick sort takes `O(N^3)` time on linked lists.",
            "Merge sort uses zero stack memory.",
            "Linked list nodes cannot be compared using relational `<` operators."
        ],
        correctIndex: 0,
        explanation: "Quick sort relies heavily on `arr[i]` random access to swap elements across partitions. Linked lists only support sequential access (`next`), which makes Merge Sort (splitting at midpoint via Floyd's cycle pointers) vastly superior."
    },
    {
        id: "q9",
        category: "dsa_trees",
        question: "If you perform an `Inorder` traversal (`Left -> Root -> Right`) on a valid Binary Search Tree (BST), what is the order of printed elements?",
        options: [
            "Strictly Sorted Ascending Order (`e.g. 5, 12, 23, 45, 89`)",
            "Strictly Sorted Descending Order (`e.g. 89, 45, 23, 12, 5`)",
            "Random insertion order",
            "Level by level top-down order"
        ],
        correctIndex: 0,
        explanation: "By definition, all left descendants are smaller than the root, and all right descendants are larger. Visiting Left, then Root, then Right naturally visits nodes in ascending numerical order."
    },
    {
        id: "q10",
        category: "dsa_trees",
        question: "What is the primary difference between Dijkstra's Shortest Path algorithm and Floyd-Warshall algorithm?",
        options: [
            "Dijkstra (`O((V+E)log V)`) finds shortest paths from a **Single Source** to all vertices; Floyd-Warshall (`O(V^3)`) finds shortest paths between **All Pairs** of vertices simultaneously.",
            "Dijkstra works only on trees, while Floyd-Warshall works on graphs.",
            "Floyd-Warshall is faster for single queries than Dijkstra.",
            "Dijkstra allows negative weight cycles, whereas Floyd-Warshall does not."
        ],
        correctIndex: 0,
        explanation: "Dijkstra is a greedy single-source algorithm. Floyd-Warshall is a dynamic programming algorithm computing shortest distances across every pair $(i, j)$ in $O(V^3)$ time."
    }
];
