form=document.querySelector("form")
let userData=JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function(event){
event.preventDefault();

let data={
    email:form.email.value,
    password:form.password.value,
}

if(checkSignin(data.email,data.password)===true){
    localStorage.setItem("signin",JSON.stringify(data));
    alert("login successful")
    // console.log(data)
    window.location.href="index.html"
}else{
    alert("wrong Username or Password")
}

})

function checkSignin(email,password){
    let filter=userData.filter(function(el){
        return el.email === email && el.password === password;
    })

    if(filter.length>0){
        return true;
    }else{
        return false;
    }
}