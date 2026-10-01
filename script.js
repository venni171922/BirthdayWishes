function showWish() {

    const wish = document.getElementById("wish");

    wish.classList.remove("hidden");

    createConfetti();
}


function createConfetti() {

    const emojis = ["🎉", "🎊", "💖", "💕", "✨", "🎈", "🥳"];

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2 + Math.random() * 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}