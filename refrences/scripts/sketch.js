function logoPopup(){
  document.getElementsByClassName("LogoPopupCls")[0].style.opacity = "1";
  document.getElementsByClassName("LogoPopupCls")[0].style.transform = "translateY(32vh)";

    setTimeout(() => {
        document.getElementsByClassName("LogoPopupCls")[0].style.scale = "0.75";
        document.getElementsByClassName("Name")[0].style.transform = "translateY(15vh)";
        document.getElementsByClassName("Name")[0].style.opacity = "1";
    }, 2000);

    setTimeout(() => {
        document.body.style.overflow = "scroll";
        document.body.style.overflowX = "hidden";
        
        document.getElementsByClassName("LogoPopupCls")[0].style.scale = "0.40";
        document.getElementsByClassName("LogoPopupCls")[0].style.top = "-50px";
        document.getElementsByClassName("LogoPopupCls")[0].style.transform = "translateX(-110vw)";

        document.getElementsByClassName("Name")[0].style.scale = "0.7";
        document.getElementsByClassName("Name")[0].style.top = "-230px";
        document.getElementsByClassName("Name")[0].style.transform = "translateX(-38vw)";
    }, 5850);

    setTimeout(() => {
        document.getElementsByClassName("topnav")[0].style.height = "150px";
        document.getElementsByClassName("topnav")[0].style.borderBottom = "3px solid rgb(0, 53, 0)";
    }, 7500);

    setTimeout(() => {
        document.getElementById("mySideNavBtn").style.opacity = "1";
        document.getElementById("main").style.opacity = "1";

    }, 8000);

}

