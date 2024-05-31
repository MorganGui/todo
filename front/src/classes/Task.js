import asyncFetch from '../assets/functions/fetch.request.js'

const url = 'http://localhost:5000/api/v1/task'

function resToInstance(res) {
  return res ? new Task(res.id, res.title, res.desc, res.checked) : null
}

export default class Task {
  constructor(id, title, desc, checked = false) {
    this.id = id
    this.title = title
    this.desc = desc
    this.checked = checked ? true : false
  }

  static async getAll() {
    const res = await asyncFetch(url, 'GET')
    return res.map(r => resToInstance(r))
  }

  async save() {
    if (this.id) {
      const res = await asyncFetch(url + '/' + this.id, 'PUT', this)
      return res
    } else {
      const res = await asyncFetch(url, 'POST', this)
      return res
    }
  }

  async delete() {
    const res = await asyncFetch(url + '/' + this.id, 'DELETE')
    return res
  }
}