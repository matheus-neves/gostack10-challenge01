const express = require('express');
const app = express();

app.use(express.json());

const { projects } = require('./data.js');
const { projectsFindIndex, countRequest } = require('./middlewares')

app.use(countRequest);

app.get('/projects', (req, res) => {
  res.send(projects);
})

app.post('/projects', (req, res) => {

  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  })

  return res.status(201).json({id, title});
})

app.post('/projects/:id/tasks', projectsFindIndex, (req, res) => {

  const { title } = req.body;

  projects[req.index].tasks.push(title)

  return res.status(201).json(projects);
})

app.put('/projects/:id', projectsFindIndex, (req, res) => {

  const { title } = req.body;

  projects[req.index].title = title;

  return res.status(200).json(projects);
})

app.delete('/projects/:id', projectsFindIndex, (req, res) => {

  projects.splice(req.index, 1);

  return res.send();
})


app.listen(3000);