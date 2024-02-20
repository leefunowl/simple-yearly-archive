document.addEventListener('DOMContentLoaded', () => {

  const HideAll = () => {
    const AllPosts = document.querySelectorAll("#sya_container ul");
    AllPosts.forEach((node) => node.style.display = "none");
    const AllYearAnchors = document.querySelectorAll("#sya_yearslist a");
    AllYearAnchors.forEach((node) => node.style.fontWeight = 'normal');
  }
  
  const DisplayAYear = (year) => {
    const CurrentYear = document.getElementById("year-ul-" + year);
    CurrentYear.style.display = 'block';
    const CurrentYearAnchor = document.getElementById("year-anchor-" + year);
    CurrentYearAnchor.style.fontWeight = 'bold';
  }

  const Reset = () => {
    HideAll();
    DisplayAYear(2023);
  }

  Reset();

  const YearTabs = document.querySelectorAll("#sya_yearslist a");
  YearTabs.forEach((anchor) => {
    anchor.onclick = () => {
      HideAll();
      DisplayAYear(anchor.innerText);
    }
  });

});
