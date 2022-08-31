class StarWarsServiceStarVehicles {


    constructor() {}
    
    vehiclesUrl = "https://swapi.dev/api/vehicles";
    url = "https://swapi.dev/api/people";
 
       

    async getVehicles() {

        try {
            const response = await fetch(this.vehiclesUrl)
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            return data.results
        } catch (e) {

            console.error(e);
            return [];
        }
    }

    async getVehiclesById(id)
    
    {
		try {
			const response = await fetch(`${this.vehiclesUrl}/${id}`);
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

export default StarWarsServiceStarVehicles;