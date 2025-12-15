function getNumber() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(5);
        },1000);
    })
};

const result = await getNumber();
console.log(result);