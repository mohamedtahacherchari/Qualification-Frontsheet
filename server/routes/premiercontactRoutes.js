import express from 'express'
const router = express.Router()
import {createPremiercontact, deletePremiercontact, getPremiercontactById, getPremiercontacts, updatePremiercontact} from '../controllers/premiercontactController.js'

router.route('/').get(getPremiercontacts).post(createPremiercontact)
router.route('/:id')
.get(getPremiercontactById)
.delete(deletePremiercontact)
.put(updatePremiercontact)
export default router