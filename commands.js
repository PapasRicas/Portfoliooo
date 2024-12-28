import { executeCommand } from './main.js';

window.about = '<span class="glowing-command" onclick="executeCommand(\'about\')">about<br></span>';
window.aboutContent = '- Who I am.<br>';
window.fullAbout = `Hey there! I'm Diego Bravo, studying Game Design at Andrés Bello University. While I love designing games, 
I'm also pretty good at programming. I'm really passionate about games, but what I enjoy most is actually making them, it's something I've always loved doing.
When I'm not working on games, you can usually find me teaching programming at the university. Teaching has helped me get 
better at what I do and made me believe even more in the importance of learning and adapting. I'm a fast learner and always up for new challenges.
My goal is to create games that really connect with players, making them feel happy, curious, and maybe even make them think a bit.
Thanks for checking out my portfolio, I can't wait to show you more of what I've been working on!`;

window.contact = '<span class="glowing-command" onclick="executeCommand(\'contact\')">contact<br></span>';
window.contactContent = '- My contact info.<br>';

const contactEmail = 'diegob12868@gmail.com';
const githubLink = 'https://github.com/Punky12868';
const artstationLink = 'https://www.artstation.com/punky_na';
const youtubeLink = 'https://www.youtube.com/channel/UCh7u4MOvfAvwXXajxcT0s8g';


window.fullContact = `
  <p>Contact me at <a href="mailto:${contactEmail}" style="color: yellow;">${contactEmail}</a></p>
  <p>Feel free to explore my social media presence</p>
  <p><a href="${youtubeLink}" target="_blank" style="color: yellow;">My YouTube</a></p>
  <p><a href="${githubLink}" target="_blank" style="color: yellow;">My GitHub</a></p>
  <p><a href="${artstationLink}" target="_blank" style="color: yellow;">My Artstation</a></p>`;

window.clear = '<span class="glowing-command" onclick="executeCommand(\'clear\')">clear<br></span>';
window.clearContent = '- Clears the terminal from all outputs.';

window.projects = '<span class="glowing-command" onclick="executeCommand(\'projects\')">projects<br></span>';
window.projectsContent = '- Display my game development projects.<br>';

window.project1Name = `Donkey Kong Diorama`;
window.project2Name = `Sorcerers Slip`;
window.project3Name = `Overhaul`;
window.project4Name = `Circinus`;
window.project5Name = `Sr Pingo`;
window.project6Name = `Va-11 Hall-A`;
window.project7Name = `ReAnimator`;
window.project8Name = `Ragdoll`;
window.project9Name = `Rythm Note Creator`;
window.project10Name = `Coding Game`;
window.project11Name = `Panki AR`;

window.fullProjects = `
    Here are some of my projects:<br>
    <span class="glowing-command" onclick="executeCommand('${project11Name.toLowerCase()}')">${project11Name}</span> - A cool augmented reality spray can pet. -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project3Name.toLowerCase()}')">${project3Name}</span> - A 2.5D souls-like demo made in Unity. -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project1Name.toLowerCase()}')">${project1Name}</span> - Diorama + Animation of Donkey Kong Country Returns made with Blender and Unity. -3D Modeler / Unity Timeline<br>
    <span class="glowing-command" onclick="executeCommand('${project4Name.toLowerCase()}')">${project4Name}</span> - A 3D demo about a cat with social anxiety who has to save everyone by completing tasks and retrieving back fallen stars -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project2Name.toLowerCase()}')">${project2Name}</span> - A cute little hypercasual game about an endlessly falling sorcerer. -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project5Name.toLowerCase()}')">${project5Name}</span> - A visual novel about 3 university students who steals a penguin to complete his assignment -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project6Name.toLowerCase()}')">${project6Name}</span> - A Quick Time Event Animatic who adds a Chilean character -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project8Name.toLowerCase()}')">${project8Name}</span> - A puzzle physics game -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project9Name.toLowerCase()}')">${project9Name}</span> - An attempt of making a rythm game note maker -Lead Programmer<br>
    <span class="glowing-command" onclick="executeCommand('${project10Name.toLowerCase()}')">${project10Name}</span> - A coding game made in my free time -Lead Programmer<br>
    <p>Also, if you are more interested in my artistic side, just take a look at my <a href="${artstationLink}" target="_blank" style="color: yellow;">Artstation</a></p>
`;

//<span class="glowing-command" onclick="executeCommand('${project7Name.toLowerCase()}')">${project7Name}</span> - A Unity asset that simplifies the use of animations by code -Lead Programmer<br>

window.skills = '<span class="glowing-command" onclick="executeCommand(\'skills\')">skills<br></span>';
window.skillsContent = '- Display my skills as a game developer.<br>';
window.fullSkills = 'My skills include:<br>- Programming languages: C#, HTML, CSS, JavaScript.<br>- Software Experience: Unity Engine, Blender, ZBrush, GitHub, Photoshop.<br>- Other: Gameplay programming, Game AI programming.';

window.help = '<span class="glowing-command" onclick="executeCommand(\'help\')">help<br></span>';
window.helpContent = '- List of all commands.<br>';
window.helpAllCommands = help + helpContent + about + aboutContent + skills + skillsContent + projects + projectsContent + contact + contactContent + clear + clearContent;