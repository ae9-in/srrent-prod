import app from '../backend/app.js'
import { connectDatabase } from '../backend/config/db.js'

let connectPromise

async function ensureDatabase() {
  if (!connectPromise) {
    connectPromise = connectDatabase().catch((error) => {
      connectPromise = null
      throw error
    })
  }

  return connectPromise
}

export default async function handler(req, res) {
  await ensureDatabase()
  return app(req, res)
}
