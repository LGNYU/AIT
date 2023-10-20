// MongoClient
// insertOne
// find
// findOne

/*
mongoose

* connect to mongodb server
* queries (find, insertOne, etc.)
  * instead of using methods above, we use object based api
  * instead of insert, create a new instance and call save
Object document mapper (ODM)
* spec'ing fields and the types of fields for every doc in a collection
  * a schema
* map documents to actual objs in our program
*  convenience methods for documents that are related to each other

users:
{
  username: jversoza
  reviews: [234, 98]
}

reviews:
{
  _id: 234
  course: 467

}
user.populate()

*/
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/mydb')

const CatSchema = new mongoose.Schema({
  name: {type: String, required: true},
  lives: Number
})

mongoose.model('Cat', CatSchema)

const Cat = mongoose.model('Cat')
/*
const c = await Cat.findOne()
console.log(c)
*/
const c = new Cat({name: 'bar', lives: 3, food: 'fish'})
const savedCat = await c.save()
console.log(savedCat)





// connect
// create a schema
// find / insert, etc.


















