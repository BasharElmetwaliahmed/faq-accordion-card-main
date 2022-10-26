let tabs=document.querySelector(".tabs");
let allTabs=document.querySelectorAll(".faq--tab")
tabs.addEventListener("click",function(e){
  

  /*delegation*/
  if(e.target.classList.contains("show--button--icon")||e.target.classList.contains("show-Btn") ){
    /*if the tab is shown then hidden it*/
    if(e.target.closest(".faq--tab").classList.contains("visible--tab")){
          e.target.closest(".faq--tab").classList.remove("visible--tab");

      
    }
    /*if the tab not shown*/
    else{
      /*hidden all tabs then show the choosen tab */
    allTabs.forEach((tab)=>{
        tab.classList.remove("visible--tab")
    })
    e.target.closest(".faq--tab").classList.add("visible--tab");
  }}
  /*if not click on any tab hide all*/
  else{
        allTabs.forEach((tab)=>{
        tab.classList.remove("visible--tab")
    })
  }
})

