import {MongoClient} from 'mongodb'
// 'mongodb://username:password@localhost'
// don't hard code this, put in config
// or use .env instead
const client = new MongoClient('mongodb://localhost')
const db = client.db('class11-fa23')
const snakesCol = db.collection('snakes')
const s = await snakesCol.findOne()
console.log(s)
