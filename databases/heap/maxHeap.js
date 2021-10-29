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
    // push num to the end of the heap array
    heap.push(num);

    // more than one item in heap if length is greater than two
    if (heap.length > 2) {
      // find last index from heap array
      let index = heap.length - 1;

      // loop will continue as long as the num we just pushed is greater than parent node
      while (heap[index] > heap[Math.floor(index / 2)]) {
        // if we haven't reached the root node, then swap
        if (index >= 1) {
          // swap with array destructing
          [heap[Math.floor(index / 2)], heap[index]] = [
            heap[index],
            heap[Math.floor(index / 2)],
          ];
          //   if parent node is not the root node, then set the index to the parent node
          if (Math.floor(index / 2) > 1) {
            index = Math.floor(index / 2);
          } else {
            break;
          }
        }
      }
    }
  };
};

let test = new MaxHeap();
test.print();
