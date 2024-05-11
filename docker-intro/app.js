const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
	console.log('hello')
})

// app.get('/users', (req, res) => {
// 	try {
// 		const data = fs.readFileSync('./data/users.json')
// 		res.send(data)
// 	} catch (err) {
// 		res.send('error while getting all users', err)
// 	}
// })

// app.get('/users/:id', (req, res) => {
// 	try {
// 		const { id } = req.params
// 		const data = fs.readFileSync('./data/users.json')
// 		const users = JSON.parse(data)
// 		const user = users.USERS.find(user => user.id === Number(id))
// 		res.send(user)
// 	} catch (err) {
// 		res.send('error while getting user by id', err)
// 	}
// })

app.post('/users', (req, res) => {
	const { name, age } = req.body
	const data = fs.readFileSync('./data/users.json')
	const users = JSON.parse(data)
	const newUser = { id: users.USERS.length + 1, name, age: +age }
	users.USERS.push(newUser)
	fs.writeFileSync('./data/users.json', JSON.stringify(users))
	res.send(`User ${JSON.stringify(newUser)} added`)
})

app.listen(3000, () => console.log('Listening on port 3000'))
