import { API_URL } from "../utils/apiConfig";

export const getHomePageContent = async () => {

    try {

        const response = await fetch(`${API_URL}/api/homecontent`, { method: 'GET'});
        
        const data = await response.json();

        //console.log(data);

        return data;

    } catch (error) {

        console.log(error);
    
    }

}