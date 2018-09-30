import { hosting } from '../config';
import auth from '../models/connection'

export default function loginService(url, params = {}){
    
    return new Promise((resolve, reject) => {
        return fetch(hosting+url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 200){
                let customToken = json.token;
                let data = json.data;
                auth.signInWithCustomToken(customToken).then(function(){
                    console.log('Auth with Custom Token / Autenticado con Token Personalizado');
                    resolve(data);
                });
            } else {
                return reject(json);
            }
        })
    });
}

