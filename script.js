const skillsContainer = document.querySelector('.hero-skills');
const skillsList = ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'];
let currentIndex = 0;

function typeSkill() {
    const currentSkill = skillsList[currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        skillsContainer.textContent += currentSkill[charIndex];
        charIndex++;

        if (charIndex === currentSkill.length) {
            clearInterval(typingInterval);
            setTimeout(deleteSkill, 2000);
        }
    }, 100);
}

function deleteSkill() {
    const currentSkill = skillsList[currentIndex];
    let charIndex = currentSkill.length - 1;

    const deletingInterval = setInterval(() => {
        skillsContainer.textContent = currentSkill.slice(0, charIndex);
        charIndex--;

        if (charIndex === -1) {
            clearInterval(deletingInterval);
            setTimeout(nextSkill, 500);
        }
    }, 50);
}

function nextSkill() {
    currentIndex = (currentIndex + 1) % skillsList.length;
    setTimeout(typeSkill, 500);
}

// Start the loop
typeSkill();