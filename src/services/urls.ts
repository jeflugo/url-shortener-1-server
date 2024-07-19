import { Request, Response } from 'express'
import Url from '../models/urls'

const getUrls = async () => await Url.find()

const getUrl = async (shortUrl: string) => await Url.findOne({ shortUrl })

const postUrl = async (url: string) => {
	const shortUrl = Math.random().toString(36).substring(2, 5)
	const newUrlData = {
		url,
		shortUrl,
	}

	const urlExist = await Url.findOne({ url })

	if (urlExist) return urlExist

	return await Url.create(newUrlData)
}

export default { getUrls, getUrl, postUrl }
