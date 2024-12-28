const videoSettings = `<video loop controls controlsList="nodownload" allowfullscreen>`;
const imageSettings = `style="border: 2px solid #00FF00; border-radius: 5px; width: 600px;">`;

const cirFullGameplay = `
    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8izdKZ8j8F4?si=07Kye_3cOGOPN4Gs" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>`;

const cirAlpha00 = videoSettings + `<source src="vid/Circinus/circinsAlpha.mp4" type="video/mp4"></video>`;

const cirAlphaVideoContainer = `
<div class="video-container">
    ${cirAlpha00}
</div>`

const cirImage1 = `<img src="img/Circinus/ci1.png"` + imageSettings;
const cirImage2 = `<img src="img/Circinus/ci2.png"` + imageSettings;
const cirImage3 = `<img src="img/Circinus/ci3.png"` + imageSettings;
const cirImage4 = `<img src="img/Circinus/ci4.png"` + imageSettings;

const cirImgRow2 = cirImage1 + cirImage2;
const cirImgRow3 = cirImage3 + cirImage4;

const cirImgRoll1 = `
<div class="img-container">
    ${cirImgRow2}
</div>`;

const cirImgRoll2 = `
<div class="img-container">
    ${cirImgRow3}
</div>`;

export const cirProjName = `Circinus`;

export const fullCirProject = `
--Circinus<br>
<br>

Let's talk about Circinus. This project was a significant milestone for me, as I took full responsibility for the programming side of things and contributed to some of the character animations. I handled the entire codebase, implementing everything from the core mechanics to the movement system. It was a challenging and ambitious undertaking, but one that I’m proud to have led from a technical standpoint. Here's the full gameplay and a few screenshots.

<br><br>${cirFullGameplay}

<br><br>${cirImgRoll1} ${cirImgRoll2}

One of the highlights for me was designing and coding the movement system, which turned out to be a solid foundation. The system gave the characters smooth, responsive controls, which is something I focused on perfecting. Here's an early demo of the movement system in action.

<br><br>${cirAlphaVideoContainer}

<br><br>In addition to the programming, I also created some of the character animations, which brought more life and fluidity to the gameplay. Although Circinus didn’t meet all our expectations as a team, the experience taught me a lot, especially in problem-solving and creative thinking. It's one of those projects where the journey was as valuable as the outcome.
<br>
`;