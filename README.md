# Sorting Algo Visualizer

Project Link https://sortingalgo-visualizer.web.app/

```
Project Structure
Src-
    Algorithms-
               |-BubbleSort
               |-Selection Sort
               |-insertion Sort
               |-Merge Sort
               |-Quick Sort
    App-
        |-NavBar
        |-ListBlocks
        |-Legends
```

## Thnigs you should know before getting started

<p>Every sorting Algortihm have an <b>Order Array</b> Which is responsible for things Like </p>
<ul>
  <li>Comparision</li>
  <li>Swapping</li>
  <li>Updating the Array</li>
  </ul>
  
  
 ### As you can see we are returing an order array in this bubble sort Algorithm after adding certain data in it . We need this data so that we can update  our state and visualize the algorithm..
 ```
 const swap=(arr,i,j)=>{
    const temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
}

const bubbleSort=(blocks)=>{
    const dupBlock=blocks.slice(); //copying blocks arrays
    const order=[]

    let i,j

    for(i=0;i<dupBlock.length;i++){
        for(j=0;j<dupBlock.length-i-1;j++){ //as in bubble sort in each parse greater element comes at last..
            
            order.push([j,j+1,null,null])  //comp
            if (dupBlock[j]>dupBlock[j+1]) {
                swap(dupBlock,j,j+1)
                order.push([j,j+1,dupBlock.slice(),null]) //swap
            }
        }
        //after completeing one parse our greater element comes in last
        order.push([null,null,null,j]) // j-th element is in correct position ( Sorted )
    }

    return order
}

export default bubbleSort
 ```
 
 
 ## This is an important function you have to understand it whats going on as it is responsible for most of the things
 ```
 //sorting according to the algorithm

  const handleSort = () => {
    const sortAccOrder = (order) => {
      (function loop(i) {
        setTimeout(function () {
          //array destructuring
          const [j, k, arr, index] = order[i];
          setCompare([j, k]);
          setSwap([]);

          if (index !== null) {
            //adding index of already sorted elements in  array
            setSortedIndex((prevState) => [...prevState, index]);
          }

          if (arr) {
            setBlocks(arr);
            if (j != null || k != null) {
              setSwap([j, k]);
            }
          }

          if (++i < order.length) {
            loop(i);
          } else {
            setSorting(false);
            setCompleted(true);
          }
        }, speed);
      })(0);
    };

    setSorting(true);

    algo === "bubbleSort"
      ? sortAccOrder(bubbleSort(blocks))
      : algo === "insertionSort"
      ? sortAccOrder(insertionSort(blocks))
      : algo === "selectionSort"
      ? sortAccOrder(selectionSort(blocks))
      : algo === "mergeSort"
      ? sortAccOrder(mergeSort(blocks))
      : algo === "quickSort"
      ? sortAccOrder(quickSort(blocks))
      : (() => {
          setSorting(false);
          setCompleted(true);
        })();
  };
 ```
