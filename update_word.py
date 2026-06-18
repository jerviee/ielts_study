import json

with open('src/data/mockWords.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('export const mockWords: IELTSWord[] = [') + len('export const mockWords: IELTSWord[] = [')
end = content.find('];', start)

json_str = '[' + content[start:end].strip() + ']'
words = json.loads(json_str)

for w in words:
    if w['word'] == 'shuttle':
        w['prefix'] = ''
        w['prefixMeaning'] = ''
        w['prefixMeaningEn'] = ''
        w['root'] = 'shutt'
        w['rootMeaning'] = '梭子；往返'
        w['rootMeaningEn'] = 'shuttle'
        w['rootOrigin'] = 'Old English'
        w['rootOriginNote'] = '源自古英语 scytel（投射物、梭子）；无前缀；后缀：-le（名词后缀）'
        w['suffix'] = '-le'
        w['suffixMeaning'] = '名词后缀'
        w['suffixMeaningEn'] = 'noun suffix'

output = '''export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  prefix?: string;
  prefixMeaning?: string;
  prefixMeaningEn?: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  suffix?: string;
  suffixMeaning?: string;
  suffixMeaningEn?: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
  example: string;
}

export const mockWords: IELTSWord[] = ''' + json.dumps(words, indent=2, ensure_ascii=False) + ';'

with open('src/data/mockWords.ts', 'w', encoding='utf-8') as f:
    f.write(output)

print('Updated shuttle')
