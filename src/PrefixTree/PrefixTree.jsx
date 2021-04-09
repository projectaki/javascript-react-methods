import React from "react";
class Node {
  constructor() {
    this.children = new Map();
    this.value = "";
    this.isWord = false;
  }
}
const PrefixTree = () => {
  const root = new Node();

  // recursively add a word to the prefix tree
  const addWord = (word) => {
    addWordRec(word, root, 0);
  };

  // recurse add helper method
  const addWordRec = (word, node, index) => {
    // word is inserted, we are done
    if (word.length === index) {
      console.log(root);
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
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate (-50%, -50%)",
        }}
      >
        {/* {console.log(JSON.stringify(root.children, null, 2))} */}
      </div>
      <div>
        {addWord("hello")}
        {addWord("helicopter")}
        {/* {console.log(JSON.stringify(root.children, null, 2))} */}
      </div>
    </>
  );
};

export default PrefixTree;
