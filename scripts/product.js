// import navbar
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
});

let organizationList = [
  {
    image:
      "https://sharp.services.greenhouse.io/production/ACLU-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=e197646c7c13cfa97b3ff02f980d48a78ec471e196c4c6bc74b2d8e797812aec",
    title: "ACLU",
    desc: "The ACLU is dedicated to realizing the promise of the United States Constitution for all and expanding the reach of its guarantees.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/Asian-Pride-Project-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=bad683a186893b441cfb18878fbdf59f73228b3a954d7b33e9dad6c91600023e",
    title: "Asian Pride Project",
    desc: "Asian Pride Project celebrates the journeys, triumphs and struggles of LGBTQ individuals and our Asian and Pacific Islander (API) families and communities.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/GLSEN-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=d0bff10d7cb98134bbfa56db555c5dd4cc7c29a6210ae5e21b48bfb66f330200",
    title: "GLSEN",
    desc: "GLSEN works to ensure that LGBTQ students are able to learn and grow in a school environment free from bullying and harassment.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/GMHC-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=82366379c336e04a0c2f5ed6cb2c538f9c303c64ee09259930984605ef90ff46",
    title: "GMHC",
    desc: "GMHC ﬁghts to end the AIDS epidemic and uplift the lives of all affected.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/HRC-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=972c3e3d439ee0804f52f6a6154ecbb8e7fec00d719831aaa1f932104ae25e00",
    title: "HRC",
    desc: "The HRC envisions a world where every member of the LGBTQ family has the freedom to live their truth without fear, and with equality under the law.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/It-gets-better-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=c0c51a97c0e7d1e9a09978c5b357dcb73c6e83ea3cef288aeaf3f1483e95f193",
    title: "It Gets Better",
    desc: "The It Gets Better Project’s mission is to uplift, empower, and connect LGBTQ+ youth around the globe.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/LGBTQ-Victory-Fund-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=42c1a516fb77e8aa2a0d52cc04f75e50cde6cadecdbb62dde03fd5aaf2eb863f",
    title: "LGBTQ Victory Fund",
    desc: "The LGBTQ Victory Fund is the only national organization dedicated to electing openly LGBTQ people who can further equality at all levels of government.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/Lost-n-Found-Youth-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=aaec62821c1b64c685526984ab6db0e7f1dcb9cf193d67c2af542498f4c3926a",
    title: "Lost-n-Found Youth",
    desc: "Lost-n-Found Youth is an Atlanta-based nonprofit that exists to end homelessness for LGBTQ and all sexual minority youth.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/Point-Foundation-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=ffc4ceb67ff595f9f6f20b00ef34e819ef0bc08043b46030ac58a9dad01580af",
    title: "Point Foundation",
    desc: "Point Foundation empowers promising LGBTQ+ students to achieve their full academic and leadership potential to make a significant impact on society.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/National-Center-for-Transgender-Equality-logo-2.png?auto=format&fit=max&lossless=true&q=90&w=640&s=1fa3a664a48d4c52718c0a36d7c1156a2fbe1fc66294a1dbc78f2547cad2ccf7",
    title: "National Center for Transgender Equality",
    desc: "The National Center for Transgender Equality advocates to change policies and society to increase understanding and acceptance of transgender people.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/Pride-Fund-to-End-Gun-Violence-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=ebe2fedc114eae47a9a35d8a3549ffb245374eed4f2beb94b4d2e9fff9b60f47",
    title: "Pride Fund to End Gun Violence",
    desc: "Pride Fund to End Gun Violence is a Political Action Committee (PAC) that supports candidates who will act on sensible gun policy reforms while championing LGBTQ safety and equality.",
  },
  {
    image:
      "https://sharp.services.greenhouse.io/production/Q-Center-logo.png?auto=format&fit=max&lossless=true&q=90&w=640&s=b9b9ccf705c1cb90e8608d328b7e79701338868b4a23fa248725dfe693580478",
    title: "Q Center",
    desc: "Q Center’s mission is to provide safe spaces, community building and empowerment for the positive transformation of LGBTQ+ communities and allies in the Pacific Northwest.",
  },
];

let organization_data = document.getElementById("organization_list");

organizationList.map((element) => {
  let company_data = document.createElement("div");
  company_data.setAttribute("id", "company_data");

  let organization_image_box = document.createElement("div");
  organization_image_box.setAttribute("id", "organiztion_image");

  let image = document.createElement("img");
  image.setAttribute("id", "company_image");
  image.src = element.image;

  organization_image_box.append(image);

  let company_info_box = document.createElement("div");
  company_info_box.setAttribute("id", "company_info");

  let company_name = document.createElement("h3");
  company_name.setAttribute("id", "company_name");
  company_name.innerText = element.title;

  let company_description = document.createElement("p");
  company_description.setAttribute("id", "company_description");
  company_description.innerText = element.desc;

  let help_link = document.createElement("p");
  let anchor = document.createElement("a");
  anchor.setAttribute("id", "help_link");
  anchor.innerText = "How to help";
  help_link.append(anchor);

  company_info_box.append(company_name, company_description, help_link);

  company_data.append(organization_image_box, company_info_box);

  organization_data.append(company_data);
});


import footer from "../components/footer.js";

document.getElementById("foot").innerHTML=footer();