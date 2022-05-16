import * as constants from "../constants"
export default function callAPIForm(method, path, data) {
    let objFetch = {}
    if(method === constants.HTTP_READ || method === constants.HTTP_DELETE){
        objFetch = {
            headers: {"Authorization": `Beare ${data.token}`},
            method
          }
    }else{
        objFetch = {
            method,
            headers: {"Authorization": `Beare ${data.token}`},
            body: data.form
          }
    }
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + path
        fetch(url, objFetch)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
