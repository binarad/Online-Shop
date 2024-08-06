import { DB } from './connect.js'

import express from 'express'

const app = express()
app.use(json())

app.get('/', (res, req) => {
	res.status(200)
	res.send('Hello World from Server')
})

app.get('/api', (res, req) => {})
app.post('/api', (res, req) => {})
app.delete('/api', (res, req) => {})

app.listen(3000, err => {
	if (err) {
		console.log('ERROR: ', err.message)
	}
	console.log('LISTENING ON PORT 3000')
})
