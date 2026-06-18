import json

with open('src/data/mockWords.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('export const mockWords: IELTSWord[] = [') + len('export const mockWords: IELTSWord[] = [')
end = content.find('];', start)

json_str = '[' + content[start:end].strip() + ']'
words = json.loads(json_str)

prefixes = ['sha', 'she', 'shi', 'sho', 'shr', 'shu']
expected_counts = {'sha': 13, 'she': 7, 'shi': 5, 'sho': 15, 'shr': 5, 'shu': 2}

for prefix in prefixes:
    prefix_words = [w for w in words if w['word'].lower().startswith(prefix)]
    print(f'{prefix}: 找到 {len(prefix_words)} 个单词 (预期: {expected_counts[prefix]})')
    for w in prefix_words:
        print(f'  - {w[
