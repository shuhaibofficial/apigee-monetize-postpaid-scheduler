console.log('Start');

function loggedUser(email,mobile)
{
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            console.log("We are Getting data wait");
            resolve({email:'home@gmail.com',mobile:123456789});
        },5000);
    })


}
function getVideos(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('we are getting videos');
            resolve(['video1','video2','video3']);
        },3000);

    })

}
function videoDetails(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Video details: its drama video')
            },2000);

    })

}

// const user =loggedUser('shu@gm.com',12345,user=>{
//     console.log(user);
//     getVideos(user.email,videos =>{
//         console.log(videos);
//         videoDetails(videos[1],details =>{
//             console.log(details);
//         })
//     })
// })

loggedUser('shu@gm.com',12345).
then(user => getVideos(user.email)).
then(videos => videoDetails(videos[1])).
then(details => console.log(details));


console.log('End');