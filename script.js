let leads = [];

const form = document.getElementById("leadForm");
const table = document.getElementById("leadTable");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let source = document.getElementById("source").value;
let status = document.getElementById("status").value;
let notes = document.getElementById("notes").value;

let lead = {
name: name,
email: email,
source: source,
status: status,
notes: notes
};

leads.push(lead);

displayLeads();

form.reset();

});

function displayLeads(){

table.innerHTML = "";

for(let i=0;i<leads.length;i++){

let row = `
<tr>
<td>${leads[i].name}</td>
<td>${leads[i].email}</td>
<td>${leads[i].source}</td>
<td>${leads[i].status}</td>
<td>${leads[i].notes}</td>
</tr>
`;

table.innerHTML += row;

}

}
