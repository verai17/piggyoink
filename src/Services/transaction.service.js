import axios from 'axios';
 
const url = `${process.env.REACT_APP_API_URL}/api`;

async function getExpenseCategory(token) { 

    try{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        };

        let { data } = await axios.get(`${url}/expenses/category`, config); 
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

async function getSaveCategory(token) { 

    try{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        };
  
        let { data } = await axios.get(`${url}/savings/category`, config); 
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

async function submitSavingsTransaction(token,  body) { 

    try{ 
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        };
 
        let { data } = await axios.post(`${url}/savings/save`, body, config); 
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

async function submitExpenseTransaction(token,  body) { 

    try{ 
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        };
 
        let { data } = await axios.post(`${url}/expenses/save`, body, config); 
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
    getExpenseCategory, 
    getSaveCategory,
    submitSavingsTransaction,
    submitExpenseTransaction 
};