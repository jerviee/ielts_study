import re

with open('/home/fred/workspace/memoryworld-project/scripts/generateWords.cjs', 'r', encoding='utf-8') as f:
    content = f.read()

roots = []
lines = content.split('\n')
for line in lines:
    match = re.search(r" root:\s*[\"]([^\\\]+)['\\\]\,
