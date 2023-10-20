import { MongoClient } from 'mongodb'

const dsn = 'mongodb://localhost/'
const client = new MongoClient(dsn)
const db = client.db('demo')
const snakesCol = db.collection('snakes')

const s = snakesCol.findOne()
console.log(s)
console.log('done')
