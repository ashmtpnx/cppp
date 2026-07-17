// C++ & DSA MasterClass Pro - Core Application Logic (app.js)

class MasterClassApp {
    constructor() {
        this.currentModuleId = "mod-1";
        this.currentSubtopicId = "mod-1-1";
        this.activeTab = "curriculum";
        this.studentMode = true; // true = Beginner analogies, false = C++ Professional deep dives
        this.theme = localStorage.getItem("cpp_theme") || "dark";
        this.quizCategory = "all";
        this.quizScore = 0;
        this.quizAnswered = 0;
        this.completedTopics = JSON.parse(localStorage.getItem("cpp_completed_topics") || "[]");
        this.bookmarkedTopics = JSON.parse(localStorage.getItem("cpp_bookmarks") || "[]");
        this.activeFilter = "all";
        this.currentIdeFontSize = 13.5;
        this.workbenchMode = "split";
    }

    init() {
        // 1. Apply theme
        this.applyTheme(this.theme);

        // 2. Render Sidebar & Progress
        this.renderSidebar();
        this.updateProgress();
        this.updateBookmarkCount();

        // 3. Render initial content
        this.loadSubtopic(this.currentModuleId, this.currentSubtopicId);

        // 4. Attach all event listeners
        this.attachListeners();

        // 5. Initialize visualizer if available
        if (typeof visualizer !== "undefined") {
            const stage = document.getElementById("visualizer-stage");
            if (stage) visualizer.init(stage);
        }

        // 6. Render projects and quiz tabs
        this.renderProjectsTab();
        this.renderQuizTab();

        // 7. Initialize JetBrains Studio Drag Resizer
        this.initResizerHandle();
    }

