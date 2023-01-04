"use strict";
const rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: 'xccc'
};
const rect2 = {
    id: '45787',
    size: {
        width: 10,
        height: 5
    },
};
rect2.color = 'black';
const rect3 = {};
const rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
