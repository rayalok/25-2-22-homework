// start img slider 

let slideIndex = 0;
showSlides();

function showSlides() {
 let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}


// start accordion


let btn=document.querySelectorAll('.alok-btn');

let acc_text=document.querySelectorAll('.alok-body');

let arr=document.querySelectorAll('.arrow');

function khalok(btn_num) {
    arr[btn_num].classList.toggle('up');
    acc_text[btn_num].classList.toggle('acc-show');
    btn[btn-num].classList.toggle('active');
}

// end accordion

