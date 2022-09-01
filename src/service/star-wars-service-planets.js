class StarWarsServicePlanets {


    constructor() { }

    planetsUrl = "https://swapi.dev/api/planets";
    url = "https://swapi.dev/api/people";



    async getPlanets() {

        try {
            const response = await fetch(this.planetsUrl)
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            return data.results
        } catch (e) {

            console.error(e);
            return [];
        }
    }

    async getPlanetsById(id) {
        try {
            const response = await fetch(`${this.planetsUrl}/${id}`);
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

export default StarWarsServicePlanets;