import express from 'express';
const app = express();

app.set('view engine', 'hbs')
app.use((req, res, next) => {
  console.log(req.method, req.path, req.query)
  next()
})

app.use(express.urlencoded({extended: false}))
// req.body appears.... parsed http request body (if it's in x-www-form-urlencoded format)

const sessionStore = {}
// req.session <--- contains session data abt returning client


// parse the cookie header
// add new prop to request obj
// that is parsed cookie req.cookies .... {sid:123123, color: 'blue'}
app.use((req, res, next) => {
  req.cookies = {}
  const s = req.headers.cookie
  if(s) {
    req.cookies = s.split(';').reduce((cookies, pair) => {
      const [name, value] = pair.trim().split('=')
      cookies[name] = value
      return cookies
    }, {})
  }
  console.log(s)
  console.log(req.cookies)

  next()
})

import {randomUUID} from 'crypto'

app.use((req, res, next) => {
  // did we get a session id, and is it in the session store
  if(req.cookies.sid && Object.hasOwn(sessionStore, req.cookies.sid)) {
    req.session = sessionStore[req.cookies.sid]
  } else {
    const sid = randomUUID()
    sessionStore[sid] = {}
    req.session = sessionStore[sid]
    res.append('Set-Cookie', `sid=${sid}`)
  }
  next()

})


// data store of snakes
const sneks = [
  {name: 'hissy elliott', length: 100},
  {name: 'other snake', length: 77}
]



app.post('/', (req, res) => {
  // add a new snake
  const newSnake = {name: req.body.snakeName, length: req.body.snakeLength}
  sneks.push(newSnake)
  // res.render('index', {sneks}) <--- would be okay if we want to re-render w/ error message
  res.redirect('/')
});


app.get('/makeCookies', (req, res) => {
  res.append('Set-Cookie', 'color=blue')
  res.append('Set-Cookie', 'sid=123123;HttpOnly')
  res.send('u haz cookies');
});


app.get('/peek', (req, res) => {
  res.send('<script>alert(document.cookie)</script>');
});



app.get('/', (req, res) => {
  let filteredSneks = sneks
  if(req.query.minLength) {
    filteredSneks = sneks.filter(s => s.length > parseInt(req.query.minLength))
  }
  res.render('index', {sneks: filteredSneks});
});

/*
// filter by length

[________][FILTER]

* hissy elliott, 100
* other snake, 77


//
[________][FILTER]

* hissy elliott, 100
* other snake, 77

[_______][_____][ADD] 
*/



app.listen(3000);
