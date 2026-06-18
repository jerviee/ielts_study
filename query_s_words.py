import json

with open('src/data/mockWords.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('export const mockWords: IELTSWord[] = [') + len('export const mockWords: IELTSWord[] = [')
end = content.find('];', start)

json_str = '[' + content[start:end].strip() + ']'
words = json.loads(json_str)

prefixes = ['sib', 'sic', 'sid', 'sie', 'sig', 'sil', 'sim', 'sin', 'sir', 'sis', 'sit', 'six', 'siz']

for prefix in prefixes:
    prefix_words = sorted([w for w in words if w['word'].lower().startswith(prefix)], key=lambda x: x['word'])
    print(f'{prefix}: {len(prefix_words)} words')
    for w in prefix_words:
        print(f'  - {w[" word\]}:
