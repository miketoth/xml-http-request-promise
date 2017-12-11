function xmlHttpRequestPromise(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = function () {
            console.log("this works");
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.open(method, url);
        xhr.send();
    });
}
