import express from 'express';
const app = express();
// req.query is an empty object available to your route
// if something in qs

// enables templating w/ handlebars
app.set('view engine', 'hbs')

const food = [
  {name: 'ramen', sodium: 1000},
  {name: 'burger', sodium: 500},
  {name: 'pizza', sodium: 800}
]
// body parsing middleware
// http request body in x-www-form-urlencoded format (n1=v1&n2=v2)
// puts it into req.body
app.use(express.urlencoded({extended: false}))

const sessionStore = {}

// 1. parse cookies
// cookie parsing middlware (this exists, but we'll make our own)
// dump into req.cookies
app.use((req, res, next) => {
  const s = req.headers.cookie
  req.cookies = {}
  if(s) {
    req.cookies = s.split(';').reduce((cookies, pair) => {
      const [name, val] = pair.trim().split('=')
      cookies[name] = val
      return cookies
    }, {})
  }
  next()
})


// 2. manage session

// session management middleware
// req.session to store data associated with known client
import {randomUUID} from 'crypto'

app.use((req, res, next) => {
  // did we receive a sid in our cookies
  // AND that sid exists in our store
  // set req.session to what's stored in sessionStore
  if(req.cookies.sid && Object.hasOwn(sessionStore, req.cookies.sid)) {
    req.session = sessionStore[req.cookies.sid]
  } else {
    const sid = randomUUID()
    sessionStore[sid] = {}
    req.session = sessionStore[sid]
    res.append('Set-Cookie', 'sid=' + sid)
  }
  next()
})

// task 1 show food in a list
app.use((req, res, next) => {
  console.log('got req.query', req.query)
  console.log('got req.body', req.body)
  console.log('UR cookies R', req.cookies)
  next()
})

// we use this to get req.body
// app.use(express.urlencoded({extended: false}))
app.post('/', (req, res) => {
  const newFood = {name: req.body.foodName, sodium: req.body.foodSodium}
  food.push(newFood)
  res.render('index', {food})
  // res.redirect('/')
})

app.post('/hello', (req, res) => {
  req.session.name = req.body.name
  res.redirect('/hello');
});

app.get('/hello', (req, res) => {
  res.render('hello', {name: req.session.name});
});




app.get('/', (req, res) => {
  let filteredFood = food
  if(req.query.maxSalt) {
    filteredFood = food.filter(f => f.sodium < +req.query.maxSalt)
  }
  // name of template (in views director) sans ext
  // context object, keys are var names
  // if missing u have no variables
  res.render('index', {food: filteredFood})
});
app.get('/peek', (req, res) => {
  res.send('<script>alert(document.cookie)</script>');
});

app.get('/makeCookies', (req, res) => {
  res.append('Set-Cookie', 'sid=123;HttpOnly')
  res.append('Set-Cookie', 'foo=bar')
  res.send('made u some cookies')
});







app.listen(3000)





