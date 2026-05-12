  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

// Text scramble effect for elements with .Explore class
document.querySelectorAll(".Explore, .Texting").forEach(element => {
    element.onmouseover = event => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
});

/**
 * Changes the background image and text of the skills section
 * @param {string} imageName - Path to the image
 * @param {string} text - Description text
 */
function changeImage(imageName, text) {
    const skillsSection = document.querySelector('.My_Skills');
    const detailsText = document.querySelector('#Details');

    if (skillsSection) {
        skillsSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imageName})`;
        skillsSection.style.transition = 'background-image 0.8s ease';
    }

    if (detailsText) {
        detailsText.style.opacity = '0';
        setTimeout(() => {
            detailsText.innerHTML = text;
            detailsText.style.opacity = '1';
        }, 250);
        detailsText.style.transition = 'opacity 0.3s ease';
    }
}

// Custom Cursor Smoothness - Handled by Kinet in index.html
