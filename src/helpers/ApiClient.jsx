
import axios from 'axios'
export const ApiPost=(endpoint, body) => { 
    return new Promise((resolve, reject)=> { 
        axios({
            method: 'post',
            url: `https://sonicc.herokuapp.com/api/${endpoint}`,
            body: body
          }).then((data)=> { 
              resolve(data);
          }).catch((err)=> reject(err))
    })
} 
export const ApiGet=(endpoint, token) => { 
    return new Promise((resolve, reject)=> { 
        axios({
            method: 'GET',
            url: `https://sonicc.herokuapp.com/api/${endpoint}`,
            headers: {
                Authorization:token
            },
            
          }).then((data)=> { 
              resolve(data);
          }).catch((err)=> reject(err))
    })
} 
export const ApiPut=(endpoint, body, token) => { 
    return new Promise((resolve, reject)=> { 
        axios({
            method: 'PUT',
            url: `https://sonicc.herokuapp.com/api/${endpoint}`,
            headers: {
                Authorization:token
            },
            body: body
          }).then((data)=> { 
              resolve(data);
          }).catch((err)=> reject(err))
    })
} 
export const ApiDel=(endpoint, token) => { 
    return new Promise((resolve, reject)=> { 
        axios({
            method: 'DELETE',
            url: `https://sonicc.herokuapp.com/api/${endpoint}`,
            headers: {
                Authorization:token
            },
            
          }).then((data)=> { 
              resolve(data);
          }).catch((err)=> reject(err))
    })
} 