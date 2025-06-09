let entered = false;
let musicPlaying = false;

function enterSite() {
    if (entered) return;
    entered = true;

    const intro = document.getElementById("intro");
    intro.classList.add("hidden");

    document.getElementById("content").style.display = "flex";
    document.getElementById("music-icon").style.display = "block";

    const audio = document.getElementById("music");
    audio.play().then(() => {
        musicPlaying = true;
        updateMusicIcon();
    }).catch((err) => {
        console.log("Autoplay bloccato dal browser:", err);
    });

    setTimeout(() => {
        intro.style.display = "none";
    }, 500);
}

function toggleMusic() {
    const audio = document.getElementById("music");
    musicPlaying = !musicPlaying;

    if (musicPlaying) {
        audio.play();
    } else {
        audio.pause();
    }

    updateMusicIcon();
}

function updateMusicIcon() {
    const icon = document.getElementById("music-icon");
    icon.src = musicPlaying
        ? "assets/other/images/musicon.svg"
        : "assets/other/images/musicoff.svg";
}

const rainContainer = document.getElementById("rain-container");
let counter = 100;
for (let i = 0; i < counter; i++) {
    let hr = document.createElement("hr");
    if (i === counter - 1) {
        hr.className = "thunder";
    } else {
        hr.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        hr.style.animationDuration = 0.4 + Math.random() * 0.7 + "s";
        hr.style.animationDelay = Math.random() * 25 + "s";
    }
    rainContainer.appendChild(hr);
}
