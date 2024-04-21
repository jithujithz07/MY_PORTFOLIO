
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
let interval = null;

document.querySelector(".Explore").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const sectionPositions = [
    document.getElementById("intro").offsetTop,
    document.getElementById("I_do").offsetTop,
    document.getElementById("infome").offsetTop,
  ];
  let currentSectionIndex = 0;
  document.body.style.overflow = 'hidden';

function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
  
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Smooth scroll effect
        });
    }
  }

  function changeImage(imageName,text) {
    var imageContainer = document.querySelector('.My_Skills');
    var texth=document.querySelector('#Details');
   
    imageContainer.style.backgroundImage ='url('+imageName+')';
    imageContainer.style.transition= '1s';
    
        texth.innerHTML= text;
        texth.style.transition= '0.25s';
        
        // if(text=='I do make webpages<br>HTML,CSS,JS')
        // {
        //     texth.style.color='#f1cdcd';
           
        // }
        // if(text=='languages i speak <br> Python, C, Java')
        // {
        //     texth.style.color='#cbf0f7';
        // }
        // if(text=='Made some video edits<br>Capcut')
        // {
        //     texth.style.color='#e9d9b8';
        // }
        
        // if(text=='FRAUD x TOX<br> PC and Mobile')
        // {
        //     texth.style.color='#f5c1c1';
        // }

    }
    
    
    
  

   

  
  