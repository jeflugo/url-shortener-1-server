import mongoose, { trusted } from 'mongoose'
import { TUrl } from '../types'

const UrlSchema = new mongoose.Schema<TUrl>(
	{
		url: {
			type: String,
			required: true,
			unique: true,
		},
		shortUrl: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const Url = mongoose.model('urls', UrlSchema)

export default Url
