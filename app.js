console.log('Start');

setTimeout( () => {
    console.log("We are in time out");
},5000);

const items = [1,2,3,4,5];
items.forEach(item =>{
    console.log(item);
})
console.log('End');