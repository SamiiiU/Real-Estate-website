let menubtn = document.querySelector(".icon");

let menu = document.querySelector(".mob-icons");

let check = false;


menubtn.addEventListener("click" , () =>{

    if(check){
    menu.style.transform = "translateY(-350px)";
    menubtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    check = false;
    console.log(check);
    }
    else{
        menu.style.transform = "translateY(0)";
        menubtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        check=true;
        console.log(check);
    }
});