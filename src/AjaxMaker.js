export default class AjaxMaker {

    url = null;
    xhr = new XMLHttpRequest();
    method = "GET";
    onResponseOk = null;

    constructor(url, method, onResponsesOk = null) {
        this.url = url;
        this.onResponseOk = onResponsesOk;
        if (typeof method === "string") {
            this.method = method.length in ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] ? method : "GET";
        }

        console.log("okkkkkkkkkkk");
    }
}