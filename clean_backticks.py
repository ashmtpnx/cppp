import re

files = ['js/subtopic-diagrams.js', 'js/subtopic-diagrams-2.js', 'js/subtopic-diagrams-3.js']

for fname in files:
    with open(fname, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # First normalize any already escaped backticks
    text = text.replace('\\`', '`')
    
    out = []
    i = 0
    while i < len(text):
        if text[i] == '`':
            prev = text[max(0, i-30):i].rstrip()
            nxt = text[i+1:min(len(text), i+30)].lstrip()
            
            is_open = (prev.endswith('(') or prev.endswith(',') or prev.endswith('=')) and (nxt.startswith('<div') or nxt.startswith('+---') or nxt.startswith('\n') or nxt.startswith('//'))
            
            is_close = False
            after_exact = text[i+1:min(len(text), i+30)]
            if after_exact.startswith(',') or after_exact.startswith(';') or after_exact.lstrip().startswith(');'):
                prev_content = text[max(0, i-40):i].rstrip()
                if prev_content.endswith('</div>') or prev_content.endswith('+') or prev_content.endswith('</p>') or prev_content.endswith('-->'):
                    is_close = True
            
            if is_open or is_close:
                out.append('`')
                i += 1
            else:
                # Pair check on same line
                j = i + 1
                while j < min(len(text), i + 200) and text[j] != '`' and text[j] != '\n':
                    j += 1
                if j < min(len(text), i + 200) and text[j] == '`':
                    inner_code = text[i+1:j]
                    out.append('<code>' + inner_code + '</code>')
                    i = j + 1
                else:
                    out.append('\\`')
                    i += 1
        else:
            out.append(text[i])
            i += 1
            
    new_text = ''.join(out)
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print(f"Successfully cleaned and converted inline backticks in {fname}")
