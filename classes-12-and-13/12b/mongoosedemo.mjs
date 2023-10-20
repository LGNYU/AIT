import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

console.log(process.env.DSN)

mongoose.connect(process.env.DSN);

// define the fields and types of those fields for all docs in our collection
// do this by making a schema
const CatSchema = new mongoose.Schema({
  name: {type: String, required: true},
  lives: Number
})

// let mongoose know that this schema is bound to a constructor and collection
mongoose.model('Cat', CatSchema) // lowercase and pluralize
const Cat = mongoose.model('Cat') // we get constructor

const cats = await Cat.find({})
console.log(cats)
/*
const c = new Cat({
  name: 'kitty purry',
  lives: 10
})

const savedCat = await c.save()
console.log(savedCat)
*/