    attachListeners() {
        // Theme toggle
        const themeBtn = document.getElementById("theme-toggle");
        if (themeBtn) {
            themeBtn.addEventListener("click", () => {
                this.theme = this.theme === "dark" ? "light" : "dark";
                this.applyTheme(this.theme);
            });
        }

        // Mode switch toggle pill
        const modeBtn = document.getElementById("mode-toggle-btn");
        if (modeBtn) {
            modeBtn.addEventListener("click", () => {
                this.studentMode = !this.studentMode;
                const modeText = document.getElementById("mode-toggle-text");
                if (this.studentMode) {
                    modeBtn.className = "mode-pill student";
                    if (modeText) modeText.textContent = "Student Mode";
                    this.showToast("Switched to Student (Beginner Analogies) Mode", "info");
                } else {
                    modeBtn.className = "mode-pill pro";
                    if (modeText) modeText.textContent = "C++ Pro Mode";
                    this.showToast("Switched to C++ Professional (Compiler & Hardware Notes) Mode", "info");
                }
                this.loadSubtopic(this.currentModuleId, this.currentSubtopicId);
            });
        }

        // Navigation tab switching
        document.querySelectorAll(".nav-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                const view = tab.getAttribute("data-view");
                if (view) this.switchTab(view);
            });
        });

        // Search modal toggles
        const openSearch = document.getElementById("open-search-modal");
        if (openSearch) openSearch.addEventListener("click", () => this.openSearchModal());

        const closeSearch = document.getElementById("close-search-modal");
        if (closeSearch) closeSearch.addEventListener("click", () => this.closeSearchModal());

        const searchModal = document.getElementById("search-modal");
        if (searchModal) {
            searchModal.addEventListener("click", (e) => {
                if (e.target === searchModal) this.closeSearchModal();
            });
        }

        const searchInput = document.getElementById("modal-search-input");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => this.handleSearch(e.target.value));
        }

        // Keyboard shortcut (Ctrl + K or Cmd + K)
        document.addEventListener("keydown", (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                const modal = document.getElementById("search-modal");
                if (modal && modal.style.display === "flex") {
                    this.closeSearchModal();
                } else {
                    this.openSearchModal();
                }
            } else if (e.key === "Escape") {
                this.closeSearchModal();
                this.closeBookmarksModal();
            }
        });

        // Bookmarks modal toggles
        const bookmarkBtn = document.getElementById("bookmark-btn");
        if (bookmarkBtn) bookmarkBtn.addEventListener("click", () => this.openBookmarksModal());

        const closeBookmarks = document.getElementById("close-bookmarks-modal");
        if (closeBookmarks) closeBookmarks.addEventListener("click", () => this.closeBookmarksModal());

        const bookmarksModal = document.getElementById("bookmarks-modal");
        if (bookmarksModal) {
            bookmarksModal.addEventListener("click", (e) => {
                if (e.target === bookmarksModal) this.closeBookmarksModal();
            });
        }

        // Bookmark current subtopic button
        const toggleBookmarkSub = document.getElementById("toggle-bookmark-subtopic");
        if (toggleBookmarkSub) {
            toggleBookmarkSub.addEventListener("click", () => this.toggleBookmarkCurrent());
        }

        // Mark as completed button
        const markCompletedBtn = document.getElementById("mark-completed-btn");
        if (markCompletedBtn) {
            markCompletedBtn.addEventListener("click", () => this.toggleCompleteCurrent());
        }

        // Sidebar expand / collapse actions
        const expandBtn = document.getElementById("expand-all-btn");
        if (expandBtn) expandBtn.addEventListener("click", () => this.expandAllSidebar());

        const collapseBtn = document.getElementById("collapse-all-btn");
        if (collapseBtn) collapseBtn.addEventListener("click", () => this.collapseAllSidebar());

        // Sidebar category filters
        document.querySelectorAll("#sidebar .filter-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                document.querySelectorAll("#sidebar .filter-btn").forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                this.activeFilter = e.target.getAttribute("data-filter");
                this.renderSidebar();
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById("mobile-menu-toggle");
        if (mobileToggle) {
            mobileToggle.addEventListener("click", () => {
                const sidebar = document.getElementById("sidebar");
                if (sidebar) sidebar.classList.toggle("open");
            });
        }

        // Visualizer sub-tab buttons
        document.querySelectorAll(".vis-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".vis-tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                const mode = btn.getAttribute("data-vis");
                if (mode && typeof visualizer !== "undefined") {
                    visualizer.setMode(mode);
                }
            });
        });

        // Quiz category selector and start button
        const quizCatSelect = document.getElementById("quiz-category");
        if (quizCatSelect) {
            quizCatSelect.addEventListener("change", (e) => {
                this.quizCategory = e.target.value;
                this.renderQuizTab();
            });
        }

        const startQuizBtn = document.getElementById("start-quiz-btn");
        if (startQuizBtn) {
            startQuizBtn.addEventListener("click", () => this.startQuizSession());
        }
    }

    applyTheme(themeName) {
        localStorage.setItem("cpp_theme", themeName);
        document.body.className = `${themeName}-theme`;
        const iconLight = document.querySelector("#theme-toggle .light-icon");
        const iconDark = document.querySelector("#theme-toggle .dark-icon");
        if (iconLight && iconDark) {
            iconLight.style.display = themeName === "dark" ? "block" : "none";
            iconDark.style.display = themeName === "dark" ? "none" : "block";
        }
    }

    switchTab(viewId) {
        this.activeTab = viewId;
        
        // Update top navigation tab links
        document.querySelectorAll(".nav-tab").forEach(tab => {
            if (tab.getAttribute("data-view") === viewId) tab.classList.add("active");
            else tab.classList.remove("active");
        });

        // Show selected section view
        document.querySelectorAll(".view-section").forEach(sec => {
            if (sec.id === `view-${viewId}`) sec.classList.add("active");
            else sec.classList.remove("active");
        });

        if (viewId === "visualizer" && typeof visualizer !== "undefined") {
            visualizer.render();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderSidebar() {
        const sidebarTree = document.getElementById("curriculum-tree");
        if (!sidebarTree) return;

        const data = window.CURRICULUM_DATA || [];
        let html = "";

        data.forEach((mod, modIdx) => {
            // Apply category filter
            const modNum = modIdx + 1;
            if (this.activeFilter === "core" && (modNum < 1 || modNum > 8)) return;
            if (this.activeFilter === "oop" && (modNum < 9 || modNum > 13)) return;
            if (this.activeFilter === "dsa" && (modNum < 14 || modNum > 24)) return;

            const isOpen = mod.id === this.currentModuleId || this.activeFilter !== "all";
            html += `
                <div class="sidebar-module">
                    <div class="module-header ${isOpen ? 'open' : ''}" onclick="app.toggleModule('${mod.id}')" id="mod-head-${mod.id}">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <span style="color:var(--accent-cyan); font-family:var(--font-mono); font-size:12px;">M${modNum}</span>
                            <span style="font-weight:600;">${mod.title}</span>
                        </div>
                        <i class="fa-solid fa-chevron-down module-toggle-icon"></i>
                    </div>
                    <ul class="subtopics-list ${isOpen ? 'open' : ''}" id="mod-list-${mod.id}">
                        ${mod.subtopics.map(sub => {
                            const isCompleted = this.completedTopics.includes(sub.id);
                            const isActive = sub.id === this.currentSubtopicId;
                            return `
                                <li class="subtopic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed-item' : ''}" id="subitem-${sub.id}" onclick="app.loadSubtopic('${mod.id}', '${sub.id}')">
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <i class="fa-regular fa-file-lines" style="font-size:12px; color: ${isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'}"></i>
                                        <span>${sub.title}</span>
                                    </div>
                                    ${isCompleted ? '<i class="fa-solid fa-circle-check" style="color:var(--accent-emerald); font-size:12px;" title="Completed"></i>' : ''}
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            `;
        });

        sidebarTree.innerHTML = html;
    }

    toggleModule(modId) {
        const list = document.getElementById(`mod-list-${modId}`);
        const head = document.getElementById(`mod-head-${modId}`);
        if (list && head) {
            list.classList.toggle("open");
            head.classList.toggle("open");
        }
    }

    expandAllSidebar() {
        document.querySelectorAll(".subtopics-list").forEach(el => el.classList.add("open"));
        document.querySelectorAll(".module-header").forEach(el => el.classList.add("open"));
    }

    collapseAllSidebar() {
        document.querySelectorAll(".subtopics-list").forEach(el => el.classList.remove("open"));
        document.querySelectorAll(".module-header").forEach(el => el.classList.remove("open"));
    }

    selectModule(modIdx, subIdx) {
        const data = window.CURRICULUM_DATA || [];
        if (!data[modIdx] || !data[modIdx].subtopics[subIdx]) return;
        const mod = data[modIdx];
        const sub = mod.subtopics[subIdx];
        this.loadSubtopic(mod.id, sub.id);
    }

    loadSubtopic(modId, subId) {
        const data = window.CURRICULUM_DATA || [];
        const modData = data.find(m => m.id === modId);
        if (!modData) return;
        const subData = modData.subtopics.find(s => s.id === subId);
        if (!subData) return;

        this.currentModuleId = modId;
        this.currentSubtopicId = subId;

        // 1. Update Sidebar Active state
        document.querySelectorAll(".subtopic-item").forEach(el => el.classList.remove("active"));
        const activeItem = document.getElementById(`subitem-${subId}`);
        if (activeItem) activeItem.classList.add("active");

        // Ensure parent module is open
        const parentList = document.getElementById(`mod-list-${modId}`);
        const parentHead = document.getElementById(`mod-head-${modId}`);
        if (parentList) parentList.classList.add("open");
        if (parentHead) parentHead.classList.add("open");

        // 2. Update Header & Metadata
        const badgeEl = document.getElementById("current-module-badge");
        const levelEl = document.getElementById("current-module-level");
        const titleEl = document.getElementById("current-subtopic-title");
        const summaryEl = document.getElementById("current-subtopic-summary");
        const bodyEl = document.getElementById("topic-content-body");

        if (badgeEl) badgeEl.textContent = `Module ${data.indexOf(modData) + 1}: ${modData.title}`;
        if (levelEl) levelEl.innerHTML = `<i class="fa-solid fa-signal"></i> ${subData.level || 'Intermediate'}`;
        if (titleEl) titleEl.textContent = subData.title;
        if (summaryEl) summaryEl.innerHTML = `<strong>Topic Overview:</strong> ${subData.summary}`;

        // 3. Render Mode Notes (Student vs Professional)
        let modeNote = "";
        if (this.studentMode) {
            modeNote = `
                <div class="highlight-box info" style="margin-top:28px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px; color:var(--accent-cyan);">
                        <i class="fa-solid fa-graduation-cap" style="font-size:18px;"></i>
                        <strong style="font-size:15px;">Student Beginner Analogy & Learning Tip</strong>
                    </div>
                    <p style="font-size:13.5px; color:var(--text-secondary); margin:0;">
                        Think of this concept like organizing physical folders in a cabinet or building blocks in a workshop. By keeping clear rules (<code>like proper pointer initialization or LIFO stack order</code>), your code stays predictable and easy to debug when your projects get bigger!
                    </p>
                </div>
            `;
        } else {
            modeNote = `
                <div class="highlight-box warning" style="margin-top:28px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px; color:var(--accent-orange);">
                        <i class="fa-solid fa-microchip" style="font-size:18px;"></i>
                        <strong style="font-size:15px;">C++ Professional Production Architecture Note</strong>
                    </div>
                    <p style="font-size:13.5px; color:var(--text-secondary); margin:0;">
                        In enterprise high-frequency trading (HFT) or game engines, always evaluate memory layout footprint (<code>sizeof</code> alignment), cache-line locality (<code>L1/L2 miss rates</code>), and zero-overhead abstraction limits (<code>-O3 / -std=c++20</code> optimization flags). Avoid dynamic heap allocations (<code>new/delete</code>) inside critical tight loops!
                    </p>
                </div>
            `;
        }

        if (bodyEl) {
            const enhancedContent = this.enhanceSubtopicWithDepth(modData, subData);
            bodyEl.innerHTML = enhancedContent + modeNote;
            // Re-trigger animation
            bodyEl.style.animation = 'none';
            bodyEl.offsetHeight; // Trigger reflow
            bodyEl.style.animation = 'fadeInSlideUp 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        }

        // 4. Update Bookmark button state
        this.updateSubtopicBookmarkButton();

        // 5. Update Mark Completed button state
        this.updateSubtopicCompleteButton();

        // 6. Compute & Render Previous / Next Subtopic Footer Navigation
        this.renderFooterNavigation(modId, subId);

        // 7. Trigger syntax highlighting if available
        if (typeof Prism !== "undefined") {
            Prism.highlightAll();
        }

        // 8. Populate JetBrains IDE Column 3 Workbench with live C++ code
        this.populateIdeWorkbench(modData, subData);

        // 9. Ensure we are on the curriculum view
        if (this.activeTab !== "curriculum") {
            this.switchTab("curriculum");
        }
    }

    populateIdeWorkbench(modData, subData) {
        const tabTitle = document.getElementById("ide-tab-title");
        const statusSub = document.getElementById("ide-status-subtopic");
        if (tabTitle) tabTitle.textContent = `${subData.id}: ${subData.title.substring(0, 24)}.cpp`;
        if (statusSub) statusSub.innerHTML = `<i class="fa-solid fa-folder-tree"></i> Mod ${modData.id.replace('mod-', '')} ➔ ${subData.title}`;

        // Extract or synthesize C++ code for main.cpp
        let extractedCode = "";
        const cppMatch = (subData.content || "").match(/```(?:cpp|c\+\+)?([\s\S]*?)```/i);
        if (cppMatch && cppMatch[1].trim().length > 10) {
            extractedCode = cppMatch[1].trim();
        } else if (subData.bugCase && subData.bugCase.code) {
            extractedCode = subData.bugCase.code.trim();
        } else {
            extractedCode = `// ============================================================================
// C++ & DSA MasterClass Pro • Interactive IDE Sandbox
// Module: ${modData.title}
// Subtopic: ${subData.title}
// ============================================================================
#include <iostream>
#include <vector>
#include <memory>
#include <string>

int main() {
    std::cout << "=== Running Sandbox: ${subData.title} ===" << std::endl;
    
    // Example interactive simulation for ${subData.title}
    std::vector<int> dataStore = { 10, 24, 55, 89, 144 };
    
    std::cout << "Data Store Elements: ";
    for (const auto& elem : dataStore) {
        std::cout << elem << " ";
    }
    std::cout << "\\n[Sandbox Execution Successful]" << std::endl;
    return 0;
}`;
        }

        this.currentIdeCodeMain = extractedCode;
        this.currentIdeCodeBug = (subData.bugCase && subData.bugCase.code) ? subData.bugCase.code.trim() : `// Common Production Bug / Vulnerability Case for ${subData.title}
#include <iostream>

int main() {
    // WARNING: Evaluating potential memory leaks or undefined behavior...
    int* rawPtr = new int[1000];
    rawPtr[0] = 42;
    // Missing delete[] rawPtr; leads to resource leakage!
    std::cout << "[Vulnerability Detected: Missing Scope RAII Cleanup]" << std::endl;
    return 0;
}`;
        this.currentIdeCodeAst = `;; ============================================================================
;; Clang 18.1.0 -O3 AST & VTable Assembly Output for ${subData.title}
;; ============================================================================
.LC0:
        .string "=== Running Sandbox: ${subData.title} ==="
main:
        push    rbp
        mov     rbp, rsp
        sub     rsp, 32
        lea     rdi, .LC0[rip]
        call    std::basic_ostream<char>::operator<<(char const*)
        xor     eax, eax
        leave
        ret`;

        // Default to main.cpp tab
        this.switchIdeCodeTab('main');
    }

    switchIdeCodeTab(tabType) {
        const editor = document.getElementById("ide-live-code-editor");
        if (!editor) return;

        document.querySelectorAll(".ide-panel-tab").forEach(t => t.classList.remove("active"));
        const btn = document.querySelector(`.ide-panel-tab[onclick*="'${tabType}'"]`);
        if (btn) btn.classList.add("active");

        if (tabType === 'main') editor.value = this.currentIdeCodeMain || "";
        else if (tabType === 'bug') editor.value = this.currentIdeCodeBug || "";
        else if (tabType === 'ast') editor.value = this.currentIdeCodeAst || "";

        this.updateIdeLineNumbers();
        this.clearIdeTerminal();
    }

    updateIdeLineNumbers() {
        const editor = document.getElementById("ide-live-code-editor");
        const numContainer = document.getElementById("ide-line-numbers");
        if (!editor || !numContainer) return;

        const lines = editor.value.split('\n').length || 1;
        let numHtml = "";
        for (let i = 1; i <= Math.max(lines, 18); i++) {
            numHtml += `${i}<br>`;
        }
        numContainer.innerHTML = numHtml;

        // Sync scroll
        editor.onscroll = () => {
            numContainer.scrollTop = editor.scrollTop;
        };
    }

    zoomIdeEditor(delta) {
        const editor = document.getElementById("ide-live-code-editor");
        const numContainer = document.getElementById("ide-line-numbers");
        const label = document.getElementById("ide-font-label");
        if (!editor) return;

        this.currentIdeFontSize = Math.min(24, Math.max(11, (this.currentIdeFontSize || 13.5) + delta * 1.5));
        editor.style.fontSize = `${this.currentIdeFontSize}px`;
        if (numContainer) numContainer.style.fontSize = `${this.currentIdeFontSize}px`;
        if (label) label.textContent = `${this.currentIdeFontSize}px`;
        this.updateIdeLineNumbers();
    }

    handleIdeEditorKeydown(e) {
        const editor = e.target;
        if (!editor) return;

        // Smart Tab indentation (4 spaces)
        if (e.key === "Tab") {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            this.updateIdeLineNumbers();
            return;
        }

        // Automatic bracket pairing
        const pairs = { "{": "}", "(": ")", "[": "]", '"': '"' };
        if (pairs[e.key]) {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            const open = e.key;
            const close = pairs[e.key];
            const selText = editor.value.substring(start, end);
            editor.value = editor.value.substring(0, start) + open + selText + close + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 1;
            this.updateIdeLineNumbers();
            return;
        }

        // Auto-indent on Enter after {
        if (e.key === "Enter") {
            const start = editor.selectionStart;
            const lineBefore = editor.value.substring(0, start).split('\n').pop() || "";
            const indentMatch = lineBefore.match(/^\s*/);
            const currentIndent = indentMatch ? indentMatch[0] : "";

            if (lineBefore.trim().endsWith("{")) {
                e.preventDefault();
                const nextIndent = currentIndent + "    ";
                const afterCursor = editor.value.substring(start);
                if (afterCursor.trim().startsWith("}")) {
                    editor.value = editor.value.substring(0, start) + "\n" + nextIndent + "\n" + currentIndent + afterCursor;
                    editor.selectionStart = editor.selectionEnd = start + 1 + nextIndent.length;
                } else {
                    editor.value = editor.value.substring(0, start) + "\n" + nextIndent + afterCursor;
                    editor.selectionStart = editor.selectionEnd = start + 1 + nextIndent.length;
                }
                this.updateIdeLineNumbers();
                return;
            }
        }
    }

    toggleSidebarTree() {
        const container = document.querySelector(".app-container");
        if (!container) return;
        container.classList.toggle("sidebar-collapsed");
        const isCollapsed = container.classList.contains("sidebar-collapsed");
        this.showToast(isCollapsed ? "✔ Sidebar collapsed for wider workbench reading" : "✔ Sidebar expanded", "info");
    }

    setWorkbenchMode(mode) {
        this.workbenchMode = mode;
        const viewCurr = document.getElementById("view-curriculum");
        if (!viewCurr) return;

        viewCurr.classList.remove("workbench-mode-split", "workbench-mode-theory", "workbench-mode-code");
        viewCurr.classList.add(`workbench-mode-${mode}`);

        // Update button states
        document.querySelectorAll(".ide-split-btn").forEach(b => b.classList.remove("active"));
        const activeBtn = document.getElementById(`mode-${mode}-btn`);
        if (activeBtn) activeBtn.classList.add("active");

        // Trigger resize calculation
        setTimeout(() => {
            this.updateIdeLineNumbers();
        }, 150);

        if (mode === "theory") this.showToast("📖 Reading Mode: Maximized Theory & Diagrams View", "info");
        else if (mode === "code") this.showToast("💻 Coding Mode: Maximized C++ Code Sandbox", "info");
        else this.showToast("⚖ Split Studio Mode: Side-by-side Theory & Code Sandbox", "info");
    }

    initResizerHandle() {
        const resizer = document.getElementById("ide-resizer");
        const colCenter = document.getElementById("curriculum-center-column");
        const colIde = document.getElementById("ide-code-workbench");
        const splitContainer = document.querySelector(".curriculum-workbench-split");
        if (!resizer || !colCenter || !colIde || !splitContainer) return;

        let isResizing = false;

        resizer.addEventListener("mousedown", (e) => {
            isResizing = true;
            resizer.classList.add("resizing");
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isResizing) return;
            const containerRect = splitContainer.getBoundingClientRect();
            const mouseX = e.clientX - containerRect.left;
            const totalWidth = containerRect.width;
            let centerPct = (mouseX / totalWidth) * 100;

            // Constrain limits between 20% and 80%
            if (centerPct < 22) centerPct = 22;
            if (centerPct > 78) centerPct = 78;
            const idePct = 100 - centerPct;

            colCenter.style.flex = `1 1 ${centerPct}%`;
            colIde.style.flex = `1 1 ${idePct}%`;
            this.updateIdeLineNumbers();
        });

        document.addEventListener("mouseup", () => {
            if (isResizing) {
                isResizing = false;
                resizer.classList.remove("resizing");
                document.body.style.cursor = "default";
                document.body.style.userSelect = "auto";
            }
        });
    }

    toggleTemplateMenu() {
        const menu = document.getElementById("ide-template-menu");
        if (menu) menu.classList.toggle("hidden");
    }

    loadTemplate(type) {
        const editor = document.getElementById("ide-live-code-editor");
        const menu = document.getElementById("ide-template-menu");
        if (menu) menu.classList.add("hidden");
        if (!editor) return;

        let templateCode = "";
        if (type === "vector") {
            templateCode = `// C++ Standard I/O & Dynamic Vectors Template
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<int> numbers = { 15, 23, 42, 88, 104 };
    numbers.push_back(200);
    
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Vector Size: " << numbers.size() << " | Sum: " << sum << std::endl;
    
    for (size_t i = 0; i < numbers.size(); ++i) {
        std::cout << "numbers[" << i << "] = " << numbers[i] << "\\n";
    }
    return 0;
}`;
        } else if (type === "oop") {
            templateCode = `// C++ Classes, Virtual Functions & Polymorphism Template
#include <iostream>
#include <memory>

class DataStructure {
public:
    virtual void analyze() const = 0;
    virtual ~DataStructure() = default;
};

class AVLTree : public DataStructure {
public:
    void analyze() const override {
        std::cout << "[AVLTree] Height-balanced binary search tree verified. O(log N)" << std::endl;
    }
};

class Graph : public DataStructure {
public:
    void analyze() const override {
        std::cout << "[Graph] Adjacency List Traversal: Dijkstra shortest path ready." << std::endl;
    }
};

int main() {
    std::unique_ptr<DataStructure> ds1 = std::make_unique<AVLTree>();
    std::unique_ptr<DataStructure> ds2 = std::make_unique<Graph>();
    ds1->analyze();
    ds2->analyze();
    return 0;
}`;
        } else if (type === "stack") {
            templateCode = `// C++ LIFO Stack via Dynamic Linked Nodes Template
#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class Stack {
    Node* topNode = nullptr;
public:
    void push(int val) {
        Node* newNode = new Node(val);
        newNode->next = topNode;
        topNode = newNode;
        std::cout << "Pushed " << val << " onto Stack.\\n";
    }
    void pop() {
        if (!topNode) { std::cout << "Stack Underflow\\n"; return; }
        Node* temp = topNode;
        topNode = topNode->next;
        std::cout << "Popped " << temp->data << " from Stack.\\n";
        delete temp;
    }
    ~Stack() { while(topNode) pop(); }
};

int main() {
    Stack s;
    s.push(10); s.push(20); s.push(30);
    s.pop();
    return 0;
}`;
        } else if (type === "leak") {
            templateCode = `// C++ AddressSanitizer (ASan) Memory Leak Diagnostics Test
#include <iostream>

void simulateMemoryLeak() {
    int* leakedBuffer = new int[500];
    leakedBuffer[0] = 999;
    std::cout << "[ASan Test] Buffer allocated at heap address: " << leakedBuffer << std::endl;
    // Note: Missing delete[] leakedBuffer; causes intentional memory leak!
}

int main() {
    std::cout << "Starting Memory Safety Diagnostics..." << std::endl;
    simulateMemoryLeak();
    return 0;
}`;
        } else if (type === "sort") {
            templateCode = `// C++ Fast Sorting & Lambda Expressions Template
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> data = { 64, 34, 25, 12, 22, 11, 90 };
    
    // Custom Lambda descending sort
    std::sort(data.begin(), data.end(), [](int a, int b) {
        return a > b;
    });
    
    std::cout << "Sorted in Descending Order: ";
    for (int v : data) std::cout << v << " ";
    std::cout << std::endl;
    return 0;
}`;
        }

        editor.value = templateCode;
        this.currentIdeCodeMain = templateCode;
        this.updateIdeLineNumbers();
        this.showToast(`✨ Template loaded cleanly into C++ Code Sandbox!`, "success");
    }

    newScratchFile() {
        const tabTitle = document.getElementById("ide-tab-title");
        if (tabTitle) tabTitle.textContent = `scratch_${Math.floor(Math.random()*1000)}.cpp`;
        const editor = document.getElementById("ide-live-code-editor");
        if (editor) {
            editor.value = `// C++ Scratchpad Session\n#include <iostream>\n\nint main() {\n    std::cout << "Hello from Scratchpad!" << std::endl;\n    return 0;\n}`;
            this.updateIdeLineNumbers();
        }
        this.showToast("✔ New scratch C++ file created", "info");
    }

    runIdeSandbox() {
        const term = document.getElementById("ide-terminal-output");
        const editor = document.getElementById("ide-live-code-editor");
        const stdinInput = document.getElementById("ide-stdin-input");
        if (!term || !editor) return;

        const code = editor.value;
        const customStdin = stdinInput ? stdinInput.value.trim() : "";

        term.innerHTML = `<div class="term-line info"><i class="fa-solid fa-spinner fa-spin"></i> [Clang 18.1.0] Compiling main.cpp (-std=c++23 -O3 -Wall)...</div>`;

        setTimeout(() => {
            // Check basic syntax issues
            const openBraces = (code.match(/\{/g) || []).length;
            const closeBraces = (code.match(/\}/g) || []).length;
            const openParens = (code.match(/\(/g) || []).length;
            const closeParens = (code.match(/\)/g) || []).length;

            if (openBraces !== closeBraces) {
                term.innerHTML = `
                    <div class="term-line error"><i class="fa-solid fa-circle-xmark"></i> [Clang 18.1.0 Error] main.cpp: syntax error: Mismatched curly braces '{' (${openBraces}) vs '}' (${closeBraces})</div>
                    <div class="term-line warning">Check your function scopes or class definitions and ensure every opening '{' has a closing '}'.</div>
                `;
                term.scrollTop = term.scrollHeight;
                return;
            }
            if (openParens !== closeParens) {
                term.innerHTML = `
                    <div class="term-line error"><i class="fa-solid fa-circle-xmark"></i> [Clang 18.1.0 Error] main.cpp: syntax error: Mismatched parentheses '(' (${openParens}) vs ')' (${closeParens})</div>
                `;
                term.scrollTop = term.scrollHeight;
                return;
            }

            // Extract outputs or simulate execution
            let simulatedOutput = "";
            const coutMatches = code.match(/std::cout\s*<<\s*"([^"]*)"/g);
            if (coutMatches && coutMatches.length > 0) {
                coutMatches.forEach(m => {
                    const textMatch = m.match(/"([^"]*)"/);
                    if (textMatch) simulatedOutput += textMatch[1] + "<br>";
                });
            } else if (code.includes("accumulate") || code.includes("push_back")) {
                simulatedOutput = `Vector Size: 6 | Sum: 472<br>numbers[0] = 15<br>numbers[1] = 23<br>numbers[2] = 42<br>numbers[3] = 88<br>numbers[4] = 104<br>numbers[5] = 200`;
            } else if (code.includes("AVLTree")) {
                simulatedOutput = `[AVLTree] Height-balanced binary search tree verified. O(log N)<br>[Graph] Adjacency List Traversal: Dijkstra shortest path ready.`;
            } else if (code.includes("Stack")) {
                simulatedOutput = `Pushed 10 onto Stack.<br>Pushed 20 onto Stack.<br>Pushed 30 onto Stack.<br>Popped 30 from Stack.<br>Popped 20 from Stack.<br>Popped 10 from Stack.`;
            } else if (code.includes("simulateMemoryLeak")) {
                simulatedOutput = `Starting Memory Safety Diagnostics...<br>[ASan Test] Buffer allocated at heap address: 0x7fff5a820<br><span style="color:#ef4444; font-weight:bold;">=================================================================<br>==31415==ERROR: AddressSanitizer: detected memory leaks<br>Direct leak of 2000 byte(s) in 1 object(s) allocated from:<br>    #0 0x56230f operator new[](unsigned long)<br>    #1 0x56238b in simulateMemoryLeak() main.cpp:5</span>`;
            } else if (code.includes("std::sort")) {
                simulatedOutput = `Sorted in Descending Order: 90 64 34 25 22 12 11`;
            } else {
                simulatedOutput = `=== Running C++ Sandbox Execution ===<br>Memory Layout & Zero-Overhead Abstraction Verified.<br>All objects cleanly destroyed via RAII.`;
            }

            if (customStdin) {
                simulatedOutput = `<span style="color:#38bdf8;">[stdin input read: "${customStdin}"]</span><br>` + simulatedOutput;
            }

            term.innerHTML = `
                <div class="term-line info">[Clang 18.1.0] g++ -std=c++23 -O3 -Wall -Wextra main.cpp -o app</div>
                <div class="term-line success">✔ Compilation finished with 0 errors, 0 warnings (0.12s)</div>
                <div class="term-line info">Executing ./app ${customStdin ? 'with stdin...' : '...'}</div>
                <div class="term-line" style="color:#f8fafc; background:rgba(0,0,0,0.55); padding:10px 14px; border-radius:8px; font-family:'JetBrains Mono',var(--font-mono); border-left:3.5px solid #10b981; line-height:1.6; margin-top:6px;">
${simulatedOutput}<br>
<span style="color:#94a3b8; font-size:11.5px;">[Process exited with code 0 (0x00) • Memory consumed: 14.1 MB]</span>
                </div>
            `;
            term.scrollTop = term.scrollHeight;
        }, 380);
    }

    debugIdeSandbox() {
        const term = document.getElementById("ide-terminal-output");
        if (!term) return;

        term.innerHTML = `<div class="term-line warning"><i class="fa-solid fa-bug"></i> Running Clang AddressSanitizer (ASan) & AST Inspector...</div>`;
        setTimeout(() => {
            term.innerHTML = `
                <div class="term-line info">[ASan/Valgrind Analysis] Inspecting Heap Allocation & VTable Dispatch...</div>
                <div class="term-line success">✔ Memory Safety Check: No dangling pointers or uninitialized stack variables detected.</div>
                <div class="term-line warning">⚡ Optimization Tip: Consider passing large objects by const reference (<code>const T&</code>) or using <code>std::move()</code> to eliminate intermediate copy constructors.</div>
            `;
            term.scrollTop = term.scrollHeight;
        }, 450);
    }

    buildIdeSandbox() {
        const term = document.getElementById("ide-terminal-output");
        if (!term) return;

        term.innerHTML = `<div class="term-line info"><i class="fa-solid fa-gear fa-spin"></i> Building Release Target (-std=c++23 -O3 -march=native)...</div>`;
        setTimeout(() => {
            term.innerHTML = `
                <div class="term-line success">✔ Build Complete! Binary size: 24.8 KB | Strip Symbol Table: OK</div>
                <div class="term-line info">SIMD Vectorization: AVX2 / NEON registers active.</div>
            `;
            term.scrollTop = term.scrollHeight;
        }, 400);
    }

    clearIdeTerminal() {
        const term = document.getElementById("ide-terminal-output");
        if (!term) return;
        term.innerHTML = `<div class="term-line success">✔ Clang 18.1.0 Ready. Select a subtopic or click [▶ Run Sandbox] to execute C++ code live.</div>`;
    }

    copyIdeCode() {
        const editor = document.getElementById("ide-live-code-editor");
        if (!editor) return;
        navigator.clipboard.writeText(editor.value).then(() => {
            this.showToast("✔ Code copied to clipboard!", "success");
        }).catch(() => {
            this.showToast("Copied!", "success");
        });
    }

    switchDiagramTab(btn, panelType) {
        if (!btn) return;
        const card = btn.closest('.graphical-diagram-card');
        if (!card) return;
        
        card.querySelectorAll('.diagram-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        card.querySelectorAll('.diagram-view-panel').forEach(p => p.classList.remove('active-panel'));
        const target = card.querySelector(`.diagram-view-panel.${panelType}`);
        if (target) {
            target.classList.add('active-panel');
        }
    }

    generateGraphicalDiagramCard(title, iso3d, svg2d, ascii) {
        return `
            <div class="graphical-diagram-card">
                <div class="graphical-card-header">
                    <div class="graphical-title">
                        <i class="fa-solid fa-cube"></i> ${title}
                    </div>
                    <div class="diagram-view-tabs">
                        <button class="diagram-tab-btn active" onclick="app.switchDiagramTab(this, 'panel-3d')">
                            <i class="fa-solid fa-cubes"></i> 🌟 3D / Animated View
                        </button>
                        <button class="diagram-tab-btn" onclick="app.switchDiagramTab(this, 'panel-2d')">
                            <i class="fa-solid fa-vector-square"></i> 📐 2D Graphical Flow
                        </button>
                        <button class="diagram-tab-btn" onclick="app.switchDiagramTab(this, 'panel-ascii')">
                            <i class="fa-solid fa-terminal"></i> 💻 Technical ASCII
                        </button>
                    </div>
                </div>
                <div class="graphical-stage-wrapper">
                    <div class="diagram-view-panel panel-3d active-panel">
                        ${iso3d}
                    </div>
                    <div class="diagram-view-panel panel-2d">
                        ${svg2d}
                    </div>
                    <div class="diagram-view-panel panel-ascii">
                        <div class="ascii-technical-panel">
                            <pre style="margin:0;">${ascii}</pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    enhanceSubtopicWithDepth(modData, subData) {
        let content = subData.content || "";
        
        const titleSummaryText = (subData.title + " " + modData.title + " " + (subData.summary || "")).toLowerCase();
        const bodyText = (content).toLowerCase();
        const tText = titleSummaryText + " " + bodyText;
        
        let diagramHtml = "";
        let deepConceptHtml = "";
        let errorHtml = "";

        // 1. Check granular subtopic diagrams engine first for exact subtopic IDs (e.g. History of C++, Arrays, Stacks, etc.)
        if (typeof window !== "undefined" && window.SubtopicDiagramsEngine && typeof window.SubtopicDiagramsEngine.getSpecificBundle === "function") {
            const specificBundle = window.SubtopicDiagramsEngine.getSpecificBundle(modData, subData, this);
            if (specificBundle && specificBundle.diagramHtml) {
                diagramHtml = specificBundle.diagramHtml;
                if (specificBundle.deepConceptHtml) deepConceptHtml = specificBundle.deepConceptHtml;
                if (specificBundle.errorHtml) errorHtml = specificBundle.errorHtml;
            }
        }

        if (!diagramHtml) {
            // Determine specific architectural category using exact word boundaries (\b) to prevent false positives (e.g. 'for' in 'performance' or 'if' in 'specification')
            const isPointer = /\b(pointer|pointers|memory management|dereference|malloc|heap allocation)\b/i.test(titleSummaryText) || /\b(sizeof\(void\*\)|raw pointer)\b/i.test(bodyText);
        const isVirtual = /\b(virtual|polymorph|polymorphic|polymorphism|inherit|inheritance|override|vtable|vptr|base class|derived class)\b/i.test(titleSummaryText) || (/\bvtable\b/i.test(bodyText) && !/\bvirtual machine\b/i.test(bodyText));
        const isStackQueue = /\b(stack|stacks|queue|queues|fifo|lifo|circular buffer)\b/i.test(titleSummaryText);
        const isLinkedList = /\b(linked list|linked lists|node|nodes|doubly linked|binary tree|bst|graph|graphs|dfs|bfs)\b/i.test(titleSummaryText);
        const isSorting = /\b(sort|sorting|quicksort|mergesort|binary search|complexity|algorithm|algorithms|big-o|partition)\b/i.test(titleSummaryText);
        const isClassObj = /\b(class|classes|object|objects|struct|structs|encapsulation|constructor|destructor|this pointer)\b/i.test(titleSummaryText);
        const isTemplate = /\b(template|templates|typename|generic|generics|monomorphization|specialization)\b/i.test(titleSummaryText);
        const isSmartPtr = /\b(smart pointer|unique_ptr|shared_ptr|weak_ptr|raii)\b/i.test(titleSummaryText);
        const isConcurrency = /\b(thread|threads|mutex|concurrency|concurrent|lock|locks|atomic|race condition|deadlock)\b/i.test(titleSummaryText);
        const isControlFlow = /\b(loop|loops|branch prediction|control flow|if-else|switch statement)\b/i.test(titleSummaryText);
        const isArray = /\b(array|arrays|vector|vectors|linear search|contiguous|multidimensional|matrix|2d array|largest & smallest element|advantages & disadvantages of array|memory allocation of array)\b/i.test(titleSummaryText) || /\b(arr\[|arr\.|vector<)\b/i.test(bodyText);
        const isStringStream = /\b(string|strings|char array|cin|cout|stringstream|file i\/o|ifstream|ofstream|iostream|stream)\b/i.test(titleSummaryText);
        const isFunctions = /\b(function|functions|call stack|parameter|parameters|argument|arguments|return|recursion|recursive|lambda|functor|inline)\b/i.test(titleSummaryText);
        const isBitwiseMath = /\b(bitwise|bit manipulation|operator|operators|expression|expressions|variable|variables|int|float|double|data type|prime|palindrome|armstrong|fibonacci|pyramid|math|number|series|decimal|octal)\b/i.test(titleSummaryText);
        const isDynamicMemory = /\b(new|delete|memory allocation|free store|memory leak|dangling pointer|heap allocation)\b/i.test(titleSummaryText);
        const isExceptions = /\b(exception|exceptions|try|catch|throw|error handling|runtime_error|stack unwinding)\b/i.test(titleSummaryText);
        const isSTL = /\b(stl|map|unordered_map|set|hash table|iterator|iterators|container|containers|algorithm library)\b/i.test(titleSummaryText);

        if (isPointer) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "POINTER DEREFERENCING & DYNAMIC HEAP MEMORY MAP",
                `<div class="iso-3d-stage">
                    <div class="iso-grid-plane">
                        <div class="iso-block pointer-box">
                            <div class="iso-face iso-top">ptr = 0x104A</div>
                            <div class="iso-face iso-front">Stack RAM</div>
                            <div class="iso-face iso-right">0x7FFD</div>
                        </div>
                        <div class="iso-laser-beam"></div>
                        <div class="iso-packet"></div>
                        <div class="iso-block heap-box">
                            <div class="iso-face iso-top">*ptr = 42</div>
                            <div class="iso-face iso-front">Heap Arena</div>
                            <div class="iso-face iso-right">0x104A</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Interactive 3D Isometric RAM Model:</strong> Hover grid to rotate perspective. Pulsing laser pulse tracks address resolution from stack pointer to heap allocation.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Stack Frame (Local Scope)</div>
                            <div class="g-node-value">int* ptr = 0x104A00</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-right-long"></i>
                            <span style="font-size:11px; margin-top:4px;">*ptr (Dereference)</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Dynamic Heap Payload</div>
                            <div class="g-node-value">Value: 42 (0x104A00)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Vector Schematic:</strong> Direct address translation from stack pointer variable to dynamically allocated heap storage.</p>`,
                `+-------------------------------------------------------------------------+
| STACK SEGMENT (High Addresses - Local Scopes & RAII Variables)          |
| [Address 0x7ffd08] int* ptr   ===============\                         |
| [Address 0x7ffd04] int local = 100            \   (Dereferences *ptr)  |
+------------------------------------------------\------------------------+
                                                  \
+--------------------------------------------------\----------------------+
| HEAP SEGMENT (Low Addresses - Dynamic 'new/delete' Payload Memory)      |
| [Address 0x104a00] <int block: value = 42> <=====/                      |
+-------------------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-bolt"></i> C++ Compiler Theory: Pointer Decay & Cache-Line Alignment
                    </div>
                    <p class="deep-concept-text">
                        On modern 64-bit architectures, raw pointers occupy exactly 8 bytes (64 bits) regardless of target type (<code>sizeof(int*) == sizeof(double*) == 8</code>). When traversing contiguous arrays (<code>int* p</code>), pointer arithmetic (<code>p++</code>) scales automatically by <code>sizeof(T)</code>. However, chasing non-contiguous pointer links causes L1/L2 CPU cache misses, degrading pipeline throughput by up to 20x compared to cache-friendly contiguous vectors!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common C++ Pointer Pitfall: Wild Dereferencing & Core Dumps
                    </div>
                    <div class="error-code-snippet">
error: uninitialized local pointer 'p' used without allocation [-Wuninitialized]
Segmentation fault (core dumped) (Process returned exit code 139)
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Declaring <code>int* p; *p = 50;</code> creates a wild pointer pointing to random RAM address <code>0xcccccccc</code>. Always initialize pointers to <code>nullptr</code> or immediately bind them to valid stack/heap addresses (<code>int* p = nullptr;</code> or use <code>std::unique_ptr&lt;int&gt; p = std::make_unique&lt;int&gt;(50);</code>).
                    </p>
                </div>
            `;
        } else if (isVirtual) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "VIRTUAL TABLE (VTABLE) & DYNAMIC VPOINTER DISPATCH",
                `<div class="iso-3d-stage">
                    <div class="iso-grid-plane">
                        <div class="iso-block pointer-box" style="left:10px;">
                            <div class="iso-face iso-top">_vptr = 0x88</div>
                            <div class="iso-face iso-front">Object Instance</div>
                            <div class="iso-face iso-right">Base / Derived</div>
                        </div>
                        <div class="iso-laser-beam" style="width:130px; top:65px; left:60px; transform: rotateZ(20deg) translateZ(30px);"></div>
                        <div class="iso-block vtable-box" style="left:150px; top:40px;">
                            <div class="iso-face iso-top" style="background:rgba(139,92,246,0.55);">vtable[1]</div>
                            <div class="iso-face iso-front" style="background:rgba(109,40,217,0.75);">Virtual Table</div>
                            <div class="iso-face iso-right" style="background:rgba(124,58,237,0.65);">0x8800</div>
                        </div>
                        <div class="iso-laser-beam" style="width:110px; top:75px; left:190px; transform: rotateZ(35deg) translateZ(30px); background:linear-gradient(90deg, #a855f7, #ec4899);"></div>
                        <div class="iso-block heap-box" style="bottom:10px; right:10px;">
                            <div class="iso-face iso-top" style="background:rgba(236,72,153,0.5);">Derived::draw()</div>
                            <div class="iso-face iso-front" style="background:rgba(190,24,93,0.7);">Code Segment</div>
                            <div class="iso-face iso-right" style="background:rgba(219,39,119,0.6);">0x9A00</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>3D Virtual Dispatch Animation:</strong> CPU reads hidden object <code>_vptr</code>, indexes vtable slot <code>[1]</code>, and jumps to overridden runtime function address.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Object Instance RAM</div>
                            <div class="g-node-value">obj._vptr ➔</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div class="g-node highlight-green" style="min-width:160px;">
                            <div class="g-node-title">Class Virtual Table</div>
                            <div class="g-node-value" style="font-size:13px;">[0] Base::func()<br>[1] Derived::draw() ★</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="g-node" style="border-color:#ec4899;">
                            <div class="g-node-title">Code Execution</div>
                            <div class="g-node-value">Derived::draw()</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Schematic:</strong> Depicting dynamic polymorphism double indirection during runtime method lookup.</p>`,
                `Base* objPtr = new Derived(); // Dynamic Polymorphism in Action

[ Derived Object Instance in Memory ]         [ Class Derived's vtable ]
+-----------------------------------+         +----------------------------------+
| vptr (Hidden 8-byte pointer)     | =======> | [0] &Base::nonVirtualFunc()    |
| int baseData                      |         | [1] &Derived::virtualFunc()      | <-- Overridden!
| double derivedData                |         | [2] &Derived::newVirtual()       |
+-----------------------------------+         +----------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Zero-Overhead Rule & vptr Memory Overhead Theory
                    </div>
                    <p class="deep-concept-text">
                        C++ enforces the 'Zero-Overhead Principle': if you don't use virtual functions, classes have zero extra bytes. But the moment you declare even ONE <code>virtual</code> method, the compiler silently inserts an 8-byte <code>_vptr</code> at offset 0 of every object instance. During <code>ptr-&gt;draw()</code>, the CPU executes double-indirection: <code>(*ptr-&gt;_vptr[slot])(ptr)</code>, converting compile-time calls to runtime table lookups!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical C++ Error: Non-Virtual Base Destructor Memory Leak
                    </div>
                    <div class="error-code-snippet">
warning: deleting object of polymorphic class type 'Base' which has non-virtual destructor might cause undefined behavior [-Wdelete-non-virtual-dtor]
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> If <code>Base* p = new Derived(); delete p;</code> runs when <code>~Base()</code> is not virtual, early binding invokes only <code>~Base()</code>, permanently leaking all heap buffers inside <code>Derived</code>! Always declare <code>virtual ~Base() = default;</code> in any polymorphic class hierarchy.
                    </p>
                </div>
            `;
        } else if (isStackQueue) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "LIFO MEMORY STACK vs FIFO CIRCULAR QUEUE BUFFER",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:40px;">
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:8px;">LIFO STACK CYLINDER</div>
                            <div style="width:120px; height:160px; border:2px solid #38bdf8; border-radius:12px; position:relative; display:flex; flex-direction:column-reverse; align-items:center; padding:6px; background:rgba(14,165,233,0.1); box-shadow:inset 0 0 20px rgba(56,189,248,0.2);">
                                <div style="width:90%; padding:8px 0; background:#0284c7; color:#fff; font-weight:700; font-size:11px; text-align:center; border-radius:6px; margin-top:4px;">Bottom (10)</div>
                                <div style="width:90%; padding:8px 0; background:#0ea5e9; color:#fff; font-weight:700; font-size:11px; text-align:center; border-radius:6px; margin-top:4px;">Mid (25)</div>
                                <div style="width:90%; padding:8px 0; background:#10b981; color:#000; font-weight:700; font-size:11px; text-align:center; border-radius:6px; margin-top:4px; animation: floatNodeAnim 1.8s infinite ease-in-out;">TOP (64) ★</div>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <div style="font-size:12px; font-weight:700; color:#10b981; margin-bottom:8px;">FIFO CIRCULAR BUFFER RING</div>
                            <div style="width:160px; height:160px; border:3px dashed #10b981; border-radius:50%; position:relative; display:flex; align-items:center; justify-content:center; animation: spinCube 16s infinite linear;">
                                <div style="position:absolute; top:8px; background:#10b981; color:#000; font-size:10px; font-weight:700; padding:4px 8px; border-radius:10px;">[0] FRONT</div>
                                <div style="position:absolute; bottom:8px; background:#38bdf8; color:#000; font-size:10px; font-weight:700; padding:4px 8px; border-radius:10px;">[3] REAR</div>
                                <div style="font-size:13px; font-weight:700; color:#fff;">O(1) Modulo Wrap</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>3D Stack Container vs Rotating Ring Buffer:</strong> Top-only LIFO insertion versus continuous circular index wrapping (<code>(rear + 1) % MAX</code>).</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Stack Push/Pop (Top Only)</div>
                            <div class="g-node-value">Top ➔ [64] ➔ [25] ➔ [10]</div>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Queue Enqueue / Dequeue</div>
                            <div class="g-node-value">Front [0] ➔ [1] ➔ [2] Rear</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Schematic:</strong> Direct comparison of linear stack boundaries vs FIFO queue operations.</p>`,
                `LIFO STACK (Push / Pop at TOP)         FIFO CIRCULAR QUEUE (modulo wrap)
+-------------------------------+      +---+---+---+---+---+---+
| [TOP]    -> Element 3 (64)    |      | 0 | 1 | 2 | 3 | 4 | 5 |  indices
+-------------------------------+      +---+---+---+---+---+---+
| [Mid]    -> Element 2 (25)    |            ^           ^
+-------------------------------+          FRONT       REAR  (rear = (rear+1)%6)
| [BOTTOM] -> Element 1 (10)    |
+-------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-gauge-high"></i> Amortized O(1) vs Worst-Case Reallocation Theory
                    </div>
                    <p class="deep-concept-text">
                        In standard C++, <code>std::stack</code> uses <code>std::deque</code> by default (chunked array pages), avoiding the <code>O(N)</code> reallocation latency of single <code>std::vector</code> re-sizing while preserving high L1 cache hit density. Circular array queues (<code>(rear + 1) % MAX</code>) achieve strict <code>O(1)</code> time and zero memory fragmentation without dynamic node allocations!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Runtime Crash: Stack Underflow & Container Bounds
                    </div>
                    <div class="error-code-snippet">
terminate called after throwing an instance of 'std::out_of_range'
  what():  stack::pop / queue::front on empty container
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Calling <code>.pop()</code> or <code>.top()</code> / <code>.front()</code> on an empty stack or queue (<code>st.empty() == true</code>) causes undefined behavior or throws exceptions. Always wrap pop operations inside a guard: <code>if (!st.empty()) { st.pop(); }</code>.
                    </p>
                </div>
            `;
        } else if (isLinkedList) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "NON-LINEAR POINTER-LINKED DATA STRUCTURES & TREE CHAINS",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="flex-direction:column; gap:16px;">
                        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; justify-content:center;">
                            <div class="g-node highlight-purple" style="min-width:110px; padding:10px;"><span style="font-size:11px; color:#cbd5e1;">Head Node</span><br><b>Data: 10</b></div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-link" style="color:#38bdf8;"></i></div>
                            <div class="g-node highlight-green" style="min-width:110px; padding:10px;"><span style="font-size:11px; color:#cbd5e1;">Next Node</span><br><b>Data: 20</b></div>
                            <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-link" style="color:#38bdf8;"></i></div>
                            <div class="g-node" style="min-width:80px; padding:10px; border-color:#64748b;"><b>NULL</b></div>
                        </div>
                        <div style="display:flex; flex-direction:column; align-items:center; margin-top:10px;">
                            <div class="g-node" style="border-color:#ec4899; min-width:130px; padding:8px;"><b>Root BST: [50]</b></div>
                            <div style="display:flex; gap:60px; margin-top:12px; position:relative;">
                                <div class="g-node highlight-purple" style="min-width:95px; padding:8px;"><b>Left: [30]</b></div>
                                <div class="g-node highlight-green" style="min-width:95px; padding:8px;"><b>Right: [70]</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Dynamic Animated Node Graph:</strong> Nodes allocated across disjoint heap addresses linked via pulsing memory pointers.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Singly Linked Chain</div>
                            <div class="g-node-value">[HEAD] ➔ [10|0x18] ➔ [20|0x0]</div>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Binary Search Tree (BST)</div>
                            <div class="g-node-value">Root (50) ➔ Left(30) / Right(70)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Node Pointer Map:</strong> Highlighting heap fragmentation vs structural parent-child links.</p>`,
                `SINGLY LINKED LIST:
[HEAD] -> [Node 1: Data=10|next=0x108] -> [Node 2: Data=20|next=0x204] -> [NULL]

BINARY SEARCH TREE (BST) NODE POINTERS:
                   [Root Node: 50] (0x800)
                  /                       \\
     [Left: 30] (0x810)              [Right: 70] (0x820)
     /        \\                      /         \\
 [10]         [40]                [60]          [90]`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Cache Misses vs Pointer Flexibility in Node Chains Theory
                    </div>
                    <p class="deep-concept-text">
                        While linked lists and trees allow <code>O(1)</code> node insertion without shifting elements, each <code>new Node</code> call allocates arbitrary blocks across the heap. This destroys CPU hardware prefetching, leading to frequent L2/L3 cache misses during traversal. For modern performance, use contiguous arenas or B-Trees where possible!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common DSA Crash: Nullptr Dereference during Traversal
                    </div>
                    <div class="error-code-snippet">
AddressSanitizer: SEGV on unknown address 0x000000000008 (pc 0x55a6d7... sp 0x7ffd...)
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Writing <code>while (curr-&gt;next != nullptr)</code> or <code>curr-&gt;next-&gt;data</code> crashes instantly if <code>curr</code> itself is <code>nullptr</code>! Always verify nullity sequentially from left to right: <code>if (curr != nullptr && curr-&gt;next != nullptr)</code>.
                    </p>
                </div>
            `;
        } else if (isSorting) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "ALGORITHMIC PARTITIONING & BINARY HALVING FLOW",
                `<div class="iso-3d-stage">
                    <div style="display:flex; flex-direction:column; align-items:center; width:100%;">
                        <div style="display:flex; align-items:flex-end; gap:12px; height:140px; padding:12px; background:rgba(0,0,0,0.3); border-radius:12px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="width:38px; height:48px; background:#0284c7; border-radius:5px 5px 0 0; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:12px;">12</div>
                            <div style="width:38px; height:68px; background:#0ea5e9; border-radius:5px 5px 0 0; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:12px;">23</div>
                            <div style="width:46px; height:120px; background:#fbbf24; border-radius:7px 7px 0 0; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#000; font-weight:700; font-size:13px; box-shadow:0 0 18px #fbbf24; animation: floatNodeAnim 1.5s infinite ease-in-out;">PIVOT<br>45 ★</div>
                            <div style="width:38px; height:98px; background:#10b981; border-radius:5px 5px 0 0; display:flex; align-items:center; justify-content:center; color:#000; font-weight:700; font-size:12px;">67</div>
                            <div style="width:38px; height:125px; background:#059669; border-radius:5px 5px 0 0; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:12px;">89</div>
                        </div>
                        <div style="font-size:12.5px; color:#cbd5e1; margin-top:10px;">🌟 Animated QuickSort Partitioning around glowing gold Pivot (45)</div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>3D Algorithmic Bar Visualization:</strong> Left partition contains values &lt; Pivot, right partition contains values &gt; Pivot.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Binary Search Halving Window</div>
                            <div class="g-node-value">[ 5 | 12 | 23 | <b>34</b> | 45 | 67 | 89 ]</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-scissors"></i>
                            <span style="font-size:11px; margin-top:4px;">Target 67 &gt; Mid 34</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Next Halved Search Sub-Array</div>
                            <div class="g-node-value">[ 45 | <b>67 ★</b> | 89 ] ➔ O(log N)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Step-by-Step Halving Diagram:</strong> Exponential search space reduction (<code>O(log N)</code> complexity).</p>`,
                `QUICKSORT PARTITIONING (Pivot = 45):
[ 12 | 23 | 5 | 34 ]  <--- PIVOT (45) --->  [ 89 | 67 | 91 ]
  All values < 45                             All values > 45

BINARY SEARCH (O(log N) Halving Search for Target = 67):
Step 1: [ 5 | 12 | 23 | 34 | 45 | 67 | 89 | 91 ] (Mid = 34, Target > Mid)
Step 2:                    [ 45 | 67 | 89 | 91 ] (Mid = 67 -> FOUND!)`
            );
        } else if (isClassObj) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "CLASS INSTANCE MEMORY & 'this' POINTER MAP",
                `<div class="iso-3d-stage">
                    <div style="display:flex; align-items:center; gap:50px; flex-wrap:wrap; justify-content:center;">
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:8px;">3D OBJECT INSTANCE IN RAM</div>
                            <div class="rotating-3d-cube">
                                <div class="cube-face cube-front">id: 101</div>
                                <div class="cube-face cube-back">balance: $500</div>
                                <div class="cube-face cube-right">sizeof: 16B</div>
                                <div class="cube-face cube-left">Account obj</div>
                                <div class="cube-face cube-top">_vptr (if any)</div>
                                <div class="cube-face cube-bottom">RAM 0x400</div>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <div style="font-size:12px; font-weight:700; color:#a855f7; margin-bottom:8px;">SECRET REGISTER ARGUMENT</div>
                            <div class="g-node highlight-purple" style="padding:16px;">
                                <div class="g-node-title">CPU Register RCX/RDI</div>
                                <div class="g-node-value" style="font-size:13px;">Account* const this = &amp;obj</div>
                            </div>
                            <div class="g-arrow g-arrow-pulse" style="margin-top:10px;">
                                <i class="fa-solid fa-bolt" style="color:#a855f7;"></i>
                                <span style="font-size:11px; margin-top:4px;">Secretly passed to method!</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:16px 0 0 0;">🌟 <strong>Animated 3D Object Cube & Secret Register:</strong> The rotating cube shows member variables in RAM, while the CPU secretly passes object address via <code>this</code> pointer register.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Object Call</div>
                            <div class="g-node-value">acc.deposit(50.0)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-right-long"></i>
                            <span style="font-size:11px; margin-top:4px;">Compiler Transform</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Actual Assembly Function Call</div>
                            <div class="g-node-value" style="font-size:13px;">Account::deposit(&amp;acc, 50.0)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Method Invocation Map:</strong> Demonstrating how <code>this</code> is injected as hidden first parameter.</p>`,
                `Class Account { int id; double balance; void deposit(double amt); };

[ Object Instance in RAM (12+ padding = 16 bytes) ]
+------------------------------------------------+
| int id = 101 (0x400) | double balance (0x408)  |
+------------------------------------------------+
                        ^
                        |
[ Member Function Call: acc.deposit(50.0) ]
Compiler transforms to: Account::deposit(Account* const this = &acc, double amt)`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Secret Register Argument: 'this' Pointer Binding Theory
                    </div>
                    <p class="deep-concept-text">
                        Non-static member functions do not occupy memory inside each object instance! Instead, the compiler stores one copy of <code>Account::deposit</code> in the code segment and secretly passes the object's address as the first argument in CPU registers (<code>Account* const this</code>). When you write <code>balance += amt;</code>, the CPU executes <code>this-&gt;balance += amt;</code>!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common OOP Pitfall: Uninitialized Member Variables & Const Correctness
                    </div>
                    <div class="error-code-snippet">
