'use strict';

function Graph() {
  this._nodes = {};
}

Graph.prototype.addNode = function(value) {
  if (value === undefined) return;
  this._nodes[value] = this._nodes[value] || [];
};

//example graph Implementation
//myGraph = new Graph()
//{_nodes: {}}
//myGraph.addNode('pickles');
//{_nodes: {'pickles':[]}}
//myGraph.addNode('dobb');
//{_nodes: {'pickles':[], 'dobby':[]}}

Graph.prototype.addEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2])
    return 'Invalid node value';
    this._nodes[value1].push(value2);
    this._nodes[value2].push(value1);
};

//{_nodes: {'pickles':['dobby','gibson'], 'dobby':['pickles','gibson'], 'gibson':['dobby', 'pickles']}}
//myGraph.addEdge('dobby', 'pickles');
//myGraph.addEdge('gibson','dobby');
//myGraph.addEdge('pickles', 'gibson');
//    'dobby' --- 'pickles'
//       |        /
//       'gibson'
