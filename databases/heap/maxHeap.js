/* ------- Max Heap ------- */

/* Node Equations */

// parent: Math.floor(i/2)
// left child: i * 2
// right child: i * 2 + 1

let MaxHeap = function () {
  let heap = [null, 1, 2, 3];

  // print method
  this.print = () => console.log(heap);
};

let test = new MaxHeap();
test.print();
