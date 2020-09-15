const yt = new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        console.log('From Youtube');
        resolve(['video1','video2']);
    },2000);
})

const fb = new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        console.log('From facebook');
        resolve('Videos detials')
    },2000);
})

Promise.all([yt,fb]).then(result=> console.log(result));