function f(req, res, next) {
  // 1. add a new prop to req, res (req.session, req.cookie)
  // 2. conditionally send back a response
  //      * if this path exists in public folder, res.sendFile
  //      * if this request is missing this header, res.status(400).send
  // 3. sideeffect
  //      * logging


}
