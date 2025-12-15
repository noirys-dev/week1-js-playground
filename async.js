function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Done waiting");
        }, ms);
    });
};

async function run() {
    console.log("Start");
    const result = await wait(2000);
    console.log(result);
    console.log("End");
}

run();