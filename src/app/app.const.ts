export const API = {
    //default: 'http://192.168.103.4:8080/quadro-api/api/'
    default: 'http://agdatabox.md.utfpr.edu.br/apidata/v2/'
   // default: 'http://192.168.100.222:8080/adb-api-data/'
}

export function getDefaultURL(resource: string) {
    return API.default + resource;
}