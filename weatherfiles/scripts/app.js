const form = document.querySelector("form");
const details = document.querySelector(".details");
const imgTime = document.querySelector(".time");
const card = document.querySelector(".card");
const forecast = new Forecast();

//DOM operation to manage response from API curl.
const updateUI = (latest) => {
    const { data, loc } = latest;
    details.innerHTML = `
        <h5 class="my-3">${loc.EnglishName}</h5>
        <div class="my-3">${data[0].WeatherText}</div>
        <div class="display-4 my-4">
        <span>${data[0].Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;
    //managed the div to show condition
    card.classList.contains("d-none") ? card.classList.remove("d-none") : null;
};


// curling functions to fetch response from endpoint.
form.addEventListener('submit', e => {

    //prevent refresh after submit
    e.preventDefault();

    const dD = form.city.value.trim();
    forecast.getLocation(dD)
    .then(loca => forecast.getWeather(loca))
    .then(latest => updateUI(latest))
    .catch(err => console.log(err));
    
    //clear form after sending input
    form.reset();   
});