let leads = JSON.parse(localStorage.getItem("leads")) || [];

const form = document.getElementById("leadForm");
const table = document.getElementById("leadTable");

displayLeads();
updateStats();

form.addEventListener("submit", function(e){

e.preventDefault();

let lead = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
source: document.getElementById("source").value,
status: document.getElementById("status").value,
notes: document.getElementById("notes").value
};

leads.push(lead);

saveLeads();

displayLeads();

updateStats();

form.reset();

});

function displayLeads(){

table.innerHTML="";

leads.forEach((lead,index)=>{

let row = `
<tr>
<td>${lead.name}</td>
<td>${lead.email}</td>
<td>${lead.source}</td>
<td>${lead.status}</td>
<td>${lead.notes}</td>
<td><button onclick="deleteLead(${index})">Delete</button></td>
</tr>
`;

table.innerHTML += row;

});

}

function deleteLead(index){

leads.splice(index,1);

saveLeads();

displayLeads();

updateStats();

}

function saveLeads(){
localStorage.setItem("leads",JSON.stringify(leads));
}

function updateStats(){

document.getElementById("total").innerText = leads.length;

document.getElementById("new").innerText =
leads.filter(l=>l.status==="New").length;

document.getElementById("contacted").innerText =
leads.filter(l=>l.status==="Contacted").length;

document.getElementById("converted").innerText =
leads.filter(l=>l.status==="Converted").length;

}

function toggleTheme(){
document.body.classList.toggle("dark");
}
