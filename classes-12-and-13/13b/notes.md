# AGENDA

0. exam topics
    * strict mode
    * everything from first class javascript basics -- up to previous class (db, mongodb / MongoClient, mongoose, promises)
        * javascript basics: types, objects / arrays, functions, hoisting, const, let
        * higher order functions (creating them... and using built in ones, like map/reduce)
        * classes / objects / prototype chain
        * values of this
        * net module
        * http
            * request
            * response
            * headers
        * layered http on top of net module
        * express: 
            * routing
            * templating
            * built in objects: app, req, res
            * middleware
                * making our own
                * using pre-built middleware: body parsing (express.urlencoded), static file serving (express.static)... express.json,  express.session
            * form handling / GET and POST via express
            * NOT ON EXAM: routers as objects, path parameters, regex
                * classes prior to es2015 (without the class keyword)... not on exam
        * sessions, working with cookies 
        * below are questions that would be mc, short answer, fib, output?
        * database overview
        * mongodb cli client
        * promises
        * MongoClient
        * mongoose
    * coding questions will not have database material / promises
    * mongoose, promises, etc. are fill in the blank, what's the output, multiple choice
    * reference:
        * 8.5 x 11
        * double sided
        * written or typed
        * reference from quiz will be provided
    * logistics
        * 65 minutes long
        * in class, paper based, closed book / laptop (except for your reference)
        * try to get in at start of class
    * 2 or 3 coding questions
        * 2 smol + one large
1. x quiz 2 discussion / solutions
2. mongoose / dotenv
    * x 12 x promises
    * x 6 x await + readfile
3. u choose remaining topics
    * oo x this
    * 8 x session handling
    * 6 x constructor vs object vs class name
    * 4 x inheritance vs prototypes


because readFile is cb based... how do you make sure data is loaded before server starts

readFile(path, (err, data) => {
    app.listen()
})

* file is read only once
* server must be restarted to reflect changes in that file


within route handler
====
* also... within route handler.... only send response when you've read the file
* file will be read on every request to this path
    * performance not good
    * if file changes tho... server does not have to be restarted in order for new file / redirects to show

// readFile
how to check prop in obj




someObject.hasOwnProperty()
obj[prop] !== undefined // what if prop is intentionally set to undefined
Object.hasOwn() // only checks the actual obj
prop in obj // up the prototype chain

app.get('/directory', (res, res) => {
    readFile('directory.json', (err, data) => {
        const redirectMap = JSON.parse(data)
        const k = req.query.netid
        if(Object.hasOwn(redirectMap, k)) {
            res.send(redirectMap[k])
        } else {
            res.send('no netid')
        }
    })
})















