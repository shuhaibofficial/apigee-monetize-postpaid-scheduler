const promise = new Promise((resolve , reject ) =>{
    setTimeout(()=>{
        console.log('Inside Promise')
        resolve({'user':'shuhaib'});
        reject(new Error('User Not avaialable'));
    },2000);

});

promise.then(user => {
    console.log(user);
}).catch(err =>{ console.log(err.message)});