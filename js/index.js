 var isopen = false;
 var sidebar = document.getElementById("sidebar");
 var ham = document.getElementById("ham");
 var sidebarLinks = document.getElementsByClassName("sidebar-links");
 ham.addEventListener("click", function () {
     //open sidebar 
     if (isopen == false) {
         sidebar.style.left = "0px";
         ham.src = "img/icons8-delete-50.png";
         isopen = true;
     }
     //closed sidebar
     else {
         sidebar.style.left = "-200px";
         ham.src = "img/icons8-menu-filled.svg";
         isopen = false;
     }
 });
 //closing sidebar when link is clicked
 for (var i = 0; i < sidebarLinks.length; i++) {
     sidebarLinks[i].addEventListener("click", function () {
         sidebar.style.left = "-200px";
         isopen = false;
         ham.src = "img/icons8-menu-filled.svg";
     });
