import express from 'express'
import {randomUUID} from 'crypto'
const app = express()

import url from 'url'
import path from 'path'
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, 'public')))


/*


req.session <---- contain data specific to client making that request
session store (where req.session comes from) is on server!!!!!!

on the client... u only have one thing: session id
* retrieve info from the session store
*


Browser                               Server
|      | ----- sessionid=123---->  { 123: {shoppingCart: [...], theme="dark"}, 3452}
|      |                                   |
|______|                                   |____req.session



to pass around session id, use Cookies: specifically 2 headers 

1. Set-Cookie (response)
  * multiple headers in response
  * include options
    * Secure: only send over https
    * HttpOnly: don't allow 3rd js to read
    * SameSite: when to send to cookies if going to different site
2. Cookie (request)
  * just cookie name and value in single header (even if multi cookies)
  GET / HTTP/1.1
  Cookie: foo=bar;sid=123123


2 middleware to do this!

* parse cookies (gives us req.cookies)
* session management (gives us req.session)

*/
app.set('view engine', 'hbs')

const sessionStore = {}

const cookieParser = (req, res, next) => {
  // make req.cookies here!
  req.cookies = {}
  const s = req.headers.cookie // gimme the cookie header
  // s = "foo=bar; baz=qux"
  // if we got cookies, put them into req.cookies
  if(s) {
    req.cookies = s.split(';').reduce((cookies, pair) => {
      // each pair is foo=bar
      const [name, val] = pair.trim().split('=')
      cookies[name] = val
      return cookies
    }, {})
  }
  next()
}
const logger = (req, res, next) => {
  console.log(req.method, req.path, req.cookies)
  next()
}

const mySessions = (req, res, next) => {
  if(req.cookies.sid && Object.hasOwn(sessionStore, req.cookies.sid)) {
    req.session = sessionStore[req.cookies.sid] 
  } else {
    const sid = randomUUID()
    // init session store
    sessionStore[sid] = {}
    req.session = sessionStore[sid]
    res.append('Set-Cookie', 'sid=' + sid + ';HttpOnly')

  }
  // if sid included in cookies... and sid is in session store
  // set req.session to what's in sessionStore
  // otherwise
  // regen session
  // send new session id to client
  // init session store for this id to blank
  // set req.session to session store
  next()

}
// must npm install express-session
import session from 'express-session'

const sessionOptions = { 
    secret: 'secret for signing session id', 
    saveUninitialized: false, 
    resave: false 
}
app.use(session(sessionOptions))

// u can use your own backend (in memory.... or an actual database)
// define ur own session id generator
// define cookie name, etc.




app.use(express.urlencoded({ extended: false }))
// gives us req.body

// app.use(cookieParser)
// we made this, this gives us req.cookies
// app.use(mySessions)
// we made this, req.session

app.use(logger)

app.get('/makeCookies', (req, res) => {
  res.append('Set-Cookie', 'foo=bar')
  res.send('made some cookies!')
})

app.post('/', (req, res) => {
  req.session.urName = req.body.urName
  res.redirect('/')
})

app.get('/', (req, res) => {
  res.render('index', {urName: req.session.urName})
})



app.listen(3000)









// class WordLengthFilter {


// }
// const wlf = new WordLengthFilter()

// wlf.prototype =/= the prototype of wlf

// .prototype prop exists on functions (also classes)


// respond to a connection
sock.on('data', (data) => {
  // respond to http request being sent
  readFile('someFile.css', (err, fileData) => {
    sock.write('HTTP/1.1 200 OK\r\n')
    sock.write('Content-Type: text/css\r\n\r\n')
    sock.write(fileData)
  })
})





















