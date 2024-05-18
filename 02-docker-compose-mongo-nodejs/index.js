const express = require('express')
const mongoose = require('mongoose')
const Item = require('./models/item')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

mongoose
	.connect('mongodb://mongo:27017/docker-node-mongo', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch(err => {
		console.log('mongo connection error', err)
	})

app.get('/', async (req, res) => {
	try {
		const items = await Item.find()
		console.log(items)
		res.send(items)
	} catch (err) {
		console.error('error fetching items', err)
		res.status(500).send('Internal server error')
	}
})

app.post('/items/add', async (req, res) => {
	console.log(req.body)
	try {
		const { name } = req.body
		if (!name) {
			return res.status(400).send('name is required')
		}
		const newItem = new Item({ name })
		await newItem.save()
		res.send(`item added ${name}`)
	} catch (err) {
		console.error('Error adding item', err)
		res.status(500).send('Internal server error')
	}
})

const port = 3000

app.listen(port, () => console.log('server started on port', port))
