// const { URL } = require('url');
// const fs = require('fs');
// const axios = require('axios');

// function readFile(path) {
//   fs.readFile(path, 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });
// }



// readFile(path, (data) => {
//   const urls = data.split('\n');
//   console.log(urls);

//   async function processURLs() {
//     for (const url of urls) {
//       try {
//         const response = await axios.get(url);
//         // const urlObj = new URL(url);
//         // const hostname = urlObj.hostname;
//         // console.log("hostname:", hostname);
//         console.log(response.data);
//       } catch (error) {
//         console.error(`Error fetching URL: ${url}`);
//         console.error(error);
//       }
//     }
//   }

//   processURLs();
// });


// const path = process.argv[2];


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
        console.log(html);
        // Process the HTML content here as needed
      }
    }
  }

  processAllURLs();
}



const path = process.argv[2];
readFile(path);
