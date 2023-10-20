import mongoose from 'mongoose'
import { config } from 'dotenv' // reads in .env file
// places those variables in your environment
// proccess.env

// REMEMBER .gitignore your .env file!!!!
config()

console.log(process.env.DSN)

// connect
mongoose.connect(process.env.DSN)

const SnakeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  length: Number
})

mongoose.model('Snake', SnakeSchema)
const Snake = mongoose.model('Snake') // collection name will be lowercase plural

/*
const s = new Snake({name: 'william snakespeare', length: 2, foo: 'bar'})
const result = await s.save()
console.log(result)
console.log('we saved it')
*/

const snakes = await Snake.find({length: 2})
console.log(snakes)


users
{_id: 123, username: jversoza, images: [1, 4, 9]}



images
{_id: 4, path: /chug.png}





// create schema

// crud: create / insert, read / find, update, delete / remove
//
//
//
//
//
//
