const prom = new Promise();
prom.then(); // do somethin when promise is resolved
prom.then().catch() // catch for rejected state
prom.then().catch().finally() // once everything is settled run this code

function timeout() {
    // Promise takes 1 argument
    const wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    });

}

Promise.all([]).then(([]) => {

}).catch()// Async to call all promises passed as an array []