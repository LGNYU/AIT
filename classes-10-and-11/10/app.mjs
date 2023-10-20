import express from 'express';
const app = express();



/*
static file serving middleware

if req.path in dir:
  fs.readFile(req.path, (err, data) => {
    if(err) {
      res.status(500).send(....)
    } else {
      res.send(data)
    }
  }) 
else:
  next()
  */

/*
app.use((req, res, next) => {
  if(req.method === 'POST')  {
    res.status(400).send('site does not support that request method')
  } else {
    next()
  }
})
*/
import {randomUUID} from 'crypto'

import session from 'express-session';

const sessionOptions = { 
    secret: 'secret for signing session id', 
    saveUninitialized: false, 
    resave: false 
};
app.use(session(sessionOptions));

// by default in memory store (mainly for testing / development)
// plug in to some session store (specify in config)
// what function to use for session id generation




app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false }));

const sessionStore = {}
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {

})
/*
 * add props to req and res
 *  * req.body (express.urlencoded({}))
 *  * req.cookies
 *  * req.session
 *  * res.append ... to add to header
 * pre-emptively send back a response
 *  * express static... if file exists in public, send that file as response before
 *  * going to next middleware (or route handler)
 * induce some sort of side effect (logging)
 *  * logging
 */


// middleware to add prop to req object:
// req.cookies
// this will give object style access to name value pairs
// for sent cookies
// Cookie: foo=bar;baz=qux
// req.cookies // {foo: bar, baz: qux}
const parseCookies = (req, res, next) => {
  // look for Cookie header in HTTP request
  req.cookies = {}
  const s = req.headers.cookie
  if(s) {
    req.cookies = s.split(';').reduce((cookies, pair) => {
      const [name, val] = pair.trim().split('=')
      cookies[name] = val
      return cookies
    }, {})
  }
  next()
}


const mySessions = (req, res, next) => {
  // did browser send sid? and does that sid exist in our session store
  if(req.cookies.sid && Object.hasOwn(sessionStore, req.cookies.sid)) {
    // YES??? req.session to the data that's associate with that sid
    req.session = sessionStore[req.cookies.sid]
  } else {
    // NO??? browser sent invalid sid or never sent sid at all
    // generate new sid
    // initilize storage for it
    // set cookie on client
    const sid = randomUUID()
    sessionStore[sid] = {}
    // req.session -----> sessionStore[sid]
    req.session = sessionStore[sid]
    res.append('Set-Cookie', 'sid=' + sid + ';HttpOnly')
  }
  next()
}
// if cookie header has sid and sid exists in session store as key
//   set req.session to data for that session id
// else
//    sid is invalid, or no sid was sent
//    generate new sid
//    start a fresh blank object in session store with that sid as key
//    set sid as cookie on client

// make sure this is first middleware because mySessions relies on req.cookies
app.use(parseCookies)

app.use(mySessions)

app.get('/foo', (req, res) => {
  res.send('foo');
});

app.post('/', (req, res) => {
  req.session.name = req.body.name
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.render('index', {name: req.session.name});
});


app.listen(3000);
