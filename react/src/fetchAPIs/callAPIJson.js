import * as constants from "../constants"
export default function callAPIJson(method, path, data) {
    let objFetch = {}
    if(method === constants.HTTP_READ){
        objFetch = {
            // headers: {"Authorization": `Beare ${data.token}`},
            method,
            headers: {"Authorization": `Beare ${data.token}`},
          }
    }else if(method === constants.HTTP_DELETE){
        objFetch = {
            method,
            headers: {"Content-Type": "Application/json","Authorization": `Beare ${data.token}`},
            body: JSON.stringify(data)
          }
    }else{
        objFetch = {
            method,
            headers: {"Content-Type": "Application/json","Authorization": `Beare ${data.token}`},
            body: JSON.stringify(data)
          }
    }
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + path
        fetch(url, objFetch)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
