document.getElementById('clickButton').addEventListener('click', function() {
    // Ndrysho mesazhin
    const message = document.getElementById('message');
    message.textContent = "Mos mle mo seen se tvrava";

    // Shfaq zarfën dhe hap atë
    const envelope = document.getElementById('envelope');
    envelope.style.display = 'block';
    envelope.style.animation = 'envelopeOpen 1s forwards';

    // Shfaq lule dhe zemra
    createFlowerHeart();
});

// Funksioni për krijimin e luleve dhe zemrave
function createFlowerHeart() {
    for (let i = 0; i < 5; i++) {
        var flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "%";
        flower.style.animationDelay = Math.random() * 5 + "s";
        document.querySelector('.flowers').appendChild(flower);

        var heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 5 + "s";
        document.querySelector('.flowers').appendChild(heart);
    }
}