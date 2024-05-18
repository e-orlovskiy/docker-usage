// CRUD for postgreSQL

const db = require('../db')

class PersonController {
	async createPerson(req, res) {
		const { name, email } = req.body
		// добавить таблицу person пользователя с полями name и email, значения будут браться из массива, который передан вторым параметром RETURNING * - указывает, что функция должна вернуть. В данном случае функция вернёт пользователя, которого мы добавим.
		const newPerson = await db.query(
			'INSERT INTO person(name, email) values ($1, $2) RETURNING *',
			[name, email]
		)
		res.send({ message: 'Person created', newPerson: newPerson.rows[0] })
	}

	async getAllPersons(req, res) {
		// получить все записи из таблицы person, в данном случае получаем весь массив rows
		const persons = await db.query('SELECT * from person')
		res.send({ message: 'all persons', persons: persons.rows })
	}

	async getPerson(req, res) {
		const { id } = req.params
		// получить все данные о пользователе, у которого id равен первому значению массива. В данном случае там id
		const person = await db.query('SELECT * from person where id = $1', [id])
		res.send({ message: 'person', person: person.rows[0] })
	}

	async updatePerson(req, res) {
		const { id } = req.params
		const { name, email } = req.body
		// обновить данные пользователя, у которого id равен первому значению массива. В данном случае там id. Имя и почта будут также браться из массива.
		const person = await db.query(
			'UPDATE person SET name = $1, email = $2 where id = $3 RETURNING *',
			[name, email, id]
		)
		res.send({ message: 'person updated', person: person.rows[0] })
	}

	async deletePerson(req, res) {
		const { id } = req.params
		// удалить пользователя, у которого id равен первому значению массива
		const person = await db.query(
			'DELETE from person where id = $1 RETURNING *',
			[id]
		)
		res.send({ message: 'person deleted' })
	}
}

module.exports = new PersonController()
