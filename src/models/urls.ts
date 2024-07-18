import mongoose, { trusted } from 'mongoose'
import { TUrl } from '../types'

const UrlSchema = new mongoose.Schema<TUrl>(
	{
		text: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const Url = mongoose.model('urls', UrlSchema)

export default Url
