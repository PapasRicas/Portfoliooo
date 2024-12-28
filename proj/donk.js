const video_DonkeyAnim = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Videos Finales/Animación.mp4" type="video/mp4"></video>`;

const video_DonkeyDiorama = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Videos Finales/Diorama.mp4" type="video/mp4"></video>`;

const video_DonkeyTimeLapse = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Videos Finales/TimeLapseArmado.mp4" type="video/mp4"></video>`;

const video_DonkeAgua = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Demostración/Agua.mp4" type="video/mp4"></video>`;

const video_DonkeBloom = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Demostración/Bloom.mp4" type="video/mp4"></video>`;

const video_DonkeNoPFX = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Demostración/DioramaNoPFX.mp4" type="video/mp4"></video>`;

const video_DonkeYesPFX = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Demostración/DioramaPFX.mp4" type="video/mp4"></video>`;

const video_DonkeParticles = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Demostración/ParticulasPixel.mp4" type="video/mp4"></video>`;

const video_DonkeWind = `
<video loop controls controlsList="nodownload" allowfullscreen>
    <source src="vid/Diorama Donkey Kong/Demostración/Viento.mp4" type="video/mp4"></video>`;


const dioramaVideosRow1 = video_DonkeyAnim + video_DonkeyDiorama + video_DonkeyTimeLapse;
const dioramaVideosRow2 = video_DonkeAgua + video_DonkeBloom + video_DonkeNoPFX + video_DonkeYesPFX + video_DonkeParticles + video_DonkeWind;

const videosDioramaRow1 = `
<div class="video-container">
    ${dioramaVideosRow1}
</div>`;

const videosDioramaRow2 = `
<div class="video-container">
    ${dioramaVideosRow2}
</div>`;

export const donkeyProjName = `Donkey Kong Diorama`;

export const fullDonkeyKongProject = `
    --Donkey Kong Diorama<br>
    <br>Hey there! Let me walk you through the essence of this project. This wasn't just an ordinary diorama; it was a complex blend of 3D modeling and animation, packaged within a tight 48-hour non sleep journey. 
    My role? I was primarily responsible for creating the majority of the 3D models (except for the texturing) and handling the complete animation within Unity. 
    Using Unity’s Timeline, I assembled all the assets and orchestrated the entire animation process, bringing the project to life.<br>
    Michelle Maldonado, who added depth to Diddy Kong with her texturing skills, hand-painted all the models, while Paulo Marques also contributed to modeling and information gathering.<br>
    Due to time constraints, we didn’t manage to add audio, but we chose to keep it that way to showcase the sheer speed and dedication we applied to this project.<br>
    <br>${videosDioramaRow1}<br>
    We also implemented some cool effects using Unity’s Shader Graph, which you can see for yourself.<br>
    <br>${videosDioramaRow2}<br>
    This project is a testament to how teamwork, creativity, and sheer willpower can come together to create something awesome in just 48 hours. Enjoy!<br>`;
