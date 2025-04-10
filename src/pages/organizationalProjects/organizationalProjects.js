import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from '../../common/ui/card/card.js';


const toOrganizationalProjects = document.querySelector(".toOrganizationalProjects");
const organizationalProjectsPage = document.querySelector(".organizationalProjectsPage");
const organizationalProjectsClose = document.querySelector(".organizationalProjectsClose");

const organizationalProjectsCharts = [
  {
    title: "data",
    canvas: document.querySelector('#organizational-project-1'),
    values: [65, 35],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "dinner",
    canvas: document.querySelector('#organizational-project-2'),
    values: [65, 35],
    valuesColors: ["#f47d39", "#E0E0E0"],
  },
  {
    title: "automatic",
    canvas: document.querySelector('#organizational-project-3'),
    values: [89, 11],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "heart",
    canvas: document.querySelector('#organizational-project-4'),
    values: [95, 5],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "whatsapp",
    canvas: document.querySelector('#organizational-project-5'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
];

const allCharts = [];

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeOrganizationalProjectsPage();
  }
}

function initOrganizationalProjectsCharts() {
  const t = setTimeout(() => {
    organizationalProjectsCharts.forEach((b) =>
      allCharts.push(initCardChart(b.canvas, b.values, b.valuesColors))
    );
    clearTimeout(t);
  }, 500);
}

function showOrganizationalProjectsPage(e) {
  displayPopup(organizationalProjectsPage);
  initOrganizationalProjectsCharts();
  organizationalProjectsPage.addEventListener("click", onOpacity);
}
function closeOrganizationalProjectsPage() {
  hidePopup(organizationalProjectsPage);
  allCharts.forEach((b) => b.destroy());
  organizationalProjectsPage.removeEventListener("click", onOpacity);
}
toOrganizationalProjects.addEventListener("click", showOrganizationalProjectsPage);
organizationalProjectsClose.addEventListener("click", closeOrganizationalProjectsPage);
