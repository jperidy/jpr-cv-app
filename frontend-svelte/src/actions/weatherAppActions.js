import { API_URL } from "../utils/apiConfig"

export const getWeather = async (city) => {

    try {

        const response = await fetch(`${API_URL}/api/weather?q=${city}&units=metric`, { method: 'GET'});
        
        if (response.ok) {
            const data = await response.json();
            return { ...data, ok:true};
        } else {
            return { message: 'city not found'}
        }

    } catch (error) {
        console.log(error);
        return { message: 'error', ok: false}
    }
}