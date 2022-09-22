/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {

    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds them to nodes property. */
  addVertices(vertexArray) {

    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {

    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {

    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {

    this.nodes.delete(vertex);
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let toVisit = [start];
    let nodeVals = [];

    while (toVisit.length !== 0) {
      let current = toVisit.pop();
      nodeVals.push(current.value);

      for (let node of current.adjacent) {
        if (!nodeVals.includes(node.value)) {
          toVisit.push(node);
        }
      }
    }

    return nodeVals;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let toVisit = [start];
    let nodeVals = [];

    while (toVisit.length !== 0) {
      let current = toVisit.shift();
      nodeVals.push(current.value);

      for (let node of current.adjacent) {
        if (!nodeVals.includes(node.value)) {
          toVisit.push(node);
        }
      }
    }

    return nodeVals;


  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end, adjacentList = new Set(), count, visited = new Set()) {

    if (start === end) return count;

    if (adjacentList.has(end)) {
      count++;
      return count;
    }

    while (adjacentList) {

      if (adjacentList.length === 0) {
        for (let single of start.adjacent) {
          adjacentList.add(single);
        }
      }

      count++;

      let newSet = new Set();

      for (let node of adjacentList) {
        if (node.val !== end) {
          visited.add(node.val);
          for (let adjNode of node.adjacent) {
            if (!visited.has(adj.Node).val)
              newSet.add(adjNode);
          }
        }
      }

      return this.distanceOfShortestPath(start, end, newSet, count, visited);

    }

  }
}
// let minimum = Infinity;
// function _recursiveDistance(start, end, minimum, visited=new Set([]), count=0) {
//   if (start === end) return count;
//   if (start.adjacent.has(end)) return count + 1;

//   visited.add(start);

//   for (let node of start.adjacent) {
//     if (!visited.has(node)) {
//       this._recursiveDistance(node, end, minimum)
//     }
//   }
// }

// _recursiveDistance(start, end, minimum)

// let minimum = Infinity;
// let count = 0; // 4
// let toVisit = [start]; // T, H, M
// let visited = new Set([start]); // R, I, T, H
// let visitedInLoop = new Set();
// //visited paths array ['rithm', 'rthm', 'rhm']
// //
// while (toVisit.length !== 0) {
//   let current = toVisit.pop();
//   if (current === end) {
//     if (count < minimum) {
//       minimum = count;
//     } else {
//       count = 0;
//     }
//   }
//   else {
//     for (let node of current.adjacent) {
//       if (!visited.has(node)) {
//         toVisit.push(node);
//         // what if there are duplicates in toVisit?
//       }
//     }

//   }
//   count++;
//   visited.add(current);
// }

// return Math.min(this.distanceOfShortestPath(start, end));
module.exports = { Graph, Node };
