import { Router } from 'express'
import {
	getUrl,
	getUrls,
	postUrl,
} from '../controllers/urls'

const router = Router()

router.route('/').get(getUrls).post(postUrl)
router.route('/:id').get(getUrl)

export default router
