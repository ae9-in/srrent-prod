import { dbState } from '../config/db.js'

export function getHealth(_req, res) {
  res.json({
    success: true,
    status: 'ok',
    database: {
      connected: dbState.connected,
      mode: dbState.mode,
      lastError: dbState.lastError,
    },
    timestamp: new Date().toISOString(),
  })
}
