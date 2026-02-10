const envelope = document.getElementById("envelope");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const music = document.getElementById("bgMusic");

// Count down  
const targetDate = new Date("2026-02-14T00:00:00");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setInterval(() => {
        const now = new Date();
        const diff = targetDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(diff % (1000 * 60) / 1000);
        

        document.getElementById("days").textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if(diff <= 0){
            console.log('Time reached!');
            document.querySelector('.countdown').style.display = 'none';
            document.querySelector('.paper-content').removeAttribute('hidden');

            // 🎵 play music safely
            music.play().catch(() => {
                console.log("Music blocked until user interaction");
            });
            return;

        }

        
    }, 1000);

  setTimeout(() => {
    modal.classList.add("show");
  }, 700);
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  envelope.classList.remove("open");
  music.pause();      // optional
  music.currentTime = 0; // optional reset
});