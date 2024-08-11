let comp = JSON.parse(localStorage.getItem("complete")) || [];
let final = JSON.parse(localStorage.getItem("data")) || [];

let display = () => {
    let sub = document.createElement('div');
    let parent = document.querySelector('.stttt');
    sub.innerHTML = `
        <div class="stt">
                    <h3>Number of Pending Work : ${final.length}</h3>
                    <h3>Number of Completed Work : ${comp.length} </h3>
                    <h3>Total Number of Work: ${final.length + comp.length}</h3>
        </div>
    `;

    parent.appendChild(sub);
};

display();

function updateCircle(complete, total){
    let completedPer = (complete/total) * 100;
    let statBar = document.querySelector('.statBar');
    let perc = document.querySelector('.perc');
    statBar.style.background = `conic-gradient(orange 0% ${completedPer}%, #f1f1f1 ${completedPer}% 100%)`;

    perc.innerHTML= Math.round(completedPer) + '%';
}

updateCircle(comp.length, (comp.length + final.length));