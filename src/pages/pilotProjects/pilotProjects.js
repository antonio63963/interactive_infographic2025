import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from '../../common/ui/card/card.js';


const toPilotProjects = document.querySelector(".toPilotProjects");
const pilotProjectsPage = document.querySelector(".pilotProjectsPage");
const pilotProjectsClose = document.querySelector(".pilotProjectsClose");

const pilotProjectsCharts = [
  {
    title: "cow",
    canvas: document.querySelector('#pilot-project-1'),
    values: [15, 85],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "shrimp",
    canvas: document.querySelector('#pilot-project-2'),
    values: [35, 65],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "dropAi",
    canvas: document.querySelector('#pilot-project-3'),
    values: [12, 88],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "cup",
    canvas: document.querySelector('#pilot-project-4'),
    values: [5, 95],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "wool",
    canvas: document.querySelector('#pilot-project-5'),
    values: [65, 35],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "homeDrop",
    canvas: document.querySelector('#pilot-project-6'),
    values: [15, 85],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "dropSnow",
    canvas: document.querySelector('#pilot-project-7'),
    values: [15, 85],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "solar",
    canvas: document.querySelector('#pilot-project-8'),
    values: [5, 95],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "electric",
    canvas: document.querySelector('#pilot-project-9'),
    values: [35, 65],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "green",
    canvas: document.querySelector('#pilot-project-10'),
    values: [100, 0],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "bio",
    canvas: document.querySelector('#pilot-project-11'),
    values: [70, 30],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "smartHat",
    canvas: document.querySelector('#pilot-project-12'),
    values: [95, 5],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "kfas",
    canvas: document.querySelector('#pilot-project-13'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  
];

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closePilotProjectsPage();
  }
}

const allCharts = [];

function initPilotProjectsCharts() {
  const t = setTimeout(() => {
    pilotProjectsCharts.forEach((b) =>
      allCharts.push(initCardChart(b.canvas, b.values, b.valuesColors))
    );
    clearTimeout(t);
  }, 500);
}

function showPilotProjectsPage(e) {
  displayPopup(pilotProjectsPage);
  initPilotProjectsCharts();
  pilotProjectsPage.addEventListener("click", onOpacity);
}
function closePilotProjectsPage() {
  hidePopup(pilotProjectsPage);
  allCharts.forEach((b) => b.destroy());
  pilotProjectsPage.removeEventListener("click", onOpacity);
}
toPilotProjects.addEventListener("click", showPilotProjectsPage);
pilotProjectsClose.addEventListener("click", closePilotProjectsPage);
