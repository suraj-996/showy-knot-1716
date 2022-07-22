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

import footer from "../components/footer.js";

document.getElementById("foot").innerHTML=footer();



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
    const url = `https://script.google.com/macros/s/AKfycbwwseQXN0N_pwhpbi9GNjJlA2IWKmN02Vk7UDiuCGZB8QxBW07eSUelmHi9sn00LLf-/exec?title=${query}`;
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
let cont=document.getElementById("job_data");
let query=document.getElementById("search_input").value;
search.addEventListener("keypress", function(event){
    if(event.key=="Enter"){
        event.preventDefault()
        let q=search.value;
        const url = `https://script.google.com/macros/s/AKfycbzzFPhfhPFcmq-bjlqN5bTZKbVAJIN0kf5M3EpEXfkd-nwE7OfsA1kNlQblS-SI5auW/exec?title=${q}`;
        getData1(url).then((res)=>{
            console.log(res)
            append1(res, cont)
        })
        let container=document.getElementById("search_result");
        container.style.height="0px";
        return container.innerHTML="";
    }
})

const url1 = `https://script.google.com/macros/s/AKfycbzvDB8lXFBN-yoNKxcK_xQUB7wXg8ct0pemezOaY4tmWwefxCsL4JR4xDibE-eq9ZRT/exec`;
getData1(url1).then((res)=>{
    console.log(res)
    append1(res, cont)
})

let append1=(data,cont) => {
    cont.innerHTML="";
    data.forEach(({title,salary,experience,location,role})=>{
        let div=document.createElement("div");
        let h3=document.createElement("p");
        h3.innerText=title;
        let p=document.getElementById("career");
        p.innerText="Careers";
        let p1=document.createElement("p");
        p1.innerText=`Salary: ${salary}`;
        let p2=document.createElement("p");
        p2.innerText=`Experience: ${experience}`;
        let p3=document.createElement("p");
        p3.innerText=`${location}`;
        let p4=document.createElement("p");
        p4.innerText=`Role: ${role}`;
        let des=document.createElement("p");
        des.innerText="Reporting directly to the Sales Director, EMEA, you will build and lead one of the most competitive divisions of our sales organization. You will strategically coach our team and work hands on with Account Executives to get the job done. You will also be a major driver of performance, coaching, and internal mobility for your team. You will be responsible for the success of our sales organization and the success of our company.";
        div.append(h3,p3,des);
        cont.append(div);
    })
}

document.getElementById("integ").innerHTML=` <p class="int">Integrations</p>
<div id="integration">
    
    <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/4pqWUglAo5AEmYFEPh7V9wDEcnvaI3eE_b-pYknKBkM/440x97.png" alt="">
        </div>
        <div class="para">
            <p>ZipRecruiter</p>
            <p>ZipRecruiter is a leading provider of job search and hiring services. We help companies find the right candidates and hire the right people.</p>
        </div>
    </div>
   
   <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/Q7mvf58sFpedHnogBQtv9jfCTKCP0cB0POrWekPwQ1k/360x160.png" alt="">
        </div>
        <div class="para">
            <p>Passion Placement</p>
        <p>A niche job board that connects people focused on building a sustainable, animal free food system.</p>
        </div>
   </div>
   <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/8uRVh1Wamk_WdplvQVCB7WlKoZGTsCrGJ_WKN9FqKgk/205x56.png" alt="">
        </div>
        <div class="para">
            <p>VentureFizz</p>
        <p>VentureFizz helps tech companies in the Boston area hire great talent through our BiZZpages and Job Board</p>
        </div>
   </div>
   <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/F9yjVenlzvYODVGooJUHjpUQ7JjhPcLz-JDQg4FJrb8/444x116.png" alt="">
        </div>
        <div class="para">
            <p>Indeed</p>
        <p>As the world's #1 site, Indeed helps millions of job seekers and employers find the right fit.</p>
        </div>
   </div>
   <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/Yo4Gs4FF_osRmgHS1Pxf28jI9Aseq6Y4kH2peYBtBBs/600x434.png" alt="">
        </div>
        <div class="para">
            <p>Grit Hp</p>
        <p>As the job site for hospitality, Grit creates a virtual recruiting experience between job seekers and employers. Levering solutions like employer branding and job advertising products, Grit uses creative tactics to find the right candidates.</p>
        </div>
   </div>
   <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/onQQJ5LI8k2-D2RW2P5NcAg6iwUqd8nMAfRZKS7g4Sw/300x70.png" alt="">
        </div>
        <div class="para">
            <p>CreativeGuild</p>
            <p>Unlimited job postings to our global community or designers, engineers, marketers, and managers.</p>
        </div>
   </div>
   <div id="integration_result">
        <div>
            <img src="https://a.mktgcdn.com/p/ubA6e7Q9Gcih25ZOdnu4j61-Wyz39pnRARk_ohVgVOo/600x119.png" alt="">
        </div>
        <div class="para">
            <p>Glassdoor</p>
        <p>Employer branding and job advertising products, which help employers recruit top talent faster.</p>
        </div>
   </div>
   <div id="integration_result">
    <div>
        <img src="https://a.mktgcdn.com/p/sDP2kgJf1lI9aSxhB5mo1zk0NY8dQNn2RUb4Gwhacks/205x41.png" alt="">
    </div>
    <div class="para">
        <p>DiversityJobs</p>
        <p>Post your jobs on DiversityJobs.com and our network of niche job sites to reach women, military veterans, African Americans, Hispanics, Asians, people with disabilities, members of the LGBT community and other minority groups.</p>
        
    </div>
</div>`