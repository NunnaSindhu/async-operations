//callbackfunctions

// const handleName=(name,callback) =>callback(name);
// const makeUpperCase=(name)=>name.toUpperCase();
// const reversename=(name)=>name.split("").reverse().join("");
// console.log(handleName("sindhu",makeUpperCase));
// console.log(handleName("sindhu",reversename));

//  const myfun=(callback)=>{
//    setTimeout(()=>{
//     let data=['apple','mango','grapes','banana','cherries'];
//     callback(false,data);
//    },3000);
//  };
//  const callback=(err,data)=>{
//    if(err){
//      console.log(err);
//    }
//    else{
//      console.log(data);
//    }
//  };
//  myfun(callback);

//countdown of numbers

// const myfun=()=>{
//   let count=10;
//   for(let i=1;i<=10;i++){
//     setTimeout(()=>{
//       console.log(count--);

//  },i*1000);
//   }
//   setTimeout(callback(),11000);
// }
// const callback=()=>{
//   console.log("happy republic day");
// }
// myfun();

//promises

// let value=5;
// const promiseobj=new Promise((resolve,reject)=>{
// let random=Math.floor(Math.random()*10);
// if(random===value){
//   resolve("yes you guesses correct num");
// }
// else{
//   reject("opps,wrong guess");
// }
// });
// promiseobj.then((message)=>{
//   console.log(message);
// }).catch((message)=>{
//   console.log(message)
// });

//promises task2

// const getPromiseBurger=()=>{
//   return new Promise((resolve,reject)=>{
//   let random=Math.floor(Math.random()*10);
//  if(random%2===0){
//    resolve("Here is your promised burger");
//  }
//  else{
//    reject("Your promised burger is regected");
//  }
// });

// }

// getPromiseBurger().then((msg)=>{
//   console.log(msg);
// }).catch((msg)=>{
//   console.log(msg);
// }).finally(()=>{
//   console.log("your o/p is here");
// });

//task3
// let roomcleaned=true;
// const promise1=new Promise((resolve,reject)=>{

//     if(roomcleaned==true){
//       resolve(" your room is cleaned");
//   }else{
//     reject("your room is not cleaned");
//   }

// });
// promise1.then((result)=>{
//   console.log(result);
// }).catch((result)=>{
//   console.log(result);
// });

//task4
// const promise2=new Promise((resolve,reject)=>{
//   let data=10;
//   resolve(data);
// });
// promise2.then((result)=>{
//   console.log(result);
//   return result*2;
// }).then((result)=>{
//   console.log(result);
//   return result*2;
// }).then((result)=>{
//   console.log(result);
//   return result*2;
// });

// promise.all(),promise chaining

// const roomclean=new Promise((resolve,reject)=>{
// let roomclean=true;
// if(roomclean===true){
//   resolve("Room is cleaned");
// }
// else{
//   reject("Room is not cleaned");
// }
// });
// const removeGarbage=new Promise((resolve,reject)=>{
//   let removegarbage=true;
//   if(removegarbage===true){
//     resolve("Garbage is removed");
//   }
//   else{
//     reject("Garbage is not removed");
//   }
// });
// const getThePrice=new Promise((resolve,reject)=>{
//   let getprice=true;
//   if(getprice===true){
//     resolve("Got the Price");
//   }
//   else{
//     reject("Did not get the Price");
//   }
// });
// roomclean.then((msg)=>{
//   console.log(msg);
//   removeGarbage.then((msg)=>{
//     console.log(msg);
//     getThePrice.then((msg)=>{
//       console.log(msg);
//     }).catch((msg)=>{
//       console.log(msg);
//     })
//   }).catch((msg)=>{
//       console.log(msg);
//     })
// }).catch((msg)=>{
//       console.log(msg);
//     });

// let promiseall=Promise.all([roomclean,removeGarbage,getThePrice]);
// promiseall.then((msg)=>{
//   console.log(msg);
// }).catch((msg)=>{
//   console.log(msg);
// });

//promise.race()

//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 2 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 1 * 1000);
// });

// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(value => console.log(`Resolved: ${value}`));

//fetch() examples

// const url="https://restcountries.com/v2/all";
// fetch(url).then((response)=>response.json()).then((data) => {
//   console.log(data[104].name);
// }).catch((error) => console.log(error));

//fetch api

// function myCat(){
//   const url1="https://aws.random.cat/meow";
//   fetch(url1).then((response) => response.json()).then((data)=>{
//     document.querySelector("#demo1").innerHTML=`<img src="${data.file}" alt="cat image" width="200" height="200">`;
//   }).catch((error) => document.querySelector("#demo").innerHTML=error);
// }
// function myDog(){
//   const url2="https://dog.ceo/api/breeds/image/random";
//   fetch(url2).then((response) => response.json()).then((data)=>{
//     document.querySelector("#demo2").innerHTML=`<img src="${data.message}" alt="dog image" width="200" height="200">`;
//   }).catch((error) => document.querySelector("#demo2").innerHTML=error);
// }

// Covid data handling functions

// function covidData(){
//     fetch("https://api.covid19api.com/summary").then((response) => response.json()).then((data)=>{
//       document.querySelector("#display").innerHTML=
//       `Country	:${data.Countries[76].Country}<br>
//       TotalConfirmed:${data.Countries[76].TotalConfirmed}<br>
//       TotalDeaths:${data.Countries[76].TotalDeaths}<br>
//       TotalRecovered: ${data.Countries[76].TotalRecovered}<br>
//       Date:${data.Countries[76].Date}`;
//     }).catch((error) => document.querySelector("#display").innerHTML=error);
//   }

// displaying json data in table using fetch


let data_btn = document.querySelector("#data_btn");
let displayData = document.querySelector("#display_data");
data_btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      return getData(data);
      
    })
    .catch((error) => {
      displayData.innerHTML = error;
    });
});

function getData(data) {
    displayData.innerHTML="";
  let table = document.createElement("table"); 
  data.forEach((data)=>{
      
    let row = table.insertRow();

    let Name = row.insertCell();
    Name.innerHTML = data.name;

    let address=row.insertCell();
    address.innerHTML=data.address.city;

    let phonenum = row.insertCell();
    phonenum.innerHTML = data.phone;

    let mailId = row.insertCell();
    mailId.innerHTML = data.email;

    // console.log(table);
    // console.log(data);
    
      });
 displayData.appendChild(table);
 
}

