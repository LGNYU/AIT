/*
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/test');

const SnakeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  length: {type: Number, required: true}
})

mongoose.model('Snake', SnakeSchema)

const Snake = mongoose.model('Snake')

const snakes = await Snake.find({})
console.log(snakes)
*/


/*
try {
  const s = new Snake({name: 'hissy elliott', length: 1, foo: 'bar'})
  const saved = await s.save()
console.log(saved)
} catch (e) {
  // console.log(e)
  console.log('error', e)
}
*/
import { config } from 'dotenv'
config()
console.log(process.env.DSN)

import { MongoClient } from 'mongodb'
const client = new MongoClient(process.env.DSN ?? 'mongodb://localhost/foo')

const db = client.db('test')
const snakesCol = db.collection('snakes')
const snakes = await snakesCol.find({name: /hiss/, length: {$gt: 50}})
for await(const s of snakes) {
  console.log(s)
}

