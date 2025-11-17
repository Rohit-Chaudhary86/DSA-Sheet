 //Q - 735 Asteroid Collision

 class MyStack {
    #arr;
    constructor() {
        this.#arr = [];
    }
    push(el) {
        this.#arr.push(el);
    }
    pop() {
        return this.#arr.pop();
    }
    top() {
        return this.#arr[this.#arr.length - 1];
    }
    isEmpty() {
        return this.#arr.length === 0;
    }
    getArray() {
        return this.#arr;
    }
}

var asteroidCollision = function(asteroids) {
    let st = new MyStack();

    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i];

        if (curr > 0) {
            st.push(curr);
        } else {
            while (
                !st.isEmpty() &&
                st.top() > 0 &&
                st.top() < Math.abs(curr)
            ) {
                st.pop();
            }

            if (st.isEmpty() || st.top() < 0) {
                st.push(curr);
            } else if (st.top() === Math.abs(curr)) {
                st.pop();
            }
        }
    }

    return st.getArray();
};
