import React, { Component } from 'react';

class SetMethods extends Component {
    // Add, Delete, Has, Keys, Values, forEach
    // Weak Set is add, delete, has => gets garbage collected
    createSet() {
        const test = new Set();
        test.add(1).add(2).add(2).add(4);
        for (let elem of test) console.log(elem);
    }

    // Map => set, get, has, forEach, Entries, keys, values
    Map = () => {
        const map = new Map();
        map.set(1, "a");
        map.set(2,"b");
        map.set(1,"c");
        map.forEach((item) => console.log(item));
        for (let item of map.values()) {
            console.log(item);
        }
    }
    render() {
        return (
            <div>
                {this.Map()}
            </div>
        );
    }
}

export default SetMethods;