import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  category:     { type: String, required: true, enum: ['Incense', 'Accessories', 'Essentials', 'Lamps', 'Decoration'] },
  price:        { type: String, required: true },
  bulkPrice:    { type: String, required: true },
  description:  { type: String, required: true, trim: true },
  image:        { type: String, trim: true },
  emoji:        { type: String, default: '🪔' },
  tag:          { type: String, trim: true },
  bg:           { type: String, default: '#fef3c7' },
  inStock:      { type: Boolean, default: true },
  minimumOrder: { type: Number, default: 10 },
}, { timestamps: true })

export default mongoose.model('Product', productSchema)
