// import './assignedProjects.css';
import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from '../../common/ui/card/card.js';


const toAssignedProjects = document.querySelector(".toAssignedProjects");
const assignedProjectsPage = document.querySelector(".assignedProjectsPage");
const assignedProjectsClose = document.querySelector(".assignedProjectsClose");

const assignedProjectsCharts = [
  {
    title: "camel",
    canvas: document.querySelector('#assigned-project-1'),
    values: [10, 90],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "space",
    canvas: document.querySelector('#assigned-project-2'),
    values: [95, 5],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "energy",
    canvas: document.querySelector('#assigned-project-3'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "secure",
    canvas: document.querySelector('#assigned-project-4'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "transition",
    canvas: document.querySelector('#assigned-project-5'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "trash",
    canvas: document.querySelector('#assigned-project-6'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "house",
    canvas: document.querySelector('#assigned-project-7'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
];

const allCharts = [];

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeAssignedProjectsPage();
  }
}

function initAssignedProjectsCharts() {
  const t = setTimeout(() => {
    assignedProjectsCharts.forEach((b) =>
      allCharts.push(initCardChart(b.canvas, b.values, b.valuesColors))
    );
    clearTimeout(t);
  }, 500);
}

function showAssignedProjectsPage(e) {
  displayPopup(assignedProjectsPage);
  initAssignedProjectsCharts();
  assignedProjectsPage.addEventListener("click", onOpacity); 
}
function closeAssignedProjectsPage() {
  hidePopup(assignedProjectsPage);
  allCharts.forEach((b) => b.destroy());
  assignedProjectsPage.removeEventListener("click", onOpacity); 
}
toAssignedProjects.addEventListener("click", showAssignedProjectsPage);
assignedProjectsClose.addEventListener("click", closeAssignedProjectsPage);
