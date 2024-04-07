function toggleSearchBox() {
    var searchBox = document.querySelector('.s-box');
    searchBox.classList.toggle('active'); 
}


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});



function toggleMoreContent() {
    var moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}





var images = document.getElementsByClassName("zoom-image");
Array.from(images).forEach(function(image) {
    image.addEventListener("mouseenter", function() {
        image.classList.add("new");
    });

    image.addEventListener("mouseleave", function() {
        image.classList.remove("new");
    });
});



function validateForm(){

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";

    if(name===""){
        document.getElementById("nameError").innerHTML="name is required"
        return false;
    }
    if(password===""){
        document.getElementById("passwordError").innerHTML="password is required"
        return false;
    }

    // if(email===""){
    //     document.getElementById("emailError").innerHTML="email is required"
    //     return false;
    // }else if(!isvalidEmail(email)){
    //     document.getElementById("textError").innerHTML="valid email format"
    //     return false;
    // }
    alert("Form is valid!");
    return true;
}
function isvalidEmail(email){
 
    var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)

}







