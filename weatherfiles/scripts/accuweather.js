

class Forecast {
    constructor(){
        this.key= 'T2VbGbp8gBAQwU1t1qMzAquK3JGI2T6r';
        this.cityURI= 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI= `http://dataservice.accuweather.com/currentconditions/v1/`;
    }
    async getLocation(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const getter = await fetch(this.cityURI + query);
        const data = await getter.json();
        return(data[0]);
    }
    async getWeather(loc){
        const response = await fetch(this.weatherURI + `${loc.Key}?apikey=${this.key}`);
        const data = await response.json();
        return{loc, data};
    }
}

// const key = 'T2VbGbp8gBAQwU1t1qMzAquK3JGI2T6r';


// const getLocation = async (city) => {

//     const endpoint = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
    
//     const getter = await fetch(endpoint);
//     const data = await getter.json();

//     return(data[0]);
// };


// const getWeather = async (loc) => {

//     const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${loc.Key}?apikey=${key}`);
//     const data = await response.json();

//     return{loc, data};
// }




