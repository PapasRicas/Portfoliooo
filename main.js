import { donkeyProjName, fullDonkeyKongProject } from "./proj/donk.js";
import { sorcerersProjName, sorcererProj } from "./proj/sorcerers.js";
import { ovProjName, fullOvProject } from "./proj/overhaul.js";
import { cirProjName, fullCirProject } from "./proj/circinus.js";
import { pingProjName, fullPingProject } from "./proj/pingo.js";
import { vallProjName, fullVallProject } from "./proj/vall.js";
import { reAnimProjName, fullReAnimProject } from "./proj/animator.js";
import { ragProjName, fullRagProject } from "./proj/ragdoll.js";
import { rytProjName, fullRytProject } from "./proj/rythm.js";
import { codProjName, fullCodProject } from "./proj/codg.js";

let commandHistory = [];
let historyIndex = -1;

document.getElementById('command').addEventListener('keyup', function(event) {
    const commandInput = event.target;
    const command = commandInput.value.trim().toLowerCase();

    if (event.key === 'ArrowUp') {
        if (commandHistory.length > 0) {
            if (historyIndex === -1) {
                historyIndex = commandHistory.length - 1;
                commandInput.value = commandHistory[historyIndex];
            } else if (historyIndex > 0) {
                historyIndex--;
                commandInput.value = commandHistory[historyIndex];
            }
        }
    } else if (event.key === 'ArrowDown') {
        if (commandHistory.length > 0 && historyIndex > -1) {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                commandInput.value = commandHistory[historyIndex];
            } else if (historyIndex === commandHistory.length - 1) {
                commandInput.value = '';
                historyIndex = -1;
            }
        }
    } else if (event.key === 'Enter') {
        if (command !== '') {
            commandHistory.push(command);
            historyIndex = -1;
        }
        executeCommand(command);
        commandInput.value = '';
    }
});

export function executeCommand(command) {
    const output = document.getElementById('output');
    const outputContainer = document.getElementById('output-container');
    const initialScroll = output.scrollHeight;
    let message = '';
    
    switch (command.toLowerCase()) {
        case 'help':
            message = `--help<br><br>` + `Available commands:<br>` + helpAllCommands;
            break;
        case 'about':
            message = `--about<br>` + fullAbout;
            break;
        case 'contact':
            message = `--contact<br>` + fullContact;
            break;  
        case 'projects':
            message = `--projects<br><br>` + fullProjects;
            break;
        case 'skills':
            message = `--skills<br><br>` + fullSkills;
            break;
        case 'clear':
            output.innerHTML = '';
            break;
        case donkeyProjName.toLowerCase():
            message = fullDonkeyKongProject;
            break;
        case sorcerersProjName.toLowerCase():
            message = sorcererProj;
            break;
        case ovProjName.toLowerCase():
            message = fullOvProject;
            break;
        case cirProjName.toLowerCase():
            message = fullCirProject;
            break;
        case pingProjName.toLowerCase():
            message = fullPingProject;
            break;
        case vallProjName.toLowerCase():
            message = fullVallProject;
            break;
        /*case reAnimProjName.toLowerCase():
            message = fullReAnimProject;
            break;*/
        case ragProjName.toLowerCase():
            message = fullRagProject;
            break;
        case rytProjName.toLowerCase():
            message = fullRytProject;
            break;
        case codProjName.toLowerCase():
            message = fullCodProject;
            break;
        case '':
            return;
        default:
            message = `--${command}<br>` + `Command '${command}' not found. Type 'help' for commands.`;
    }

    if (command == 'clear') {
        output.innerHTML += message.trim(); // Using .trim() to remove extra spaces
    } else if (output.innerHTML == '') {
        output.innerHTML += message.trim() + '<br>'; // Using .trim() to remove extra spaces
    } else {
        output.innerHTML += '<br>' + message.trim() + '<br>'; // Using .trim() to remove extra spaces
    }
    
    outputContainer.scrollTop = initialScroll;
}
window.executeCommand = executeCommand;