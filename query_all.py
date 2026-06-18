import json

with open('src/data/mockWords.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('export const mockWords: IELTSWord[] = [') + len('export const mockWords: IELTSWord[] = [')
end = content.find('];', start)

json_str = '[' + content[start:end].strip() + ']'
words = json.loads(json_str)

for prefix in ['sha', 'she', 'shi', 'sho', 'shr', 'shu']:
    prefix_words = [w for w in words if w['word'].lower().startswith(prefix)]
    print('Found', len(prefix_words), 'words starting with', prefix + ':')
    for w in prefix_words:
        print()
        print('===', w['word'], '===')
        print('Meaning:', w['meaning'])
        print('Level:', w['level'])
    print()
