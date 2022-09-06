class Node {
  constructor(name) {
    this.name = name;
    this.childNodes = new Array();
  }

  addChild(child) {
    this.childNodes.push(child);
  }

  getChildNodes() {
    return this.childNodes;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name;
  }
}

export default Node;
