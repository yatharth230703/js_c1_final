// 4 pillars of DOM 

// selection of an element 
// changing HTML 
// changing CSS 
// event listener 
 
//selecting an HTML element within a document 

//document.querySelector("h1")
//document.querySelector("#box") // search by ID
//document.querySelector(".box") // search by class


//var a = document.querySelector("h1")
//console.log(a)
// now h1 is available for manipulation 

//a.innerHTML  = "hi"

//change CSS
//a.style.color= "red"

//a.style.backgroundColor = "green"


//event listener 
// var a = document.querySelector("h1")
// a.innerHTML = "Kaise ho aaplog"
// a.style.color = "yellow"
// a.style.backgroundColor ="green"

// a.addEventListener("click",function(){
//     a.style.backgroundColor = "red"
// })

a= document.querySelector("#bulb")
a.style.backgroundColor = "red"
button = document.querySelector("button")
button.addEventListener("click",function(){
    if(a.style.backgroundColor=="red"){
        a.style.backgroundColor="yellow";
    }
    else{
        a.style.backgroundColor="red"
    }
})


