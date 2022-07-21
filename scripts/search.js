// https://script.google.com/macros/s/AKfycbwK0gfnVqywT-K0kLSxevgF8rax2agjZprDMTgEzI3nMVxxbcT4PaRFi5U8brNXvsA/exec
import  navbar  from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()


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

// import footer from "../components/footer.js";

// document.getElementById("foot").innerHTML=footer();



let search = document.getElementById("search_input");
search.addEventListener("input", () => {
    debounce(main,100)
})

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
         
    }
    id=setTimeout(() => {
        func()
    },delay);
}

let main = async() => {
    let query = document.getElementById("search_input").value;
    let data=await getData(query);
    append(data);
}

let getData = async(query) => {
    const url = `https://script.google.com/macros/s/AKfycbwxtsUEBbMFg0x9sgsIODGmHgggio7GQ6wQNbE6Pzz3usr83wgtyFJxnAS_Wo9i3Eh5/exec?title=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    return data.data;
}

let append = (data) => {
    let container=document.getElementById("search_result");
    if(search.value===""){
        container.style.height="0px";
        return container.innerHTML="";
    }
    if(!data){
        container.style.height="0px";
        return container.innerHTML="";
    }else{
        container.style.height="auto";
    }
    container.innerHTML="";
    data.forEach(element => {
        let title=document.createElement("p");
        title.innerHTML=element.title;
        container.append(title);
    })
}

import { getData1 } from "../components/fetch.js";
let cont=document.getElementById("results");
let query=document.getElementById("search_input").value;
search.addEventListener("keypress", function(event){
    if(event.key=="Enter"){
        event.preventDefault()
        let q=search.value;
        const url = `https://script.google.com/macros/s/AKfycbwxtsUEBbMFg0x9sgsIODGmHgggio7GQ6wQNbE6Pzz3usr83wgtyFJxnAS_Wo9i3Eh5/exec?title=${query}`;
        getData1(url).then((res)=>{
            console.log(res)
            append1(res, cont)
        })
    }
})

let append1=(data,cont) => {
    cont.innerHTML="";
    data.forEach(({title,salary,experience,location,role})=>{
        let div=document.createElement("div");
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p1=document.createElement("p");
        p1.innerText=`Salary: ${salary}`;
        let p2=document.createElement("p");
        p2.innerText=`Experience: ${experience}`;
        let p3=document.createElement("p");
        p3.innerText=`Location: ${location}`;
        let p4=document.createElement("p");
        p4.innerText=`Role: ${role}`;
        div.append(h3,p1,p2,p3,p4);
        cont.append(div);
    })
}