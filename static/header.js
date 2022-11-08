window.addEventListener("scroll", function(){
    var mainnav=document.querySelector(".ex");
    mainnav.classList.toggle("sticky",window.scrollY>0);
    })
    
   

    function modal() {
        bb=document.querySelector(".modal");
        bb.classList.toggle("show-modal")
        
        }

    function modalclose() {
       
        bb=document.querySelector(".modal");
     
        bb.classList.remove("show-modal");
      
    }
        
    