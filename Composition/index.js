import Tree from "./Tree.js";
import Node from "./Node.js";

const tree = new Tree("World");
const root = tree.getRoot();

const chinaNode = new Node("China");
root.addChild(chinaNode);

const americaNode = new Node("America");
root.addChild(americaNode);

const beijing = new Node("Beijing");
const shanghai = new Node("Shanghai");
chinaNode.addChild(beijing);
chinaNode.addChild(shanghai);

const sanfrancisco = new Node("San Francisco");
const newyork = new Node("New York");
americaNode.addChild(sanfrancisco);
americaNode.addChild(newyork);

const nodesTree = root.getChildNodes();
console.log("-", root.getName());
for (let i = 0; i < nodesTree.length; i++) {
  const nodeElement = nodesTree[i];
  console.log("---", nodeElement.getName());
  const nodesTreeElement = nodeElement.getChildNodes();
  for (let j = 0; j < nodesTreeElement.length; j++) {
    const nodeChildElement = nodesTreeElement[j];
    console.log("------", nodeChildElement.getName());
  }
}
