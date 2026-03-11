import mongoose from 'mongoose'
import env from './env.js'

export const dbState = {
  connected: false,
  mode: env.ALLOW_MEMORY_FALLBACK ? 'memory' : 'mongo',
  lastError: null,
}

export async function connectDatabase() {
  if (!env.MONGO_URI) {
    dbState.lastError = 'MONGO_URI is not configured.'
    dbState.mode = 'memory'
    return dbState
  }

  try {
    await mongoose.connect(env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })

    dbState.connected = true
    dbState.mode = 'mongo'
    dbState.lastError = null
    return dbState
  } catch (error) {
    dbState.connected = false
    dbState.lastError = error.message

    if (!env.ALLOW_MEMORY_FALLBACK) {
      throw error
    }

    dbState.mode = 'memory'
    return dbState
  }
}
