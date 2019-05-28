const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/tasks', function (request, response) {

  const username = request.query.username;

  const tasks = {
    tasks: "Do washing up" + ", Go shopping" + ", Take a nap"
  };
  response.json(tasks);
})

module.exports.handler = serverless(app);