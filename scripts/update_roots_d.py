import re

d_roots = [
    ('dac', '教', 'to teach', 'Latin', '源自拉丁语 docere', 'From Latin docere', 'doctorate, docile'),
    ('dam', '损害', 'to damage', 'Latin', '源自拉丁语 damnum', 'From Latin damnum', 'damage, damn'),
    ('de', '神', 'god', 'Latin', '源自拉丁语 deus', 'From Latin deus', 'deity, divine'),
    ('dec', '十', 'ten', 'Latin', '源自拉丁语 decem', 'From Latin decem', 'decade, decimal'),
    ('dem', '人民', 'people', 'Greek', '源自希腊语 demos', 'From Greek demos', 'democracy, demographic'),
    ('dent', '牙', 'tooth', 'Latin', '源自拉丁语 dens', 'From Latin dens', 'dental, dentist'),
    ('derm', '皮肤', 'skin', 'Greek', '源自希腊语 derma', 'From Greek derma', 'dermatology, epidermis'),
    ('dic', '说', 'to say', 'Latin', '源自拉丁语 dicere', 'From Latin dicere', 'dictate, predict'),
    ('dict', '说', 'to say', 'Latin', '源自拉丁语 dicere', 'From Latin dicere', 'dictionary, verdict'),
    ('doc', '教', 'to teach', 'Latin', '源自拉丁语 docere', 'From Latin docere', 'doctor, doctrine'),
    ('duc', '引导', 'to lead', 'Latin', '源自拉丁语 ducere', 'From Latin ducere', 'produce, reduce'),
    ('dur', '持久', 'to last', 'Latin', '源自拉丁语 durare', 'From Latin durare', 'duration, endure'),
]

with open('/home/fred/workspace/memoryworld-project/src/data/roots.ts', 'r', encoding='utf-8') as f:
    content = f.read()

d_roots_str = " D : [\\\n\
for
