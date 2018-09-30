import { hosting } from '../config';

export default function passwordRecoveryService(url, params = {}){
    
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
                return resolve(json)
            } else {
                return reject(json);
            }
        })
    });
}