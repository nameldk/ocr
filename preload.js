const fs = require("fs"), {clipboard} = require("electron"),
    addon = require(`./${process.platform}-${process.arch}.node`),
    https = require("https");


function makeRequest(options, data) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            let data = '';

            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        });

        req.on('error', error => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

window.services = {
    getImageBase64: e => {
        try {
            return fs.readFileSync(e).toString("base64")
        } catch {
        }
    }, getCopyedImage: () => {
        const e = clipboard.readImage();
        return !e || e.isEmpty() ? null : e.toDataURL()
    }, decrypt: e => addon.decrypt(Buffer.from(e, "hex")),
    makeRequest: makeRequest,
}