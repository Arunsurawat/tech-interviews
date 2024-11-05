/*
    * What is async?
    * What is await?
    * How asynch await works behind the senes?
    * Examples of using async/await
    * Error Handling
    * Interviews
    * Async await vs Promise .then .catch
*/

/* Important points
 1. async always returns a promise.
 2. async and await combo used for handle a promises.
 3. Await is a keyword only can be used inside a Async funtion
 4. JS engine will not wait for promise to be resolved
 5. 
*/

//create a async function and return any string
    async function getData(){
    return "Arun"; 
    }
    // const data = getData();
    // console.log(data);

    // data.then((res) => console.log(res));
 
// create a promise
    const p = new Promise((resolve, reject)=>{
        resolve("Promise resolved value!!"); 
    }) 
 
// create a function and return a promise instend of string 

    async function getPromise() {
        return p;
    }

    // const dataPromised = getPromise();

    // console.log("Data Promised ==",dataPromised);
    // dataPromised.then((res)=> console.log(res));

    
//create a async and await function and return any string


// Before Async Await
    function normalFunction(){
         p.then((res)=> console .log(res));
    }
    
    // normalFunction()
    
// with async await advance 
   async function withAsyncAwaitFunc(){
        const res = await p;
        console.log("res ==",res)
   }
//    withAsyncAwaitFunc();
    
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Promise P1 resolved after 10 sec!!"); 
        }, 10000);
    })
    
        const p2 = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Promise P2 resolved after 5 sec!!");
          }, 5000);
        });
    
    function getpromisep1(){
        p1.then((res)=>console.log(res));
        console.log("Namaste Javascript");
        
    }
    // getpromisep1();
    
    async function getpromisep1WithAwait() {
        console.log("Hello World")
        const data1 = await p1; // In await JS engine will till this promise fullfilment
        console.log("Namaste Javascript With Await");
        console.log(data1);
        const data2 = await p2; // In await JS engine will till this promise fullfilment
        console.log("Namaste Javascript With Await 2 time");
        console.log(data2); 
        
    }
    getpromisep1WithAwait();
    
    
    // real world example
    const API_URL = `https://api.github.com/users/Arunsurawat`;
    async function getUser(){
      //help of async await because fetch is a promise and always return a promise called Response
      const data = await fetch(API_URL);
      const jsonData = await data.json();
      console.log(jsonData);

      fetch(API_URL)
        .then((res) => res.json())
        .then((result) => console.log(result)); // using then
    }
    getUser();
    
    // Error Handling with try and catch 
    
    async function getUserwithErrorHandling() {
       try{
         const data = await fetch(API_URL);
         const jsonData = await data.json();
         console.log(jsonData);
       }catch(err){
        console.log(err)
       }
       
     }
     
     
     // behind the async await javascript enging usages the .then / .catch 
     // no need to worry about the callback and promise chaining.
     // for error you can use try catch but promises use asynce and await
     
     /*interview questions
     Q1. what is async await
     Q2. 
     */