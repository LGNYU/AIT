// 1. make a cached version of your function
// 2. create timed versions of old functions
// 3. authentication - don't run func unless authentication passes

const addTwo = (a, b) => a + b;

const incrementMaker = oldFn => {
    const newFn = (...arg) => {    //rest
        const ret = oldFn(...arg); //spread
        return ret + 1;
    }
    return newFn;
}

const incrementAddTwo = incrementMaker(addTwo);
console.log(incrementAddTwo(50, 50));


const cachify = oldFn => {
    const cache = {};
    const newFn = (...args) => {  
        console.log('current cache', cache);
        const k = JSON.stringify(args);

        if (Object.hasOwn(cache, k)) {
            console.log('cache hit')
            return cache[k]
        } else {
            console.log('cache MISS!!!')
            const ret = oldFn(...args)
            cache[k] = ret
            return ret

        }
        // check incoming arguments
        // if not in cache
        // run old function
        // save results in cache
        // if we have seen this
        // retrieve the result from cache
    }
    return newFn
}


const f = cachify(addTwo)
console.log(f(4, 4))
console.log(f(4, 4))
console.log(f(4, 5))





class Werewolf {
    constructor(name) {
        this.name = name
        this.f = () => console.log('hello')
    }

    howl(thing) {
        console.log(this.name, 'howls at the', thing)
    }
}

const w = new Werewolf('Wallaace')
console.log(w.name)
console.log(w)
w.howl('moon')

