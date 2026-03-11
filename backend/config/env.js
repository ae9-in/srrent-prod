import dotenv from 'dotenv'

dotenv.config()

const splitCsv = (value, fallback = []) =>
  value
    ? value.split(',').map((item) => item.trim()).filter(Boolean)
    : fallback

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT || 5000),
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/srr-pooja-works',
  CLIENT_URLS: splitCsv(process.env.CLIENT_URLS, ['http://localhost:5173']),
  ALLOW_MEMORY_FALLBACK: process.env.ALLOW_MEMORY_FALLBACK !== 'false',
}

export default env
