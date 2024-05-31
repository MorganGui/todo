import db from '../bdd/connect.js'

function resToInstance(res) {
  return res ? new Task(res.id, res.title, res.desc, res.checked) : null
}

export default class Task {
  constructor(id, title, desc, checked) {
    this.id = id
    this.title = title
    this.desc = desc
    this.checked = checked
  }

  static async getAll() {
    const [results] = await db.conn.query(
      'SELECT * FROM `task`'
    )
    return results.map(r => resToInstance(r))
  }
  static async getById(id) {
    const [results] = await db.conn.query(
      'SELECT * FROM `task` where `id` = ?',
      [id]
    )
    return resToInstance(results[0])
  }

  static async add({ title, desc, checked }) {
    const [results] = await db.conn.query(
      'INSERT INTO `task` (`title`, `desc`, `checked`) value (?, ?, ?)',
      [title, desc, checked]
    )
    return results
  }
  static async update({ id, title, desc, checked }) {
    const [results] = await db.conn.query(
      'UPDATE `task` set `title`=?, `desc`=?, `checked`=? where `id`=?',
      [title, desc, checked, id]
    )
    return results
  }
  static async del(id) {
    const [results] = await db.conn.query(
      'DELETE FROM `task` where id=?',
      [id]
    )
    return results
  }
}
