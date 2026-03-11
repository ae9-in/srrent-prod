import app from './app.js'
import env from './config/env.js'
import { connectDatabase, dbState } from './config/db.js'

async function startServer() {
  try {
    await connectDatabase()

    if (dbState.connected) {
      console.log(`MongoDB connected: ${env.MONGO_URI}`)
    } else if (dbState.mode === 'memory') {
      console.warn(`MongoDB unavailable, using in-memory fallback: ${dbState.lastError}`)
    }

    app.listen(env.PORT, () => {
      console.log(`Server running on http://localhost:${env.PORT}`)
    })
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`)
    process.exit(1)
  }
}

startServer()
