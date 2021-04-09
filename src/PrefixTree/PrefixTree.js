class Node {
  constructor() {
    this.children = new Map();
    this.value = "";
    this.isWord = false;
    this.passed = "";
  }
}
export const PrefixTree = () => {
  const root = new Node();

  // recursively add a word to the prefix tree
  const addWord = (word) => {
    addWordRec(word, root, 0);
  };

  // recurse add helper method
  const addWordRec = (word, node, index) => {
    // word is inserted, we are done
    if (word.length === index) {
      return;
    }
    // if children contains the letter, then continue adding the word
    if (node.children.has(word.charAt(index))) {
      addWordRec(word, node.children.get(word.charAt(index)), index + 1);
    } else {
      const toInsert = new Node();
      toInsert.value = word.charAt(index);
      if (index === word.length - 1) toInsert.isWord = true;
      node.children.set(word.charAt(index), toInsert);

      addWordRec(word, node.children.get(word.charAt(index)), index + 1);
    }
  };

  const listPossibilities = (prefix) => {
    if (prefix === "") return [];
    const searchStartNode = _getNodeAtEndOfPrefix(prefix);
    const listOfWords = [];
    if (searchStartNode !== null) {
      searchStartNode.passed = prefix.substring(0, prefix.length - 1);

      const queue = [];
      queue.push(searchStartNode);
      while (queue.length !== 0) {
        const currentNode = queue.shift();
        const wordSoFar = currentNode.passed + currentNode.value;
        if (currentNode.isWord) listOfWords.push(wordSoFar);
        const children = currentNode.children;

        children.forEach((x) => {
          x.passed = wordSoFar;
          queue.push(x);
        });
      }
    }
    return listOfWords;
  };

  const _getNodeAtEndOfPrefix = (prefix) => {
    const val = _getNodeAtEndOfPrefixRec(prefix, root, 0);
    return val;
  };
  const _getNodeAtEndOfPrefixRec = (prefix, node, index) => {
    if (index === prefix.length) return node;
    const currentChar = prefix.charAt(index);
    if (!node.children.has(currentChar)) return null;
    return _getNodeAtEndOfPrefixRec(
      prefix,
      node.children.get(currentChar),
      index + 1
    );
  };
};
