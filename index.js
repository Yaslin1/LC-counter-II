/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

///**
// * @param {integer} init
// * @return { increment: Function, decrement: Function, reset: Function }
// */

//user provides an initial value

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const createCounter = (init = 0) => {
    const counting = { //initial value is stored in a variable
        resetVal: init, // always = to orignial initial vlaue
        value: init, //initial value of 10
        increment: function () {
            this.value++;
            return this.value;
        },
        reset: function () {
            this.value = this.resetVal;
            return this.value;
        },
        decrement: function () {
            this.value--;
            return this.value;
        },
    }
    return counting
}

const counter = createCounter(10);
counter.increment();
console.log(counter.value);
counter.reset();
console.log(counter.value);
counter.decrement();
console.log(counter.value);



