fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((cars) => {
      document.getElementById("cars").innerHTML += `
      <div class="car">
      <hr />
      <h2>${cars.model}</h2>
      <hr/>
        <p><strong>Price:</strong>${cars.price} </p>
        <p><strong>Price (CS):</strong>  ${cars.pricecs}</p>
        <p><strong>Year:</strong> ${cars.year}</p>
        <p><strong>Horsepower:</strong> ${cars.horsepower}</p>
        <p><strong>Engine:</strong> ${cars.engine}</p>
      </div>
      `;
    });
  });
