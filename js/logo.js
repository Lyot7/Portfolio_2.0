let currentMousePos = { x: -1, y: -1 };
let throttle = false;

document.addEventListener("mousemove", function (e) {
  if (!throttle) {
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;
    throttle = true;
    setTimeout(() => (throttle = false), 100); // Update mouse position every 100ms
  }
});

const un = document.querySelector(".un");
const deux = document.querySelector(".deux");
const trois = document.querySelector(".trois");

function animate() {
  if (un && deux && trois) {
    const moveRateX = (window.innerWidth / 2 - currentMousePos.x) * 0.05;
    const moveRateY = (window.innerHeight / 2 - currentMousePos.y) * 0.05;

    const moveRateXUn = (window.innerWidth / 2 - currentMousePos.x) * 0.025;
    const moveRateYUn = (window.innerHeight / 2 - currentMousePos.y) * 0.025;

    const moveRateXTrois = (window.innerWidth / 2 - currentMousePos.x) * 0.1;
    const moveRateYTrois = (window.innerHeight / 2 - currentMousePos.y) * 0.1;

    // Calculate rotation for all elements
    const rotateRateX = (window.innerHeight / 2 - currentMousePos.y) * 0.05; // Halved multiplier
    const rotateRateY = (window.innerWidth / 2 - currentMousePos.x) * -0.05; // Halved multiplier

    un.style.transform = `translate3d(${moveRateXUn}px, ${moveRateYUn}px, 0) rotateX(${rotateRateX}deg) rotateY(${rotateRateY}deg)`;
    deux.style.transform = `translate3d(${moveRateX}px, ${moveRateY}px, 0) rotateX(${rotateRateX}deg) rotateY(${rotateRateY}deg)`;
    trois.style.transform = `translate3d(${moveRateXTrois}px, ${moveRateYTrois}px, 0) rotateX(${rotateRateX}deg) rotateY(${rotateRateY}deg)`;
  }

  requestAnimationFrame(animate);
}

animate();
