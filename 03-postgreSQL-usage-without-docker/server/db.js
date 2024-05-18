const Pool = require('pg').Pool

const pool = new Pool({
	user: 'postgres', // имя пользователя для подключения к БД
	password: 'root', // пароль пользователя для подключения к БД (указывался при установке СУБД)
	host: 'localhost', // имя хоста для подключения к БД
	database: 'test', // название базы данных
	port: 5432 // порт для подключения к БД
})

module.exports = pool