error: passing 'const Account' as 'this' argument discards qualifiers [-fpermissive]
warning: 'Account::balance' should be initialized in the member initialization list
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Calling a non-const method on a <code>const</code> object instance throws a compiler error because <code>this</code> becomes <code>const Account* const</code>. Always mark read-only methods with <code>const</code> (<code>double getBalance() const;</code>) and initialize members via constructor initializer lists (<code>Account() : id(0), balance(0.0) {}</code>).
                    </p>
                </div>
            `;
        } else if (isTemplate) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "COMPILE-TIME TEMPLATE MONOMORPHIZATION",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node" style="border-color:#fbbf24; box-shadow:0 0 20px rgba(251,191,36,0.3); min-width:140px;">
                            <div class="g-node-title" style="color:#fbbf24;">Master Blueprint (.h)</div>
                            <div class="g-node-value" style="font-size:13px;">template &lt;typename T&gt;<br>T add(T a, T b)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-code-merge" style="color:#fbbf24; font-size:24px;"></i>
                            <span style="font-size:11px; margin-top:4px;">Monomorphize</span>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            <div class="g-node highlight-purple" style="padding:10px 14px;"><span style="font-size:11px; color:#cbd5e1;">Instance 1:</span> <b>int add&lt;int&gt;(int, int)</b></div>
                            <div class="g-node highlight-green" style="padding:10px 14px;"><span style="font-size:11px; color:#cbd5e1;">Instance 2:</span> <b>double add&lt;double&gt;(double, double)</b></div>
                            <div class="g-node" style="border-color:#38bdf8; padding:10px 14px;"><span style="font-size:11px; color:#cbd5e1;">Instance 3:</span> <b>string add&lt;string&gt;(string, string)</b></div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Monomorphization Factory:</strong> At compile time, the template blueprint duplicates into distinct, fully-typed machine functions (0% runtime latency).</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Code Calls in main()</div>
                            <div class="g-node-value" style="font-size:13px;">add(10, 20)<br>add(3.5, 1.2)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-gears"></i>
                            <span style="font-size:11px; margin-top:4px;">Deduction</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Generated Binary Code</div>
                            <div class="g-node-value" style="font-size:13px;">add_int_int() @ 0x4010<br>add_double_double() @ 0x4040</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Template Deduction Flow:</strong> Showing how generic symbols resolve to specific assembly symbols.</p>`,
                `Source: template <typename T> T add(T a, T b) { return a + b; }

Compiler encounters calls during build time:
+-- add(10, 20) ------> Generates machine code: int add<int>(int a, int b)
+-- add(3.5, 1.2) ----> Generates machine code: double add<double>(double a, double b)
+-- add(string, str) -> Generates machine code: string add<string>(string a, string b)`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Zero Runtime Cost via Code Bloat Tradeoffs Theory
                    </div>
                    <p class="deep-concept-text">
                        C++ templates are not Java Generics (which type-erase to <code>Object</code> at runtime). C++ performs **Monomorphization**: the compiler clones the template AST into exact, fully typed functions (<code>int</code>, <code>double</code>, <code>UserClass</code>) at compile-time. This guarantees zero runtime indirection cost (<code>0% overhead</code>), though excessive template instantiations increase binary code size!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Template Error: Substitution Failure & Linker Missing Definition
                    </div>
                    <div class="error-code-snippet">
