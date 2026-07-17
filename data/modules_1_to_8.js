// C++ & DSA MasterClass Pro - Curriculum Data (Modules 1 to 8)
window.CURRICULUM_DATA = window.CURRICULUM_DATA || [];

window.CURRICULUM_DATA.push(
    // =========================================================================
    // MODULE 1: Introduction to C++
    // =========================================================================
    {
        id: "mod-1",
        title: "Introduction to C++",
        category: "core",
        subtopics: [
            {
                id: "mod-1-1",
                title: "What is C++?",
                level: "Beginner",
                summary: "Overview of C++ as a high-performance, statically typed, multi-paradigm programming language developed as an extension of C.",
                content: `
                    <h2>The Foundation of Modern Software Systems</h2>
                    <p><strong>C++</strong> is a general-purpose, statically typed, compiled programming language created by Bjarne Stroustrup in 1979 at Bell Labs as an enhancement to the C programming language (originally named <em>"C with Classes"</em>).</p>
                    <p>It supports multiple programming paradigms including procedural, object-oriented, functional, and generic programming. C++ gives developers direct control over system memory and hardware resources while offering high-level abstractions like classes, templates, and standard libraries (<code>STL</code>).</p>
                    
                    <div class="highlight-box">
                        <i class="fa-solid fa-lightbulb"></i> <strong>Why C++ Dominates Industry:</strong> Major operating systems (Windows, Linux kernel components, macOS), game engines (Unreal Engine), high-frequency financial trading systems, and modern browsers (Chrome V8 engine) are powered by C++ due to its zero-overhead abstractions.
                    </div>

                    <h3>Key Characteristics of C++</h3>
                    <ul>
                        <li><strong>High Performance & Speed:</strong> compiled directly to native machine code without virtual machine overhead.</li>
                        <li><strong>Rich Standard Template Library (STL):</strong> Provides optimized algorithms, containers (<code>vector</code>, <code>map</code>), and iterators.</li>
                        <li><strong>Object-Oriented & Generic:</strong> Full support for encapsulation, inheritance, polymorphism, and compile-time templates.</li>
                    </ul>
                `
            },
            {
                id: "mod-1-2",
                title: "History of C++",
                level: "Beginner",
                summary: "Trace the evolution of C++ from 'C with Classes' in 1979 to modern standards like C++11, C++17, C++20, and C++23.",
                content: `
                    <h2>Evolution from C with Classes to Modern C++</h2>
                    <p>Bjarne Stroustrup began developing C++ in 1979 because he wanted a language that combined the high-level organization of Simula with the raw execution speed and low-level hardware access of C.</p>
                    
                    <h3>Milestone Timeline</h3>
                    <ul>
                        <li><strong>1979:</strong> <em>"C with Classes"</em> developed at Bell Labs, adding classes, basic inheritance, and type checking to C.</li>
                        <li><strong>1983:</strong> Renamed to <strong>C++</strong> (using the increment operator <code>++</code> to signify evolution). Virtual functions, function overloading, and references introduced.</li>
                        <li><strong>1998 (C++98):</strong> First ISO standard (ISO/IEC 14882:1998) released alongside the Standard Template Library (STL).</li>
                        <li><strong>2011 (C++11 - Modern C++ Revolution):</strong> Introduced <code>auto</code>, lambda expressions (<code>[](){}</code>), smart pointers (<code>unique_ptr</code>, <code>shared_ptr</code>), move semantics, and uniform initialization.</li>
                        <li><strong>2017 (C++17):</strong> Added <code>std::optional</code>, structured bindings, and filesystem library.</li>
                        <li><strong>2020 (C++20):</strong> Major leap introducing Concepts, Ranges, Coroutines, and Modules (<code>import std;</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-1-3",
                title: "Top reasons to learn C++",
                level: "Beginner",
                summary: "Why learning C++ builds the strongest foundation for computer science, system engineering, and competitive programming.",
                content: `
                    <h2>Why C++ remains a Must-Learn Language for Engineers</h2>
                    <p>Learning C++ provides a deep mental model of how computer memory, CPU registers, and compilers actually work—knowledge that transfers seamlessly to any other language (Rust, Go, Python, Java).</p>
                    
                    <h3>Top 5 Industry Reasons</h3>
                    <ol>
                        <li><strong>Unmatched Execution Speed:</strong> Essential for real-time systems, aerospace, and high-frequency quantitative trading where microseconds matter.</li>
                        <li><strong>Game Development & Graphics:</strong> AAA games rely on C++ for Direct3D, OpenGL/Vulkan rendering and physics engines (<code>Unreal Engine</code>).</li>
                        <li><strong>Mastery of Memory Management:</strong> You learn how pointers (<code>*</code>), stack vs heap, allocation (<code>new</code>/<code>delete</code>), and cache locality impact performance.</li>
                        <li><strong>Competitive Programming & DSA:</strong> Over 85% of competitive programmers in ICPC and Google Code Jam use C++ because of its lightning-fast <code>std::cin/cout</code> and STL containers.</li>
                        <li><strong>High Salary & Mission-Critical Jobs:</strong> C++ experts are heavily recruited for embedded electronics, robotics, AI inference engines, and database kernels.</li>
                    </ol>
                `
            },
            {
                id: "mod-1-4",
                title: "Procedural Oriented vs Object Oriented Programming",
                level: "Beginner",
                summary: "Compare top-down function-driven programming (C/POP) versus modular class-driven paradigms (C++/OOP).",
                content: `
                    <h2>Comparing Programming Paradigms: POP vs OOP</h2>
                    <p>Before Object-Oriented Programming (OOP) took over, most software was written using Procedural Oriented Programming (POP). Understanding the contrast explains why C++ was created.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">Paradigm Comparison Table</span></div>
                        <pre><code>+-----------------------+---------------------------------------+---------------------------------------+
| Feature               | Procedural Programming (POP / C)      | Object-Oriented Programming (OOP/C++) |
+-----------------------+---------------------------------------+---------------------------------------+
| Core Focus            | Functions and procedures (Actions)    | Objects (Data + Methods bundled)      |
| Program Structure     | Top-down modular decomposition        | Bottom-up class and hierarchy design  |
| Data Security         | Global data is accessible everywhere  | Encapsulated via private/protected    |
| Reusability           | Limited (code duplication common)     | High (via Inheritance & Polymorphism) |
| Real-World Modeling   | Difficult for complex domains         | Excellent 1:1 real-world modeling     |
+-----------------------+---------------------------------------+---------------------------------------+</code></pre>
                    </div>
                `
            },
            {
                id: "mod-1-5",
                title: "Introduction to Object Oriented Programming",
                level: "Beginner",
                summary: "Introduction to the 4 pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism in C++.",
                content: `
                    <h2>The 4 Pillars of Object-Oriented Programming</h2>
                    <p>Object-Oriented Programming models software around real-world entities called <strong>Objects</strong>, which are instances of blueprints called <strong>Classes</strong>.</p>
                    
                    <h3>1. Encapsulation (Data Hiding)</h3>
                    <p>Bundling data variables and the functions that manipulate them inside a single unit (<code>class</code>), restricting unauthorized outside modification using access specifiers (<code>private</code>, <code>public</code>).</p>
                    
                    <h3>2. Abstraction</h3>
                    <p>Hiding internal implementation complexity from the user and exposing only essential interfaces (e.g., calling <code>sort(vec.begin(), vec.end())</code> without knowing its internal Introsort implementation).</p>
                    
                    <h3>3. Inheritance</h3>
                    <p>Allowing a child class (<code>Derived</code>) to inherit attributes and methods from a parent class (<code>Base</code>), enabling code reuse and hierarchical categorization.</p>
                    
                    <h3>4. Polymorphism (One Interface, Multiple Forms)</h3>
                    <p>Enabling functions or operators to behave differently based on context via <em>Compile-Time Overloading</em> (<code>func(int)</code> vs <code>func(double)</code>) or <em>Runtime Virtual Overriding</em>.</p>
                `
            },
            {
                id: "mod-1-6",
                title: "What is stream and types of stream?",
                level: "Intermediate",
                summary: "Understanding C++ I/O stream hierarchy: istream, ostream, and buffer flow mechanism.",
                content: `
                    <h2>Understanding C++ I/O Streams (<code>&lt;iostream&gt;</code>)</h2>
                    <p>In C++, input and output are performed using <strong>Streams</strong>—a sequence of bytes flowing from a source (keyboard/file) to a destination (console/screen).</p>
                    
                    <h3>Types of Standard Streams</h3>
                    <ul>
                        <li><strong><code>std::istream</code> (Input Stream):</strong> Flows from input devices into program variables (<code>std::cin</code>).</li>
                        <li><strong><code>std::ostream</code> (Output Stream):</strong> Flows from program variables to display output (<code>std::cout</code>).</li>
                        <li><strong><code>std::cerr</code> (Unbuffered Error Stream):</strong> Used for immediate critical error output without waiting for buffer flushes.</li>
                        <li><strong><code>std::clog</code> (Buffered Log Stream):</strong> Used for logging diagnostic messages efficiently.</li>
                    </ul>
                `
            },
            {
                id: "mod-1-7",
                title: "Cout & Cin",
                level: "Beginner",
                summary: "Mastering standard console output (std::cout <<) and input (std::cin >>) operator mechanics.",
                content: `
                    <h2>Standard Console Input (<code>cin</code>) and Output (<code>cout</code>)</h2>
                    <p><code>std::cout</code> uses the <strong>Insertion Operator (<code>&lt;&lt;</code>)</strong> to push formatted data into the output buffer, while <code>std::cin</code> uses the <strong>Extraction Operator (<code>&gt;&gt;</code>)</strong> to extract typed values from the keyboard buffer.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">cin_cout_demo.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    string name;
    int age;
    
    // Output prompt using insertion operator (&lt;&lt;)
    cout &lt;&lt; "Enter your full name and age: ";
    
    // Extraction operator (&gt;&gt;) reads space-separated input
    cin &gt;&gt; name &gt;&gt; age;
    
    cout &lt;&lt; "Hello " &lt;&lt; name &lt;&lt; ", you are " &lt;&lt; age &lt;&lt; " years old." &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-1-8",
                title: "How to use clrscr function in VS Code",
                level: "Beginner",
                summary: "Understanding legacy Turbo C++ clrscr() vs modern standard terminal clear commands in VS Code.",
                content: `
                    <h2>Clearing the Terminal in VS Code vs Legacy Turbo C++</h2>
                    <p>In old DOS-based IDEs like Turbo C++, developers used <code>clrscr()</code> from <code>&lt;conio.h&gt;</code> to clear the console screen. However, <code>&lt;conio.h&gt;</code> is <strong>non-standard</strong> and not supported by modern GCC/Clang/MSVC compilers in Visual Studio Code.</p>
                    
                    <h3>Professional Modern Alternatives in VS Code</h3>
                    <p>To clear the console cleanly across cross-platform environments, use standard system calls or ANSI escape codes:</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">modern_clrscr.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;cstdlib&gt; // For system()
using namespace std;

void clearScreen() {
    #ifdef _WIN32
        system("CLS"); // Windows CMD / PowerShell in VS Code
    #else
        system("clear"); // Linux / macOS Terminal
    #endif
}

int main() {
    cout &lt;&lt; "Simulating complex calculation..." &lt;&lt; endl;
    clearScreen(); // Clears terminal perfectly in VS Code!
    cout &lt;&lt; "Screen cleared! Fresh output." &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-1-9",
                title: "Keywords & Identifiers",
                level: "Beginner",
                summary: "Reserved C++ keywords vs naming conventions and rules for user-defined identifiers.",
                content: `
                    <h2>Keywords and Naming Identifiers</h2>
                    <p><strong>Keywords</strong> are reserved vocabulary words that have special meanings to the C++ compiler (<code>int</code>, <code>class</code>, <code>return</code>, <code>virtual</code>, <code>const</code>). You cannot use them as variable names.</p>
                    
                    <h3>Rules for Valid Identifiers (Variable / Function Names)</h3>
                    <ul>
                        <li>Must begin with an alphabet letter (<code>a-z</code>, <code>A-Z</code>) or an underscore (<code>_</code>).</li>
                        <li>Cannot start with a digit (<code>0-9</code>). For example, <code>9lives</code> is invalid, but <code>lives9</code> is valid.</li>
                        <li>Case-sensitive (<code>totalScore</code> and <code>TotalScore</code> are distinct identifiers).</li>
                        <li>No spaces or special characters (<code>@, $, #, %</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-1-10",
                title: "Escape Sequences",
                level: "Beginner",
                summary: "Special backslash-prefixed formatting characters like \\n, \\t, \\\", and \\\\ in C++.",
                content: `
                    <h2>Formatting Output with Escape Sequences</h2>
                    <p>Escape sequences are two-character combinations starting with a backslash (<code>\</code>) used inside character or string literals to represent non-printable control actions.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">Escape Sequence Reference</span></div>
                        <pre><code>\n  -> Newline (Moves cursor to start of next line)
\t  -> Horizontal Tab (Indents text by 4/8 spaces)
\\  -> Literal Backslash character
\"  -> Double Quote inside string ("He said \"Hello\"")
\a  -> Alert / System Audible Bell sound
\r  -> Carriage Return (Moves cursor to beginning of current line)</code></pre>
                    </div>
                `
            },
            {
                id: "mod-1-11",
                title: "Comments in C++",
                level: "Beginner",
                summary: "Writing professional single-line (//) and multi-line (/* */) documentation comments.",
                content: `
                    <h2>Code Documentation: Single and Multi-Line Comments</h2>
                    <p>Comments are ignored by the compiler and are vital for team collaboration, code clarity, and generating API documentation.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">comments.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">// Single-line comment: Calculates Euclidean distance
/*
   Multi-line comment block:
   Author: C++ MasterClass Pro
   Date: 2026-07-16
   Description: Demonstrates clean inline and header commenting syntax.
*/
int calculateArea(int width, int height) {
    return width * height; // Inline explanation
}</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 2: Hands on programming with C++
    // =========================================================================
    {
        id: "mod-2",
        title: "Hands on programming with C++",
        category: "core",
        subtopics: [
            {
                id: "mod-2-1",
                title: "How to write program in C++",
                level: "Beginner",
                summary: "Understanding the compilation pipeline: source code (.cpp) -> preprocessor -> compiler (.obj) -> linker (.exe).",
                content: `
                    <h2>The C++ Compilation & Execution Pipeline</h2>
                    <p>Unlike interpreted languages like Python or JavaScript, C++ code must be compiled down to raw machine instructions before execution.</p>
                    
                    <h3>4-Step Build Cycle</h3>
                    <ol>
                        <li><strong>Preprocessing (<code>#include</code>, <code>#define</code>):</strong> The preprocessor resolves headers and macro replacements, producing expanded source code.</li>
                        <li><strong>Compilation (<code>.cpp -&gt; .s/.asm</code>):</strong> Converts expanded source into assembly code.</li>
                        <li><strong>Assembly (<code>.asm -&gt; .obj/.o</code>):</strong> Converts assembly instructions into object binary files containing machine code.</li>
                        <li><strong>Linking (<code>.obj + Libraries -&gt; .exe</code>):</strong> The linker binds object files with standard libraries (<code>msvcrt.lib</code>, <code>libstdc++.a</code>) to create the final executable.</li>
                    </ol>
                `
            },
            {
                id: "mod-2-2",
                title: "How to install Turbo C++ on windows",
                level: "Beginner",
                summary: "Historical perspective on configuring DOSBox and Turbo C++ 3.2 on modern Windows 10/11 machines.",
                content: `
                    <h2>Running Legacy Turbo C++ on Modern Windows</h2>
                    <p>While Turbo C++ (1990) is obsolete for production software, many university syllabi still reference it. Because 64-bit Windows cannot natively run 16-bit DOS applications, DOSBox virtualization is required.</p>
                    
                    <h3>Installation Steps</h3>
                    <ol>
                        <li>Download the packaged <code>Turbo C++ 3.2 with DOSBox</code> installer.</li>
                        <li>Extract to <code>C:\TC</code> directory to maintain standard include paths (<code>C:\TC\INCLUDE</code>).</li>
                        <li>Launch DOSBox and mount the drive: <code>mount c c:\tc</code> then run <code>tc.exe</code>.</li>
                    </ol>
                    <div class="highlight-box warning">
                        <strong>Important Note:</strong> Turbo C++ uses pre-standard C++ syntax (e.g., <code>#include &lt;iostream.h&gt;</code> without <code>using namespace std;</code>). For modern software engineering, always use VS Code + GCC/MSVC.
                    </div>
                `
            },
            {
                id: "mod-2-3",
                title: "How to install & set VS Code for C++",
                level: "Beginner",
                summary: "Complete step-by-step setup guide for Visual Studio Code with MinGW-w64 (GCC 13+) / MSVC and IntelliSense.",
                content: `
                    <h2>Setting Up Modern C++ Development in Visual Studio Code</h2>
                    <p>VS Code is the industry-standard lightweight editor for C++ when paired with a powerful compiler chain.</p>
                    
                    <h3>Step-by-Step Configuration on Windows</h3>
                    <ol>
                        <li><strong>Install Compiler (<code>MinGW-w64 GCC</code>):</strong> Download via MSYS2 (<code>pacman -S mingw-w64-ucrt-x86_64-gcc</code>) and add <code>C:\\msys64\\ucrt64\\bin</code> to your Windows <code>PATH</code> environment variable.</li>
                        <li><strong>Verify in PowerShell:</strong> Type <code>g++ --version</code> to ensure compiler recognition.</li>
                        <li><strong>Install VS Code Extensions:</strong> Install official Microsoft <strong>C/C++ Extension Pack</strong> and <strong>Code Runner</strong>.</li>
                        <li><strong>Configure <code>tasks.json</code>:</strong> Set up automated build tasks with <code>-std=c++20</code> flags for modern syntax.</li>
                    </ol>
                `
            },
            {
                id: "mod-2-4",
                title: "First program in C++",
                level: "Beginner",
                summary: "Anatomy of main(), #include headers, namespace std, and return codes.",
                content: `
                    <h2>Anatomy of Your First C++ Program</h2>
                    <p>Let's dissect every line of the classic "Hello, World!" application to understand standard anatomy.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">hello_world.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt; // 1. Preprocessor directive including standard I/O library

using namespace std; // 2. Brings standard library symbols directly into scope

int main() {         // 3. Entry point of every C++ program
    cout &lt;&lt; "Welcome to C++ & DSA MasterClass Pro!" &lt;&lt; endl; // 4. Console print
    return 0;        // 5. Return code 0 indicates successful execution to OS
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-2-5",
                title: "Error and its types",
                level: "Beginner",
                summary: "Comprehensive breakdown of Compile-time (Syntax), Linker, Runtime, and Semantic/Logical errors.",
                content: `
                    <h2>Understanding and Debugging C++ Error Types</h2>
                    <p>Writing robust code requires knowing how to diagnose compiler feedback and runtime failures.</p>
                    
                    <h3>1. Syntax Errors (Compile-Time)</h3>
                    <p>Occur when code violates grammar rules (e.g., missing semicolon <code>;</code>, unclosed bracket <code>}</code>, or typo in <code>int x = "hello";</code>).</p>
                    
                    <h3>2. Linker Errors</h3>
                    <p>Occur when the compiler creates <code>.obj</code> files successfully, but the linker cannot resolve a function definition (e.g., declaring <code>void foo();</code> and calling it in <code>main()</code> without writing its body -> <code>LNK2019: unresolved external symbol</code>).</p>
                    
                    <h3>3. Runtime Errors</h3>
                    <p>Occur while the executable is running, causing crashes or segmentation faults (<code>SIGSEGV</code>). Common causes include dividing by zero (<code>x / 0</code>), dereferencing <code>nullptr</code>, or accessing out-of-bounds array indices <code>arr[100]</code>.</p>
                    
                    <h3>4. Logical Errors (Semantic)</h3>
                    <p>The program compiles and runs cleanly without crashing, but produces incorrect calculations (e.g., writing <code>area = width + height</code> instead of multiplication).</p>
                `
            },
            {
                id: "mod-2-6",
                title: "How to build correct programming logic",
                level: "Beginner",
                summary: "Problem decomposition techniques using Flowcharts, Pseudocode, Dry-Running, and Edge Case analysis.",
                content: `
                    <h2>Building Strong Problem-Solving Logic</h2>
                    <p>Before typing C++ syntax, professional engineers structure their thoughts using systemic algorithmic decomposition.</p>
                    
                    <h3>The 4 Golden Rules of Logic Building</h3>
                    <ol>
                        <li><strong>Understand Input & Output Spec:</strong> Clarify constraints (<code>N &lt;= 10^5</code>) and corner cases (negative numbers, empty inputs).</li>
                        <li><strong>Write Pseudocode / Algorithm:</strong> Draft logical steps in plain English or structured flow diagrams before writing code.</li>
                        <li><strong>Dry Run on Paper (Hand Tracing):</strong> Trace variables step-by-step with sample test inputs (<code>n = 5</code>) to verify loop termination and pointer states.</li>
                        <li><strong>Modularize with Functions:</strong> Break complex tasks into small, testable utility functions (<code>isPrime()</code>, <code>swap()</code>).</li>
                    </ol>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 3: Data types in C++
    // =========================================================================
    {
        id: "mod-3",
        title: "Data types in C++",
        category: "core",
        subtopics: [
            {
                id: "mod-3-1",
                title: "Data types and their types",
                level: "Beginner",
                summary: "Classification of Primitive (char, int, float), Derived (array, pointer), and User-Defined (class, struct, enum) types.",
                content: `
                    <h2>Classification of C++ Data Types</h2>
                    <p>C++ is a strongly typed language where every variable must declare its memory footprint and data category at compile time.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">Data Type Tree Hierarchy</span></div>
                        <pre><code>C++ DATA TYPES
 ├── 1. Primitive / Built-in Types
 │    ├── Integer: int, short, long, long long
 │    ├── Character: char, wchar_t, char16_t
 │    ├── Floating Point: float, double, long double
 │    ├── Boolean: bool (true / false)
 │    └── Void: void (valueless / raw memory)
 │
 ├── 2. Derived Types
 │    ├── Array (int arr[10])
 │    ├── Pointer (int* ptr)
 │    └── Reference (int& ref = x)
 │
 └── 3. User-Defined Types
      ├── Structure (struct)
      ├── Class (class)
      ├── Enumeration (enum / enum class)
      └── Union (union)</code></pre>
                    </div>
                `
            },
            {
                id: "mod-3-2",
                title: "int data type",
                level: "Beginner",
                summary: "Memory size (4 bytes), signed vs unsigned modifiers, and integer overflow mechanics.",
                content: `
                    <h2>The Integer Data Type (<code>int</code>)</h2>
                    <p>On modern 32-bit and 64-bit architectures, <code>int</code> typically occupies <strong>4 bytes (32 bits)</strong> of memory, using Two's Complement representation for signed values.</p>
                    
                    <h3>Range and Type Modifiers</h3>
                    <ul>
                        <li><strong><code>signed int</code> (Default):</strong> Range is <code>-2,147,483,648</code> to <code>+2,147,483,647</code> (<code>-2^31</code> to <code>2^31 - 1</code>).</li>
                        <li><strong><code>unsigned int</code>:</strong> Range is <code>0</code> to <code>4,294,967,295</code> (<code>0</code> to <code>2^32 - 1</code>). Double the positive capacity!</li>
                        <li><strong><code>long long int</code> (8 bytes):</strong> Essential for large calculations like factorial or competitive programming (<code>[-9 x 10^18, +9 x 10^18]</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-3-3",
                title: "Integer Representation – Decimal, Octal, Hexadecimal",
                level: "Intermediate",
                summary: "Number bases in C++ literals: prefix 0 for octal, 0x for hexadecimal, and 0b for binary (C++14).",
                content: `
                    <h2>Number Base Literals in C++</h2>
                    <p>You can initialize integers directly in different base systems by applying prefixes in your code:</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">number_bases.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int decVal = 65;       // Decimal (Base 10)
    int octVal = 0101;     // Octal (Base 8, begins with prefix '0') -> 65 in base 10
    int hexVal = 0x41;     // Hexadecimal (Base 16, prefix '0x') -> 65 in base 10
    int binVal = 0b01000001; // Binary literal (Base 2, prefix '0b' C++14) -> 65

    cout &lt;&lt; "All represent integer 65: " &lt;&lt; decVal &lt;&lt; " " &lt;&lt; octVal &lt;&lt; " " &lt;&lt; hexVal &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-3-4",
                title: "Character Data Type",
                level: "Beginner",
                summary: "ASCII character encoding, char (1 byte) memory storage, and typecasting characters to integer values.",
                content: `
                    <h2>The Character Data Type (<code>char</code>)</h2>
                    <p><code>char</code> occupies exactly <strong>1 byte (8 bits)</strong> of memory and stores characters as their corresponding integer ASCII codes (e.g., <code>'A' = 65</code>, <code>'a' = 97</code>, <code>'0' = 48</code>).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">char_ascii.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    char ch = 'A';
    // Explicit casting to int reveals underlying ASCII value
    cout &lt;&lt; "Character: " &lt;&lt; ch &lt;&lt; " | ASCII Code: " &lt;&lt; (int)ch &lt;&lt; endl; // Outputs 65
    
    char lower = ch + 32; // Adding 32 converts uppercase ASCII to lowercase
    cout &lt;&lt; "Converted: " &lt;&lt; lower &lt;&lt; " | ASCII Code: " &lt;&lt; (int)lower &lt;&lt; endl; // Outputs 'a' (97)
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-3-5",
                title: "Float and double data type",
                level: "Beginner",
                summary: "IEEE 754 floating-point precision: float (4 bytes, 7 decimal digits) vs double (8 bytes, 15 digits).",
                content: `
                    <h2>Floating Point Numbers: <code>float</code> vs <code>double</code></h2>
                    <p>Real numbers with fractional parts are stored using the IEEE 754 standard floating-point representation.</p>
                    
                    <ul>
                        <li><strong><code>float</code> (4 bytes / Single Precision):</strong> Provides roughly ~6-7 significant decimal digits of precision. Must use <code>f</code> suffix (<code>float pi = 3.14159f;</code>).</li>
                        <li><strong><code>double</code> (8 bytes / Double Precision - Default):</strong> Provides ~15-17 decimal digits of precision (<code>double pi = 3.141592653589793;</code>). Recommended for scientific computation.</li>
                    </ul>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 4: Operators in C++
    // =========================================================================
    {
        id: "mod-4",
        title: "Operators in C++",
        category: "core",
        subtopics: [
            {
                id: "mod-4-1",
                title: "Types of operators",
                level: "Beginner",
                summary: "Overview of Arithmetic, Relational, Logical, Bitwise, Assignment, and Ternary operators.",
                content: `
                    <h2>Comprehensive C++ Operator Classification</h2>
                    <p>Operators are symbols that command the compiler to perform specific mathematical, logical, or bit-level computations on operands.</p>
                    
                    <ul>
                        <li><strong>Arithmetic (<code>+, -, *, /, %</code>):</strong> Basic mathematical computation. Note that <code>%</code> (modulo) only works on integral types.</li>
                        <li><strong>Relational (<code>==, !=, &lt;, &gt;, &lt;=, &gt;=</code>):</strong> Compares values and returns <code>bool</code> (<code>true</code>/<code>false</code>).</li>
                        <li><strong>Logical (<code>&&, ||, !</code>):</strong> Combines conditional expressions with short-circuit evaluation.</li>
                        <li><strong>Bitwise (<code>&, |, ^, ~, &lt;&lt;, &gt;&gt;</code>):</strong> Manipulates individual binary bits directly inside integer memory.</li>
                    </ul>
                `
            },
            {
                id: "mod-4-2",
                title: "Increment and decrement operator",
                level: "Beginner",
                summary: "Pre-increment (++x) vs Post-increment (x++) execution priority and memory side-effects.",
                content: `
                    <h2>Pre vs Post Increment (<code>++</code>) and Decrement (<code>--</code>)</h2>
                    <p>Understanding when the increment happens relative to expression evaluation is a critical C++ interview topic.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">increment_demo.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 10;
    // Pre-increment (++a): First increments 'a' to 11, then returns 11 to 'b'
    int b = ++a; 
    cout &lt;&lt; "After ++a -> a: " &lt;&lt; a &lt;&lt; ", b: " &lt;&lt; b &lt;&lt; endl; // a: 11, b: 11

    int x = 10;
    // Post-increment (x++): First assigns current value 10 to 'y', THEN increments 'x' to 11
    int y = x++; 
    cout &lt;&lt; "After x++ -> x: " &lt;&lt; x &lt;&lt; ", y: " &lt;&lt; y &lt;&lt; endl; // x: 11, y: 10
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-4-3",
                title: "Logical operator",
                level: "Beginner",
                summary: "Logical AND (&&), Logical OR (||), Logical NOT (!) and short-circuit evaluation optimization.",
                content: `
                    <h2>Logical Operators and Short-Circuit Evaluation</h2>
                    <p>Logical operators evaluate multiple boolean conditions together. C++ employs <strong>Short-Circuit Evaluation</strong> for optimal efficiency:</p>
                    
                    <ul>
                        <li><strong>In <code>(condA && condB)</code>:</strong> If <code>condA</code> evaluates to <code>false</code>, C++ immediately skips testing <code>condB</code> because the entire AND expression is guaranteed to be false.</li>
                        <li><strong>In <code>(condA || condB)</code>:</strong> If <code>condA</code> evaluates to <code>true</code>, C++ skips <code>condB</code> because the OR expression is already satisfied.</li>
                    </ul>
                `
            },
            {
                id: "mod-4-4",
                title: "Conditional operator",
                level: "Beginner",
                summary: "Ternary operator syntax (condition ? true_val : false_val) as a compact if-else alternative.",
                content: `
                    <h2>The Ternary Conditional Operator (<code>?:</code>)</h2>
                    <p>The ternary operator is the only C++ operator that requires three operands. It acts as an inline single-line <code>if-else</code> statement.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">ternary.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 18;
    // Syntax: condition ? expression_if_true : expression_if_false
    string status = (age &gt;= 18) ? "Eligible to Vote" : "Minor";
    
    cout &lt;&lt; "Status: " &lt;&lt; status &lt;&lt; endl;
    
    // Finding maximum of two numbers cleanly
    int x = 45, y = 88;
    int maxVal = (x &gt; y) ? x : y;
    cout &lt;&lt; "Max: " &lt;&lt; maxVal &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-4-5",
                title: "Bitwise operator",
                level: "Intermediate",
                summary: "Bit-level AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), and Right Shift (>>) operations.",
                content: `
                    <h2>Bitwise Manipulation Operators</h2>
                    <p>Bitwise operations process integers bit by bit at the hardware ALU level, making them extremely fast for flags, encryption, and competitive programming hacks.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">bitwise.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 5;  // Binary: 0000 0101
    int b = 3;  // Binary: 0000 0011

    cout &lt;&lt; "a & b  (AND): " &lt;&lt; (a & b)  &lt;&lt; endl; // 0001 (1) -> Both bits 1
    cout &lt;&lt; "a | b   (OR): " &lt;&lt; (a | b)  &lt;&lt; endl; // 0111 (7) -> Either bit 1
    cout &lt;&lt; "a ^ b  (XOR): " &lt;&lt; (a ^ b)  &lt;&lt; endl; // 0110 (6) -> Different bits
    cout &lt;&lt; "a << 1 (Left Shift x2): " &lt;&lt; (a &lt;&lt; 1) &lt;&lt; endl; // 1010 (10) -> Multiplies by 2
    cout &lt;&lt; "a >> 1 (Right Shift /2): " &lt;&lt; (a &gt;&gt; 1) &lt;&lt; endl; // 0010 (2) -> Divides by 2
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-4-6",
                title: "How to solve circuit expression",
                level: "Intermediate",
                summary: "Evaluating complex operator precedence, associativity rules, and parenthesizing boolean logic circuits.",
                content: `
                    <h2>Solving Complex Boolean & Circuit Expressions</h2>
                    <p>In digital electronics and C++ expressions (<code>A || B && !C</code>), resolving the output requires strict adherence to <strong>Precedence</strong> and <strong>Associativity</strong>.</p>
                    
                    <h3>Precedence Order (Highest to Lowest)</h3>
                    <ol>
                        <li>Parentheses <code>()</code></li>
                        <li>Logical NOT <code>!</code> and Bitwise NOT <code>~</code></li>
                        <li>Arithmetic (<code>*, /, %</code> followed by <code>+, -</code>)</li>
                        <li>Relational (<code>&lt;, &gt;, &lt;=, &gt;=</code> followed by <code>==, !=</code>)</li>
                        <li>Logical AND <code>&&</code> (Evaluated before <code>||</code>)</li>
                        <li>Logical OR <code>||</code></li>
                        <li>Assignment <code>=</code> (Right-to-Left associativity)</li>
                    </ol>
                    <div class="highlight-box success">
                        <strong>Example Trace:</strong> <code>true || false && !true</code><br>
                        Step 1 (<code>!</code> highest): <code>!true</code> becomes <code>false</code> -> <code>true || false && false</code><br>
                        Step 2 (<code>&&</code> before <code>||</code>): <code>false && false</code> becomes <code>false</code> -> <code>true || false</code><br>
                        Step 3 (<code>||</code> final): <code>true || false</code> -> Result is <strong>true</strong>!
                    </div>
                `
            },
            {
                id: "mod-4-7",
                title: "Assignment Operators",
                level: "Beginner",
                summary: "Simple (=) vs Compound arithmetic assignment operators (+=, -=, *=, /=, %=, &=, |=).",
                content: `
                    <h2>Compound Assignment Operators</h2>
                    <p>Compound assignment combines arithmetic/bitwise calculation with variable assignment in a clean right-associative statement.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">compound_assign.cpp</span></div>
                        <pre><code class="language-cpp">int x = 10;
x += 5;   // Equivalent to: x = x + 5  (x is now 15)
x -= 3;   // Equivalent to: x = x - 3  (x is now 12)
x *= 2;   // Equivalent to: x = x * 2  (x is now 24)
x /= 4;   // Equivalent to: x = x / 4  (x is now 6)
x %= 4;   // Equivalent to: x = x % 4  (x is now 2)
x &lt;&lt;= 2;  // Bitwise left shift assign: x = x &lt;&lt; 2 (x is now 8)</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 5: Statements and Loops in C++
    // =========================================================================
    {
        id: "mod-5",
        title: "Statements and Loops in C++",
        category: "core",
        subtopics: [
            {
                id: "mod-5-1",
                title: "Conditional statements",
                level: "Beginner",
                summary: "if, if-else, and if-else-if ladder decision structures branching execution flow.",
                content: `
                    <h2>Decision Making: <code>if</code>, <code>if-else</code>, and <code>if-else-if</code></h2>
                    <p>Conditional statements branch program flow based on boolean expression evaluation (<code>true</code>/<code>false</code>).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">conditions.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int score = 85;
    
    if (score &gt;= 90) {
        cout &lt;&lt; "Grade: A+ (Outstanding)" &lt;&lt; endl;
    } else if (score &gt;= 80) {
        cout &lt;&lt; "Grade: A (Excellent)" &lt;&lt; endl;
    } else if (score &gt;= 70) {
        cout &lt;&lt; "Grade: B (Good)" &lt;&lt; endl;
    } else {
        cout &lt;&lt; "Grade: Needs Improvement" &lt;&lt; endl;
    }
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-2",
                title: "Nested if else",
                level: "Beginner",
                summary: "Placing if-else decision branches inside inner scope blocks for multi-level logic validation.",
                content: `
                    <h2>Nested <code>if-else</code> Structures</h2>
                    <p>When multiple hierarchical checks must pass (e.g., checking credentials first, then checking account authorization), statements can be nested inside outer blocks.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">nested_if.cpp</span></div>
                        <pre><code class="language-cpp">int age = 21;
bool hasLicense = true;

if (age &gt;= 18) {
    if (hasLicense) {
        cout &lt;&lt; "Authorized to drive vehicle." &lt;&lt; endl;
    } else {
        cout &lt;&lt; "Adult age, but valid driver license is required." &lt;&lt; endl;
    }
} else {
    cout &lt;&lt; "Underage for driving." &lt;&lt; endl;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-3",
                title: "Switch case",
                level: "Beginner",
                summary: "Menu-driven branching using switch(expr), case labels, break statements, and default fallbacks.",
                content: `
                    <h2>Multi-Way Branching: <code>switch-case</code></h2>
                    <p>The <code>switch</code> statement compares an integral or character expression against multiple constant <code>case</code> labels using jump tables (<code>O(1)</code> lookup speed).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">switch_demo.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    char op = '*';
    int a = 12, b = 4;

    switch(op) {
        case '+': cout &lt;&lt; "Sum: " &lt;&lt; (a + b) &lt;&lt; endl; break;
        case '-': cout &lt;&lt; "Diff: " &lt;&lt; (a - b) &lt;&lt; endl; break;
        case '*': cout &lt;&lt; "Prod: " &lt;&lt; (a * b) &lt;&lt; endl; break; // Executes here
        case '/': cout &lt;&lt; "Div: " &lt;&lt; (a / b) &lt;&lt; endl; break;
        default:  cout &lt;&lt; "Error: Invalid operation label!" &lt;&lt; endl; break;
    }
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-4",
                title: "Goto statements",
                level: "Beginner",
                summary: "Unconditional jumps using goto label; and why structured programming discourages spaghetti code.",
                content: `
                    <h2>Unconditional Jumps (<code>goto</code>)</h2>
                    <p><code>goto</code> transfers execution immediately to a named label within the same function scope.</p>
                    
                    <div class="highlight-box warning">
                        <strong>Why <code>goto</code> is Discouraged in Industry:</strong> Overuse creates unmaintainable "spaghetti code" where execution jumps unpredictably across scopes, bypassing variable initialization and breaking RAII cleanup. Use loops (<code>for</code>/<code>while</code>) or <code>break</code>/<code>continue</code> instead.
                    </div>
                `
            },
            {
                id: "mod-5-5",
                title: "What are loops?",
                level: "Beginner",
                summary: "Concept of iteration: initialization, termination condition, and increment/decrement step.",
                content: `
                    <h2>Iteration and Loop Architecture</h2>
                    <p>Loops allow executing a block of statements repeatedly as long as a specified boundary condition evaluates to <code>true</code>.</p>
                    
                    <h3>3 Components of Every Loop</h3>
                    <ol>
                        <li><strong>Initialization (<code>int i = 0</code>):</strong> Sets up loop control counter once before entering iteration.</li>
                        <li><strong>Termination Condition (<code>i &lt; n</code>):</strong> Checked before or after each cycle; loop exits when false.</li>
                        <li><strong>Step Update (<code>i++</code>):</strong> Advances counter towards the termination boundary.</li>
                    </ol>
                `
            },
            {
                id: "mod-5-6",
                title: "While loop",
                level: "Beginner",
                summary: "Entry-controlled iteration checking condition before each pass.",
                content: `
                    <h2>Entry-Controlled Iteration: <code>while</code> Loop</h2>
                    <p>A <code>while</code> loop evaluates its condition <strong>before</strong> entering the body. If the condition is false initially, the loop body executes zero times.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">while_countdown.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int count = 5;
    while (count &gt; 0) {
        cout &lt;&lt; "Countdown: " &lt;&lt; count &lt;&lt; endl;
        count--; // Step decrement
    }
    cout &lt;&lt; "Ignition sequence complete!" &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-7",
                title: "While vs do while",
                level: "Beginner",
                summary: "Compare Entry-controlled (while) vs Exit-controlled (do-while) guaranteed single execution.",
                content: `
                    <h2><code>while</code> (Entry-Controlled) vs <code>do-while</code> (Exit-Controlled)</h2>
                    <p>The <code>do-while</code> loop checks its condition at the bottom of the loop block, guaranteeing that the code inside executes <strong>at least once</strong> regardless of the initial condition check.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">do_while_menu.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice;
    do {
        cout &lt;&lt; "\\n--- Interactive Menu ---" &lt;&lt; endl;
        cout &lt;&lt; "1. Start Game\\n2. Load Settings\\n0. Exit\\nEnter choice: ";
        cin &gt;&gt; choice;
    } while (choice != 0); // Guaranteed to show menu at least once!
    
    cout &lt;&lt; "Program exited." &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-8",
                title: "for loop",
                level: "Beginner",
                summary: "Compact iteration combining initialization, condition check, and step update on one line.",
                content: `
                    <h2>The Standard <code>for</code> Loop</h2>
                    <p>The <code>for</code> loop packs all three iteration control mechanisms cleanly into a single header statement.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">for_loop.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    // Syntax: for (init; condition; update)
    for (int i = 1; i &lt;= 10; i++) {
        cout &lt;&lt; "2 x " &lt;&lt; i &lt;&lt; " = " &lt;&lt; (2 * i) &lt;&lt; endl;
    }
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-9",
                title: "Nested loop",
                level: "Intermediate",
                summary: "Loops running inside loops: 2D matrix traversal and combinatorial iterations.",
                content: `
                    <h2>Nested Loops (<code>O(N x M)</code> Complexity)</h2>
                    <p>When a loop exists inside another loop, the inner loop completes all its iterations for every single step of the outer loop.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">nested_multiplication_grid.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    for (int row = 1; row &lt;= 5; row++) {
        for (int col = 1; col &lt;= 5; col++) {
            cout &lt;&lt; setw(4) &lt;&lt; (row * col);
        }
        cout &lt;&lt; endl; // Newline after each row completes
    }
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-10",
                title: "C++ program to find sum of digits",
                level: "Beginner",
                summary: "Extracting digits using modulo (% 10) and division (/ 10) inside a while loop.",
                content: `
                    <h2>Algorithm: Sum of Digits of a Number</h2>
                    <p>To extract digits from right to left from any integer <code>N</code>, we repeatedly use <code>digit = N % 10</code> to get the last digit and <code>N /= 10</code> to drop the last digit.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">sum_of_digits.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int n = 4852;
    int sum = 0;
    
    while (n &gt; 0) {
        int lastDigit = n % 10; // Extract rightmost digit
        sum += lastDigit;       // Add to running accumulator
        n /= 10;                // Remove rightmost digit
    }
    
    cout &lt;&lt; "Sum of digits of 4852 is: " &lt;&lt; sum &lt;&lt; endl; // 4+8+5+2 = 19
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-11",
                title: "C++ program to reverse number",
                level: "Beginner",
                summary: "Constructing reversed integer using formula: rev = (rev * 10) + digit.",
                content: `
                    <h2>Algorithm: Reversing an Integer</h2>
                    <p>We build the reversed number by multiplying our accumulator <code>rev</code> by 10 and adding the extracted last digit.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">reverse_number.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int n = 12345;
    int rev = 0;
    
    while (n != 0) {
        int digit = n % 10;
        rev = (rev * 10) + digit; // Shift existing digits left and append new digit
        n /= 10;
    }
    
    cout &lt;&lt; "Reversed Number: " &lt;&lt; rev &lt;&lt; endl; // Outputs 54321
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-12",
                title: "C++ program for palindrome number",
                level: "Beginner",
                summary: "Checking symmetry by comparing original number copy against its mathematical reverse.",
                content: `
                    <h2>Algorithm: Palindrome Number Verification</h2>
                    <p>A number is a palindrome if it reads the exact same forward and backward (<code>121</code>, <code>4554</code>).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">palindrome.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

bool isPalindrome(int n) {
    if (n &lt; 0) return false; // Negative numbers are not palindromes (-121 != 121-)
    int original = n;
    int rev = 0;
    
    while (n &gt; 0) {
        rev = (rev * 10) + (n % 10);
        n /= 10;
    }
    return (original == rev);
}

int main() {
    int testNum = 12321;
    cout &lt;&lt; testNum &lt;&lt; (isPalindrome(testNum) ? " IS a Palindrome" : " is NOT a Palindrome") &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-13",
                title: "Armstrong number",
                level: "Intermediate",
                summary: "Number equal to sum of its own digits each raised to the power of number of digits (e.g. 153 = 1^3 + 5^3 + 3^3).",
                content: `
                    <h2>Algorithm: Armstrong (Narcissistic) Number Check</h2>
                    <p>An $N$-digit number is an Armstrong number if the sum of its individual digits each raised to the power $N$ equals the number itself (e.g., $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">armstrong.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;cmath&gt;
using namespace std;

bool isArmstrong(int n) {
    int original = n;
    int digitsCount = 0;
    int temp = n;
    while (temp &gt; 0) { digitsCount++; temp /= 10; }
    
    int sum = 0;
    temp = n;
    while (temp &gt; 0) {
        int d = temp % 10;
        sum += round(pow(d, digitsCount));
        temp /= 10;
    }
    return (sum == original);
}

int main() {
    cout &lt;&lt; "153 Armstrong? " &lt;&lt; (isArmstrong(153) ? "YES" : "NO") &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-14",
                title: "C++ program to check prime number",
                level: "Beginner",
                summary: "Optimized O(sqrt(N)) trial division algorithm to verify primality.",
                content: `
                    <h2>Algorithm: Primality Test in <code>O(sqrt(N))</code> Complexity</h2>
                    <p>Instead of dividing from $2$ to $N-1$ ($O(N)$ time), we only need to test divisors up to $\sqrt{N}$ because if $N = a \times b$, one factor must be $\le \sqrt{N}$.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">prime_check.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

bool isPrime(int n) {
    if (n &lt;= 1) return false;
    for (int i = 2; i * i &lt;= n; i++) { // Loop runs up to sqrt(n)
        if (n % i == 0) return false;  // Found a divisor, not prime!
    }
    return true;
}

int main() {
    int num = 29;
    cout &lt;&lt; num &lt;&lt; (isPrime(num) ? " is a PRIME number." : " is COMPOSITE.") &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-15",
                title: "C++ program to print series of prime number",
                level: "Intermediate",
                summary: "Generating prime numbers in a range [L, R] and Sieve of Eratosthenes introduction.",
                content: `
                    <h2>Generating All Primes in Range <code>[1, N]</code></h2>
                    <p>We can loop through integers and apply our <code>isPrime()</code> check to print primes up to $N$. For ultra-high performance up to $10^7$, the <strong>Sieve of Eratosthenes</strong> is used.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">prime_series.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

bool isPrime(int n) {
    if (n &lt;= 1) return false;
    for (int i = 2; i * i &lt;= n; i++)
        if (n % i == 0) return false;
    return true;
}

int main() {
    int limit = 50;
    cout &lt;&lt; "Primes up to " &lt;&lt; limit &lt;&lt; ": ";
    for (int i = 2; i &lt;= limit; i++) {
        if (isPrime(i)) cout &lt;&lt; i &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-16",
                title: "Fibonacci series",
                level: "Beginner",
                summary: "Generating Fibonacci numbers (0, 1, 1, 2, 3, 5, 8...) iteratively in O(N) time with O(1) space.",
                content: `
                    <h2>Algorithm: Fibonacci Sequence Generation</h2>
                    <p>In the Fibonacci sequence, each term is the sum of the two preceding terms ($F_n = F_{n-1} + F_{n-2}$ with $F_0=0, F_1=1$).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">fibonacci.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int terms = 10;
    int t1 = 0, t2 = 1, nextTerm = 0;

    cout &lt;&lt; "First " &lt;&lt; terms &lt;&lt; " Fibonacci terms: ";
    for (int i = 1; i &lt;= terms; ++i) {
        if(i == 1) { cout &lt;&lt; t1 &lt;&lt; " "; continue; }
        if(i == 2) { cout &lt;&lt; t2 &lt;&lt; " "; continue; }
        
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
        cout &lt;&lt; nextTerm &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-17",
                title: "C++ program to convert number into word",
                level: "Intermediate",
                summary: "Translating numeric digits into English vocabulary (e.g. 523 -> 'Five Two Three').",
                content: `
                    <h2>Algorithm: Converting Number Digits to English Words</h2>
                    <p>To print digits in correct left-to-right reading order without storing in array, we first reverse the number and map each digit via <code>switch</code> or string lookup array.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">num_to_words.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    int n = 5208;
    string words[] = {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
    
    string nStr = to_string(n);
    cout &lt;&lt; n &lt;&lt; " in words: ";
    for (char c : nStr) {
        cout &lt;&lt; words[c - '0'] &lt;&lt; " ";
    }
    cout &lt;&lt; endl; // Outputs: Five Two Zero Eight
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-5-18",
                title: "Pyramid program",
                level: "Beginner",
                summary: "Mastering nested loop index math to print star (*), number, and alphabetical pyramid patterns.",
                content: `
                    <h2>Mastering Pattern Logic: Star and Number Pyramids</h2>
                    <p>Pattern printing questions test your ability to coordinate row (<code>i</code>) and column (<code>j</code>) relationships with precise space padding.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">star_pyramid.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int rows = 5;
    for (int i = 1; i &lt;= rows; i++) {
        // Print leading spaces for centering
        for (int s = 1; s &lt;= (rows - i); s++) {
            cout &lt;&lt; " ";
        }
        // Print stars (2*i - 1 stars per row)
        for (int j = 1; j &lt;= (2 * i - 1); j++) {
            cout &lt;&lt; "*";
        }
        cout &lt;&lt; endl;
    }
    return 0;
}
/* Output:
    *
   ***
  *****
 *******
*********  */</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 6: C++ Arrays
    // =========================================================================
    {
        id: "mod-6",
        title: "C++ Arrays",
        category: "core",
        subtopics: [
            {
                id: "mod-6-1",
                title: "What is Arrays?",
                level: "Beginner",
                summary: "Contiguous block of fixed-size homogeneous memory accessed in O(1) via base address plus index offset.",
                content: `
                    <h2>Understanding Fixed-Size Contiguous Arrays</h2>
                    <p>An <strong>Array</strong> is a collection of homogeneous data elements stored at contiguous memory locations under a single variable identifier.</p>
                    <p>Because elements are side-by-side in RAM, any element <code>arr[i]</code> can be accessed in instant <code>O(1)</code> time using the formula: <br>
                    <code>Address(arr[i]) = BaseAddress + (i * sizeof(DataType))</code>.</p>
                `
            },
            {
                id: "mod-6-2",
                title: "C++ program for largest & smallest element of an array",
                level: "Beginner",
                summary: "Single-pass O(N) linear scan using INT_MAX and INT_MIN initialization.",
                content: `
                    <h2>Finding Min & Max in Single <code>O(N)</code> Scan</h2>
                    <p>We initialize <code>minVal</code> and <code>maxVal</code> to the first element (or extremes <code>INT_MAX</code>/<code>INT_MIN</code>) and iterate through the array once.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">min_max_array.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;climits&gt;
using namespace std;

int main() {
    int arr[] = {45, 12, 89, -3, 67, 2, 91};
    int n = sizeof(arr) / sizeof(arr[0]);

    int minVal = INT_MAX;
    int maxVal = INT_MIN;

    for (int i = 0; i &lt; n; i++) {
        if (arr[i] &lt; minVal) minVal = arr[i];
        if (arr[i] &gt; maxVal) maxVal = arr[i];
    }

    cout &lt;&lt; "Smallest: " &lt;&lt; minVal &lt;&lt; " | Largest: " &lt;&lt; maxVal &lt;&lt; endl; // -3 and 91
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-3",
                title: "Memory Allocation of array",
                level: "Intermediate",
                summary: "Stack vs Heap allocation and understanding sizeof(arr) vs decay to pointers when passed to functions.",
                content: `
                    <h2>How C++ Allocates Arrays in Memory</h2>
                    <p>When you declare <code>int arr[5];</code> inside a function, the compiler reserves exactly <code>5 * 4 = 20 bytes</code> of contiguous Stack memory.</p>
                    
                    <div class="highlight-box warning">
                        <strong>Array Decay Rule:</strong> When you pass an array to a function <code>void process(int arr[])</code>, it <em>decays</em> into a raw pointer <code>int* arr</code>. Therefore <code>sizeof(arr)</code> inside the function returns pointer size (8 bytes on 64-bit), NOT array size! Always pass <code>int n</code> length explicitly.
                    </div>
                `
            },
            {
                id: "mod-6-4",
                title: "Advantages & disadvantages of array",
                level: "Beginner",
                summary: "Why arrays offer O(1) random access and cache locality, but suffer from static size and O(N) insertion/deletion cost.",
                content: `
                    <h2>Pros & Cons of Contiguous Arrays</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">Array Trade-Offs</span></div>
                        <pre><code>ADVANTAGES (+):
 [✓] O(1) Instant Random Access by index (arr[i]).
 [✓] Excellent CPU Cache Locality (spatial locality) leading to fast iterations.
 [✓] Minimal memory overhead per element (no extra pointers like linked lists).

DISADVANTAGES (-):
 [✗] Fixed Static Size (cannot resize automatically without re-allocating).
 [✗] Costly Insertion & Deletion (requires O(N) shifting of subsequent elements).
 [✗] Memory wastage if array is declared with 1000 size but only 10 items used.</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-5",
                title: "Linear search",
                level: "Beginner",
                summary: "O(N) sequential search scanning from index 0 to N-1 until target is found.",
                content: `
                    <h2>Linear Search (<code>O(N)</code> Time Complexity)</h2>
                    <p>Linear search checks every single element sequentially until a match is found or the end of the array is reached. Works on unsorted data.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">linear_search.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i &lt; n; i++) {
        if (arr[i] == target) return i; // Found target, return index
    }
    return -1; // Not found
}

int main() {
    int data[] = {14, 5, 88, 23, 9, 41};
    int index = linearSearch(data, 6, 23);
    cout &lt;&lt; "Element 23 found at index: " &lt;&lt; index &lt;&lt; endl; // Index 3
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-6",
                title: "Binary search",
                level: "Intermediate",
                summary: "O(log N) divide-and-conquer search on sorted arrays by repeatedly halving search intervals.",
                content: `
                    <h2>Binary Search (<code>O(log N)</code> Time Complexity)</h2>
                    <p>On a <strong>sorted array</strong>, binary search cuts the search space in half each iteration by comparing the target with the middle element <code>mid = low + (high - low)/2</code>.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">binary_search.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low &lt;= high) {
        int mid = low + (high - low) / 2; // Avoids integer overflow
        
        if (arr[mid] == target) return mid;
        else if (arr[mid] &lt; target) low = mid + 1;  // Search right half
        else high = mid - 1;                        // Search left half
    }
    return -1;
}

int main() {
    int sortedArr[] = {2, 7, 14, 23, 45, 67, 89, 102};
    cout &lt;&lt; "Target 67 found at index: " &lt;&lt; binarySearch(sortedArr, 8, 67) &lt;&lt; endl; // Index 5
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-7",
                title: "Convert decimal to binary",
                level: "Beginner",
                summary: "Repeated division by 2 and storing remainders in array or bit-shifting algorithm.",
                content: `
                    <h2>Algorithm: Decimal to Binary Conversion</h2>
                    <p>We divide the number by $2$ repeatedly, store the remainders ($0$ or $1$) in an array, and print them in reverse order.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">dec_to_bin.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

void decToBinary(int n) {
    if (n == 0) { cout &lt;&lt; "0" &lt;&lt; endl; return; }
    int bin[32];
    int i = 0;
    while (n &gt; 0) {
        bin[i++] = n % 2;
        n /= 2;
    }
    cout &lt;&lt; "Binary: ";
    for (int j = i - 1; j &gt;= 0; j--) cout &lt;&lt; bin[j];
    cout &lt;&lt; endl;
}

int main() {
    decToBinary(45); // Outputs: 101101
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-8",
                title: "Convert decimal to octal",
                level: "Beginner",
                summary: "Repeated division by 8 and storing octal digits (0-7).",
                content: `
                    <h2>Algorithm: Decimal to Octal (Base 8)</h2>
                    <p>We divide by $8$ repeatedly and store the remainders ($0-7$).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">dec_to_oct.cpp</span></div>
                        <pre><code class="language-cpp">void decToOctal(int n) {
    int oct[32], i = 0;
    while (n &gt; 0) {
        oct[i++] = n % 8;
        n /= 8;
    }
    cout &lt;&lt; "Octal: ";
    for (int j = i - 1; j &gt;= 0; j--) cout &lt;&lt; oct[j];
    cout &lt;&lt; endl;
} // For n=65 -> outputs 101</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-9",
                title: "Convert decimal to hexadecimal",
                level: "Intermediate",
                summary: "Repeated division by 16 mapping remainders 10-15 to hex characters A-F.",
                content: `
                    <h2>Algorithm: Decimal to Hexadecimal (Base 16)</h2>
                    <p>Remainders between $10$ and $15$ must be mapped to characters <code>'A'</code> through <code>'F'</code> using ASCII character math (<code>rem - 10 + 'A'</code>).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">dec_to_hex.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

void decToHex(int n) {
    char hex[32];
    int i = 0;
    while (n &gt; 0) {
        int rem = n % 16;
        if (rem &lt; 10) hex[i++] = rem + '0';
        else          hex[i++] = rem - 10 + 'A';
        n /= 16;
    }
    cout &lt;&lt; "Hex: 0x";
    for (int j = i - 1; j &gt;= 0; j--) cout &lt;&lt; hex[j];
    cout &lt;&lt; endl;
}

int main() { decToHex(255); return 0; } // Outputs: 0xFF</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-10",
                title: "Delete an element from array",
                level: "Intermediate",
                summary: "O(N) deletion algorithm shifting all right-side elements one step to the left to close memory gap.",
                content: `
                    <h2>Deleting an Element at Index <code>idx</code> (<code>O(N)</code> Time)</h2>
                    <p>To delete an element at index $K$, every subsequent element from $K+1$ to $N-1$ must be shifted one position to the left: <code>arr[j] = arr[j+1]</code>.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">delete_array.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

void deleteAtIndex(int arr[], int& n, int idx) {
    if (idx &lt; 0 || idx &gt;= n) { cout &lt;&lt; "Invalid Index" &lt;&lt; endl; return; }
    
    // Shift elements left
    for (int i = idx; i &lt; n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--; // Decrease logical array size
}

int main() {
    int arr[10] = {10, 20, 30, 40, 50};
    int size = 5;
    deleteAtIndex(arr, size, 2); // Deletes element 30 at index 2
    
    for(int i = 0; i &lt; size; i++) cout &lt;&lt; arr[i] &lt;&lt; " "; // 10 20 40 50
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-11",
                title: "Two dimensional array",
                level: "Intermediate",
                summary: "Row-major order memory mapping of 2D grid matrix: arr[row][col].",
                content: `
                    <h2>2D Matrix Arrays and Row-Major Memory Mapping</h2>
                    <p>A 2D array <code>int mat[R][C]</code> is conceptually a grid of rows and columns, but physically stored as a flat 1D sequence in RAM using <strong>Row-Major Order</strong>.</p>
                    <p>Formula for linear RAM address: <br><code>Address(mat[r][c]) = BaseAddress + (r * TotalColumns + c) * sizeof(int)</code>.</p>
                `
            },
            {
                id: "mod-6-12",
                title: "C++ program for matrix",
                level: "Beginner",
                summary: "Inputting and displaying a 3x3 2D matrix using nested for loops.",
                content: `
                    <h2>Input and Displaying 2D Matrix</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">matrix_io.cpp</span></div>
                        <pre><code class="language-cpp">int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
for(int i=0; i&lt;3; i++) {
    for(int j=0; j&lt;3; j++) {
        cout &lt;&lt; mat[i][j] &lt;&lt; "\\t";
    }
    cout &lt;&lt; endl;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-13",
                title: "Addition, subtraction, division of matrix",
                level: "Intermediate",
                summary: "Element-by-element matrix addition (C[i][j] = A[i][j] + B[i][j]) and scalar division.",
                content: `
                    <h2>Matrix Addition and Subtraction (<code>O(R x C)</code>)</h2>
                    <p>Two matrices can be added or subtracted if and only if they share identical dimensions ($R \times C$). Computation is performed element-wise.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">matrix_add.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int A[2][2] = {{10, 20}, {30, 40}};
    int B[2][2] = {{5, 5}, {2, 8}};
    int C[2][2];

    for(int i=0; i&lt;2; i++) {
        for(int j=0; j&lt;2; j++) {
            C[i][j] = A[i][j] + B[i][j]; // Or - for subtraction
            cout &lt;&lt; C[i][j] &lt;&lt; " ";
        }
        cout &lt;&lt; endl;
    }
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-6-14",
                title: "Multiplication of matrix",
                level: "Advanced",
                summary: "O(N^3) triple nested loop matrix dot-product algorithm where columns of A must equal rows of B.",
                content: `
                    <h2>Matrix Multiplication (<code>O(N^3)</code> Dot-Product Algorithm)</h2>
                    <p>To multiply matrix $A_{R1 \times C1}$ with $B_{R2 \times C2}$, the requirement $C1 == R2$ must hold. Each cell $C[i][j]$ is the dot-product of row $i$ of $A$ and column $j$ of $B$.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">matrix_mul.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[3][2] = {{7, 8}, {9, 1}, {2, 3}};
    int C[2][2] = {0}; // Result matrix R1 x C2 (2x2)

    for(int i=0; i&lt;2; i++) {
        for(int j=0; j&lt;2; j++) {
            for(int k=0; k&lt;3; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
            cout &lt;&lt; C[i][j] &lt;&lt; "\\t";
        }
        cout &lt;&lt; endl;
    }
    return 0;
}</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 7: Functions and Pointers in C++
    // =========================================================================
    {
        id: "mod-7",
        title: "Functions and Pointers in C++",
        category: "core",
        subtopics: [
            {
                id: "mod-7-1",
                title: "Types of functions",
                level: "Beginner",
                summary: "Built-in library functions (sqrt, pow) vs User-defined functions, and return type classifications.",
                content: `
                    <h2>Function Classification in C++</h2>
                    <p>Functions divide large software projects into self-contained, modular blocks of reusable logic.</p>
                    <ul>
                        <li><strong>Built-in / Library Functions:</strong> Provided by standard libraries (<code>std::max()</code>, <code>sqrt()</code>, <code>sort()</code>).</li>
                        <li><strong>User-Defined Functions:</strong> Custom functions authored by the programmer (<code>calculateTax()</code>, <code>printMenu()</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-7-2",
                title: "Function declaration, definition, calling",
                level: "Beginner",
                summary: "Separating function prototype (declaration in .h) from implementation block (.cpp) and invocation.",
                content: `
                    <h2>Prototype Declaration vs Definition Block</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">func_anatomy.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

// 1. Function Declaration (Prototype): Tells compiler signature beforehand
int multiply(int a, int b);

int main() {
    // 3. Function Calling: Invoking with actual arguments (5, 8)
    int result = multiply(5, 8); 
    cout &lt;&lt; "Product: " &lt;&lt; result &lt;&lt; endl;
    return 0;
}

// 2. Function Definition: Actual execution body
int multiply(int a, int b) {
    return a * b;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-3",
                title: "Local and global variables",
                level: "Beginner",
                summary: "Variable visibility scopes, stack activation record lifetime, and shadowing rules.",
                content: `
                    <h2>Variable Scope: Local vs Global</h2>
                    <p><strong>Local variables</strong> are declared inside a function or <code>{}</code> block scope. They live on the Stack activation record and are destroyed when the block exits.</p>
                    <p><strong>Global variables</strong> are declared outside all functions at the top level. They persist in the Data Segment throughout program lifetime and can be accessed anywhere.</p>
                `
            },
            {
                id: "mod-7-4",
                title: "Scope resolution operator",
                level: "Intermediate",
                summary: "Using :: to access shadowed global variables or class methods inside separate definitions.",
                content: `
                    <h2>The Scope Resolution Operator (<code>::</code>)</h2>
                    <p>If a local variable inside <code>main()</code> has the same name as a global variable, the local variable shadows (hides) the global one. Use <code>::varName</code> to explicitly access the global scope.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">scope_resolution.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int count = 100; // Global variable

int main() {
    int count = 15; // Local variable shadows global count
    
    cout &lt;&lt; "Local count: " &lt;&lt; count &lt;&lt; endl;         // Outputs 15
    cout &lt;&lt; "Global count: " &lt;&lt; ::count &lt;&lt; endl;     // Outputs 100 using ::
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-5",
                title: "Call by value function",
                level: "Beginner",
                summary: "Passing copies of variables into functions; modifications inside do NOT alter original caller variable.",
                content: `
                    <h2>Call by Value (<code>void foo(int x)</code>)</h2>
                    <p>In Call by Value, the actual arguments are copied into new local parameters on the function's stack frame. Modifying the parameter has zero impact on the original caller variable.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">call_by_value.cpp</span></div>
                        <pre><code class="language-cpp">void tryModify(int x) {
    x = 999; // Only modifies local copy!
}
int main() {
    int val = 10;
    tryModify(val);
    cout &lt;&lt; val; // Still outputs 10!
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-6",
                title: "Default arguments",
                level: "Beginner",
                summary: "Specifying fallback parameter values from right to left in function signatures.",
                content: `
                    <h2>Default Function Arguments</h2>
                    <p>You can assign default fallback values in the function declaration. If the caller omits those arguments during invocation, default values are automatically used.</p>
                    <div class="highlight-box warning">
                        <strong>Rule:</strong> Default arguments must always be assigned from <strong>right to left</strong> (<code>void log(string msg, int level = 1, bool verbose = true)</code>).
                    </div>
                `
            },
            {
                id: "mod-7-7",
                title: "Return by value",
                level: "Beginner",
                summary: "Returning computed values back to caller vs return by reference rules and dangling pointer pitfalls.",
                content: `
                    <h2>Return by Value and Return by Reference</h2>
                    <p>When a function exits via <code>return expr;</code>, the result is copied back to the caller expression.</p>
                    <div class="highlight-box warning">
                        <strong>Critical C++ Pitfall:</strong> Never return a reference <code>int&</code> or pointer <code>int*</code> to a local stack variable (<code>int x = 5; return x;</code>)! The variable is destroyed when the stack frame pops, creating a hazardous dangling reference.
                    </div>
                `
            },
            {
                id: "mod-7-8",
                title: "Menu driven program",
                level: "Intermediate",
                summary: "Designing enterprise CLI controllers combining do-while loops and switch statements.",
                content: `
                    <h2>Designing Clean Menu-Driven Systems</h2>
                    <p>Menu-driven architecture forms the core of CLI applications (like our Bank and Hotel projects in Module 13). It loops infinitely until the user enters an exit code.</p>
                `
            },
            {
                id: "mod-7-9",
                title: "Function overloading",
                level: "Intermediate",
                summary: "Compile-time polymorphism: functions sharing identical names but differing in parameter count or data types.",
                content: `
                    <h2>Compile-Time Polymorphism: Function Overloading</h2>
                    <p>Function Overloading allows multiple functions in the same scope to share the exact same name, provided their parameter lists (<code>signature</code>) differ in count or data types.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">overloading.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
int add(int a, int b, int c) { return a + b + c; }

int main() {
    cout &lt;&lt; add(5, 10) &lt;&lt; endl;       // Resolves to int add(int, int) -> 15
    cout &lt;&lt; add(3.5, 2.1) &lt;&lt; endl;    // Resolves to double add(double, double) -> 5.6
    cout &lt;&lt; add(1, 2, 3) &lt;&lt; endl;     // Resolves to int add(int, int, int) -> 6
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-10",
                title: "Storage classes",
                level: "Intermediate",
                summary: "auto, register, static, extern, and mutable memory storage, default initial values, and lifetime rules.",
                content: `
                    <h2>C++ Storage Classes (<code>static</code>, <code>extern</code>, <code>register</code>)</h2>
                    <p>Storage classes determine variable lifetime, visibility scope, and memory location (<code>Stack vs Data vs Register</code>).</p>
                    <ul>
                        <li><strong><code>static</code>:</strong> Preserves variable value across multiple function calls. Stored in Data Segment, initialized to <code>0</code> by default.</li>
                        <li><strong><code>extern</code>:</strong> Declares a global variable that is defined in another separate <code>.cpp</code> compilation unit.</li>
                        <li><strong><code>register</code> (Deprecated C++17):</strong> Hinted compiler to store variable inside CPU registers.</li>
                    </ul>
                `
            },
            {
                id: "mod-7-11",
                title: "Recursion",
                level: "Intermediate",
                summary: "Functions calling themselves: base cases, stack overflow risks, and mathematical recurrence relations.",
                content: `
                    <h2>Recursion and Stack Frame Unwinding</h2>
                    <p>A recursive function solves a problem by calling itself with smaller sub-problems until a terminating <strong>Base Case</strong> is reached.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">factorial_recursion.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int factorial(int n) {
    if (n &lt;= 1) return 1; // Base case prevents infinite stack overflow
    return n * factorial(n - 1); // Recursive call
}

int main() {
    cout &lt;&lt; "5! = " &lt;&lt; factorial(5) &lt;&lt; endl; // 5 * 4 * 3 * 2 * 1 = 120
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-12",
                title: "Passing array as an argument to function",
                level: "Intermediate",
                summary: "Why arrays pass by pointer reference by default and how to pass 2D arrays cleanly.",
                content: `
                    <h2>Passing Arrays to Functions (<code>void foo(int arr[], int n)</code>)</h2>
                    <p>As covered earlier, arrays passed as parameters decay into <code>int*</code>. Therefore, modifying <code>arr[i]</code> inside a function directly mutates the original caller's array in RAM!</p>
                `
            },
            {
                id: "mod-7-13",
                title: "sizeof an operator",
                level: "Beginner",
                summary: "Compile-time operator determining exact byte size of types and variables.",
                content: `
                    <h2>The <code>sizeof()</code> Compile-Time Operator</h2>
                    <p><code>sizeof</code> is a keyword operator evaluated during compilation that returns the exact number of bytes occupied by a variable or data type.</p>
                `
            },
            {
                id: "mod-7-14",
                title: "What are Pointers?",
                level: "Intermediate",
                summary: "Variables storing raw memory addresses using address-of (&) and dereference (*) operators.",
                content: `
                    <h2>Mastering Pointers (<code>*</code> and <code>&</code>)</h2>
                    <p>A <strong>Pointer</strong> is a variable whose value is the raw hexadecimal memory address of another variable.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">pointers_basics.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 42;
    int* ptr = &x; // Address-of operator (&) extracts RAM address
    
    cout &lt;&lt; "Value of x: " &lt;&lt; x &lt;&lt; endl;                 // 42
    cout &lt;&lt; "Address of x (&x): " &lt;&lt; ptr &lt;&lt; endl;        // e.g., 0x7ffd1a2b
    cout &lt;&lt; "Dereferenced (*ptr): " &lt;&lt; *ptr &lt;&lt; endl;     // 42 (Follows pointer to fetch data)
    
    *ptr = 100; // Mutates original variable x through pointer!
    cout &lt;&lt; "New value of x: " &lt;&lt; x &lt;&lt; endl;             // 100
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-15",
                title: "Types of Pointers",
                level: "Intermediate",
                summary: "Null pointer, Void/Generic pointer (void*), Wild pointer, and Dangling pointer definitions.",
                content: `
                    <h2>Four Essential Pointer Categories</h2>
                    <ul>
                        <li><strong>Null Pointer (<code>nullptr</code> C++11):</strong> Pointer intentionally set to zero address <code>int* p = nullptr;</code> indicating it points nowhere safely.</li>
                        <li><strong>Void/Generic Pointer (<code>void* p</code>):</strong> Pointer that can hold the address of any data type (<code>int</code>, <code>float</code>, <code>char</code>). Must be explicitly typecast before dereferencing!</li>
                        <li><strong>Wild Pointer:</strong> Uninitialized pointer (<code>int* p;</code>) pointing to random garbage memory. Dangerous!</li>
                        <li><strong>Dangling Pointer:</strong> Pointer holding the address of a memory block that has already been deallocated (<code>delete p;</code> without setting <code>p = nullptr</code>).</li>
                    </ul>
                `
            },
            {
                id: "mod-7-16",
                title: "Data type of a Pointer",
                level: "Intermediate",
                summary: "Why pointer size is uniform (8 bytes on 64-bit) while pointer arithmetic depends on target data type stride.",
                content: `
                    <h2>Pointer Size vs Pointer Arithmetic Stride</h2>
                    <p>On a 64-bit operating system, <strong>all pointers (<code>int*</code>, <code>char*</code>, <code>double*</code>, <code>MyClass*</code>) occupy exactly 8 bytes</strong> of memory because they all store a 64-bit memory address.</p>
                    <p>However, the pointer's data type dictates its <strong>Pointer Arithmetic Stride</strong>: when you write <code>ptr++</code>, an <code>int*</code> jumps forward <code>+4 bytes</code>, whereas a <code>double*</code> jumps <code>+8 bytes</code>!</p>
                `
            },
            {
                id: "mod-7-17",
                title: "Call by reference",
                level: "Intermediate",
                summary: "Zero-copy function passing using C++ references (&) and pointer addresses (*).",
                content: `
                    <h2>Call by Reference (<code>void swap(int& a, int& b)</code>)</h2>
                    <p>By passing parameters using C++ references (<code>&</code>) or pointers (<code>*</code>), the function operates directly on caller memory without making copies (<code>O(1)</code> overhead).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">call_by_ref.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

void swapValues(int& a, int& b) { // Reference aliases
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 99;
    swapValues(x, y);
    cout &lt;&lt; "x: " &lt;&lt; x &lt;&lt; " | y: " &lt;&lt; y &lt;&lt; endl; // Successfully swapped: x: 99 | y: 10
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-7-18",
                title: "Array of pointers",
                level: "Advanced",
                summary: "Declaring arrays whose individual elements are pointer addresses (e.g. const char* names[]).",
                content: `
                    <h2>Array of Pointers (<code>int* arr[5]</code>)</h2>
                    <p>An array of pointers is an array where every single slot holds a memory address pointing to another variable or string.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">array_of_pointers.cpp</span></div>
                        <pre><code class="language-cpp">const char* fruits[] = {"Apple", "Banana", "Mango", "Strawberry"};
for(int i = 0; i &lt; 4; i++) {
    cout &lt;&lt; fruits[i] &lt;&lt; endl; // Prints each string pointer cleanly
}</code></pre>
                    </div>
                `
            }
        ]
    },

    // =========================================================================
    // MODULE 8: Classes and Objects in C++
    // =========================================================================
    {
        id: "mod-8",
        title: "Classes and Objects in C++",
        category: "oop",
        subtopics: [
            {
                id: "mod-8-1",
                title: "What are classes and objects?",
                level: "Beginner",
                summary: "Classes as user-defined blueprints containing data members and member functions; Objects as concrete memory instances.",
                content: `
                    <h2>Classes as Blueprints and Objects as Instances</h2>
                    <p>A <code>class</code> is a user-defined data type that bundles attributes (<code>data members</code>) and behaviors (<code>member functions</code>) under a single roof. An <code>object</code> is a physical instance of that class allocated in memory.</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">class_object.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

class Student {
private:
    string name;  // Encapsulated private data
    int rollNo;

public:
    // Member function to set data
    void setDetails(string n, int r) {
        name = n;
        rollNo = r;
    }

    void display() {
        cout &lt;&lt; "Student: " &lt;&lt; name &lt;&lt; " (Roll: " &lt;&lt; rollNo &lt;&lt; ")" &lt;&lt; endl;
    }
};

int main() {
    Student s1; // Object instantiation
    s1.setDetails("Alice Smith", 101);
    s1.display();
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-8-2",
                title: "Constructors",
                level: "Beginner",
                summary: "Special member functions invoked automatically upon object creation to initialize attributes.",
                content: `
                    <h2>The Lifecycle Initialization Constructor</h2>
                    <p>A <strong>Constructor</strong> is a special member function having the exact same name as the class (<code>Student()</code>) and zero return type (<code>not even void</code>). It fires automatically the instant an object is created in memory.</p>
                `
            },
            {
                id: "mod-8-3",
                title: "Default constructor",
                level: "Beginner",
                summary: "Zero-argument constructor setting initial fallback values (<code>MyClass()</code>).",
                content: `
                    <h2>Default Constructor (<code>MyClass()</code>)</h2>
                    <p>A constructor taking no parameters. If you don't write any constructor, C++ synthesizes an empty implicit default constructor automatically.</p>
                `
            },
            {
                id: "mod-8-4",
                title: "Parameterized constructor",
                level: "Beginner",
                summary: "Constructors accepting arguments during instantiation (<code>MyClass(int x, string y)</code>).",
                content: `
                    <h2>Parameterized Constructor</h2>
                    <p>Allows passing initialization data directly inside constructor brackets when creating an object: <code>Student s1("Alice", 101);</code>.</p>
                `
            },
            {
                id: "mod-8-5",
                title: "Constructor Overloading",
                level: "Intermediate",
                summary: "Multiple constructors inside a class differing in parameter list signatures.",
                content: `
                    <h2>Constructor Overloading</h2>
                    <p>Like normal function overloading, a class can define multiple constructors (Default, Parameterized, Copy) tailored for different instantiation scenarios.</p>
                `
            },
            {
                id: "mod-8-6",
                title: "C++ Constructor with Default Arguments",
                level: "Intermediate",
                summary: "Combining default and parameterized constructors via default argument values.",
                content: `
                    <h2>Constructor with Default Arguments</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">constructor_defaults.cpp</span></div>
                        <pre><code class="language-cpp">class Box {
private:
    int length, width, height;
public:
    // Single constructor acting as both default and parameterized!
    Box(int l = 1, int w = 1, int h = 1) : length(l), width(w), height(h) {}
};
Box b1;       // Box(1, 1, 1)
Box b2(10, 5);// Box(10, 5, 1)</code></pre>
                    </div>
                `
            },
            {
                id: "mod-8-7",
                title: "Copy constructor",
                level: "Intermediate",
                summary: "Shallow vs Deep copying (<code>MyClass(const MyClass& obj)</code>) across object cloning.",
                content: `
                    <h2>Copy Constructor and Deep Copying</h2>
                    <p>A Copy Constructor (<code>Box(const Box& other)</code>) creates a new object as an exact replica of an existing object.</p>
                    <div class="highlight-box warning">
                        <strong>Shallow vs Deep Copy:</strong> The default compiler copy constructor performs a bitwise <em>Shallow Copy</em>. If your class contains heap-allocated pointer members (<code>int* data</code>), shallow copying makes both objects point to the same RAM block—causing double-free crashes upon destructor execution! Always implement a <em>Deep Copy Constructor</em> to allocate fresh heap memory.
                    </div>
                `
            },
            {
                id: "mod-8-8",
                title: "Constructor for multiple object",
                level: "Intermediate",
                summary: "Initializing arrays of class objects (<code>Student batch[3];</code>).",
                content: `
                    <h2>Arrays of Objects and Constructor Invocation</h2>
                    <p>When you create an array of objects <code>Student batch[10];</code>, the default constructor fires sequentially 10 times—once for every slot in the array.</p>
                `
            },
            {
                id: "mod-8-9",
                title: "this pointer",
                level: "Intermediate",
                summary: "Implicit pointer (*this) passed inside member functions pointing to the calling object instance.",
                content: `
                    <h2>The Implicit <code>this</code> Pointer</h2>
                    <p><code>this</code> is a hidden const pointer available inside every non-static member function pointing directly to the memory address of the object calling the function (<code>this-&gt;member</code>).</p>
                    
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">this_pointer.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">class Account {
private:
    int balance;
public:
    void setBalance(int balance) {
        // Disambiguates member variable from parameter sharing exact same name!
        this-&gt;balance = balance; 
    }
};</code></pre>
                    </div>
                `
            },
            {
                id: "mod-8-10",
                title: "Static keyword",
                level: "Intermediate",
                summary: "Class-level attributes shared across all object instances in Data Segment.",
                content: `
                    <h2>The <code>static</code> Keyword in Class Architecture</h2>
                    <p>When a data member is declared <code>static</code>, only **one shared copy** exists in the Data Segment for the entire class, rather than a separate copy per object instance.</p>
                `
            },
            {
                id: "mod-8-11",
                title: "Static variable",
                level: "Intermediate",
                summary: "Static member variable declaration inside class header and mandatory definition outside class block.",
                content: `
                    <h2>Static Variables and Class Counters</h2>
                    <div class="code-container">
                        <div class="code-header"><span class="code-lang">static_counter.cpp</span><button class="copy-code-btn" onclick="app.copyCode(this)">Copy Code</button></div>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

class User {
public:
    static int totalUsers; // Declaration inside class
    User() { totalUsers++; }
};

// Mandatory definition and initialization outside class block!
int User::totalUsers = 0; 

int main() {
    User u1, u2, u3;
    cout &lt;&lt; "Total active users: " &lt;&lt; User::totalUsers &lt;&lt; endl; // Outputs 3
    return 0;
}</code></pre>
                    </div>
                `
            },
            {
                id: "mod-8-12",
                title: "Method overloading",
                level: "Intermediate",
                summary: "Overloading non-static class member functions with differing argument lists.",
                content: `
                    <h2>Class Member Function Overloading</h2>
                    <p>Just like global functions, class methods can be overloaded to accept different parameter combinations (<code>void render(int x)</code> vs <code>void render(string title, int x)</code>).</p>
                `
            }
        ]
    }
);
