const BASE_URL = ("./assets/data.json");

const contentDiv = document.getElementById("content");

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 400) {
      const data = await response.json();
      console.log(data);
      showData(data);
    } else {
      console.log("Error: Unable to fetch data. Status code: " + response.status);
      // Handle the error, display a message, or take appropriate action.
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error, display a message, or take appropriate action.
  }
}
getData(BASE_URL);

function showData(data) {
  data.films.forEach((movie) => {
    const {
      title,
      description,
      image,
      original_title,
      director,
      release_date,
      running_time,
    } = movie;

    const template = document.createElement("div");
    template.setAttribute("class", "col-sm-6 card-div");
   
    template.innerHTML = ` 
        <div class="img-wrapper card-img-top">
        <img src="${image}" alt="${title}"/>
        </div>
        <div class="card-body card-content">
            <h3 class="card-title">${title}</h3>
            <span class="runtime">${running_time} min</span>
            <h6 class="card-title">Original Title : ${original_title}</h6>
            <p class="text">Director : ${director}</p>
            <p class="text">Released : ${release_date}</p>

            <p class="card-text" title="${description}">${description.length > 150 ? description.substring(0, 250) : description}</p>


        </div>
      `;
    contentDiv.append(template);
  });
}
