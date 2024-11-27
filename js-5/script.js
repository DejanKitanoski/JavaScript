// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then( response => {
//     if(response.ok){
//         throw new Error(Ovoj pokemon:${data.name}ne postoi!!!)
//     }
//     return response.json();
// }

// )
// .then(data => console.log(data))
// .catch(error => console.log(error));

async function fetchPhones() {
  var response = await fetch("https://api.restful-api.dev/objects");
  var data = await response.json();
  return data;
}
var phones;

fetchPhones().then((data) => {
  phones = data;
  console.log(phones);
  phones.forEach((Phone) => {
    document.getElementById("Phones").innerHTML += `
        <div class="Phone">
                 <h2>${Phone.name}</h2>
    <p><strong>ID:</strong> ${Phone.id}</p>
  <p><strong>Color:</strong> ${Phone.data?.color}</p>
  <p><strong>Capacity:</strong> ${Phone.data?.capacity}</p>
   
             </div>
         `;
  });
//    <p><strong>Color:</strong> ${Phone.data.color}</p>
//    <p><strong>Capacity:</strong> ${Phone.data.capacity}</p>
  // koga ke gi postavev natre vo divot mi gi snemuvase site drugi telefoni
});

var SearchBT = document.getElementById("Search-button");


SearchBT.addEventListener("click", () => {
//   var phonestore = document.getElementById("search").value.toLowerCase();
var phonestore = document.getElementById("Store");
fetch(`https://api.restful-api.dev/objects?search=${phonestore.value.toLowerCase()}`)
  .then((response) => response.json)
  .then((data)=> {
    var phonemodel = document.getElementById("Phones")
    phonemodel.innerHTML = "";
    
    phones.forEach((Phone) => {
        document.getElementById("Phones").innerHTML += `
            <div class="Phone">
                     <h2>${Phone.name}</h2>
        <p><strong>ID:</strong> ${Phone.id}</p>
       
                 </div>
             `;
      });

  })

});
