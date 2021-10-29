/* ------- Max Heap ------- */

/* Node Equations */

// parent: Math.floor(i/2)
// left child: i * 2
// right child: i * 2 + 1

let MaxHeap = function () {
  let heap = [null];

  /**** print method ****/
  this.print = () => console.log(heap);

  /**** insert method ****/
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

  /**** remove method ****/
  this.remove = function () {
    //   get the top node
    let smallest = heap[1];

    // if more than one node in the tree, then move last node to the top and remove last node
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);

      // if only two numbers in array, then swap the numbers to have the greater number on top
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      // if more than two nodes in array, then create equations for parent, right & left child
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      // if top node is smaller than the children, then move it down the tree
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        // swap parent node with child...this is the moving down part
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          // set the index to the left node...set the index to the node that was on top
          i = 2 * i;
        } else {
          // swap if right node is greater than the left node & set index to right node
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        // set the new left & right node of the number that was just moved down
        left = 2 * i;
        right = 2 * i + 1;

        // break out of loop when at the bottom of the tree
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      // only one element in the array...then take it out
      heap.splice(1, 1);
    } else {
      // return null if there are no elements in array
      return null;
    }
    return smallest;
  };

  /**** heap sort method ****/
  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};

let test = new MaxHeap();
test.print();
