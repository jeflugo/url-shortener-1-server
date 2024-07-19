import { Request, Response } from 'express'
import service from '../services/urls'

const getUrls = async (req: Request, res: Response) => {
	try {
		const urls = await service.getUrls()
		return res.json(urls)
	} catch (error) {
		res.status(500).json('GET_URLS_ERROR')
	}
}

const getUrl = async (req: Request, res: Response) => {
	try {
		const url = await service.getUrl(req.params.id)
		res.json(url)
	} catch (error) {
		res.status(500).json('GET_URL_ERROR')
	}
}

const postUrl = async (req: Request, res: Response) => {
	try {
		const newUrl = await service.postUrl(req.body.url)
		res.json(newUrl)
	} catch (error) {
		res.status(500).json('POST_URL_ERROR')
	}
}

export { getUrls, getUrl, postUrl }
