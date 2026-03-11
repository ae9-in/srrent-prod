import express from 'express'
import {
  createContact,
  listContacts,
  updateContactStatus,
} from '../controllers/contactController.js'

const router = express.Router()

router.post('/', createContact)
router.get('/', listContacts)
router.patch('/:id/status', updateContactStatus)

export default router
