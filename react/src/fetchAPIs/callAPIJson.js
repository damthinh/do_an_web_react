import * as constants from "../constants"
export default function callAPIJson(method, path, data) {
    let objFetch = {}
    if(method === constants.HTTP_READ || method === constants.HTTP_DELETE){
        objFetch = {
            method,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(data)
          }
    }else{
        objFetch = {
            method,
            headers: constants.HTTP_HEADER_JSON,
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
