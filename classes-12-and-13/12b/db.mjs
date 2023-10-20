import { MongoClient } from 'mongodb'
const dsn = 'mongodb://localhost' // mongodb://username:password@hostname/dbname

const client = new MongoClient(dsn)
const db = client.db('mydb')
const peopleCol = db.collection('people')
// const person = await peopleCol.findOne()
// const savedResult = await peopleCol.insertOne({foo: 'bar', baz: 'qux'})
// console.log(savedResult)
const people = await peopleCol.find({})
for await (const p of people) {
  console.log(p)
}
 
/*
all ppl have first and last as strings

* directly on the db, tell mongodb to have constraints for ^^^^^
* in the app layer
  * mongoose... same stuff as mongodb module, but also spec fields and their types
*/








