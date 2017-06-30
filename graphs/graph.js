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

//Depth First Search ttraversal
Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance) {
  if (!this._nodes[value] || typeof fn !== 'function')
    return 'Invalid value or function';
  visited = visited || {};
  distance = distance || 0;
  fn(value, distance);
  visited[value] = true;
  this._nodes[value].forEach(function(neighbor) {
    if(visited[neighbor]) return;
    this.traverseDepthFirst(neighbor, fn, visited, distance + 1);
  }, this);
};

myGraph = new Graph();

myGraph.traverseDepthFirst(1, foo);

  let visited = visited || {}; //{}
  let distance = distance || 0; 0
  fn(value, distance); //console.log(value) // 1
  visited[value] = true; //{1: true}

  this._nodes[value].forEach(function(neighbor) {
    if (visited[neighbor]) return;
    this.traverseDepthFirst(neighbor, fun, visisted, distance + 1 );
  }, this);
};


  //Breadth First ttraversal
  Graph.prototype.traverseBreadthFirst = function(value, fn) {
    if (!this._nodes[value] || typeof fn !== 'function') return 'Invalid value or function';
    let visited = {};
    let queue = [value];
    visited[value] = 0;
    while (queue.length) {
      let node = queue.shift();
      fn(node, visisted[node]);
      let neighbors = this._nodes[node].filter(function(neighbor) {
        if (visited[neighbor] === undefined) {
          visisted[neighbor] = visited[node] + 1;
          return true;
        }
      });
      queue = queue.concat(neighbors);
    }
  };
