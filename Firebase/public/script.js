let slideIndex = 1;     //initial slide image

const showSlides = (num) => {
    let slides = document.getElementsByClassName("mySlide");    //make an array of all slides with captions, images and text
    let dots = document.getElementsByClassName("dot");  //make an array of dots
    if(num > slides.length) {slideIndex = 1;}   //if current slide is last and user press next then it will move on 1st slide
    if(num < 1) {slideIndex = slides.length;}   //if current slide is 1st and user press prev then it will move on last slide
    for (let i = 0; i < slides.length; i++) {   //make display=none of all slides by using loop
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {     //remove all 'active' classes of every dot by using loop
        dots[i].className = dots[i].className.replace(" active", '');
    }
    slides[slideIndex-1].style.display = "block";   //current slide will be display=block and remaining will be display=none
    dots[slideIndex-1].className += " active";      //assign current slide's dot with a class 'active' + its previous class
}
showSlides(slideIndex);     //calls showSlides() function with argument of slide image index

const moveSlides = num => showSlides(slideIndex += num);    //change slides by clicking on prev/next button (calls showSlides() function and give it an argument)
const slide = num => showSlides(slideIndex = num);      //change slides by clicking on dots (calls showSlides() function and give it an argument)




/* Automatic Slideshow onclick Function */

const autoShow = () => {
    document.getElementById("id1").innerHTML = 'Automatic Slideshow started';
    document.getElementById("id2").innerHTML = "<center>Every image will be automatically slide after 7 seconds</center>";
    let slideIndex = 0;
    const showSlides = () => {
        let slides = document.getElementsByClassName("mySlide");
        let dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", '');
        }
        slideIndex++;
        if(slideIndex > slides.length) {slideIndex = 1;}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 7000)
        dots[slideIndex-1].className += " active";
    }
    showSlides(slideIndex);
}