import { hosting } from '../config';

export default function getCurrentUserService(){
    
    return new Promise((resolve, reject) => {
        return fetch(hosting+'/auth/getUser',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            if(json){
                resolve(json.data)
            }else{
                return reject(json);
            }
        })
    });
}
