function closeDashboardImage(){
  const popup = document.getElementById("dashboardImagePopup");
  if(popup){
    popup.style.display = "none";
  }
}

window.addEventListener("load", function(){
  const popup = document.getElementById("dashboardImagePopup");

  // show popup only when page refresh/reload
  const navigationType = performance.getEntriesByType("navigation")[0].type;

  if(popup && navigationType === "reload"){
    popup.style.display = "flex";
  }
});