const videoSettings = `<video loop controls controlsList="nodownload" allowfullscreen>`;
const imageSettings = `style="border: 2px solid #00FF00; border-radius: 5px; width: 600px;">`;

const ragImg1 = `<img src="img/Misc/ra1.png"` + imageSettings;
const ragImg2 = `<img src="img/Misc/ra2.png"` + imageSettings;
const ragImg3 = `<img src="img/Misc/ra3.png"` + imageSettings;

const ragImgoll = ragImg1 + ragImg2 + ragImg3;

const ragImgRollContainer = `
<div class="img-container">
    ${ragImgoll}
</div>`;

const ragFullGameplay = videoSettings + `<source src="vid/Misc/ragdollGame.mp4" type="video/mp4"></video>`;

const ragFullGameplayContainer = `
<div class="video-container">
    ${ragFullGameplay}
</div>`

export const ragProjName = `Ragdoll`;

export const fullRagProject = `
    --Ragdoll<br>
    <br>

    In my second university project, I took on the complete responsibility for designing and developing a unique half ragdoll character. This character not only moves with ragdoll physics but also interacts with the environment by grabbing and throwing objects, creating engaging puzzles for players to solve.<br>

    <br>I completed the project a full week ahead of the deadline, showcasing my efficiency and dedication. My approach was methodical; I focused on the gameplay mechanics, ensuring the character’s controls were intuitive and responsive. I also integrated various challenges into the levels, emphasizing puzzle-solving elements that enhance player experience.<br>

    <br><br>${ragImgRollContainer}

    <br>Take a moment to explore this quirky puzzle game that showcases the innovative design of the ragdoll character and the intricate puzzles I've created. It’s a reflection of my hard work and passion for game development.<br>

    <br><br>${ragFullGameplayContainer}

    <br>I hope you enjoy it as much as I enjoyed creating it ahead of schedule!

    <br>`;
