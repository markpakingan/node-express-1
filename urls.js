const { URL } = require('url');
const fs = require('fs');
const axios = require('axios');

function readFile(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    processURLs(data);
  });
}

function processURLs(data) {
  const urls = data.split('\n');

  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching URL: ${url}`);
      console.error(error);
      return null;
    }
  }

  async function processAllURLs() {
    for (const url of urls) {
      const html = await fetchData(url);
      if (html) {
        const filename = generateUniqueFilename(url);
        writeHTMLToFile(filename, html);
      }
    }
  }

  processAllURLs();
}

function generateUniqueFilename(url){
  const parsedUrl = new URL (url);
  const websiteName = parsedUrl.hostname;
  const filename = `file_${websiteName}.html`;
  return filename;
}

function writeHTMLToFile(filename, html){
  fs.writeFile(filename, html, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`HTML data successfully written to ${filename}`);
  });
}


const path = process.argv[2];
readFile(path);
