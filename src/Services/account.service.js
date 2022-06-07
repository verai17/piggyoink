import axios from 'axios';

const url = `${process.env.REACT_APP_API_URL}/api/account`;

async function register({ body }) { 

    try{
        let { data } = await axios.post(`${url}/register`, body); 
        return { data } 
    }
    catch(errr){ 
        if(errr.response){
            let { error } = errr.response.data;
            return { error }
        }
        else{
            return { error: errr.message }
        }
    }
     
}

async function login({ body }) { 

    try{
        let { data } = await axios.post(`${url}/login`, body); 
        return { data } 
    }
    catch(errr){ 
        if(errr.response){
            let { error } = errr.response.data;
            return { error }
        }
        else{
            return { error: errr.message }
        }
    }
     
}

async function getUserWallet(token) { 

    try{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        };
  
        let { data } = await axios.get(`${url}/wallet`,config); 
        return { data } 
    }
    catch(errr){ 
        if(errr.response){
            let { error } = errr.response.data;
            return { error }
        }
        else{
            return { error: errr.message }
        }
    }
     
}

export { 
    register, 
    login,
    getUserWallet 
};