"use strict";

//Create node
class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
    add(val) {
      if (val > this.val) {
        if (!this.right) this.right = new Node(val);
        else this.right.add(val);
      } else if (val < this.val) {
        if (!this.left) this.left = new Node(val);
        else this.left.add(val);
      }
    }

    *_iterator(node) {
      if (node.left) yield* this._iterator(node.left);
      yield node.val;
      if (node.right) yield* this._iterator(node.right);
    }

    [Symbol.iterator]() { return this._iterator(this); }
}

//prefill node
let root = new Node(8);
root.add(3);
root.add(10);
root.add(1);
root.add(6);
root.add(9);
root.add(13);

console.log('In order = ', [...root]);
