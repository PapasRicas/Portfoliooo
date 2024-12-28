const videoSettings = `<video loop controls controlsList="nodownload" allowfullscreen>`;
const imageSettings = `style="border: 2px solid #00FF00; border-radius: 5px; width: 600px;">`;

const vallFullGameplay = `
    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mptHrXFKOe4?si=-NimbA1n9GU3m1iH" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>`;


export const vallProjName = `Va-11 Hall-A`;

export const fullVallProject = `
    --Va-11 Hall-A<br>
    <br>

    For the VA-11 HALL-A project, I played a key role in developing the animatic with Quick Time Events (QTE). My first contribution was 
    creating a complete storyboard, which served as the foundation for the artists to build upon. Once the visual direction was set, 
    I shifted to programming the entire QTE system from scratch. This system not only handled the execution of the events but also 
    included multiple conditions for various fail states during the cinematic sequences, ensuring a dynamic and engaging experience. 
    Each fail condition triggered different outcomes, adding depth and variety to the gameplay.

    <br><br>${vallFullGameplay}

    <br>In addition to programming the QTEs, I was responsible for implementing everything in the project except the menus and audio, 
    which were handled by another team member. This meant I integrated the entire gameplay experience, ensuring smooth transitions, 
    responsive controls, and fluid animations. The challenge of designing, coding, and implementing these systems was incredibly rewarding, 
    as it allowed me to blend creativity with technical expertise.
    
    <br>`;
