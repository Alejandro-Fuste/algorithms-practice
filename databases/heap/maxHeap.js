/* ------- Max Heap ------- */

/* Node Equations */

// parent: Math.floor(i/2)
// left child: i * 2
// right child: i * 2 + 1

let MaxHeap = function () {
  let heap = [null];

  // print method
  this.print = () => console.log(heap);

  // insert method
  this.insert = function (num) {
    heap.push(num);

    if (heap.length > 2) {
      let index = heap.length - 1;
    }
  };
};

let test = new MaxHeap();
test.print();
