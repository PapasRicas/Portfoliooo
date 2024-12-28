const videoSettings = `<video loop controls controlsList="nodownload" allowfullscreen>`;
const imageSettings = `style="border: 2px solid #00FF00; border-radius: 5px; width: 600px;">`;

const rytImg1 = `<img src="img/Misc/r1.png"` + imageSettings;
const rytImg2 = `<img src="img/Misc/r2.png"` + imageSettings;
const rytImg3 = `<img src="img/Misc/r3.png"` + imageSettings;

const rytImgoll = rytImg1 + rytImg2 + rytImg3;

const rytImgRollContainer = `
<div class="img-container">
    ${rytImgoll}
</div>`;

const rytSowcase = videoSettings + `<source src="vid/Misc/rythmSystem.mp4" type="video/mp4"></video>`;

const rytSowcaseContainer = `
<div class="video-container">
    ${rytSowcase}
</div>`

export const rytProjName = `Rythm Note Creator`;

export const fullRytProject = `
    --Rythm Note Creator<br>
    <br>

    Hey there! So, I set out to create a rhythm game, but life had other plans. Instead of hitting all the right notes, 
    I ended up building a map creator. Yes, that's right, a map creator. It's kind of like a plot twist, but with code and less jazz hands.<br>

    <br><br>${rytSowcaseContainer}

    <br>So here's the deal: The map creator works. It does its thing, letting you create maps and all that fun stuff. 
    But let's be real, time ran out on me faster than I'd like to admit. I never got around to finishing it, 
    thanks to the never ending battle with personal time constraints. What you see now is functional but, let's just say, it's a bit of a rough cut.<br>

    <br><br>${rytImgRollContainer}

    <br>So at the end of the day, it's a way to show how sometimes the best laid plans go awry, 
    but you still end up with something that kinda works.

    <br>`;