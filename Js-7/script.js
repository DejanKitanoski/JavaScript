
const nameinput = document.getElementById("name");
const lastnameinput = document.getElementById("lastname");
const embginput = document.getElementById("EMBG");
const emailinput = document.getElementById("email"); 
const information = document.getElementById("card");
const deletebtn = document.getElementById("brisi");

function addinformation() {
  
    if (
        !nameinput.value.trim() &&
        !lastnameinput.value.trim() &&
        !embginput.value.trim() &&
        !emailinput.value.trim()
    ) {
        alert("Ве молам пополнетего ова поле.");
        return;
    }

 
    if (embginput.value.length !== 13) {
        alert("ЕМБГ мора да има 13 бројки 12093344001пр.");
        return;
    }

 
    const emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/; 
    if (!emailPattern.test(emailinput.value)) {
        alert("Внесете валидна email адреса.");
        return;
    }


    const row = information.insertRow();
    const nameCell = row.insertCell();
    const lastnameCell = row.insertCell();
    const embgCell = row.insertCell();
    const emailCell = row.insertCell();
    const deletebtn = row.insertCell();
    

    nameCell.innerText = nameinput.value;
    lastnameCell.innerText = lastnameinput.value;
    embgCell.innerText = embginput.value;
    emailCell.innerText = emailinput.value;
//Delete dugme za brisenje!!!!!!
    // const deletebtn = document.getElementById("brisi"); premesten naj gore
    deletebtn.innerText = "Delete"
    deletebtn.addEventListener("click",() =>{
        row.remove()

    })
    


    nameinput.value = "";
    lastnameinput.value = "";
    embginput.value = "";
    emailinput.value = "";
}