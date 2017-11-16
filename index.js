// requiring https to use it
const https = require("https");
const http = require("http");

// temporarily hardcoding in the api
const url = "https://jisho.org/api/v1/search/words?keyword="
let searchparam = "taberu";

if(process.argv.length === 3) {
  searchparam = process.argv[2];
}

https.get(url + searchparam, res => {
  res.setEncoding("utf-8");
  let body = "";
  res.on("data", data =>{
    body += data;
  });
  res.on("end", () => {
    // body = JSON.parse(body);
    console.log(body);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

// console.log(http.METHODS);