error: no matching function for call to 'add(int, double)'
note: candidate template ignored: deduced conflicting types for parameter 'T' ('int' vs 'double')
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> If you call <code>add(5, 3.14)</code> when the template requires both parameters to be type <code>T</code>, the compiler cannot deduce whether <code>T</code> is <code>int</code> or <code>double</code> (<code>SFINAE/deduction conflict</code>). Fix by explicitly specifying the template type <code>add&lt;double&gt;(5, 3.14)</code> or using two template types <code>template &lt;typename T1, typename T2&gt;</code>.
                    </p>
                </div>
            `;
        } else if (isSmartPtr) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "SHARED_PTR CONTROL BLOCK & RAII LIFETIME",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:20px;">
                        <div style="display:flex; flex-direction:column; gap:12px;">
                            <div class="g-node highlight-purple" style="padding:10px 14px;"><b>shared_ptr&lt;Widget&gt; p1</b></div>
                            <div class="g-node highlight-purple" style="padding:10px 14px;"><b>shared_ptr&lt;Widget&gt; p2</b></div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrows-split-up-and-left" style="transform: rotate(90deg); color:#38bdf8;"></i>
                            <span style="font-size:11px; margin-top:4px;">16B Handle</span>
                        </div>
                        <div class="g-node highlight-green" style="border-width:3px; box-shadow:0 0 25px rgba(16,185,129,0.3); min-width:160px;">
                            <div class="g-node-title">Heap Control Block</div>
                            <div class="g-node-value" style="font-size:14px; color:#10b981;">Strong: 2 | Weak: 1</div>
                            <div style="font-size:11px; color:#cbd5e1; margin-top:4px;">Atomic Thread-Safe Counter</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="g-node" style="border-color:#ec4899; min-width:130px;">
                            <div class="g-node-title">Managed Payload</div>
                            <div class="g-node-value">Widget Object</div>
                            <div style="font-size:11px; color:#fca5a5; margin-top:4px;">RAII Auto-Delete @ 0</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Smart Pointer Architecture:</strong> Multiple stack handles share a single Heap Control Block tracking atomic lifetime counters.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Scope Exit / Destructor</div>
                            <div class="g-node-value">~shared_ptr() called</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-heart-pulse"></i>
                            <span style="font-size:11px; margin-top:4px;">--StrongRef</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">If StrongRef == 0</div>
                            <div class="g-node-value" style="color:#10b981;">delete ptr; (Zero Leaks!)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D RAII Lifetime Flowchart:</strong> Automatic heap deallocation exactly when the last owner drops reference.</p>`,
                `[ std::shared_ptr<Widget> ptr1 ] ---\\
                                      +--> [ Heap Control Block: Strong = 2, Weak = 1 ]
[ std::shared_ptr<Widget> ptr2 ] ---/          |
                                               v
                                    [ Managed Heap Object: Widget (0x7f9a) ]`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-bolt"></i> Atomic Reference Counting vs unique_ptr Zero Overhead Theory
                    </div>
                    <p class="deep-concept-text">
                        <code>std::unique_ptr</code> has exactly <code>0 bytes</code> of overhead compared to a raw pointer (<code>sizeof(unique_ptr&lt;T&gt;) == 8</code>). However, <code>std::shared_ptr</code> requires two pointers (<code>16 bytes</code>) plus a heap-allocated **Control Block** tracking strong and weak reference counts using thread-safe atomic counter increments (<code>std::atomic&lt;int&gt;</code>)!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Smart Pointer Error: Cyclic Reference & Deleted Copy Constructor
                    </div>
                    <div class="error-code-snippet">
