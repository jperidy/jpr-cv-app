import { API_URL } from "../utils/apiConfig";

export const getNotes = async () => {

    try {

        const response = await fetch(`${API_URL}/api/notes`, { method: 'GET'});
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getOneNote = async (id) => {

    try {

        const response = await fetch(`${API_URL}/api/notes/${id}`, { method: 'GET'});
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const createOneNote = async (body) => {

    try {

        const response = await fetch(`${API_URL}/api/notes`, { 
            headers: {
                'Content-type': 'Application/json',
            },
            method: 'POST', 
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return {...data, ok:true};

    } catch (error) {
        console.log(error);
        return {...data, ok:false};
    }
}

export const updateOneNote = async (body) => {

    try {

        const response = await fetch(`${API_URL}/api/notes/${body.id}`, { 
            headers: {
                'Content-type': 'Application/json',
            },
            method: 'PUT', 
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return {...data, ok:true};

    } catch (error) {
        console.log(error);
        return {...data, ok:false};
    }
}

export const deleteOneNote = async (id) => {

    try {

        const response = await fetch(`${API_URL}/api/notes/${id}`, { 
            headers: {
                'Content-type': 'Application/json',
            },
            method: 'DELETE'
        });
        const data = await response.json();
        return {...data, ok:true};

    } catch (error) {
        console.log(error);
        return {...data, ok:false};
    }
}