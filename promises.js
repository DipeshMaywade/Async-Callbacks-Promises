function fun1(){
    return new Promise((resolve, reject)=>{
        const error = true;
        if (!error) {
            resolve();
        }else{
            reject("Failed..!")
        }        
    })    
}

fun1().then(()=>{
    console.log("Resolve...");
}).catch((error)=>{
    console.log(error);
})