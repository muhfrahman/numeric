function setUpEvents(){
    const btnburger = document.querySelector(".burger");
    const menuNav = document.querySelector(".menu-nav");
    const layer1 = document.querySelector("#layer1");
    const layer2 = document.querySelector("#layer2");
    const layer3 = document.querySelector("#layer3");

    menuNav.style.display = "none";
    btnburger.addEventListener("click",function(){
        if(menuNav.style.display== "none"){
            showMenu();
        } else if(menuNav.style.display == "flex"){
            hideMenu();
        }
    });
    
    
    function showMenu(){
        menuNav.style.display = "flex";
        menuNav.style.animation = "showMenu 0.5s forwards";
        layer1.style.animation = "transformBurger1 0.5s forwards";
        layer2.style.animation = "transformBurgers 0.2s forwards";
        layer3.style.animation = "transformBurger2 0.5s forwards";

        //Final form
        layer1.style.position = "absolute";
        layer1.style.top = "1.78em";
        layer1.style.transform = "rotate(45deg)";

        layer3.style.position = "absolute";
        layer3.style.bottom = "1.78em";
        layer3.style.transform = "rotate(-45deg)";
    }
    function hideMenu(){
        menuNav.style.animation = "hideMenu 0.5s forwards";
        
        setTimeout(function(){menuNav.style.display = "none"},500);

        layer1.style.animation = "returnBurger1 0.5s forwards";
        layer2.style.animation = "returnBurgers 0.2s forwards";
        layer3.style.animation = "returnBurger2 0.5s forwards";

        //Final form
        layer1.style.position = "block";
        layer1.style.top = "0.85em";
        layer1.style.transform = "rotate(45deg)";

        layer3.style.position = "block";
        layer3.style.bottom = "0.85em";
        layer3.style.transform = "rotate(-45deg)";

    }
}

window.onload = function() {
    setUpEvents();
};
    