function getMovie(event) {
    event.preventDefault();
  
    const apiKey = your_api_key;
    let movieName = document.querySelector("#movie-input").value;
    let movieInfoDiv = document.querySelector("#movieInfo");
    let errorDiv = document.querySelector("#error");
  
    if (movieName === "") {
      errorDiv.innerHTML = `Please enter a movie name.`;
      movieInfoDiv.innerHTML = ""; // Clear previous results
      return;
    }
  
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}.`);
        }
      })
      .then((data) => {
        if (data.Response === "True") {
          console.log(data);
          movieInfoDiv.innerHTML = `
            <h2>${data.Title}</h2>
            <p>Year: ${data.Year}</p>
            <img src="${data.Poster}" alt="Poster of ${data.Title}" />
            <button id="more-info-btn">More Info</button>
            <div id="more-info"></div>
          `;
  
          // Correct querySelector to target the "More Info" button
          document
            .querySelector("#more-info-btn")
            .addEventListener("click", () => {
              let moreInfoDiv = document.querySelector("#more-info");
              moreInfoDiv.innerHTML = `
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Actors:</strong> ${data.Actors}</p>
              `;
              document
            .querySelector("#more-info-btn").style.display = "none";
            });
            
          
          errorDiv.innerHTML = "";
        } else {
          movieInfoDiv.innerHTML = ""; // Clear previous results
          errorDiv.innerHTML = "Movie not found."; // Specific API response handling
        }
      })
      .catch((error) => {
        console.log("Error occurred: ", error);
        errorDiv.innerHTML = "Failed to fetch movie data.";
      });
  }
  
  document.querySelector("#movie-form").addEventListener("submit", (event) => {
    getMovie(event);
  });
  