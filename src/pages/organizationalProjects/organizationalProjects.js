import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from '../../common/ui/card/card.js';


const toOrganizationalProjects = document.querySelector(".toOrganizationalProjects");
const organizationalProjectsPage = document.querySelector(".organizationalProjectsPage");
const organizationalProjectsClose = document.querySelector(".organizationalProjectsClose");

const organizationalProjectsCharts = [
  { 
    title: "develop",
    canvas: document.querySelector('#organizational-project-01'),
    values: [100, 0],
    valuesColors: ["#7DC0F1", "#E0E0E0"],
  },
  { 
    title: "updating",
    canvas: document.querySelector('#organizational-project-02'),
    values: [100, 0],
    valuesColors: ["#7DC0F1", "#E0E0E0"],
  },
  { 
    title: "sound",
    canvas: document.querySelector('#organizational-project-03'),
    values: [100, 0],
    valuesColors: ["#7DC0F1", "#E0E0E0"],
  },
  { 
    title: "hr-system",
    canvas: document.querySelector('#organizational-project-04'),
    values: [99, 1],
    valuesColors: ["#7DC0F1", "#E0E0E0"],
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
