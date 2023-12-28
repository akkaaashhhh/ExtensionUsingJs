let myLeads = []

const inputEl = document.querySelector("#input-el")

const inputBtn =  document.getElementById("input-btn")

let dataFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(dataFromLocalStorage){
    myLeads = dataFromLocalStorage
    render()
}

inputBtn.addEventListener("click",function(){
    let lead = inputEl.value 
    myLeads.push(lead)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render()
    inputEl.value=""
})

function render(){
    lead=""
    for(let i=0;i<myLeads.length;i++){
        lead+=`<li>
                    <a class="leadLinks" href="${myLeads[i]}">
                        ${myLeads[i]}
                    </a>
                </li>`
    }
    document.getElementById("leads").innerHTML=lead
}

document.getElementById("delete-btn").addEventListener("click",function(){
    myLeads=[]
    dataFromLocalStorage=null;
    render()
})