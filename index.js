  document.querySelector("#random").onclick=()=>{
    // document.querySelector("#random").style.backgroundColor="red"
    document.getElementsByClassName("math")[0].style.display="none"
  document.getElementsByClassName("year")[0].style.display="none"
  document.getElementsByClassName("date_month")[0].style.display="none"
  document.getElementsByClassName("trivia")[0].style.display="none"
  document.getElementsByClassName("text")[0].style.display="none"
  }
  
  document.querySelector(".randombtn").onclick=()=>{
    



    document.getElementsByClassName("text")[0].style.display="block"
    randomdata=document.querySelector("#random").value;
    console.log(randomdata);
    

const url = `https://numbersapi.p.rapidapi.com/random/${randomdata}?min=10&max=20&fragment=true&json=true`;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'ef3c46555fmsh4aa67f14bd9ac02p19f56ajsna3c159f2941a',
'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
}
};
fetch(url,options).then((val)=>{
return val.json()
}).then((val)=>{
console.log([val]);
document.querySelector(".text").innerHTML=val.text;

// i added here
document.querySelector("#random").value="";

   })   
}


let mnt=document.querySelector(".almath")
mnt.addEventListener("click",()=>{

  document.getElementsByClassName("math")[0].style.display="block"
  document.getElementsByClassName("year")[0].style.display="none"
  document.getElementsByClassName("date_month")[0].style.display="none"
  document.getElementsByClassName("trivia")[0].style.display="none"
  document.getElementsByClassName("text")[0].style.display="none"


 let inp=document.querySelector(".math").style.visibility= "visible"
 let txt=document.querySelector(".text").style.visibility= "visible"
 let imgg=document.querySelector("#img1").onclick =() => {
  document.getElementsByClassName("text")[0].style.display="block"
      usermathdata= document.getElementById("math1").value;
      console.log(usermathdata)  
      
// i added here
document.getElementById("math1").value="";


const url = `https://numbersapi.p.rapidapi.com/${usermathdata}/math?fragment=true&json=true`;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'ef3c46555fmsh4aa67f14bd9ac02p19f56ajsna3c159f2941a',
'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
}
};

fetch(url,options).then((val)=>{
return val.json()
}).then((val)=>{
console.log([val]);
document.querySelector(".text").innerHTML=val.text;

   })   




 }
})

let alyear=document.querySelector(".alyear")
alyear.addEventListener("click",()=>{
    document.getElementsByClassName("math")[0].style.display="none"
document.getElementsByClassName("year")[0].style.display="block"
  document.getElementsByClassName("date_month")[0].style.display="none"
  document.getElementsByClassName("trivia")[0].style.display="none"
  document.getElementsByClassName("text")[0].style.display="none"


   let inp=document.querySelector(".year").style.visibility= "visible"
   let txt=document.querySelector(".text").style.visibility= "visible"
   let imgg=document.querySelector("#img2").onclick =()=>{
    document.getElementsByClassName("text")[0].style.display="block"
    yeardata=document.getElementById("year1").value;
        console.log(yeardata);
  
        // i added here
document.getElementById("year1").value="";


        const url = `https://numbersapi.p.rapidapi.com/${yeardata}/year?fragment=true&json=true`;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'ef3c46555fmsh4aa67f14bd9ac02p19f56ajsna3c159f2941a',
'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
}
};

fetch(url,options).then((val)=>{
return val.json()
}).then((val)=>{
console.log([val]);
document.querySelector(".text").innerHTML=val.text;

   })
   }
})

let almonth=document.querySelector(".almonth")
almonth.addEventListener("click",()=>{

    document.getElementsByClassName("math")[0].style.display="none"
document.getElementsByClassName("year")[0].style.display="none"
  document.getElementsByClassName("date_month")[0].style.display="block"
  document.getElementsByClassName("trivia")[0].style.display="none"
  document.getElementsByClassName("text")[0].style.display="none"

   let inp=document.querySelector(".date_month").style.visibility= "visible"
   let txt=document.querySelector(".text").style.visibility= "visible"
   let imgg=document.querySelector("#img3").onclick=()=>{
    document.getElementsByClassName("text")[0].style.display="block"
    userdatadate=document.getElementById("date1").value;
    userdatamonth=document.getElementById("month1").value;

    console.log(userdatadate);
    console.log(userdatamonth);

    document.getElementById("date1").value="";
    document.getElementById("month1").value=""


    const url = `https://numbersapi.p.rapidapi.com/${userdatamonth}/${userdatadate}/date?fragment=true&json=true`;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'ef3c46555fmsh4aa67f14bd9ac02p19f56ajsna3c159f2941a',
'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
}
};

fetch(url,options).then((val)=>{
return val.json()
}).then((val)=>{
console.log([val]);
document.querySelector(".text").innerHTML=val.text;

   })
   
}})

let trivia=document.querySelector(".altrivia")

trivia.addEventListener("click",()=>{
    
    document.getElementsByClassName("math")[0].style.display="none"
document.getElementsByClassName("year")[0].style.display="none"
  document.getElementsByClassName("date_month")[0].style.display="none"
  document.getElementsByClassName("trivia")[0].style.display="block"
  document.getElementsByClassName("text")[0].style.display="none"

   let inp=document.querySelector(".trivia").style.visibility= "visible"
   let txt=document.querySelector(".text").style.visibility= "visible"

  let imgg=document.querySelector("#img4").onclick=()=>{
    document.getElementsByClassName("text")[0].style.display="block"
    usertriviadata=document.getElementById("trivia1").value;

    document.getElementById("trivia1").value=""

const url = `https://numbersapi.p.rapidapi.com/${usertriviadata}/trivia?fragment=true&notfound=floor&json=true`;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'ef3c46555fmsh4aa67f14bd9ac02p19f56ajsna3c159f2941a',
'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
}
};
fetch(url,options).then((val)=>{
return val.json()
}).then((val)=>{
console.log([val]);
var te= document.querySelector(".text").innerHTML=val.text;

})

  }
})     


