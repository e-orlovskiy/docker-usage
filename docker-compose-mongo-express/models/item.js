const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now,
		required: false
	}
})

module.exports = Item = mongoose.model('item', itemSchema)
