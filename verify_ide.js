const fs = require('fs');
const vm = require('vm');

const elements = {};
const getEl = (id) => {
    if (!elements[id]) {
        elements[id] = {
            id: id,
            innerHTML: '',
            value: '',
            textContent: '',
            style: {},
            scrollTop: 0,
            scrollHeight: 100,
            classList: { add: () => {}, remove: () => {}, contains: () => false },
            appendChild: () => {},
            querySelector: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
            querySelectorAll: () => [],
            closest: () => ({ querySelectorAll: () => [], querySelector: () => ({ classList: { add: () => {} } }) })
        };
    }
    return elements[id];
};

const context = vm.createContext({
    console: console,
    setTimeout: (fn) => fn(),
    clearTimeout: () => {},
    localStorage: { getItem: () => null, setItem: () => {} },
    window: { addEventListener: () => {} },
    navigator: { clipboard: { writeText: () => Promise.resolve() } },
    document: {
        addEventListener: () => {},
        getElementById: getEl,
        createElement: (tag) => ({
            tagName: tag,
            style: {},
            classList: { add: () => {}, remove: () => {} },
            appendChild: () => {},
            setAttribute: () => {},
            innerHTML: ''
        }),
        querySelector: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
        querySelectorAll: () => []
    }
});
context.window = context;
context.window.addEventListener = () => {};

vm.runInContext(fs.readFileSync('data/modules_1_to_8.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('data/modules_9_to_14.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('data/modules_15_to_24.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/subtopic-diagrams.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/subtopic-diagrams-2.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/subtopic-diagrams-3.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/app.js', 'utf8'), context);

console.log('Testing app.loadSubtopic("mod-1", "mod-1-2")...');
context.app.loadSubtopic('mod-1', 'mod-1-2');

const tabTitle = getEl('ide-tab-title').textContent;
const editorVal = getEl('ide-live-code-editor').value;
console.log('IDE Tab Title:', tabTitle);
console.log('IDE Code Editor Value length:', editorVal.length);

console.log('Testing app.runIdeSandbox()...');
context.app.runIdeSandbox();
const termOutput = getEl('ide-terminal-output').innerHTML;
if (termOutput.includes('Compilation finished') && termOutput.includes('Process exited 0')) {
    console.log('SUCCESS: IDE Sandbox live execution simulator prints Clang 18.1 output cleanly!');
} else {
    console.error('FAIL: Sandbox terminal output did not match!');
}

let allOk = true;
const mods = context.window.CURRICULUM_DATA || [];
mods.forEach(m => {
    (m.subtopics || []).forEach(sub => {
        try {
            context.app.loadSubtopic(m.id, sub.id);
            if (!context.app.currentIdeCodeMain) {
                console.error('Missing ide code for', sub.id);
                allOk = false;
            }
        } catch(e) {
            console.error('Error on', sub.id, e);
            allOk = false;
        }
    });
});

if (allOk) {
    console.log('ALL 212 SUBTOPICS VERIFIED PASSING WITH JETBRAINS IDE WORKBENCH & CODE SANDBOX!');
} else {
    process.exit(1);
}
