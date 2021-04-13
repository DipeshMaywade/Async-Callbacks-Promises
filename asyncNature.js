//Syncronus Nature

console.log("sync-Step:1");
console.log("sync-Step:2");
console.log("sync-Step:3");

//Async Nature

console.log("async-Step:1");

setTimeout(() => {
    console.log("async-Step:2");
}, 3000);

console.log("async-Step:3");