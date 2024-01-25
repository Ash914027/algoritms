//timers-to delay  execution of a function 
//setTimeout timer function
const delayedFunction =() => {
    console.log('delayed function executed!');
}
setTimeout(delayedFunction,2000);
// setinterval function
// const repeatedFunction = () => {
//     console.log('repeated function executed!');
// };
// const intervalid=setInterval(repeatedFunction,1000);
//clear interval
// function repeatedFunction()
// {
//     console.log('executing repeated function');
// }
// const intervalid=setInterval(repeatedFunction,1000);
// setTimeout(() => {
//     clearInterval(intervalid);
//     console.log('interval stopped');
// },5000);