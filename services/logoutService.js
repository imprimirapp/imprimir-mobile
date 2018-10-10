import { hosting } from '../config';
import auth from "../models/connection";

export default function logoutService(url){

    console.log('URL IN SAGA', url);
    
    return new Promise((resolve, reject) => {
        auth.signOut().then(() => {
            let logoutObj = {
                status: 200,
                message: 'SignOut succesfully / Sesión cerrada exitosamente'
            }
            resolve(logoutObj)
        }).catch(err =>{
            reject(err);
        });
    });
}