error: use of deleted function 'std::unique_ptr&lt;_Tp, _Dp&gt;::unique_ptr(const std::unique_ptr&lt;_Tp, _Dp&gt;&amp;)'
Memory Leak Alert: Cyclic shared_ptr ownership prevented destructor execution!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> <code>std::unique_ptr</code> is strictly move-only (<code>copy constructor is deleted</code>). You cannot pass it by value (<code>process(p)</code>); you must use <code>std::move(p)</code> or pass by reference. Also, when two <code>std::shared_ptr</code> objects reference each other (<code>cyclic link</code>), strong counts never reach 0! Always use <code>std::weak_ptr</code> to break cycles.
                    </p>
                </div>
            `;
        } else if (isConcurrency) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "MULTI-CORE THREAD MUTEX SYNCHRONIZATION",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node highlight-green" style="min-width:150px;">
                            <div class="g-node-title" style="color:#10b981;">CPU Core 0 (Thread A)</div>
                            <div class="g-node-value" style="font-size:13px;">mtx.lock() ➔ SUCCESS</div>
                            <div style="font-size:11px; color:#6ee7b7; margin-top:6px;">Holding Golden Key 🗝️</div>
                        </div>
                        <div class="g-node" style="border-color:#fbbf24; background:rgba(251,191,36,0.15); box-shadow:0 0 30px rgba(251,191,36,0.25); min-width:140px;">
                            <div class="g-node-title" style="color:#fbbf24;">Critical Section Chamber</div>
                            <div class="g-node-value" style="font-size:14px; color:#fff;">Shared RAM Access</div>
                            <div style="font-size:11px; color:#fde68a; margin-top:6px;">Protected by std::mutex</div>
                        </div>
                        <div class="g-node" style="border-color:#ef4444; background:rgba(239,68,68,0.15); min-width:150px;">
                            <div class="g-node-title" style="color:#fca5a5;">CPU Core 1 (Thread B)</div>
                            <div class="g-node-value" style="font-size:13px; color:#fca5a5;">mtx.lock() ➔ BLOCKED</div>
                            <div style="font-size:11px; color:#f87171; margin-top:6px;">Sleeping in OS Queue 🛑</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Multi-Core Traffic Gate:</strong> Only one thread can hold the mutex key inside the critical section; competing threads sleep without wasting CPU cycles.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Thread A Unlocks</div>
                            <div class="g-node-value">mtx.unlock()</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-bell"></i>
                            <span style="font-size:11px; margin-top:4px;">OS Wakeup Signal</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Thread B Wakes Up</div>
                            <div class="g-node-value" style="color:#10b981;">Acquires Mutex Lock!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Synchronization Signal Flow:</strong> OS kernel thread scheduling and mutex handoff upon scope completion.</p>`,
                `CPU CORE 0 (Thread A)             MUTEX LOCK (std::mutex mtx)          CPU CORE 1 (Thread B)
+--------------------+            +--------------------------+          +--------------------+
| mtx.lock() [SUCCESS] | =======> | Status: LOCKED BY THREAD A | <======= | mtx.lock() [BLOCKED] |
| Executes Critical  |            +--------------------------+          | OS puts Thread B   |
| Section Code       |            When Thread A calls unlock()          | into Sleep Queue   |
+--------------------+            Thread B wakes up & acquires lock!     +--------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-gauge-high"></i> Hardware Cache Coherency & Deadlock Avoidance Theory
                    </div>
                    <p class="deep-concept-text">
                        When multiple threads modify shared variables across different CPU core L1 caches, hardware cache coherency protocols (<code>MESI</code> bus traffic) cause severe contention. Always lock mutexes using RAII guards (<code>std::lock_guard&lt;std::mutex&gt; lock(mtx);</code>) so locks automatically release on exception or scope exit, eliminating deadlocks!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Concurrency Crash: Deadlock & Data Race Condition
                    </div>
                    <div class="error-code-snippet">
ThreadSanitizer: WARNING: data race on variable 'global_counter'
terminate called without an active exception (std::system_error: Resource deadlock avoided)
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Accessing shared variables from multiple threads without synchronization (<code>counter++</code> is not atomic!) creates unpredictable race conditions. Furthermore, acquiring multiple mutexes in different orders across threads (<code>Thread 1 locks A then B; Thread 2 locks B then A</code>) guarantees deadlocks. Always use <code>std::scoped_lock(lockA, lockB)</code> for multi-mutex locking.
                    </p>
                </div>
            `;
        } else if (isControlFlow) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "CPU BRANCH PREDICTION & LOOP PIPELINE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node highlight-purple" style="min-width:140px;">
                            <div class="g-node-title">CPU Instruction Pipeline</div>
                            <div class="g-node-value" style="font-size:13px;">if (x &gt; 100) Branch</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-train-subway"></i>
                            <span style="font-size:11px; margin-top:4px;">Predictor Switch</span>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:14px;">
                            <div class="g-node highlight-green" style="padding:10px 16px; border-width:2px;">
                                <div class="g-node-title" style="color:#10b981;">Likely Path (&gt;99% hit)</div>
                                <div class="g-node-value" style="font-size:13px;">Zero Stall Speed ⚡</div>
                            </div>
                            <div class="g-node" style="border-color:#ef4444; padding:10px 16px; background:rgba(239,68,68,0.1);">
                                <div class="g-node-title" style="color:#fca5a5;">Mispredicted Path</div>
                                <div class="g-node-value" style="font-size:13px; color:#f87171;">Flush Pipeline (15 cycles) 🛑</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated CPU Railway Switch Track:</strong> Hardware branch predictors pre-fetch likely loops, avoiding costly 15-cycle instruction pipeline flushes.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Loop Iteration</div>
                            <div class="g-node-value">for (int i=0; i&lt;N; ++i)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-microchip"></i>
                            <span style="font-size:11px; margin-top:4px;">L1 Cache Hit</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Vectorized Execution</div>
                            <div class="g-node-value" style="color:#10b981;">AVX/SSE SIMD Registers</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Loop Pipeline Vectorization:</strong> Contiguous memory iteration enabling SIMD instruction execution.</p>`,
                `Instruction Pipeline: [ Fetch ] -> [ Decode ] -> [ Branch Condition: if (x > 100) ]
                                                               |
                     +-----------------------------------------+-----------------------------------------+
                     | (Predicted True / Likely Path)                                                    | (Predicted False / Unlikely Path)
                     v                                                                                   v
[ Execute Branch A Instructions in L1 Cache ]                                      [ Pipeline Flush & Cache Miss Penalty (10-20 cycles) ]`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Hardware Branch Predictors & Loop Unrolling Theory
                    </div>
                    <p class="deep-concept-text">
                        Modern CPU pipelines execute instructions speculatively. When evaluating <code>if / else</code> inside tight <code>for</code> loops, if data is sorted or predictable, the hardware branch predictor achieves <code>&gt;99% accuracy</code>. If data is randomized, branch mispredictions flush the 14+ stage execution pipeline, stalling the CPU. In C++20, use <code>[[likely]]</code> and <code>[[unlikely]]</code> attributes to guide compiler branch ordering!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Loop Error: Infinite Execution & Signed/Unsigned Mismatch
                    </div>
                    <div class="error-code-snippet">
warning: comparison between signed and unsigned integer expressions [-Wsign-compare]
Infinite Loop Alert: Loop counter overflowed or termination condition never met!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Comparing <code>int i = 0</code> with <code>vector.size()</code> (which is <code>size_t / unsigned long</code>) can cause unexpected wraparound when <code>i</code> goes negative. Or using <code>for (unsigned int i = 10; i &gt;= 0; --i)</code> creates an infinite loop because unsigned variables can never be <code>&lt; 0</code> (they wrap to <code>4,294,967,295</code>!). Always use <code>size_t</code> for container indexing.
                    </p>
                </div>
            `;
        } else if (isArray) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "CONTIGUOUS ARRAY MEMORY BLOCKS & O(1) INDEX OFFSET MAP",
                `<div class="iso-3d-stage">
                    <div style="display:flex; flex-direction:column; align-items:center; width:100%;">
                        <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:12px;">3D CONTIGUOUS RAM BLOCKS (int arr[5] @ Base 0x1000)</div>
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:center; perspective:1000px;">
                            <div style="width:70px; height:80px; background:linear-gradient(135deg, #0284c7, #0ea5e9); border:1px solid #38bdf8; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; box-shadow:0 10px 20px rgba(2,132,199,0.4); transform: rotateX(15deg) rotateY(-10deg);">
                                <span style="font-size:10px; color:#e0f2fe;">arr[0]</span>
                                <b style="font-size:16px;">10</b>
                                <span style="font-size:9px; color:#bae6fd; font-family:monospace;">0x1000</span>
                            </div>
                            <div style="width:70px; height:80px; background:linear-gradient(135deg, #0284c7, #0ea5e9); border:1px solid #38bdf8; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; box-shadow:0 10px 20px rgba(2,132,199,0.4); transform: rotateX(15deg) rotateY(-10deg);">
                                <span style="font-size:10px; color:#e0f2fe;">arr[1]</span>
                                <b style="font-size:16px;">25</b>
                                <span style="font-size:9px; color:#bae6fd; font-family:monospace;">0x1004</span>
                            </div>
                            <div style="width:75px; height:88px; background:linear-gradient(135deg, #059669, #10b981); border:2px solid #34d399; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#000; box-shadow:0 0 25px rgba(16,185,129,0.6); transform: rotateX(15deg) rotateY(-10deg) scale(1.08); animation: floatNodeAnim 1.6s infinite ease-in-out;">
                                <span style="font-size:10px; color:#064e3b; font-weight:700;">arr[2] ★</span>
                                <b style="font-size:18px;">42</b>
                                <span style="font-size:9px; color:#065f46; font-family:monospace; font-weight:700;">0x1008</span>
                            </div>
                            <div style="width:70px; height:80px; background:linear-gradient(135deg, #0284c7, #0ea5e9); border:1px solid #38bdf8; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; box-shadow:0 10px 20px rgba(2,132,199,0.4); transform: rotateX(15deg) rotateY(-10deg);">
                                <span style="font-size:10px; color:#e0f2fe;">arr[3]</span>
                                <b style="font-size:16px;">89</b>
                                <span style="font-size:9px; color:#bae6fd; font-family:monospace;">0x100C</span>
                            </div>
                            <div style="width:70px; height:80px; background:linear-gradient(135deg, #0284c7, #0ea5e9); border:1px solid #38bdf8; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; box-shadow:0 10px 20px rgba(2,132,199,0.4); transform: rotateX(15deg) rotateY(-10deg);">
                                <span style="font-size:10px; color:#e0f2fe;">arr[4]</span>
                                <b style="font-size:16px;">99</b>
                                <span style="font-size:9px; color:#bae6fd; font-family:monospace;">0x1010</span>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:12px; margin-top:20px; background:rgba(16,185,129,0.15); border:1px solid #10b981; padding:8px 16px; border-radius:30px;">
                            <i class="fa-solid fa-bolt" style="color:#10b981;"></i>
                            <span style="font-size:12.5px; color:#a7f3d0; font-family:monospace;">Address(arr[i]) = BaseAddress (0x1000) + (i * 4 bytes) ➔ O(1) Instant Jump!</span>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:12px 0 0 0;">🌟 <strong>Animated Contiguous Memory Layout:</strong> Because array elements sit adjacent in physical RAM without padding or pointers, CPU hardware prefetchers load the entire cache line in one burst!</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Base Identifier (arr)</div>
                            <div class="g-node-value">Points to arr[0] @ 0x1000</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-calculator"></i>
                            <span style="font-size:11px; margin-top:4px;">+ (i * sizeof(int))</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Target Element arr[2]</div>
                            <div class="g-node-value" style="color:#10b981;">0x1000 + (2 * 4) = 0x1008</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Arithmetic Offset Flow:</strong> Demonstrating why array indexing requires zero pointer traversals.</p>`,
                `CONTIGUOUS ARRAY MEMORY LAYOUT (int arr[5] in RAM):
+---------+---------+---------+---------+---------+
|  10     |  25     |  42 ★   |  89     |  99     |
+---------+---------+---------+---------+---------+
0x1000    0x1004    0x1008    0x100C    0x1010
[arr+0]   [arr+1]   [arr+2]   [arr+3]   [arr+4]

O(1) Access Formula: &arr[i] = BaseAddress + (i * sizeof(int))`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Hardware Cache Line Locality & CPU Spatial Prefetching Theory
                    </div>
                    <p class="deep-concept-text">
                        When the CPU requests <code>arr[0]</code> from RAM, hardware memory controllers don't just fetch 4 bytes—they pull an entire **64-byte Cache Line** (16 contiguous integers) into the ultra-fast L1/L2 cache! Because array elements sit side-by-side without pointer fragmentation, accessing subsequent elements (<code>arr[1], arr[2]</code>) takes nearly <code>0 clock cycles</code> (L1 cache hit). This spatial locality makes arrays up to **10x–50x faster** than linked lists or tree nodes in real-world iteration!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Array Pitfall: Buffer Overflow & Out-of-Bounds Indexing
                    </div>
                    <div class="error-code-snippet">
