class TrieNode {
    public value: string;
    public isEndOfWord: boolean;
    public children: TrieNode[];

    public constructor(value: string, isEndOfWord: boolean, children: TrieNode[]) {
        this.value = value;
        this.isEndOfWord = isEndOfWord;
        this.children = children;
    }
}

export class Trie {
    public readonly rootNode: TrieNode;

    public constructor(words?: string[]) {
        this.rootNode = new TrieNode('', false, []);
        if (words) {
            this.addWordsToTrie(words);
        }
    }

    public addWordToTrie(word: string): void {
        return this.addToTrieHelper(word, this.rootNode);
    }

    public addWordsToTrie(words: string[]): void {
        words.forEach((word): void => {
            this.addToTrieHelper(word, this.rootNode);
        });
    }

    private addToTrieHelper(word: string, currentNode: TrieNode): void {
        if (word.length === 0) {
            throw new Error('Did not expect word length to be 0.');
        }
        const matchByLowercaseValue = (currentLetter: string) => (someNode: TrieNode) =>
            someNode.value.toLowerCase() === currentLetter.toLowerCase();

        const currentLetter = word[0];
        const isEndOfWord = word.length === 1;
        if (!currentNode.children.some(matchByLowercaseValue(currentLetter))) {
            currentNode.children.push(new TrieNode(currentLetter, isEndOfWord, []));
        }
        const nextWord = word.slice(1, word.length);
        if (nextWord.length === 0) {
            currentNode.children.find(matchByLowercaseValue(currentLetter))!.isEndOfWord = true;
            return;
        }
        const nextNode = currentNode.children.find(matchByLowercaseValue(currentLetter))!;
        return this.addToTrieHelper(nextWord, nextNode);
    }

    public getEligibleWords(word: string): string[] {
        const result = this.getStartingNode(word, this.rootNode, 0);
        if (!result) {
            return [];
        }

        const { startingNode, index } = result;
        const startingLetters = word.slice(0, index - 1);
        const initialRemainingLetters = word.slice(index, word.length);

        const placesToSearch = [{ node: startingNode, remainingLetters: initialRemainingLetters }];
        const eligibleWords: string[] = [];

        while (placesToSearch.length > 0) {
            const { node, remainingLetters } = placesToSearch.pop()!;
            if (node.isEndOfWord) {
                eligibleWords.push(startingLetters + remainingLetters + node.value);
            }
            const { children } = node;
            children.forEach((child): void => {
                placesToSearch.push({
                    node: child,
                    remainingLetters: remainingLetters + node.value,
                });
            });
        }

        return eligibleWords;
    }

    public getStartingNode(
        word: string,
        currentNode: TrieNode,
        index: number,
    ): { startingNode: TrieNode; index: number } | false {
        if (word.length === 0) {
            return {
                startingNode: currentNode,
                index,
            };
        }
        const nextNode = currentNode.children.find((c): boolean => c.value.toLowerCase() === word[0].toLowerCase());
        if (nextNode === undefined) {
            return false;
        }

        return this.getStartingNode(word.slice(1, word.length), nextNode, index + 1);
    }
}
