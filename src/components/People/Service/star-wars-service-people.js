class StarWarsServicePeople {


    constructor() { }





    peopleUrl = "https://swapi.dev/api/people";
    url = "https://swapi.dev/api/people";



    async getPeople() {

        try {
            const response = await fetch(this.peopleUrl)
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            return data.results
        } catch (e) {

            console.error(e);
            return [];
        }
    }

    async getPeopleById(id) {
        try {
            const response = await fetch(`${this.peopleUrl}/${id}`);
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

export default StarWarsServicePeople;