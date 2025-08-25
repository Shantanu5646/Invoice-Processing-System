import axios from "axios";

const API_URL = "http://localhost:8080";
export const saveInvoice = async (payload) =>{
    try{
        return await axios.post(`${API_URL}/invoice`, payload);
    } catch (error){
        console.log('Error: ', error.message);
        if (error.response) {
            return error.response.data; // server responded with an error
        } else {
            return { error: error.message }; // network error (e.g., backend down)
        }
    }
}

export const getAllInvoice = async () =>{
    try{
        return await axios.get(`${API_URL}/invoice`);
    } catch (error){
        console.log('Error: ', error.message);
        if (error.response) {
            return error.response.data; // server responded with an error
        } else {
            return { error: error.message }; // network error (e.g., backend down)
        }
    }
}

export const deleteInvoice = async (id) =>{
    try{
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error){
        console.log('Error: ', error.message);
        if (error.response) {
            return error.response.data; // server responded with an error
        } else {
            return { error: error.message }; // network error (e.g., backend down)
        }
    }
}

export const markInvoiceDone = async (id) => {
    try {
        return await axios.put(`${API_URL}/invoice/${id}/Done`);
    } catch (error) {
        console.log("Error:", error.message);
        if (error.response) return error.response.data;
        else return { error: error.message };
    }
}