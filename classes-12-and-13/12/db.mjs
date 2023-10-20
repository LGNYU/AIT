import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/mydb');

// this will specify the fields and types in our docs
const PersonSchema = new mongoose.Schema({
  first: String,
  last: String
})
mongoose.model('Person', PersonSchema)
const Person = mongoose.model('Person')

/*
const p = new Person({first: 'foo', last: 'bar'})
const result = await p.save()
console.log(result)
*/

const people = await Person.find()
console.log(people)







/*
import { MongoClient } from 'mongodb'
import { config } from 'dotenv'
// this will add .evn to process.env

config()

console.log(process.env.DSN)
// connect to the database
const client = new MongoClient(process.env.DSN)
const db = client.db('mydb')
const personCol = db.collection('persons')
// above this is setup


const people = await personCol.find({last: 'a'})
for await (const p of people) {
  console.log(p)
}
*/
