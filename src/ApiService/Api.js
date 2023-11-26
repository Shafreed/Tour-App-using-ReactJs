import axios from "axios";

const API_URL='https://course-api.com/react-tours-project'

export const getAllTourData= async ()=>{
    try{
        const responce= await axios.get(`${API_URL}`)
        return responce.data
    }
    catch(error){
        return []
    }
}