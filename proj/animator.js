const videoSettings = `<video loop controls controlsList="nodownload" allowfullscreen>`;
const imageSettings = `style="border: 2px solid #00FF00; border-radius: 5px; width: 600px;">`;

const reAnimImg = `<img src="img/ReAnimator/animCode.png"` + imageSettings;

const reAnimImgContainer = `
<div class="img-container">
    ${reAnimImg}
</div>`;

const reAnimVideo = videoSettings + `<source src="vid/ReAnimator/animSystem.mp4" type="video/mp4"></video>`;

const reAnimVideoContainer = `
<div class="video-container">
    ${reAnimVideo}
</div>`

export const reAnimProjName = `ReAnimator`;

export const fullReAnimProject = `
    --ReAnimator<br>
    <br>

    Alright, let's get one thing straight: I hate Unity's Animator system. 
    I hate it so much that I decided to skip the headaches and create my own asset. 
    What started as a simple university task turned into a personal vendetta against those tedious conditions and events, here's a video and an image example for the code.<br>

    <br><br>${reAnimVideoContainer}<br> ${reAnimImgContainer}

    <br>This asset is a dream come true for 2D animations (and, well, it's a work in progress for 3D). 
    Forget about Animator windows and transitions—just pure, clean code. It's like telling Unity, 
    “No thanks, I'll handle this myself.”<br>

    <br>And guess what? It's not just faster, it's friendlier. Plus, it supports animation events at specific times, 
    like placing buttons that just work. I used this beauty in Overhaul, and let me tell you, it was like a breath 
    of fresh air amidst all the madness.<br>

    <br>So yeah, Animator? Who needs it when you've got code that just works.

    <br>`;