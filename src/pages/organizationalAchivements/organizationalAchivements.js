import { displayPopup, hidePopup, animatedCounter } from "../index/index.js";

const toOrganizationalAchivements = document.querySelector(
  ".toOrganizationalAchivements"
);
const organizationalAchivementsPage = document.querySelector(
  ".organizationalAchivementsPage"
);
const organizationalAchivementsClose = document.querySelector(
  ".organizationalAchivementsClose"
);

//anime
const job = organizationalAchivementsPage.querySelector(".job");
const courses = organizationalAchivementsPage.querySelector(".left-col");

const amountsOrgAchieve = Array.from(
  organizationalAchivementsPage.querySelectorAll(".anime-text")
);

const orgColumn =
  organizationalAchivementsPage.querySelector(".right-col-bottom");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeOrganizationalAchivementsPage();
  }
}

function showOrganizationalAchivementsPage(e) {
  displayPopup(organizationalAchivementsPage);
  const t = setTimeout(() => {
    job.classList.remove("job-anime");
    courses.classList.remove("trainings-anime");

    orgColumn.classList.remove('move-up');

    amountsOrgAchieve.forEach((item) =>
      animatedCounter({
        elem: item,
        numFrom: 0,
        numTo: +item.dataset.value,
        step: +item.dataset.step || 4,
        interval: 100,
        isPercent: +item.dataset.percent === 1,
      })
    );
    organizationalAchivementsPage.addEventListener("click", onOpacity);
    clearTimeout(t);
  }, 100);
}

function closeOrganizationalAchivementsPage() {
  hidePopup(organizationalAchivementsPage);
  job.classList.add("job-anime");
  courses.classList.add("trainings-anime");
  orgColumn.classList.add('move-up');
  organizationalAchivementsPage.removeEventListener("click", onOpacity);
}
toOrganizationalAchivements.addEventListener(
  "click",
  showOrganizationalAchivementsPage
);
organizationalAchivementsClose.addEventListener(
  "click",
  closeOrganizationalAchivementsPage
);
