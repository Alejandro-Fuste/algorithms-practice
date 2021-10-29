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

      while (heap[index] > heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          [heap[Math.floor(index / 2)], heap[index]] = [
            heap[index],
            heap[Math.floor(index / 2)],
          ];

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
