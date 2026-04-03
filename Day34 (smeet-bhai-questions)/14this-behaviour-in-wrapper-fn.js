
/*
function memoize(fn) {
    let cache = {};

    return function (...args) {
        if (cache[args]) return cache[args];

        //calling directly → loses `this`
        const result = fn(...args);

        cache[args] = result;
        return result;
    }
}



function memoize(fn) {
    let cache = {};

    return function (...args) {
        if (cache[args]) return cache[args];

        // ✅ forward `this`
        const result = fn.apply(this, args);

        cache[args] = result;
        return result;
    }
}
*/



