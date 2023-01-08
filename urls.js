const fs = require('fs')
const axios = require('axios')
let file = 'urls.txt'


async function getWeb(urlz) {
    try {
        const response = await axios.get(urlz)
        let newUrl = response.config.url
        let shortUrl = newUrl.replace('http://', '')
        let shortUrl2 = shortUrl.replace('https://', '')



        fs.writeFile(`${__dirname}/${shortUrl}`, response.data, function (err) {
            if (err) throw err;

            console.log('sucess')
        })
    } catch(err) {
        console.log('WOOPS Cant do that with ', urlz)
    }
}

function read(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error while reading ${path}`, err)
            process.kill(1)
        }

        let words = data.split('\n')
        words.splice(4,1)

        // getWeb(words[0])
        for (let i=0; i<words.length; i++) {
            getWeb(words[i])
        }
    })
}

read(file);
