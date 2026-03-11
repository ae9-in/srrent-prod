import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name:            { type: String, required: true, trim: true },
  shopName:        { type: String, required: true, trim: true },
  phone:           { type: String, required: true, trim: true },
  email:           { type: String, trim: true, lowercase: true },
  city:            { type: String, required: true, trim: true },
  productInterest: { type: String, required: true },
  quantity:        { type: String, trim: true },
  message:         { type: String, trim: true },
  status: {
    type:    String,
    enum:    ['new', 'contacted', 'converted', 'closed'],
    default: 'new',
  },
}, { timestamps: true })

export default mongoose.model('Contact', contactSchema)
