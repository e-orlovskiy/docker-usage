const express = require('express')
const bodyParser = require('body-parser')
const personRouter = require('./router/person.router')
const postRouter = require('./router/post.router')

// создание экземпляра приложения express
const app = express()

// парсинг JSON-запросов
app.use(bodyParser.json())

// роуты
app.use('/api', personRouter)
app.use('/api', postRouter)

// запуск сервера
const PORT = 3000
app.listen(PORT, () => console.log('Server started on port ' + PORT))
