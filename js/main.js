const searchingBook = () =>{
    let btn = document.getElementById('cta-btn');
    let overlay = document.getElementById('overlay');

    btn.addEventListener('click', () => {
        overlay.style.display = 'grid';
        overlay.classList.add('animate-overlay')
    })

    delay(3000).then(() => {
        let overlay1 = document.getElementById('overlay');
        overlay1.style.display = "none";
    })

    location.href = "../UltimateBook.html";
    
}

function navSlide() {
    let burger = document.getElementById('burger');
    let nav = document.getElementById('nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        console.log(index)
        if(link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
        }
    });

    burger.classList.toggle('toggle');
}


// const app = () => {
//     navSlide();
//     // searchingBook();
    
// }


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

function test(){
    alert("Something")
}