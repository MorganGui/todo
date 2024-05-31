import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export default class db {
  static conn

  static async connect() {
    try {
      this.conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      })
      console.log('Successful database connection.')
    } catch (e) {
      console.log('Cannot connect to database.')
      console.log(e)
    }
  }
}
