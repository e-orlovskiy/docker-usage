const express = require('express')
const { Pool } = require('pg')

// Настройки подключения к базе данных из переменных окружения
const pool = new Pool({
	user: 'postgres',
	host: 'db',
	database: 'docker_postgres_test_bd',
	password: 'root',
	port: 5432
})

const app = express()
const port = 3000

app.use(express.json())

// Простой маршрут для проверки сервера
app.get('/', (req, res) => {
	res.send('Hello World!')
})

// get test
app.get('/test-query', async (req, res) => {
	try {
		const result = await pool.query('SELECT NOW()')
		res.json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send('Error executing query')
	}
})

// get persons
app.get('/getPersons', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM persons')
		res.json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send('Error executing query')
	}
})

// post person
app.post('/addPerson', async (req, res) => {
	try {
		const { name, email } = req.body
		const result = await pool.query(
			'INSERT INTO persons(name, email) VALUES($1, $2) RETURNING *',
			[name, email]
		)
		res.json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send('Error executing query')
	}
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
