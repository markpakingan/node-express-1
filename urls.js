const { URL } = require('url');
const fs = require('fs');
const axios = require('axios');

function readFile(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

const path = process.argv[2];

readFile(path, (data) => {
  const urls = data.split('\n');
  console.log(urls);

  async function processURLs() {
    for (const url of urls) {
      try {
        const response = await axios.get(url);
        // const urlObj = new URL(url);
        // const hostname = urlObj.hostname;
        // console.log("hostname:", hostname);
        console.log(response.data);
      } catch (error) {
        console.error(`Error fetching URL: ${url}`);
        console.error(error);
      }
    }
  }

  processURLs();
});
