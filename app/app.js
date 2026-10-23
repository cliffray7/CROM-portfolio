const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
const contactYear = document.querySelector('#year-contact');
if (contactYear) contactYear.textContent = String(new Date().getFullYear());

const terminal = document.querySelector('.terminal-form');
const terminalInput = document.querySelector('#terminal-command');
const terminalOutput = document.querySelector('.terminal-output');

const commands = {
  whoami: () => 'Madialo Clifford Ray — Backend Microservices Engineer & Full-Stack Developer.',
  stack: () => 'Backend: Python (Flask), Node.js (Express), PHP (Laravel 11), ASP.NET Core (.NET 8).\nFrontend: React, Next.js, Inertia.js, Flutter.\nData & delivery: PostgreSQL, SQL Server, Redis, GraphQL, REST, Docker.',
  projects: () => 'B. Madialo Company & Advocates — case study in progress.\nSABABISHA-PMS — case study in progress.',
  architecture: () => 'The system map above is an illustrative SVG. A live architecture simulator is planned, not implemented yet.',
  contact: () => 'GitHub: https://github.com/cliffray7',
  help: () => 'Available commands: whoami, stack, projects, architecture, contact, help.'
};

function addTerminalLine(command, result, isError = false) {
  const item = document.createElement('li');
  const commandLine = document.createElement('div');
  commandLine.className = 'terminal-command-line';
  const prompt = document.createElement('span');
  prompt.textContent = 'cr@portfolio ~ $ ';
  commandLine.append(prompt, document.createTextNode(command));
  const response = document.createElement('div');
  response.className = isError ? 'terminal-error' : 'terminal-result';
  response.textContent = result;
  item.append(commandLine, response);
  terminalOutput.append(item);
  while (terminalOutput.children.length > 8) terminalOutput.firstElementChild.remove();
  item.scrollIntoView({ block: 'nearest' });
}

if (terminal && terminalInput && terminalOutput) {
  terminal.addEventListener('submit', (event) => {
    event.preventDefault();
    const command = terminalInput.value.trim().toLowerCase();
    if (!command) return;
    const isKnownCommand = Object.prototype.hasOwnProperty.call(commands, command);
    const response = isKnownCommand ? commands[command]() : 'Command not found. Type "help" to see available commands.';
    addTerminalLine(command, response, !isKnownCommand);
    terminalInput.value = '';
  });
}

const loadControl = document.querySelector('#sim-load');
const cacheControl = document.querySelector('#sim-cache');
const loadValue = document.querySelector('#sim-load-value');
const metricLoad = document.querySelector('#sim-metric-load');
const latencyValue = document.querySelector('#sim-latency');
const hitRateValue = document.querySelector('#sim-hit-rate');
const simStatus = document.querySelector('#sim-status');
const simulatorCard = document.querySelector('.simulator-card');

function updateSimulation() {
  if (!loadControl || !cacheControl || !loadValue || !metricLoad || !latencyValue || !hitRateValue) return;
  const load = Number(loadControl.value);
  const caching = cacheControl.checked;
  const uncachedLatency = 38 + load * 0.72 + load * load * 0.003;
  const latency = Math.round(uncachedLatency * (caching ? 0.68 : 1));
  const hitRate = caching ? Math.round(48 + load * 0.22) : 0;

  loadValue.value = `${load}%`;
  loadValue.textContent = `${load}%`;
  loadControl.setAttribute('aria-valuetext', `${load} percent simulated traffic`);
  metricLoad.textContent = `${load}%`;
  latencyValue.firstChild.nodeValue = String(latency);
  hitRateValue.firstChild.nodeValue = String(hitRate);
  if (simulatorCard) simulatorCard.classList.toggle('cache-disabled', !caching);
  if (simStatus) simStatus.textContent = `Simulation updated: ${load}% modeled load, caching ${caching ? 'on' : 'off'}.`;
}

if (loadControl && cacheControl) {
  loadControl.addEventListener('input', updateSimulation);
  cacheControl.addEventListener('change', updateSimulation);
  updateSimulation();
}
