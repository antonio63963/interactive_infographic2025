import "../../common/styles/index.css";
import "./index.css";
import "../../common/ui/popupPage/popupPage.css";

//Math Grants
import "../mathGrants/mathGrants.css";
import "../mathGrants/mediaMathGrants.css";
import "../mathGrants/mathGrants.js";

//Math Curation
import "../mathCuration/mathCuration.js";

// Science Grants
import "../scienceGrants/scienceGrants.js";

//Engagement Science
import "../engagementScience/engagementScience.js";

//Reasearch Grants
import "../researchGrants/researchGrants.js";

//Science Curation
import "../scienceCuration/scienceCuration.js";

//Policy Grant
import "../policyGrants/policyGrants.js";

//Research Curation
import "../researchCuration/researchCuration.js";

//Research Networking
import "../researchNetworking/researchNetworking.js";

//Innovation Grants
import "../innovationGrants/innovationGrants.js";

//Prizes Winners
import "../prizesWinners/prizesWinners.js";

//KFAS Media
import "../kfasMedia/kfasMedia.js";

//PilotProjects
import "../pilotProjects/pilotProjects.js";

// AssignedProjects
import "../assignedProjects/assignedProjects.js";

//Research Capacity
import "../researchCapacity/researchCapacity.js";

//PrivateSectorProjects
import "../privateSectorProjects/privateSectorProjects.js";

//Innovation Curations
import "../innovationCurations/innovationCurations.js";

//Organization Projects
import "../organizationalProjects/organizationalProjects.js";

//Organizational Achivements
import "../organizationalAchivements/organizationalAchivements.js";

//Financial Achivements
import "../financialAchivements/financialAchivements.js";

//Policy Papers
import "../policyPapers/policyPapers.js";

function displayPopup(popup) {
  popup.classList.remove("hidden");
}
function hidePopup(popup) {
  popup.classList.add("hidden");
}

//arr elems with dataset value
function animBarsStack(elemsArr) {
  //define entire sum and amoun in a percent
  const sumOfValues = elemsArr.reduce((acc, item) => {
    acc += +item.dataset.value;
    return acc;
  }, 0);
  const percent = 100 / sumOfValues;
  //define width
  elemsArr.reverse().forEach((bar, idx) => {
    const value = bar.dataset.value;
    const t = setTimeout(() => {
      bar.style.width = `${+value * percent}%`;
      clearTimeout(t);
    }, idx * 500 + 50);
  });
}

function animatedCounter(options) {
  const { elem, numFrom, numTo, step, interval, isPercent } = options;
  let numToShow = numFrom;

  const c = setTimeout(() => {
    const t = setInterval(() => {
      let difference = numTo - numToShow;
      if (numToShow < numTo) {
        if (difference >= step) {
          numToShow += step;
          elem.textContent = isPercent ? `${numToShow}%` : numToShow;
        } else if (difference < step) {
          numToShow += difference;
          elem.textContent = isPercent ? `${numToShow}%` : numToShow;
        }
      } else {
        clearInterval(t);
      }
    }, interval ?? 100);
    clearTimeout(c);
  }, 500);
}

export { displayPopup, hidePopup, animatedCounter, animBarsStack };
