import Task from '../models/task.js'

function checkValues(task, res) {
  if ([null, undefined].includes(task.title) || typeof task.title !== 'string' || task.title.trim() === '')
    res.status(400).end('Invalid title')
  if ([null, undefined].includes(task.desc) || typeof task.desc !== 'string' || task.desc.trim() === '')
    res.status(400).end('Invalid desc')
  if ([null, undefined].includes(task.checked) || typeof task.checked !== 'boolean')
    task.checked = task.checked ? true : false
}

async function getAll(_, res) {
  try {
    const response = await Task.getAll()
    res.status(200).json(response)
  } catch (e) {
    res.status(500).end('Internal server error.')
    console.log(e)
  }
}
async function getById(req, res) {
  try {
    const response = await Task.getById(req.params.id)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).end('Not Found.')
    }
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}

async function add(req, res) {
  const task = {
    title: req.body.title,
    desc: req.body.desc,
    checked: req.body.checked
  }
  checkValues(task, res)

  try {
    const response = await Task.add(task)
    res.status(200).json(response)
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}
async function update(req, res) {
  const task = {
    id: req.params.id,
    title: req.body.title,
    desc: req.body.desc,
    checked: req.body.checked
  }
  const old =  await Task.getById(task.id)
  if (old) {
    checkValues(task, res)
  
    try {
      const response = await Task.update(task)
      res.status(200).json(response)
    } catch (e) {
      res.status(500).end('Internal Server Error.')
      console.log(e)
    }
  } else {
    res.status(404).end('Not Found.')
  }
}
async function del(req, res) {
  try {
    const old =  await Task.getById(req.params.id)
    if (old) {
      const response = await Task.del(req.params.id)
      res.status(200).json(response)
    } else {
      res.status(404).end('Not Found.')
    }
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}

export { getAll, getById, add, update, del }
