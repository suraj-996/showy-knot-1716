import navbar from "../components/navbar.js";

document.getElementById('navbar').innerHTML=navbar();



let show1=document.getElementById("show1")
let show2=document.getElementById("show2")
let show3=document.getElementById("show3")
let show4=document.getElementById("show4")
let i=0;
let nav1=document.getElementById("nav1");
let nav2=document.getElementById("nav2");
let nav3=document.getElementById("nav3");
let nav4=document.getElementById("nav4");
show1.addEventListener("click", () => {
    
    if(i%2==0){
        nav1.style.display="block"
        nav2.style.display="none"
        nav3.style.display="none"
        nav4.style.display="none"
        i++
    }else{
        nav1.style.display="none"
        i++
    }
})

show2.addEventListener("click", () => {
  
    if(i%2==0){
        nav2.style.display="block"
        nav1.style.display="none"
        nav3.style.display="none"
        nav4.style.display="none"
        i++
    }else{
        nav2.style.display="none"
        i++
    }
})

show3.addEventListener("click", () => {
   
    if(i%2==0){
        nav3.style.display="block"
        nav2.style.display="none"
        nav1.style.display="none"
        nav4.style.display="none"
        i++
    }else{
        nav3.style.display="none"
        i++
    }
})

show4.addEventListener("click", () => {

    if(i%2==0){
        nav4.style.display="block"
        nav2.style.display="none"
        nav3.style.display="none"
        nav1.style.display="none"
        i++
    }else{
        nav4.style.display="none"
        i++
    }
})


let search_btn=document.getElementById("search-btn")
search_btn.addEventListener("click", () => {
    window.location.href="search.html"
})


import footer from "../components/footer.js";

document.getElementById("foot").innerHTML=footer();