export interface RootGroup {
  root: string;
  meaning: string;
  meaningEn: string;
  origin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon' | 'Other';
  originNote: string;
  originNoteEn: string;
  example: string;
  words: number[];
}

export interface PrefixGroup {
  prefix: string;
  meaning: string;
  meaningEn: string;
  origin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon' | 'Other';
  originNote: string;
  originNoteEn: string;
  words: number[];
}

export interface SuffixGroup {
  suffix: string;
  meaning: string;
  meaningEn: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb';
  words: number[];
}

export const alphabetLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const rootGroupsByLetter: Record<string, RootGroup[]> = {
  'A': [],
  'B': [],
  'C': [],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
  'H': [],
  'I': [],
  'J': [],
  'K': [],
  'L': [],
  'M': [],
  'N': [],
  'O': [],
  'P': [],
  'Q': [],
  'R': [],
  'S': [],
  'T': [],
  'U': [],
  'V': [],
  'W': [],
  'X': [],
  'Y': [],
  'Z': [],
};

export const prefixGroups: PrefixGroup[] = [];

export const suffixGroups: SuffixGroup[] = [];
