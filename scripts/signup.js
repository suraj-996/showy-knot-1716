let form=document.querySelector("form");
let userData=JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function(event){
    event.preventDefault();

    let data={
        name:form.name.value,
        email:form.email.value,
        username:form.username.value,
        mbil:form.mbil.value,
        password:form.password.value,
    }

    if(checkEmails(data.email)===true){
        userData.push(data);
        localStorage.setItem("userData",JSON.stringify(userData));
        alert ("Signup Succefull")
        console.log(userData)
       // window.location.href="login.html";
    }else{
        alert("Account Already Exists Plese Login")
        window.location.href="signin.html"
    }
})

function checkEmails(email){
    let filtered=userData.filter(function(el){
        return email === el.email;
    })
    if(filtered.length > 0){
        return false;
    }else{
        return true;
    }
}