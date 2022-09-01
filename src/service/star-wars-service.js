class StarWarsService {


    constructor() { }

    filmUrl = "https://swapi.dev/api/films";
    url = "https://swapi.dev/api/people";



    async getFilms() {

        try {
            const response = await fetch(this.filmUrl)
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            return data.results
        } catch (e) {

            console.error(e);
            return [];
        }
    }

    async getFilmsById(id) {
        try {
            const response = await fetch(`${this.filmUrl}/${id}`);
            if (!response.ok) throw new Error(response.statusText);
            return await response.json();


        } catch (e) {
            console.error(e);

            return {};
        }
    }


    async getStarWarsWithReturnedUrl(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);
            return await response.json();
        } catch (e) {
            console.error(e);

            return {};
        }
    }


}

export default StarWarsService;