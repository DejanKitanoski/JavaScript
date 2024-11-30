fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("pokemon-name");
    data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((details) => {
          const pokemonDiv = document.createElement("div");
          pokemonDiv.className = "pokemon";
          pokemonDiv.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img class="slika" src="${details.sprites.front_default}" alt="${pokemon.name}">
          `;
          container.appendChild(pokemonDiv);
        });
    });
  })
  .catch((error) => console.error("Error fetching Pokémon list:", error));
// so ovoj kod samo usepav da gi facam slikite no nne da gi facam kartite zaradi toa sto zemav direkno od apii ne od kaj mene 
// async function fetchData() {
//   try {
//     const pokemonName = document
//       .getElementById("pokemonName")
//       .value.trim()
//       .toLowerCase();
//     if (!pokemonName) {
//       alert("Please enter a Pokémon name!");
//       return;
//     }

//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );

//     if (!response.ok) {
//       throw new Error("Pokémon not found.");
//     }

//     const data = await response.json();
//     const pokemonsrc = data.sprites.front_default;
//     const imgElement = document.getElementById("pokemonSprite");

//     imgElement.src = pokemonsrc;
//     imgElement.alt = pokemonName;
//     imgElement.style.display = "block";
//   } catch (error) {
//     console.error("Error fetching Pokémon:", error);
//     alert("Could not fetch Pokémon. Please check the name and try again.");
//   }
// }
function searchPokemon() {
    const pokemonsearch = document.getElementById("pokemonName").value.toLowerCase().trim();
    if (!pokemonsearch) {
      alert("Please enter a Pokémon name to search.");
      return;
    }
  
   
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${pokemonsearch}`;
    
    fetch(searchURL)
      .then((response) => {
        if (!response.ok) throw new Error("Pokémon not found");
        return response.json();
      })
      .then((details) => {
        const card = document.getElementById("pokemon-card");
        const title = document.getElementById("pokemon-title");
        const img = document.getElementById("pokemon-img");
  
        title.textContent = details.name;
        img.src = details.sprites.front_default;
        img.alt = details.name;
        card.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        alert("Pokémon not found. Please check the name and try again.");
      });
  }
  
 
  fetchData();