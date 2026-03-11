import express from 'express'
import {
  createProduct,
  getProduct,
  listProducts,
  removeProduct,
  updateProduct,
} from '../controllers/productsController.js'

const router = express.Router()

router.get('/', listProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', removeProduct)

export default router
