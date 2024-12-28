const videoSettings = `<video loop controls controlsList="nodownload" allowfullscreen>`;
const imageSettings = `style="border: 2px solid #00FF00; border-radius: 5px; width: 600px;">`;

const ovFullGameplay = `
    <div class="video-container">
        <iframe width="450" height="253" src="https://www.youtube.com/embed/vCkpvKVRW7U?si=qqbQwhj4bDMadiOF" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>`;


const ovAlpha00 = videoSettings + `<source src="vid/Overhaul/Alpha00.mp4" type="video/mp4"></video>`;
const ovAlpha01 = videoSettings + `<source src="vid/Overhaul/Alpha01.mp4" type="video/mp4"></video>`;
const ovAlpha02 = videoSettings + `<source src="vid/Overhaul/Alpha02.mp4" type="video/mp4"></video>`;
const ovMainMenu = videoSettings + `<source src="vid/Overhaul/MainMenu.mp4" type="video/mp4"></video>`;

const ovVideoRow1 = ovAlpha00 + ovAlpha01;
const ovVideoRow2 = ovAlpha02 + ovMainMenu;

const ovVideoRoll1 = `
<div class="video-container">
    ${ovVideoRow1}
</div>`

const ovVideoRoll2 = `
<div class="video-container">
    ${ovVideoRow2}
</div>`

const ovImage1 = `<img src="img/Overhaul/ovKeyArt.png"` + imageSettings;
const ovImage2 = `<img src="img/Overhaul/ovMenu.png"` + imageSettings;

const ovImage3 = `<img src="img/Overhaul/mainmenu.png"` + imageSettings;
const ovImage4 = `<img src="img/Overhaul/optionsmenu.png"` + imageSettings;
const ovImage5 = `<img src="img/Overhaul/levelselector.png"` + imageSettings;
const ovImage6 = `<img src="img/Overhaul/g1.png"` + imageSettings;
const ovImage7 = `<img src="img/Overhaul/g2.png"` + imageSettings;
const ovImage8 = `<img src="img/Overhaul/g3.png"` + imageSettings;
const ovImage9 = `<img src="img/Overhaul/g4.png"` + imageSettings;
const ovImage10 = `<img src="img/Overhaul/g5.png"` + imageSettings;
const ovImage11 = `<img src="img/Overhaul/g6.png"` + imageSettings;
const ovImage12 = `<img src="img/Overhaul/g7.png"` + imageSettings;
const ovImage13 = `<img src="img/Overhaul/g8.png"` + imageSettings;
const ovImage14 = `<img src="img/Overhaul/g9.png"` + imageSettings;

const ovImgRow1 = ovImage1 + ovImage2;

const ovImgRow2 = ovImage3 + ovImage4 + ovImage5 + ovImage6;
const ovImgRow3 = ovImage7 + ovImage8 + ovImage9 + ovImage10;
const ovImgRow4 = ovImage11 + ovImage12 + ovImage13 + ovImage14;

const ovImgRoll1 = `
<div class="img-container">
    ${ovImgRow1}
</div>`;

const ovImgRoll2 = `
<div class="img-container">
    ${ovImgRow2}
</div>`;

const ovImgRoll3 = `
<div class="img-container">
    ${ovImgRow3}
</div>`;

const ovImgRoll4 = `
<div class="img-container">
    ${ovImgRow4}
</div>`;

export const ovProjName = `Overhaul`;

export const fullOvProject = `
    --Overhaul<br>
    <br>

    Welcome to Overhaul, one of my latest projects and definitely the most ambitious one yet. 
    The journey was intense, with tight deadlines and sleepless nights, but the results speak for themselves.
    
    <br><br>As the lead programmer on the project, I was responsible for the majority of the codebase. 
    I developed key systems including the AI for enemy behaviors, the combat system, the save/load system, 
    and handled the user interfaces and audio integration. In short, I programmed almost everything, 
    with the exception of a few components managed by another team member.

    <br><br>One of my main challenges was designing a dynamic and responsive enemy AI, ensuring it adapted to different combat scenarios. 
    The combat system itself was built from scratch to create smooth, engaging gameplay. I also implemented a flexible save system, 
    allowing players to seamlessly save and load their progress across different levels. 
    The user interface, from menus to HUD, was crafted to be intuitive and responsive, while the sound system brought the game’s atmosphere to life.

    <br><br>On top of that, I built custom tools to streamline the development process, including an event system to manage in-game animations and a menu camera system.

    <br><br>Check out the full gameplay video below to see everything in action:

    <br><br>${ovFullGameplay}

    <br><br>Here's a look at some of the earlier stages of the project and the final main menu:

    <br><br>${ovVideoRoll1} ${ovVideoRoll2}

    <br><br>Also, a shoutout to our talented artists, Andrés Arluciaga and Michelle Maldonado, for their stunning artwork:

    <br><br>${ovImgRoll1}

    <br><br>And finally, enjoy these in-game screenshots:

    <br>${ovImgRoll2}<br>${ovImgRoll3}<br>${ovImgRoll4}

    <br>Welcome to Overhaul, a project where all the hard work, sleepless nights, and challenges truly paid off!<br>
    <br>`;
