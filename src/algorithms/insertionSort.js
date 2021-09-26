const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const insertionSort=(blocks)=>{

    const dupBlocks=blocks.slice(); //copying blocks array
    const order=[];

    let i,j;

    for(i=0;i<dupBlocks.length;i++){
        j=i-1;

        while(j>=0 && dupBlocks[j]>dupBlocks[j+1]){
            swap(dupBlocks,j,j+1)
            order.push([j,j+1,null,null])//comparison
            order.push([j,j+1,dupBlocks.slice(),null])//swap ka lia
            j--;
        }
    }

    for(i=0;i<dupBlocks.length;i++){
        order.push([null, null, null, i]) //sorted array
    }
    return order
}

export default insertionSort