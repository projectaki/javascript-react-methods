import React, { Component } from 'react';
import maxPQ from "../PriorityQueue/MaxHeap";
import minPQ from "../PriorityQueue/MinHeap";

class Page extends Component {
    componentDidMount() {
        this.arrayTest();
    }

    arrayTest() {
        const min = new minPQ();
        min.insert([2,"susuan"]);
        min.insert([3, "jake"]);
        min.insert([1, "aladar"]);
        const elem = document.getElementById("middiv");
        elem.innerHTML = min._heap[1];
 
    }
    
    sum = (n1, n2) => n1 + n2;

    func = function greet([...words]) {
        words.forEach(word => console.log(word));
    }

    biggerThanTwo = () =>  {
        const values = [1,2,3,4];
        let vals = values.filter((item) => item > 2);
        const elem = document.getElementById("middiv");
        elem.innerHTML = vals;
    }
    
    
    // calling function with foreach on an array
    run = () => {
        const arr = Array.of(1,2,3,4);
        let numb = 0;
        function add(x) {
            numb += x;
        }
        arr.forEach(add);
        console.log(numb);
    }


    render() {
        return (
            <div id="middiv" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                
            </div>
        );
    }
}

export default Page;