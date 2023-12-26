let myLeads = []

const inputEl = document.querySelector("#input-el")

const inputBtn =  document.getElementById("input-btn")

inputBtn.addEventListener("click",function(){
    let lead = inputEl.value 
    myLeads.push(lead)
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