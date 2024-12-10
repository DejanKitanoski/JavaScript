const id = new URLSearchParams(window.location.search).get("id");

async function getEpisodeOnly(id) {
    const response = await fetch(`https://api.tvmaze.com/episodes/${id}`);
    const episodeOnly = await response.json();
    return episodeOnly;
}

getEpisodeOnly(id).then((episodeOnly) => {
    populateEpisodeOnly(episodeOnly);
});

function populateEpisodeOnly(episodeOnly) {
    const episodeDivContainer = document.getElementById("episodeDiv");
    
    episodeDivContainer.innerHTML += `
      <div>
            <img src="${episodeOnly.image.medium}" alt="${episodeOnly.name}" />
        </div>
        <div>
            <div>
                <h3>${episodeOnly.name}</h3>
                <span>${episodeOnly.airdate}</span>
            </div>
            ${episodeOnly.summary || "No summary available."}
            <div>
                <span>${episodeOnly.rating?.average || "No rating available."}</span>
                <button>Rate</button>
            </div>
        </div>
    `;
}