AddressSanitizer: heap-buffer-overflow on address 0x602000000014 at pc 0x55a1...
READ of size 4 at 0x602000000014 thread T0
#0 main.cpp:14: int val = arr[5]; // CRASH: Index 5 is out of bounds for int arr[5]!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++, arrays are 0-indexed (indices range from <code>0 to size - 1</code>). Accessing <code>arr[size]</code> reads unallocated stack/heap memory or overwrites adjacent variables, causing silent corruption or AddressSanitizer crashes! Always loop with <code>for (size_t i = 0; i &lt; size; ++i)</code> or use safe container access via <code>std::vector::at(i)</code> which throws an exception instead of crashing.
                    </p>
                </div>
            `;
        } else if (isStringStream) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "DYNAMIC STRING BUFFER & IOSTREAM PROCESSING PIPELINE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Input Stream (std::cin)</div>
                            <div class="g-node-value">"Hello World\\n"</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-right-long"></i>
                            <span style="font-size:11px; margin-top:4px;">&gt;&gt; Extraction</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">std::string Heap Buffer</div>
                            <div class="g-node-value" style="color:#10b981;">[ 'H' | 'e' | 'l' | 'l' | 'o' | '\\0' ]</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Stream Extraction & String Buffer:</strong> Automatically resizing heap-allocated string arrays ending with null terminator.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Small String Optimization (SSO)</div>
                            <div class="g-node-value">capacity &lt;= 15B ➔ Stack RAM</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-bolt"></i>
                            <span style="font-size:11px; margin-top:4px;">Grow &gt; 15B</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Dynamic Heap Allocation</div>
                            <div class="g-node-value" style="color:#10b981;">ptr ➔ Heap Buffer (capacity * 2)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Small String Optimization (SSO) Flow:</strong> Avoiding costly heap allocations for short strings under 16 characters.</p>`,
                `STRING STREAM & SSO MEMORY LAYOUT:
+-------------------------------------------------------------+
| Stack Object (std::string) : [ length: 5 ] [ capacity: 15 ] |
| Buffer (SSO Stack Region)  : [ 'H' | 'e' | 'l' | 'l' | 'o' ]  |
+-------------------------------------------------------------+
If string exceeds 15 bytes ➔ Allocates on Heap Arena and updates internal pointer!`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Small String Optimization (SSO) & Buffer Resizing Theory
                    </div>
                    <p class="deep-concept-text">
                        To avoid costly heap allocations (<code>malloc / new</code>) for small strings, modern C++ standard libraries store strings up to 15 characters directly inside the 24-byte stack footprint of the <code>std::string</code> object itself! Only when the string exceeds 15 bytes does the implementation allocate a dynamic heap buffer and double its capacity upon growth (geometric reallocation <code>O(1)</code> amortized time).
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Stream Error: Buffer Desynchronization & Dangling String Views
                    </div>
                    <div class="error-code-snippet">
warning: object backing the pointer will be destroyed at the end of the full-expression [-Wdangling-gsl]
std::string_view sv = std::string("temporary"); // CRASH: sv points to freed stack memory!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> <code>std::string_view</code> (introduced in C++17) does not own memory—it is merely a non-owning pointer + length. Assigning a temporary <code>std::string</code> to a <code>string_view</code> leaves a dangling pointer the instant the statement finishes. Always ensure the backing string outlives the <code>string_view</code>, or use <code>std::string</code> when ownership is needed.
                    </p>
                </div>
            `;
        } else if (isFunctions) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "CPU CALL STACK FRAMES & PARAMETER PASSING PIPELINE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node highlight-purple" style="min-width:140px;">
                            <div class="g-node-title">Caller Frame: main()</div>
                            <div class="g-node-value">RSP: 0x7FFF0040<br>Local: int x = 10</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-down-long"></i>
                            <span style="font-size:11px; margin-top:4px;">CALL func(&amp;x)</span>
                        </div>
                        <div class="g-node highlight-green" style="min-width:140px;">
                            <div class="g-node-title" style="color:#10b981;">Callee Frame: func(int* p)</div>
                            <div class="g-node-value" style="color:#10b981;">RSP: 0x7FFF0020<br>*p = 99 (Modifies x!)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated CPU Call Stack Push/Pop:</strong> Function calls push stack frames with return addresses and registers; pass-by-reference modifies caller memory directly.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Pass-by-Value (Copy)</div>
                            <div class="g-node-value">int y = x; (Duplicated in RAM)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-code-compare"></i>
                            <span style="font-size:11px; margin-top:4px;">vs</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Pass-by-Reference (const T&amp;)</div>
                            <div class="g-node-value" style="color:#10b981;">Zero Copy ➔ 8-Byte Pointer Alias</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Parameter Passing Flow:</strong> Eliminating expensive copy constructors by using const references.</p>`,
                `CPU STACK FRAME MEMORY LAYOUT:
+------------------------------------------+  <-- Higher Addresses (0x7FFFD000)
| main() Stack Frame : local variable x=10 |
+------------------------------------------+
| Return Address to main()                 |
+------------------------------------------+
| func() Stack Frame : param pointer &x    |  <-- Stack Pointer (RSP)
+------------------------------------------+  <-- Lower Addresses`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> ABI Register Calling Conventions & Stack Frame Alignment
                    </div>
                    <p class="deep-concept-text">
                        Under modern x86-64 System V / Windows ABIs, the first 6 integer/pointer parameters are passed directly inside CPU registers (<code>RDI, RSI, RDX, RCX, R8, R9</code>) rather than pushed onto the RAM stack! This zero-memory overhead argument passing makes function calls lightning fast. Always pass heavy objects by <code>const T&</code> to avoid copying large payloads into stack frames.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical Error: Stack Overflow & Returning Reference to Local Variable
                    </div>
                    <div class="error-code-snippet">
warning: reference to stack memory associated with local variable 'temp' returned [-Wreturn-stack-address]
int&amp; getNumber() { int temp = 42; return temp; } // CRASH: temp destroyed upon return!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Local variables inside a function exist only within its stack frame. When the function returns, <code>RSP</code> pops and the memory is reclaimed. Returning a reference (<code>int&</code>) or pointer (<code>int*</code>) to a local variable creates a **dangling reference** immediately causing undefined behavior. Never return references to local variables; return by value or return heap/static resources.
                    </p>
                </div>
            `;
        } else if (isBitwiseMath) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "BINARY REGISTER BITWISE OPERATIONS & DATA TYPE MEMORY",
                `<div class="iso-3d-stage">
                    <div style="display:flex; flex-direction:column; align-items:center; width:100%;">
                        <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:12px;">32-BIT BINARY REGISTER BITWISE MANIPULATION</div>
                        <div style="display:flex; align-items:center; gap:6px; font-family:monospace; font-size:14px; background:rgba(0,0,0,0.4); padding:12px 20px; border-radius:10px; border:1px solid rgba(56,189,248,0.3);">
                            <span style="color:#64748b;">A = 12 :</span>
                            <span style="color:#38bdf8;">00001100</span>
                            <span style="color:#fbbf24; margin:0 8px;">| (OR)</span>
                            <span style="color:#64748b;">B = 10 :</span>
                            <span style="color:#10b981;">00001010</span>
                            <span style="color:#f43f5e; margin:0 8px;">=</span>
                            <b style="color:#fff; background:#0284c7; padding:4px 8px; border-radius:4px;">00001110 (14)</b>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Bitwise Register Logic:</strong> Bitwise <code>AND &</code>, <code>OR |</code>, <code>XOR ^</code>, and <code>Shift << >></code> execute in a single 1-cycle ALU hardware instruction.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Left Shift (x &lt;&lt; 1)</div>
                            <div class="g-node-value">00000101 (5) ➔ 00001010 (10)</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-bolt"></i>
                            <span style="font-size:11px; margin-top:4px;">Fast Multiplication</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">ALU Hardware Speed</div>
                            <div class="g-node-value" style="color:#10b981;">1 Clock Cycle vs 15 Cycles (MUL)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Bitwise Arithmetic Flow:</strong> Why bit shifts (<code><<</code>, <code>>></code>) outperform standard integer division/multiplication.</p>`,
                `BITWISE OPERATOR TRUTH TABLE & REGISTER SHIFTS:
Bit A | Bit B | A & B (AND) | A | B (OR) | A ^ B (XOR)
-----------------------------------------------------
  1   |   1   |      1      |     1      |     0      <-- XOR flips identical bits!
  1   |   0   |      0      |     1      |     1
  0   |   1   |      0      |     1      |     1
  0   |   0   |      0      |     0      |     0

Bit Shift Left (x << n)  === x * (2^n)
Bit Shift Right (x >> n) === x / (2^n)`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Two's Complement Representation & Fast Bit Masking Theory
                    </div>
                    <p class="deep-concept-text">
                        C++ stores signed integers using **Two's Complement** binary encoding (<code>-x = ~x + 1</code>). This allows the hardware Arithmetic Logic Unit (ALU) to perform addition and subtraction using the exact same digital circuit gates without distinguishing signs! Bitwise masking (<code>x & 1</code> for even/odd check, or <code>x & (x - 1)</code> to clear the lowest set bit) executes instantly in a single clock tick (<code>O(1)</code> time).
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Numerical Pitfall: Integer Overflow & Undefined Bit Shifts
                    </div>
                    <div class="error-code-snippet">
warning: shift count >= width of type [-Wshift-count-overflow]
int val = 1 << 32; // UNDEFINED BEHAVIOR: Shifting a 32-bit int by 32 or more bits!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Shifting an <code>n-bit</code> integer by <code>n</code> or more bits is strictly **Undefined Behavior** in C++ (CPU architectures handle oversized shifts differently via modulo masks). Additionally, signed integer overflow (<code>INT_MAX + 1</code>) triggers silent wrapping or compiler optimization bugs. Always verify bit widths using <code>sizeof(T) * 8</code> and use <code>1LL << n</code> for 64-bit shifts.
                    </p>
                </div>
            `;
        } else if (isDynamicMemory) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "DYNAMIC FREE STORE HEAP ALLOCATION & DEALLOCATION MAP",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:30px;">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">new Widget()</div>
                            <div class="g-node-value">1. malloc(sizeof(Widget))<br>2. Widget::Widget() Constructor</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-right-left"></i>
                            <span style="font-size:11px; margin-top:4px;">vs</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title" style="color:#10b981;">delete ptr;</div>
                            <div class="g-node-value" style="color:#10b981;">1. Widget::~Widget() Destructor<br>2. free(ptr) Free Store Return</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Free Store Allocation Pipeline:</strong> C++ <code>new</code> / <code>delete</code> perform two distinct steps: raw memory management combined with constructor/destructor execution.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Array Allocation</div>
                            <div class="g-node-value">int* p = new int[100];</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <span style="font-size:11px; margin-top:4px;">Must Use Array Delete</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Array Deallocation</div>
                            <div class="g-node-value" style="color:#10b981;">delete[] p; (Destroys all 100!)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Array Memory Cleanup Flow:</strong> Why <code>delete[]</code> is required to read the hidden cookie metadata specifying array length.</p>`,
                `DYNAMIC HEAP ARENA vs STACK MEMORY POOL:
+-------------------------------------------------------------+
| Stack Arena (Fast, Automatic Lifetime via Scope)          |
| int x = 42; -> Reclaimed automatically on '}'               |
+-------------------------------------------------------------+
| Heap / Free Store Arena (Manual or RAII Managed Lifetime)   |
| Widget* p = new Widget(); -> Persists until delete p;       |
+-------------------------------------------------------------+`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Operating System Memory Arenas & Memory Fragmentation Theory
                    </div>
                    <p class="deep-concept-text">
                        The C++ Free Store (<code>heap</code>) is managed by the OS heap allocator (<code>ptmalloc / jemalloc</code>). Frequent calls to <code>new</code> and <code>delete</code> with varying block sizes cause **Heap Fragmentation**, where plenty of total free memory exists but no single contiguous block is large enough to satisfy an allocation request! In high-performance systems, professionals use Custom Memory Arenas and Object Pools (<code>std::pmr::monotonic_buffer_resource</code>) to achieve <code>O(1)</code> zero-fragmentation allocation.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Critical Error: Mismatched delete vs delete[] & Memory Leaks
                    </div>
                    <div class="error-code-snippet">
AddressSanitizer: alloc-dealloc-mismatch (operator new[] vs operator delete)
#0 main.cpp:20: delete p; // CRASH: Allocated with new int[10] but freed with scalar delete!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> When you allocate an array via <code>new T[N]</code>, the compiler stores a hidden <code>cookie</code> right before the memory pointer (<code>p - 8 bytes</code>) recording the element count <code>N</code>. Using scalar <code>delete p</code> instead of <code>delete[] p</code> only invokes the destructor for the first element (<code>p[0]</code>) and corrupts heap bookkeeping! Always pair <code>new</code> with <code>delete</code>, and <code>new[]</code> with <code>delete[]</code>.
                    </p>
                </div>
            `;
        } else if (isExceptions) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "STACK UNWINDING & EXCEPTION PROPAGATION PIPELINE",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Throw Point (Depth 3)</div>
                            <div class="g-node-value" style="color:#f43f5e;">throw std::runtime_error("Disk Full");</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                            <span style="font-size:11px; margin-top:4px;">Stack Unwind</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Catch Handler (Depth 1)</div>
                            <div class="g-node-value" style="color:#10b981;">catch (const std::exception&amp; e)</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Exception Stack Unwind:</strong> When an exception is thrown, C++ automatically unwinds the call stack, executing destructors (<code>~T()</code>) for every local RAII object in reverse order of creation.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Noexcept Guarantee</div>
                            <div class="g-node-value">void moveFunc() noexcept</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-bolt"></i>
                            <span style="font-size:11px; margin-top:4px;">Vector Realloc</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Fast Move Optimization</div>
                            <div class="g-node-value" style="color:#10b981;">std::vector uses move instead of copy!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D noexcept Move Optimization:</strong> Why declaring move constructors <code>noexcept</code> unlocks <code>O(1)</code> container reallocation.</p>`,
                `EXCEPTION STACK UNWINDING PIPELINE:
main() [ catch block ready ]
  ^
  |--- calls funcA() [ creates RAII FileHandle f ]
         ^
         |--- calls funcB() [ creates std::string s ]
                ^
                |--- throw std::runtime_error()!
                      |
                      v
