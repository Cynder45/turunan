alert('Selamat Datang :D');
var typed = new Typed(".autotyped", {
    strings: [ "Terima Kasih", "Gak Ada yang mau nanya ?"],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true,
});


menuBtn.onclick= function(){
    if (  sideNav.style.right   == "-250px"){
      sideNav.style.right = "0";
      menu.src="images/close.png"
    }
    else{
       sideNav.style.right = "-250px";
       menu.src="images/menu.png"
    }
  }


   function openImg(element){
    window.open(element.src);
}

