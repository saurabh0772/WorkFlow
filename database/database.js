let finalRes = JSON.parse(localStorage.getItem("data")) || [];
let completedWork = JSON.parse(localStorage.getItem("complete")) || [];



let display = () => {
    let mainDiv = document.querySelector('.addingitems');
        mainDiv.innerHTML = '';

    if(finalRes.length === 0){
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="noitems">
                <h3><i class="fa-solid fa-circle-info fa-lg" style="color: black;"></i>      There is no Work....Please add your work !!</h3>
            </div>
        `;
        mainDiv.appendChild(newDiv);
    }else{
        finalRes.forEach((ele, index) => {
        
            let subDiv = document.createElement('div');
            
            subDiv.innerHTML = `
               <div class="addeditem">
                    <div class="prioo allll">
                        <h4>${ele.prio}</h4>
                    </div>
                    <div class="workk allll">
                        <h3>${ele.workk}</h3>
                    </div>
                    <div class="descriptionn allll">
                        <h4>${ele.desc}</h4>
                    </div>
                    <div class="duedatee allll">
                        <h3>${ele.date}</h3>
                    </div>
                    <div class="completedd allll comple">
                       <div class="btncheck" data-index="${index}" ><button class="checkbox"></button></div>
                    </div>
                    <div class="actionnn allll">
                        <button class="btn" data-index="${index}"><i class="fa-solid fa-trash fa-2x"></i></button>
                    </div>
                </div>
                
            `;
            mainDiv.appendChild(subDiv);
    
        });
    }

    

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener("click", function(){
            let index = this.getAttribute('data-index');
            
            finalRes.splice(index, 1);
            localStorage.setItem("data", JSON.stringify(finalRes));
            display();
        });
    });

    document.querySelectorAll('.btncheck').forEach(button => {
        button.addEventListener("click", function(){
            let index = this.getAttribute('data-index');
            

            let completedItem = {...finalRes[index]};

            completedWork.push(completedItem);
            localStorage.setItem("complete", JSON.stringify(completedWork));

            finalRes.splice(index, 1);
            localStorage.setItem("data", JSON.stringify(finalRes));
            button.classList.add('newbtncheck');
            setTimeout(function(){
                display();
                alert("CONGRATULATIONS!!\nAdded to the Completed Work!")
            }, 1000);
        })
    })

}
display();