const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const welcome = document.getElementById("welcome");
const music = document.getElementById("music");
const magic = document.getElementById("magic");

envelope.addEventListener("click", () => {

    // Play music
    music.play();

    // Hide welcome section
    welcome.style.display = "none";

    // Show letter
    letter.style.display = "flex";

    // Create magical particles
    createMagic();

});

function createMagic(){

    for(let i=0;i<120;i++){

        const particle=document.createElement("div");

        particle.className="particle";

        particle.innerHTML=Math.random()>0.5?"❤️":"✨";

        particle.style.left=Math.random()*100+"vw";

        particle.style.top=Math.random()*100+"vh";

        particle.style.fontSize=(15+Math.random()*25)+"px";

        particle.style.animationDuration=(2+Math.random()*4)+"s";

        magic.appendChild(particle);

    }

}
