import { useState,useEffect } from "react";
import "./App.css";

function App() {

  const [arr,setArr]=useState([])
  const[active,setActive]=useState(false)

 useEffect(()=>{
   genArr()
 },[])

  function genArr() {
    // console.log(100);
    var maximum = 99;
    var minimum = 10;
    var l = [];
    for (let i = 0; i < 125; i++) {
      var randomnumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      l.push(randomnumber);
    }
    setArr([...l]);
  
  }

  function Sort() {
    let l = arr.length;
    if (l === 0) genArr();
    else {
      let temp = [...arr];
      for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - i - 1; j++) {
          setTimeout(() => {
            
            if (temp[j] > temp[j + 1]) {
              let t = temp[j + 1];
              temp[j + 1] = temp[j];
              temp[j] = t;
            }
           

            setArr([...temp]);
          }, 30);
        }
       
      }

      setTimeout(()=>{
setActive(true)
      },0)
   
    }
    console.log(arr)
  }




  function selectionSort() {
    let temparr = [...arr];
    for (var i = 0; i < temparr.length; i++) {

        let min = i; //  storing the index of minimum element

        for (var j = i + 1; j < temparr.length; j++) {
            if (temparr[min] > temparr[ j ]) {
                min = j; // updating the index of minimum element
            }
        }

        if (i !== min) {
            let temp = temparr[ i ];
            temparr[ i ] = temparr[min];
            temparr[min] = temp;
            setTimeout(() => {
              setArr([...temparr])
            }, 30);
        }
    }
  
}
   

  return (
    <div className="App">
      <nav>
      <h1>Sorting Algorithm Visualizer</h1>
        <ul className="ul">
          <li><a href="#" onClick={Sort}>Bubble Sort</a></li>
          <li><a href="#" onClick={selectionSort}>Selection Sort</a></li>
        
          <li>Quick Sort</li>
          <li>Insertion Sort</li>
        </ul>
      </nav>
      <div className="sortingDetails">
        <div className={active===true?"show":"hide"} >
        <h3>BubbleSort</h3>
        <ul>
          <li>Worst Case Time Complexity [ Big-O ]: O(n2)</li>
          <li>Best Case Time Complexity [Big-omega]: O(n)
</li>
          <li>Average Time Complexity [Big-theta]: O(n2)
</li>
        </ul>
        </div>
        
      </div>
      <div className="sortBox">
        <center>
          {arr.map((ele, id) => {
            return (
              <div
                className="arrayElement"
                key={id}
                style={{
                  
                  height: `${(80 / 100) * ele}vh`,
                  width: `${32 / 100}vw`,
                  margin: `0 0.2vw`,
                  color:"white",
                
                  backgroundColor: "green"
                }}
              ></div>
            );
          })}
        </center>
      </div>
    </div>
  );
}

export default App;
