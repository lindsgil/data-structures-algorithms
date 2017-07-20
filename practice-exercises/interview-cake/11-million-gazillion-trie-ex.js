// I'm making a search engine called MillionGazillion™.
// I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages. I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, visited, where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited.
//
// Thing is, the crawler is running on my old desktop computer in my parents' basement (where I totally don't live anymore), and it keeps running out of memory because visited is getting so huge.
//
// How can I trim down the amount of space taken up by visited?

//implement a trie data structure

//this will save us O(n) space

function Trie() {
  this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function(word) {

  var currentNode = this.rootNode;
  var isNewWord = false;

  //Work downwards through the trie, adding nodes as needed
  //and keeping track of whether we add any nodes

  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if(!currentNode.hasOwnProperty(char)) {
      isNewWord = true;
      currentNode[char] = {};
    }

    currentNode = currentNode[char];
  }

  //explicity mark the end of the word or else we might mistake a word for a longer words prefix that was added earlier
  if (!currentNode.hasOwnProperty('end of word')) {
    isNewWord = true;
    currentNode['end of word'] = {};
  }

  return isNewWord;
};
