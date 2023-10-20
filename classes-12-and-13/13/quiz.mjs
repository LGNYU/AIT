

{
  /foo: /bar
}

// place io here if we want to reduce the number of file reads
readFile

// otherwise, every req will have to read file
// restart ur server
// u have to manage callback

readFile(redirects.json, (err, data) => {

  app.listen(...)
})

const f = (req, res, next) => {
  readFile('redirects.json', 'utf-8',(err, data) => {
    if(err) {
      // res.status(500).send('server error')
      // OR next()
    } else {
      const redirects = JSON.parse(data + '')
      if(Object.hasOwn(redirects, req.path)) {
        res.redirect(redirects[req.path])
      } else {
        next()
      }
    }

  })

}







