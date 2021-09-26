
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