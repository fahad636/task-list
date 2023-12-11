/* //////////////////////////////////////////////////////////////////////
   select task name
///////////////////////////////////////////////////////////////////// */
   const task = document.querySelector("#task-title");

 /* ///////////////////////////////////////////////////////////////////////////////
   select task field & append li
/////////////////////////////////////////////////////////////////////////////////*/
   const selectButton = document.querySelector("#task-form");
   selectButton.addEventListener("submit" , function(event) {
   	event.preventDefault();
   	const selectInput = document.querySelector("#task");
   	const selectInputValue = selectInput.value;
    if(!selectInputValue) {
      alert("please fill input");
      return;
    }
   	const selectCollection = document.querySelector(".collection");
   	const elementCreate = document.createElement("li");
   	elementCreate.className = "collection-item"
   	elementCreate.innerHTML = ` ${selectInputValue}
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>`;

              const selectLi = document.querySelectorAll("ul li:nth-child(odd)");
              selectLi.forEach(function(single) {
                single.style.color = "purple";
                single.style.background = "orange";
                })
              const selectLi1 = document.querySelectorAll("ul li:nth-child(even)");
              selectLi1.forEach(function(single) {
                single.style.color = "purple";
                single.style.background = "orange";
                })
                  selectCollection.append(elementCreate);
                  selectInput.value = "";
                  task.innerText = "Tasks";

   })
   
/*//////////////////////////////////////////////////////////////////////////////////////////
   select delete button & single li remove
   with use event bubbling
/////////////////////////////////////////////////////////////////////////////////////////*/
   const collection = document.querySelector(".collection");
   // console.log(collection)
   collection.addEventListener("click" , function(event) {
    event.preventDefault();
    console.log("yes")
    const target = event.target;
    // const targetValue = target.value;
    if(target.className === "fa fa-remove"){
      // console.log("done")
      if(confirm("are you sure") ){
      event.target.parentElement.parentElement.remove();
      }
    }
   })
 /* /////////////////////////////////////////////////////////////////////////////////////////
       clear task button select & All li remove
/////////////////////////////////////////////////////////////////////////////////////////    */
   
   const clearTask = document.querySelector(".clear-tasks");
    clearTask.addEventListener("click" , function (event) {
      event.preventDefault();
      // console.log("click")
      const collection = document.querySelector(".collection");
      if (confirm("are you sure All task delete?")) {
      collection.innerHTML = "";
      task.innerText = "All Tasks Cleared😅";
      }
    })
    /* ///////////////////////////////////////////////////////////////////////////////////////
       serach Input & forEach loop li search
/////////////////////////////////////////////////////////////////////////////////////////    */

const filterSearch = document.querySelector("#filter");
filterSearch.addEventListener("keyup" , function(event) {
  event.preventDefault();
  // console.log("click")
  const target = event.target;
  const targetValue = target.value;
  // console.log(targetValue , "click")
   const all_collection_li = document.querySelectorAll(".collection-item");
   // console.log(all_collection_li) 
   all_collection_li.forEach(function(single) {

    if (single.innerText.indexOf(targetValue) === -1) {
      single.style.display = "none";
    }else{
      single.style.display = "block";

    }
   })
})


////////////////////////



