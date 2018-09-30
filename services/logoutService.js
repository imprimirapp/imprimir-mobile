import { hosting } from '../config';

export default function logoutService(url){

    console.log('URL IN SAGA', url);
    
    return new Promise((resolve, reject) => {
        return fetch(hosting+url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            if(json.status === 200){
                return resolve(json)
            } else {
                return reject(json);
            }
        })
    });
}
