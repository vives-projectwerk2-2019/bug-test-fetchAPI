const fetch = require("node-fetch");
var obj;
  fetch('http://localhost:8000/api/user')
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => console.log(obj.firstname))