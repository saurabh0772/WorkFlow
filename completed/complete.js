let completedWork = JSON.parse(localStorage.getItem("complete")) || [];

let display = () =>{
    
    let parentDiv = document.querySelector('.addingitems');

    parentDiv.innerHTML = '';
    if(completedWork.length === 0){
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="noitems">
                <h3><i class="fa-solid fa-circle-info fa-lg" style="color: black;"></i>      You have not Completed your work !!</h3>
            </div>
        `;
        parentDiv.appendChild(newDiv);
    }else{
        completedWork.forEach((ele, index) => {
            let subdiv = document.createElement('div');
            subdiv.innerHTML = `
                 <div class="addeditem">
                    <div class="prioo allll">
                        <h3>${ele.prio}</h3>
                    </div>
                    <div class="workk allll">
                        <h3>${ele.workk}</h3>
                    </div>
                    <div class="descriptionn allll">
                        <h3>${ele.desc}</h3>
                    </div>
                    
                    <div class="completedd allll comple">
                       <div class="btncheck"><button class="checkbox"></button></div>
                    </div>
                    <div class="actionnn allll">
                        <button class="btn" data-index="${index}"><i class="fa-solid fa-trash fa-2x"></i></button>
                    </div>
                </div>
            `;
            parentDiv.appendChild(subdiv);
        });
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener("click", function(){
            let index = this.getAttribute('data-index');
            completedWork.splice(index, 1);
            localStorage.setItem("complete", JSON.stringify(completedWork));
            display();
        })
    })

}

display();