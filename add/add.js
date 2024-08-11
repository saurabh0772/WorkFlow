let finalRes = JSON.parse(localStorage.getItem("data")) || [];

let submitBtn = document.querySelector('.btnsubmit');
let priori = document.querySelector('.linp');
    let prior = document.querySelector('.hinp');
    // console.log(priori);
    let priority = "";

priori.addEventListener("click", function(){
    priority = "LOW";
});
prior.addEventListener("click", function(){
    priority = "HIGH";
})

submitBtn.addEventListener("click", function(){
    
    let work = document.querySelector('.winput');
    let description = document.querySelector('.dinput');
    let dueDate = document.querySelector('.ddinput');
    if((priori == "off" && prior == "off") || work.value == "" ||
        description.value == "" ||
        dueDate.value == ""){
            alert("Please fill all the Details!");
        }else{
            let obj = {
                prio : priority,
                workk : work.value,
                desc : description.value,
                date : dueDate.value
            };
             
            finalRes.push(obj);
            localStorage.setItem("data", JSON.stringify(finalRes));
        
            
            work.value = "";
            description.value = "";
            dueDate.value = "";  
        
            alert("Your work has been added to the list!");
        }
    

});