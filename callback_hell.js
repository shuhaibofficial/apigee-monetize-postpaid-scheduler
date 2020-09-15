console.log('Start');

function loggedUser(email,mobile,callback)
{
    setTimeout( ()=>{
        console.log("We are Getting data wait");
        callback({email:'home@gmail.com',mobile:123456789});
    },5000);

}
function getVideos(email,callback){
    setTimeout(()=>{
        console.log('we are getting videos');
        callback(['video1','video2','video3']);
    },3000);
}
function videoDetails(video,callback){
    setTimeout(()=>{
    callback('Video details: its drama video')
    },2000);
}

const user =loggedUser('shu@gm.com',12345,user=>{
    console.log(user);
    getVideos(user.email,videos =>{
        console.log(videos);
        videoDetails(videos[1],details =>{
            console.log(details);
        })
    })
})

console.log(user);
console.log('End');