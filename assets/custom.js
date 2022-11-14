const main_url = "https://ghibliapi.herokuapp.com/films";

const contentDiv = document.getElementById("content");

async function getData(url) {
  const response = await fetch(url);
  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    showData(data);
  } else {
    console.log("data not received");
    const flashMsg = document.createElement('marquee')
    flashMsg.innerText = 'data not received'
    contentDiv.appendChild(flashMsg)
  }
}
getData(main_url);

function showData(data) {
  data.forEach((movie) => {
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
