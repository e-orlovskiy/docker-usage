const db = require('../db')

class PostController {
	async getAllPosts(req, res) {
		// /posts?id=1
		const { id } = req.query
		const posts = await db.query('SELECT * from post where person_id = $1', [
			id
		])
		res.send({ message: 'all posts', posts: posts.rows })
	}

	async createPost(req, res) {
		const { title, content, personId } = req.body
		const newPost = await db.query(
			'INSERT INTO post(title, content, person_id) values ($1, $2, $3) RETURNING *',
			[title, content, personId]
		)
		res.send({ message: 'Post created', newPost: newPost.rows[0] })
	}
}

module.exports = new PostController()