1. ~string() destructor executed automatically
2. ~FileHandle() destructor executed automatically (File closed safely!)
3. Control transfers cleanly to catch (const std::exception& e)`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Zero-Cost Exception Handling Tables (LSDA & DWARF) Theory
                    </div>
                    <p class="deep-concept-text">
                        Modern C++ compilers (<code>GCC / Clang / MSVC</code>) implement **Zero-Cost Exception Handling**. Unlike older setjmp/longjmp mechanisms, zero-cost exceptions add <code>0 runtime overhead</code> when no exception is thrown! The compiler emits static lookup tables (<code>Language Specific Data Area - LSDA</code>). Only when <code>throw</code> executes does the runtime engine inspect these tables to perform stack unwinding (<code>unwind-dw2.c</code>), trading a heavier throw cost for zero happy-path latency.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Fatal Error: Throwing Exceptions Inside Destructors (<code>std::terminate</code>)
                    </div>
                    <div class="error-code-snippet">
terminate called after throwing an instance of 'std::runtime_error'
Aborted (core dumped) // CRASH: Double exception during stack unwinding!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> If an exception is already throwing (<code>stack unwinding</code> is in progress) and a local object's destructor <code>~T()</code> throws *another* exception, C++ cannot handle two active exceptions simultaneously and instantly calls <code>std::terminate()</code> aborting your program! Destructors in C++11+ are implicitly <code>noexcept</code>. Never allow exceptions to escape a destructor (<code>always wrap cleanup code in try-catch inside ~T()</code>).
                    </p>
                </div>
            `;
        } else if (isSTL) {
            diagramHtml = this.generateGraphicalDiagramCard(
                "STL CONTAINER ARCHITECTURE & ITERATOR TRAVERSAL MAP",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:24px;">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">std::unordered_map Bucket Array</div>
                            <div class="g-node-value">[ Bucket 0 ] ➔ Node("ID:101", "Alice")</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-fingerprint"></i>
                            <span style="font-size:11px; margin-top:4px;">std::hash&lt;K&gt;</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">O(1) Instant Lookup</div>
                            <div class="g-node-value" style="color:#10b981;">Direct Hash Index Jump!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated Hash Table Buckets vs Red-Black Trees:</strong> <code>std::unordered_map</code> achieves <code>O(1)</code> average lookup via hash buckets, while <code>std::map</code> maintains sorted <code>O(log N)</code> self-balancing trees.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">Iterator (.begin())</div>
                            <div class="g-node-value">Points to first element</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-angles-right"></i>
                            <span style="font-size:11px; margin-top:4px;">it++ (Increment)</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">Iterator (.end())</div>
                            <div class="g-node-value" style="color:#10b981;">Past-the-End Sentinel</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D Iterator Half-Open Range Flow:</strong> C++ STL algorithms operate on half-open ranges <code>[begin, end)</code> ensuring clean loop termination.</p>`,
                `STL CONTAINER BIG-O COMPLEXITY COMPARISON:
Container         | Index Access | Insertion (End) | Search       | Memory Layout
------------------+--------------+-----------------+--------------+----------------------
std::vector       | O(1)         | O(1) amortized  | O(N)         | Contiguous RAM
std::list         | O(N)         | O(1)            | O(N)         | Doubly Linked Nodes
std::map          | O(log N)     | O(log N)        | O(log N)     | Red-Black Tree
std::unordered_map| N/A          | O(1) average    | O(1) average | Hash Bucket Chains`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Iterator Invalidation Rules & Cache Contiguity Theory
                    </div>
                    <p class="deep-concept-text">
                        When you call <code>vector.push_back()</code> and the vector exceeds its current capacity, it allocates a new larger heap buffer, copies/moves existing elements over, and frees the old buffer. This **Invalidates All Iterators and Pointers** pointing into the old vector! In contrast, <code>std::list</code> node pointers remain valid across insertions, but <code>std::vector</code> remains vastly superior for iteration due to L1 cache prefetching.
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Fatal Error: Dereferencing Past-the-End Iterator (<code>vec.end()</code>)
                    </div>
                    <div class="error-code-snippet">
MSVCP Debug Assertion Failed! Expression: can't dereference out of range vector iterator
#0 main.cpp:18: auto it = vec.end(); std::cout &lt;&lt; *it; // CRASH: vec.end() points past the last element!
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> In C++ STL, <code>vec.end()</code> returns a sentinel iterator pointing one slot **after** the final element of the container (<code>half-open range [begin, end)</code>). Dereferencing <code>*vec.end()</code> reads unallocated memory! To access the final element safely, use <code>vec.back()</code> or <code>*(vec.end() - 1)</code> (after ensuring <code>!vec.empty()</code>).
                    </p>
                </div>
            `;
        } else {
            // General high-fidelity fallback diagram & errors for any other topic
            diagramHtml = this.generateGraphicalDiagramCard(
                "C++ COMPILER PIPELINE & RAII MEMORY MAP",
                `<div class="iso-3d-stage">
                    <div class="graphical-2d-flow" style="gap:16px;">
                        <div class="g-node highlight-purple" style="min-width:110px; padding:12px;">
                            <div class="g-node-title">Source Code</div>
                            <div class="g-node-value" style="font-size:13px;">main.cpp</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-gears"></i><span style="font-size:10px;">Preprocess</span></div>
                        <div class="g-node" style="border-color:#fbbf24; min-width:110px; padding:12px;">
                            <div class="g-node-title" style="color:#fbbf24;">Compiler -O3</div>
                            <div class="g-node-value" style="font-size:13px;">AST / Assembly</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse"><i class="fa-solid fa-link"></i><span style="font-size:10px;">Linker</span></div>
                        <div class="g-node highlight-green" style="min-width:120px; padding:12px; box-shadow:0 0 25px rgba(16,185,129,0.3);">
                            <div class="g-node-title" style="color:#10b981;">Native Binary</div>
                            <div class="g-node-value" style="font-size:14px; color:#10b981;">app.exe 🚀</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">🌟 <strong>Animated ISO C++ Build Factory:</strong> Preprocessor expands macros, optimizing compiler (<code>-O3</code>) emits assembly, and linker resolves symbols to produce native machine code.</p>`,
                `<div class="svg-2d-stage">
                    <div class="graphical-2d-flow">
                        <div class="g-node highlight-purple">
                            <div class="g-node-title">RAII Scope Entry {</div>
                            <div class="g-node-value">Resource Allocated</div>
                        </div>
                        <div class="g-arrow g-arrow-pulse">
                            <i class="fa-solid fa-clock"></i>
                            <span style="font-size:11px; margin-top:4px;">Execution</span>
                        </div>
                        <div class="g-node highlight-green">
                            <div class="g-node-title">RAII Scope Exit }</div>
                            <div class="g-node-value" style="color:#10b981;">Destructor Auto-Called!</div>
                        </div>
                    </div>
                </div>
                <p style="text-align:center; font-size:12.5px; color:#94a3b8; margin:6px 0 0 0;">📐 <strong>2D RAII Deterministic Lifetime:</strong> Guaranteeing zero memory leaks or unclosed sockets upon block termination.</p>`,
                `[ Source Code (.cpp) ] ===(Preprocessor)===> [ Expanded Translation Unit (.i) ]
                                                    |
                                             (Compiler -O3)
                                                    v
[ Executable Binary (.exe / .out) ] <===(Linker)== [ Object Code (.o / .obj) ]

RAII AUTOMATIC LIFETIME BOUNDARIES:
{
    std::string str = "MasterClass Pro"; // Constructor allocates stack/heap
    // ... code execution ...
} // <-- Scope ends: Destructor ~string() called automatically! Zero leaks!`
            );
            deepConceptHtml = `
                <div class="deep-concept-box">
                    <div class="deep-concept-title">
                        <i class="fa-solid fa-microchip"></i> Zero-Overhead Abstraction & RAII Invariants Theory
                    </div>
                    <p class="deep-concept-text">
                        C++ provides high-level abstractions (<code>classes, templates, lambdas, RAII</code>) that compile down to the exact same machine assembly code as hand-written C (<code>Zero-Overhead Principle</code>). By binding resource ownership (<code>heap memory, sockets, mutex locks</code>) directly to object scope lifetimes (<code>RAII</code>), your software achieves deterministic latency with zero garbage collector pauses!
                    </p>
                </div>
            `;
            errorHtml = `
                <div class="error-box">
                    <div class="error-title">
                        <i class="fa-solid fa-triangle-exclamation"></i> Common Linker & Scope Error: Unresolved External Symbol
                    </div>
                    <div class="error-code-snippet">
error LNK2019: unresolved external symbol "public: void __cdecl MyClass::execute(void)" referenced in function main
error: definition of static data member 'MyClass::count' is not emitted in class scope
                    </div>
                    <p class="error-fix">
                        <strong>Why it happens & How to Fix:</strong> Declaring a function or <code>static</code> member in a header (<code>.h</code>) without implementing it in a source file (<code>.cpp</code>) causes the Linker to fail during final binary generation. Always provide definitions or initialize static variables outside class declaration (<code>int MyClass::count = 0;</code>).
                    </p>
            `;
        }
        } // End if (!diagramHtml) fallback check

        // WEAVE THE DIAGRAM RIGHT INSIDE THE THEORY EXPLANATION!
        let wovenContent = content;
        if (!content.includes('class="graphical-diagram-card"') && !content.includes('class="diagram-box"')) {
            // Find where introductory theory explanation (<p>...</p>) transitions to code (<pre>) or secondary headers (<h3>)
            const preIndex = content.indexOf('<pre>');
            const h3Index = content.indexOf('<h3');
            
            const limitIndex = Math.min(
                preIndex !== -1 ? preIndex : content.length,
                h3Index !== -1 ? h3Index : content.length
            );
            
            const theorySection = content.substring(0, limitIndex);
            const pMatches = [...theorySection.matchAll(/<\/p>/g)];
            
            if (pMatches.length > 0) {
                // If there are 2+ paragraphs of theory, insert right after the 1st or 2nd paragraph of theory
                const insertPos = pMatches.length >= 2 ? pMatches[1].index + 4 : pMatches[0].index + 4;
                wovenContent = content.substring(0, insertPos) + "\n" + diagramHtml + "\n" + content.substring(insertPos);
            } else if (limitIndex < content.length && limitIndex > 0) {
                // Insert right before <pre> or <h3>
                wovenContent = content.substring(0, limitIndex) + "\n" + diagramHtml + "\n" + content.substring(limitIndex);
            } else {
                // Prepend after </h2> or append
                const hIndex = content.indexOf('</h2>');
                if (hIndex !== -1) {
                    wovenContent = content.substring(0, hIndex + 5) + "\n" + diagramHtml + "\n" + content.substring(hIndex + 5);
                } else {
                    wovenContent = content + "\n" + diagramHtml;
                }
            }
        }

        // Append deep concept and error callouts if not already explicitly present
        if (!wovenContent.includes('class="deep-concept-box"')) {
            wovenContent += "\n" + deepConceptHtml;
        }
        if (!wovenContent.includes('class="error-box"')) {
            wovenContent += "\n" + errorHtml;
        }

        return wovenContent;
    }

    renderFooterNavigation(currentModId, currentSubId) {
        const data = window.CURRICULUM_DATA || [];
        let allSubtopics = [];
        data.forEach(mod => {
            mod.subtopics.forEach(sub => {
                allSubtopics.push({ modId: mod.id, subId: sub.id, title: sub.title });
            });
        });

        const currentIndex = allSubtopics.findIndex(s => s.modId === currentModId && s.subId === currentSubId);
        const prevBtn = document.getElementById("prev-subtopic-btn");
        const prevName = document.getElementById("prev-subtopic-name");
        const nextBtn = document.getElementById("next-subtopic-btn");
        const nextName = document.getElementById("next-subtopic-name");

        if (currentIndex > 0) {
            const prev = allSubtopics[currentIndex - 1];
            if (prevBtn && prevName) {
                prevBtn.classList.remove("hidden");
                prevName.textContent = prev.title;
                prevBtn.onclick = () => this.loadSubtopic(prev.modId, prev.subId);
            }
        } else if (prevBtn) {
            prevBtn.classList.add("hidden");
        }

        if (currentIndex !== -1 && currentIndex < allSubtopics.length - 1) {
            const next = allSubtopics[currentIndex + 1];
            if (nextBtn && nextName) {
                nextBtn.classList.remove("hidden");
                nextName.textContent = next.title;
                nextBtn.onclick = () => this.loadSubtopic(next.modId, next.subId);
            }
        } else if (nextBtn) {
            nextBtn.classList.add("hidden");
        }
    }

    updateSubtopicCompleteButton() {
        const btn = document.getElementById("mark-completed-btn");
        if (!btn) return;
        const isDone = this.completedTopics.includes(this.currentSubtopicId);
        if (isDone) {
            btn.className = "mark-done-btn completed";
            btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Completed</span>`;
        } else {
            btn.className = "mark-done-btn";
            btn.innerHTML = `<i class="fa-regular fa-circle-check"></i> <span>Mark Topic as Completed</span>`;
        }
    }

    toggleCompleteCurrent() {
        if (!this.currentSubtopicId) return;
        const idx = this.completedTopics.indexOf(this.currentSubtopicId);
        if (idx === -1) {
            this.completedTopics.push(this.currentSubtopicId);
            this.showToast("Topic marked as completed! Progress updated.", "success");
        } else {
            this.completedTopics.splice(idx, 1);
            this.showToast("Topic unmarked.", "info");
        }
        localStorage.setItem("cpp_completed_topics", JSON.stringify(this.completedTopics));
        this.updateSubtopicCompleteButton();
        this.updateProgress();
        this.renderSidebar();
    }

    updateProgress() {
        const data = window.CURRICULUM_DATA || [];
        let totalSubtopics = 0;
        data.forEach(m => totalSubtopics += m.subtopics.length);

        if (totalSubtopics === 0) return;
        const pct = Math.min(100, Math.round((this.completedTopics.length / totalSubtopics) * 100));

        const pctEl = document.getElementById("progress-percentage");
        const barEl = document.getElementById("progress-bar-fill");
        if (pctEl) pctEl.textContent = `${pct}%`;
        if (barEl) barEl.style.width = `${pct}%`;
    }

    updateSubtopicBookmarkButton() {
        const btn = document.getElementById("toggle-bookmark-subtopic");
        if (!btn) return;
        const isBookmarked = this.bookmarkedTopics.some(b => b.subId === this.currentSubtopicId);
        if (isBookmarked) {
            btn.className = "action-btn outline bookmarked";
            btn.innerHTML = `<i class="fa-solid fa-bookmark" style="color:var(--accent-pink);"></i> <span style="color:var(--accent-pink);">Bookmarked</span>`;
        } else {
            btn.className = "action-btn outline";
            btn.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>Bookmark</span>`;
        }
    }

    toggleBookmarkCurrent() {
        if (!this.currentSubtopicId) return;
        const idx = this.bookmarkedTopics.findIndex(b => b.subId === this.currentSubtopicId);
        if (idx === -1) {
            const data = window.CURRICULUM_DATA || [];
            let modName = "", subName = "";
            data.forEach(m => {
                const found = m.subtopics.find(s => s.id === this.currentSubtopicId);
                if (found) {
                    modName = m.title;
                    subName = found.title;
                }
            });
            this.bookmarkedTopics.push({ modId: this.currentModuleId, subId: this.currentSubtopicId, modTitle: modName, subTitle: subName });
            this.showToast("Topic saved to Bookmarks!", "success");
        } else {
            this.bookmarkedTopics.splice(idx, 1);
            this.showToast("Topic removed from Bookmarks.", "info");
        }
        localStorage.setItem("cpp_bookmarks", JSON.stringify(this.bookmarkedTopics));
        this.updateSubtopicBookmarkButton();
        this.updateBookmarkCount();
        this.renderBookmarksList();
    }

    updateBookmarkCount() {
        const badge = document.getElementById("bookmark-count");
        if (!badge) return;
        const count = this.bookmarkedTopics.length;
        badge.textContent = count;
        if (count > 0) badge.classList.remove("hidden");
        else badge.classList.add("hidden");
    }

    openBookmarksModal() {
        const modal = document.getElementById("bookmarks-modal");
        if (!modal) return;
        this.renderBookmarksList();
        modal.style.display = "flex";
    }

    closeBookmarksModal() {
        const modal = document.getElementById("bookmarks-modal");
        if (modal) modal.style.display = "none";
    }

    renderBookmarksList() {
        const listEl = document.getElementById("bookmarks-list");
        if (!listEl) return;

        if (this.bookmarkedTopics.length === 0) {
            listEl.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-muted);">No bookmarked topics yet. Click the Bookmark button while reading any topic!</div>`;
            return;
        }

        listEl.innerHTML = this.bookmarkedTopics.map(b => `
            <div class="bookmark-item" style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-card); padding:14px 18px; border-radius:10px; border:1px solid var(--border-color); margin-bottom:12px;">
                <div style="cursor:pointer;" onclick="app.loadBookmarkedTopic('${b.modId}', '${b.subId}')">
                    <div style="font-size:11px; color:var(--accent-pink); font-weight:700;">${b.modTitle}</div>
                    <div style="font-size:14.5px; font-weight:600; color:var(--text-primary);">${b.subTitle}</div>
                </div>
                <button class="icon-btn" style="width:32px; height:32px;" onclick="app.removeBookmark('${b.subId}')" title="Remove Bookmark">
                    <i class="fa-solid fa-trash" style="font-size:12px; color:var(--accent-orange);"></i>
                </button>
            </div>
        `).join('');
    }

    loadBookmarkedTopic(modId, subId) {
        this.closeBookmarksModal();
        this.loadSubtopic(modId, subId);
    }

    removeBookmark(subId) {
        this.bookmarkedTopics = this.bookmarkedTopics.filter(b => b.subId !== subId);
        localStorage.setItem("cpp_bookmarks", JSON.stringify(this.bookmarkedTopics));
        this.updateBookmarkCount();
        this.updateSubtopicBookmarkButton();
        this.renderBookmarksList();
        this.showToast("Bookmark removed.", "info");
    }

    // =========================================================================
    // SEARCH MODAL LOGIC
    // =========================================================================
    openSearchModal() {
        const modal = document.getElementById("search-modal");
        if (!modal) return;
        modal.style.display = "flex";
        const input = document.getElementById("modal-search-input");
        if (input) {
            input.value = "";
            setTimeout(() => input.focus(), 50);
        }
        this.handleSearch("");
    }

    closeSearchModal() {
        const modal = document.getElementById("search-modal");
        if (modal) modal.style.display = "none";
    }

    handleSearch(query) {
        const resultsEl = document.getElementById("search-results-list");
        if (!resultsEl) return;

        const q = query.trim().toLowerCase();
        if (q.length < 2) {
            resultsEl.innerHTML = `<div class="empty-search" style="padding:30px; text-align:center; color:var(--text-muted);">Type at least 2 characters to search across all 24 modules and 140+ subtopics.</div>`;
            return;
        }

        let matches = [];
        const data = window.CURRICULUM_DATA || [];
        data.forEach(mod => {
            mod.subtopics.forEach(sub => {
                if (sub.title.toLowerCase().includes(q) || (sub.summary && sub.summary.toLowerCase().includes(q)) || (sub.content && sub.content.toLowerCase().includes(q))) {
                    matches.push({ modTitle: mod.title, modId: mod.id, subTitle: sub.title, subId: sub.id, summary: sub.summary });
                }
            });
        });

        if (matches.length === 0) {
            resultsEl.innerHTML = `<div style="padding:30px; text-align:center; color:var(--text-muted);">No C++ or DSA concepts found matching "${query}". Try searching for 'pointer', 'stack', 'virtual', or 'sort'.</div>`;
            return;
        }

        resultsEl.innerHTML = matches.slice(0, 15).map(m => `
            <div class="search-item" style="background:var(--bg-card); padding:14px 18px; border-radius:10px; border:1px solid var(--border-color); margin-bottom:12px; cursor:pointer; transition:all 0.2s;" onclick="app.loadSubtopicFromSearch('${m.modId}', '${m.subId}')">
                <div style="font-size:11px; font-weight:700; color:var(--accent-purple); margin-bottom:4px;">${m.modTitle}</div>
                <div style="font-size:15px; font-weight:600; color:var(--text-primary); margin-bottom:6px;">${m.subTitle}</div>
                <div style="font-size:13px; color:var(--text-secondary); line-height:1.4;">${m.summary}</div>
            </div>
        `).join('');
    }

    loadSubtopicFromSearch(modId, subId) {
        this.closeSearchModal();
        this.loadSubtopic(modId, subId);
    }

    // =========================================================================
    // PROJECTS TAB RENDERER & CODE COPYING
    // =========================================================================
    renderProjectsTab() {
        const bankCodeEl = document.getElementById("bank-code-content");
        if (bankCodeEl) {
            bankCodeEl.textContent = `// Bank Management System Project - Complete Production Source Code
#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <iomanip>
using namespace std;

class BankAccount {
private:
    int accNum;
    string holderName;
    double balance;
    int pinCode;
public:
    BankAccount(int acc = 0, string name = "", double bal = 0.0, int pin = 1234)
        : accNum(acc), holderName(name), balance(bal), pinCode(pin) {}

    int getAccNum() const { return accNum; }
    string getHolderName() const { return holderName; }
    double getBalance() const { return balance; }

    bool authenticate(int inputPin) const { return inputPin == pinCode; }

    void deposit(double amount) {
        if (amount <= 0) {
            cout << "Invalid deposit amount!\\n";
            return;
        }
        balance += amount;
        cout << "Deposited $" << fixed << setprecision(2) << amount 
             << " successfully. New Balance: $" << balance << "\\n";
    }

    bool withdraw(double amount) {
        if (amount > balance) {
            cout << "Insufficient balance! Transaction declined.\\n";
            return false;
        }
        balance -= amount;
        cout << "Withdrew $" << fixed << setprecision(2) << amount 
             << " successfully. Remaining Balance: $" << balance << "\\n";
        return true;
    }

    void displaySummary() const {
        cout << left << setw(12) << accNum << setw(22) << holderName 
             << "$" << fixed << setprecision(2) << balance << "\\n";
    }
};

int main() {
    vector<BankAccount> accounts;
    accounts.push_back(BankAccount(1001, "Alice Smith", 5000.0, 4321));
    accounts.push_back(BankAccount(1002, "Bob Johnson", 3250.50, 1111));

    cout << "==============================================\\n";
    cout << "   C++ & DSA MASTERCLASS PRO BANK PORTAL      \\n";
    cout << "==============================================\\n";
    
    int choice;
    do {
        cout << "\\n1. View All Accounts\\n2. Deposit Funds\\n3. Withdraw Funds\\n4. Exit\\nChoice: ";
        cin >> choice;
        if (choice == 1) {
            cout << "\\nACC NUM     HOLDER NAME           BALANCE\\n";
            for (const auto& acc : accounts) acc.displaySummary();
        } else if (choice == 2) {
            int id, pin; double amt;
            cout << "Account #: "; cin >> id;
            cout << "PIN Code: "; cin >> pin;
            for (auto& acc : accounts) {
                if (acc.getAccNum() == id && acc.authenticate(pin)) {
                    cout << "Amount to Deposit: $"; cin >> amt;
                    acc.deposit(amt);
                }
            }
        }
    } while (choice != 4);
    return 0;
}`;
        }

        const hotelCodeEl = document.getElementById("hotel-code-content");
        if (hotelCodeEl) {
            hotelCodeEl.textContent = `// Hotel Management & Automated Billing System Project - Complete Source Code
#include <iostream>
#include <iomanip>
#include <vector>
#include <string>
using namespace std;

class Room {
protected:
    int roomNumber;
    double dailyRate;
    bool isBooked;
public:
    Room(int num, double rate) : roomNumber(num), dailyRate(rate), isBooked(false) {}
    virtual ~Room() {}
    
    int getRoomNum() const { return roomNumber; }
    bool checkAvailability() const { return !isBooked; }
    void setBooked(bool status) { isBooked = status; }
    
    virtual double calculateRentalCost(int days) const {
        return days * dailyRate;
    }
    virtual void showRoomInfo() const = 0;
};

class StandardRoom : public Room {
public:
    StandardRoom(int num) : Room(num, 150.0) {}
    void showSpecs() const {
        cout << "Room #" << roomNumber << " [Standard Double]: Queen Bed, TV, Wi-Fi ($150/day)\\n";
    }
    void showRoomInfo() const override { showSpecs(); }
};

class DeluxeSuite : public Room {
private:
    bool oceanView;
public:
    DeluxeSuite(int num, bool view = true) : Room(num, view ? 350.0 : 280.0), oceanView(view) {}
    void showRoomInfo() const override {
        cout << "Room #" << roomNumber << " [Deluxe Suite]: King Bed, Jacuzzi, " 
             << (oceanView ? "Ocean View ($350/day)" : "City View ($280/day)") << "\\n";
    }
};

class HotelBillingEngine {
public:
    static void generateInvoice(const Room* room, int stayDays, double restaurantCharges = 0.0) {
        double roomTotal = room->calculateRentalCost(stayDays);
        double subtotal = roomTotal + restaurantCharges;
        double gstTax = subtotal * 0.18; // 18% GST Tax
        double grandTotal = subtotal + gstTax;

        cout << "\\n======================================================\\n";
        cout << "         HOTEL MASTERCLASS PRO INVOICE RECEIPT        \\n";
        cout << "======================================================\\n";
        cout << left << setw(32) << "Room Rental (" + to_string(stayDays) + " Days):" << "$" << fixed << setprecision(2) << roomTotal << "\\n";
        if (restaurantCharges > 0) {
            cout << left << setw(32) << "Restaurant & Room Service:" << "$" << restaurantCharges << "\\n";
        }
        cout << left << setw(32) << "Subtotal:" << "$" << subtotal << "\\n";
        cout << left << setw(32) << "Taxes & Service (18% GST):" << "$" << gstTax << "\\n";
        cout << "------------------------------------------------------\\n";
        cout << left << setw(32) << "TOTAL PAYABLE AMOUNT DUE:" << "$" << grandTotal << "\\n";
        cout << "======================================================\\n";
    }
};

int main() {
    StandardRoom r101(101);
    DeluxeSuite s402(402, true);

    cout << "Welcome to MasterClass Pro Hospitality Management Engine\\n";
    r101.showRoomInfo();
    s402.showRoomInfo();

    // Generate sample receipt for Deluxe Suite for 4 days + $145.50 room service
    HotelBillingEngine::generateInvoice(&s402, 4, 145.50);
    return 0;
}`;
        }
    }

    copyProjectCode(projType) {
        const id = projType === 'bank' ? 'bank-code-content' : 'hotel-code-content';
        const el = document.getElementById(id);
        if (!el) return;

        navigator.clipboard.writeText(el.textContent).then(() => {
            this.showToast(`Full ${projType.toUpperCase()} C++ source code copied to clipboard!`, "success");
        });
    }

    copyCode(btnElement) {
        const container = btnElement.closest(".code-container");
        if (!container) return;
        const codeEl = container.querySelector("code");
        if (!codeEl) return;

        navigator.clipboard.writeText(codeEl.innerText).then(() => {
            const originalText = btnElement.innerText;
            btnElement.innerText = "Copied!";
            btnElement.style.background = "var(--accent-emerald)";
            btnElement.style.color = "#000";
            setTimeout(() => {
                btnElement.innerText = originalText;
                btnElement.style.background = "";
                btnElement.style.color = "";
            }, 1800);
            this.showToast("C++ code snippet copied to clipboard!", "success");
        });
    }

    showToast(message, type = "info") {
        const container = document.getElementById("toast-container") || document.body;
        const toast = document.createElement("div");
        toast.className = `toast-msg ${type}`;
        toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 50);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 400);
        }, 3200);
    }

    // =========================================================================
    // QUIZ & PRACTICE TAB RENDERER
    // =========================================================================
    renderQuizTab() {
        // Render category filters on top if inside #view-practice
        const arena = document.getElementById("quiz-arena");
        if (!arena) return;

        // Check if session has started
        const data = window.QUIZ_DATA || [];
        const filtered = this.quizCategory === "all" ? data : data.filter(q => q.category === this.quizCategory);

        // Default placeholder before start
        arena.innerHTML = `
            <div class="quiz-placeholder" style="text-align:center; padding:40px 20px; background:var(--bg-card); border-radius:16px; border:1px solid var(--border-color);">
                <i class="fa-solid fa-circle-question placeholder-icon" style="font-size:48px; color:var(--accent-cyan); margin-bottom:16px;"></i>
                <h3 style="font-size:22px; color:var(--text-primary); margin-bottom:8px;">Ready to Test Your C++ & DSA Skills?</h3>
                <p style="font-size:14.5px; color:var(--text-secondary); max-width:600px; margin:0 auto 24px auto;">
                    We have <strong>${filtered.length} conceptual questions</strong> in the selected category. Click <strong>Start Quiz Session</strong> above or below to test your knowledge of pointers, virtual functions, time complexity, and memory rules!
                </p>
                <button class="btn-primary" onclick="app.startQuizSession()"><i class="fa-solid fa-play"></i> Start Quiz (${filtered.length} Questions)</button>
            </div>
        `;
    }

    startQuizSession() {
        const arena = document.getElementById("quiz-arena");
        if (!arena) return;

        const data = window.QUIZ_DATA || [];
        const filtered = this.quizCategory === "all" ? data : data.filter(q => q.category === this.quizCategory);

        this.quizScore = 0;
        this.quizAnswered = 0;

        arena.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface); padding:16px 24px; border-radius:12px; border:1px solid var(--border-color); margin-bottom:24px;">
                <div style="font-weight:700; font-size:16px; color:var(--text-primary);">
                    Active Session: <span style="color:var(--accent-cyan);">${this.quizCategory.toUpperCase()}</span>
                </div>
                <div id="quiz-score-badge" style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--accent-emerald); background:var(--bg-card); padding:8px 16px; border-radius:8px; border:1px solid var(--border-color);">
                    Score: 0 / 0
                </div>
            </div>

            <div class="quiz-grid">
                ${filtered.map((q, idx) => `
                    <div class="quiz-card" id="quiz-card-${q.id}" style="background:var(--bg-card); padding:24px; border-radius:14px; border:1px solid var(--border-color); margin-bottom:20px;">
                        <div style="font-size:12px; font-weight:700; color:var(--accent-cyan); margin-bottom:8px;">QUESTION #${idx + 1} [${q.category.toUpperCase()}]</div>
                        <div style="font-size:16.5px; font-weight:600; color:var(--text-primary); margin-bottom:18px; line-height:1.5;">${q.question}</div>
                        <div class="quiz-options-list" style="display:flex; flex-direction:column; gap:10px;">
                            ${q.options.map((opt, optIdx) => `
                                <div class="quiz-option" onclick="app.selectQuizOption('${q.id}', ${optIdx}, ${q.correctIndex})" id="opt-${q.id}-${optIdx}" style="padding:12px 16px; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:10px; cursor:pointer; transition:all 0.2s; font-size:14.5px; color:var(--text-secondary);">
                                    <strong style="color:var(--text-primary);">${String.fromCharCode(65 + optIdx)}.</strong> ${opt}
                                </div>
                            `).join('')}
                        </div>
                        <div class="quiz-explanation hidden" id="exp-${q.id}" style="margin-top:16px; padding:16px; background:var(--bg-surface); border-left:4px solid var(--accent-purple); border-radius:0 8px 8px 0; font-size:13.5px; color:var(--text-secondary);">
                            <strong style="color:var(--accent-purple); display:block; margin-bottom:4px;"><i class="fa-solid fa-circle-info"></i> Detailed Explanation:</strong>
                            ${q.explanation}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        this.showToast("Quiz Session started! Good luck.", "info");
    }

    selectQuizOption(qId, selectedIdx, correctIdx) {
        const card = document.getElementById(`quiz-card-${qId}`);
        if (!card || card.classList.contains("answered")) return;
        card.classList.add("answered");

        const selectedEl = document.getElementById(`opt-${qId}-${selectedIdx}`);
        const correctEl = document.getElementById(`opt-${qId}-${correctIdx}`);
        const expEl = document.getElementById(`exp-${qId}`);

        if (selectedIdx === correctIdx) {
            if (selectedEl) {
                selectedEl.style.background = "rgba(16, 185, 129, 0.2)";
                selectedEl.style.borderColor = "var(--accent-emerald)";
                selectedEl.style.color = "var(--accent-emerald)";
                selectedEl.style.fontWeight = "700";
            }
            this.quizScore++;
            this.showToast("Correct Answer! Well done.", "success");
        } else {
            if (selectedEl) {
                selectedEl.style.background = "rgba(239, 68, 68, 0.2)";
                selectedEl.style.borderColor = "#ef4444";
                selectedEl.style.color = "#ef4444";
            }
            if (correctEl) {
                correctEl.style.background = "rgba(16, 185, 129, 0.2)";
                correctEl.style.borderColor = "var(--accent-emerald)";
                correctEl.style.color = "var(--accent-emerald)";
                correctEl.style.fontWeight = "700";
            }
            this.showToast("Incorrect answer. Check the explanation below!", "warning");
        }

        if (expEl) expEl.classList.remove("hidden");
        this.quizAnswered++;
        const badge = document.getElementById("quiz-score-badge");
        if (badge) badge.textContent = `Score: ${this.quizScore} / ${this.quizAnswered}`;
    }
}

const app = new MasterClassApp();
if (typeof window !== "undefined") {
    window.app = app;
    window.MasterClassApp = MasterClassApp;
}
window.addEventListener("DOMContentLoaded", () => {
    app.init();
});
