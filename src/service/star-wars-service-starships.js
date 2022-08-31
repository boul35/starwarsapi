class StarWarsServiceStarShips {


    constructor() {}
    
    startshipsUrl = "https://swapi.dev/api/starships";
    url = "https://swapi.dev/api/people";
 
       

    async getStarships() {

        try {
            const response = await fetch(this.startshipsUrl)
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            return data.results
        } catch (e) {

            console.error(e);
            return [];
        }
    }

    async getStarshipsById(id)
    
    {
		try {
			const response = await fetch(`${this.startshipsUrl}/${id}`);
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

export default StarWarsServiceStarShips;