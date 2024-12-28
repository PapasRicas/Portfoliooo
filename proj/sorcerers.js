const imgSorcerer2 = `<img src="img/sorcerer/2.png" style="border: 2px solid #00FF00; border-radius: 5px; width: 200px;">`;
const imgSorcerer1 = `<img src="img/sorcerer/1.png" style="border: 2px solid #00FF00; border-radius: 5px; width: 200px;">`;
const imgSorcerer3 = `<img src="img/sorcerer/3.png" style="border: 2px solid #00FF00; border-radius: 5px; width: 200px;">`;

const imgSorcererRow1 = imgSorcerer2 + imgSorcerer1 + imgSorcerer3;

const imgSorcererRow = `
<div class="img-container">
    ${imgSorcererRow1}
</div>`;

const sorcererLink = 'https://play.google.com/store/apps/details?id=com.SpellBound.SorcerersSlip&hl=en_US';

export const sorcerersProjName = `Sorcerers Slip`;

export const sorcererProj = `
    --Sorcerer's Slip<br>
    <br>
    Sorcerer's Slip is an infinite faller game where players control a sorcerer dodging obstacles like floating rocks, giant eyes, and bats while collecting power-ups. 
    Developed in one week, the game features pixelated graphics, fast-paced gameplay, and a magical theme.
    <br>
    In this project, I programmed the entire game, handling all aspects of development, including the core gameplay mechanics, collision detection, power-ups, and enemy behaviors. 
    The only exception was the sound implementation, which was managed by another team member. 
    <br>
    The game was designed to become increasingly difficult as players fall deeper, and I also integrated upgrade systems to enhance player survival.
    ${imgSorcererRow}<br>
    I'm really proud of how this project came together, and I look forward to seeing others enjoy the fast-paced, magical adventure we created!
    `;

            /*<p><a href="${sorcererLink}" target="_blank" style="color: yellow;">Get it now!!</a></p>`;*/