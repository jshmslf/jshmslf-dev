document.addEventListener('DOMContentLoaded', () => {
    const dot = document.getElementById('cursor-dot');
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const speed = 0.1;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;
        dot.style.left = `${currentX}px`;
        dot.style.top = `${currentY}px`;
        requestAnimationFrame(animate);
    }

    animate();
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");

// Select both normal and reversed marquee contents
const marqueeContent = document.querySelector("ul.marquee-content:not(.rev)");
const marqueeContentRev = document.querySelector("ul.marquee-content.rev");

// Set the number of elements based on one of them
root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// Clone elements for the normal marquee
for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Clone elements for the reversed marquee
for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContentRev.appendChild(marqueeContentRev.children[i].cloneNode(true));
}

